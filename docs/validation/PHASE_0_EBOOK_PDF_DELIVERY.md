# Phase 0 Ebook PDF — Delivery QA

## Delivery status

Current canonical-brand audit note:

- PDF regeneration: COMPLETE.
- Official brand in PDF binary: VERIFIED — `Sing Pronunce Repeat`.
- Canonical backlink in PDF binary: VERIFIED — `https://singpronuncerepeat.com/ebook-gratis`.
- Legacy Vercel backlink: REMOVED.
- Legacy brand spelling: REMOVED from the checked-in source and public PDF binaries.
- The public PDF filename remains `guia-gratis-sing-pronounce-repeat.pdf`.
- Page count: 21 — VERIFIED.
- Structural validation: PASS.
- Visual QA: PASS — all 21 pages rendered to temporary PNGs; page 16 density was adjusted to remove inherited footer clipping while preserving content and page count.
- Link annotation validation: PASS — 7 intended HTTPS annotations retained.

| Field | Value |
|---|---|
| Public file path | `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` |
| Browser URL | `/downloads/guia-gratis-sing-pronounce-repeat.pdf` |
| Filename | `guia-gratis-sing-pronounce-repeat.pdf` |
| Page count | 21 |
| File size | 1,322,844 bytes (approx. 1,292 KB) |
| SHA-256 | `fa9801f66f1cb6b0ea4e4ea300e05e808e893993cb4d0a5fdc87bde191fb3f08` |
| Visual review | Project-owner visual review: Approved |
| Legal-safe review | Conservative review passed — see `PHASE_0_EBOOK_PUBLICATION_READINESS.md` |
| Production origin | Approved — `https://singpronuncerepeat.com` |
| PDF backlink | Restored — `https://singpronuncerepeat.com/ebook-gratis` (7th annotation) |
| Embedded annotations | 7 (3 YouTube + 2 Tally survey + 1 Tally first-group + 1 ebook backlink) |
| Email automation | Pending — direct web download enabled; no email provider configured |
| Production redeploy | Required — new PDF must be deployed to make backlink live |
| Branch | `fix/phase-0-ebook-pdf-canonical-brand-domain` |

---

## Source-to-public integrity

| Field | Value |
|---|---|
| Source review path | `docs/design/production/phase-0-ebook-production-draft.pdf` |
| Public path | `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` |
| Source SHA-256 (pre-metadata patch) | Not retained — Chrome export validated before metadata patch; final checked-in artifact is the patched PDF |
| Source SHA-256 (post-metadata patch) | `fa9801f66f1cb6b0ea4e4ea300e05e808e893993cb4d0a5fdc87bde191fb3f08` |
| Public SHA-256 | `fa9801f66f1cb6b0ea4e4ea300e05e808e893993cb4d0a5fdc87bde191fb3f08` |
| Files identical | Yes — source and public file are byte-identical after the metadata correction |
| Transformation applied | PDF incremental update via `scripts/patch-pdf-metadata.py` — appends corrected Info dictionary (Author, Subject, Keywords, Creator) to the PDF without modifying existing page content, links, or colors. Page count, visual layout, and all 7 annotation URIs are intact. |

**Transformation details:**

The original production draft was exported by Chrome headless, which only populated `/Title` in the PDF's Info dictionary. `scripts/patch-pdf-metadata.py` applies an incremental update (appending a new version of the Info object at the end of the file, with a new xref section and trailer pointing `/Prev` at the original xref). No existing bytes are modified. PDF structure is preserved.

Fields corrected or added:

| Field | Before | After |
|---|---|---|
| Author | (not set) | Sing Pronunce Repeat / English with Lyrics |
| Subject | (not set) | Guía educativa de pronunciación y comprensión de inglés con canciones |
| Keywords | (not set) | aprender inglés, pronunciación, inglés con canciones, Escríbelo como suena, listening, vocabulario |
| Creator | Mozilla/5.0 (Chrome UA string) | Sing Pronunce Repeat / English with Lyrics |
| Title | (unchanged) | Aprende inglés con 3 canciones — Sing Pronunce Repeat |
| Producer | (unchanged from source) | Skia/PDF m150 |
| CreationDate | (unchanged) | D:20260720160103+00'00' |
| ModDate | (unchanged) | D:20260720160103+00'00' |

---

## Route QA

Verified from source code in `src/app/ebook-gratis/page.tsx` and `src/lib/links.ts`.

