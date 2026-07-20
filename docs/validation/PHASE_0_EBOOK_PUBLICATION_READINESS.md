# Phase 0 Ebook — Publication Readiness Review

## 1. Review Status

Current canonical-brand audit note:

- Editable application, documentation, PDF source HTML, and export scripts have been aligned to `Sing Pronunce Repeat` and `https://singpronuncerepeat.com`.
- The existing checked-in PDF binaries still need a controlled re-export and validation before claiming the binary artifact itself is aligned. Byte inspection found the legacy `https://english-with-lyrics.vercel.app/ebook-gratis` annotation and old `Sing Pronounce Repeat / English with Lyrics` alt text.
- No PDF was regenerated in this branch.

| Field | Value |
|---|---|
| Review date | 2026-06-16 |
| Delivery implementation date | 2026-06-17 |
| Production origin finalization | 2026-06-17 |
| Branch | `review/phase-0-ebook-publication-readiness` / `feat/phase-0-ebook-pdf-delivery` / `fix/phase-0-production-origin-and-pdf-backlink` |
| Ebook title | Aprende inglés con 3 canciones — Sing Pronunce Repeat |
| PDF source path | `docs/design/production/phase-0-ebook-production-draft.pdf` |
| Public PDF path | `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` |
| Current PDF page count | 21 |
| Current PDF file size | 1,225,899 bytes (after metadata correction) |
| Public SHA-256 | `c5ae8fba25d011d7f35d5e06999780a12a686156b6d84ce6463e41b55bf05312` |
| Publication status | Public PDF prepared — production redeploy and smoke test pending |
| Delivery status | Download route active — production redeploy required to serve updated PDF |
| **Project-owner visual review** | **Approved** |
| **Production origin** | **Approved — `https://singpronuncerepeat.com`** |
| **PDF backlink** | **Restored — `https://singpronuncerepeat.com/ebook-gratis`** |
| **Final decision** | **CONDITIONAL GO** |

**Rationale:** PDF content is complete, legally conservative, brand-consistent, and passes all automated checks. PDF metadata complete (Author, Subject, Keywords, Creator). Production origin approved and recorded. Absolute `/ebook-gratis` backlink restored inside the PDF (annotation 7 of 7). Public file updated at `public/downloads/`. Download page live. Remaining blocker: production redeploy and deployed smoke test for PDF backlink click verification.

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

> **Note:** CLI visual inspection of a binary PDF is not possible without external rendering tools. The checks below that require a human eye are marked **PENDING — owner review required**. Structural checks that can be verified from the HTML source or export-script output are marked accordingly.

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

**Visual QA conclusion:** Partial — three pages have user-confirmed pass on specific items from a prior inspection session. Full page-by-page visual sign-off requires the project owner to open `docs/design/production/phase-0-ebook-production-draft.pdf` and work through section 2 of `docs/validation/PHASE_0_EBOOK_PDF_QA.md`.

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

**Total embedded link annotations:** 6

**Localhost/127.0.0.1 scan:** PASSED — no such URI found in any annotation.

### /ebook-gratis

