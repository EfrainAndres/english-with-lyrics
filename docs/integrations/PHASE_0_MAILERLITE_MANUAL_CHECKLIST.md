# Phase 0 MailerLite Manual Checklist

> Rights-request provider operations QA: **PASS** for one isolated manual Preview-only test contact. It had no group assignment and zero emails sent. Provider consultation, transient JSON export without retention, non-personal correction, manual unsubscribe, GDPR Forget (provider deletion within 30 days), and a subsequent zero-result search were verified. No public form, campaign, email, automation, lead-capture flow, or Production resource was activated or changed.

> Provider-hosted consent staging: **PASS** for one new isolated Preview-only group and form plus one branch-restricted Vercel Preview handoff. No form was submitted, no subscriber was created, no email was sent, and no existing Preview or Production provider resource was altered.

> Subsequent controlled provider-hosted form QA: **PASS** for functional consent blocking, invalid-email validation, one affirmative submission, privacy-safe duplicate handling, zero email/automation side effects, GDPR Forget cleanup, Production absence, and direct-PDF independence. The provider-hosted checkbox's missing-consent feedback lacks a visible or programmatically associated error message. The project owner accepts this MailerLite-native limitation for the current Preview staging path only; it remains a tracked follow-up and does not authorize Production activation. Provider-failure simulation remains **UNVERIFIED** because no safe provider-native simulation was available.

> Initial Production consent staging: **STAGED / INACTIVE from the website perspective** for exactly one new isolated Production group and one matching provider-hosted form. Before the controlled test, the group had zero subscribers and no submission or email side effect. Current post-test state is recorded below. MailerLite has no native unpublish/deactivate state for this hosted form, so possible reachability through its undistributed direct provider URL is an owner-accepted staging limitation. This does not activate Production consent linking or collection.

> Initial Production welcome staging: **STAGED / INACTIVE** for exactly one Email 1 draft attached to exactly one matching inactive workflow. Before the controlled test, the workflow used only the empty staged Production group/form path and had zero enrolled or completed contacts and sends. Current post-test history is recorded below. Lead capture and email delivery remain inactive.

> Controlled Production funnel test: **FAIL / NO-GO FOR PUBLIC ACTIVATION**. Exactly one affirmative submission produced one target-group assignment, one workflow entry and one automated Email 1 delivery. Consent, content, CTA, direct PDF, privacy/footer, unsubscribe, isolation and cleanup passed; the form redirect failed because the provider-native success state rendered instead of `/gracias`. No second submission or additional message was attempted. The group returned to zero, the workflow is inactive with zero in progress and one completed history record, and one non-personal form registration is retained.

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
- [x] Manual MailerLite dashboard action: a separate Preview-only consent-staging group was created with no existing automation, campaign, or form connection.
- [x] Manual MailerLite dashboard action: exactly one new isolated Production consent-staging group was created but remains inactive, with zero subscribers and no campaign or automation connection.
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
- [x] Manual MailerLite dashboard action: a new provider-hosted consent-staging form was assigned only to the new isolated Preview-only group.
- [x] Manual MailerLite dashboard action: the staged form requires email and keeps name optional.
- [x] Manual MailerLite dashboard action: the staged form uses the approved consent copy unchanged in an affirmative checkbox that is unchecked by default.
- [x] Manual MailerLite dashboard action: the staged form links to the canonical privacy-policy destination with exact path `/privacidad`.
- [x] Manual MailerLite dashboard action: form identity and approved-copy version identify the source; MailerLite remains responsible for capture time/channel, subscription status, and unsubscribe/suppression state.
- [x] Manual MailerLite dashboard action: the staged form has double opt-in disabled and no linked automation, campaign, or email side effect.
- [x] Vercel dashboard action: the existing public form-URL mechanism was configured only for Preview and restricted to the staging branch; Production and Development scopes were unchanged.
- [x] Deployed Preview validation: `/ebook-gratis` exposes only the external provider handoff and `/privacidad` notice, with no app-side personal-data fields, form submission, storage, or analytics payload.
- [x] Controlled-task boundary: the staged provider form was not submitted and created no subscriber, lead, email, or automation event.
- [x] Historical setup boundary retained: the initial staging validation above was completed before any submission.
- [x] Controlled functional QA: submission remained blocked until affirmative consent was selected.
- [x] Controlled functional QA: invalid-email validation blocked submission.
- [x] Controlled functional QA: one affirmative submission produced one isolated Preview subscriber with zero email or automation activity.
- [x] Controlled functional QA: repeating the same controlled submission was privacy-safe and did not create an unintended duplicate.
- [x] Controlled functional QA: manual unsubscribe and GDPR Forget cleanup completed; the subsequent provider search returned zero results and the isolated group returned to zero subscribers.
- [x] Controlled functional QA: Production retained no lead-capture surface and direct PDF delivery remained independent and active.
- [ ] Provider-native follow-up: expose a visible and programmatically associated missing-consent error. Current MailerLite limitation is accepted by the project owner for Preview staging only and is not considered fixed or fully accessible.
- [ ] Provider-failure simulation: UNVERIFIED because no safe provider-native simulation was available.
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

