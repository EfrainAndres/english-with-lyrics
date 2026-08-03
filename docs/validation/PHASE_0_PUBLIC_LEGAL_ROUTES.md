# Phase 0 Public Legal Routes

## Status

```text
Implementation status: COMPLETE
Deployed Preview route QA: PASS
Professional Colombian legal review: PASS
Provider contractual/DPA review: PASS
Required substantive legal changes: NONE
Approved-mode source implementation: COMPLETE
Approved-mode local QA: PASS
Application privacy-link preparation: PASS
Owner approved-mode rendered review: PENDING
Protected approved-mode Preview review: PENDING
Stable custom Production origin: VERIFIED
Professional privacy mailbox: VERIFIED
Privacy contact operational: VERIFIED
Public contact address: privacidad@singpronuncerepeat.com
Production environment configuration: PENDING
Production legal publication: PENDING
Production indexing decision: PENDING
Production MailerLite group/form: INACTIVE
Final Production consent linking: PENDING
Rights-request provider operations QA: PENDING
Production Email 1: INACTIVE
Production automation: INACTIVE
Production lead capture: INACTIVE
Controlled rollout: PENDING
Direct PDF delivery: ACTIVE
Legal-publication gate: BLOCKED
Consent gate: BLOCKED
```

## Historical draft audit summary

Audit of `docs/legal/PHASE_0_PRIVACY_POLICY_DRAFT.md`, `docs/legal/PHASE_0_DATA_PROCESSING_POLICY_DRAFT.md`, `docs/legal/PHASE_0_CONSENT_COPY.md`, `docs/legal/PHASE_0_PRIVACY_IMPLEMENTATION_CHECKLIST.md`, and `docs/architecture/PHASE_0_PRIVACY_DECISIONS.md`, performed before implementation:

