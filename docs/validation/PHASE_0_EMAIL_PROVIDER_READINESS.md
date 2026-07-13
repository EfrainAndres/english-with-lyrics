# Phase 0 Email Provider Readiness

## Readiness status

`PARTIALLY READY`

Production is not ready. This status only means the repository now has a documented provider foundation for non-production preparation.

## Capability evidence

Official MailerLite sources verified in this phase support:

- Embedded forms.
- Group-based audience organization.
- Form-to-group assignment.
- Group-triggered automations.
- Custom fields.
- Single opt-in and double opt-in configuration.
- Custom success-page redirects.
- API bearer-token authentication.
- Automation history and reporting.
- Domain authentication guidance.
- Public privacy policy, terms, DPA, trust page, and sub-processor annex.

Still requiring account-level verification:

- Exact consent evidence preserved by the intended embedded-form setup.
- Subscriber deletion workflow for the final operating model.
- Preview/test-account handling beyond separate forms and groups.
- Sender-verification flow for the chosen mailbox.
- Retention after account termination in the exact subscribed plan and operating context.

## Account readiness

| Item | Status |
|---|---|
| Account created | Pending manual verification |
| Owner verification | Pending manual verification |
| MFA | Pending manual verification |
| Sender created | Pending manual verification |
| Domain authenticated | Pending manual verification |
| DPA reviewed | Pending manual verification |
| Sub-processors reviewed | Pending manual verification |
| Processing locations reviewed | Pending manual verification |
| Export tested | Pending manual verification |
| Correction tested | Pending manual verification |
| Deletion tested | Pending manual verification |
| Unsubscribe tested | Pending manual verification |

## Preview readiness

| Item | Status |
|---|---|
| Preview group | Documented, manual creation pending |
| Preview form | Documented, manual creation pending |
| Preview automation | Documented, manual creation pending |
| Test sender | Pending manual verification |
| Test contacts | Pending manual verification |
| Test redirect | Blocked until a safe redirect target exists |
| Preview secrets | Not required for the current provider-hosted-form direction |
| No Production contact creation | Documented requirement; manual verification pending |

## Production blockers

- Responsible-party details.
- Privacy contact.
- Public privacy route.
- Applicable public treatment-policy route.
- Professional legal approval.
- MailerLite due diligence.
- Sender-domain authentication.
- Production form approval.
- `/gracias`.
- Email 1.
- Unsubscribe test.
- Deletion/export test.
- Preview isolation test.
- Controlled rollout approval.

## Go/no-go decision

Decision: NO-GO FOR PRODUCTION

Reason: Provider foundation may be prepared, but public policies, legal approval, sender-domain readiness, production form, `/gracias`, automation, and end-to-end QA are incomplete.
