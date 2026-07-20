#!/usr/bin/env bash
# Export the Phase 0 ebook production draft to PDF.
#
# Prerequisites: Python 3 and Google Chrome (or Chromium).
# Output: docs/design/production/phase-0-ebook-production-draft.pdf
#
# Run from any directory — the script resolves the repo root from its own location.
# Does NOT copy output to public/downloads/; that step requires manual approval.

set -euo pipefail

# ------------------------------------------------------------------ #
# Resolve repository root from script location                         #
# ------------------------------------------------------------------ #

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

SOURCE_HTML_REL="docs/design/production/phase-0-ebook.html"
OUTPUT_PDF="$REPO_ROOT/docs/design/production/phase-0-ebook-production-draft.pdf"
TEMP_PDF="$REPO_ROOT/docs/design/production/.export-tmp-$$.pdf"
SERVER_LOG="$(mktemp /tmp/ebook-server-log.XXXXXX)"

PORT=9898
SERVER_PID=""

# ------------------------------------------------------------------ #
# Cleanup: always stop server and remove temp files                    #
# ------------------------------------------------------------------ #

cleanup() {
  if [[ -n "$SERVER_PID" ]] && kill -0 "$SERVER_PID" 2>/dev/null; then
    kill "$SERVER_PID" 2>/dev/null || true
    echo "Local HTTP server stopped."
  fi
  rm -f "$TEMP_PDF" "$SERVER_LOG"
}
trap cleanup EXIT INT TERM

# ------------------------------------------------------------------ #
# Locate Chrome                                                        #
# ------------------------------------------------------------------ #

find_chrome() {
  local candidates=(
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    "/Applications/Chromium.app/Contents/MacOS/Chromium"
    "/usr/bin/google-chrome"
    "/usr/bin/google-chrome-stable"
    "/usr/bin/chromium"
    "/usr/bin/chromium-browser"
  )
  for candidate in "${candidates[@]}"; do
    if [[ -x "$candidate" ]]; then
      printf '%s' "$candidate"
      return 0
    fi
  done
  for name in google-chrome google-chrome-stable chromium chromium-browser; do
    if command -v "$name" &>/dev/null; then
      printf '%s' "$(command -v "$name")"
      return 0
    fi
  done
  return 1
}

CHROME=$(find_chrome) || {
  echo "ERROR: Google Chrome or Chromium not found."
  echo "Install Chrome or Chromium and re-run this script."
  exit 1
}

echo "Using browser: $CHROME"

# ------------------------------------------------------------------ #
# Verify source file                                                   #
# ------------------------------------------------------------------ #

if [[ ! -f "$REPO_ROOT/$SOURCE_HTML_REL" ]]; then
  echo "ERROR: $REPO_ROOT/$SOURCE_HTML_REL not found."
  exit 1
fi

# ------------------------------------------------------------------ #
# Check port availability                                              #
# ------------------------------------------------------------------ #

if lsof -i "tcp:${PORT}" -sTCP:LISTEN &>/dev/null 2>&1; then
  echo "ERROR: Port ${PORT} is already in use. Stop the existing process and retry."
  exit 1
fi

# ------------------------------------------------------------------ #
# Start local HTTP server bound to 127.0.0.1                          #
# ------------------------------------------------------------------ #

echo "Starting HTTP server on 127.0.0.1:${PORT} serving $REPO_ROOT ..."
cd "$REPO_ROOT"
python3 -m http.server "$PORT" --bind 127.0.0.1 >"$SERVER_LOG" 2>&1 &
SERVER_PID=$!

# ------------------------------------------------------------------ #
# Wait for server readiness                                            #
# ------------------------------------------------------------------ #

TARGET_URL="http://127.0.0.1:${PORT}/${SOURCE_HTML_REL}"

echo "Waiting for server to be ready..."
MAX_ATTEMPTS=30
attempt=0
ready=0
while [[ $attempt -lt $MAX_ATTEMPTS ]]; do
  if curl --fail --silent --show-error --max-time 2 "$TARGET_URL" | grep -q "Aprende ingl" 2>/dev/null; then
    ready=1
    break
  fi
  attempt=$((attempt + 1))
  sleep 1
done

