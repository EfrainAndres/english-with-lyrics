# Phase 0 MailerLite Manual Checklist

Use this checklist to separate repository preparation from dashboard work, owner input, legal review, DNS work, and later implementation. Do not check an item without evidence.

## 1. Account

- [ ] Repository preparation: setup and readiness docs reviewed.
- [ ] Manual MailerLite dashboard action: account created or confirmed accessible.
- [ ] Owner input: approved brand/project name confirmed for the account.
- [ ] Manual MailerLite dashboard action: workspace naming reviewed for Preview vs Production clarity.
- [ ] Owner input: no unauthorized personal contact imports approved.

## 2. Security

- [ ] Manual MailerLite dashboard action: MFA enabled when available.
- [ ] Manual MailerLite dashboard action: only required administrators retained.
- [ ] Owner input: account owners and administrators approved.
- [ ] Future implementation: access-review cadence defined outside Git.

## 3. Domain

- [ ] Owner input: branded sender mailbox selected.
- [ ] DNS action: domain ownership confirmed.
- [ ] DNS action: SPF configured or reviewed.
- [ ] DNS action: DKIM configured or reviewed.
- [ ] DNS action: DMARC reviewed.
- [ ] Manual MailerLite dashboard action: sender/domain added.
- [ ] Manual MailerLite dashboard action: sender/domain verification completed.
- [ ] Manual MailerLite dashboard action: domain alignment reviewed.
- [ ] DNS action: bounce/reply-to mailbox path reviewed.

## 4. Groups

- [ ] Manual MailerLite dashboard action: `SPR - Preview - Ebook Leads` created.
- [ ] Manual MailerLite dashboard action: `SPR - Production - Ebook Leads` created but inactive.
- [ ] Manual MailerLite dashboard action: `SPR - Production - Survey Completed` created or deferred intentionally.
- [ ] Manual MailerLite dashboard action: `SPR - Production - First Group Interest` created or deferred intentionally.
- [ ] Manual MailerLite dashboard action: `SPR - Production - Advanced Ebook Interest` created or deferred intentionally.
- [ ] Repository preparation: no real group IDs committed.

## 5. Fields

- [ ] Manual MailerLite dashboard action: `name` reviewed for optional usage.
- [ ] Manual MailerLite dashboard action: `consent_source` created if needed.
- [ ] Manual MailerLite dashboard action: `landing_path` created if needed.
- [ ] Manual MailerLite dashboard action: `source_category` created if needed.
- [ ] Manual MailerLite dashboard action: `utm_source` created if needed.
- [ ] Manual MailerLite dashboard action: `utm_medium` created if needed.
- [ ] Manual MailerLite dashboard action: `utm_campaign` created if needed.
- [ ] Manual MailerLite dashboard action: `form_version` created if needed.
- [ ] Repository preparation: no unsupported or sensitive fields added to docs or env placeholders.

## 6. Preview form

- [ ] Manual MailerLite dashboard action: `SPR - Preview - Ebook Lead Form` created.
- [ ] Manual MailerLite dashboard action: Preview form assigned only to `SPR - Preview - Ebook Leads`.
- [ ] Manual MailerLite dashboard action: Preview form clearly marked `TEST`.
- [ ] Manual MailerLite dashboard action: Preview form uses approved consent copy.
- [ ] Manual MailerLite dashboard action: Preview form uses a safe success state until `/gracias` exists.
- [ ] Repository preparation: Preview form URL placeholder ready in `.env.example`.

## 7. Production form

- [ ] Manual MailerLite dashboard action: `SPR - Production - Ebook Lead Form` drafted only when allowed.
- [ ] Manual MailerLite dashboard action: Production form assigned only to `SPR - Production - Ebook Leads`.
- [ ] Manual MailerLite dashboard action: Production form redirect set only after `/gracias` exists.
- [ ] Legal review: approved privacy-policy route available before activation.
- [ ] Future implementation: Production form remains unpublished or inactive pending blockers.

## 8. Preview automation

- [ ] Manual MailerLite dashboard action: `SPR - Preview - Ebook Delivery TEST` created.
- [ ] Manual MailerLite dashboard action: trigger uses Preview group only.
- [ ] Manual MailerLite dashboard action: subject lines visibly include `[TEST]` when supported.
- [ ] Manual MailerLite dashboard action: Preview automation does not reference Production URLs or IDs.

## 9. Production automation

- [ ] Manual MailerLite dashboard action: `SPR - Phase 0 - Ebook Delivery and Nurture` drafted only when allowed.
- [ ] Manual MailerLite dashboard action: trigger set to `SPR - Production - Ebook Leads`.
- [ ] Future implementation: Email 1 links to `/gracias`, not a PDF attachment.
- [ ] Future implementation: Production automation remains inactive until rollout approval.

## 10. Consent

- [ ] Repository preparation: approved checkbox copy documented.
- [ ] Manual MailerLite dashboard action: consent checkbox required.
- [ ] Manual MailerLite dashboard action: consent checkbox unchecked by default.
- [ ] Manual MailerLite dashboard action: form version or equivalent evidence captured when possible.
- [ ] Legal review: single opt-in remains approved for the actual rollout.

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

- [ ] Manual MailerLite dashboard action: unsubscribe link present in Preview test message.
- [ ] Manual MailerLite dashboard action: unsubscribe changes subscriber state as expected.
- [ ] Manual MailerLite dashboard action: suppression/reactivation behavior documented from test results.

## 14. Preview QA

- [ ] Manual MailerLite dashboard action: controlled test addresses only.
- [ ] Manual MailerLite dashboard action: Preview redirect tested.
- [ ] Manual MailerLite dashboard action: duplicate test submission tested.
- [ ] Manual MailerLite dashboard action: Gmail delivery tested.
- [ ] Manual MailerLite dashboard action: Outlook delivery tested.
- [ ] Manual MailerLite dashboard action: mobile rendering checked.
- [ ] Manual MailerLite dashboard action: spam-folder placement checked.
- [ ] Repository preparation: no Production identifiers appear in Preview defaults.

## 15. Production approval

- [ ] Owner input: controlled rollout approved.
- [ ] Legal review: production collection approved.
- [ ] DNS action: sender-domain authentication confirmed.
- [ ] Future implementation: `/gracias` exists and passes QA.
- [ ] Future implementation: lead form integration exists and passes QA.
- [ ] Future implementation: Production automation tested but inactive until launch approval.
