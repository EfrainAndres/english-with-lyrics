# Phase 0 Ebook — Publication Readiness Review

## 1. Review Status

Current canonical-brand audit note:

- PDF regeneration: COMPLETE.
- Official brand in PDF binary: VERIFIED — `Sing Pronunce Repeat`.
- Canonical backlink in PDF binary: VERIFIED — `https://singpronuncerepeat.com/ebook-gratis`.
- Legacy Vercel backlink: REMOVED.
- Legacy brand spelling: REMOVED from checked-in PDF binaries.
- Page count: 21 — VERIFIED.
- Structural validation: PASS.
- Visual QA: PASS — all 21 pages rendered to temporary PNGs; page 16 density was adjusted to remove inherited footer clipping while preserving content and page count.
- Link annotation validation: PASS — 7 intended HTTPS annotations retained.
- Public PDF path: UNCHANGED — `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- Production delivery smoke test: PASS.

| Field | Value |
|---|---|
| Review date | 2026-06-16 |
| Delivery implementation date | 2026-06-17 |
| Production origin finalization | 2026-06-17 |
| Canonical PDF regeneration date | 2026-07-20 |
| Branch | `review/phase-0-ebook-publication-readiness` / `feat/phase-0-ebook-pdf-delivery` / `fix/phase-0-production-origin-and-pdf-backlink` / `fix/phase-0-ebook-pdf-canonical-brand-domain` |
| Ebook title | Aprende inglés con 3 canciones — Sing Pronunce Repeat |
| PDF source path | `docs/design/production/phase-0-ebook-production-draft.pdf` |
| Public PDF path | `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` |
| Current PDF page count | 21 |
| Current PDF file size | 1,322,844 bytes (after metadata correction) |
| Public SHA-256 | `fa9801f66f1cb6b0ea4e4ea300e05e808e893993cb4d0a5fdc87bde191fb3f08` |
| Publication status | Public PDF deployed and smoke-tested through canonical Production domain |
| Delivery status | Current direct ebook-delivery flow active through canonical Production domain |
| **Project-owner visual review** | **Approved** |
| **Production origin** | **Approved — `https://singpronuncerepeat.com`** |
| **PDF backlink** | **Restored — `https://singpronuncerepeat.com/ebook-gratis`** |
| **Final decision** | **PASS FOR CURRENT DIRECT-DELIVERY FLOW** |

**Rationale:** PDF content is complete, legally conservative, brand-consistent, and passes automated structural, binary-string, metadata, link-annotation, render, local delivery, and Production smoke checks. PDF metadata is complete (Author, Subject, Keywords, Creator). Production origin is approved and recorded. Absolute `/ebook-gratis` backlink is present inside the deployed PDF (annotation 7 of 7). Public file is served at `public/downloads/` without changing the legacy filename. Download page is live through the canonical custom domain.

This approval applies to the current direct ebook-delivery flow only. Production lead capture remains inactive, Production Email 1 remains inactive, Production automation remains inactive, and legal-owner/professional-review blockers remain separate from direct PDF availability.

Production smoke testing was completed manually through the canonical custom domain. No screenshots, personal data, subscriber information, deployment URLs, provider IDs, or private account details are stored in the repository.

### Current readiness summary

| Check | Status |
|---|---|
| PDF content readiness | PASS |
| PDF structural QA | PASS |
| PDF visual QA | PASS |
| Canonical brand migration | PASS |
| Canonical backlink migration | PASS |
| Local delivery QA | PASS |
| Production delivery smoke test | PASS |
| Production ebook page | PASS — `https://singpronuncerepeat.com/ebook-gratis` |
| Production PDF download | PASS — `https://singpronuncerepeat.com/downloads/guia-gratis-sing-pronounce-repeat.pdf` |
| Production browser-open action | PASS |
| Production PDF content type | VERIFIED — `application/pdf` |
| Public filename unchanged | PASS |
| Production publication readiness | PASS FOR CURRENT DIRECT-DELIVERY FLOW |
| Production lead capture | INACTIVE |
| Production Email 1 | INACTIVE |
| Production automation | INACTIVE |
| Production email delivery | INACTIVE |

