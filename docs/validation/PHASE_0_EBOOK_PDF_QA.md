# Phase 0 Ebook Production-PDF QA

## 1. Active review subject

This record covers the approved 32-page production-PDF candidate and its
staged repository and Preview delivery. It does not authorize Production
replacement.

```text
Export date: 2026-08-02
Approved source HTML: docs/design/production/phase-0-ebook.html
Approved source CSS: docs/design/production/phase-0-ebook.css
Export workflow: scripts/export-ebook-pdf.sh
Candidate: docs/design/production/phase-0-ebook-production-draft.pdf
Candidate size: 1,315,500 bytes
Candidate SHA-256: 45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09
Agent QA decision: PASS
Project-owner production-PDF visual review: PASS
Project-owner pages visually reviewed: 32 of 32
Project-owner embedded-PDF QR review: PASS
Embedded QR codes manually reviewed: 5 of 5 PASS
Unexpected redirects: NONE
Production PDF gate: PASS
Production-PDF candidate: APPROVED
Repository public PDF replacement: STAGED
Candidate-to-public SHA integrity: PASS
Repository public SHA-256: 45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09
Preview URL: https://english-with-lyrics-git-feat-p-6da762-efrain-vergara-s-projects.vercel.app
Preview-served artifact SHA integrity: PASS
Preview-served SHA-256: 45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09
Preview-served size: 1,315,500 bytes
Preview PDF structural/link/QR validation: PASS
Preview page/download/browser-open checks: PASS — HTTP 200; application/pdf
Project-owner Preview `/ebook-gratis` desktop review: PASS
Project-owner Preview `/ebook-gratis` 390 px review: PASS
Horizontal overflow at 390 px: NONE
Project-owner Preview `/gracias` review: PASS
Project-owner Preview PDF browser-open review: PASS
Project-owner Preview PDF viewer page count: 32
Stable download/open path: PASS — /downloads/guia-gratis-sing-pronounce-repeat.pdf
Project-owner Preview delivery review: PASS
Public replacement Preview gate: PASS
Public repository replacement: APPROVED FOR MERGE
Canonical Production downloadable PDF: UNCHANGED
Production deployment: NEXT / UNBLOCKED — NOT STARTED
Post-merge Production smoke test: NEXT / UNBLOCKED — NOT STARTED
Production replacement gate: BLOCKED pending PR merge and canonical-domain post-merge smoke QA
Rollback plan: PREPARED — NOT EXECUTED
```

## 2. Entry gates

```text
Architecture gate: PASS
Owner copy gate: PASS
Pronunciation gate: PASS
Link/QR source gate: PASS
Design prototype gate: PASS
Full design gate: PASS
```

## 3. Export and structural results

The export workflow rendered to a temporary path, validated the raw render,
applied the existing metadata patcher, reopened and validated the patched
artifact, and only then atomically replaced the candidate path.

| Check | Required | Result |
|---|---|---|
| PDF header | `%PDF` | PASS |
| Cross-reference and EOF | Readable by independent PDF libraries | PASS |
| File size | Plausible complete document | PASS — 1,315,500 bytes |
| Page count | Exactly 32 | PASS |
| Page order | 1 through 32 | PASS |
| Media box | Approximately 420 × 594.96 pt | PASS — every page 420.00 × 594.96 pt |
| Orientation | A5 portrait | PASS |
| Rotation | None | PASS — 0 degrees on all pages |
| Encryption | None | PASS |
| JavaScript | None | PASS |
| Forms | None | PASS |
| Network-error page | Rejected | PASS — none present |
| Patched artifact reopened | Required | PASS |

The final patched artifact, not only the pre-patch render, received every
structural, metadata, text, annotation and QR check recorded below.

## 4. Metadata results

| Field | Final value | Result |
|---|---|---|
| Title | `Aprende inglés con 3 canciones — Sing Pronunce Repeat` | PASS |
| Author | `Sing Pronunce Repeat / English with Lyrics` | PASS |
| Subject | `Guía educativa de pronunciación y comprensión de inglés con canciones` | PASS |
| Keywords | `aprender inglés, pronunciación, inglés con canciones, Escríbelo como suena, listening, vocabulario` | PASS |
| Creator | `Sing Pronunce Repeat / English with Lyrics` | PASS |
| Producer | `Skia/PDF m151` | ACCEPTED |
| Chrome user-agent exposed as Creator | NO | PASS |

## 5. Text and content QA

Text was extracted from the final PDF and compared with the approved page
sequence and required learner content.

```text
Approved page families in order: 32 of 32 PASS
Approved educational fragments: 9 of 9, once and in order, PASS
Natural meanings: 9 of 9 PASS
Pronunciation bridges: 9 of 9 PASS
Exercises, checkboxes and response lines: PASS
Continuation, survey, privacy and canonical content: PASS
Internal notes or production status in learner pages: NONE
Design annotations or prototype labels: NONE
Unresolved placeholders: NONE
Extended lyrics, verses, choruses or surrounding song lines: NONE
Forbidden legacy destinations: NONE
```

No approved copy was edited during PDF generation.

