# Phase 0 MailerLite Manual Checklist

> Rights-request provider operations QA: **PASS** for one isolated manual Preview-only test contact. It had no group assignment and zero emails sent. Provider consultation, transient JSON export without retention, non-personal correction, manual unsubscribe, GDPR Forget (provider deletion within 30 days), and a subsequent zero-result search were verified. No public form, campaign, email, automation, lead-capture flow, or Production resource was activated or changed.

> Provider-hosted consent staging: **PASS** for one new isolated Preview-only group and form plus one branch-restricted Vercel Preview handoff. No form was submitted, no subscriber was created, no email was sent, and no existing Preview or Production provider resource was altered.

> Subsequent controlled provider-hosted form QA: **PASS** for functional consent blocking, invalid-email validation, one affirmative submission, privacy-safe duplicate handling, zero email/automation side effects, GDPR Forget cleanup, Production absence, and direct-PDF independence. The provider-hosted checkbox's missing-consent feedback lacks a visible or programmatically associated error message. The project owner accepts this MailerLite-native limitation for the current Preview staging path only; it remains a tracked follow-up and does not authorize Production activation. Provider-failure simulation remains **UNVERIFIED** because no safe provider-native simulation was available.

> Initial Production consent staging: **STAGED / INACTIVE from the website perspective** for exactly one new isolated Production group and one matching provider-hosted form. Before the controlled test, the group had zero subscribers and no submission or email side effect. Current post-test state is recorded below. MailerLite has no native unpublish/deactivate state for this hosted form, so possible reachability through its undistributed direct provider URL is an owner-accepted staging limitation. This does not activate Production consent linking or collection.

> Initial Production welcome staging: **STAGED / INACTIVE** for exactly one Email 1 draft attached to exactly one matching inactive workflow. Before the controlled test, the workflow used only the empty staged Production group/form path and had zero enrolled or completed contacts and sends. Current post-test history is recorded below. Lead capture and email delivery remain inactive.

> Controlled Production funnel test: **FAIL / NO-GO FOR PUBLIC ACTIVATION**. Exactly one affirmative submission produced one target-group assignment, one workflow entry and one automated Email 1 delivery. Consent, content, CTA, direct PDF, privacy/footer, unsubscribe, isolation and cleanup passed; the form redirect failed because the provider-native success state rendered instead of `/gracias`. No second submission or additional message was attempted. The group returned to zero, the workflow is inactive with zero in progress and one completed history record, and one non-personal form registration is retained.

> Corrective Production retest state: **FAIL / NO-GO FOR PUBLIC ACTIVATION**. The corrected hosted-form redirect passed in two separately authorized affirmative submissions and both produced the intended isolated group assignment. The first reused the prior controlled identity and did not re-enter. The fresh-contact window ended with zero workflow/send counters and completed cleanup, but later read-only evidence showed that the fresh contact reached Completed and MailerLite recorded one automated send. The authorized inbox contains zero matching messages and zero unexpected additional messages, so delayed delivery and received content/CTA evidence remain UNVERIFIED. The group and contact search are zero; the workflow is paused with zero in progress and two completed history records. New owner authorization is required before another retest.

> Final Production inbox-verification state: **PASS FOR THE CONTROLLED TECHNICAL PATH / NOT PUBLICLY ACTIVATED**. A fresh contact with zero subscriber, group-membership or workflow history completed exactly one affirmative submission after the isolated workflow was activated and confirmed. Redirect, group assignment, terminal workflow completion, one provider-recorded send, one matching inbox delivery, approved content/CTA, privacy/footer, functional unsubscribe without another message, direct PDF independence and cleanup passed. The group and contact search returned to zero; the workflow is paused with zero in progress and three completed history records. No public handoff, Vercel value, deployment, indexing, source, Preview or unrelated Production resource changed.

> Emergency rollback: **PASS / ROLLOUT NOT STARTED**. An authorized activation reached active workflow, Production-only handoff configuration and a Ready deployment, but the mandatory canonical no-submit smoke was blocked by the review browser's access policy. Rollback paused the workflow, removed only the Production handoff setting and redeployed verified merged `main`. The group is zero; workflow state is inactive / zero in progress / three retained completed; new automated sends, failures and complaints are zero; canonical Production is fail-closed; Analytics remains enabled and unchanged.

> Controlled rollout retry: **ACTIVE / IN PROGRESS**. Preflight, workflow activation, Production-only handoff configuration, merged-main redeployment, canonical desktop/390 px no-submit smoke, Analytics verification, and stop-control availability all pass. The opening Production group count is zero of ten; workflow activity is active / zero in progress / three retained completed records. No test contact or non-public email was created. The post-72-hour go/no-go remains pending, and provider-failure simulation remains **UNVERIFIED**.

