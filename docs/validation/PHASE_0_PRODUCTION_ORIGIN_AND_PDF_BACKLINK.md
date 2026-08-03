# Phase 0 — Production Origin and PDF Backlink Finalization

## Current 32-page replacement behavior

The approved 32-page replacement intentionally uses the current 16-annotation
inventory. Its final canonical link is the root domain
`https://singpronuncerepeat.com`, as approved during the 32-page PDF gate. The
artifact does not restore the historical `/ebook-gratis` annotation, and that
approved difference is not a defect.

```text
PR #61 merge: PASS
Public replacement merge commit: 0f3517478f2d1742d1292ab3f586e896789c9dfe
Repository public replacement: LIVE
Preview delivery QA: PASS
Project-owner Preview delivery review: PASS
Public replacement Preview gate: PASS
Production deployment: PASS
Production-served SHA integrity: PASS
Candidate-to-public-to-Production identity: PASS
Root-domain canonical link: PASS — https://singpronuncerepeat.com/ exactly once on page 32
Active /ebook-gratis annotation: 0 — APPROVED / EXPECTED
Approved annotations: 16 of 16 PASS
Legacy Vercel destination: ABSENT
Canonical Production artifact: LIVE — APPROVED 32-PAGE PDF
Post-merge Production smoke test: PASS
Project-owner canonical Production review: PASS
Production replacement gate: PASS
Rollback plan: VERIFIED / PREPARED — NOT EXECUTED
```

The `/ebook-gratis` backlink and seven-annotation results below are preserved
as historical evidence for the superseded 21-page direct-delivery artifact.

## Historical 21-page summary

The approved production origin `https://singpronuncerepeat.com` has been recorded. The `/ebook-gratis` backlink inside the ebook PDF has been restored as a clickable absolute HTTPS anchor. The source and public PDFs have been regenerated with 7 validated link annotations and corrected metadata.

Current canonical-brand audit note:

- Official brand alignment: COMPLETE for editable application and repository text.
- Canonical custom domain: ACTIVE.
- Canonical Production origin: `https://singpronuncerepeat.com`.
- WWW redirect: VERIFIED.
- Legacy Vercel origin: NON-CANONICAL TECHNICAL FALLBACK.
- PDF regeneration: COMPLETE.
- Official brand in PDF binary: VERIFIED — `Sing Pronunce Repeat`.
- Canonical backlink in PDF binary: VERIFIED — `https://singpronuncerepeat.com/ebook-gratis`.
- Legacy Vercel backlink: REMOVED from checked-in PDF binaries.
- Legacy brand spelling: REMOVED from checked-in PDF binaries.
- Public PDF path: UNCHANGED — `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- Production PDF smoke test: PASS.
- PDF backlink in deployed artifact: VERIFIED.

Branch: `fix/phase-0-ebook-pdf-canonical-brand-domain`

---

## Approved Origin

| Field | Value |
|---|---|
| Production origin | `https://singpronuncerepeat.com` |
| Approval source | Manual owner confirmation — deployment active at this URL |
| Verification date | 2026-06-17 |
| Verified home route | `https://singpronuncerepeat.com/` |
| Verified ebook route | `https://singpronuncerepeat.com/ebook-gratis` |
| Verified PDF route | `https://singpronuncerepeat.com/downloads/guia-gratis-sing-pronounce-repeat.pdf` |
| Canonical Production origin | VERIFIED |
| Canonical ebook route | VERIFIED |
| WWW redirect behavior | VERIFIED |

Recorded in `src/lib/links.ts` as:
```ts
export const productionOrigin = "https://singpronuncerepeat.com";
export const ebookPagePath    = "/ebook-gratis";
export const ebookPageUrl     = `${productionOrigin}${ebookPagePath}`;
```

---

## PDF Backlink

| Field | Value |
|---|---|
| Visible PDF label | `Visitar la página del ebook: /ebook-gratis` |
| Absolute `href` target | `https://singpronuncerepeat.com/ebook-gratis` |
| HTML element | `<a href="https://singpronuncerepeat.com/ebook-gratis" class="cta-link--tertiary mt-sm">` |
| HTML source | `docs/design/production/phase-0-ebook.html`, line ~1430 |
| Annotation count before | 6 (backlink was a non-clickable `<span>`) |
| Annotation count after | 7 |
| Validation result | Pass — export script confirms exactly 7 annotations and exact backlink target |
| Deployed artifact validation | VERIFIED — backlink passed Production smoke testing |
| PDF backlink destination | PASS — `https://singpronuncerepeat.com/ebook-gratis` |
| Legacy Vercel backlink | REMOVED |

---

## Link Inventory (All 7 Annotations)

| # | Type | Target |
|---|---|---|
| 1 | YouTube — A Thousand Years | `https://www.youtube.com/watch?v=rtOvBOTyX00` |
| 2 | YouTube — Still Loving You | `https://www.youtube.com/watch?v=7pOr3dBFAeY` |
| 3 | YouTube — The Reason | `https://www.youtube.com/watch?v=fV4DiAyExN0` |
| 4 | Tally survey (challenge CTA) | `https://tally.so/r/eqzgbe` |
| 5 | Tally survey (final CTA) | `https://tally.so/r/eqzgbe` |
| 6 | Tally first-group | `https://tally.so/r/D4a6NE` |
| 7 | Ebook page backlink | `https://singpronuncerepeat.com/ebook-gratis` |