if [[ $ready -eq 0 ]]; then
  echo ""
  echo "ERROR: Server did not become ready after $MAX_ATTEMPTS seconds."
  echo "Server log:"
  cat "$SERVER_LOG"
  exit 1
fi

echo "Server ready. Verified: $TARGET_URL returns expected ebook content."

# ------------------------------------------------------------------ #
# Manual server test (inline confirmation)                             #
# ------------------------------------------------------------------ #

echo "Manual server test..."
if ! curl --fail --silent --show-error "$TARGET_URL" | grep -q "Aprende ingl"; then
  echo "ERROR: Manual server test failed — expected title not found in served HTML."
  exit 1
fi
echo "Manual server test passed."

# ------------------------------------------------------------------ #
# Structural content check: TR-03 full repeat instruction              #
# ------------------------------------------------------------------ #

TR03_REQUIRED="decirlo sin mirar la guía"
if ! grep -qF "$TR03_REQUIRED" "$REPO_ROOT/$SOURCE_HTML_REL"; then
  echo "ERROR: TR-03 repeat instruction is incomplete in HTML source."
  echo "  Required phrase: \"$TR03_REQUIRED\""
  echo "  Check page 17 in $SOURCE_HTML_REL."
  exit 1
fi
echo "TR-03 structural check: PASSED (full repeat instruction present)"

# ------------------------------------------------------------------ #
# Export to temporary PDF                                              #
# ------------------------------------------------------------------ #

echo "Exporting PDF to temp path: $TEMP_PDF"

# Detect headless mode: newer Chrome (>= 112) uses --headless=new
CHROME_VERSION=$("$CHROME" --version 2>/dev/null | grep -oE '[0-9]+\.[0-9]+' | head -1 | cut -d. -f1 || echo "0")
if [[ "$CHROME_VERSION" -ge 112 ]]; then
  HEADLESS_FLAG="--headless=new"
else
  HEADLESS_FLAG="--headless"
fi

"$CHROME" \
  "$HEADLESS_FLAG" \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=10000 \
  --print-to-pdf="$TEMP_PDF" \
  "$TARGET_URL"

# ------------------------------------------------------------------ #
# Post-export validation                                               #
# ------------------------------------------------------------------ #

echo ""
echo "Validating exported PDF..."

# 1. File exists and is non-empty
if [[ ! -f "$TEMP_PDF" ]]; then
  echo "ERROR: Chrome did not produce a PDF at $TEMP_PDF."
  exit 1
fi

TEMP_SIZE=$(wc -c < "$TEMP_PDF" | tr -d ' ')
if [[ "$TEMP_SIZE" -lt 50000 ]]; then
  echo "ERROR: PDF is suspiciously small ($TEMP_SIZE bytes). Export likely failed."
  exit 1
fi

echo "File exists: $TEMP_PDF ($TEMP_SIZE bytes)"

# 2. Confirm it starts with the PDF header
PDF_HEADER=$(head -c 4 "$TEMP_PDF" 2>/dev/null | tr -d '\n')
if [[ "$PDF_HEADER" != "%PDF" ]]; then
  echo "ERROR: File does not start with %PDF — not a valid PDF."
  exit 1
fi
echo "Valid PDF header confirmed."

# 3. Validate content using Python stdlib
#
# Chrome PDFs encode text as CIDFont with custom glyph mappings, so naive
# string search in raw or decompressed streams does not find readable text.
# We validate using:
#   a) Absence of network-error phrases in raw bytes
#   b) PDF page count (from /Type /Page objects)
#   c) PDF title from metadata (stored as UTF-16BE hex — decodable without libraries)
#   d) File size threshold (error pages are typically < 100 KB; full ebook ~1 MB)
#   e) Presence of brand colors in shading functions (cover gradient uses exact brand hex)

python3 - "$TEMP_PDF" <<'PYEOF'
import sys, re, codecs

pdf_path = sys.argv[1]
with open(pdf_path, 'rb') as f:
    data = f.read()

failed = False

# --- a) Network-error phrase check -------------------------------------------
error_phrases = [
    b'ERR_CONNECTION_REFUSED',
    b'No connection',
    b'No hay conexi',
    b'This site can',
    b'net::ERR',
]
for phrase in error_phrases:
    if phrase.lower() in data.lower():
        print(f'VALIDATION FAILED — network-error phrase found: "{phrase.decode()}"')
        failed = True

