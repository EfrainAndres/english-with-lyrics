# Phase 0 Public Legal Routes

## Status

```text
Implementation status: COMPLETE
Preview route QA: PENDING
Legal content status: DRAFT PENDING OWNER INPUT
Professional legal review: PENDING
Production legal readiness: NO-GO
```

## Draft audit summary

Audit of `docs/legal/PHASE_0_PRIVACY_POLICY_DRAFT.md`, `docs/legal/PHASE_0_DATA_PROCESSING_POLICY_DRAFT.md`, `docs/legal/PHASE_0_CONSENT_COPY.md`, `docs/legal/PHASE_0_PRIVACY_IMPLEMENTATION_CHECKLIST.md`, and `docs/architecture/PHASE_0_PRIVACY_DECISIONS.md`, performed before implementation:

- Content already approved for implementation: the section structure, the truthful current-state distinctions (Next.js app vs. MailerLite Preview vs. Production), the single opt-in decision, and the non-collection rules for sensitive data and minors.
- Duplicate sections: the "responsible party" identification block and the rights/request-procedure flow appear near-verbatim in both drafts and in the checklist. The public pages keep the privacy policy as the primary explanatory surface and keep the data-processing policy procedural, cross-referencing the privacy policy for the full responsible-party description instead of repeating it.
- Contradictions: none found. Both drafts consistently state Production capture is blocked and drafts are not final.
- Missing owner information: responsible-party name, identification, city/jurisdiction, and operating condition (personal vs. business) are all unset.
- Missing privacy-contact information: no operational contact channel exists yet.
- Statements that incorrectly imply Production is active: none found; all drafts explicitly state Production remains blocked.
- Statements needing professional legal review: retention durations, minors/parental approach, response-time commitments, international-transfer assessment, and final approval — all carried into the public pages as open items rather than resolved claims.
- Information that should remain internal rather than public: MailerLite's DPA text, internal request-tracking log format, and internal access-role naming. None of this was copied into the public routes.
- Privacy policy vs. data-processing policy distinction: they are meaningfully distinct. The privacy policy is the informational, learner-facing explanation (scope, what is/isn't collected today, rights, contact). The data-processing policy is the procedural companion (definitions, principles, duties, verification safeguards, incident-management steps). Both routes are implemented; no independent `/aviso-de-privacidad` route was created because none of the audited documents require one — `aviso de privacidad` is used in the drafts only as a generic term for a short notice linking to the policy, not as a required standalone route.

## Routes

- `/privacidad` — public privacy policy page. `src/app/privacidad/page.tsx`.
- `/tratamiento-de-datos` — public data-processing policy page. `src/app/tratamiento-de-datos/page.tsx`.
- No `/aviso-de-privacidad` route was created (not required by the audited drafts or decisions).

## Rendering matrix

| Environment | Configuration complete | Rendered state | Indexing |
|---|---:|---|---|
| Development | No | Draft with preparation notice | noindex |
| Preview | No | Draft with preparation notice | noindex |
| Production | No | Neutral preparation state | noindex |
| Future Production | Yes and approved | Complete policy | Explicit decision required |

Configuration completeness is evaluated by `isLegalConfigurationComplete()` in `src/lib/legal-config.ts` against five server-only environment variables (name, identification, city, privacy contact, effective date) plus an explicit `professionalReviewCompleted` flag. All five remain unset today, so both routes render the incomplete-state paths in every environment. `robots: noindex, nofollow` is hardcoded in both routes' metadata regardless of configuration completeness, so indexing stays an explicit future decision rather than something configuration completeness can trigger automatically.

## Privacy guarantees

- No personal data added to source control.
- No responsible-party identity invented; all fallback copy uses natural pending phrasing (e.g. "Pendiente de publicación por el responsable del proyecto"), never raw tokens like `[PENDING_OWNER_INPUT]`.
- No legal approval claimed; both routes state the content is a working draft, not a final policy.
- No Production lead-capture form activation; `LeadCaptureForm` and `lead-form-config.ts` are unchanged.
- No new tracking added.
- No local lead storage added.
- No API or database added.

## Manual QA checklist

- [ ] `/privacidad` renders in Development.
- [ ] `/tratamiento-de-datos` renders in Development.
- [ ] Preview notice appears.
- [ ] Production-safe incomplete state works.
- [ ] Metadata contains noindex/nofollow while incomplete.
- [ ] Footer links work.
- [ ] Keyboard navigation works.
- [ ] Mobile rendering works.
- [ ] Desktop rendering works.
- [ ] No placeholder token is visible.
- [ ] No fake responsible-party details appear.
- [ ] No Production form is activated.
- [ ] Existing ebook flow still works.
- [ ] Existing thank-you routes still work.

Local smoke checks already performed in this branch (not a substitute for the Preview/Production manual QA above):

- `npm run build` generates `/privacidad` and `/tratamiento-de-datos` as static routes.
- Local dev server (`npm run dev`) confirms both routes return the draft notice, natural pending phrasing (no raw `PENDING_*` tokens), and `<meta name="robots" content="noindex, nofollow">`.
- `/`, `/ebook-gratis`, `/gracias`, `/gracias?source=ebook`, and `/gracias?source=email` all continue to return HTTP 200 locally.
- Footer links to `/privacidad` and `/tratamiento-de-datos` render on `/` and `/ebook-gratis`.

## Production blockers

- Responsible-party name.
- Identification details when legally required.
- City or jurisdiction information.
- Privacy contact.
- Effective date.
- Final owner approval.
- Professional legal review.
- MailerLite due diligence.
- Branded sender mailbox.
- SPF.
- DKIM.
- DMARC.
- Approved footer/business address.
- Production consent copy.
- Rights-request process.
- Export/correction/deletion QA.
- Production form.
- Production automation.
- Controlled rollout.

## Decision

```text
Preview decision: READY FOR MANUAL ROUTE QA

Production decision: NO-GO FOR PRODUCTION LEAD CAPTURE
```