- [x] Owner authorization: create exactly one new isolated Production group and one matching provider-hosted form for inactive staging only.
- [x] Manual MailerLite dashboard action: exactly one matching Production consent-staging form created and assigned only to the new empty isolated group.
- [x] Manual MailerLite dashboard action: email is required and name is optional.
- [x] Manual MailerLite dashboard action: approved consent wording is unchanged in one affirmative checkbox that is unchecked by default and provider-required before submission.
- [x] Manual MailerLite dashboard action: the privacy-policy destination has exact path `/privacidad`.
- [x] Manual MailerLite dashboard action: the form/source identity records the approved-copy version; MailerLite remains responsible for capture channel/time, subscriber status, and unsubscribe/suppression state.
- [x] Initial staging evidence: double opt-in was disabled, single opt-in persisted after reload, and no campaign, automation, email side effect or subscriber existed before the controlled window.
- [x] Current boundary: the form remains staged and inactive from the website perspective, unlinked from the public website and absent from Vercel configuration; one controlled registration is retained in non-personal form history after cleanup.
- [x] Provider limitation: MailerLite offers no native unpublish/deactivate state for this hosted form; possible direct provider-URL reachability is owner-accepted for staging only, and the URL is not distributed.
- [x] Project-owner decision: the known MailerLite-native missing-consent feedback limitation is accepted only for inactive Production staging and remains tracked; this is not an accessibility fix or activation approval.
- [x] Rollback prepared: delete only the new empty Production form and the new empty Production group; do not alter Preview or existing resources.
- [x] Manual MailerLite dashboard action: the single isolated Production consent form was drafted only within the current staging authorization.
- [x] Manual MailerLite dashboard action: the Production form is assigned only to the new isolated Production staging group.
- [x] Manual MailerLite dashboard action: Production form success action is configured for the approved `/gracias` redirect and reverified without submission. State: STAGED / NOT YET REVALIDATED BY SUBMISSION; the controlled-test failure remains historical evidence.
- [x] Legal review: approved privacy-policy route available before activation.
- [x] Staging control: Production form remains inactive and unlinked pending all activation blockers.

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

- [x] Manual MailerLite dashboard action: exactly one isolated Production workflow created within the staging authorization.
- [x] Manual MailerLite dashboard action: trigger uses only the original empty staged Production group/form path.
- [x] Manual MailerLite dashboard action: exactly one Email 1 draft is attached only to the new Production workflow.
- [x] Manual MailerLite dashboard action: the attached draft uses the approved Spanish subject, preheader, body, Production-scoped CTA and text-compatible fallback.
- [x] Manual MailerLite dashboard action: provider privacy/footer and unsubscribe treatment retained; no PDF attachment added and direct PDF access remains independent.
- [x] Manual MailerLite dashboard action: an existing verified sender was reused without modifying a sender identity.
- [x] Provider state after cleanup: workflow STAGED / INACTIVE with zero contacts in progress and one retained completed history record.
- [x] Controlled send state: exactly one automated Production Email 1 was delivered; test-email, campaign and transactional sends remain zero.
- [x] Isolation check: the one temporary subscriber, assignment and workflow entry used only the isolated Production path; Preview and unrelated Production resources remained unchanged.
- [ ] Repository preparation: sequence timing documented in `docs/email/PHASE_0_EMAIL_SEQUENCE.md`.
- [x] Staging control: Production automation remains inactive until separate rollout approval.
- [x] Rollback prepared: delete only the new attached Email 1 draft and the new inactive workflow; do not alter the already staged group/form or any existing resource.

