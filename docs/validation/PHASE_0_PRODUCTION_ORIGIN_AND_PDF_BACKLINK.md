# Phase 0 — Production Origin and PDF Backlink Finalization

## Summary

The approved production origin `https://singpronuncerepeat.com` has been recorded. The `/ebook-gratis` backlink inside the ebook PDF has been restored as a clickable absolute HTTPS anchor. The source and public PDFs have been regenerated with 7 validated link annotations and corrected metadata.

Current canonical-brand audit note:

- Official brand alignment: COMPLETE for editable application and repository text.
- Canonical custom domain: ACTIVE.
- Canonical Production origin: `https://singpronuncerepeat.com`.
- WWW redirect: VERIFIED.
- Legacy Vercel origin: NON-CANONICAL TECHNICAL FALLBACK.
- PDF source configuration has been aligned for the next export.
- Existing checked-in PDF binaries still require a controlled re-export: byte inspection found the legacy `https://english-with-lyrics.vercel.app/ebook-gratis` annotation and old `Sing Pronounce Repeat / English with Lyrics` alt text in `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` and `docs/design/production/phase-0-ebook-production-draft.pdf`.
- No PDF was regenerated in this branch.

Branch: `fix/phase-0-production-origin-and-pdf-backlink`

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
| Source SHA-256 (pre-metadata patch) | `5339c70f3dd1d101cc6f644a2179694383e17a0fc1729fdde934a2aeb23fbecc` |
| Source SHA-256 (post-metadata patch) | `c5ae8fba25d011d7f35d5e06999780a12a686156b6d84ce6463e41b55bf05312` |
| Public SHA-256 | `c5ae8fba25d011d7f35d5e06999780a12a686156b6d84ce6463e41b55bf05312` |
| Byte-identical | Yes — source and public are byte-identical after the same metadata patch |
| File size | 1,225,899 bytes (approx. 1,197 KB) |
| Page count | 21 |
| Transformation | PDF incremental update via `scripts/patch-pdf-metadata.py` — appends corrected Info dictionary without modifying existing page content, links, or colors |

---

## PDF Metadata

| Field | Value |
|---|---|
| Title | `Aprende inglés con 3 canciones — Sing Pronunce Repeat` |
| Author | `Sing Pronunce Repeat / English with Lyrics` |
| Subject | `Guía educativa de pronunciación y comprensión de inglés con canciones` |
| Keywords | `aprender inglés, pronunciación, inglés con canciones, Escríbelo como suena, listening, vocabulario` |
| Creator | `Sing Pronunce Repeat / English with Lyrics` |
| Validation | Pass — all five fields confirmed after patch |

---

## Smoke-Test Checklist

### Local artifact validation (completed)

| Check | Status |
|---|---|
| Export script runs successfully | Pass |
| PDF exists and is non-zero | Pass — 1,225,899 bytes |
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
| `npm run lint` — 0 errors | Pass |
| `npm run build` — passes | Pass |
| `git diff --check` — clean | Pass |

### Deployed production validation (pending)

These checks require the updated branch to be deployed and the new PDF to be live at `https://singpronuncerepeat.com/downloads/guia-gratis-sing-pronounce-repeat.pdf`.

| Check | Status |
|---|---|
| Home page loads | Pending — verify after redeploy |
| Ebook page loads | Pending — verify after redeploy |
| PDF direct URL responds | Pending — verify after redeploy |
| Download CTA triggers browser download | Pending — verify after redeploy |
| Open-in-browser CTA opens PDF | Pending — verify after redeploy |
| PDF backlink (page 20) is clickable and routes to production ebook page | Pending — verify after redeploy |
| YouTube links open official videos | Pending — verify after redeploy |
| Survey links open Tally form | Pending — verify after redeploy |
| First-group link opens Tally form | Pending — verify after redeploy |

---

## Rollback

If the new PDF causes problems after deployment:

1. Restore the previous `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` from the `feat/phase-0-ebook-pdf-delivery` branch commit `7272e0a`.
2. The `/ebook-gratis` download page remains fully functional — the backlink change only affects what is inside the PDF.
3. Do not remove `docs/design/production/phase-0-ebook.html` or `docs/design/production/phase-0-ebook-production-draft.pdf`.
4. Do not change Tally URLs.
5. Redeploy with the rolled-back PDF.
