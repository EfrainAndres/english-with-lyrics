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
METADATA_PATCHER="$REPO_ROOT/scripts/patch-pdf-metadata.py"
TEMP_RENDERED_PDF="$REPO_ROOT/docs/design/production/.export-rendered-$$.pdf"
TEMP_PATCHED_PDF="$REPO_ROOT/docs/design/production/.export-patched-$$.pdf"
SERVER_LOG="$(mktemp /tmp/ebook-server-log.XXXXXX)"
CHROME_PROFILE_DIR="$(mktemp -d /tmp/ebook-chrome-profile.XXXXXX)"

PORT="${EBOOK_EXPORT_PORT:-9898}"
SERVER_PID=""

# ------------------------------------------------------------------ #
# Cleanup: always stop server and remove temp files                    #
# ------------------------------------------------------------------ #

cleanup() {
  if [[ -n "$SERVER_PID" ]] && kill -0 "$SERVER_PID" 2>/dev/null; then
    kill "$SERVER_PID" 2>/dev/null || true
    echo "Local HTTP server stopped."
  fi
  rm -f "$TEMP_RENDERED_PDF" "$TEMP_PATCHED_PDF" "$SERVER_LOG"
  rm -rf "$CHROME_PROFILE_DIR"
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

if [[ ! -f "$METADATA_PATCHER" ]]; then
  echo "ERROR: $METADATA_PATCHER not found."
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
  if SERVER_HTML=$(curl --fail --silent --show-error --max-time 2 "$TARGET_URL" 2>/dev/null) \
    && grep -q "Aprende ingl" <<<"$SERVER_HTML"; then
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
SERVER_HTML=$(curl --fail --silent --show-error "$TARGET_URL")
if ! grep -q "Aprende ingl" <<<"$SERVER_HTML"; then
  echo "ERROR: Manual server test failed — expected title not found in served HTML."
  exit 1
fi
echo "Manual server test passed."

# ------------------------------------------------------------------ #
# Approved-source structural preflight                                 #
# ------------------------------------------------------------------ #

python3 - "$REPO_ROOT/$SOURCE_HTML_REL" <<'PYEOF'
import re
import sys
from pathlib import Path

html = Path(sys.argv[1]).read_text(encoding='utf-8')

pages = re.findall(
    r'<section[^>]*class="[^"]*\bpage\b[^"]*"[^>]*data-final-page="(\d+)"',
    html,
)
expected_pages = [str(number) for number in range(1, 33)]
if pages != expected_pages:
    raise SystemExit(f'HTML preflight failed — page order: {pages}')

fragments = re.findall(r'data-fragment-id="([A-Z]+-\d{2})"', html)
expected_fragments = [
    'ATY-01', 'ATY-02', 'ATY-03',
    'SLY-01', 'SLY-02', 'SLY-03',
    'TR-01', 'TR-02', 'TR-03',
]
if fragments != expected_fragments:
    raise SystemExit(f'HTML preflight failed — fragment order: {fragments}')

required_values = [
    'https://www.youtube.com/watch?v=si9YeTd8z1E',
    'https://www.youtube.com/watch?v=HetOzN4RtTY',
    'https://www.youtube.com/watch?v=OYJRuJ18_Rg',
    'https://www.youtube.com/watch?v=rtOvBOTyX00',
    'https://www.youtube.com/watch?v=7pOr3dBFAeY',
    'https://www.youtube.com/watch?v=fV4DiAyExN0',
    'https://tally.so/r/D4a6NE',
    'https://tally.so/r/eqzgbe',
    'https://singpronuncerepeat.com/privacidad',
    'https://singpronuncerepeat.com',
    '../assets/phase-0-ebook/qr/song-1-a-thousand-years.svg',
    '../assets/phase-0-ebook/qr/song-2-still-loving-you.svg',
    '../assets/phase-0-ebook/qr/song-3-the-reason.svg',
    '../assets/phase-0-ebook/qr/continue-first-group.svg',
    '../assets/phase-0-ebook/qr/survey-feedback.svg',
]
missing = [value for value in required_values if value not in html]
if missing:
    raise SystemExit(f'HTML preflight failed — missing approved values: {missing}')

for forbidden in (
    '{{',
    '[DESIGN:',
    'INTERNAL:',
    'english-with-lyrics.vercel.app',
    'tally.so/r/q4z8l9',
    'youtu.be/',
    '?si=',
    '&si=',
):
    if forbidden in html:
        raise SystemExit(f'HTML preflight failed — forbidden value: {forbidden}')

print('Approved-source preflight: PASSED (32 pages, nine fragments, current destinations)')
PYEOF

# ------------------------------------------------------------------ #
# Export to temporary PDF                                              #
# ------------------------------------------------------------------ #

echo "Exporting PDF to temporary path: $TEMP_RENDERED_PDF"

# Detect headless mode: newer Chrome (>= 112) uses --headless=new
CHROME_VERSION=$("$CHROME" --version 2>/dev/null | grep -oE '[0-9]+\.[0-9]+' | head -1 | cut -d. -f1 || echo "0")
if [[ "$CHROME_VERSION" -ge 112 ]]; then
  HEADLESS_FLAG="--headless=new"
else
  HEADLESS_FLAG="--headless"
fi

python3 - \
  "$CHROME" \
  "$HEADLESS_FLAG" \
  "$TEMP_RENDERED_PDF" \
  "$TARGET_URL" \
  "$CHROME_PROFILE_DIR" <<'PYEOF'
from pathlib import Path
import os
import signal
import subprocess
import sys
import time

chrome, headless_flag, output_path, target_url, profile_dir = sys.argv[1:]
output = Path(output_path)
command = [
    chrome,
    headless_flag,
    '--disable-gpu',
    '--disable-background-networking',
    '--disable-component-update',
    '--disable-extensions',
    '--disable-sync',
    '--no-first-run',
    '--no-default-browser-check',
    '--no-sandbox',
    '--no-pdf-header-footer',
    f'--user-data-dir={profile_dir}',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=10000',
    f'--print-to-pdf={output_path}',
    target_url,
]

process = subprocess.Popen(command, start_new_session=True)
deadline = time.monotonic() + 90
last_size = -1
stable_since = None

while time.monotonic() < deadline:
    return_code = process.poll()
    size = output.stat().st_size if output.exists() else 0

    if size > 0 and size == last_size:
        stable_since = stable_since or time.monotonic()
    else:
        stable_since = None
        last_size = size

    if return_code is not None:
        break
    if stable_since is not None and time.monotonic() - stable_since >= 3:
        os.killpg(process.pid, signal.SIGTERM)
        try:
            process.wait(timeout=10)
        except subprocess.TimeoutExpired:
            os.killpg(process.pid, signal.SIGKILL)
            process.wait(timeout=10)
        break

    time.sleep(0.25)
else:
    os.killpg(process.pid, signal.SIGTERM)
    try:
        process.wait(timeout=10)
    except subprocess.TimeoutExpired:
        os.killpg(process.pid, signal.SIGKILL)
        process.wait(timeout=10)
    raise SystemExit('Chrome export timed out after 90 seconds.')

if not output.exists() or output.stat().st_size == 0:
    raise SystemExit(f'Chrome did not produce a non-empty PDF: {output_path}')

if process.returncode not in (0, -signal.SIGTERM):
    raise SystemExit(f'Chrome export exited with status {process.returncode}.')

print(f'Chrome render complete: {output.stat().st_size} bytes')
PYEOF

# ------------------------------------------------------------------ #
# Post-export validation                                               #
# ------------------------------------------------------------------ #

validate_pdf() {
  local pdf_path="$1"
  local validation_stage="$2"

  python3 - "$pdf_path" "$validation_stage" <<'PYEOF'
from collections import Counter
from pathlib import Path
import re
import sys

pdf_path = Path(sys.argv[1])
stage = sys.argv[2]
data = pdf_path.read_bytes()
failed = False


def fail(message):
    global failed
    print(f'VALIDATION FAILED — {message}')
    failed = True


def decode_hex(value):
    raw = bytes.fromhex(value.decode('ascii'))
    if raw.startswith(b'\xfe\xff'):
        return raw[2:].decode('utf-16-be')
    if raw.startswith(b'\xff\xfe'):
        return raw[2:].decode('utf-16-le')
    try:
        return raw.decode('utf-8')
    except UnicodeDecodeError:
        return raw.decode('latin-1')


def last_hex_field(name):
    matches = re.findall(rb'/' + name.encode() + rb'\s*<([0-9A-Fa-f]+)>', data)
    return decode_hex(matches[-1]) if matches else None


if not data.startswith(b'%PDF'):
    fail('missing PDF header')
if b'startxref' not in data or b'%%EOF' not in data:
    fail('missing readable cross-reference terminator')

for phrase in (
    b'ERR_CONNECTION_REFUSED',
    b'No connection',
    b'No hay conexi',
    b'This site can',
    b'net::ERR',
):
    if phrase.lower() in data.lower():
        fail(f'network-error phrase found: {phrase.decode(errors="replace")}')

page_count = len(re.findall(rb'/Type\s*/Page(?!s)\b', data))
if page_count != 32:
    fail(f'expected exactly 32 pages, found {page_count}')

media_boxes = re.findall(
    rb'/MediaBox\s*\[\s*([-+0-9.]+)\s+([-+0-9.]+)\s+([-+0-9.]+)\s+([-+0-9.]+)\s*\]',
    data,
)
if not media_boxes:
    fail('no MediaBox geometry found')
else:
    geometries = {
        tuple(float(value) for value in media_box)
        for media_box in media_boxes
    }
    expected = (0.0, 0.0, 420.0, 594.96)
    for geometry in geometries:
        if any(abs(actual - wanted) > 0.25 for actual, wanted in zip(geometry, expected)):
            fail(f'unexpected MediaBox geometry: {geometry}')

rotations = [int(value) % 360 for value in re.findall(rb'/Rotate\s+(-?\d+)', data)]
if any(rotation != 0 for rotation in rotations):
    fail(f'unexpected page rotation values: {rotations}')

for forbidden_structure in (b'/Encrypt', b'/JavaScript', b'/AcroForm'):
    if forbidden_structure in data:
        fail(f'forbidden PDF structure found: {forbidden_structure.decode()}')

if len(data) < 500_000:
    fail(f'implausibly small full-document file size: {len(data)} bytes')

uri_values = [
    value.decode('latin-1').replace('\\(', '(').replace('\\)', ')').replace('\\\\', '\\')
    for value in re.findall(rb'/URI\s*\(([^)]*)\)', data)
]
for value in re.findall(rb'/URI\s*<([0-9A-Fa-f]+)>', data):
    uri_values.append(decode_hex(value))

def normalize(uri):
    if uri in {'https://singpronuncerepeat.com', 'https://singpronuncerepeat.com/'}:
        return 'https://singpronuncerepeat.com/'
    return uri

uri_values = [normalize(uri) for uri in uri_values]
expected_uris = Counter({
    'https://www.youtube.com/watch?v=si9YeTd8z1E': 2,
    'https://www.youtube.com/watch?v=HetOzN4RtTY': 2,
    'https://www.youtube.com/watch?v=OYJRuJ18_Rg': 2,
    'https://www.youtube.com/watch?v=rtOvBOTyX00': 1,
    'https://www.youtube.com/watch?v=7pOr3dBFAeY': 1,
    'https://www.youtube.com/watch?v=fV4DiAyExN0': 1,
    'https://tally.so/r/D4a6NE': 2,
    'https://tally.so/r/eqzgbe': 2,
    'https://singpronuncerepeat.com/privacidad': 2,
    'https://singpronuncerepeat.com/': 1,
})
actual_uris = Counter(uri_values)
if sum(actual_uris.values()) != 16:
    fail(f'expected exactly 16 link annotations, found {sum(actual_uris.values())}')
if actual_uris != expected_uris:
    fail(f'annotation inventory mismatch: {dict(actual_uris)}')

for uri in uri_values:
    lower = uri.lower()
    if not lower.startswith('https://'):
        fail(f'non-HTTPS or relative annotation URL: {uri}')
    if any(value in lower for value in ('localhost', '127.0.0.1', '.vercel.app', 'youtu.be/', '?si=', '&si=')):
        fail(f'forbidden annotation URL: {uri}')

if stage == 'patched':
    expected_metadata = {
        'Title': 'Aprende inglés con 3 canciones — Sing Pronunce Repeat',
        'Author': 'Sing Pronunce Repeat / English with Lyrics',
        'Subject': 'Guía educativa de pronunciación y comprensión de inglés con canciones',
        'Creator': 'Sing Pronunce Repeat / English with Lyrics',
    }
    for field, expected_value in expected_metadata.items():
        actual_value = last_hex_field(field)
        if actual_value != expected_value:
            fail(f'{field} metadata mismatch: {actual_value!r}')

    keywords = last_hex_field('Keywords') or ''
    for required_keyword in (
        'aprender inglés',
        'pronunciación',
        'inglés con canciones',
        'Escríbelo como suena',
        'listening',
        'vocabulario',
    ):
        if required_keyword.casefold() not in keywords.casefold():
            fail(f'missing metadata keyword: {required_keyword}')

    creator = last_hex_field('Creator') or ''
    if 'Mozilla/' in creator or 'Chrome/' in creator:
        fail('Creator exposes a browser user-agent string')

print(f'Validation stage: {stage}')
print(f'Page count: {page_count}')
print('Page geometry: A5 portrait (420.00 x 594.96 pt)')
print(f'Link annotations: {sum(actual_uris.values())}')
print(f'File size: {len(data)} bytes')

if failed:
    raise SystemExit(1)

print(f'PDF validation: PASSED ({stage})')
PYEOF
}

if [[ ! -s "$TEMP_RENDERED_PDF" ]]; then
  echo "ERROR: Chrome did not produce a non-empty PDF at $TEMP_RENDERED_PDF."
  exit 1
fi

echo "Validating renderer output..."
validate_pdf "$TEMP_RENDERED_PDF" rendered

echo "Applying approved metadata patch..."
python3 "$METADATA_PATCHER" "$TEMP_RENDERED_PDF" "$TEMP_PATCHED_PDF"

if [[ ! -s "$TEMP_PATCHED_PDF" ]]; then
  echo "ERROR: Metadata patcher did not produce a non-empty PDF."
  exit 1
fi

echo "Reopening and validating patched candidate before replacement..."
validate_pdf "$TEMP_PATCHED_PDF" patched

# Atomic replacement occurs only after the patched candidate passes validation.
mv "$TEMP_PATCHED_PDF" "$OUTPUT_PDF"

echo "Reopening committed candidate after atomic replacement..."
validate_pdf "$OUTPUT_PDF" patched

FINAL_SIZE=$(wc -c < "$OUTPUT_PDF" | tr -d ' ')
FINAL_SHA=$(shasum -a 256 "$OUTPUT_PDF" | awk '{print $1}')

echo ""
echo "========================================================"
echo "PDF export successful."
echo "  Path:       $OUTPUT_PDF"
echo "  SHA-256:    $FINAL_SHA"
echo "  Size:       $FINAL_SIZE bytes"
echo "  Pages:      32"
echo "  Geometry:   A5 portrait (420.00 x 594.96 pt)"
echo "  Links:      16 approved annotations"
echo "========================================================"
echo ""
echo "IMPORTANT — remaining manual QA before publishing:"
echo "  1. Review all 32 rendered pages and critical pages at full resolution."
echo "  2. Confirm all five embedded QR codes manually from the final PDF."
echo "  3. Complete project-owner production-PDF review."
echo "  4. Work through docs/validation/PHASE_0_EBOOK_PDF_QA.md."
echo "  5. Do not replace public/downloads until later approval."