## 9A. Isolated Preview welcome-email draft

- [x] Exactly one clearly named regular Preview-only Email 1 draft staged.
- [x] Existing sender on the authenticated domain reused without creating or changing a sender identity.
- [x] Approved Spanish subject, preheader, body, Preview CTA and text-compatible fallback staged.
- [x] Draft-specific provider footer retains functional unsubscribe treatment and the Preview privacy-policy destination.
- [x] Recipients remain empty; no contact, group or segment selected.
- [x] Draft remains unpublished and unsent; sent and outbox counts remain zero for this staging.
- [x] No campaign send, test email, Preview email, form submission, subscriber creation or group assignment performed.
- [x] Standalone campaign draft has no automation connection; existing Preview and Production resources were unchanged.
- [ ] Future controlled Preview-only send test requires separate owner approval.
- [ ] MailerLite-native missing-consent feedback limitation remains tracked for Preview staging and does not authorize Production.

Rollback is limited to deleting this exact isolated draft and rechecking zero new drafts, recipients and sends. Do not alter any existing form, group, automation, sender or Production resource.

## 9B. Controlled Preview test-send QA

- [x] Preflight: isolated regular draft remains unpublished, unsent, recipient-free and disconnected from groups, segments and automation.
- [x] Provider test-send flow confirmed as separate from campaign recipients.
- [ ] Exactly one controlled test email delivered. BLOCKED before delivery because the authorized QA contact requires a separate provider-verification message.
- [x] Verification message not sent because it was outside the authorized exactly-one-test-email boundary.
- [x] Completed test sends: zero; campaign sends: zero; subscribers created: zero; form submissions: zero; automation triggers: zero.
- [ ] Received subject, preheader, Spanish body, text-compatible content, CTA, footer, privacy treatment and layout. NOT RUN because no email was delivered.
- [x] Post-attempt provider state unchanged: one isolated draft, zero recipients, zero sent campaigns and zero outbox items.
- [x] Production lead-capture absence and independent direct PDF delivery retained.

Recovery requires separate owner authorization for a safe provider-verification step or another already verified contact that is explicitly authorized for this QA. Do not create a subscriber, select an audience or activate delivery to bypass this gate.

## 9C. Resumed controlled Preview test-send QA

The blocked attempt in section 9B remains historical. The owner subsequently authorized exactly one recipient-verification message followed by exactly one provider test email to the same controlled QA inbox.

- [x] Recipient-verification messages sent: one; verification completed without CAPTCHA, security prompt, additional approval or third message.
- [x] Provider test emails sent and received: one.
- [x] Additional messages: zero.
- [x] Approved subject, hidden preheader, Spanish body, CTA and text-compatible structure verified in the received message.
- [x] Preview-safe CTA destination verified without recording it.
- [x] Provider footer, privacy treatment and unsubscribe treatment rendered. Provider test-message links retain their expected non-functional test limitation.
- [x] Desktop readability and intrinsic 390 px containment passed without internal clipping or horizontal content overflow.
- [x] Post-QA state: zero draft recipients, zero sent campaigns, zero outbox items and one unchanged isolated draft.
- [x] No subscriber/contact, group assignment, segment, campaign audience, form action, automation trigger or Production email created.
- [ ] Provider-failure simulation remains UNVERIFIED; no failure was manufactured.

No rollback was required. This QA authorizes neither an audience send nor any Production activation.

## 9D. Controlled Production funnel test