- Visible text "Visitar la página del ebook: /ebook-gratis" present on page 20.
- Link is intentionally non-clickable (`<span>` element, no `href`).
- No annotation embedded — confirmed from URI extraction (6 total, none matching /ebook-gratis).
- Reason: no approved public production origin is documented in any project file.
- Required action before delivery: approve a production domain, restore the element to `<a href="https://<domain>/ebook-gratis">`, and regenerate the PDF.

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
| Author | (not set) | `Sing Pronunce Repeat / English with Lyrics` | Incomplete — Medium blocker |
| Subject | (not set) | `Guía educativa de pronunciación y comprensión de inglés con canciones` | Incomplete — Medium blocker |
| Keywords | (not set) | `aprender inglés, pronunciación, inglés con canciones, Escríbelo como suena, listening, vocabulario` | Incomplete — Medium blocker |
| Creator | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)` | (omit or set to `Sing Pronunce Repeat / English with Lyrics`) | Advisory — exposes browser UA and OS version; does not expose username, paths, or branch names |
| Producer | `Skia/PDF m149` | (no change required) | Acceptable — identifies Chrome as render engine, no sensitive data |
| CreationDate | `D:20260616232611+00'00'` | (no change required) | Pass — no sensitive information |
| ModDate | `D:20260616232611+00'00'` | (no change required) | Pass |

**Metadata summary:** The PDF title is correct. Author, Subject, and Keywords are not set; Chrome's headless PDF engine does not map `<meta name="author">` or `<meta name="description">` HTML tags to PDF Info dictionary fields. Correcting these fields requires a Python PDF post-processing step in the export script (incremental update appended to the file) or a dedicated library. Neither approach is in scope for this review branch. Recommend addressing in the delivery branch.

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

**Finding:** No approved public production origin is documented in any project file checked for this review, including `AGENTS.md`, `CLAUDE.md`, `README.md`, `.env.example`, `docs/design/production/README.md`, `docs/validation/PHASE_0_EBOOK_DOWNLOAD_PAGE.md`, and `docs/validation/PHASE_0_EMAIL_DELIVERY_PLAN.md`.

The README references `localhost:3000` and `/ebook-gratis` as a local Next.js route. The `.env.example` contains only Tally form URLs. No Vercel deployment URL, custom domain, or production base URL is documented anywhere.

**Status:**
- Production origin: **Pending** — no approved domain documented.
- `/ebook-gratis` in PDF: **Intentionally non-clickable** — `<a>` changed to `<span>` to prevent localhost URL embedding. Visible text preserved.
- Required action before delivery: Project owner must approve and document the production domain (e.g., `https://singpronuncerepeat.com` or equivalent). Once approved, restore to `<a href="https://<domain>/ebook-gratis">` and regenerate the PDF.

Do not guess, invent, or use a preview deployment URL.

---

## 12. Delivery Readiness

### Ready now

- Export script produces a reproducible 21-page PDF with structural validation.
- All 9 learning blocks are complete and content-correct.
- All 6 embedded links point to correct HTTPS destinations.
- No localhost or internal URLs remain in the PDF.
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

- Email provider setup — no provider selected; manual workflow for low-volume Phase 0 signups.
- Email automation — blocked on provider selection and sender domain decision.
- Analytics tooling — no analytics integrated; manual tracking only.
- First-group payments — out of scope for Phase 0.

---

## 13. Go / No-Go Decision Matrix

| Area | Status | Blocking? | Evidence | Required action |
|---|---|---|---|---|
| Content completeness | Pass | No | All 9 fragments present, all 10 learning-block elements confirmed in HTML source | None |
| Visual QA | Pending | Yes — for full delivery sign-off | Page 17/19/20 partially confirmed; all other pages pending | Project owner opens PDF, reviews all 21 pages against QA checklist |
| Link QA | Pass | No | 6 annotations extracted, all HTTPS, all verified destinations, no localhost | None |
| Legal-safe review | Conservative review passed | No | Per-song analysis in section 8; ~37 total quoted words across 9 fragments; non-adjacency confirmed | Professional legal review before scaling paid content |
| Metadata — Title | Pass | No | "Aprende inglés con 3 canciones — Sing Pronunce Repeat" confirmed | None |
| Metadata — Author/Subject/Keywords | Incomplete | Medium | Not set in PDF; Chrome does not map HTML meta tags to PDF Info dictionary | Add Python incremental-update post-processing to export script in delivery branch |
| Metadata — Creator field | Advisory | No | Shows Chrome UA/OS string; no username, path, or branch name exposed | Optionally overwrite in delivery branch post-processing |
| Filename | Approved | No | `guia-gratis-sing-pronounce-repeat.pdf` — lowercase, hyphenated, brand-clear | None |
| Public origin | Pending | Yes — for delivery | No production domain documented anywhere | Owner approves and documents production domain; restore /ebook-gratis anchor |
| Download route | Not activated | Yes — for delivery | `public/downloads/` does not exist; `/ebook-gratis` is a waiting page | Create path and convert page in delivery branch after visual sign-off |
| Email delivery | Pending | No — not required for PDF release | Email provider not selected; manual workflow adequate for Phase 0 | Select provider and configure after PDF is live |
| Analytics | Pending | No — not required for PDF release | No analytics configured | Add in delivery branch or later |
| Final owner approval | Pending | Yes | No sign-off recorded | Owner completes visual QA and signs off below |

