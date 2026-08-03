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
PR #61 merge: PASS
Public replacement merge commit: 0f3517478f2d1742d1292ab3f586e896789c9dfe
Canonical Production downloadable PDF: LIVE — APPROVED 32-PAGE ARTIFACT
Repository public PDF: LIVE — IDENTICAL 32-PAGE ARTIFACT
Source-to-public integrity: PASS
Preview delivery QA: PASS
Project-owner Preview delivery review: PASS
Public replacement Preview gate: PASS
Production deployment: PASS
Production-served SHA integrity: PASS
Candidate-to-public-to-Production identity: PASS
Approved 16-annotation inventory: PASS
Root-domain canonical annotation: PASS — https://singpronuncerepeat.com/ exactly once on page 32
Active /ebook-gratis annotation: 0 — APPROVED / EXPECTED
Post-merge Production smoke test: PASS
Project-owner canonical Production review: PASS
Production replacement gate: PASS
Approved 32-page ebook public replacement: LIVE
Mandatory improved-ebook deliverable: COMPLETE
Stable public filename: UNCHANGED
Rollback plan: VERIFIED / PREPARED — NOT EXECUTED
Current direct PDF delivery: ACTIVE
Production lead capture: INACTIVE
Production Email 1: INACTIVE
Production automation: INACTIVE
Full commercial launch/funnel: NOT YET COMPLETE
```

Preview URL:
`https://english-with-lyrics-git-feat-p-6da762-efrain-vergara-s-projects.vercel.app`

The approved candidate, repository public file and canonical Production-served
PDF are byte-for-byte identical. Canonical Production route, browser-open,
structure, metadata, exact 16-annotation and embedded-QR smoke checks pass.
The active 32-page artifact intentionally links once to the root domain on
page 32 and contains no `/ebook-gratis` annotation. The latter belongs only to
the explicitly historical 21-page artifact.

## Files

| File | Purpose |
|---|---|
| `phase-0-ebook.html` | Approved complete 32-page ebook source |
| `phase-0-ebook.css` | Approved A5 production design system |
| `phase-0-ebook-production-draft.pdf` | Approved 32-page production-PDF candidate staged for public replacement merge |
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
`docs/validation/PHASE_0_EBOOK_PDF_QA.md`. Repository, Preview and canonical
Production delivery QA are complete. The approved 32-page replacement is live;
the separate commercial funnel remains incomplete and inactive.

## Artifact Protection

The public-replacement phase does not modify:

- `phase-0-ebook.html`
- `phase-0-ebook.css`
- the approved candidate at `phase-0-ebook-production-draft.pdf`
- Application or Production delivery configuration

The required public filename remains:

```text
guia-gratis-sing-pronounce-repeat.pdf
```

Existing public links depend on that filename. The approved replacement is
live under that unchanged name. This smoke-record task does not alter or
redeploy the artifact.
