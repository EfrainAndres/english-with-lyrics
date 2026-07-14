# Phase 0 Ebook Email Delivery

## Status

Content status: COMPLETE

Preview implementation readiness: READY FOR MANUAL CONFIGURATION

Preview QA: PENDING

Production readiness: NO-GO

## Architecture

- MailerLite group-triggered automation.
- Stable page-link delivery.
- No PDF attachment.
- No API integration.
- No application-side personal-data handling.
- Preview and Production remain isolated.
- Email 1 should deliver users to `/gracias?source=email`.

## Email content

- Canonical subject: `Tu guía para practicar inglés con canciones está lista`
- Preview subject: `[TEST] Tu guía para practicar inglés con canciones está lista`
- Production-ready preheader: `Descarga la guía y comienza con una práctica corta.`
- Preview preheader: `Prueba interna del flujo de entrega del ebook.`
- Sender display name: `Sing Pronounce Repeat`
- CTA: `Abrir mi guía`
- Preview destination: `https://<stable-preview-branch-domain>/gracias?source=email`
- Future Production destination: `https://english-with-lyrics.vercel.app/gracias?source=email`
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

- [ ] Subject displays correctly.
- [ ] Preheader displays correctly.
- [ ] Sender display name is correct.
- [ ] Mobile rendering looks correct.
- [ ] Desktop rendering looks correct.
- [ ] CTA works.
- [ ] Plain URL fallback works.
- [ ] `/gracias?source=email` loads.
- [ ] PDF download works.
- [ ] Unsubscribe works.
- [ ] Footer appears.
- [ ] Footer language reviewed.
- [ ] Address reviewed.
- [ ] Gmail delivery reviewed.
- [ ] Outlook delivery reviewed.
- [ ] Spam placement documented.
- [ ] No Production group involved.

## Production blockers

- Public privacy policy.
- Applicable public data-processing policy.
- Responsible-party details.
- Privacy contact.
- Legal approval.
- Branded sender mailbox.
- SPF.
- DKIM.
- DMARC.
- Domain authentication.
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

Preview decision: READY FOR MANUAL EMAIL CONFIGURATION

Production decision: NO-GO FOR PRODUCTION