**Decision rules applied:**

- **GO** requires: visual QA passed + link QA passed + legal-safe passed + metadata approved + filename approved + public origin approved + owner approval. **Not all conditions met.**
- **CONDITIONAL GO** applies because: PDF content is ready; link QA and legal-safe review passed; content is complete; delivery integration and public origin are still pending; no content, legal-safe, or visual content blocker prevents the delivery branch from starting once the owner signs off on visual review.
- **Decision: CONDITIONAL GO.**

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
| BLK-01 | Visual QA not signed off — all 21 pages require project-owner review | High | Project owner | Open PDF, work through `PHASE_0_EBOOK_PDF_QA.md` section 2, record pass/fail per page | Owner records sign-off date and initials in this document and in QA doc | Before delivery |
| BLK-02 | Production domain not approved — `/ebook-gratis` is non-clickable in PDF | High | Project owner | Approve and document the production base URL; update HTML anchor to `https://<domain>/ebook-gratis`; regenerate PDF | Verify PDF annotation count rises to 7; confirm new URL is HTTPS and points to live route | Before delivery |
| BLK-03 | PDF metadata incomplete — Author, Subject, Keywords not set | Medium | ~~Delivery branch~~ **RESOLVED** | Corrected via `scripts/patch-pdf-metadata.py` (Python stdlib incremental update) in `feat/phase-0-ebook-pdf-delivery`. All five fields now set. | Metadata extraction confirms Author, Subject, Keywords, Creator all present. | Resolved |
| BLK-04 | PDF Creator field exposes Chrome user-agent string | Low | ~~Delivery branch~~ **RESOLVED** | Creator updated to `Sing Pronunce Repeat / English with Lyrics` in same patch. | Confirmed in metadata extraction. | Resolved |
| BLK-05 | `/ebook-gratis` page is still a waiting page — not a real download page | High | ~~Delivery branch~~ **RESOLVED** | Page converted in `feat/phase-0-ebook-pdf-delivery`; download CTA, open-in-browser link, content breakdown, and how-to section added; waiting-state copy removed. | Build passes; route renders as static. | Resolved locally — deployed smoke test pending |
| BLK-06 | Email delivery not configured | Medium | Post-delivery | Select provider (MailerLite or Brevo recommended for Phase 0 volume), configure sender identity, unsubscribe handling, and import consent-confirmed contacts from Tally | Send a test delivery email; confirm link opens `/ebook-gratis` | After delivery |
| BLK-07 | No analytics on PDF download or page visits | Low | Post-delivery | Add basic click tracking on `/ebook-gratis`; no third-party analytics required until Phase 1 | Confirm download click events are logged | After delivery |
| BLK-08 | Professional legal review not completed | Advisory | Project owner | Before broad public distribution or paid MVP launch, consult a copyright attorney familiar with educational fair-use context and relevant jurisdictions | Attorney review documented | Before Phase 1 scale |

---

## 16. Next Branch Recommendation

**Recommended next branch: `feat/phase-0-ebook-pdf-delivery`**

Rationale: No content, legal-safe, or structural PDF blocker prevents starting the delivery branch. The PDF content is complete, the link QA is passed, and the conservative legal-safe review is passed. The remaining work is exclusively delivery integration:

- Approve and document the production domain (owner action, not a code change).
- Restore `/ebook-gratis` as a verified HTTPS anchor and regenerate the PDF.
- Add PDF metadata post-processing (Author, Subject, Keywords, Creator override) to the export script.
- Copy the approved PDF to `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- Convert `/ebook-gratis` from waiting page to real download page per `PHASE_0_EBOOK_DOWNLOAD_PAGE.md`.
- Run final export validation with the corrected metadata and link.

A `fix/` branch would be appropriate only if visual QA reveals content clipping, missing text, or broken layout on pages not yet confirmed. If the owner's visual review identifies corrections, open `fix/phase-0-ebook-pdf-qa` before starting the delivery branch.

**Do not merge this review branch into main before owner visual sign-off is recorded.**
