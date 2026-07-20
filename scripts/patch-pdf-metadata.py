#!/usr/bin/env python3
"""
Append corrected Info metadata to a Chrome-generated PDF via incremental update.

Usage:
    python3 scripts/patch-pdf-metadata.py <source.pdf> <output.pdf>

Does not modify the source file. Writes output to a separate path.
Uses only Python stdlib — no additional dependencies required.

Metadata applied:
    Title    : Aprende inglés con 3 canciones — Sing Pronunce Repeat
    Author   : Sing Pronunce Repeat / English with Lyrics
    Subject  : Guía educativa de pronunciación y comprensión de inglés con canciones
    Keywords : aprender inglés, pronunciación, inglés con canciones,
               Escríbelo como suena, listening, vocabulario
    Creator  : Sing Pronunce Repeat / English with Lyrics
    Producer : (unchanged — Skia/PDF m149)
    CreationDate : (unchanged from source)
    ModDate      : (unchanged from source)
"""

import re
import sys


TITLE    = 'Aprende inglés con 3 canciones — Sing Pronunce Repeat'
AUTHOR   = 'Sing Pronunce Repeat / English with Lyrics'
SUBJECT  = 'Guía educativa de pronunciación y comprensión de inglés con canciones'
KEYWORDS = ('aprender inglés, pronunciación, inglés con canciones, '
            'Escríbelo como suena, listening, vocabulario')
CREATOR  = 'Sing Pronunce Repeat / English with Lyrics'
PRODUCER = 'Skia/PDF m149'


def utf16be_hex(s: str) -> str:
    """Encode a string as hex-encoded UTF-16BE with FEFF BOM, as PDF hex strings."""
    return 'FEFF' + s.encode('utf-16-be').hex().upper()


def pdf_hex_str(s: str) -> str:
    return f'<{utf16be_hex(s)}>'


def main(source_path: str, dest_path: str) -> None:
    with open(source_path, 'rb') as f:
        existing = f.read()

    # ── Locate the last startxref and prev xref offset ─────────────────────
    startxref_matches = list(re.finditer(rb'startxref\s+(\d+)\s+%%EOF', existing))
    if not startxref_matches:
        raise RuntimeError('Could not find startxref + %%EOF in source PDF.')
    prev_xref_offset = int(startxref_matches[-1].group(1))

    # ── Extract /Size and /Root from the last trailer region ───────────────
    trailer_region = existing[prev_xref_offset:]
    size_m  = re.search(rb'/Size\s+(\d+)', trailer_region)
    root_m  = re.search(rb'/Root\s+(\d+)\s+(\d+)\s+R', trailer_region)
    if not (size_m and root_m):
        raise RuntimeError('Could not extract /Size or /Root from trailer.')
    xref_size    = int(size_m.group(1))
    root_obj_num = int(root_m.group(1))
    root_gen_num = int(root_m.group(2))

    # ── Extract existing dates from the Info object (near file start) ──────
    creation_m = re.search(rb'/CreationDate\s*\(([^)]+)\)', existing[:4096])
    mod_m      = re.search(rb'/ModDate\s*\(([^)]+)\)', existing[:4096])
    creation_date = (creation_m.group(1).decode('ascii')
                     if creation_m else "D:20260617000000+00'00'")
    mod_date      = (mod_m.group(1).decode('ascii')
                     if mod_m else creation_date)

    # ── Build replacement Info object (object 1, gen 0) ────────────────────
    new_info_content = (
        '1 0 obj\n'
        f'<</Title {pdf_hex_str(TITLE)}\n'
        f'/Author {pdf_hex_str(AUTHOR)}\n'
        f'/Subject {pdf_hex_str(SUBJECT)}\n'
        f'/Keywords {pdf_hex_str(KEYWORDS)}\n'
        f'/Creator {pdf_hex_str(CREATOR)}\n'
        f'/Producer ({PRODUCER})\n'
        f'/CreationDate ({creation_date})\n'
        f'/ModDate ({mod_date})>>\n'
        'endobj\n'
    )
    new_info_bytes = new_info_content.encode('latin-1')

    # ── Calculate byte offsets ──────────────────────────────────────────────
    new_info_start = len(existing)
    new_xref_start = new_info_start + len(new_info_bytes)

    # ── Build incremental xref section (update object 1 only) ──────────────
    # Each xref entry is exactly 20 bytes: 10d SP 5d SP 1c SP LF
    xref_entry = f'{new_info_start:010d} 00000 n \n'
    new_xref_content = f'xref\n1 1\n{xref_entry}'
    new_xref_bytes   = new_xref_content.encode('latin-1')

    # ── Build new trailer ───────────────────────────────────────────────────
    new_trailer_content = (
        'trailer\n'
        f'<</Size {xref_size}\n'
        f'/Root {root_obj_num} {root_gen_num} R\n'
        '/Info 1 0 R\n'
        f'/Prev {prev_xref_offset}>>\n'
        'startxref\n'
        f'{new_xref_start}\n'
        '%%EOF\n'
    )
    new_trailer_bytes = new_trailer_content.encode('latin-1')

    # ── Write output ────────────────────────────────────────────────────────
    with open(dest_path, 'wb') as f:
        f.write(existing)
        f.write(new_info_bytes)
        f.write(new_xref_bytes)
        f.write(new_trailer_bytes)

    total = len(existing) + len(new_info_bytes) + len(new_xref_bytes) + len(new_trailer_bytes)
    print(f'Wrote {total:,} bytes to {dest_path}')
    print(f'  Incremental update: Info object appended at offset {new_info_start}')
    print(f'  New xref at offset: {new_xref_start}')


if __name__ == '__main__':
    if len(sys.argv) != 3:
        print(f'Usage: {sys.argv[0]} <source.pdf> <output.pdf>', file=sys.stderr)
        sys.exit(1)
    main(sys.argv[1], sys.argv[2])