## 6. Annotation inventory

Exactly 16 HTTPS URI annotations were extracted from the final PDF.

| Destination | Expected | Actual | Result |
|---|---:|---:|---|
| `https://www.youtube.com/watch?v=si9YeTd8z1E` | 2 | 2 | PASS |
| `https://www.youtube.com/watch?v=HetOzN4RtTY` | 2 | 2 | PASS |
| `https://www.youtube.com/watch?v=OYJRuJ18_Rg` | 2 | 2 | PASS |
| `https://www.youtube.com/watch?v=rtOvBOTyX00` | 1 | 1 | PASS |
| `https://www.youtube.com/watch?v=7pOr3dBFAeY` | 1 | 1 | PASS |
| `https://www.youtube.com/watch?v=fV4DiAyExN0` | 1 | 1 | PASS |
| `https://tally.so/r/D4a6NE` | 2 | 2 | PASS |
| `https://tally.so/r/eqzgbe` | 2 | 2 | PASS |
| `https://singpronuncerepeat.com/privacidad` | 2 | 2 | PASS |
| `https://singpronuncerepeat.com/` | 1 | 1 | PASS |
| **Total** | **16** | **16** | **PASS** |

```text
Unexpected annotations: NONE
Relative annotation URLs: NONE
Localhost or 127.0.0.1: NONE
Preview or .vercel.app URLs: NONE
Shortened URLs: NONE
Legacy destinations: NONE
```

The five clickable QR-card annotations match their encoded QR payloads.

## 7. Embedded-QR programmatic QA

The five PDF pages containing QR codes were rendered at three resolutions.
Every rendered code was decoded and compared byte-for-byte with its approved
payload.

| PDF page | Purpose | Expected payload | Decode result |
|---:|---|---|---|
| 7 | A Thousand Years lesson | `https://www.youtube.com/watch?v=si9YeTd8z1E` | 3 of 3 PASS |
| 12 | Still Loving You lesson | `https://www.youtube.com/watch?v=HetOzN4RtTY` | 3 of 3 PASS |
| 17 | The Reason lesson | `https://www.youtube.com/watch?v=OYJRuJ18_Rg` | 3 of 3 PASS |
| 28 | First-group information | `https://tally.so/r/D4a6NE` | 3 of 3 PASS |
| 31 | Learner survey | `https://tally.so/r/eqzgbe` | 3 of 3 PASS |

```text
Embedded-PDF programmatic QR decode: 15 of 15 PASS
Embedded QR assets decoded: 5 of 5
Contrast: PASS — black/white range 255 for every render
Quiet-zone containment: PASS
Clipping, distortion or overlap: NONE
Visible purpose / annotation / encoded payload agreement: PASS
Project-owner/manual embedded-PDF QR review: PASS
```

The programmatic result is separately supported by the following project-owner
manual embedded-PDF review. It does not replace the earlier source-asset
two-device scan recorded in the link and QR verification record.

| PDF page | Expected destination | Project-owner manual result |
|---:|---|---|
| 7 | `https://www.youtube.com/watch?v=si9YeTd8z1E` | PASS |
| 12 | `https://www.youtube.com/watch?v=HetOzN4RtTY` | PASS |
| 17 | `https://www.youtube.com/watch?v=OYJRuJ18_Rg` | PASS |
| 28 | `https://tally.so/r/D4a6NE` | PASS |
| 31 | `https://tally.so/r/eqzgbe` | PASS |

```text
Evidence source: project-owner manual embedded-PDF review
Pages tested: 7, 12, 17, 28 and 31
Embedded QR codes manually reviewed: 5 of 5 PASS
Unexpected redirects: NONE
```

## 8. Page-by-page visual QA

All 32 pages were rendered to PNG, inspected in two contact sheets, and checked
page by page. The specified dense and interactive pages were also inspected at
full resolution.

| Page | Page family | Result |
|---:|---|---|
| 1 | Cover and logo | PASS |
| 2 | Welcome, audience and scope | PASS |
| 3 | Learning transformation | PASS |
| 4 | Pronunciation method and notation | PASS |
| 5 | Practice workflow | PASS |
| 6 | Three-song journey | PASS |
| 7 | Song 1 introduction and QR | PASS |
| 8 | ATY-01 practice | PASS |
| 9 | ATY-02 practice | PASS |
| 10 | ATY-03 practice | PASS |
| 11 | Song 1 review | PASS |
| 12 | Song 2 introduction and QR | PASS |
| 13 | SLY-01 practice | PASS |
| 14 | SLY-02 practice | PASS |
| 15 | SLY-03 practice | PASS |
| 16 | Song 2 review | PASS |
| 17 | Song 3 introduction and QR | PASS |
| 18 | TR-01 practice | PASS |
| 19 | TR-02 practice | PASS |
| 20 | TR-03 practice | PASS |
| 21 | Song 3 review | PASS |
| 22 | Expressions 1–5; balanced two-line heading | PASS |
| 23 | Expressions 6–9 and chosen expressions | PASS |
| 24 | Challenge day 1 | PASS |
| 25 | Challenge day 2 | PASS |
| 26 | Challenge day 3 | PASS |
| 27 | Final self-assessment | PASS |
| 28 | Continuation CTA and QR | PASS |
| 29 | Brand mission | PASS |
| 30 | Future direction | PASS |
| 31 | Optional survey CTA and QR | PASS |
| 32 | Educational and rights note | PASS |

