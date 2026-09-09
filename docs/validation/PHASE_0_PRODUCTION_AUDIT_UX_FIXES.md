# Phase 0 Production Audit UX Fixes

## Scope and baseline

This record covers the repository-side user-journey fixes requested after the
canonical Production audit. The feature work started from verified
`origin/main` at `a03b192e241c2ccedc02fd8b3e7358b6c382b653`, the merge commit
for PR #81. During final review, the branch was synchronized with
`origin/main` at `36145de0d3ddb58d3007109a074050b87295e4aa`, which includes the
merged PR #82 publication record. That base integration changed no source or
public artifact; the PR #83 comparison remains limited to the eleven paths
recorded here.

## Findings resolved

- `/ebook-gratis` shows a prominent `Recibir mi guía gratis` in-page action in
  its first viewport only when the provider handoff is enabled. The target is the
  existing disclosure section, receives focus after keyboard activation and
  appears before the external provider action.
- The provider action visibly states that it opens a MailerLite form in a new
  tab. Its destination, safe external-link attributes and approved combined
  consent wording remain unchanged.
- Both legal pages provide return links to the homepage and guide. The data
  policy adds a native, collapsible table of contents with all 19 existing
  headings and stable anchors; keyboard activation transfers focus to the chosen
  heading.
- The static lesson demonstration no longer uses playback-button styling and is
  explicitly labeled `Ejemplo visual`.
- `/gracias` uses guide-ready footer copy and keeps PDF access primary while the
  survey and first-group actions remain optional. The privacy mailbox is labeled
  only as a channel for privacy and rights matters, and footer links have larger
  touch and visible-focus areas without destination changes.
- Public nonlegal copy explains the relationship between Sing Pronunce Repeat
  and English with Lyrics and replaces unnecessary rollout/configuration terms
  with user-facing instructions.

## Preserved boundaries

- No MailerLite resource, form, subscriber, workflow or email was accessed or
  changed.
- No Vercel configuration, deployment, Analytics, cookie, storage, API,
  authentication or tracking behavior changed.
- Acquisition pages contain no PDF link. `/gracias` retains its two existing PDF
  actions, and the stable PDF remains independently public if its URL is known.
- Approved consent wording, legal purposes, dates, rights statements and other
  substantive legal wording are unchanged. The legal-page diff is navigation,
  table-of-contents and focus markup only.
- Robots directives and the PDF artifact are unchanged.
- Provider-hosted title/branding/typography, native consent-error accessibility,
  authenticated live workflow verification and rollout authorization remain
  separate provider-side or operational work.

## Validation

- Lint and configured Production-style build: PASS.
- Production-style build with missing handoff: PASS.
- Configured behavior: one early in-page CTA, one safe provider action, explicit
  new-tab notice, approved disclosure and zero acquisition-page PDF links.
- Unavailable behavior: no early or provider CTA, clear retry guidance, preserved
  privacy disclosure and zero PDF links.
- Route smoke: `/`, `/ebook-gratis`, `/gracias`, `/privacidad`,
  `/tratamiento-de-datos` and the PDF return HTTP 200 with expected content types.
- Desktop and exact 390 x 844 visual containment: PASS on all affected surfaces;
  no horizontal overflow observed.
- Keyboard review: early CTA focus/scroll, provider link focus, legal return
  links, table disclosure, all 19 anchors and destination focus pass.
- `/gracias`: two PDF actions retained; registration-oriented footer sentence
  absent; privacy/rights label present.
- PDF identity: repository and baseline SHA-256 remain
  `45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09`.
- Robots, substantive legal-copy diff, collection/tracking and sensitive-value
  checks: PASS.
- `git diff --check`: PASS.
- Draft PR #83 Vercel and Vercel Preview Comments checks: PASS. No Preview URL
  or deployment identifier is retained in this record.

## Final PR review

- The complete eleven-path diff was reviewed after synchronizing with the
  current `origin/main`; the only integration conflict was the changelog, and
  both independent entries were preserved.
- `src/lib/lead-form-config.ts` retains the existing URL validator, environment
  selection and fail-closed branches. Only user-facing Production failure copy
  changed. Missing evidence from the prior review remains applicable because
  the source and public artifact tree are unchanged; fresh blank, malformed and
  unsupported-HTTP Production-style builds also expose neither registration
  action nor PDF fallback.
- A fresh configured Production-style build and route smoke passed. Desktop and
  exact 390 x 844 inspection reconfirmed the first-screen CTA, destination
  focus/scroll, new-tab disclosure, static visual example, guide-ready thank-you
  state, legal return navigation, all 19 table-of-contents destinations and no
  horizontal overflow.
- The approved consent sentence matches its repository sources exactly. Legal
  dates, purposes, rights and substantive wording; robots and Analytics code;
  provider destinations; and PDF bytes remain unchanged. No new collection,
  tracking, sensitive value, provider-status claim, delivery guarantee,
  multi-email sequence or rollout authorization was introduced.
- Review outcome: **APPROVED FOR MERGE — NOT MERGED**, subject to the required
  final PR checks passing on the pushed review HEAD.
