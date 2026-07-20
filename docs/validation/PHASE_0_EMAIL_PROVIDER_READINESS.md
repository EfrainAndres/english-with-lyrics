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
| Professional mailbox readiness | VERIFIED |
| Professional mailbox | `privacidad@singpronuncerepeat.com` |
| Privacy contact operational | VERIFIED |
| Hostinger inbound delivery | PASS |
| Hostinger outbound delivery | PASS |
| Hostinger mailbox bounce check | PASS |
| Hostinger sender display name | VERIFIED — `Sing Pronunce Repeat` |
| MailerLite domain verification | VERIFIED |
| MailerLite SPF | VERIFIED |
| MailerLite DKIM | VERIFIED |
| MailerLite domain authentication | VERIFIED |
| MailerLite sender-domain readiness | VERIFIED FOR CONTROLLED TESTING |
| MailerLite sender verification | PENDING |
| Post-authentication Hostinger inbound regression | PASS |
| Post-authentication Hostinger outbound regression | PASS |
| Post-authentication bounce check | PASS |
| Authenticated-sender Preview Email 1 regression | PASS |
| Gmail technical delivery | PASS |
| Gmail placement | PRIMARY |
| Hotmail technical delivery | PASS |
| Hotmail placement | INBOX — OTHER TAB |
| Hotmail consumer inbox placement | PASS FOR CURRENT CONTROLLED TEST |
| Organization-managed Outlook technical delivery | PASS |
| Organization-managed Outlook placement | JUNK |
| Organization-managed Outlook inbox placement | FAIL FOR CURRENT TENANT TEST |
| Consumer deliverability | PASS FOR CURRENT CONTROLLED TESTS |
| Corporate Outlook limitation | OPEN |
| Broad Production deliverability approval | NO-GO |
| Production inbox placement | PENDING |
| Production Email 1 | INACTIVE |
| Production automation | INACTIVE |
| Production email delivery | INACTIVE |

The custom web domain is ready for the public web surface of Sing Pronunce Repeat. The professional privacy mailbox was manually verified through controlled inbound and outbound delivery tests. No message content, personal test addresses, passwords, screenshots, provider IDs, DNS tokens, or private account information are stored in the repository.

MailerLite domain authentication was completed manually after the required DKIM, combined SPF, and domain-verification records were detected successfully. No DNS tokens, complete DKIM targets, screenshots, provider IDs, passwords, subscriber information, or private account data are stored in the repository.

Post-authentication mailbox and authenticated-sender Preview regression QA were completed manually using controlled addresses. No subscriber addresses, message content, screenshots, DNS tokens, provider IDs, passwords, or private account information are stored in the repository.

Hostinger MX, SPF, DKIM, and DMARC records remain configured for the Hostinger mailbox. Hostinger and MailerLite authorization coexist in one apex SPF record, and MailerLite DKIM uses a separate selector from Hostinger DKIM. This completes MailerLite sender-domain readiness for controlled testing, but does not activate Production sending. Controlled consumer deliverability now passes for Gmail Primary placement and Hotmail Inbox — Other tab placement. Organization-managed Outlook technical delivery passed, but inbox placement failed for the current tenant because the message was placed in Junk. Production inbox-placement approval, Production Email 1, Production automation, Production lead capture, controlled Production rollout, and MailerLite Production delivery remain pending/inactive.

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
| Final sender identity | Verified manually for Hostinger mailbox; pending for MailerLite Production sender |
| Professional mailbox created | Verified manually |
| Webmail login | Verified manually |
| Branded mailbox | Verified manually for Hostinger privacy contact; pending for MailerLite Production sender |
| Privacy mailbox operational | Verified manually |
| Controlled inbound email received | Verified manually |
| Controlled outbound reply delivered | Verified manually |
| No bounce observed | Verified manually |
| Post-authentication inbound mailbox test | Verified manually |
| Post-authentication outbound mailbox test | Verified manually |
| No-bounce regression | Verified manually |
| Sender display name | Verified manually as `Sing Pronunce Repeat` |
| Authenticated sender displayed correctly | Verified manually |
| Hostinger MX configuration retained | Verified manually |
| Hostinger SPF configuration retained | Verified manually |
| Hostinger DKIM configuration retained | Verified manually |
| MailerLite DKIM retained | Verified manually |
| DMARC configuration retained | Verified manually |
| Vercel web DNS retained | Verified manually |
| Sending domain added to MailerLite | Verified manually |
| Domain-verification TXT added and detected | Verified manually |
| DKIM CNAME added and detected | Verified manually |
| Combined SPF added and detected | Verified manually |
| One apex SPF record retained | Verified manually |
| Hostinger SPF authorization retained | Verified manually |
| MailerLite SPF authorization retained | Verified manually |
| MailerLite authentication completed | Verified manually |
| Domain authenticated | Verified manually for Hostinger mailbox and MailerLite sender-domain testing |
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
| Preview form submitted | VERIFIED |
| Preview group membership verified | VERIFIED |
| Preview automation trigger verified | VERIFIED |
| Authenticated Email 1 delivered | VERIFIED |
| Preview CTA | VERIFIED |
| Preview fallback URL | VERIFIED |
| `/gracias?source=email` | VERIFIED |
| PDF access | VERIFIED |
| Real unsubscribe | VERIFIED |
| No Production workflow involved | VERIFIED |
| Export | PENDING |
| Correction | PENDING |
| Deletion | PENDING |
| Inbox placement | PENDING |
| Domain authentication | VERIFIED |
| MailerLite sender verification | PENDING |
| MailerLite domain verification | VERIFIED |
| MailerLite SPF | VERIFIED |
| MailerLite DKIM verification | VERIFIED |
| MailerLite sending-domain authentication | VERIFIED |
| MailerLite Production sender readiness | VERIFIED FOR CONTROLLED TESTING |
| Post-authentication Hostinger inbound regression | PASS |
| Post-authentication Hostinger outbound regression | PASS |
| Authenticated-sender Preview Email 1 regression | PASS |
| Production inbox-placement QA | PENDING |
| Production Email 1 | INACTIVE |
| Production automation | INACTIVE |
| Production configuration | INACTIVE |
| Preview secrets | Not required for the current provider-hosted-form direction |
| No Production contact creation | VERIFIED |

