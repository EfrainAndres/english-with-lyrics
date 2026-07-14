# Phase 0 Email Provider Readiness

## Readiness status

`READY FOR CONTROLLED PREVIEW`

Production is not ready. This status means the isolated provider-hosted Preview workflow has been verified manually without activating any public-site integration or Production identifiers.

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
| Account created | Verified manually |
| Owner verification | Pending manual verification |
| MFA | Verified manually |
| Final sender identity | Pending manual verification |
| Branded mailbox | Pending manual verification |
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
| Preview group created | Verified manually |
| Preview form created | Verified manually |
| Preview group assignment verified | Verified manually |
| Required consent verified | Verified manually |
| Single opt-in verified | Verified manually |
| Duplicate handling verified | Verified manually |
| Preview automation created | Verified manually |
| Preview automation activated | Verified manually |
| End-to-end Preview submission passed | Verified manually |
| Test email sent | Verified manually |
| Email 1 source content | Documentation complete |
| Preview Email 1 CTA target | Documented as `/gracias?source=email` |
| Four-email timing outline | Documentation complete |
| Test redirect | Temporary success message verified; custom `/gracias` redirect still blocked |
| Preview secrets | Not required for the current provider-hosted-form direction |
| No Production contact creation | Verified manually |

## Deliverability

| Item | Status |
|---|---|
| Technical email delivery | Passed |
| Gmail inbox placement | Failed for the current sender setup |
| Spam placement observed | Yes |
| Free-domain sender warning observed | Yes |
| Custom-domain authentication required before Production | Yes |

Notes:

- The Preview workflow test remains valid because the provider-hosted form, isolated group, subscriber activation, automation trigger, and test-email delivery all worked end to end.
- Current inbox placement is not sufficient for Production.
- The current sender uses a free Gmail address.
- MailerLite displayed a free-domain deliverability warning.
- SPF, DKIM, DMARC, branded mailbox, and domain alignment remain pending.

## Footer and privacy finding

- Footer and business-address information shown in the test email require owner review before Production.
- The currently displayed address must not be treated as approved merely because MailerLite populated it during onboarding.
- No personal email addresses, IP addresses, subscriber details, or screenshots are stored in this repository.

## Production blockers

- Responsible-party details.
- Privacy contact.
- Public privacy route.
- Applicable public treatment-policy route.
- Professional legal approval.
- MailerLite due diligence.
- Branded sender mailbox.
- SPF.
- DKIM.
- DMARC.
- Sender/domain authentication.
- Approved business/footer address.
- Production form.
- `/gracias`.
- Production Email 1.
- Unsubscribe test.
- Export test.
- Correction test.
- Deletion test.
- Production/Preview isolation test on deployed site.
- Controlled rollout approval.

## Go/no-go decision

Preview decision: READY FOR CONTROLLED PREVIEW

Production decision: NO-GO FOR PRODUCTION

Reason:
The provider-hosted Preview form, isolated group, single opt-in, explicit consent, duplicate handling, automation trigger, and test-email delivery were verified end to end. Production remains blocked by legal, privacy, sender-domain, footer, public-route, deliverability, and end-to-end Production requirements.
