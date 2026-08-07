# Phase 0 Data-Subject Rights Workflow

## Status

- Workflow status: DRAFT DOCUMENTED
- Operational privacy channel: `privacidad@singpronuncerepeat.com`
- Identity-verification details: PENDING PROFESSIONAL REVIEW
- Domicile/correspondence Preview correction: PASS
- Remaining internal-review corrections: IMPLEMENTED
- Protected Preview regression QA: PENDING
- Owner re-review: PENDING
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

- Consultations: a maximum of 10 business days counted from receipt. If a response is not possible within that term, notify the requester of the reason and the new date, which may not exceed 5 business days after the initial term expires.
- Complaints or claims: a maximum of 15 business days counted from the day after receipt. If a response is not possible within that term, notify the requester of the reason and the new date, which may not exceed 8 business days after the initial term expires.

These are draft operational commitments subject to final professional Colombian legal review.

## Request-Handling Responsibility

- Person responsible for petitions, consultations and claims: the person responsible for the Sing Pronunce Repeat project.
- Channel: `privacidad@singpronuncerepeat.com`.

No separate legal department or company is designated.

## Draft Claim Procedure

1. Review whether the claim contains enough information to identify the requester, locate the applicable record and understand the requested correction or action.
2. If the claim is incomplete, request correction or completion within 5 business days after receipt.
3. If the requester does not respond within 2 months after that request, the claim may be considered withdrawn.
4. If a non-competent party receives the claim, transfer it to the appropriate party within no more than 2 business days and inform the requester.
5. Once a claim is complete, add the notation `reclamo en trámite` to the applicable record within no more than 2 business days and retain it until the claim is resolved.
6. Resolve the claim within the draft claim deadline and preserve only minimum evidence of the decision and response.

This is an operational draft pending professional Colombian legal review. It does not require a copy of an identity document by default.

## Proportional Identity Validation

Validation should use the least intrusive information reasonably capable of reducing unauthorized disclosure or alteration. Possible checks include confirming control of the email address associated with the record or asking for limited contextual information already held by the applicable system.

A government identity document must not be requested by default. The final verification rules, exceptions and escalation criteria remain pending professional review.

## System Actions

| System | Possible action | Current validation status |
| --- | --- | --- |
| MailerLite | Locate, export, correct, unsubscribe, restrict or delete subscriber records and consent evidence | PASS — controlled Preview-only provider operations QA; no Production resource involved |
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

- Protected Preview regression QA after the internal-review corrections.
- Owner re-review of the rendered policies.
- Closure of the internal structured review.
- Professional Colombian legal review.
- MailerLite provider export, correction and deletion workflow QA: PASS for one controlled Preview-only subscriber. Tally and Hostinger operations remain untested.
- Final Production consent linking.
- Controlled Production rollout approval.
