# Phase 0 MailerLite Manual Checklist

> Rights-request provider operations QA: **PASS** for one isolated manual Preview-only test contact. It had no group assignment and zero emails sent. Provider consultation, transient JSON export without retention, non-personal correction, manual unsubscribe, GDPR Forget (provider deletion within 30 days), and a subsequent zero-result search were verified. No public form, campaign, email, automation, lead-capture flow, or Production resource was activated or changed.

Use this checklist to separate repository preparation from dashboard work, owner input, legal review, DNS work, and later implementation. Do not check an item without evidence.

## 1. Account

- [ ] Repository preparation: setup and readiness docs reviewed.
- [x] Manual MailerLite dashboard action: account created or confirmed accessible.
- [ ] Owner input: approved brand/project name confirmed for the account.
- [ ] Manual MailerLite dashboard action: workspace naming reviewed for Preview vs Production clarity.
- [ ] Owner input: no unauthorized personal contact imports approved.

## 2. Security

- [x] Manual MailerLite dashboard action: MFA enabled when available.
- [ ] Manual MailerLite dashboard action: only required administrators retained.
- [ ] Owner input: account owners and administrators approved.
- [ ] Future implementation: access-review cadence defined outside Git.

## 3. Domain

- [x] Owner input: branded sender mailbox selected.
- [x] DNS action: domain ownership confirmed.
- [x] MailerLite sending domain added.
- [x] Domain-verification TXT record added.
- [x] Domain-verification TXT record detected.
- [x] MailerLite DKIM CNAME added.
- [x] MailerLite DKIM CNAME detected.
- [x] Hostinger and MailerLite SPF authorization merged.
- [x] Combined SPF detected.
- [x] Only one apex SPF record retained.
- [x] MailerLite domain authentication completed.
- [x] Hostinger MX records retained.
- [x] Hostinger DKIM records retained.
- [x] MailerLite DKIM selector retained.
- [x] DMARC retained.
- [x] Vercel web DNS records retained.
- [ ] Manual MailerLite dashboard action: sender verification completed.
- [ ] Manual MailerLite dashboard action: domain alignment reviewed.
- [ ] DNS action: bounce/reply-to mailbox path reviewed.

## 4. Groups

- [x] Manual MailerLite dashboard action: `SPR - Preview - Ebook Leads` created.
- [ ] Manual MailerLite dashboard action: `SPR - Production - Ebook Leads` created but inactive.
- [ ] Manual MailerLite dashboard action: `SPR - Production - Survey Completed` created or deferred intentionally.
- [ ] Manual MailerLite dashboard action: `SPR - Production - First Group Interest` created or deferred intentionally.
- [ ] Manual MailerLite dashboard action: `SPR - Production - Advanced Ebook Interest` created or deferred intentionally.
- [ ] Repository preparation: no real group IDs committed.

## 5. Fields

- [x] Manual MailerLite dashboard action: `name` reviewed for optional usage.
- [ ] Manual MailerLite dashboard action: `consent_source` created if needed.
- [ ] Manual MailerLite dashboard action: `landing_path` created if needed.
- [ ] Manual MailerLite dashboard action: `source_category` created if needed.
- [ ] Manual MailerLite dashboard action: `utm_source` created if needed.
- [ ] Manual MailerLite dashboard action: `utm_medium` created if needed.
- [ ] Manual MailerLite dashboard action: `utm_campaign` created if needed.
- [ ] Manual MailerLite dashboard action: `form_version` created if needed.
- [ ] Repository preparation: no unsupported or sensitive fields added to docs or env placeholders.

## 6. Preview form

- [x] Manual MailerLite dashboard action: `SPR - Preview - Ebook Lead Form` created.
- [x] Manual MailerLite dashboard action: Preview form assigned only to `SPR - Preview - Ebook Leads`.
- [ ] Manual MailerLite dashboard action: Preview form clearly marked `TEST`.
- [x] Manual MailerLite dashboard action: email field required.
- [x] Manual MailerLite dashboard action: name field optional.
- [x] Manual MailerLite dashboard action: explicit consent checkbox enabled.
- [x] Manual MailerLite dashboard action: consent checkbox unchecked by default.
- [x] Manual MailerLite dashboard action: supporting privacy copy added.
- [x] Manual MailerLite dashboard action: double opt-in disabled.
- [x] Manual MailerLite dashboard action: single opt-in verified.
- [x] Manual MailerLite dashboard action: custom success page disabled until `/gracias` exists.
- [x] Manual MailerLite dashboard action: temporary Preview success message configured.
- [ ] Repository preparation: Preview form URL placeholder ready in `.env.example`.