```text
Clipped text: NONE
Overlaps: NONE
Footer collisions: NONE
Missing backgrounds: NONE
Black squares or unreadable glyphs: NONE
QR sharpness: PASS
Page order: 1–32 PASS
Page-number visibility: 32 of 32 PASS
Footer visibility: PASS on every designed footer
Margins, typography, spacing and hierarchy: CONSISTENT
Page 22 heading balance: PASS
Learner-facing legibility: PASS
```

## 9. Temporary QA evidence

Temporary evidence is outside the repository and is not staged:

```text
/tmp/phase-0-ebook-production-pdf-qa/contact-sheet-1.png
/tmp/phase-0-ebook-production-pdf-qa/contact-sheet-2.png
/tmp/phase-0-ebook-production-pdf-qa/pages/page-01.png through page-32.png
/tmp/phase-0-ebook-production-pdf-qa/extracted-text.txt
/tmp/phase-0-ebook-production-pdf-qa/validation.json
/tmp/phase-0-ebook-production-pdf-qa/qr/qr/decode-results.json
```

## 10. Immutable-source verification

The before/after SHA-256 comparison passed for the approved HTML, CSS, QR
manifest, five QR SVG assets and current public PDF.

```text
Approved HTML: UNCHANGED
Approved CSS: UNCHANGED
QR manifest: UNCHANGED
Five QR SVG assets: UNCHANGED
Repository public PDF: IDENTICAL TO APPROVED CANDIDATE
Application metadata and page-count copy: UPDATED FOR 32 PAGES
Production deployment files: UNCHANGED
```

## 11. Issue log

| Artifact | Issue | Severity | Disposition |
|---|---|---|---|
| Active 32-page candidate | No blocking structural, content, metadata, link, QR or visual defects found | None | Agent QA PASS; project-owner production-PDF and embedded-QR review PASS |

## 12. Agent and owner decisions

```text
Production PDF generation: COMPLETE
Production PDF candidate: APPROVED — 32 pages
Agent structural QA: PASS
Agent visual QA: PASS
Agent text/content QA: PASS
Agent metadata QA: PASS
Agent embedded-link QA: PASS
Agent embedded-PDF programmatic QR QA: PASS
Agent PDF QA: PASS
Project-owner production-PDF visual review: PASS
Project-owner pages visually reviewed: 32 of 32
Project-owner embedded-PDF QR review: PASS
Embedded QR codes manually reviewed: 5 of 5 PASS
Unexpected redirects: NONE
Production PDF gate: PASS
Repository public PDF replacement: STAGED
Candidate-to-public SHA integrity: PASS
Preview delivery QA: PASS
Preview-served PDF: 32 A5 pages; 16 annotations; 5 of 5 embedded QR PASS
Project-owner Preview delivery review: PASS
Public replacement Preview gate: PASS
Public repository replacement: APPROVED FOR MERGE
Canonical Production downloadable PDF: UNCHANGED
Production replacement gate: BLOCKED pending PR merge and canonical-domain post-merge Production smoke QA
Production deployment: NEXT / UNBLOCKED — NOT STARTED
Post-merge Production smoke test: NEXT / UNBLOCKED — NOT STARTED
```

- [x] Agent structural, visual, text, metadata, link and QR QA complete.
- [x] Project-owner production-PDF visual review complete.
- [x] Project-owner embedded-PDF QR review complete.
- [x] Repository public PDF replacement staged with source-to-public integrity.
- [x] Deployed Preview delivery QA complete.
- [x] Project-owner Preview delivery review complete.
- [x] Public replacement Preview gate passed.
- [x] Public repository replacement approved for merge.
- [ ] Production deployment and smoke QA for the new artifact complete.

## 13. Superseded 21-page export history

The following records are retained as historical evidence only. They do not
describe the active 32-page candidate.

| Export | Date | Pages | Size | Historical disposition |
|---|---|---:|---:|---|
| Initial network-error export | 2026-06-15 | Invalid | 70,172 bytes | Replaced after `ERR_CONNECTION_REFUSED` detection |
| Pre-QA layout export | 2026-06-16 | 18 | 1,154,555 bytes | Superseded after overflow findings |
| QA-corrected pre-TR-03 export | 2026-06-16 | 21 | 1,223,741 bytes | Superseded after clipped TR-03 instruction |
| TR-03 fix, pre-link-fix export | 2026-06-15 | 21 | 1,224,339 bytes | Superseded after localhost annotation finding |
| Localhost-link fix export | 2026-06-16 | 21 | 1,223,965 bytes | Superseded by the approved improved 32-page candidate |

Historical defects were addressed in their respective source phases. The
active candidate uses the separately approved improved source and current
16-annotation destination inventory.
