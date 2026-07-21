# English with Lyrics Launch Plan

## Launch Goal

Validate demand for English with Lyrics before building a full platform.

## Phase 0 Launch: Validation

### Assets

- Landing page.
- Survey copy and interpretation guide in `docs/validation/PHASE_0_SURVEY.md`.
- Waitlist and channel CTA copy in `docs/validation/PHASE_0_COPY_ASSETS.md`.
- Ebook lead magnet plan in `docs/validation/PHASE_0_EBOOK_LEAD_MAGNET.md`.
- Tally form links documented in `docs/validation/PHASE_0_FORM_INTEGRATION.md`.
- Email delivery plan documented in `docs/validation/PHASE_0_EMAIL_DELIVERY_PLAN.md`.
- Ebook waiting/download page documented in `docs/validation/PHASE_0_EBOOK_DOWNLOAD_PAGE.md`.
- Waitlist form currently reusing the ebook interest form.
- First group interest copy.
- Basic analytics.
- Manual contact process.

### Audience

- Existing followers of the English with Lyrics channel.
- Spanish-speaking English learners.
- Learners who comment about pronunciation, translation, or song understanding.

### Message

Sing Pronunce Repeat helps Spanish speakers learn English through songs using the Escríbelo como suena method, short educational fragments, natural translation, and practical micro-lessons.

### Calls To Action

- Join the waitlist.
- Complete the survey.
- Request the free ebook.
- Signal interest in the first group.

### Launch Steps

1. Publish the landing page.
2. Share with the existing English with Lyrics audience.
3. Confirm Tally links for ebook interest, survey responses, and first group interest.
4. Collect survey responses.
5. Review song requests and learner pain points.
6. Test first group interest without collecting payments.
7. Send manual or semi-manual confirmation emails if signup volume is low.
8. Decide whether to create the free ebook or move directly toward MVP planning.

## Phase 0.5 Launch: Ebook

### Assets

- Free ebook with 3 songs.
- Ebook content plan at `docs/content/PHASE_0_EBOOK_CONTENT_PLAN.md`. Status: complete.
- Email capture page.
- Waiting page at `/ebook-gratis`, later converted into the real download page.
- Future PDF at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- Delivery email that links to the download page instead of attaching the PDF by default.
- Follow-up email sequence.
- Founder offer invitation.

### Phase 0.5 Status