## 7. Production form

- [ ] Manual MailerLite dashboard action: `SPR - Production - Ebook Lead Form` drafted only when allowed.
- [ ] Manual MailerLite dashboard action: Production form assigned only to `SPR - Production - Ebook Leads`.
- [ ] Manual MailerLite dashboard action: Production form redirect set only after `/gracias` exists.
- [ ] Legal review: approved privacy-policy route available before activation.
- [ ] Future implementation: Production form remains unpublished or inactive pending blockers.

## 8. Preview automation

- [x] Manual MailerLite dashboard action: `SPR - Preview - Ebook Delivery TEST` created.
- [x] Manual MailerLite dashboard action: trigger uses Preview group only.
- [x] Manual MailerLite dashboard action: subject lines visibly include `[TEST]` when supported.
- [x] Manual MailerLite dashboard action: test email created.
- [x] Manual MailerLite dashboard action: Preview automation activated.
- [x] Manual MailerLite dashboard action: new-subscriber trigger behavior verified.
- [x] Repository preparation: Email 1 source content approved in `docs/email/PHASE_0_EBOOK_DELIVERY_EMAIL.md`.
- [x] Repository preparation: Preview CTA target documented as `/gracias?source=email`.
- [x] Manual MailerLite dashboard action: Preview Email 1 content replaced with the approved delivery copy.
- [x] Manual MailerLite dashboard action: Preview preheader configured.
- [x] Manual MailerLite dashboard action: sender display name set to `Sing Pronunce Repeat`.
- [x] Manual MailerLite dashboard action: `hola@singpronuncerepeat.com` configured as the authenticated content sender.
- [x] Manual MailerLite dashboard action: Preview Email 1 subject configured with `[TEST]`.
- [x] Manual MailerLite dashboard action: Preview-only CTA updated to Preview `/gracias?source=email`.
- [x] Manual MailerLite dashboard action: plain fallback URL configured.
- [x] Manual MailerLite dashboard action: PDF attachment omitted.
- [x] Manual MailerLite dashboard action: Preview automation does not reference Production URLs or IDs.

## 9. Production automation

- [ ] Manual MailerLite dashboard action: `SPR - Phase 0 - Ebook Delivery and Nurture` drafted only when allowed.
- [ ] Manual MailerLite dashboard action: trigger set to `SPR - Production - Ebook Leads`.
- [ ] Future implementation: Email 1 links to `/gracias`, not a PDF attachment.
- [ ] Repository preparation: sequence timing documented in `docs/email/PHASE_0_EMAIL_SEQUENCE.md`.
- [ ] Future implementation: Production automation remains inactive until rollout approval.

## 10. Consent

- [ ] Repository preparation: approved checkbox copy documented.
- [x] Manual MailerLite dashboard action: consent checkbox required.
- [x] Manual MailerLite dashboard action: consent checkbox unchecked by default.
- [ ] Manual MailerLite dashboard action: form version or equivalent evidence captured when possible.
- [x] Manual MailerLite dashboard action: single opt-in remains enabled for the verified Preview workflow.

## 11. Privacy

- [ ] Owner input: responsible-party details completed outside public docs draft.
- [ ] Owner input: privacy contact channel operational.
- [ ] Legal review: public privacy-policy route approved.
- [ ] Legal review: public treatment-policy route approved if required.
- [ ] Repository preparation: no owner personal details or real contact data committed.

## 12. Export/deletion

- [ ] Manual MailerLite dashboard action: export path located and tested with test data.
- [ ] Manual MailerLite dashboard action: deletion flow located and tested with test data.
- [ ] Manual MailerLite dashboard action: correction/update flow located and tested with test data.
- [ ] Legal review: retention and suppression approach approved.

## 13. Unsubscribe

- [x] Manual MailerLite dashboard action: real automation unsubscribe link worked.
- [x] Manual MailerLite dashboard action: subscriber unsubscribe status verified.
- [ ] Manual MailerLite dashboard action: suppression/reactivation behavior documented from test results.

## 14. Preview QA

