# Phase 0 Trust and Contact Footer

## Scope

This branch adds one shared footer to `/`, `/ebook-gratis`, and `/gracias`.
It uses only the privacy contact method already published on the existing legal
routes, plus the existing `/privacidad`, `/tratamiento-de-datos`, and direct-PDF
destinations. It creates no new contact channel, legal commitment, policy,
cookie, analytics signal, form, storage, API, provider resource, configuration,
deployment, or rollout operation.

## Visitor-facing content

- Brand and method: Sing Pronunce Repeat / English with Lyrics and
  Escríbelo como suena.
- Factual context: the guide is educational, uses short excerpts, and does not
  include full lyrics.
- Direct PDF: remains a clearly labelled independent resource without
  registration.
- Trust and contact links: descriptive internal links to the privacy and data
  policy routes, plus the already public privacy contact method.

The footer does not claim legal compliance, certification, cookie compliance,
testimonials, learner totals, ratings, or future product availability.

## Accessibility and route checks

- Links use visible focus treatment and descriptive names.
- Mobile order remains content followed by navigation links; desktop uses the
  same order in a compact two-column layout.
- The shared footer is tested at desktop and 390 px without horizontal overflow.
- `/`, `/ebook-gratis`, `/gracias`, `/privacidad`, `/tratamiento-de-datos`, and
  direct PDF remain healthy.
- Provider handoff and fail-closed fallback are unchanged; no native email/name
  fields or app-side submission are added.
- Existing `noindex, nofollow` rollout metadata and direct-PDF independence are
  unchanged.

## Deferred work

- Testimonials, ratings, learner counts and outcomes require genuine approved
  evidence.
- New legal pages, commitments, cookie choices or contact channels require
  owner and legal decisions.
- Funnel custom-event analytics remains separate because the connected Vercel
  Hobby plan does not support dashboard-visible custom events.