| Check | Status |
|---|---|
| `/ebook-gratis` builds successfully | Pass — `npm run build` completes without errors; route listed as static |
| Download CTA exists | Pass — primary `<CTAButton download="guia-gratis-sing-pronounce-repeat.pdf">` present |
| CTA `href` points to correct PDF | Pass — `href="/downloads/guia-gratis-sing-pronounce-repeat.pdf"` |
| `download` filename is correct | Pass — `download="guia-gratis-sing-pronounce-repeat.pdf"` |
| Open-in-browser link | Pass — secondary CTA with `target="_blank" rel="noopener noreferrer"` present |
| Survey link correct | Pass — `https://tally.so/r/eqzgbe` via `surveyFormUrl` |
| First-group link correct | Pass — `https://tally.so/r/D4a6NE` via `firstGroupFormUrl` |
| Waiting-state copy removed | Pass — "en preparación", "Próxima entrega", "Avisarme cuando esté lista", "No hay PDF disponible todavía" all removed |
| Legal-safe note retained | Pass — note on page explaining educational fragments and official audio |
| No email-provider dependency | Pass — no provider integrated |
| No analytics dependency | Pass — no tracker added |
| No database or auth | Pass |
| External links use safe attributes | Pass — `getLinkProps` in `CTAButton` and `surveyFormUrl`/`firstGroupFormUrl` produce `target="_blank" rel="noopener noreferrer"` for `https://` links |

Manual browser QA: Pass locally — `http://localhost:3001/ebook-gratis` returned 200, and `/downloads/guia-gratis-sing-pronounce-repeat.pdf` returned 200 with `Content-Type: application/pdf` and `Content-Length: 1322844`. Deployed-environment smoke test pending.

---

## PDF QA

Verified from `docs/design/production/phase-0-ebook-production-draft.pdf` and `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` (identical files).

| Check | Status |
|---|---|
| Public PDF exists | Pass — `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` created |
| Non-zero size | Pass — 1,322,844 bytes |
| Page count | Pass — 21 pages |
| Nine approved fragments | Pass — all 9 structurally confirmed (ATY-01/02/03, SLY-01/02/03, TR-01/02/03) |
| No internal markers | Pass — no `[DESIGN: ...]`, production status, or review scores |
| No placeholders | Pass |
| No localhost annotations | Pass — URI safety scan passed in export script |
| Annotation count | Pass — 7 annotations (3 YouTube, 2 Tally survey, 1 Tally first-group, 1 ebook backlink) |
| Ebook backlink | Pass — `https://singpronuncerepeat.com/ebook-gratis` confirmed in export script |
| Metadata — Title | Pass — `Aprende inglés con 3 canciones — Sing Pronunce Repeat` |
| Metadata — Author | Pass — `Sing Pronunce Repeat / English with Lyrics` (corrected in this branch) |
| Metadata — Subject | Pass — corrected in this branch |
| Metadata — Keywords | Pass — corrected in this branch |
| Metadata — Creator | Pass — updated from Chrome UA string to `Sing Pronunce Repeat / English with Lyrics` |
| Public filename | Pass — `guia-gratis-sing-pronounce-repeat.pdf` |
| Official brand in binary | Pass — `Sing Pronunce Repeat` present; `Sing Pronounce Repeat` absent |
| Canonical backlink in binary | Pass — `https://singpronuncerepeat.com/ebook-gratis` present |
| Legacy Vercel backlink | Pass — `https://english-with-lyrics.vercel.app` absent |
| Visual render QA | Pass — all 21 pages rendered via PDFKit; no visible broken fonts, missing pages, black squares, broken images, or clipping after page 16 fit correction |

---

## Responsive QA

Manual checks required. Mark complete only after actual inspection.

| Check | Status |
|---|---|
| Mobile ~375 px — download CTA visible without scrolling | Pending — owner browser check required |
| Mobile ~375 px — no horizontal overflow | Pending |
| Tablet ~768 px — layout renders correctly | Pending |
| Desktop — layout renders correctly | Pending |
| Long CTA labels wrap gracefully | Pending |

---

## Delivery blockers

| ID | Description | Severity | Status |
|---|---|---|---|
| BLK-02 | Production domain approval and PDF backlink restoration | High | Complete — origin approved; backlink restored in `fix/phase-0-production-origin-and-pdf-backlink` |
| BLK-DEL-01 | Production redeploy + smoke test | High | Pending — deploy branch and verify backlink click on production |
| BLK-DEL-02 | Mobile browser QA not performed | Medium | Pending — manual check required |
| BLK-DEL-03 | Download analytics not implemented | Low | Pending — add as separate backlog item |
| BLK-DEL-04 | Email-provider automation not configured | Medium | Pending — separate task after provider selection |

---

## Rollback

If the public file fails or the download experience is broken after deployment:

1. Remove or replace `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` with a placeholder or remove the file.
2. Revert `src/app/ebook-gratis/page.tsx` to the waiting-page state (restore heading, waiting-state copy, and remove the download CTA).
3. Keep survey and first-group CTAs active throughout rollback.
4. Do not delete `docs/design/production/phase-0-ebook-production-draft.pdf` — it is the editorial source.
5. Do not delete `scripts/patch-pdf-metadata.py` — it is the reproducible metadata correction tool.
6. Re-deploy with the rolled-back page to restore a functional waiting-page state.

Rollback command (revert page to waiting state):

```bash
git revert HEAD  # or restore from the last stable commit on main
```