All seven are HTTPS. None use localhost, 127.0.0.1, or non-production vercel.app hostnames.

---

## Source-to-Public Integrity

| Field | Value |
|---|---|
| Source PDF path | `docs/design/production/phase-0-ebook-production-draft.pdf` |
| Public PDF path | `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` |
| Source SHA-256 (pre-metadata patch) | Not retained — Chrome export validated before metadata patch; final checked-in artifact is the patched PDF |
| Source SHA-256 (post-metadata patch) | `fa9801f66f1cb6b0ea4e4ea300e05e808e893993cb4d0a5fdc87bde191fb3f08` |
| Public SHA-256 | `fa9801f66f1cb6b0ea4e4ea300e05e808e893993cb4d0a5fdc87bde191fb3f08` |
| Byte-identical | Yes — source and public are byte-identical after the same metadata patch |
| File size | 1,322,844 bytes (approx. 1,292 KB) |
| Page count | 21 |
| Transformation | PDF incremental update via `scripts/patch-pdf-metadata.py` — appends corrected Info dictionary after Chrome export; page content, canonical link annotations, and intended external links were validated after patch |

---

## PDF Metadata

| Field | Value |
|---|---|
| Title | `Aprende inglés con 3 canciones — Sing Pronunce Repeat` |
| Author | `Sing Pronunce Repeat / English with Lyrics` |
| Subject | `Guía educativa de pronunciación y comprensión de inglés con canciones` |
| Keywords | `aprender inglés, pronunciación, inglés con canciones, Escríbelo como suena, listening, vocabulario` |
| Creator | `Sing Pronunce Repeat / English with Lyrics` |
| Producer | `Skia/PDF m150` |
| Validation | Pass — all five fields confirmed after patch |

---

## Smoke-Test Checklist

### Local artifact validation (completed)

| Check | Status |
|---|---|
| Export script runs successfully | Pass |
| PDF exists and is non-zero | Pass — 1,322,844 bytes |
| PDF starts with `%PDF` header | Pass |
| Page count = 21 | Pass |
| Network-error phrases absent | Pass |
| Brand color present | Pass |
| Exactly 7 link annotations | Pass |
| Ebook backlink = exact production URL | Pass |
| No localhost or 127.0.0.1 URIs | Pass |
| No non-production vercel.app URIs | Pass |
| All YouTube links unchanged | Pass |
| All Tally links unchanged | Pass |
| Metadata: Title, Author, Subject, Keywords, Creator | Pass |
| Source and public hashes identical | Pass |
| Official brand in PDF binary | Pass — `Sing Pronunce Repeat` present; `Sing Pronounce Repeat` absent |
| Legacy Vercel backlink absent | Pass — `https://english-with-lyrics.vercel.app` absent |
| Visual render QA | Pass — all 21 pages rendered through PDFKit; page 16 fit correction removed inherited footer clipping |
| `npm run lint` — 0 errors | Pass |
| `npm run build` — passes | Pass |
| `git diff --check` — clean | Pass |

### Deployed production validation (completed)

Production smoke testing was completed manually through the canonical custom domain. No screenshots, personal data, subscriber information, deployment URLs, provider IDs, or private account details are stored in the repository.

| Check | Status |
|---|---|
| Production deployment | READY |
| Ebook page loads | PASS — `https://singpronuncerepeat.com/ebook-gratis` |
| PDF direct URL responds | PASS — `https://singpronuncerepeat.com/downloads/guia-gratis-sing-pronounce-repeat.pdf` |
| PDF content type | VERIFIED — `application/pdf` |
| Download CTA triggers browser download | PASS |
| Open-in-browser CTA opens PDF | PASS |
| Public filename unchanged | PASS — `guia-gratis-sing-pronounce-repeat.pdf` |
| PDF opens successfully | PASS |
| Page count | PASS — 21 |
| Official brand visible in PDF | PASS — `Sing Pronunce Repeat` |
| Page 16 clipping correction | PASS |
| Page 21 CTA/backlink area | PASS |
| PDF backlink in deployed artifact | VERIFIED |
| PDF backlink destination | PASS — `https://singpronuncerepeat.com/ebook-gratis` |
| WWW/custom-domain behavior | PASS |
| Legacy Vercel backlink visible | NO |
| Legacy brand spelling visible | NO |
| Production lead capture activated | NO |
| Production email delivery activated | NO |

---

## Rollback

If the new PDF causes problems after deployment:

1. Restore the previous `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` from the `feat/phase-0-ebook-pdf-delivery` branch commit `7272e0a`.
2. The `/ebook-gratis` download page remains fully functional — the backlink change only affects what is inside the PDF.
3. Do not remove `docs/design/production/phase-0-ebook.html` or `docs/design/production/phase-0-ebook-production-draft.pdf`.
4. Do not change Tally URLs.
5. Redeploy with the rolled-back PDF.
