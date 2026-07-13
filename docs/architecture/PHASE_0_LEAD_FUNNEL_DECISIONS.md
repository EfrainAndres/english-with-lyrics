# Phase 0 Lead Funnel Decisions

## ADR-001 — Soft-Gated Public PDF

- Status: Proposed
- Context: The ebook PDF is already public and the business goal is audience growth, not digital-rights enforcement.
- Decision: Keep the PDF technically public while making email capture the normal promoted path.
- Consequences: The funnel remains lightweight, rollback stays simple, and strict access controls are avoided. Some users will still bypass the lead gate.
- Revisit trigger: If direct-PDF bypass materially harms list growth or if the product shifts toward paid protected assets.

## ADR-002 — Provider Recommendation

- Status: Proposed
- Context: Phase 0 needs a simple form, immediate delivery email, a short nurture sequence, tags or groups, and easy unsubscribe handling without CRM-heavy setup.
- Decision: Recommend MailerLite as the primary provider. Keep Brevo as the fallback.
- Consequences: The first implementation can stay operationally simple. Current official plan details still require verification before setup.
- Revisit trigger: If official-plan verification, sender-domain constraints, or operational needs favor Brevo materially.

## ADR-003 — Embedded Provider Form Before Server-Side Submission

- Status: Proposed
- Context: The project should validate demand without adding unnecessary backend complexity.
- Decision: Start with a provider-hosted or embedded form that creates or updates the contact, triggers automation, and redirects to `/gracias`.
- Consequences: Implementation is faster and simpler, but UI control and custom analytics are more limited than a server-side form.
- Revisit trigger: If branded UX, error-state control, abuse handling, or analytics needs exceed what the provider form can support.

## ADR-004 — Single Opt-In For Initial Phase 0

- Status: Proposed
- Context: The lead magnet promises immediate value and the PDF is already public.
- Decision: Use explicit single opt-in first, with an unchecked consent checkbox and unsubscribe on every email.
- Consequences: Lower friction and better conversion, but weaker list-quality filtering than double opt-in.
- Revisit trigger: If bounce, complaint, spam, or invalid-email rates become problematic.

## ADR-005 — `/gracias` Public But Unpromoted

- Status: Proposed
- Context: A hard-protected thank-you page would add complexity without meaningfully protecting a public PDF.
- Decision: Make `/gracias` public, generic, and unpromoted, with `noindex` when implemented.
- Consequences: Direct visits remain harmless and support-friendly. The route cannot contain user-specific data.
- Revisit trigger: If the thank-you page begins to contain personalized or restricted assets.

## ADR-006 — Delivery By Stable Page Link Instead Of Attachment

- Status: Proposed
- Context: The guide may evolve, and PDF attachments weaken flexibility and can hurt deliverability.
- Decision: Deliver the ebook by linking users to `/gracias`, which then offers the current PDF.
- Consequences: The PDF can change without resending files, support is easier, and analytics can improve later.
- Revisit trigger: If a substantial part of the audience proves unable to access the guide reliably through a web page.

## ADR-007 — Preview/Production Isolation

- Status: Proposed
- Context: Preview QA must not create production leads or contaminate production analytics.
- Decision: Use a separate preview list or group, separate preview secrets, and clearly labeled preview emails.
- Consequences: End-to-end testing remains possible without polluting real production data.
- Revisit trigger: If the selected provider cannot support clean preview isolation without moving to a different integration style.

## ADR-008 — No Database Or Authentication

- Status: Proposed
- Context: The goal is lead capture and nurture, not account-based delivery.
- Decision: Keep database and authentication out of scope for the funnel.
- Consequences: The implementation stays lighter, cheaper, and faster. Identity, account history, and protected assets remain future concerns.
- Revisit trigger: If the product moves from a free soft-gated guide into paid or user-specific experiences.
