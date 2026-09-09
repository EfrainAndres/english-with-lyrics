# Phase 0 Consent-Purpose Alignment

## Post-merge publication status

PR #81 was merged as `a03b192e241c2ccedc02fd8b3e7358b6c382b653` and the
approved revision reached canonical Production on 2026-09-08. The original
effective date was preserved and only the last-updated date was changed through
the existing Production legal configuration before rebuilding the verified merge
commit. Canonical smoke, responsive containment, robots and PDF identity pass.

The publication record and current operational boundary are documented in
`docs/validation/PHASE_0_CONSENT_PRODUCTION_PUBLICATION.md`. MailerLite internal
status remains unverified because no authenticated read-only provider surface
was available; the old 72-hour authorization is not treated as current.

## Decision and scope

On 2026-09-08, the project owner selected one required consent checkbox,
initially unchecked, for these related purposes:

- Deliver the requested free guide by email.
- Send educational communications related to Sing Pronunce Repeat / English
  with Lyrics.

The existing checkbox wording remains unchanged:

> Acepto recibir por correo la guía gratuita y contenido educativo relacionado
> con Sing Pronunce Repeat / English with Lyrics. Puedo cancelar la suscripción
> en cualquier momento.

This decision does not add a second checkbox, unrelated marketing, new data,
tracking, storage or an access-control claim. Optional survey, first-group and
other unrelated purposes keep their own disclosures and are not automatically
covered by this authorization.

## Meaning before and after

Before this change, the public privacy policy described guide delivery as the
immediate purpose and said educational communications required a separate
authorization. That contradicted the existing combined checkbox and the public
handoff disclosure.

After this change, the privacy policy, data-treatment policy, handoff disclosure
and canonical consent-copy record state the same meaning: one affirmative action
covers guide delivery and related educational communications. The checkbox is
required, is unchecked until selected, and preserves unsubscribe and the public
privacy-rights channel. A new or unrelated purpose still requires separate
evaluation, disclosure and authorization when applicable.

## Legal-review boundary

The professional legal-review PASS dated 2026-07-20 remains historical evidence
for the package reviewed at that time. It does not supply the approval provenance
for the revised policy and handoff wording in this change.

For this revision, the project owner explicitly confirmed that a professional
reviewed and approved the revised consent-policy wording in PR #81. Status:
**OWNER-CONFIRMED PROFESSIONAL APPROVAL**. The owner's confirmation is the only
approval provenance recorded here. No reviewer name, credentials, review date,
certificate or supporting document is asserted or stored. The approval does not
constitute certification or a guarantee of compliance.

The effective and last-updated dates used by the public legal routes come from
the existing server-only legal configuration and identify the version actually
published. Before merge, the configured dates remained associated with the
earlier live version. At publication, the original effective date was preserved
because the approved revision did not require a new one, while the last-updated
date was set to the actual 2026-09-08 Production publication date. No professional
review date is inferred from that release date.

## Operational boundary

The repository contains a historical 10-subscriber / 72-hour rollout record.
No recent closure or current-status record establishes that the original window
remains active on 2026-09-08. This task does not inspect or change MailerLite,
Vercel configuration, Analytics, deployment state, subscribers, workflows or
email delivery. Current operational status therefore requires separate,
authorized verification.

Only Email 1 is documented as implemented. Emails 2–4 remain planning outlines;
the public handoff and policies do not represent them as an active sequence.

## Preserved acquisition flow

- Homepage ebook actions continue to route to `/ebook-gratis`.
- A configured `/ebook-gratis` continues to expose one safe external provider
  handoff and no direct PDF link.
- Missing or invalid handoff configuration continues to fail closed without a
  native form or PDF fallback.
- `/gracias` retains immediate PDF download/open actions and keeps the survey and
  first-group actions optional.
- The stable static PDF remains public when its URL is independently known.
- No authentication, token, signed URL or technical access control is added.

## Provider-side follow-ups

These audit findings are intentionally left for a separately authorized provider
task:

- Hosted-form title and staging/inactive wording.
- Brand presentation on the hosted form.
- Persistent Spanish field labels.
- Mobile typography and touch-target sizing.
- Accessible feedback when required consent is missing.
- Confirmation that the configured checkbox is required and initially unchecked.
- Confirmation of the current workflow and Email 1 operational status.

No provider form, setting, label, contact, recipient, workflow or email content
was changed or exercised by this branch.

## Validation record

Baseline and branch:

- PR #80 merge verified at `42739dc9200a045a52617e7750d4237bac0e822f`.
- Local `main` and `origin/main` matched at implementation start.
- Branch: `feat/phase-0-consent-purpose-alignment`.

Validation results for the reviewed PR are recorded here:

- Lint: PASS.
- Build with synthetic legal values and a synthetic safe provider URL: PASS.
- Consent wording agreement: PASS; checkbox, handoff, privacy policy,
  data-treatment policy and canonical copy record cover the same two purposes.
- Approval provenance: PASS; owner-confirmed professional approval is recorded
  separately from the historical 2026-07-20 PASS, without a reviewer identity,
  credentials, review date, certificate or supporting document.
- Publication-date convention: PASS; both canonical legal routes show the
  preserved original effective date and the 2026-09-08 last-updated date for the
  published revision.
- Configured handoff: PASS; exactly one external CTA with
  `noopener noreferrer`, exact `/privacidad` navigation, zero native forms or
  personal-data fields and zero PDF links on `/ebook-gratis`.
- Unavailable handoff: PASS; concise unavailable state, combined-purpose
  disclosure, exact privacy navigation, zero provider/PDF links and zero native
  forms or personal-data fields.
- Desktop and exact 390 px layout: PASS with no horizontal overflow on the
  changed application surfaces.
- Legal navigation: PASS; privacy rights channel and the internal
  `/privacidad` to `/tratamiento-de-datos` link remain present.
- `/gracias`: PASS; two immediate PDF actions plus secondary optional survey and
  first-group actions remain present.
- Public PDF: PASS; HTTP 200, `application/pdf`, 1,315,500 bytes and unchanged
  SHA-256 `45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09`.
- Robots-directive regression: PASS; `/ebook-gratis`, `/gracias`, `/privacidad`
  and `/tratamiento-de-datos` retain `noindex, nofollow`; homepage behavior is
  unchanged.
- `git diff --check`: PASS.
- Changed-path sensitive-value scan: PASS; no new secret, credential, token,
  private key, provider identifier or personal owner value.
- Draft PR #81 Vercel and Vercel Preview Comments checks: PASS. No Preview URL,
  deployment identifier or provider configuration value is retained here.