| Asset | Status |
|---|---|
| Ebook content plan | Complete — `docs/content/PHASE_0_EBOOK_CONTENT_PLAN.md` |
| Provisional song selection | Complete — `docs/content/PHASE_0_EBOOK_SONG_SELECTION.md` (A Thousand Years, Still Loving You, The Reason) |
| Editorial draft | Complete — `docs/content/PHASE_0_EBOOK_DRAFT.md` (nine fragment placeholders; publication blocked on fragment review) |
| Fragment review framework | Complete — `docs/content/PHASE_0_EBOOK_FRAGMENT_REVIEW.md` (nine slots defined) |
| Fragment approval — A Thousand Years | Complete — ATY-01 "One step closer" (87/100), ATY-02 "Heart beats fast" (91/100), ATY-03 "Time stands still" (86/100). All approved. |
| Fragment approval — Still Loving You | Complete — SLY-01 "I will be there" (90/100), SLY-02 "All the way from the start" (81/100), SLY-03 "I can't get through" (91/100). All approved. Vocalist accent documented; neutral pronunciation prioritized. |
| Fragment approval — The Reason | Complete — TR-01 "Before I go" (86/100), TR-02 "I'm not a perfect person" (91/100), TR-03 "Start over new" (87/100). All approved. Non-adjacency and source-order distinction confirmed by project owner. |
| Nine-fragment review phase | Complete — all 9 of 9 fragments approved; cross-song consistency review done |
| Final content integration | Complete — `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md` (branch `content/phase-0-ebook-final-content`); official media links verified; design handoff markers in place; publication blocked by legal-safe review and PDF design |
| PDF design template | Complete — `docs/design/PHASE_0_EBOOK_PDF_TEMPLATE.md`; A5 portrait, 15 reusable components, static prototype at `docs/design/prototypes/`; recommended 14–16 pages |
| PDF production draft | Complete — 21-page PDF with full metadata at `docs/design/production/phase-0-ebook-production-draft.pdf`; owner visual review approved |
| PDF publication readiness review | Complete — `docs/validation/PHASE_0_EBOOK_PUBLICATION_READINESS.md`; decision: PASS FOR CURRENT DIRECT-DELIVERY FLOW |
| PDF delivery and page conversion | Complete for current direct-delivery flow — public PDF at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`; `/ebook-gratis` download page active; Production ebook page smoke test PASS; Production PDF download PASS; Production browser-open action PASS |
| Home page alignment | Complete for current direct-delivery flow — `fix/phase-0-home-ebook-delivery-alignment`; all home CTAs route to `/ebook-gratis`; waiting-state copy removed |
| Production origin + PDF backlink | Complete — canonical Production origin is `https://singpronuncerepeat.com`; HTTPS, Vercel Production connection, Hostinger DNS connection, apex loading, and permanent `www` redirect verified. Checked-in source and public PDF binaries were re-exported and validated with the canonical `/ebook-gratis` backlink and official `Sing Pronunce Repeat` brand. Production in-PDF canonical backlink: PASS. Current direct ebook delivery: ACTIVE. Production email delivery: INACTIVE. Production lead capture: INACTIVE. |
| Baseline analytics | Code complete — `feat/phase-0-download-analytics`; `@vercel/analytics` installed; `<Analytics />` in root layout; dashboard activation and production verification pending; exact download-click events unavailable on Hobby plan |
| Validation-metrics baseline | Complete — `review/phase-0-validation-metrics-baseline`; 20-section framework in `docs/validation/PHASE_0_VALIDATION_METRICS_BASELINE.md`; observation window not yet started; all metric values pending manual data entry |
| Email provider setup | MailerLite domain authentication: COMPLETE; post-authentication mailbox regression: PASS; authenticated-sender Preview QA: PASS; Gmail Primary placement: PASS; Hotmail inbox placement: PASS — Other tab; consumer deliverability: PASS FOR CURRENT CONTROLLED TESTS; organization-managed Outlook technical delivery: PASS; organization-managed Outlook inbox placement: FAILED CURRENT TENANT TEST; Production Email 1: INACTIVE; Production automation: INACTIVE; Production email activation: BLOCKED |
| Public legal routes | Protected Preview and owner review gates: PASS; professional Colombian legal gate: PASS; provider contractual/DPA gate: PASS; no legal-content or provider-related changes requested; Production consent linking and legal publication remain pending |

### Launch Steps

1. Provisional song set selected: A Thousand Years, Still Loving You, The Reason. Confirm or revise based on survey and channel evidence before drafting. See `docs/content/PHASE_0_EBOOK_SONG_SELECTION.md`.
2. Create short educational lessons for each song following the micro-lesson template and editorial rules in the content plan.
3. Review content against `CONTENT_GUIDE.md`, `LEGAL_GUIDE.md`, and the quality gates in Section 19 of the content plan.
4. Create the PDF template using the design handoff requirements in Section 17 of the content plan.
5. Convert `/ebook-gratis` from waiting page to real download page.
6. Send the delivery email with a link to `/gracias?source=email`.
7. Promote through YouTube, social, and email.
8. Measure downloads, replies, survey clicks, and first-group interest.
9. Compare demand across Románticas, Rock / pop clásicos, and Principiantes paths.

### Next rollout milestone: Lead capture and nurture funnel

Status: planned, not live.

Staged rollout:

1. Architecture approved.
2. Legal-owner architecture, protected Preview QA, internal/owner review, professional Colombian legal review and provider contractual/DPA review complete; no changes requested; final Production consent linking and publication remain required.
3. Provider foundation documented.
4. Provider configured.
5. Preview form integrated.
6. `/gracias` implemented.
7. Preview redirect configured.
8. Deployed Preview QA.
9. Email 1 content approved.
10. Preview Email 1 configured.
11. Preview test email sent.
12. Preview CTA validated.
13. Unsubscribe tested.
14. Custom Production web domain, professional mailbox, MailerLite domain authentication, post-authentication mailbox regression, and authenticated-sender Preview QA completed.
15. Public legal pages published.
16. Production Email 1 configured.
17. Production automation remains inactive until approval.
18. Controlled rollout.

### Provider setup gates

1. Account approved.
2. Security and MFA completed.
3. Provider due diligence completed.
4. Preview group created.
5. Preview form created.
6. Preview automation prepared.
7. Sender verified.
8. Domain authenticated. Status: complete for `singpronuncerepeat.com`; authenticated-sender Preview regression passed; controlled consumer deliverability passed for Gmail Primary and Hotmail Inbox — Other; organization-managed Outlook placement remains a known Junk limitation for the current tenant test.
9. Export and deletion tested.
10. Unsubscribe tested.
11. Production identifiers created but inactive.
12. Public policies published.
13. Legal approval complete.
14. Controlled rollout approved.

