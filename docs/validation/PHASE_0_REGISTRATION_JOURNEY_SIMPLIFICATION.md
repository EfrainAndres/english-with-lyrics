# Phase 0 Registration Journey Simplification

## Goal

Remove the homepage visitor's redundant in-page CTA step without bypassing the
existing provider disclosure or consent context.

## Change

All primary `Recibir guía gratis` actions on `/` now use
`/ebook-gratis#recibir-guia`. A visitor arriving from the homepage lands
directly at the existing registration disclosure section, where the single
provider-hosted `Recibir mi guía gratis` action remains available.

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

- Homepage CTA destinations resolve to the registration-section fragment.
- Keyboard navigation and fragment focus retain the existing section behavior.
- Desktop and 390 px containment are reviewed with no horizontal overflow.
- Lint, production build and `git diff --check` pass before review.

## Scope

This is a conversion-navigation refinement only. It does not change MailerLite,
Vercel configuration, deployment state, workflow, Email 1, consent decisions,
legal copy, PDF bytes or rollout operation.
