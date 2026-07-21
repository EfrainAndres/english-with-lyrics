# Phase 0 Professional Legal-Review Brief

## Purpose and status

This brief prepares Sing Pronunce Repeat materials for external Colombian legal review. It summarizes the current implementation, planned data flows, internal controls and decisions that require counsel confirmation or correction.

```text
Legal-owner implementation: COMPLETE
Internal structured review: PASS
Protected Preview final regression: PASS
Owner rendered-copy review: APPROVED
Professional Colombian legal review: PENDING
Provider contractual/DPA review: PENDING
Production legal publication: PENDING
Production consent linking: PENDING
Production Email 1: INACTIVE
Production automation: INACTIVE
Production email delivery: INACTIVE
Production lead capture: INACTIVE
```

Owner approval confirms the project owner's review of the rendered copy. It is not professional legal approval.

## Project profile

- Project: educational project for learning English with songs.
- Public brand: Sing Pronunce Repeat.
- Secondary identity: English with Lyrics.
- Method: Escríbelo como suena.
- Operator structure: natural person.
- Primary jurisdiction: Colombia.
- Current phase: pre-Production legal and consent review.

The project uses short educational fragments, original pronunciation guidance and educational explanations. This brief concerns personal-data handling and related publication controls; it does not request a conclusion about music-content licensing.

## Current and planned data flows

| Flow | Current state | Intended role |
| --- | --- | --- |
| Current direct ebook delivery | ACTIVE without Production lead capture | A visitor can access the educational resource directly without joining a Production mailing list. |
| Tally | ACTIVE for external surveys and forms voluntarily opened by users | Collect voluntary survey or form responses outside the application. |
| MailerLite Preview | CONTROLLED QA ONLY | Validate isolated form, group, automation, delivery, consent, links and unsubscribe behavior. |
| MailerLite Production | INACTIVE | Future subscriber management and optional educational email only after applicable approval and authorization. |
| Professional privacy mailbox | ACTIVE | Receive privacy communications, petitions, consultations and claims. |
| Production legal publication | PENDING | Publish reviewed legal content and connect final consent language in a later approved phase. |

MailerLite Production lead capture, Production Email 1, Production automation and Production email delivery are inactive. The existing direct ebook-delivery flow does not depend on Production email capture.

## Expected data categories

- Email address.
- Name when supplied voluntarily.
- Consent and registration evidence.
- Subscription and group status.
- Opening, click and unsubscribe events when enabled.
- Technical security and delivery data.
- Responses voluntarily submitted through Tally.

No category in this list should be interpreted as approved for Production merely because it appears in the draft inventory.

## Intended purposes

- Deliver requested educational resources.
- Manage authorization and subscription state.
- Handle privacy requests.
- Send optional educational communications after valid authorization.
- Perform proportionate security and operational monitoring.

Counsel should confirm whether these purposes are sufficiently specific, whether any should be separated, and what disclosures or authorization language each requires.

## Current legal and operational controls

- Explicit-consent architecture for the future Production lead flow.
- Separate public routes for the privacy notice and personal-data treatment policy.
- Documented rights-request workflow for access, consultation, correction, update, consent evidence, revocation, unsubscribe, deletion and complaints.
- Draft retention, deletion and minimum suppression-record approach without an unsupported fixed retention period.
- Not-directed-to-minors strategy without default identity-document collection or age profiling.
- Subscriber-specific unsubscribe support verified in controlled Preview QA.
- Provider inventory covering current purposes, data categories and operational status.
- Server-only responsible-party configuration; personal values are not stored in Git.
- `noindex, nofollow` retained while professional review and Production publication remain pending.
- Safe Production `pending` state that renders neither personal owner fields nor the legal draft.
- Production legal publication, Production consent linking, Production email and Production lead capture remain inactive.

These controls are implementation evidence for review. They are not a statement of legal certification or compliance.

## Provider summary

| Provider | Current purpose | Current status | Legal-review boundary |
| --- | --- | --- | --- |
| MailerLite | Controlled Preview subscriber, consent, group, automation, delivery and unsubscribe QA; future Production email flow | Preview QA verified; Production inactive | Final role, contractual/DPA requirements, processing locations, international-processing treatment and Production disclosures pending counsel review |
| Vercel | Application hosting, page and ebook delivery, technical requests, security and operational records | Hosting active | Final role, contractual terms, processing locations and required disclosures pending counsel review |
| Hostinger | Domain and DNS operation, professional mailboxes, and privacy correspondence | Domain and email active | Final role, mail retention, contractual terms and required disclosures pending counsel review |
| Tally | External surveys and forms voluntarily opened or completed by users | Surveys/forms active | Final role, authorization wording, contractual terms, processing locations and required disclosures pending counsel review |

No provider is classified here as a processor, recipient, transmitter or transfer recipient. Professional contractual and Colombian-law classification remains pending.

## Existing review evidence

- Legal-owner implementation is complete and server-only.
- Internal structured review passed after the correction cycle.
- Protected Preview final regression passed for both legal routes.
- Responsive layout, keyboard navigation, focus states, footer links, robots directives and metadata privacy checks passed.
- Owner rendered-copy review is approved.
- Production pending-state regression passed.
- Personal owner values, private QA evidence and provider authentication data are absent from the repository.

## Decisions requested from counsel

Please confirm or correct the current approach regarding:

1. Sufficiency of the responsible natural person's identification.
2. Whether an identification number must be published or retained privately.
3. Whether publication of the public correspondence channel and configured public telephone is required and sufficient.
4. Sufficiency and separation of the privacy notice and complete treatment policy.
5. Consent wording, consent evidence and the duration for retaining that evidence.
6. Separation between delivery of a requested ebook and optional educational or marketing communications.
7. Consultation, claim, incomplete-claim, transfer and `reclamo en trámite` procedures and deadlines.
8. Proportional requester-identity validation without requiring an identity-document copy by default.
9. Retention, deletion and minimum unsubscribe/suppression-list practices.
10. The not-directed-to-minors strategy and response to suspected minor registrations.
11. Legal classification of MailerLite, Vercel, Hostinger and Tally.
12. Required contracts, DPA records, subprocessors and provider due diligence.
13. International processing and any additional notice or authorization language.
14. Applicability of the Registro Nacional de Bases de Datos (RNBD) to this operator structure and scale.
15. Cookies, Vercel Web Analytics and any required notices or consent controls.
16. Consumer-protection, ecommerce and commercial-email requirements for the planned flow.
17. Conditions for Production publication, the effective date and the policy-update mechanism.
18. Conditions for changing `LEGAL_PUBLICATION_STATUS` to `approved` and reconsidering `noindex, nofollow`.
19. Required corrections before Production consent linking, lead capture, Email 1 or automation can be activated.

Detailed questions and response fields are provided in `docs/legal/PHASE_0_LEGAL_REVIEW_QUESTIONS.md`.

## Private handoff materials

The repository package contains no personal owner values. When counsel is engaged, the following should be shared privately through an agreed secure channel:

- Current rendered legal pages containing the authorized public responsible-party details.
- Current consent copy and planned form context.
- Provider agreements, DPA materials, subprocessor information and processing-location evidence where available.
- Any private operational evidence counsel specifically requests and that is necessary for the review.

Do not add those private materials, rendered exports, account identifiers or private evidence to Git.

## Handoff decision

```text
Package readiness: READY FOR COUNSEL HANDOFF
Professional Colombian legal review: PENDING
Legal approval: NOT GRANTED
Production legal publication: PENDING
Production email and lead capture: INACTIVE
```