- [x] Owner authorization covered exactly one affirmative submission, one Production group assignment, temporary activation of the staged workflow, one automated Email 1 and cleanup.
- [x] Aggregate preflight: group/form path empty, workflow inactive with zero in progress/completed, and test/campaign/Production sends zero.
- [x] Website and Vercel preflight: public handoff absent and Production-scoped form configuration absent.
- [x] Consent blocking verified before affirmative selection; the known provider-native feedback accessibility limitation remains accepted for staging only and is not fixed.
- [x] Exactly one affirmative submission completed with provider form/source and approved-copy-version evidence.
- [x] Exactly one target-group assignment, one workflow entry and one automated Email 1 delivery completed.
- [x] Approved subject, hidden preheader, Spanish body, CTA, text-compatible alternative, privacy/footer and unsubscribe treatment verified.
- [ ] Provider-hosted form redirect to `/gracias`: FAIL. The provider-native success state rendered; no second submission was attempted.
- [x] Delivered-email CTA reached `/gracias`; direct PDF access and legal routes remained healthy and independent.
- [x] Real unsubscribe completed through the delivered email without generating another message.
- [x] Workflow paused, authorized contact unsubscribed, GDPR Forget completed and subsequent contact search returned zero results.
- [x] Final group subscriber count and queued/in-progress work returned to zero.
- [x] Retained non-personal provider history recorded accurately: one form registration and one completed workflow contact.
- [x] Test-email, campaign, transactional and additional-message counts remained zero; sent campaigns and outbox remained zero.
- [x] Preview isolation and public website, Vercel, source, deployment, analytics and indexing invariants remained unchanged.
- [ ] Provider-failure simulation: UNVERIFIED because no safe provider-native simulation was available.
- [ ] Overall controlled Production gate: FAIL / NO-GO. The later redirect configuration correction is staged but not yet revalidated by submission; a separately authorized one-contact retest must pass.

## 9E. Production redirect configuration correction

- [x] Scope limited to the existing staged Production provider-hosted consent form.
- [x] Success action configured for redirect to the approved `/gracias` destination.
- [x] Saved configuration reopened and verified without submitting the form.
- [x] Approved consent wording, exact `/privacidad` destination, group mapping, provider evidence fields, single-opt-in setting, known missing-consent accessibility limitation, and undistributed direct-provider-reachability status were not changed.
- [x] Production group remains empty; the workflow remains inactive with zero contacts in progress and one retained completed-history record.
- [x] No new form registration, subscriber, group assignment, automation run, email, campaign, audience, or outbox item was created.
- [x] Public Production remains fail-closed with no website handoff or Production-scoped Vercel form configuration; direct PDF and legal routes remain healthy.
- [ ] Redirect correction is **NOT YET REVALIDATED BY SUBMISSION**. A separately authorized one-contact corrective retest remains required.
- [ ] Historical controlled-test result remains **FAIL / NO-GO FOR PUBLIC ACTIVATION** until that corrective retest passes.

## 10. Consent

- [x] Repository preparation: approved checkbox copy documented unchanged and surfaced beside the inert provider-hosted Preview handoff.
- [x] Manual MailerLite dashboard action: consent checkbox required.
- [x] Manual MailerLite dashboard action: consent checkbox unchecked by default.
- [x] Manual MailerLite dashboard action: the staged form identity records the approved-copy version and provider source; provider capture metadata remains the future consent evidence system of record.
- [x] Manual MailerLite dashboard action: single opt-in remains enabled for the verified Preview workflow.
- [x] Repository preparation: provider-hosted MailerLite form selected as the sole future consent system of record; the Next.js app has no personal-data form or submit path.
- [x] Project-owner decision: functional consent blocking is accepted as PASS for the current Preview staging path despite the tracked provider-native missing-consent feedback limitation.
- [x] Project-owner decision: the same provider-native limitation is accepted only for the isolated inactive Production staging state; resolution or explicit disposition remains required before public activation.
- [ ] Production consent linking: remains PENDING and requires separate approval; the Preview limitation acceptance does not authorize Production collection or activation.
- [ ] Owner approval: link or activate the staged Production form/group, consent collection, or any delivery flow.

## 11. Privacy