> Current rollout-gate state: the owner risk acceptance applies only to the approved public Email 1 rollout of up to 10 subscribers over 72 hours and does not make any limitation fixed, compliant, unrestricted or permanent. The approved initial indexing disposition is `noindex, nofollow` and does not authorize future indexing changes. Monitor subscriber count, workflow activity, sends, failures, complaints, and delivery outcomes at least daily and immediately near the cap. Stop immediately for unexpected email, consent/privacy issue, delivery failure, complaint, or workflow error.

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

## 7. Historical Production-form staging record

The following inactive, unlinked, and deletion-preparation entries describe the
pre-rollout staging state only. They are superseded for current operations by
the active controlled rollout recorded above.

- [x] Owner authorization: create exactly one new isolated Production group and one matching provider-hosted form for inactive staging only.
- [x] Manual MailerLite dashboard action: exactly one matching Production consent-staging form created and assigned only to the new empty isolated group.
- [x] Manual MailerLite dashboard action: email is required and name is optional.
- [x] Manual MailerLite dashboard action: approved consent wording is unchanged in one affirmative checkbox that is unchecked by default and provider-required before submission.
- [x] Manual MailerLite dashboard action: the privacy-policy destination has exact path `/privacidad`.
- [x] Manual MailerLite dashboard action: the form/source identity records the approved-copy version; MailerLite remains responsible for capture channel/time, subscriber status, and unsubscribe/suppression state.
- [x] Initial staging evidence: double opt-in was disabled, single opt-in persisted after reload, and no campaign, automation, email side effect or subscriber existed before the controlled window.
- [x] Historical staging boundary: the form was staged and inactive from the
  website perspective, unlinked from the public website and absent from Vercel
  configuration; non-personal controlled registration history was retained
  after cleanup and was not reset by GDPR Forget.
- [x] Provider limitation: MailerLite offers no native unpublish/deactivate state for this hosted form; possible direct provider-URL reachability is owner-accepted for staging only, and the URL is not distributed.
- [x] Project-owner decision: the known MailerLite-native missing-consent feedback limitation is accepted only for inactive Production staging and remains tracked; this is not an accessibility fix or activation approval.
- [x] Historical empty-staging cleanup plan: deletion of the then-empty
  Production form and group was considered only after a separate rollback
  decision. It is not part of the current public-rollout stop procedure.
- [x] Manual MailerLite dashboard action: the single isolated Production consent form was drafted only within the current staging authorization.
- [x] Manual MailerLite dashboard action: the Production form is assigned only to the new isolated Production staging group.
- [x] Manual MailerLite dashboard action: Production form success action is configured for the approved `/gracias` redirect, reverified without submission and later revalidated by two affirmative submissions. State: STAGED / REDIRECT PASS; the original redirect failure and later zero-automation-entry retests remain historical evidence.
- [x] Legal review: approved privacy-policy route available before activation.
- [x] Historical staging control: the Production form remained inactive and
  unlinked pending the then-unresolved activation blockers.

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

## 9. Historical Production-automation staging record

The following inactive-workflow and deletion-preparation entries are retained
as pre-rollout evidence. The current Production workflow is active only inside
the approved monitored rollout boundary.

- [x] Manual MailerLite dashboard action: exactly one isolated Production workflow created within the staging authorization.
- [x] Manual MailerLite dashboard action: trigger uses only the original empty staged Production group/form path.
- [x] Manual MailerLite dashboard action: exactly one Email 1 draft is attached only to the new Production workflow.
- [x] Manual MailerLite dashboard action: the attached draft uses the approved Spanish subject, preheader, body, Production-scoped CTA and text-compatible fallback.
- [x] Manual MailerLite dashboard action: provider privacy/footer and unsubscribe treatment retained; no PDF attachment added and direct PDF access remains independent.
- [x] Manual MailerLite dashboard action: an existing verified sender was reused without modifying a sender identity.
- [x] Historical provider state after final cleanup: workflow STAGED / INACTIVE
  with zero contacts in progress and three retained completed history records.
- [x] Controlled aggregate send state: three provider-recorded automated Production Email 1 sends and two inbox-verified deliveries; test-email, campaign and transactional sends remain zero.
- [x] Isolation check: all authorized temporary submissions, assignments and workflow entries used only the isolated Production path; Preview and unrelated Production resources remained unchanged.
- [x] Repository preparation: sequence timing documented in `docs/email/PHASE_0_EMAIL_SEQUENCE.md`.
- [x] Historical staging control: Production automation remained inactive until
  separate rollout approval.
