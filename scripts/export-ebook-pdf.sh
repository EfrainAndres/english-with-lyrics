#!/usr/bin/env bash
# Export the Phase 0 ebook production draft to PDF.
#
# Prerequisites: Python 3 and Google Chrome (or Chromium) installed.
# Output: docs/design/production/phase-0-ebook-production-draft.pdf
#
# This script must be run from the repository root.
# It does NOT copy the output to public/downloads/ — that step
# belongs to a separate, manually approved deploy step.

set -euo pipefail

# ------------------------------------------------------------------ #
# Config                                                               #
# ------------------------------------------------------------------ #

PORT=9898
SOURCE_HTML="docs/design/production/phase-0-ebook.html"
OUTPUT_PDF="docs/design/production/phase-0-ebook-production-draft.pdf"
SERVER_PID=""

# ------------------------------------------------------------------ #
# Locate Chrome                                                        #
# ------------------------------------------------------------------ #

find_chrome() {
  local candidates=(
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    "/Applications/Chromium.app/Contents/MacOS/Chromium"
    "/usr/bin/google-chrome"
    "/usr/bin/chromium"
    "/usr/bin/chromium-browser"
  )
  for candidate in "${candidates[@]}"; do
    if [[ -x "$candidate" ]]; then
      echo "$candidate"
      return 0
    fi
  done
  # Fall back to searching PATH
  for name in google-chrome chromium chromium-browser; do
    if command -v "$name" &>/dev/null; then
      echo "$(command -v "$name")"
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

if [[ ! -f "$SOURCE_HTML" ]]; then
  echo "ERROR: $SOURCE_HTML not found. Run from repository root."
  exit 1
fi

# ------------------------------------------------------------------ #
# Start local HTTP server (needed for asset resolution)               #
# ------------------------------------------------------------------ #

cleanup() {
  if [[ -n "$SERVER_PID" ]]; then
    kill "$SERVER_PID" 2>/dev/null || true
    echo "Server stopped."
  fi
}
trap cleanup EXIT INT TERM

echo "Starting HTTP server on port ${PORT}..."
python3 -m http.server "$PORT" 2>/dev/null &
SERVER_PID=$!
sleep 1  # Give the server a moment to bind

# ------------------------------------------------------------------ #
# Export to PDF                                                        #
# ------------------------------------------------------------------ #

echo "Exporting PDF..."
"$CHROME" \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --print-to-pdf="$OUTPUT_PDF" \
  "http://127.0.0.1:${PORT}/${SOURCE_HTML}"

echo ""
echo "PDF exported to: $OUTPUT_PDF"
echo ""
echo "IMPORTANT — manual steps before publishing:"
echo "  1. Open the PDF and verify all 18 pages render correctly."
echo "  2. Check that no URLs appear twice."
echo "  3. Verify background colors are preserved."
echo "  4. Review all links (YouTube and Tally)."
echo "  5. Only after manual approval: copy to public/downloads/guia-gratis-sing-pronounce-repeat.pdf"
