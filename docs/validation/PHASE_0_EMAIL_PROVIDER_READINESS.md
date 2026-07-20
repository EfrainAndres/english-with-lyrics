# Phase 0 Email Provider Readiness

## Readiness status

`READY FOR CONTROLLED PREVIEW`

Production is not ready. This status means the isolated provider-hosted Preview workflow has been verified manually without activating any public-site integration or Production identifiers.

Provider readiness: READY FOR CONTROLLED PREVIEW

Preview email delivery: VERIFIED

Preview unsubscribe: VERIFIED

Production readiness: NO-GO FOR PRODUCTION

## Domain and email readiness split

| Area | Status |
|---|---|
| Custom web domain readiness | COMPLETE |
| Custom production web domain | ACTIVE |
| Canonical production origin | `https://singpronuncerepeat.com` |
| `www` redirect | VERIFIED — `https://www.singpronuncerepeat.com` returns a permanent redirect to `https://singpronuncerepeat.com` |
| HTTPS | VERIFIED |
| Vercel production connection | VERIFIED |
| Hostinger DNS connection | VERIFIED |
| Browser verification | VERIFIED — apex and `www` load successfully; `www` redirects to apex; the application renders correctly through the custom domain |
| Professional mailbox readiness | PENDING |
| Email-sender domain readiness | PENDING |
| MailerLite sender verification | PENDING |
| MailerLite domain authentication | PENDING |
| Production email delivery | INACTIVE |

The custom web domain is ready for the public web surface of Sing Pronunce Repeat. This does not complete email readiness. SPF, DKIM, DMARC, branded mailbox setup, sender authentication, inbox-placement QA, and MailerLite Production delivery remain pending.

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
| Preview group | VERIFIED |
| Preview form | VERIFIED |
| Preview group assignment | VERIFIED |
| Required consent | VERIFIED |
| Single opt-in | VERIFIED |
| Duplicate handling | VERIFIED |
| Preview automation | VERIFIED |
| Preview Email 1 | VERIFIED |
| Real automation send | VERIFIED |
| Preview CTA | VERIFIED |
| Preview fallback URL | VERIFIED |
| `/gracias?source=email` | VERIFIED |
| PDF access | VERIFIED |
| Real unsubscribe | VERIFIED |
| Export | PENDING |
| Correction | PENDING |
| Deletion | PENDING |
| Inbox placement | PENDING |
| Domain authentication | PENDING |
| Production configuration | INACTIVE |
| Preview secrets | Not required for the current provider-hosted-form direction |
| No Production contact creation | VERIFIED |

## Deliverability

| Item | Status |
|---|---|
| Technical email delivery | Passed |
| Preview automation delivery | Passed |
| Gmail delivery observed | Yes |
| Gmail inbox placement | Failed for the current sender setup |
| Spam placement observed | Yes |
| Free-domain sender warning observed | Yes |
| Custom-domain authentication required before Production | Yes |

Notes:

- The Preview workflow test remains valid because the provider-hosted form, isolated group, subscriber activation, automation trigger, and test-email delivery all worked end to end.
- Current inbox placement is not sufficient for Production.
- The current sender uses a free Gmail address.
- The current sender remains a non-branded free-domain setup for QA.
- MailerLite displayed a free-domain deliverability warning.
- SPF, DKIM, DMARC, branded mailbox, and domain alignment remain pending.
- Production deliverability remains blocked.
- Provider due diligence remains incomplete.

## Footer and privacy finding

- Footer and business-address information shown in the test email require owner review before Production.
- The currently displayed address must not be treated as approved merely because MailerLite populated it during onboarding.
- MailerLite automatic footer remained present.
- Unsubscribe remained present.
- Footer language was adjusted or reviewed where supported.
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
- Production MailerLite group.
- Production form.
- Production MailerLite automation.
- `/gracias`.
- Production Email 1.
- Export test.
- Correction test.
- Deletion test.
- Inbox-placement QA.
- Funnel event analytics.
- Production/Preview isolation test on deployed site.
- Controlled rollout approval.

## Go/no-go decision

Preview decision: READY FOR CONTROLLED PREVIEW

Production decision: NO-GO FOR PRODUCTION

Reason:
The provider-hosted Preview form, isolated group, single opt-in, explicit consent, duplicate handling, real automation Email 1, Preview-only CTA, fallback URL, `/gracias?source=email`, PDF access, and subscriber-specific unsubscribe flow were verified. Production remains blocked by legal, privacy, sender-domain, footer approval, public-route, deliverability, rights-operation QA, and end-to-end Production requirements.
