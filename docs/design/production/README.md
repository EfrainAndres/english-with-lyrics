# Production Source — Phase 0 Ebook

This folder contains the approved production HTML/CSS source and the current
production-PDF candidate for the Sing Pronunce Repeat / English with Lyrics
Phase 0 ebook.

## Status

```text
Approved HTML/CSS source: COMPLETE AND UNCHANGED
Content source: docs/content/PHASE_0_EBOOK_IMPROVED_CONTENT.md
Full design gate: PASS
Production PDF candidate: GENERATED AND APPROVED — 32 PAGES
Agent structural/visual/text/metadata/link/QR QA: PASS
Project-owner PDF review: PASS
Project-owner embedded-PDF QR review: PASS
Production PDF gate: PASS
Public downloadable PDF: UNCHANGED
Public replacement: NEXT / UNBLOCKED — NOT STARTED
Production deployment: NOT STARTED
Production replacement: BLOCKED pending public replacement and delivery QA
```

The committed candidate is not published. The current public download remains
the earlier 21-page artifact until the separate public-replacement,
source-to-public integrity and deployed delivery-QA gate passes.

## Files

| File | Purpose |
|---|---|
| `phase-0-ebook.html` | Approved complete 32-page ebook source |
| `phase-0-ebook.css` | Approved A5 production design system |
| `phase-0-ebook-production-draft.pdf` | Approved 32-page production-PDF candidate awaiting separate public replacement |
| `README.md` | Source, artifact and gate status |

## Content Source

All learner-facing content in the 32-page HTML comes from:

```text
docs/content/PHASE_0_EBOOK_IMPROVED_CONTENT.md
```

The source preserves the nine approved educational fragments, verified lesson
and official-listening destinations, and the committed QR assets. The PDF
candidate was generated without modifying the approved HTML, CSS or QR inputs.

## Export Workflow

The reproducible export workflow is:

```bash
bash scripts/export-ebook-pdf.sh
```

The script serves the approved source locally, renders a temporary PDF,
validates the 32-page A5 structure and exact 16-link inventory, applies
`scripts/patch-pdf-metadata.py`, reopens and validates the patched artifact,
and atomically replaces the committed candidate path. Temporary files and the
local server are cleaned on success or failure.

The script must never copy the candidate to `public/downloads/`.

## Current Candidate

```text
Path: docs/design/production/phase-0-ebook-production-draft.pdf
Pages: 32
Geometry: A5 portrait, 420.00 × 594.96 pt
SHA-256: 45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09
Size: 1,315,500 bytes
```

Agent and project-owner review evidence is recorded in
`docs/validation/PHASE_0_EBOOK_PDF_QA.md`. Public replacement remains a
separate unstarted phase.

## Artifact Protection

This phase does not modify:

- `phase-0-ebook.html`
- `phase-0-ebook.css`
- `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`
- Application or Production delivery configuration

The required public filename remains:

```text
guia-gratis-sing-pronounce-repeat.pdf
```

Existing public links depend on that filename. Replacement is allowed only in
a later, explicitly approved Production phase.