if not failed:
    print('Network-error check: PASSED')

# --- b) Page count -----------------------------------------------------------
# Chrome writes /Type /Page (singular) for each page object.
pages = re.findall(rb'/Type\s*/Page[^s]', data)
page_count = len(pages)
print(f'Page count: {page_count}')
MIN_PAGES = 18
MAX_PAGES = 25
if page_count < MIN_PAGES:
    print(f'VALIDATION FAILED — expected >= {MIN_PAGES} pages, found {page_count}.')
    failed = True
elif page_count > MAX_PAGES:
    print(f'VALIDATION FAILED — expected <= {MAX_PAGES} pages, found {page_count}. Layout may have broken.')
    failed = True
elif not (21 <= page_count <= 23):
    print(f'WARNING — expected 21–23 pages (justified range after QA corrections), found {page_count}. Verify manually.')
else:
    print(f'Page count: PASSED ({page_count} pages, within expected range 21–23)')

# --- c) Title metadata (UTF-16BE hex) ----------------------------------------
# Chrome stores the HTML <title> as a UTF-16BE hex string in /Title <FEFF...>
title_hex_matches = re.findall(rb'/Title\s*<([0-9A-Fa-f]+)>', data)
decoded_titles = []
for hex_bytes in title_hex_matches:
    try:
        raw = bytes.fromhex(hex_bytes.decode('ascii'))
        # Strip BOM (FEFF) and decode UTF-16BE
        if raw[:2] == b'\xff\xfe':
            title = raw[2:].decode('utf-16-le', errors='replace')
        elif raw[:2] == b'\xfe\xff':
            title = raw[2:].decode('utf-16-be', errors='replace')
        else:
            title = raw.decode('utf-16-be', errors='replace')
        decoded_titles.append(title)
    except Exception:
        pass

expected_title_fragments = [
    'Aprende ingl',
    'canciones',
    'Sing Pronounce',
]
if decoded_titles:
    title = decoded_titles[0]
    print(f'PDF title: {title!r}')
    missing_title = [f for f in expected_title_fragments if f.lower() not in title.lower()]
    if missing_title:
        print(f'VALIDATION FAILED — title missing expected fragments: {missing_title}')
        failed = True
    else:
        print('Title metadata check: PASSED')
else:
    print('WARNING — could not extract PDF title metadata. Verify manually.')

# --- d) File size threshold --------------------------------------------------
size = len(data)
if size < 200_000:
    print(f'VALIDATION FAILED — PDF too small ({size} bytes). Expected >= 200 KB for full ebook.')
    failed = True
else:
    print(f'File size check: PASSED ({size:,} bytes)')

# --- e) Brand colors (cover gradient) ----------------------------------------
# FEE296 yellow = (0.9961, 0.8863, 0.5882); FE9CE1 pink = (0.9961, 0.6118, 0.8824)
yellow_hex = b'FEE296'
pink_hex = b'FE9CE1'
# Chrome encodes gradient stops as decimal RGB floats — check for yellow channel value
# 0xFE/255 = 0.9961, 0x22/255 ≈ 0.1333 — look for the distinctive yellow triplet
yellow_str = b'.9961'
found_color = yellow_str in data
print(f'Brand color check: {"PASSED" if found_color else "WARNING — yellow brand color not found (may be rendering issue)"}')

# --- f) Annotation URI scan — no localhost links allowed ---------------------
# Chrome writes /URI (URI) for hyperlinks; extract each URI value and check.
uri_matches = re.findall(rb'/URI\s*\(([^)]+)\)', data)
# Also handle hex-encoded URI entries
uri_hex_matches = re.findall(rb'/URI\s*<([0-9A-Fa-f]+)>', data)
for hex_bytes in uri_hex_matches:
    try:
        raw = bytes.fromhex(hex_bytes.decode('ascii'))
        uri_matches.append(raw)
    except Exception:
        pass

APPROVED_PRODUCTION_ORIGIN = b'https://singpronuncerepeat.com'
EXPECTED_BACKLINK         = b'https://singpronuncerepeat.com/ebook-gratis'

