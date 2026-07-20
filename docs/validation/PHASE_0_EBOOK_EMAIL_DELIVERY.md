# Phase 0 Ebook Email Delivery

## Status

Content status: COMPLETE

Preview implementation status: COMPLETE

Preview email QA: PASS

Preview unsubscribe QA: PASS

Original Preview Email 1 QA: PASS

Original Preview unsubscribe QA: PASS

MailerLite sending-domain authentication: VERIFIED

Authenticated domain: singpronuncerepeat.com

Authenticated-sender Preview regression QA: PASS

Post-authentication mailbox regression: PASS

Production Email 1: INACTIVE

Production automation: INACTIVE

Production email delivery: INACTIVE

Production readiness: NO-GO

## Architecture

- MailerLite group-triggered automation.
- Stable page-link delivery.
- No PDF attachment.
- No API integration.
- No application-side personal-data handling.
- Preview and Production remain isolated.
- Email 1 should deliver users to `/gracias?source=email`.
- Production Email 1 remains inactive.
- Production automation remains inactive.
- Production email delivery remains inactive.
- Emails 2–4 remain planning-only.
- Gmail technical delivery passed, but the exact Gmail folder was not recorded for the authenticated-sender test.
- Outlook delivery remains pending.
- Inbox placement is not approved for Production.
- Authenticated-sender Preview regression passed after the sender-domain configuration changed.

## Email content

- Canonical subject: `Tu guía para practicar inglés con canciones está lista`
- Preview subject: `[TEST] Tu guía para practicar inglés con canciones está lista`
- Production-ready preheader: `Descarga la guía y comienza con una práctica corta.`
- Preview preheader: `Prueba interna del flujo de entrega del ebook.`
- Sender display name: `Sing Pronunce Repeat`
- CTA: `Abrir mi guía`
- Preview destination: `https://<stable-preview-branch-domain>/gracias?source=email`
- Future Production destination: `https://singpronuncerepeat.com/gracias?source=email`
- Plain-text fallback link: required
- Unsubscribe: provider-managed footer must remain active
- Footer requirements: footer language, sender identity, and business address must be reviewed before Production

## Environment matrix

| Environment | Email sending | Subject prefix | Destination | Contacts |
|---|---|---|---|---|
| Local | No sending | None | None | No contacts |
| Preview | TEST email only | `[TEST]` | Preview `/gracias?source=email` | Controlled test contacts only |
| Production | Inactive | None | Future Production `/gracias?source=email` | No contacts until approval |

## Manual MailerLite steps

1. Open the Preview automation.
2. Edit Preview Email 1.
3. Replace the temporary test content.
4. Set the `[TEST]` subject.
5. Set the Preview preheader.
6. Set the sender display name.
7. Keep the current verified test sender only for controlled QA.
8. Add the Preview `/gracias?source=email` link.
9. Keep the unsubscribe/footer block.
10. Send a test email.
11. Activate only the Preview automation.
12. Submit with a new controlled address.
13. Confirm the automation started.
14. Confirm the email was delivered.
15. Confirm the CTA reaches Preview `/gracias`.
16. Confirm PDF access works.
17. Confirm no Production contact or automation is involved.
18. Test unsubscribe with a disposable controlled test contact.

## Manual QA checklist

- [x] Subject displays correctly.
- [x] Preheader displays correctly.
- [x] Sender display name is correct.
- [ ] Mobile rendering looks correct.
- [ ] Desktop rendering looks correct.
- [x] CTA works.
- [x] Plain URL fallback works.
- [x] `/gracias?source=email` loads.
- [x] PDF download works.
- [x] Unsubscribe works.
- [x] Footer appears.
- [x] Footer language reviewed.
- [ ] Address reviewed.
- [x] Gmail delivery reviewed.
- [ ] Outlook delivery reviewed.
- [x] Spam placement documented.
- [x] No Production group involved.

## QA results

### Original Preview QA

- Preview Email 1 configuration: PASS
- Real automation send: PASS
- Subject: PASS
- Preheader: PASS
- Sender display name: PASS
- Preview-only destination: PASS
- CTA: PASS
- Fallback URL: PASS
- `/gracias?source=email`: PASS
- PDF access: PASS
- Real unsubscribe: PASS
- Production group involved: NO
- Production automation involved: NO
- Production contact created: NO

### Authenticated-sender regression QA

- Preview form submission: PASS
- Consent submission: PASS
- Preview group membership: PASS
- Preview automation trigger: PASS
- Authenticated Email 1 delivery: PASS
- Sender display name: PASS
- Authenticated sender address: PASS
- `[TEST]` subject: PASS
- Preview-only destination: PASS
- CTA: PASS
- Fallback URL: PASS
- `/gracias?source=email`: PASS
- PDF access: PASS
- PDF download: PASS
- PDF browser-open action: PASS
- Real unsubscribe: PASS
- Subscriber unsubscribe status: PASS
- Gmail technical delivery: PASS
- Gmail inbox placement: NOT RECORDED
- Spam placement: NOT RECORDED
- Outlook delivery: PENDING
- Production group involved: NO
- Production automation involved: NO
- Production email sent: NO

## Deliverability and footer notes

- Technical email delivery: PASS.
- Preview automation delivery: PASS.
- Gmail delivery was observed.
- Spam placement was observed previously with the original free-domain sender. Spam placement was not recorded for the authenticated-sender regression.
- Inbox placement must not be treated as approved for Production.
- MailerLite automatic footer remained present.
- Unsubscribe remained present.
- Footer language was adjusted or reviewed where supported.
- The displayed business or address information is not yet approved for Production.
- MailerLite branding may remain according to the current account plan.

## Production blockers

- Public privacy policy.
- Applicable public data-processing policy.
- Responsible-party details.
- Legal approval.
- MailerLite sender verification.
- Production inbox-placement QA.
- Outlook delivery QA with authenticated sender.
- Approved business address.
- Production group.
- Production automation.
- Production form.
- Production Email 1.
- Unsubscribe QA.
- Export, correction, and deletion QA.
- Inbox-placement QA.
- Funnel analytics.
- Controlled rollout.

## Decision

Preview decision: PASS

Production decision: NO-GO FOR PRODUCTION

Reason:
The original controlled Preview automation successfully delivered Email 1 to a test subscriber. After MailerLite sending-domain authentication was verified for `singpronuncerepeat.com`, the authenticated-sender Preview regression also passed: Preview form submission, consent, group membership, automation trigger, Email 1 delivery, sender display name, authenticated sender address, Preview-only CTA, fallback URL, `/gracias?source=email`, PDF access, PDF download, browser-open action, and subscriber-specific unsubscribe were verified. Production remains blocked by public legal routes, approved responsible-party information, footer approval, Production MailerLite configuration, deliverability QA, rights-operation QA, funnel analytics, and legal approval.