### Privacy gates before production lead capture

Gate status is recorded below; completed Preview and owner-review gates do not activate Production:

1. Legal-owner architecture complete without personal values in Git.
2. Internal legal-page correction cycle complete.
3. Protected Preview final regression QA complete.
4. Owner re-review and approval of the rendered policies complete.
5. Internal structured legal review passed.
6. Professional legal-review package complete and reviewed by engaged counsel.
7. Professional Colombian legal review complete. Status: PASS; no changes requested.
8. Approved public privacy and data-processing policies published as applicable.
9. Privacy/contact channel operational.
10. Provider contractual/DPA, legal-classification, MailerLite due-diligence and international-processing review complete. Status: PASS; no changes requested.
11. Production and Preview data isolation verified.
12. Explicit, unchecked consent UI verified and linked to the final Production policies.
13. Unsubscribe and suppression behavior verified.
14. Data deletion and export verified.
15. Controlled rollout approved.

Direct ebook delivery must remain active until the replacement funnel passes Preview, rollback, privacy, and production-readiness QA. Draft legal documents do not make the funnel live.

Current implementation note:

- The controlled Preview lead-capture component is implemented only on `/ebook-gratis`.
- `/gracias` is implemented and has passed deployed Preview QA.
- `/privacidad` and `/tratamiento-de-datos` support safe `pending` rendering and complete environment-backed `draft` rendering; Production remains `pending`, both routes remain `noindex, nofollow`, and they are not yet approved or linked as final consent documents.
- Protected Preview final regression, responsive/accessibility QA, robots validation, metadata privacy validation and Production pending-state regression passed.
- The internal structured review passed, and owner rendered-copy re-review is approved. This owner approval is not professional legal approval.
- The professional legal-review brief, counsel question list and readiness checklist are complete.
- Professional Colombian legal review: COMPLETE; professional legal gate: PASS; no legal-content changes requested.
- Provider contractual/DPA and legal-classification review: COMPLETE; provider gate: PASS; no provider-related changes requested.
- Professional approval does not activate Production legal publication, consent capture, email, automation or lead capture.
- Preview redirect configuration is still pending in MailerLite.
- Email 1 content is documented; authenticated-sender Preview regression has passed.
- Controlled consumer deliverability has passed for the current Gmail and Hotmail tests; Hotmail reached Inbox — Other, not Focused.
- Organization-managed Outlook technical delivery passed, but placement failed the current tenant test because the message landed in Junk. This remains a known limitation and is not generalized to every corporate Microsoft tenant.
- Production direct delivery remains active.
- Production form activation remains blocked.
- Production email-delivery claims remain blocked.
- Production legal publication approval: PENDING.
- Production Email 1: INACTIVE.
- Production automation: INACTIVE.
- Production email delivery: INACTIVE.
- Production lead capture: INACTIVE.
- Final Production consent linking, Production environment configuration, Production legal publication, corporate deliverability limitations, Production MailerLite group/form, Production Email 1, Production automation, and controlled rollout approval remain blocking.

## Phase 1 Launch: Paid MVP

### Assets

- 5 songs.
- 25 micro-lessons.
- Quizzes.
- Simple progress.
- Drip schedule.
- Real COP payments.
- Support process.

### Launch Steps

1. Invite strongest waitlist and ebook leads first.
2. Sell founder access.
3. Deliver lessons in a controlled cohort or drip format.
4. Collect feedback after each lesson group.
5. Fix confusing content before expanding.
6. Decide whether to add more songs, improve the platform, or adjust pricing.

## Launch Risks

- Users may love free content but resist paying.
- Some song choices may create more legal or licensing risk than others.
- Learners may need more basic English support before song lessons.
- The pronunciation method must stay consistent across content.

## Launch Decision Points

Continue to MVP if:

- Waitlist signups show clear demand.
- Survey responses identify a repeatable learner pain.
- Founder offer receives payment or strong reservation intent.
- Learners ask for more content after the ebook.

Pause or adjust if:

- Users do not understand the offer.
- Users only want full lyrics or translations.
- Payment intent is too weak.
- Content production is too slow for the expected price.
