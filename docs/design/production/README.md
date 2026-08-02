# Production Source — Phase 0 Ebook

This folder contains the production HTML/CSS source for the Sing Pronunce
Repeat / English with Lyrics Phase 0 ebook and the previously committed PDF
artifact.

## Status

```text
Production HTML/CSS source: 32-page improved design
Content source: docs/content/PHASE_0_EBOOK_IMPROVED_CONTENT.md
Design implementation: COMPLETE / READY FOR OWNER REVIEW
Committed production PDF: unchanged 21-page asset
Public downloadable PDF: unchanged
PDF export: BLOCKED pending owner approval of the full design
Production replacement: BLOCKED
```

The source HTML/CSS has advanced to the complete approved 32-page design. The
committed production draft PDF remains the previous 21-page artifact, and the
public downloadable PDF remains unchanged.

## Files

| File | Purpose |
|---|---|
| `phase-0-ebook.html` | Complete 32-page improved ebook source |
| `phase-0-ebook.css` | Approved A5 production design system |
| `phase-0-ebook-production-draft.pdf` | Previous committed 21-page PDF artifact; unchanged in this phase |
| `README.md` | Source and gate status |

## Content Source

All learner-facing content in the 32-page HTML comes from:

```text
docs/content/PHASE_0_EBOOK_IMPROVED_CONTENT.md
```

The source preserves the nine approved educational fragments, verified lesson
and official-listening destinations, and the committed QR assets. Internal
editorial notes, status blocks and design annotations are not rendered.

## Local Review

Serve the repository root and open the production HTML:

```bash
python3 -m http.server 9898 --bind 127.0.0.1
open http://127.0.0.1:9898/docs/design/production/phase-0-ebook.html
```

The current review phase covers the complete HTML/CSS at desktop width, 390 px
mobile width and A5 print geometry. Project-owner visual approval is required
before production PDF generation.

## PDF Export Gate

The existing export script belongs to the later PDF-generation phase:

```text
scripts/export-ebook-pdf.sh
```

Do not run it during full-design review. After owner approval, that later phase
must update its validation for 32 pages, export the committed production PDF,
complete final embedded-link and QR QA, and then separately authorize any
public-download replacement.

## Artifact Protection

This phase does not modify:

- `phase-0-ebook-production-draft.pdf`
- `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`
- Application or Production delivery configuration

The required public filename remains:

```text
guia-gratis-sing-pronounce-repeat.pdf
```

Existing public links depend on that filename. Replacement is allowed only in
the later gated PDF and Production phases.