- [x] Historical empty-staging cleanup plan: deletion of the attached Email 1
  draft and inactive workflow required a separate post-rollback decision. It is
  not part of the current public-rollout stop procedure, which preserves all
  staged resources, real subscribers, and consent evidence.

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
- [ ] Overall controlled Production gate: FAIL / NO-GO. At this historical checkpoint the redirect correction had not yet been revalidated; the later records preserve its redirect PASS and the separate zero-automation-entry failures.

## 9E. Production redirect configuration correction

- [x] Scope limited to the existing staged Production provider-hosted consent form.
- [x] Success action configured for redirect to the approved `/gracias` destination.
- [x] Saved configuration reopened and verified without submitting the form.
- [x] Approved consent wording, exact `/privacidad` destination, group mapping, provider evidence fields, single-opt-in setting, known missing-consent accessibility limitation, and undistributed direct-provider-reachability status were not changed.
- [x] Production group remains empty; the workflow remains inactive with zero contacts in progress and one retained completed-history record.
- [x] No new form registration, subscriber, group assignment, automation run, email, campaign, audience, or outbox item was created.
- [x] Public Production remains fail-closed with no website handoff or Production-scoped Vercel form configuration; direct PDF and legal routes remain healthy.
- [x] Redirect correction was subsequently revalidated by affirmative submission and reached `/gracias`; see the separate corrective-retest records below.
- [ ] Historical controlled-test result remains **FAIL / NO-GO FOR PUBLIC ACTIVATION** because the later retests did not create a new automation entry or Email 1 delivery.

## 9F. First corrective redirect retest and interrupted cleanup

- [x] Historical redirect failure and staged correction remained preserved.
- [x] One separately authorized affirmative submission reused the original controlled identity and redirected to `/gracias`.
- [x] Exactly one intended Production group assignment occurred.
- [ ] Automation entry and automated Email 1 delivery: FAIL / ZERO / ZERO while the workflow was active.
- [x] Workflow paused after the bounded evaluation window; no second submission or message occurred.
- [x] Cleanup was interrupted only by the browser connection and later resumed under cleanup-only authorization.
- [x] Manual unsubscribe and GDPR Forget completed without generating another email; group and contact search returned to zero.
- [x] Post-cleanup workflow state: PAUSED / ZERO IN PROGRESS / ONE prior completed history record.

## 9G. Read-only corrective-retest diagnosis

- [x] Workflow was active before the corrective submission and remained active through multiple post-submission checks.
- [x] Trigger was exactly the isolated Production group-join event followed immediately by Email 1 and exit; no additional group, Preview group, visible filter, condition or delay was configured.
- [x] Form-to-group mapping remained correct because the submission created the intended isolated Production assignment.
- [x] The retained completed-history record belonged to the earlier successful controlled test and matched the reused controlled identity.
- [ ] Exact provider-side suppression or re-entry reason: INCONCLUSIVE because the provider UI exposed no skipped-entry reason or explicit re-entry override.
- [x] Minimum recommended diagnostic boundary was one fresh, newly authorized contact with zero subscriber and workflow history.

## 9H. Fresh-contact end-to-end corrective retest

- [x] Owner authorization covered exactly one fresh controlled contact, one affirmative submission, temporary activation, at most one automated Email 1 and cleanup.
- [x] Preflight exact-contact search: ZERO subscriber records / ZERO active workflow history / ZERO completed workflow history.
- [x] Aggregate provider baseline: Production group ZERO; workflow PAUSED / ZERO IN PROGRESS / ONE retained completed history record.
- [x] The staged Production workflow was activated before submission and remained active for the bounded evaluation window.
- [x] Exactly one affirmative provider-hosted submission completed without CAPTCHA, confirmation or verification-message requirement.
- [x] Corrected provider-hosted form redirected to `/gracias`.
- [x] Exactly one assignment to the isolated Production group; no Preview group assignment.
- [ ] New automation entry: FAIL / ZERO.
- [ ] Automated Email 1 delivery: FAIL / ZERO. Approved delivered content, CTA, footer/privacy and email-link unsubscribe behavior are UNVERIFIED for this attempt because no message existed.
- [x] Direct PDF, `/gracias`, `/privacidad` and `/tratamiento-de-datos` regressions: PASS / HTTP 200 / independent of consent and email.
- [x] Workflow paused immediately after the bounded zero-entry result.
- [x] Manual provider unsubscribe required no email; GDPR Forget completed; contact search and Production group returned to ZERO.
- [x] Post-test workflow state: PAUSED / ZERO IN PROGRESS / ONE retained completed history record.
- [x] Test, campaign, transactional, verification, confirmation and additional-message counts: ZERO / ZERO / ZERO / ZERO / ZERO / ZERO.
- [x] Public Production remained fail-closed with no website handoff; Vercel, source, deployment, indexing, Preview and unrelated Production resources remained unchanged.
- [ ] Overall fresh-contact end-to-end result: **FAIL / NO-GO FOR PUBLIC ACTIVATION**. Provider-level automation-trigger diagnosis and new owner authorization are required before another submission or message.

