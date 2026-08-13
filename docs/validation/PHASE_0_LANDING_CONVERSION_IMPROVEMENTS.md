# Phase 0 Landing Conversion Improvements

## Scope and release boundary

This record covers the first post-rollout landing-conversion improvement branch.
It changes repository source, three derived preview assets, backlog status, and
this documentation only. It does not deploy to canonical Production or modify
MailerLite, Vercel configuration, Analytics configuration, the provider form
destination, consent copy, Email 1, legal-policy text, indexing, subscribers, or
the active controlled rollout.

The Production rollout remains **ACTIVE / IN PROGRESS** under its existing
10-real-subscriber / 72-hour monitored boundary. Merging is not authorized by
this branch or record.

## CTA journey

Before:

1. `/ebook-gratis` led with two direct-PDF actions.
2. The provider-hosted handoff appeared below the hero.
3. Survey and first-group actions competed with the guide journey on the same
   page.

After this branch:

1. The hero leads with the existing external provider-hosted handoff using
   `Recibir mi guía gratis`.
2. Direct PDF download remains visible as a secondary, independent alternative
   and does not require email or consent.
3. `/ebook-gratis` and the homepage contain no survey or first-group CTA.
4. The unchanged approved survey and first-group destinations appear only as
   clearly optional next actions after the guide/download context on `/gracias`.

The website still renders no native email/name fields, form submission route,
personal-data storage, analytics event, cookie, or tracking parameter.

## Ebook preview provenance

The three WebP previews are derived only from the existing approved downloadable
32-page PDF at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`:

- Page 1: cover.
- Page 4: Escríbelo como suena method explanation and its limitations.
- Page 24: first activity in the three-day challenge.

Each page was rendered directly from the PDF, visually checked, resized to 650
pixels wide, and encoded as WebP for the landing page. The downloadable PDF was
not edited or recompressed. No artist photograph, album art, third-party logo,
invented screenshot, or expanded lyric content was introduced.

## Implemented content decisions

- Benefit-led hero for Spanish-speaking learners.
- Accurate method explanation: Spanish-friendly reading support, no IPA claim,
  no exact-pronunciation claim, and continued reliance on official audio.
- Clear basic/intermediate learner fit and music-motivated use case.
- Explicit “Esta guía es para ti si…” and “Esta guía no es…” boundaries.
- FAQ covering lyrics, level, delivery/download, mobile use, cost, and the method.
- Unsupported “Construido con estudiantes reales” statement and related
  future-launch framing removed from the homepage journey.

## Validation matrix

| Check | Result |
|---|---|
| Lint | PASS |
| Production build | PASS |
| `git diff --check` | PASS |
| Desktop visual containment | PASS |
| 390 px visual containment | PASS |
| `/ebook-gratis` native personal-data fields/forms | ZERO |
| `/ebook-gratis` survey/first-group CTAs | ZERO |
| `/gracias` optional survey/first-group destinations | PRESERVED |
| Temporary `/ebook-gratis` `noindex, nofollow` | PRESERVED |
| Direct PDF availability and independence | PASS |
| Home, thank-you, legal-route and PDF regressions | PASS |
| Custom analytics, cookies, tracking parameters or PII logging added | ZERO |
| Provider/Vercel/Production resource or deployment changes | ZERO |

## Intentionally deferred

- Testimonials, learner quotes, ratings, or outcome statistics: deferred until
  genuine, permissioned evidence exists.
- New legal or accessibility claims: deferred to the appropriate owner/reviewer;
  existing legal-policy text is unchanged.
- Custom conversion analytics or funnel events: deferred to a separate approved
  implementation with privacy and tooling review.
- Any public deployment or change to the active controlled rollout: deferred to
  a separately authorized release task.
