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

Authenticated-sender Preview regression: PENDING

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
- Inbox placement is not approved.
- Authenticated-sender Preview regression is required because the sender-domain configuration changed after the original Preview email QA.

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

## Deliverability and footer notes

- Technical email delivery: PASS.
- Preview automation delivery: PASS.
- Gmail delivery was observed.
- Spam placement was observed previously with the current free-domain sender.
- Inbox placement must not be treated as approved.
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
- Authenticated-sender Preview Email 1 regression.
- Preview CTA regression after sender authentication.
- Preview unsubscribe regression after sender authentication.
- Production inbox-placement QA.
- Gmail inbox-placement QA with authenticated sender.
- Outlook delivery QA with authenticated sender.
- Spam-placement review with authenticated sender.
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
The original controlled Preview automation successfully delivered Email 1 to a test subscriber. The subject, preheader, sender display name, Preview-only CTA, fallback URL, `/gracias?source=email`, PDF access, and subscriber-specific unsubscribe flow were verified. MailerLite sending-domain authentication is now verified for `singpronuncerepeat.com`, so a new authenticated-sender Preview regression is required before treating the sender-authenticated flow as ready. Production remains blocked by public legal routes, approved responsible-party information, footer approval, Production MailerLite configuration, deliverability QA, rights-operation QA, funnel analytics, and legal approval.