## 9I. Delayed workflow-state and inbox reconciliation

The section 9H zero-entry/zero-send result remains preserved as the factual
bounded-window snapshot. A later read-only provider review superseded that
snapshot without changing any resource.

- [x] Fresh contact later appeared in Completed; workflow completed history increased from ONE to TWO.
- [x] MailerLite later recorded ONE automated send for the fresh contact.
- [ ] Delayed inbox delivery: FAIL / ZERO matching messages in the authorized inbox.
- [x] Unexpected additional inbox messages: ZERO.
- [ ] Approved delayed-message subject, hidden preheader, Spanish body, CTA, text-compatible content, privacy/footer and unsubscribe rendering: UNVERIFIED because the matching message is absent.
- [ ] CTA resolution from the delayed message: UNVERIFIED. Production `/gracias` itself remains healthy.
- [x] Direct PDF remains available and independent of consent and email.
- [x] Functional unsubscribe is not repeated or claimed: the contact had already been manually unsubscribed and subjected to GDPR Forget before the delayed provider state became visible.
- [ ] Exact workflow execution time relative to cleanup: INCONCLUSIVE. Visibility after cleanup does not prove execution after cleanup and does not establish a provider defect.
- [x] Procedural timing risk retained: after activation, confirm activation history and monitor workflow Activity to Completed, Failed or Canceled before pausing, unsubscribing or applying GDPR Forget.
- [ ] A third fresh QA contact and exactly one additional automated Email 1 remain required because critical received-content and CTA evidence is missing.
- [ ] Provider-failure simulation remains UNVERIFIED.
- [ ] Historical bounded-window gate: FAIL / NO-GO at that time; lead capture,
  active delivery, automation, rollout, and indexing were then inactive or
  pending. This snapshot is superseded by the current active controlled rollout
  recorded at the top of this checklist.

## 9J. Final Production inbox-verification test

- [x] Owner authorization covered exactly one fresh controlled contact, one affirmative submission, temporary activation, exactly one automated Email 1 and cleanup.
- [x] Exact-contact preflight: ZERO subscriber records / ZERO group memberships / ZERO active workflow history / ZERO completed workflow history.
- [x] Baseline: Production group ZERO; workflow PAUSED / ZERO IN PROGRESS / TWO retained completed; provider-recorded automated sends TWO.
- [x] The isolated workflow was activated, reloaded and confirmed ACTIVE before the single submission; no other workflow or resource changed.
- [x] One affirmative submission completed without CAPTCHA, verification, confirmation or any additional-message requirement.
- [x] Redirect to `/gracias`, one isolated Production group assignment and independent direct PDF availability: PASS.
- [x] Workflow Activity was monitored without pause or contact cleanup until terminal status: ZERO IN PROGRESS / THREE COMPLETED.
- [x] Exactly one new provider-recorded automated Email 1 send and exactly one matching inbox delivery: PASS.
- [x] Inbox placement checks: ONE matching message in Inbox and All Mail, categorized as Promotions, ZERO in Spam and ZERO duplicates.
- [x] Approved subject, hidden preheader, Spanish body, CTA, text-compatible content, privacy/footer and unsubscribe rendering: PASS.
- [x] CTA resolution to `/gracias`: PASS.
- [x] Functional unsubscribe through the delivered email: PASS / no additional message required or generated.
- [x] Workflow pause after terminal status: PASS. Final state is PAUSED / ZERO IN PROGRESS / THREE retained completed.
- [x] GDPR Forget cleanup: PASS. Contact search and Production group returned to ZERO.
- [x] Test, campaign, transactional, verification, confirmation and additional-message counts: ZERO / ZERO / ZERO / ZERO / ZERO / ZERO.
- [x] Public Production remains fail-closed; Vercel, source, deployment, indexing, Preview and unrelated Production resources remain unchanged.
- [x] Additional fresh-contact retest: NOT REQUIRED for the controlled technical path.
- [ ] Provider-failure simulation remains UNVERIFIED.
- [x] Limited rollout risk disposition: owner accepts the known missing-consent feedback, direct-provider-reachability and deliverability risks only for Email 1, up to 10 subscribers and 72 hours of active monitoring.
- [x] Analytics verification and operational stop-control execution: PASS; Analytics remained enabled and unchanged, and the emergency rollback executed pause, Production handoff removal and fail-closed redeployment in order.
- [x] Production handoff configuration/deployment and complete public no-submit smoke: PASS for the rollout retry. Controlled-rollout monitoring and the post-72-hour go/no-go remain pending. Initial indexing disposition remains `noindex, nofollow` without authorizing future indexing changes.

