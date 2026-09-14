# Website brand-logo update

## Scope

Based on merged main `adefc2b` (including PR #84). Uses the owner's
supplied `logo1-l.png` horizontal lockup and `logo2-l.png` compact
variant. The smaller PNGs show the same two designs at lower resolution.
Local WebP conversions preserve artwork, alpha and intrinsic proportions:
786 × 176 (19,938 bytes), 524 × 166 (18,920 bytes).

The shared BrandLogo replaces duplicated logo implementations on home,
ebook and thank-you headers, adds the matching mark to SiteFooter, and
updates the retained legacy legal-layout logo references. Current public
legal pages use their separate existing shell and are unchanged.
The redundant desktop header brand text is removed; the secondary brand
remains explained in page content and footer.

Below 640 px the compact variant renders at 150 px wide; larger screens
use the horizontal variant at 280 px. Intrinsic dimensions prevent
stretching. The home header can wrap on very narrow screens.

## Validation

- Lint, production build and git diff --check: PASS.
- Local built-site browser checks: 320, 390, 768 and 1440 px across
  home, ebook, thank-you and both legal routes: HTTP 200, no horizontal
  overflow. Logos loaded with the expected variant and aspect ratio.
- Desktop/390 px screenshots inspected: header, footer and mobile
  thank-you navigation remain legible without collisions.
- Acquisition pages: zero direct PDF links. Thank-you: two PDF actions.
- Four existing route-scoped noindex, nofollow directives preserved.
- No native email/name fields added; no consent, legal copy, provider,
  environment configuration, tracking, workflow or email changes.
- Served local PDF SHA-256:
  `45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09`.
- These checks used the local build and development-runtime content,
  not a new provider submission or Production email-delivery test.

## Publication boundary

## PR #85 final review

- Implementation head `a0f7451`: full ten-path diff reviewed against current
  main, with no blocking findings or unrelated changes.
- Authenticated Vercel Preview: desktop home and exact 390 px home,
  ebook and thank-you inspected. Header/footer artwork, intrinsic proportions,
  legibility and navigation passed; mobile routes had no horizontal overflow.
- Preview acquisition still has no direct PDF links; thank-you retains two.
  No provider form was submitted. Preview-specific thank-you copy is expected.
- Existing successful build/lint and four-width local regression evidence
  remains applicable: review adds documentation only, not application changes.
- The unauthenticated browser attempt reached Vercel SSO, not the website;
  the authenticated session resolved that review-access limitation.
- APPROVED FOR MERGE — NOT MERGED. Canonical verification remains post-merge.

### Production status

Production publication is pending merge and canonical deployment
verification. No manual deployment or external operating-state change
was performed. Existing ebook artwork, original brand assets and favicons
remain untouched; this task updates website logo placements only.