# Forbidden URI patterns: localhost, preview deployments, HTTP for external links
BAD_PREFIXES = [
    b'http://127.0.0.1',
    b'https://127.0.0.1',
    b'http://localhost',
    b'https://localhost',
]
# Catch any vercel.app URL that is NOT the approved production origin
# (preview and branch deploy URLs look like https://<project>-<hash>-<org>.vercel.app)
BAD_PATTERNS = [b'.vercel.app']

EXPECTED_LINK_COUNT = 7  # 3 YouTube + 2 Tally survey + 1 Tally first-group + 1 ebook backlink

print(f'Embedded annotation URIs ({len(uri_matches)} found):')
for uri in uri_matches:
    print(f'  {uri.decode("latin-1", errors="replace")}')

bad_uri_found = False

# Check forbidden prefixes
for uri in uri_matches:
    for bad in BAD_PREFIXES:
        if uri.lower().startswith(bad.lower()):
            print(f'VALIDATION FAILED — forbidden URI prefix in PDF annotation: {uri.decode("latin-1", errors="replace")}')
            failed = True
            bad_uri_found = True

# Check for preview/branch .vercel.app URLs (any .vercel.app that is not the approved origin)
for uri in uri_matches:
    uri_lower = uri.lower()
    for pat in BAD_PATTERNS:
        if pat in uri_lower and not uri_lower.startswith(APPROVED_PRODUCTION_ORIGIN.lower()):
            print(f'VALIDATION FAILED — non-production vercel.app URL in PDF annotation: {uri.decode("latin-1", errors="replace")}')
            failed = True
            bad_uri_found = True

if not bad_uri_found:
    print('URI safety scan: PASSED (no localhost, 127.0.0.1, or non-production vercel.app URLs)')

# Verify the exact ebook backlink is present
backlink_found = any(uri.rstrip(b'/') == EXPECTED_BACKLINK for uri in uri_matches)
if not backlink_found:
    print(f'VALIDATION FAILED — expected ebook backlink not found: {EXPECTED_BACKLINK.decode()}')
    failed = True
else:
    print(f'Ebook backlink check: PASSED ({EXPECTED_BACKLINK.decode()})')

if len(uri_matches) != EXPECTED_LINK_COUNT:
    print(f'VALIDATION FAILED — expected {EXPECTED_LINK_COUNT} embedded link annotations, found {len(uri_matches)}.')
    failed = True
else:
    print(f'Link annotation count: PASSED ({len(uri_matches)} annotations)')

if failed:
    sys.exit(1)

print('All validation checks passed.')
PYEOF

echo "PDF validation passed."

# ------------------------------------------------------------------ #
# Move temp PDF to final destination                                   #
# ------------------------------------------------------------------ #

mv "$TEMP_PDF" "$OUTPUT_PDF"
FINAL_SIZE=$(wc -c < "$OUTPUT_PDF" | tr -d ' ')

# Get page count via Python if possible
PAGE_COUNT=$(python3 - "$OUTPUT_PDF" <<'PYEOF' 2>/dev/null || echo "unknown"
import sys, re
with open(sys.argv[1], 'rb') as f:
    data = f.read()
pages = re.findall(rb'/Type\s*/Page[^s]', data)
print(len(pages))
PYEOF
)

echo ""
echo "========================================================"
echo "PDF export successful."
echo "  Path:       $OUTPUT_PDF"
echo "  Size:       $FINAL_SIZE bytes"
echo "  Pages:      $PAGE_COUNT"
echo "========================================================"
echo ""
echo "IMPORTANT — manual QA required before publishing:"
echo "  1. Open the PDF and verify all 21 pages render correctly."
echo "  2. Verify background colors appear (requires 'Background graphics')."
echo "  3. Check that no URLs appear twice."
echo "  4. Verify all 7 links (3 YouTube, 2 survey, 1 first-group, 1 ebook backlink)."
echo "  5. Work through docs/validation/PHASE_0_EBOOK_PDF_QA.md."
echo "  6. Only after manual approval:"
echo "     cp $OUTPUT_PDF public/downloads/guia-gratis-sing-pronounce-repeat.pdf"