## 10. Consent

- [x] Repository preparation: approved checkbox copy documented unchanged and surfaced beside the inert provider-hosted Preview handoff.
- [x] Manual MailerLite dashboard action: consent checkbox required.
- [x] Manual MailerLite dashboard action: consent checkbox unchecked by default.
- [x] Manual MailerLite dashboard action: the staged form identity records the approved-copy version and provider source; provider capture metadata remains the future consent evidence system of record.
- [x] Manual MailerLite dashboard action: single opt-in remains enabled for the verified Preview workflow.
- [x] Repository preparation: provider-hosted MailerLite form selected as the sole future consent system of record; the Next.js app has no personal-data form or submit path.
- [x] Project-owner decision: functional consent blocking is accepted as PASS for the current Preview staging path despite the tracked provider-native missing-consent feedback limitation.
- [x] Project-owner decision: the same provider-native limitation is accepted only for the isolated inactive Production staging state; resolution or explicit disposition remains required before public activation.
- [x] Subsequent activation-level disposition: accepted only for the approved public Email 1 rollout of up to 10 subscribers over 72 hours, together with the direct-provider-reachability and deliverability risks. No limitation is represented as fixed, fully accessible, legally compliant, harmless, certified or irrelevant; this is not unrestricted or permanent approval.
- [ ] Production consent linking: remains PENDING and requires separate configuration/deployment authority; the limited risk disposition does not itself link the form or activate collection.
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

- [x] Owner input: Email 1-only controlled rollout boundary approved for up to 10 subscribers over 72 hours; execution is ACTIVE / IN PROGRESS.
- [x] Activation risk disposition: missing-consent feedback accessibility, direct-provider reachability and known deliverability risks accepted only inside that monitored boundary.
- [x] DNS action: sender-domain authentication confirmed for `singpronuncerepeat.com`.
- [x] `/gracias` exists and passes recorded Preview and Production regression QA.
- [x] Fail-closed website support exists: Production requires its dedicated valid configuration and otherwise renders no lead-capture surface.
- [x] Production Email 1 remains exactly one unchanged ACTIVE / CONTROLLED ROLLOUT draft after three historical provider-recorded authorized automated sends; two deliveries are inbox-verified.
- [x] Production automation remains exactly one matching ACTIVE / CONTROLLED ROLLOUT workflow with zero contacts in progress at activation and three retained completed history records.
- [x] Production-scoped handoff configuration added only in Production during the authorized rollout retry.
- [x] Minimum controlled Production technical-path test passes before public promotion. The final fresh-contact test verified redirect, assignment, terminal completion, one inbox delivery, approved content/CTA, functional unsubscribe and cleanup. Public promotion remains blocked by the separate gates below.
- [x] Production email delivery activated for Email 1 only inside the controlled rollout.
- [x] Production lead capture activated only inside the controlled rollout.
- [x] Production accessibility/direct-provider-reachability and deliverability disposition recorded for the limited monitored rollout only.
- [x] Analytics dashboard verified without personal-data payloads, cookies or tracking parameters.
- [x] Initial Production indexing disposition approved as `noindex, nofollow`; no indexing setting changed in this task.
- [ ] Ten-subscriber rollout executed and monitored for 72 hours before expansion.
- [ ] Controlled Production rollout execution and post-72-hour go/no-go completed.
- [x] Immediate stop controls verified for unexpected email, consent/privacy issue, delivery failure, complaint or workflow error.

Preview Email 1 end-to-end verification was completed manually using controlled test addresses. The real MailerLite automation email reached the subscriber, opened the Preview thank-you page, provided PDF access, and supported a successful subscriber-specific unsubscribe. No subscriber addresses, IP addresses, screenshots, provider IDs, or Preview share tokens are stored in this repository.
