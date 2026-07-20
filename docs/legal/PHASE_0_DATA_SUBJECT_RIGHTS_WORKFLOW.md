# Phase 0 Data-Subject Rights Workflow

## Status

- Workflow status: DRAFT DOCUMENTED
- Operational privacy channel: `privacidad@singpronuncerepeat.com`
- Identity-verification details: PENDING PROFESSIONAL REVIEW
- Workflow QA: PENDING
- Production lead capture: INACTIVE

This document defines a private operational workflow for handling requests about personal data. It does not contain requesters' identities, message contents, account identifiers, or other private evidence.

## Request Categories

- Access.
- Consultation.
- Correction.
- Update.
- Consent evidence.
- Revocation.
- Unsubscribe.
- Deletion.
- Complaint.

## Draft Operating Procedure

1. Receive the request through `privacidad@singpronuncerepeat.com`.
2. Record the receipt date and request category in a restricted operational record.
3. Validate the requester proportionally to the nature and risk of the request. Do not require a copy of an identity document by default.
4. Identify the systems and providers that may contain applicable records.
5. Search MailerLite, Tally, Hostinger email records and relevant project records without copying private evidence into Git.
6. Export, correct, update, unsubscribe, restrict, revoke consent evidence or delete information as appropriate to the request and applicable limitations.
7. Respond through the verified channel within the applicable draft deadline.
8. Retain only the minimum evidence needed to demonstrate receipt, handling and response; remove or anonymize evidence when no valid purpose or obligation remains.

## Draft Deadlines

- Consultations: up to 10 business days.
- Complaints or claims: up to 15 business days.
- Applicable extension: up to 8 additional business days after notifying the requester of the reason and revised response date.

These are draft operational commitments subject to final professional Colombian legal review.

## Proportional Identity Validation

Validation should use the least intrusive information reasonably capable of reducing unauthorized disclosure or alteration. Possible checks include confirming control of the email address associated with the record or asking for limited contextual information already held by the applicable system.

A government identity document must not be requested by default. The final verification rules, exceptions and escalation criteria remain pending professional review.

## System Actions

| System | Possible action | Current validation status |
| --- | --- | --- |
| MailerLite | Locate, export, correct, unsubscribe, restrict or delete subscriber records and consent evidence | End-to-end rights QA pending |
| Tally | Locate, export, correct where supported, or delete submitted form records | End-to-end rights QA pending |
| Hostinger | Locate privacy correspondence and retain or delete minimum operational evidence as appropriate | End-to-end rights QA pending |
| Project records | Locate only relevant operational records and correct, restrict, delete or anonymize as appropriate | End-to-end rights QA pending |

## Security and Evidence Rules

- Keep the request log private and access-restricted.
- Never commit addresses, request contents, exports, screenshots, provider IDs or personalized links.
- Share only the minimum information needed with an applicable provider.
- Record decisions and completion dates without duplicating the requester's content.
- Escalate uncertain identity, legal-exception or provider-capability questions for professional review.

## Open Gates

- Manual Preview configuration of legal-owner values.
- Preview legal-page QA.
- Owner review of the rendered policies.
- Internal structured legal review.
- Professional Colombian legal review.
- Provider export, correction and deletion workflow QA.
- Final Production consent linking.
- Controlled Production rollout approval.