- [x] Owner input: responsible-party details completed through server-only Production configuration; values are not stored in this repository.
- [x] Owner input: privacy contact channel operational.
- [x] Legal review: public privacy-policy route approved and owner-accepted in Production.
- [x] Legal review: public treatment-policy route approved and owner-accepted in Production.
- [x] Repository preparation: no owner personal details or configuration values committed.

## 12. Export/deletion

- [x] Manual MailerLite dashboard action: export path located and tested with isolated Preview test data.
- [x] Manual MailerLite dashboard action: deletion flow located and tested with isolated Preview test data.
- [x] Manual MailerLite dashboard action: correction/update flow located and tested with isolated Preview test data.
- [x] Legal review: retention approach reviewed with no required change; exact suppression/reactivation behavior remains the separate provider follow-up below.

## 13. Unsubscribe

- [x] Manual MailerLite dashboard action: real automation unsubscribe link worked.
- [x] Manual MailerLite dashboard action: subscriber unsubscribe status verified.
- [ ] Manual MailerLite dashboard action: suppression/reactivation behavior documented from test results.

## 14. Preview QA

- [x] Manual MailerLite dashboard action: controlled test addresses only.
- [ ] Manual MailerLite dashboard action: Preview redirect tested.
- [x] Manual MailerLite dashboard action: controlled Preview submission tested.
- [x] Isolated provider-hosted staging form: functional consent blocking verified.
- [x] Isolated provider-hosted staging form: invalid-email validation verified.
- [x] Isolated provider-hosted staging form: single affirmative submission verified.
- [x] Isolated provider-hosted staging form: duplicate-safe behavior verified.
- [x] Isolated provider-hosted staging form: zero email and automation side effects verified.
- [x] Isolated provider-hosted staging form: GDPR Forget cleanup and subsequent zero-result search verified.
- [x] Isolated provider-hosted staging form: Production absence and direct-PDF independence verified.
- [ ] Isolated provider-hosted staging form: visible/programmatically associated missing-consent feedback. Known MailerLite-native limitation; owner-accepted for Preview staging only and tracked.
- [ ] Isolated provider-hosted staging form: provider-failure simulation. UNVERIFIED because no safe native simulation was available.
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
- [x] Repository preparation: Preview and Production form configuration use separate variables; no Production identifier appears in Preview defaults.

## 15. Production approval

- [ ] Owner input: controlled rollout approved.
- [ ] Activation acceptance: production collection approved. Published legal routes and professional/provider reviews already pass, but the provider-native accessibility and direct-reachability limitations are accepted for staging only.
- [x] DNS action: sender-domain authentication confirmed for `singpronuncerepeat.com`.
- [x] `/gracias` exists and passes recorded Preview and Production regression QA.
- [x] Fail-closed website support exists: Production requires its dedicated valid configuration and otherwise renders no lead-capture surface.
- [x] Production Email 1 remains exactly one STAGED / INACTIVE draft after one authorized automated controlled delivery.
- [x] Production automation remains exactly one matching STAGED / INACTIVE workflow with zero contacts in progress and one retained completed history record.
- [ ] Production-scoped handoff configuration added in Vercel during an authorized activation task.
- [ ] Minimum controlled Production test passes before public promotion. The completed test is FAIL because the form redirect did not reach `/gracias`; a separate one-contact retest is required.
- [ ] Production email delivery activated.
- [ ] Production lead capture activated.
- [ ] Production accessibility/direct-provider-reachability limitation disposition explicitly accepted for activation or resolved.
- [ ] Analytics dashboard verified without personal-data payloads, cookies or tracking parameters.
- [ ] Production indexing decision made; current `noindex` behavior retained until then.
- [ ] Ten-subscriber rollout authorized and monitored for 72 hours before expansion.
- [ ] Controlled Production rollout approved.

Preview Email 1 end-to-end verification was completed manually using controlled test addresses. The real MailerLite automation email reached the subscriber, opened the Preview thank-you page, provided PDF access, and supported a successful subscriber-specific unsubscribe. No subscriber addresses, IP addresses, screenshots, provider IDs, or Preview share tokens are stored in this repository.