## Deliverability

| Item | Status |
|---|---|
| Technical email delivery | Passed |
| Preview automation delivery | Passed |
| Gmail technical delivery | PASS |
| Gmail placement | PRIMARY |
| Gmail inbox-placement decision | PASS FOR CURRENT CONTROLLED TEST |
| Hotmail technical delivery | PASS |
| Hotmail placement | INBOX — OTHER TAB |
| Hotmail inbox-placement decision | PASS FOR CURRENT CONTROLLED TEST |
| Hotmail Focused placement | NOT ACHIEVED |
| Hotmail Junk placement | NOT OBSERVED IN CURRENT TEST |
| Organization-managed Outlook technical delivery | PASS |
| Organization-managed Outlook placement | JUNK |
| Organization-managed Outlook inbox-placement decision | FAIL FOR CURRENT TENANT TEST |
| Organization-managed Outlook bounce observed | NO |
| Consumer technical delivery | PASS |
| Consumer inbox placement | PASS FOR CURRENT CONTROLLED TESTS |
| Corporate Outlook technical delivery | PASS |
| Corporate Outlook inbox placement | FAIL FOR CURRENT TENANT TEST |
| Controlled Preview deliverability readiness | PASS |
| Broad Production deliverability readiness | NO-GO |
| SPF | PASS |
| DKIM for `singpronuncerepeat.com` | PASS |
| DKIM for MailerLite | PASS |
| DMARC | PASS |
| Composite authentication | PASS |
| Free-domain sender warning observed | Yes |
| Custom-domain authentication required before Production | Yes |

Notes:

- The Preview workflow test remains valid because the provider-hosted form, isolated group, subscriber activation, automation trigger, and test-email delivery all worked end to end.
- The authenticated-sender Preview regression passed after the sender-domain configuration changed.
- Current consumer inbox placement passed for the controlled Gmail and Hotmail tests, but broad Production deliverability remains NO-GO.
- Hostinger mailbox SPF, DKIM, DMARC, visible sender name, inbound delivery, outbound delivery, and bounce check are verified for `privacidad@singpronuncerepeat.com`.
- Previous Hostinger mailbox tests remain historical passed evidence, and post-authentication inbound and outbound mailbox regression passed after the sending-domain DNS change.
- MailerLite domain verification, SPF, DKIM, and domain authentication are verified for `singpronuncerepeat.com`.
- Gmail achieved Primary placement in the current controlled consumer test.
- Consumer Hotmail achieved inbox placement in the `Other` tab, not Junk. Do not classify the `Other` tab as Spam or Junk.
- The current Hotmail result is a significant improvement over the earlier Hotmail Junk result.
- Organization-managed Outlook technical delivery passed, no bounce was observed, but the message was placed in Junk. This is a known limitation for the current tenant.
- Organization-specific policies may influence corporate delivery, but the evidence does not prove that this is the only cause. A single organization-managed account is not sufficient to generalize behavior across all corporate Microsoft tenants.
- No new DNS or sender-address change is recommended at this stage.
- Production Email 1, Production automation, Production lead capture, controlled Production rollout, and Production email delivery remain pending/inactive.
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
- MailerLite sender verification.
- Public privacy route.
- Applicable public treatment-policy route.
- Professional legal approval.
- MailerLite due diligence.
- Approved business/footer address.
- Production MailerLite group.
- Production form.
- Production MailerLite automation.
- `/gracias`.
- Production Email 1.
- Gmail inbox-placement QA.
- Outlook delivery QA.
- Spam-placement review.
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
The provider-hosted Preview form, isolated group, single opt-in, explicit consent, duplicate handling, original real automation Email 1, authenticated-sender Email 1 regression, Preview-only CTA, fallback URL, `/gracias?source=email`, PDF access, subscriber-specific unsubscribe flow, post-authentication Hostinger mailbox regression, and MailerLite domain authentication were verified. Production remains blocked by legal, privacy, footer approval, public-route, deliverability, rights-operation QA, and end-to-end Production requirements.