- Content already approved for implementation: the section structure, the truthful current-state distinctions (Next.js app vs. MailerLite Preview vs. Production), the single opt-in decision, and the non-collection rules for sensitive data and minors.
- Duplicate sections: the "responsible party" identification block and the rights/request-procedure flow appear near-verbatim in both drafts and in the checklist. The public pages keep the privacy policy as the primary explanatory surface and keep the data-processing policy procedural, cross-referencing the privacy policy for the full responsible-party description instead of repeating it.
- Contradictions: none found. Both drafts consistently state Production capture is blocked and drafts are not final.
- Missing owner information: responsible-party name, identification, city/jurisdiction, and operating condition (personal vs. business) are all unset.
- Privacy-contact information: the public mailbox `privacidad@singpronuncerepeat.com` exists and is operational. Responsible-party identity, city/jurisdiction, effective date, final policy approval, and professional legal review remain pending.
- Statements that incorrectly imply Production is active: none found; all drafts explicitly state Production remains blocked.
- Statements needing professional legal review: retention durations, minors/parental approach, response-time commitments, international-transfer assessment, and final approval — all carried into the public pages as open items rather than resolved claims.
- Information that should remain internal rather than public: MailerLite's DPA text, internal request-tracking log format, and internal access-role naming. None of this was copied into the public routes.
- Privacy policy vs. data-processing policy distinction: they are meaningfully distinct. The privacy policy is the informational, learner-facing explanation (scope, what is/isn't collected today, rights, contact). The data-processing policy is the procedural companion (definitions, principles, duties, verification safeguards, incident-management steps). Both routes are implemented; no independent `/aviso-de-privacidad` route was created because none of the audited documents require one — `aviso de privacidad` is used in the drafts only as a generic term for a short notice linking to the policy, not as a required standalone route.

## Routes

- `/privacidad` — public privacy policy page. `src/app/privacidad/page.tsx`.
- `/tratamiento-de-datos` — public data-processing policy page. `src/app/tratamiento-de-datos/page.tsx`.
- No `/aviso-de-privacidad` route was created (not required by the audited drafts or decisions).

Stable Production origin:

- Canonical origin: `https://singpronuncerepeat.com`.
- `https://www.singpronuncerepeat.com` permanently redirects to `https://singpronuncerepeat.com`.
- HTTPS, Vercel Production connection, and Hostinger DNS connection are verified.
- The legal routes now have a stable custom Production origin, but owner details, effective date, final owner approval, and professional legal review remain pending.

Privacy-contact channel:

- Professional privacy mailbox: VERIFIED.
- Privacy contact operational: VERIFIED.
- Public contact address: `privacidad@singpronuncerepeat.com`.
- The public privacy-contact mailbox is operational and was tested manually. Responsible-party details, effective date, final policy approval, professional legal review, and Production lead-capture authorization remain pending.

## Rendering matrix

| Environment | Configuration complete | Rendered state | Indexing |
|---|---:|---|---|
| Any | Missing or invalid | `pending`: neutral preparation page; no full policy or personal values | noindex, nofollow |
| Development or protected Preview | Complete and `draft` | Full environment-backed policy with draft notice and draft wording | noindex, nofollow |
| Local readiness QA | Complete and `approved` | Full environment-backed policy without draft notice or pending-review assertions | noindex, nofollow |
| Production | Not configured in this task | Safe `pending` state | noindex, nofollow |

Configuration completeness is evaluated by `isLegalConfigurationComplete()` in
`src/lib/legal-config.ts` against the validated server-only fields. Publication
state is controlled exclusively by `LEGAL_PUBLICATION_STATUS`; missing or
invalid values fail safely to `pending`. The deprecated
`professionalReviewCompleted` compatibility field now reports the completed
review truthfully but cannot activate publication. `robots: noindex, nofollow`
remains hardcoded in both routes, so indexing stays a separate explicit decision.

## Current local readiness QA

- `pending`: PASS on both routes; full policy and personal fields absent.
- `draft`: PASS on both routes; complete policy, visible draft notice and draft wording retained.
- `approved`: PASS on both routes; complete policy rendered without draft notice or stale pending-review assertions.
- Approved-mode review completion statements: PASS.
- Inactive Production lead capture, Email 1 and automation statements: PASS.
- HTTP response: 200 for both routes in all tested modes.
- Desktop and 390 px containment: PASS; horizontal overflow: NONE.
- Native mailto, telephone and internal policy links: PASS.
- Keyboard-accessible links and visible focus treatment: PASS.
- Metadata and Open Graph personal-value exposure: NONE.
- Raw environment names and placeholder tokens: NONE.
- `noindex, nofollow`: PASS in all three modes.
- Synthetic values and temporary renders: not stored in the repository.

## Privacy guarantees

- No personal data added to source control.
- No responsible-party identity invented; all fallback copy uses natural pending phrasing (e.g. "Pendiente de publicación por el responsable del proyecto"), never raw tokens like `[PENDING_OWNER_INPUT]`.
- Approved mode records the completed professional and provider reviews without
  presenting publication as certification or guaranteed compliance.
- Draft mode remains visibly identified as a working draft.
- No Production lead-capture activation; `lead-form-config.ts` is unchanged and
  the Production component remains absent.
- The application form area now links internally to `/privacidad` and explicitly
  states that the application link does not record consent.
- No new tracking added.
- No local lead storage added.
- No API or database added.

## Manual QA checklist

- [x] `/privacidad` renders in deployed Preview.
- [x] `/tratamiento-de-datos` renders in deployed Preview.
- [x] Preview preparation notice appears.
- [x] Incomplete legal configuration is handled safely.
- [x] Metadata contains `noindex, nofollow`.
- [x] Footer privacy link works.
- [x] Footer data-processing link works.
- [x] Keyboard navigation works.
- [x] Mobile rendering works.
- [x] Desktop rendering works.
- [x] No raw placeholder token is visible.
- [x] No fake responsible-party details appear.
- [x] No Production form is activated.
- [x] Existing ebook flow still works.
- [x] Existing thank-you routes still work.
- [x] Approved-mode source implementation completed.
- [x] Pending, draft and approved local rendering matrix passed.
- [x] Application privacy-link surface prepared at `/privacidad`.
- [ ] Owner approved-mode rendered review.
- [ ] Protected approved-mode Preview review.
- [ ] Production environment configuration and publication.
- [ ] Final MailerLite Production consent control and policy link.

Local smoke checks previously performed in this branch, prior to deployed Preview QA:

- `npm run build` generates `/privacidad` and `/tratamiento-de-datos` as static routes.
- Local dev server (`npm run dev`) confirms both routes return the draft notice, natural pending phrasing (no raw `PENDING_*` tokens), and `<meta name="robots" content="noindex, nofollow">`.
- `/`, `/ebook-gratis`, `/gracias`, `/gracias?source=ebook`, and `/gracias?source=email` all continue to return HTTP 200 locally.
- Footer links to `/privacidad` and `/tratamiento-de-datos` render on `/` and `/ebook-gratis`.

Deployed Preview QA was completed manually. No personal data, screenshots, ephemeral Preview URLs, provider IDs, fake legal details, or private contact information are stored in the repository.

## Remaining Production gates

- Responsible-party name.
- Identification details when legally required.
- City or jurisdiction information.
- Effective date.
- Owner approved-mode rendered review.
- Protected approved-mode Preview review.
- Production server-only environment configuration.
- Production legal publication authorization and execution.
- Explicit Production indexing decision.
- Approved footer/business address.
- Production MailerLite group and form.
- Final Production consent control and policy linking.
- Rights-request process.
- Rights-request operating procedure QA.
- Export/correction/deletion QA.
- Production form.
- Production automation.
- Production lead capture.
- Controlled rollout.

## Decision

```text
Preview decision: PASS

Approved-mode local readiness decision: PASS

Production legal-publication decision: PENDING

Production consent decision: PENDING

Reason:
The three-state implementation now renders pending, draft and approved modes
safely with noindex/nofollow. Professional Colombian legal review and provider
contractual/DPA review pass with no changes requested. Approved-mode local QA
and application privacy-link preparation pass. Production remains blocked by
owner rendered review, protected approved-mode Preview QA, server-only
Production configuration, explicit publication and indexing decisions, final
MailerLite consent linking, rights-operation QA and controlled rollout.
```
