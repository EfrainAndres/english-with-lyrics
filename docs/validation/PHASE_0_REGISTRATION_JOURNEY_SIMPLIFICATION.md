# Phase 0 Registration Journey Simplification

## Goal

Remove the redundant in-page CTA step without bypassing the existing provider
disclosure or consent context.

## Change

Primary `Recibir guía gratis` actions on `/` open `/ebook-gratis`. The page now
starts with the registration disclosure section, where the single
provider-hosted `Recibir mi guía gratis` action remains available. The former
introductory hero and its scroll-only CTA were removed.

## Preserved behavior

- The MailerLite action still opens only from the disclosure section and keeps
  its explicit new-tab notice and safe external-link attributes.
- The approved combined consent copy, privacy link, provider URL and
  fail-closed unavailable state are unchanged.
- No native website form, data collection, storage, tracking or analytics
  behavior was introduced.
- `/gracias` remains the post-registration PDF destination; acquisition pages
  do not gain PDF actions.

## Validation

- Homepage CTA destinations resolve to `/ebook-gratis` without a fragment.
- The registration page retains one document H1 and one provider action when
  the handoff is enabled.
- Desktop and 390 px containment are reviewed with no horizontal overflow.
- Lint, production build and `git diff --check` pass before review.

## Scope

This is a conversion-navigation refinement only. It does not change MailerLite,
Vercel configuration, deployment state, workflow, Email 1, consent decisions,
legal copy, PDF bytes or rollout operation.

## Final review

- Owner rendered review: PASS. The approved journey is `/` to
  `/ebook-gratis`, followed by the single provider-hosted registration action.
- Technical review: PASS. The removed hero introduced no alternate provider
  action or acquisition-page PDF route; document heading structure remains
  valid.
- The subsequent visual refinement retains the practice card in the homepage
  hero, where it provides the visual anchor for the offer. Demo instead
  presents the three learning steps in an editorial sequence, and the former
  second three-step section is removed to avoid repeating the same explanation.
  It does not alter the registration journey.
- The visual refinement requires a new Preview review before PR #87 can be
  approved for merge again. Canonical Production remains unchanged until merge
  and its normal deployment complete.
