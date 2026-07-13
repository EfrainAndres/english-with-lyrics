# Phase 0 Privacy Decisions

These records define product and operational direction. They are not legal conclusions. All production collection remains blocked pending owner input, provider verification, public policies, and professional legal review.

## ADR-P01 - Email is the only required identity field

- Status: Proposed.
- Context: Delivery needs a destination, while additional identity fields increase risk and friction.
- Decision: Require only email as an identity field. Consent is separately required as an authorization field.
- Consequences: The form remains small and data collection is minimized.
- Revisit trigger: A necessary, documented workflow cannot operate without another identity field.

## ADR-P02 - First name remains optional

- Status: Proposed.
- Context: A name can personalize messages but is not needed to deliver the guide.
- Decision: Keep `firstName` optional, length-limited, and removable if unused.
- Consequences: Users may receive generic greetings; unnecessary collection is avoided.
- Revisit trigger: Personalization is disabled or evidence shows the field creates confusion.

## ADR-P03 - Explicit unchecked consent

- Status: Proposed; legal review pending.
- Context: Guide delivery and educational follow-up must be communicated clearly.
- Decision: Require a specific consent checkbox that is unchecked by default and linked to the privacy policy.
- Consequences: Submission is blocked without an affirmative action; implementation must retain evidence when supported.
- Revisit trigger: Legal review or provider behavior requires different presentation or separate permissions.

## ADR-P04 - Single opt-in for Phase 0

- Status: Proposed; legal review and provider verification pending.
- Context: The public guide promises immediate access and a second confirmation adds friction.
- Decision: Begin with explicit single opt-in after successful provider submission. Keep double opt-in available as a future improvement.
- Consequences: Lower friction but greater exposure to mistyped or false addresses.
- Revisit trigger: Abuse, deliverability issues, provider requirements, legal advice, higher volume, or new jurisdictions.

## ADR-P05 - No sensitive data in the lead form

- Status: Accepted as architecture constraint.
- Context: Sensitive or detailed learner data is unnecessary for ebook delivery.
- Decision: Do not request sensitive data, age, phone, address, level, preferences, documents, or payment details in the initial form.
- Consequences: Research questions move to optional surveys with separate explanation.
- Revisit trigger: A legally reviewed and necessary use case emerges.

## ADR-P06 - No personal data in analytics

- Status: Accepted as architecture constraint.
- Context: Funnel measurement does not require identifying individuals.
- Decision: Analytics may receive page, CTA location, campaign, source category, error category, and environment, but never email, name, contact ID, answers, or free text.
- Consequences: Cross-system user-level attribution remains intentionally unavailable.
- Revisit trigger: None for Phase 0; any identity-based analytics requires a new privacy architecture and legal review.

## ADR-P07 - No personal data in URLs

- Status: Accepted as architecture constraint.
- Context: URLs can leak through history, logs, screenshots, referrers, and analytics.
- Decision: Do not place email, name, provider contact ID, or other personal data in query strings or paths.
- Consequences: `/gracias?source=ebook` may carry only a controlled non-sensitive hint.
- Revisit trigger: A personalized protected product replaces the public soft gate.

## ADR-P08 - MailerLite is the proposed processor

- Status: Proposed; `[PENDING_PROVIDER_VERIFICATION]`.
- Context: The funnel needs a lightweight form, groups, automation, unsubscribe, and delivery sequence.
- Decision: Use MailerLite as the proposed provider only after due diligence and legal review.
- Consequences: Entity, DPA, locations, subprocessors, evidence, retention, and deletion must be verified before configuration or production use.
- Revisit trigger: Due diligence, current plan terms, or legal review shows a material mismatch.

## ADR-P09 - Brevo remains an inactive fallback

- Status: Proposed.
- Context: A fallback is useful if MailerLite fails operational or legal review.
- Decision: Do not configure or send the same production data to Brevo unless a controlled provider-switch decision is made.
- Consequences: There is one active email system of record, reducing duplication.
- Revisit trigger: MailerLite is rejected or operational needs materially change.

## ADR-P10 - Separate Preview and Production data

- Status: Accepted as architecture constraint.
- Context: QA must not create production leads or contaminate production metrics.
- Decision: Use separate groups/lists or test forms and separate secrets; local uses mock or test values with real submission disabled by default.
- Consequences: Test email is identifiable and production data never becomes a fixture.
- Revisit trigger: The selected provider cannot provide reliable isolation.

## ADR-P11 - No raw form exports in Git

- Status: Accepted as architecture constraint.
- Context: Exports contain personal and free-text data unsuitable for source control.
- Decision: Keep exports outside the repository in owner-controlled storage and delete temporary copies promptly.
- Consequences: Repository analysis contains only aggregate, anonymized findings.
- Revisit trigger: None; future data infrastructure must preserve the prohibition.

## ADR-P12 - `/gracias` is public but unpromoted

- Status: Proposed.
- Context: The PDF is public and strict access control does not add meaningful value.
- Decision: Keep `/gracias` generic, public, unpromoted, and `noindex` when appropriate, with no user-specific content.
- Consequences: Direct visits are safe and still provide the guide.
- Revisit trigger: The route begins serving personalized, paid, or restricted content.

## ADR-P13 - Deliver through a stable page link

- Status: Proposed.
- Context: Attachments are harder to update and may affect deliverability.
- Decision: Email links primarily to `/gracias`, which provides the current PDF, rather than attaching the PDF.
- Consequences: Support and updates are centralized; the public PDF remains a fallback.
- Revisit trigger: Page access proves unreliable for a material audience segment.

## ADR-P14 - Analyze survey data in aggregate

- Status: Accepted as architecture constraint.
- Context: Product learning does not require publishing individual responses or identities.
- Decision: Store only anonymized themes and counts in repository documentation. Do not paste raw answers, emails, or names.
- Consequences: Qualitative nuance must be summarized in secure owner-controlled analysis.
- Revisit trigger: A formal research program with approved storage and consent is introduced.

## ADR-P15 - Do not collect exact age initially

- Status: Proposed; legal review pending.
- Context: The product may appeal to younger learners, but age is unnecessary for guide delivery and creates additional handling risk.
- Decision: Do not request exact age or school in the lead form. Do not set a minimum age without review.
- Consequences: The project cannot use the form alone to resolve minor-user status.
- Revisit trigger: Professional legal review defines a necessary age or guardian workflow.

## ADR-P16 - Professional legal review before production collection

- Status: Required gate.
- Context: Drafts and product decisions cannot determine all obligations, especially provider transfers and younger users.
- Decision: Prohibit production lead collection until owner details, provider due diligence, public policies, contact process, retention, minors approach, and legal review are complete.
- Consequences: Current direct ebook delivery remains active through QA and approval.
- Revisit trigger: Gate is satisfied with documented owner and legal approval.

## Controlled placeholders

| Decision area | Placeholder | Classification |
|---|---|---|
| Responsible-party identity, operating status, location, effective date, and privacy contact | `[PENDING_OWNER_INPUT]` | Production blocker |
| MailerLite entity, processing locations, subprocessors, evidence, and retention | `[PENDING_PROVIDER_VERIFICATION]` | Implementation and production blocker |
| International assessment, retention durations, minors approach, response timelines, and final approval | `[PENDING_LEGAL_REVIEW]` | Production blocker |
| Final naming of internal access roles | `[PENDING_OWNER_INPUT]` | Non-blocking documentation refinement before implementation |
