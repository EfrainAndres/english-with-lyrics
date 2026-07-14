# Phase 0 Lead Capture Form

## Status

Implementation status: COMPLETE FOR CONTROLLED PREVIEW

Deployed Preview QA: PASS

Preview readiness: READY

Production readiness: NO-GO

## Architecture

- Selected integration: provider-hosted external MailerLite form link.
- Environment resolution uses `process.env.VERCEL_ENV` and falls back conservatively to `development`.
- Preview URL source: `NEXT_PUBLIC_MAILERLITE_PREVIEW_FORM_URL`.
- Production form remains disabled in this branch.
- Local real submission remains disabled in this branch.
- No API integration was added.
- No application-side personal-data handling was added.

Implementation notes:

- `/ebook-gratis` is the only integrated page in this branch.
- The component uses a server-side runtime resolver and a server-side lead-form config resolver.
- The app opens the verified Preview form as a controlled external experience in the same tab.
- The current download CTA remains intact in Production.
- In Preview, the existing PDF download remains visible as a secondary QA fallback while the MailerLite form is being validated.
- `/gracias` now exists as the stable thank-you destination.
- `/gracias?source=ebook` is ready as the Preview redirect target.
- MailerLite Preview redirect may now be configured to `/gracias?source=ebook`.
- MailerLite manual redirect configuration remains pending unless end-to-end redirect was tested.
- The current Preview form may keep its existing success message until manual redirect configuration is completed.
- When MailerLite Preview redirect is configured, it should target `https://<preview-domain>/gracias?source=ebook` using the stable Preview branch alias rather than an ephemeral commit URL.
- Production form remains disabled.
- Production direct delivery remains active.

## Page behavior matrix

| Environment | Lead form | Download | Contacts created | Expected behavior |
|---|---|---|---|---|
| Development | Disabled placeholder | Active current page UI | No | Show a local disabled state and keep the page usable without MailerLite |
| Preview | Preview MailerLite provider-hosted form link | Active current page UI as secondary QA fallback | Yes, Preview only | Show Preview notice and open only the Preview form URL |
| Production | Disabled | Active current page UI | No | Preserve direct ebook delivery and do not activate lead capture |

## Privacy boundary

- MailerLite handles the submitted values.
- Next.js does not receive the email or name.
- No personal data is written to logs, analytics, localStorage, sessionStorage, or URLs by the application.
- Consent remains provider-controlled and explicit inside MailerLite.
- No MailerLite form HTML or script is injected into the app.

## Deployed Preview QA

- [x] Preview deployment renders.
- [x] Preview notice appears.
- [x] CTA opens the MailerLite Preview form.
- [x] Email is required.
- [x] Name is optional.
- [x] Consent is required.
- [x] Consent is unchecked by default.
- [x] Duplicate behavior remains correct.
- [x] Subscriber enters Preview group only.
- [x] Preview automation triggers.
- [x] Test email is sent.
- [x] No Production contact is created.
- [x] Direct PDF fallback remains available in Preview.
- [x] Production keeps direct delivery.
- [x] Mobile and desktop behavior is acceptable.
- [x] Keyboard-accessible CTA behavior was reviewed when applicable.
- [x] Missing-config fallback remains documented.

## Production blockers

- Responsible-party details.
- Privacy contact.
- Public privacy route.
- Data-processing route when applicable.
- Professional legal approval.
- Full MailerLite due diligence.
- Branded sender mailbox.
- SPF.
- DKIM.
- DMARC.
- Domain authentication.
- Footer/business address.
- Production MailerLite form.
- Production MailerLite automation.
- Production Email 1.
- Unsubscribe test.
- Export test.
- Correction test.
- Deletion test.
- MailerLite Preview redirect end-to-end QA.
- Funnel event analytics.
- Controlled rollout.

## Decision

Preview decision: PASS

Production decision: NO-GO FOR PRODUCTION