- [x] Manual MailerLite dashboard action: controlled test addresses only.
- [ ] Manual MailerLite dashboard action: Preview redirect tested.
- [x] Manual MailerLite dashboard action: controlled Preview submission tested.
- [x] Manual MailerLite dashboard action: subscriber created as `Active`.
- [x] Manual MailerLite dashboard action: Preview group assignment verified.
- [x] Manual MailerLite dashboard action: duplicate test submission tested.
- [x] Manual MailerLite dashboard action: end-to-end Preview flow passed.
- [x] Manual MailerLite dashboard action: real Preview automation send tested with a controlled address.
- [x] Manual MailerLite dashboard action: email received from the Preview automation.
- [x] Manual MailerLite dashboard action: CTA opened `/gracias?source=email`.
- [x] Manual MailerLite dashboard action: fallback URL opened `/gracias?source=email`.
- [x] Manual MailerLite dashboard action: PDF download worked.
- [x] Manual MailerLite dashboard action: PDF browser-open action worked.
- [x] Manual MailerLite dashboard action: Production groups were not involved.
- [x] Manual MailerLite dashboard action: Production automation was not involved.
- [x] Manual MailerLite dashboard action: Production contacts were not created.
- [x] Manual MailerLite dashboard action: Gmail delivery tested.
- [x] Manual MailerLite dashboard action: Gmail technical delivery verified.
- [x] Manual MailerLite dashboard action: Gmail Primary placement verified.
- [x] Manual MailerLite dashboard action: Consumer Hotmail technical delivery verified.
- [x] Manual MailerLite dashboard action: Consumer Hotmail inbox placement verified.
- [x] Manual MailerLite dashboard action: Consumer Hotmail `Other` tab placement recorded.
- [x] Manual MailerLite dashboard action: Organization-managed Outlook technical delivery verified.
- [x] Manual MailerLite dashboard action: Organization-managed Outlook Junk placement recorded.
- [x] Manual MailerLite dashboard action: No bounce observed during the current controlled tests.
- [x] Manual MailerLite dashboard action: Consumer inbox-placement test passed for Gmail and Hotmail.
- [x] Manual MailerLite dashboard action: Outlook delivery tested with authenticated sender.
- [ ] Manual MailerLite dashboard action: Organization-managed Outlook inbox placement passed.
- [ ] Manual MailerLite dashboard action: Additional corporate Microsoft tenant tested.
- [ ] Manual MailerLite dashboard action: Corporate Outlook placement limitation resolved.
- [ ] Manual MailerLite dashboard action: mobile rendering checked.
- [ ] Manual MailerLite dashboard action: broad Production inbox placement passed.
- [x] Manual MailerLite dashboard action: spam-folder placement checked.
- [x] Hostinger inbound mailbox regression tested after MailerLite authentication.
- [x] Hostinger outbound mailbox regression tested after MailerLite authentication.
- [x] No bounce observed during the mailbox regression.
- [x] Sender display name remained `Sing Pronunce Repeat`.
- [x] Preview Email 1 tested with the authenticated sender.
- [x] Preview form submitted using a new controlled subscriber.
- [x] Subscriber entered `SPR - Preview - Ebook Leads`.
- [x] Preview automation trigger executed.
- [x] Authenticated Email 1 was delivered.
- [x] Preview CTA opened `/gracias?source=email`.
- [x] Plain fallback URL opened `/gracias?source=email`.
- [x] PDF download worked.
- [x] PDF browser-open action worked.
- [x] Real unsubscribe link worked.
- [x] Subscriber unsubscribe status was verified.
- [x] No Production group was involved.
- [x] No Production automation was involved.
- [x] No Production email was sent.
- [x] Gmail inbox placement reviewed with the authenticated sender.
- [x] Outlook delivery tested with authenticated sender.
- [x] Spam/Junk placement reviewed with the authenticated sender.
- [ ] Repository preparation: no Production identifiers appear in Preview defaults.

## 15. Production approval

- [ ] Owner input: controlled rollout approved.
- [ ] Legal review: production collection approved.
- [x] DNS action: sender-domain authentication confirmed for `singpronuncerepeat.com`.
- [ ] Future implementation: `/gracias` exists and passes QA.
- [ ] Future implementation: lead form integration exists and passes QA.
- [ ] Production Email 1 configured.
- [ ] Production automation configured.
- [ ] Production email delivery activated.
- [ ] Production lead capture activated.
- [ ] Future implementation: Production automation tested but inactive until launch approval.
- [ ] Controlled Production rollout approved.

Preview Email 1 end-to-end verification was completed manually using controlled test addresses. The real MailerLite automation email reached the subscriber, opened the Preview thank-you page, provided PDF access, and supported a successful subscriber-specific unsubscribe. No subscriber addresses, IP addresses, screenshots, provider IDs, or Preview share tokens are stored in this repository.