---

## 2. Source-of-Truth Inventory

| File | Controls |
|---|---|
| `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md` | Canonical learner-facing text for all 9 fragments — authoritative for what the HTML must say |
| `docs/content/PHASE_0_EBOOK_FRAGMENT_REVIEW.md` | Fragment audit trail: approval scores, non-adjacency confirmation, reconstruction check, legal-safe screening, project-owner sign-off |
| `docs/design/production/phase-0-ebook.html` | Production HTML — 21-page ebook rendered for Chrome headless export |
| `docs/design/production/phase-0-ebook.css` | Production design system — A5 print layout, tokens, page modifiers |
| `docs/design/production/phase-0-ebook-production-draft.pdf` | Current review PDF — exported from HTML above; pending owner visual sign-off |
| `scripts/export-ebook-pdf.sh` | Reproducible export — governs server readiness, Chrome flags, validation checks, and structural pass/fail criteria |
| `docs/validation/PHASE_0_EBOOK_PDF_QA.md` | Per-export QA log — records export history, structural results, and known issues |
| `docs/validation/PHASE_0_EBOOK_DOWNLOAD_PAGE.md` | Delivery-page spec — governs `/ebook-gratis` conversion from waiting page to download page |
| `docs/validation/PHASE_0_EMAIL_DELIVERY_PLAN.md` | Email delivery spec — governs confirmation, ebook delivery, survey reminder, and first-group emails |

**Decision authority:**
- Content correctness: `PHASE_0_EBOOK_FINAL_CONTENT.md` is authoritative. The HTML must match it.
- Fragment legality: `PHASE_0_EBOOK_FRAGMENT_REVIEW.md` is the audit trail. Do not add or replace fragments without completing a new review cycle there first.
- Export reproducibility: `export-ebook-pdf.sh` is the only approved export method. Do not bypass it.
- Delivery gate: `PHASE_0_EBOOK_DOWNLOAD_PAGE.md` specifies exactly what must be true before `/ebook-gratis` becomes a real download page.

---

## 3. Visual QA Review

> **Current render note:** The regenerated PDF was rendered to temporary PNGs for all 21 pages using PDFKit on 2026-07-20. Visual QA passed: no missing pages, duplicated pages, blank unintended pages, corrupted fonts, broken images, black squares, or visible clipping after the page-16 fit correction. The historical page-by-page table below is preserved as prior review context.

### Page-by-page status

| Page | Purpose | Text clipping | Overflow | Footer | Page # | Contrast | Font size | Card split | Link pres. | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Cover | Pending | Pending | N/A | N/A | Pending | Pending | N/A | N/A | Pending — owner review |
| 2 | Bienvenida | Pending | Pending | Structurally present | Structurally present | Pending | Pending | N/A | N/A | Pending — owner review |
| 3 | Método (4 pasos) | Pending | Pending | Structurally present | Structurally present | Pending | Pending | N/A | N/A | Pending — owner review |
| 4 | Separador — A Thousand Years | Pending | Pending | Structurally present | Structurally present | Pending | Pending | N/A | YouTube link present | Pending — owner review |
| 5 | ATY Fragmento 1 — One step closer | Pending | Pending | Structurally present | Structurally present | Pending | Pending | Pending | N/A | Pending — owner review |
| 6 | ATY Fragmento 2 — Heart beats fast | Pending | Pending | Structurally present | Structurally present | Pending | Pending | Pending | N/A | Pending — owner review |
| 7 | ATY Fragmento 3 — Time stands still | Pending | Pending | Structurally present | Structurally present | Pending | Pending | Pending | N/A | Pending — owner review |
| 8 | ATY Revisión rápida | Pending | Pending | Structurally present | Structurally present | Pending | Pending | N/A | N/A | Pending — owner review |
| 9 | Separador — Still Loving You | Pending | Pending | Structurally present | Structurally present | Pending | Pending | N/A | YouTube link present | Pending — owner review |
| 10 | SLY Fragmento 1 — I will be there | Pending | Pending | Structurally present | Structurally present | Pending | Pending | Pending | N/A | Pending — owner review |
| 11 | SLY Fragmento 2 — All the way from the start | Pending | Pending | Structurally present | Structurally present | Pending | Pending | Pending | N/A | Pending — owner review |
| 12 | SLY Fragmento 3 — I can't get through | Pending | Pending | Structurally present | Structurally present | Pending | Pending | Pending | N/A | Pending — owner review |
| 13 | SLY Revisión rápida | Pending | Pending | Structurally present | Structurally present | Pending | Pending | N/A | N/A | Pending — owner review |
| 14 | Separador — The Reason | Pending | Pending | Structurally present | Structurally present | Pending | Pending | N/A | YouTube link present | Pending — owner review |
| 15 | TR Fragmento 1 — Before I go | Pending | Pending | Structurally present | Structurally present | Pending | Pending | Pending | N/A | Pending — owner review |
| 16 | TR Fragmento 2 — I'm not a perfect person | Pending | Pending | Structurally present | Structurally present | Pending | Pending | Pending | N/A | Pending — owner review |
| 17 | TR Fragmento 3 — Start over new | Confirmed pass (user review 2026-06-16) | Confirmed pass | Confirmed pass (footer + page # 17 visible) | Confirmed pass | Pending | Pending | Pending | N/A | Partially confirmed — full visual pass pending |
| 18 | TR Revisión rápida | Pending | Pending | Structurally present | Structurally present | Pending | Pending | N/A | N/A | Pending — owner review |
| 19 | Reto de tres días | Within A5 safe area (user review 2026-06-16) | Confirmed pass | Structurally present | Structurally present | Pending | Pending | N/A | Tally link present | Partially confirmed — full visual pass pending |
| 20 | Autochequeo + ¿Qué sigue? | Within A5 safe area (user review 2026-06-16) | Confirmed pass | Confirmed pass | Structurally present | Pending | Pending | N/A | Tally links present | Partially confirmed — full visual pass pending |
| 21 | Nota educativa y de derechos | Pending | Pending | Structurally present | Structurally present | Pending | Pending | N/A | N/A | Pending — owner review |

**Visual QA conclusion:** Pass for this canonical PDF regeneration. All 21 final rendered pages were inspected from temporary PNG contact sheets, with additional full-page inspection of the cover, backlink/CTA area, legal page, and page 16 fit correction. No render artifacts are committed.

---

## 4. Learning-Block Completeness

All checks below were verified against `docs/design/production/phase-0-ebook.html` source.

### Required elements per block

| Element | Present in all 9 blocks? | Verified by |
|---|---|---|
| Fragmento corto | Yes | `frag-row--fragment` present ×9 |
| Escríbelo como suena | Yes | `frag-label` "Escríbelo como suena" ×9 |
| Pronunciation clarification note | Yes | `pronunciation-note` ×9 |
| Significado natural | Yes | `frag-label` "Significado natural" ×9 |
| Vocabulario útil | Yes | `frag-label` "Vocabulario útil" ×9 |
| Ejemplo fuera de la canción | Yes | `frag-label` "Ejemplo fuera de la canción" ×9 |
| Spanish meaning of example | Yes | `example-translation` ×9 |
| Practica | Yes | `frag-label` "Practica" ×9 |
| Repítelo | Yes | `repite-label` ×9 |
| Listo | Yes | `progress-check` with "Listo" ×9 |

### Approved fragments verified

| ID | Fragment | Song | Present in HTML | Source-order distinct from ebook order |
|---|---|---|---|---|
| ATY-01 | One step closer | A Thousand Years | Yes | Confirmed by project owner |
| ATY-02 | Heart beats fast | A Thousand Years | Yes | Confirmed by project owner |
| ATY-03 | Time stands still | A Thousand Years | Yes | Confirmed by project owner |
| SLY-01 | I will be there | Still Loving You | Yes | Confirmed by project owner |
| SLY-02 | All the way from the start | Still Loving You | Yes | Confirmed by project owner |
| SLY-03 | I can't get through | Still Loving You | Yes | Confirmed by project owner |
| TR-01 | Before I go | The Reason | Yes | Confirmed by project owner |
| TR-02 | I'm not a perfect person | The Reason | Yes | Confirmed by project owner |
| TR-03 | Start over new | The Reason | Yes | Confirmed by project owner |

### Prohibited content check

| Prohibition | Status |
|---|---|
| No additional song fragments beyond the 9 approved | Pass — HTML contains exactly the 9 approved fragments |
| No surrounding lyrics | Pass — no surrounding verse lines detected in HTML source |
| No complete verse reproduced | Pass — all fragments are short phrases (2–6 words) |
| No complete chorus reproduced | Pass |
| No lyric-replacement layout | Pass — each fragment is surrounded by original educational content |
| No personal-name references | Pass — no creator name found in public-facing HTML content |

---

## 5. Link QA

Links verified from the exported PDF binary using annotation URI extraction.

### Embedded annotation destinations

| # | Destination | Type | Status |
|---|---|---|---|
| 1 | `https://www.youtube.com/watch?v=rtOvBOTyX00` | A Thousand Years official YouTube | Pass — HTTPS, official watch URL |
| 2 | `https://www.youtube.com/watch?v=7pOr3dBFAeY` | Still Loving You official YouTube | Pass — HTTPS, official watch URL |
| 3 | `https://www.youtube.com/watch?v=fV4DiAyExN0` | The Reason official YouTube | Pass — HTTPS, official watch URL |
| 4 | `https://tally.so/r/eqzgbe` | Challenge day-3 survey CTA | Pass — HTTPS, Tally approved form |
| 5 | `https://tally.so/r/eqzgbe` | Final CTA page survey link | Pass — HTTPS, Tally approved form |
| 6 | `https://tally.so/r/D4a6NE` | Final CTA page first-group link | Pass — HTTPS, Tally approved form |
| 7 | `https://singpronuncerepeat.com/ebook-gratis` | Canonical ebook page backlink | Pass — HTTPS, canonical Production origin |

**Total embedded link annotations:** 7

**Localhost/127.0.0.1 scan:** PASSED — no such URI found in any annotation.

### /ebook-gratis

- Visible text "Visitar la página del ebook: /ebook-gratis" present on page 20.
- Link is clickable and points to `https://singpronuncerepeat.com/ebook-gratis`.
- Annotation embedded — confirmed from URI extraction (7 total, one exact canonical ebook backlink).
- Legacy Vercel backlink removed — `https://english-with-lyrics.vercel.app` absent from the final PDF binary.

### Link quality checks

| Check | Result |
|---|---|
| All links HTTPS | Pass |
| No localhost or 127.0.0.1 | Pass |
| No fan uploads | Pass — YouTube links use official /watch?v= format |
| No lyric websites | Pass |
| No download sites | Pass |
| No tracking parameters | Pass — clean URLs, no UTM or tracking query strings |
| No accidental duplicate URLs | Pass — the two `tally.so/r/eqzgbe` occurrences are intentional (two distinct CTAs) |

---

## 6. PDF Metadata Review

Metadata extracted from `docs/design/production/phase-0-ebook-production-draft.pdf` using Python stdlib.

| Field | Current value | Recommended value | Status |
|---|---|---|---|
| Title | `Aprende inglés con 3 canciones — Sing Pronunce Repeat` | Same | Pass |
| Author | `Sing Pronunce Repeat / English with Lyrics` | Same | Pass |
| Subject | `Guía educativa de pronunciación y comprensión de inglés con canciones` | Same | Pass |
| Keywords | `aprender inglés, pronunciación, inglés con canciones, Escríbelo como suena, listening, vocabulario` | Same | Pass |
| Creator | `Sing Pronunce Repeat / English with Lyrics` | Same | Pass — latest Info dictionary value |
| Producer | `Skia/PDF m150` | (no change required) | Acceptable — identifies Chrome as render engine, no sensitive data |
| CreationDate | `D:20260720160103+00'00'` | (no change required) | Pass — no sensitive information |
| ModDate | `D:20260720160103+00'00'` | (no change required) | Pass |

**Metadata summary:** The PDF title, Author, Subject, Keywords, and latest Creator value are correct after the existing metadata patching workflow.

**Internal-exposure check:** No local filesystem paths, usernames, branch names, or temporary server URLs were found in any metadata field or embedded annotation. The Creator field contains the Chrome user-agent string, which reveals the browser and OS version but no personal identity information. This is acceptable for a production review PDF.

---

## 7. Filename Review

| Criterion | Value | Status |
|---|---|---|
| Intended public filename | `guia-gratis-sing-pronounce-repeat.pdf` | Pass |
| Lowercase | Yes | Pass |
| Hyphenated | Yes | Pass |
| No spaces | Yes | Pass |
| No accents or special characters | Yes | Pass |
| Clear purpose | "guia gratis" = free guide, "sing-pronounce-repeat" = brand | Pass |
| Stable enough for public links | Yes — does not encode version, date, or internal status | Pass |

**Recommended final public filename:** `guia-gratis-sing-pronounce-repeat.pdf`

**Future public path:** `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`

Do not create this path until owner visual QA and delivery integration are complete.

---

## 8. Legal-Safe Publication Review

> **This is a conservative editorial review only. It is not legal advice. Professional legal review is recommended before broad public distribution or paid use.**

Reviewed against `LEGAL_GUIDE.md` and `CONTENT_GUIDE.md`.

### A Thousand Years (Christina Perri)

| Criterion | Assessment |
|---|---|
| Fragment count | 3 fragments |
| Fragments used | "One step closer" (3 words), "Heart beats fast" (3 words), "Time stands still" (3 words) |
| Approximate total quoted words | 9 words |
| Non-adjacent in source | Confirmed — project owner reviewed complete song outside repo and confirmed non-adjacency |
| Reconstruct any meaningful lyrical sequence? | No — fragments are short, widely spaced, and in a different order from the source |
| Original educational analysis substantial? | Yes — Escríbelo como suena guides, natural meanings, vocabulary, exercises, and examples per fragment |
| Fragment-level concern | None identified |

**Result:** Conservative review passed.

### Still Loving You (Scorpions)

| Criterion | Assessment |
|---|---|
| Fragment count | 3 fragments |
| Fragments used | "I will be there" (4 words), "All the way from the start" (7 words), "I can't get through" (5 words) |
| Approximate total quoted words | 16 words |
| Non-adjacent in source | Confirmed — project owner confirmed non-adjacency |
| Reconstruct any meaningful lyrical sequence? | No — fragments are short phrases with distinct grammatical structures and different contexts |
| Original educational analysis substantial? | Yes — original pronunciation guides, phrasal verb analysis, exercises, and examples per fragment |
| Fragment-level concern | "All the way from the start" is 7 words — the longest phrase across all 9 fragments. It was reviewed and approved as educationally necessary for the phrasal pattern. No surrounding lyrics are present |
| Vocalist accent | Vocalist's German-accented English documented in `PHASE_0_EBOOK_FRAGMENT_REVIEW.md`. Ebook uses neutral pronunciation guidance and does not replicate the vocalist's accent variation. |

**Result:** Conservative review passed.

### The Reason (Hoobastank)

| Criterion | Assessment |
|---|---|
| Fragment count | 3 fragments |
| Fragments used | "Before I go" (3 words), "I'm not a perfect person" (6 words), "Start over new" (3 words) |
| Approximate total quoted words | 12 words |
| Non-adjacent in source | Confirmed — project owner confirmed non-adjacency and that ebook order differs from source order |
| Reconstruct any meaningful lyrical sequence? | No — fragments are in a different order from the source and represent different tenses and clause types |
| Original educational analysis substantial? | Yes — Escríbelo como suena guides, phrasal verb analysis, comparison tables, exercises per fragment |
| Fragment-level concern | None identified |

**Result:** Conservative review passed.

### Overall legal-safe review

| Check | Result |
|---|---|
| Only short excerpts used | Pass — total quoted words across 3 songs: approximately 37 words |
| No complete lyrics | Pass |
| No complete verses | Pass |
| No complete choruses | Pass |
| No sequential reconstruction possible from ebook order | Pass — confirmed per song |
| Original pronunciation guidance | Pass — Escríbelo como suena content is original throughout |
| Original natural meanings | Pass — all explanations are original editorial analysis |
| Original examples | Pass — all "Ejemplo fuera de la canción" sentences are invented, not from the song |
| Original exercises | Pass — all exercises are original |
| Official or authorized listening sources | Pass — official YouTube links only |
| Rights note present | Pass — page 21 contains a full rights and educational-intent note |
| No claim that educational intent guarantees legal protection | Pass — rights note explicitly states "La intención educativa de esta guía no implica propiedad sobre las..." |

**Overall result: Conservative review passed.**

No fragment should be shortened or replaced at this stage. Recommend professional legal review before scaling to paid content or significantly increasing reach.

---

## 9. Brand Review

| Check | Result |
|---|---|
| Main brand: Sing Pronunce Repeat | Pass — used consistently in headers, footers (26 instances), cover, metadata, and CTA copy |
| Secondary brand: English with Lyrics | Pass — used in cover, final footer, and meta author tag |
| Method: Escríbelo como suena | Pass — appears in cover subtitle, headers, method page, and fragment sections |
| Official logo asset | Pass — `logo-claro.svg` from `public/brand/` used on the cover |
| Correct brand palette | Pending visual confirmation — `#FEE296` yellow detected in PDF shading functions; full palette check requires owner visual review |
| No personal-name references | Pass — no creator name found in any public-facing HTML content |
| No artist photography | Pass — no image assets from songs or artists |
| No album artwork | Pass — no album art embedded |
| No competitor branding | Pass |
| No logo distortion (recolor, stretch, crop in code) | Pass — logo is inserted as an `<img>` at `height: 54px` without CSS transform or filter |

---

## 10. Accessibility and Usability Review

| Check | Status |
|---|---|
| A5 layout (148 × 210 mm) | Pass — `@page { size: A5 portrait; margin: 0; }` confirmed in CSS |
| Readable body text | Pending visual confirmation — base font is `system-ui` at approximately 0.8rem–0.9rem body size |
| Sufficient contrast (dark backgrounds, light text) | Pending visual confirmation — design uses white/cream text on near-black `#010101` background; brand colors used for accents |
| Pronunciation and translation visually distinct | Pass — `.pronunciation-text` uses color `var(--c-yellow)`, `.frag-label` uses smaller muted text, `.frag-value` uses full body text |
| Confidence controls are markable | Pending visual confirmation — checkbox inputs and write lines are structurally present; whether line thickness is sufficient for pen marking requires visual review |
| Links are visually understandable | Pass — YouTube links are labeled "Abrir video oficial — youtube.com" using `.print-url` spans; Tally links show tally.so domain |
| QR not required | Pass — no QR codes used |
| No information depends only on color | Pass — all labels use text, not color alone |
| Footer and page numbers consistent | Pass — structural check confirmed footer present on all 21 non-cover pages |
| PDF readable on a phone | Pending — A5 at 21 pages works on most phone PDF viewers; pinch-zoom required for small type is expected but should be confirmed by owner |

**Accessibility note:** No formal accessibility certification is claimed. The ebook is designed for print and PDF viewing; no screen-reader semantic structure has been added to the PDF layer.

---

## 11. Public URL Readiness

**Finding:** The canonical Production origin is approved and documented as `https://singpronuncerepeat.com`.

**Status:**
- Production origin: **Approved** — `https://singpronuncerepeat.com`.
- `/ebook-gratis` in PDF: **Clickable canonical backlink** — `https://singpronuncerepeat.com/ebook-gratis`.
- Public PDF path: **Unchanged** — `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.

Do not use localhost, preview deployment URLs, or the legacy Vercel origin as canonical public links.

---

## 12. Delivery Readiness

### Ready now

- Export script produces a reproducible 21-page PDF with structural validation.
- All 9 learning blocks are complete and content-correct.
- All 7 embedded links point to correct HTTPS destinations.
- No localhost or internal URLs remain in the PDF.
- No legacy Vercel backlink remains in the PDF.
- No legacy brand spelling remains in the PDF.
- Legal-safe conservative review passed.
- Filename is approved: `guia-gratis-sing-pronounce-repeat.pdf`.
- Brand assets and copy are consistent.

### Ready after delivery implementation (`feat/phase-0-ebook-pdf-delivery`)

- Copy PDF to `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` — after owner visual sign-off.
- Restore `/ebook-gratis` as a clickable link in the PDF — after production domain is approved.
- Update `/ebook-gratis` page from waiting page to real download page — per `PHASE_0_EBOOK_DOWNLOAD_PAGE.md`.
- Enable direct PDF download from `/ebook-gratis`.
- Add PDF metadata (Author, Subject, Keywords) — via Python post-processing in export script.
- Send ebook delivery emails — after PDF and download page are live.
- Add download-click analytics — after page is converted.
- Activate Tally redirect or follow-up automation — after email provider is selected and consent approach is confirmed.

### Not ready

- Production Email 1 — inactive.
- Production automation — inactive.
- Production lead capture — inactive.
- Gmail inbox-placement review — pending.
- Outlook delivery QA — pending.
- Legal-owner configuration and professional legal review — pending.
- First-group payments — out of scope for Phase 0.

---

## 13. Go / No-Go Decision Matrix

| Area | Status | Blocking? | Evidence | Required action |
|---|---|---|---|---|
| Content completeness | Pass | No | All 9 fragments present, all 10 learning-block elements confirmed in HTML source | None |
| Visual QA | Pass | No | All 21 pages rendered and inspected; page 16 clipping correction verified | None |
| Link QA | Pass | No | 7 annotations extracted, all HTTPS, all verified destinations, no localhost | None |
| Legal-safe review | Conservative review passed | No | Per-song analysis in section 8; ~37 total quoted words across 9 fragments; non-adjacency confirmed | Professional legal review before scaling paid content |
| Metadata — Title | Pass | No | "Aprende inglés con 3 canciones — Sing Pronunce Repeat" confirmed | None |
| Metadata — Author/Subject/Keywords | Pass | No | Set through the existing metadata patch workflow | None |
| Metadata — Creator field | Pass | No | Latest Info dictionary value is `Sing Pronunce Repeat / English with Lyrics` | None |
| Filename | Approved | No | `guia-gratis-sing-pronounce-repeat.pdf` — lowercase, hyphenated, brand-clear | None |
| Public origin | Pass | No | Canonical Production origin verified: `https://singpronuncerepeat.com` | None for direct PDF delivery |
| Download route | Pass | No | `/ebook-gratis` active; public PDF request, download, browser-open action, and in-PDF backlink passed Production smoke testing | None for direct PDF delivery |
| Email delivery | Inactive | No — not required for current direct PDF release | Production email delivery remains inactive | Configure only after separate approval and QA |
| Analytics | Code complete / production verification pending | No — not required for PDF release | Vercel Web Analytics code integration exists; exact download-click events unavailable on Hobby plan | Dashboard activation and verification remain separate |
| Final owner approval | Pass for current direct-delivery flow | No | Manual Production smoke test completed through canonical custom domain | Continue with separate legal/email/rollout gates |

**Decision rules applied:**

- **PASS FOR CURRENT DIRECT-DELIVERY FLOW** applies because: PDF content, structural QA, visual QA, canonical brand migration, canonical backlink migration, local delivery QA, and Production delivery smoke test passed.
- This decision does not activate Production lead capture, Production Email 1, Production automation, or Production email delivery.
- **Decision: PASS FOR CURRENT DIRECT-DELIVERY FLOW.**

---

## 14. Required Manual Approvals

### Content owner review

| Field | Value |
|---|---|
| Name / initials | (pending) |
| Date | (pending) |
| Decision | (pending) |
| Notes | Confirm that all 9 learning blocks match the intended final content and that no corrections are needed |

### Visual QA

| Field | Value |
|---|---|
| Name / initials | Project owner |
| Date | 2026-06-17 |
| Decision | Approved |
| Notes | Project-owner visual review completed. 21-page PDF approved for delivery implementation. No additional visual correction branch required. |

### Legal-safe review

| Field | Value |
|---|---|
| Name / initials | (pending) |
| Date | (pending) |
| Decision | (pending) |
| Notes | Confirm that the conservative review in section 8 of this document matches the project owner's assessment; confirm non-adjacency for all three songs |

### Link QA

| Field | Value |
|---|---|
| Name / initials | (pending) |
| Date | (pending) |
| Decision | Pass (automated) — owner may optionally verify manually by clicking each PDF link |
| Notes | YouTube: open each link and confirm official artist/label channel. Tally: confirm forms are still live and capturing responses |

### Public delivery approval

| Field | Value |
|---|---|
| Name / initials | (pending) |
| Date | (pending) |
| Decision | (pending) |
| Notes | Requires: visual QA signed off + production domain approved + /ebook-gratis page converted + PDF copied to public/downloads/ |

---

## 15. Final Blockers

| ID | Description | Severity | Owner | Required action | Verification | Target phase |
|---|---|---|---|---|---|---|
| BLK-01 | Visual QA not signed off — all 21 pages require project-owner review | High | ~~Project owner~~ **RESOLVED** | Visual QA passed for the regenerated 21-page PDF, including page 16 clipping correction and page 21 CTA/backlink area. | Production smoke test recorded. | Resolved for current direct-delivery flow |
| BLK-02 | Production domain not approved — `/ebook-gratis` is non-clickable in PDF | High | ~~Project owner~~ **RESOLVED** | Canonical Production origin approved; PDF backlink restored to `https://singpronuncerepeat.com/ebook-gratis`. | Deployed artifact backlink verified in Production smoke test. | Resolved |
| BLK-03 | PDF metadata incomplete — Author, Subject, Keywords not set | Medium | ~~Delivery branch~~ **RESOLVED** | Corrected via `scripts/patch-pdf-metadata.py` (Python stdlib incremental update) in `feat/phase-0-ebook-pdf-delivery`. All five fields now set. | Metadata extraction confirms Author, Subject, Keywords, Creator all present. | Resolved |
| BLK-04 | PDF Creator field exposes Chrome user-agent string | Low | ~~Delivery branch~~ **RESOLVED** | Creator updated to `Sing Pronunce Repeat / English with Lyrics` in same patch. | Confirmed in metadata extraction. | Resolved |
| BLK-05 | `/ebook-gratis` page is still a waiting page — not a real download page | High | ~~Delivery branch~~ **RESOLVED** | Page converted in `feat/phase-0-ebook-pdf-delivery`; download CTA, open-in-browser link, content breakdown, and how-to section added; waiting-state copy removed. | Production ebook page, PDF download, browser-open action, and in-PDF backlink passed smoke testing. | Resolved for current direct-delivery flow |
| BLK-06 | Email delivery not configured | Medium | Post-delivery | Select provider (MailerLite or Brevo recommended for Phase 0 volume), configure sender identity, unsubscribe handling, and import consent-confirmed contacts from Tally | Send a test delivery email; confirm link opens `/ebook-gratis` | After delivery |
| BLK-07 | No analytics on PDF download or page visits | Low | Post-delivery | Add basic click tracking on `/ebook-gratis`; no third-party analytics required until Phase 1 | Confirm download click events are logged | After delivery |
| BLK-08 | Professional legal review not completed | Advisory | Project owner | Before broad public distribution or paid MVP launch, consult a copyright attorney familiar with educational fair-use context and relevant jurisdictions | Attorney review documented | Before Phase 1 scale |

---

## 16. Next Branch Recommendation

**Recommended next branch: legal owner configuration or Production Email 1 configuration, depending on the next approved phase.**

Rationale: The current direct ebook-delivery flow has passed Production smoke testing. Remaining work is outside direct PDF availability:

- Complete legal-owner configuration and professional legal review before Production lead capture.
- Configure Production Email 1 only after approval and QA.
- Complete remaining deliverability QA, including Gmail placement review and Outlook delivery QA.
- Keep Production lead capture, Production Email 1, Production automation, and Production email delivery inactive until separately approved.

Do not reopen PDF regeneration work unless a future manual smoke test finds a concrete defect in the deployed artifact.
