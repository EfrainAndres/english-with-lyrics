# English with Lyrics Backlog

> Phase 0 update: MailerLite rights-request provider operations QA is **PASS** for one isolated Preview-only manual test contact. Production consent linking, lead capture, Email 1, delivery, automation, rollout, and indexing remain pending or inactive; the Production consent group/form is staged and inactive, and direct PDF delivery remains active.

> Consent-linking preparation: the inert provider-hosted handoff is implemented without website-side personal-data collection. Production consent linking and all provider/Production activation remain pending separate owner approval.

> Preview consent staging: an isolated provider-hosted group/form and branch-restricted Vercel Preview handoff are configured and validated without submitting the form, creating a subscriber, or sending email. Production and Development remain unchanged.

> Controlled Preview consent QA: functional consent blocking, invalid-email validation, one affirmative submission, privacy-safe duplicate handling, zero email/automation side effects, GDPR Forget cleanup, Production absence, and direct-PDF independence are **PASS**. MailerLite's missing-consent feedback has no visible or programmatically associated error message; the project owner accepts this provider-native limitation for the current Preview staging path only, and it remains a tracked follow-up. Provider-failure simulation is **UNVERIFIED**. This decision does not authorize Production activation.

> Production consent staging: exactly one new isolated MailerLite Production group and one matching provider-hosted consent form are **STAGED / INACTIVE from the website perspective** with zero subscribers, single opt-in configured, no public-site or Vercel link, and no campaign, automation, email, submission, or Production deployment side effect. MailerLite offers no native unpublish/deactivate state for this hosted form, so direct provider-URL reachability is an owner-accepted staging limitation; the URL is not distributed. The known missing-consent feedback limitation remains a tracked pre-activation follow-up. Production consent linking remains **PENDING** and direct PDF delivery remains **ACTIVE**.

## Backlog Rules

- Keep tasks small enough for a single branch when possible.
- Prefer validation and learning before platform complexity.
- Do not add dependencies until the task explicitly starts app development.
- Do not include full commercial song lyrics in tasks, fixtures, examples, or tests.
- Each implementation task should include acceptance criteria.

## Phase 0: Validation

### Landing Page

- Define landing page copy.
- Create value proposition sections.
- Explain Escríbelo como suena clearly.
- Add founder offer call to action.
- Add survey call to action.
- Add waitlist call to action.

Acceptance criteria:

- Visitors understand who the product is for.
- Visitors understand that the product teaches through short educational fragments.
- The page does not imply full lyrics access.

### Survey

- Draft validation survey questions. See `docs/validation/PHASE_0_SURVEY.md`.
- Ask about learner level, goals, music preferences, price sensitivity, and biggest pronunciation problems.
- Include consent for follow-up contact.
- Use the Phase 0 Tally survey link documented in `docs/validation/PHASE_0_FORM_INTEGRATION.md`.

Acceptance criteria:

- Survey can identify strong early adopters.
- Survey results can guide the first 5-song MVP.
- Survey does not collect unnecessary sensitive data.

### Waitlist

- Define fields: name, email, country, English level, interest level.
- Use the Phase 0 Tally ebook form as the temporary waitlist capture.
- Draft confirmation message.
- Use `docs/validation/PHASE_0_COPY_ASSETS.md` for waitlist, social, and channel CTA copy.

Acceptance criteria:

- Waitlist can measure demand before app development.
- Waitlist copy makes clear that users are opening short external validation forms.

### Founder Offer

- Define price hypothesis in COP.
- Define what founders receive.
- Define limited availability or early access terms.
- Draft refund and delivery expectations.
- Use first-group interest copy from `docs/validation/PHASE_0_COPY_ASSETS.md` until real payments are approved.

Acceptance criteria:

- Offer is specific enough to validate willingness to pay.

## Phase 0.5: Ebook Lead Magnet

### Lead Funnel Architecture

- Architecture complete in `docs/architecture/PHASE_0_LEAD_FUNNEL_ARCHITECTURE.md`.
- Decision log complete in `docs/architecture/PHASE_0_LEAD_FUNNEL_DECISIONS.md`.
- Current public direct-delivery flow remains active until the replacement funnel passes QA.

Status: complete.

### Phase 0 Lead Funnel Epic

Priority: High.

- [x] Create privacy and data-treatment drafting framework.
- [x] Create implementation-ready consent-copy source.
- [x] Create the personal-data inventory.
- [x] Define the retention framework without unsupported statutory periods.
- [x] Create the privacy implementation checklist and provider diligence gates.
- [x] Record the Phase 0 privacy decision log.
- [x] Implement server-only legal-owner configuration architecture.
- [x] Complete the Phase 0 legal-owner configuration.
- [x] Add environment-variable support for publication status, owner type, responsible-party contact and policy dates without committing personal values.
- [x] Approve the retention-policy draft without an unsupported fixed period.
- [x] Approve the minors-policy draft as not intentionally directed to minors.
- [x] Create the Phase 0 provider inventory.
- [x] Document the draft data-subject rights-request workflow.
- [x] Complete and verify the domicile/correspondence Preview correction while preserving the separate environment-field mapping.
- [x] Complete the initial owner rendered-copy review. Status: CHANGES REQUESTED.
- [x] Complete the initial internal structured review. Status: CHANGES REQUESTED.
- [x] Separate the consultation and claim deadlines and extensions in the legal draft.
- [x] Complete the titular-rights summary, including free access, use information and the SIC complaint path.
- [x] Complete the operational claim-procedure draft.
- [x] Identify the project role responsible for petitions, consultations and claims.
- [x] Add the internal privacy-to-treatment-policy link.
- [x] Add accessible Colombian-mobile display and `tel:` formatting without hardcoding a number.
- [x] Complete the legal correction cycle.
- [x] Complete protected Preview final regression QA after the review corrections.
- [x] Complete responsive legal-page QA on desktop and mobile.
- [x] Complete keyboard-navigation and visible-focus-state QA.
- [x] Validate `noindex, nofollow` in rendered legal-page HTML.
- [x] Validate that page metadata and Open Graph metadata contain no personal owner values.
- [x] Complete the Production pending-state regression with no personal fields or legal draft rendered.
- [x] Close the internal structured legal review. Status: PASS.
- [x] Obtain owner re-review and approval of the rendered legal pages.
- [x] Prepare the Phase 0 professional legal-review brief.
- [x] Prepare the numbered counsel question list with pending decision fields.
- [x] Complete the professional legal-review readiness validation.
- [x] Engage a Colombian legal professional.
- [x] Agree the professional-review scope.
- [x] Share the legal materials privately for professional review.
- [x] Receive professional feedback.
- [x] Complete the professional Colombian legal review. Result: PASS; no changes requested.
- [x] Complete provider contractual/DPA review. Result: PASS; no changes requested.
- [x] Complete provider legal-classification review. Result: PASS; no changes requested.
- [x] Classify required legal-content changes. Result: NOT REQUIRED.
- [x] Classify required provider-related changes. Result: NOT REQUIRED.
- [x] Complete required legal corrections. Result: NOT REQUIRED.
- [x] Complete required provider-related corrections. Result: NOT REQUIRED.
- [x] Implement state-aware `approved` legal-page rendering without stale draft or pending-review assertions.
- [x] Pass the synthetic pending/draft/approved local validation matrix for both legal routes.
- [x] Prepare the application privacy link to `/privacidad` beside the controlled form context.
- [x] Complete owner rendered review of both routes in `approved` mode. Result: PASS on desktop and 390 px for both routes; no horizontal overflow.
- [x] Complete protected Preview review of both routes in `approved` mode. Result: PASS; approved-mode Preview readiness gate passes and PR #63 is approved for merge.
- [ ] Make an explicit Production indexing decision; keep `noindex, nofollow` until then.
- [ ] Complete final Production consent linking.
- [x] Stage and validate an isolated provider-hosted consent form through a branch-restricted Preview handoff without activating or altering Production.
- [x] Complete controlled functional QA of the isolated provider-hosted Preview consent form. Result: PASS for consent blocking, invalid-email handling, one affirmative submission, duplicate safety, zero email/automation side effects, GDPR Forget cleanup, Production absence and direct-PDF independence.
- [x] Record project-owner acceptance of the MailerLite-native missing-consent feedback limitation for the current Preview staging path only.
- [ ] Re-evaluate or resolve the missing visible and programmatically associated consent-error feedback before any Production activation; keep this as a tracked provider follow-up.
- [ ] Verify the provider-failure state if MailerLite exposes a safe native simulation; current status: UNVERIFIED.
- [x] Complete Production environment configuration. Result: PASS; ten `LEGAL_*` variables set for the Production scope only and verified by name and scope; no values stored in the repository.
- [x] Publish the approved legal policies in Production and run canonical smoke QA. Result: PASS; both routes HTTP 200 in approved mode, `noindex, nofollow` retained, containment PASS on desktop and 390 px with no horizontal overflow.
- [x] Complete the project-owner canonical Production legal review. Result: PASS on desktop and 390 px for both routes directly against the canonical Production origin; no horizontal overflow.
- [x] Record final Production legal-publication acceptance. Result: PASS; Production legal policies are LIVE / ACCEPTED. PR #64 approved for merge; not merged.
- [x] Create `/privacidad` with safe pending, draft and approved rendering. Production publication remains pending. See `docs/validation/PHASE_0_PUBLIC_LEGAL_ROUTES.md`.
- [x] Create `/tratamiento-de-datos` with safe pending, draft and approved rendering. Production publication remains pending.
- [x] Confirm the operational privacy mailbox and document the draft contact/privacy-request workflow.
- [ ] Test the complete rights-request workflow, including provider export, correction and deletion operations.
- [x] Complete MailerLite due diligence and international-processing review within the professional provider review. Result: no changes requested.
- [x] Verify current official MailerLite capabilities required for the selected provider direction.
- [x] Define the MailerLite group taxonomy.
- [x] Define the MailerLite field taxonomy.
- [x] Define Preview and Production environment isolation for the provider.
- [x] Define the non-secret environment-variable contract for provider-hosted forms.
- [x] Create the provider readiness document.
- [x] Create the MailerLite manual setup checklist.
- [ ] Verify current official plan details for the selected email provider.
- [ ] Complete MailerLite account approval and sender setup.
- [x] Complete MailerLite DPA review within the professional provider review. Result: no changes requested.
- [x] Complete MailerLite sub-processor and provider-relationship review within the professional provider review. Result: no changes requested.
- [x] Complete MailerLite domain authentication.
- [x] Create the Preview group in MailerLite.
- [x] Create the Preview form in MailerLite.
- [x] Create the isolated provider-hosted Preview consent group/form with no campaign, automation, email side effect, or submission.
- [x] Create the Preview automation in MailerLite.
- [x] Stage exactly one isolated Preview-only welcome Email 1 as an unsent regular draft with zero recipients and no group or automation connection.
- [x] Create exactly one isolated Production consent-staging group in MailerLite. Result: STAGED / INACTIVE / ZERO SUBSCRIBERS.
- [x] Create exactly one matching provider-hosted Production consent form. Result: STAGED / INACTIVE from the website perspective / UNLINKED; approved consent copy, `/privacidad` destination, and single opt-in configured without submission or activation.
- [x] Record the owner-accepted staging limitation that MailerLite has no native unpublish/deactivate state and the undistributed direct provider URL may remain reachable; this does not authorize public linking or activation.
- [ ] Create the Production automation in MailerLite.
- [x] Add the runtime environment resolver.
- [x] Add the safe Preview-form resolver.
- [x] Add the reusable lead-capture component.
- [x] Add `/ebook-gratis` Preview integration.
- [x] Add the local disabled state.
- [x] Preserve Production direct-delivery behavior.
- [x] Create the lead-capture validation documentation.
- [ ] Add the reusable lead form to `/` and `/ebook-gratis`.
- [ ] Implement the explicit unchecked consent UI.
- [x] Create `/gracias` as the immediate post-registration delivery page.
- [x] Add the immediate download action.
- [x] Add the open-in-browser action.
- [x] Add the optional survey section.
- [x] Add the optional first-group section.
- [x] Add environment-safe copy to `/gracias`.
- [x] Add SEO noindex handling to `/gracias`.
- [x] Add privacy-safe route behavior to `/gracias`.
- [x] Create thank-you validation documentation.
- [x] Define Email 1 content source.
- [x] Stage the approved Spanish welcome Email 1 content in one isolated MailerLite Preview draft without sending or activating delivery.
- [x] Define subject and preheader.
- [x] Define the Preview delivery target.
- [x] Define the four-email sequence outline.
- [x] Create the ebook delivery validation documentation.
- [x] Add MailerLite manual configuration instructions for Email 1.
- [ ] Configure Preview Email 1 in MailerLite.
- [x] Run Preview Email 1 QA. Final resumed result: PASS under the expanded two-message authorization boundary for one recipient-verification message and one provider test email; no additional message, subscriber, audience, form, automation or Production delivery was created. Historical initial attempt: BLOCKED before delivery with zero completed test sends.
- [ ] Test unsubscribe from the delivery email.
- [x] Confirm custom Production web domain readiness: `https://singpronuncerepeat.com` active, HTTPS verified, Vercel Production connection verified, Hostinger DNS connection verified, and `www` permanent redirect verified.
- [x] Complete MailerLite domain-verification DNS.
- [x] Configure combined Hostinger/MailerLite SPF.
- [x] Configure MailerLite DKIM.
- [x] Complete MailerLite domain authentication for `singpronuncerepeat.com`.
- [x] Run post-authentication Hostinger inbound mailbox regression.
- [x] Run post-authentication Hostinger outbound mailbox regression.
- [x] Test Preview Email 1 with the authenticated sender.
- [x] Verify Preview CTA after sender authentication.
- [x] Verify Preview PDF access after sender authentication.
- [x] Verify Preview unsubscribe after sender authentication.
- [x] Validate authenticated content sender `hola@singpronuncerepeat.com` in controlled deliverability testing.
- [x] Review Gmail Primary placement with the authenticated sender.
- [x] Validate consumer Hotmail inbox placement with the authenticated sender.
- [x] Record consumer Hotmail `Other` tab placement evidence.
- [x] Complete current consumer deliverability test. Gmail Primary and Hotmail Inbox — Other both passed for the current controlled tests.
- [x] Test organization-managed Outlook technical delivery with the authenticated sender. Technical delivery passed, but placement was Junk.
- [ ] Test an additional organization-managed Microsoft tenant when appropriate.
- [ ] Decide whether to improve, formally accept or continue monitoring the corporate Outlook inbox-placement limitation.
- [ ] Review broad Production deliverability after additional corporate Microsoft evidence.
- [x] Re-export and validate the ebook PDF so the binary artifact uses `https://singpronuncerepeat.com/ebook-gratis` and `Sing Pronunce Repeat`; legacy backlink and old brand alt text removed from the checked-in source and public PDF binaries.
- [x] Validate Production PDF download through `https://singpronuncerepeat.com/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- [x] Validate Production browser-open action for the public PDF.
- [x] Validate canonical in-PDF backlink to `https://singpronuncerepeat.com/ebook-gratis`.
- [x] Complete Production PDF smoke test for the regenerated 21-page ebook.
- [ ] Configure Production Email 1.
- [ ] Activate the Production sequence only after approval.
- [ ] Document inbox-placement results.
- [ ] Restructure landing conversion hierarchy around the new lead form.
- [ ] Add exact funnel-event analytics when approved tooling exists.
- [ ] Test provider export, correction, unsubscribe, suppression, and deletion.
- [ ] Configure the MailerLite Preview redirect to `/gracias`.
- [x] Run deployed Preview QA.
- [ ] Run rollback QA and production-readiness review.
- [ ] Complete controlled production rollout only after all privacy gates pass.

Acceptance criteria:

- Direct delivery remains active until the replacement funnel passes QA.
- No production leads are collected before privacy and consent are approved.
- Production and Preview data remain isolated.
- No implementation branch marks the lead funnel live before controlled rollout approval.

Privacy publication readiness status: legal-owner architecture, internal/owner draft review, professional Colombian legal review and provider contractual/DPA review are complete; no substantive changes were requested. State-aware `approved` source implementation, local three-state QA and application privacy-link preparation pass. The project owner has now completed the approved-mode rendered review on the branch-specific protected Preview: both legal routes pass on desktop and at 390 px with no horizontal overflow, approved-mode content is correct, `noindex, nofollow` holds, personal values are absent from metadata and Open Graph, and the `/ebook-gratis` privacy link and `/gracias` regression pass. The approved-mode Preview readiness gate passed and PR #63 merged at `a09623178b41901a13cb799336dc0ae994a83e3e`. The approved policies are now configured and published on the canonical Production origin: Production legal environment configuration, Production deployment and canonical Production legal-route smoke QA all pass, both routes render approved mode with a structurally populated responsible-party section and valid dates, no draft or pending notices, no certification or guaranteed-compliance claim, no personal value in metadata or Open Graph, no raw environment name or placeholder token, retained `noindex, nofollow`, and clean containment on desktop and at 390 px with no horizontal overflow. The ebook and thank-you regression passes and the Production-served PDF hash is unchanged. Rollback is PREPARED / NOT EXECUTED. The project owner then completed a canonical Production review directly against the live origin: both legal routes pass desktop and 390 px visual review with no horizontal overflow, approved-mode content and metadata privacy pass, and the pre-existing absence of a reverse `/tratamiento-de-datos` to `/privacidad` link is accepted as expected behavior. The project-owner canonical Production legal review is PASS, the final Production legal-publication acceptance gate is PASS, and the Production legal policies are LIVE / ACCEPTED. PR #64 is approved for merge but has not been merged. Legal publication does not activate the funnel and does not constitute certification or guaranteed compliance. Production indexing decision, MailerLite consent control/linking, rights-request provider operations QA and controlled rollout remain pending. Production Email 1, email delivery, automation and lead capture remain inactive; direct PDF delivery remains active. See:

- `docs/legal/PHASE_0_PRIVACY_POLICY_DRAFT.md`
- `docs/legal/PHASE_0_DATA_PROCESSING_POLICY_DRAFT.md`
- `docs/legal/PHASE_0_CONSENT_COPY.md`
- `docs/legal/PHASE_0_DATA_INVENTORY_AND_RETENTION.md`
- `docs/legal/PHASE_0_PRIVACY_IMPLEMENTATION_CHECKLIST.md`
- `docs/architecture/PHASE_0_PRIVACY_DECISIONS.md`
- `docs/integrations/PHASE_0_MAILERLITE_SETUP.md`
- `docs/integrations/PHASE_0_MAILERLITE_MANUAL_CHECKLIST.md`
- `docs/validation/PHASE_0_EMAIL_PROVIDER_READINESS.md`
- `docs/legal/PHASE_0_DATA_SUBJECT_RIGHTS_WORKFLOW.md`
- `docs/legal/PHASE_0_PROVIDER_INVENTORY.md`
- `docs/validation/PHASE_0_LEGAL_OWNER_CONFIGURATION.md`
- `docs/legal/PHASE_0_PROFESSIONAL_LEGAL_REVIEW_BRIEF.md`
- `docs/legal/PHASE_0_LEGAL_REVIEW_QUESTIONS.md`
- `docs/validation/PHASE_0_PROFESSIONAL_LEGAL_REVIEW_READINESS.md`
- `docs/validation/PHASE_0_PROFESSIONAL_LEGAL_REVIEW_OUTCOME.md`

### Ebook Content Plan

- Content plan complete. See `docs/content/PHASE_0_EBOOK_CONTENT_PLAN.md` for strategic, editorial, legal-safe, and design-ready guidance.

Status: done.

### Ebook Song Selection

- Provisional selection complete. See `docs/content/PHASE_0_EBOOK_SONG_SELECTION.md`.
- Provisional set: A Thousand Years (Christina Perri), Still Loving You (Scorpions), The Reason (Hoobastank).
- Primary backup: Nothing Else Matters (Metallica). Secondary backup: Thank You (Dido).
- Selection is provisional; survey and channel evidence may change it before drafting.

Status: done.

### Mandatory Ebook Pre-Production Improvement

Product decision: the current 21-page ebook is a useful implementation base, but it is not approved as the final Production asset. Mandatory improvement is a launch blocker. This phase will produce one improved digital version only; printable, EPUB, Kindle, paid-ebook and subscription-platform variants remain postponed.

- [x] Complete the current ebook page-by-page audit.
- [x] Complete the nine-practice educational-content audit.
- [x] Complete the visual and editorial audit of all 21 rendered pages.
- [x] Inventory all current PDF link annotations.
- [x] Define the proposed page-by-page architecture.
- [x] Recommend a 30-page final target.
- [x] Revise the architecture to a 32-page target after owner review returned CHANGES REQUESTED, separating mission, future-product positioning and survey into distinct pages and strengthening expression-review contracts.
- [x] Obtain project-owner approval of the revised 32-page page architecture.
- [x] Draft the improved 32-page learner copy and the `Escríbelo como suena` pronunciation standard (copy approval recorded; qualified pronunciation review pending).
- [x] Address the initial owner copy review (CHANGES REQUESTED): difficult-sound legend on page 4, accent-rule clarification, non-reconstruction recall on page 26, completion-scale legends on pages 16/21, and expanded page 32 rights note.
- [x] Obtain owner final copy approval of the improved 32-page copy.
- [x] Prepare the qualified pronunciation review packet for the nine normalized bridges.
- [x] Complete the AI-assisted, non-authoritative pronunciation pre-review.
- [x] Assign a qualified pronunciation reviewer.
- [x] Complete the qualified pronunciation review of the nine normalized bridges.
- [x] Apply the five approved pronunciation bridge corrections and resolve the two practice caveats.
- [x] Reverify all final destinations.
- [x] Generate and programmatically decode QR codes from verified destinations.
- [x] Complete the manual two-device QR scan test at 30 mm and 24 mm based on the project-owner manual test report: 20 of 20 PASS; no unexpected redirects.
- [x] Build the twelve-page representative visual prototype for the approved improved ebook.
- [x] Implement the required A5 overflow and footer-clearance corrections from the initial project-owner prototype review.
- [x] Complete the project-owner visual review of the representative prototype.
- [x] Implement the complete approved 32-page ebook HTML/CSS design.
- [x] Complete project-owner A5 and 390 px visual re-review of the full 32-page design: corrected A5 and 390 px reviews PASS; final owner approval recorded.
- [x] Generate the 32-page production-PDF candidate through the approved workflow.
- [x] Complete agent structural, visual, text, metadata, link and embedded-QR QA.
- [x] Complete project-owner review of the 32-page production-PDF candidate.
- [x] Complete project-owner/manual review of the five embedded-PDF QR codes.
- [x] Pass the production-PDF candidate gate.
- [x] Stage the approved public PDF replacement while preserving the public filename.
- [x] Complete source-to-public PDF integrity verification.
- [x] Complete deployed Preview PDF delivery QA.
- [x] Complete project-owner Preview delivery review.
- [x] Pass the public replacement Preview gate and approve the repository replacement for merge.
- [x] Complete deployed Production PDF smoke testing and rollback verification.
- [ ] Integrate the approved ebook into the future Production funnel.
- [ ] Complete controlled Production rollout.

Architecture approval status: APPROVED (revised 32-page target). Improved 32-page learner copy: APPROVED; owner copy gate: PASS. Qualified pronunciation review: COMPLETE; pronunciation gate: PASS. Educational lesson destinations: VERIFIED 3 of 3; original song destinations: VERIFIED 3 of 3; required destinations: RESOLVED 9 of 9; link/QR source gate: PASS. Design prototype: APPROVED; design prototype gate: PASS. Full 32-page design implementation: COMPLETE and APPROVED; full design gate: PASS. Production PDF generation: COMPLETE. Production-PDF candidate: APPROVED — 32 pages. Agent PDF QA: PASS. Production PDF gate: PASS. PR #61 merge: PASS at `0f3517478f2d1742d1292ab3f586e896789c9dfe`. Approved 32-page public replacement: LIVE under the unchanged filename. Candidate-to-public-to-Production identity: PASS. Approved 16-annotation inventory and root-domain canonical annotation: PASS; active `/ebook-gratis` annotation count: 0 — APPROVED / EXPECTED. Production deployment, post-merge smoke test and project-owner canonical Production review: PASS. Production replacement gate: PASS. Mandatory improved-ebook deliverable: COMPLETE. Rollback plan: VERIFIED / PREPARED — NOT EXECUTED. Direct PDF delivery: ACTIVE. Production lead capture: INACTIVE. Production Email 1: INACTIVE. Production automation: INACTIVE. Full commercial launch/funnel: NOT YET COMPLETE. See `docs/validation/PHASE_0_EBOOK_PDF_QA.md` and `docs/validation/PHASE_0_EBOOK_PDF_DELIVERY.md` for the active replacement record.

### Ebook Draft

- Editorial draft complete. See `docs/content/PHASE_0_EBOOK_DRAFT.md`.
- Nine fragment placeholders exist across three songs. No lyrics inserted.
- All learner-facing sections written. Publication is blocked on fragment review and approval.

Status: done.

### Ebook Fragment Review

- Review framework complete. See `docs/content/PHASE_0_EBOOK_FRAGMENT_REVIEW.md`.
- A Thousand Years review complete (branch: `content/phase-0-ebook-fragments-a-thousand-years`):
  - ATY-01 "One step closer" — Approved (score 87/100)
  - ATY-02 "Heart beats fast" — Approved (score 91/100)
  - ATY-03 "Time stands still" — Approved (score 86/100)
- Still Loving You review complete (branch: `content/phase-0-ebook-fragments-still-loving-you`):
  - SLY-01 "I will be there" — Approved (score 90/100)
  - SLY-02 "All the way from the start" — Approved (score 81/100)
  - SLY-03 "I can't get through" — Approved (score 91/100)
  - Non-adjacency confirmed by project owner. Vocalist accent documented; neutral pronunciation prioritized.
- Ebook draft phrase blocks for all three songs updated with approved content.
- ATY adjacency and reconstruction verification: complete — project owner confirmed outside the repository.
- Official media links verified (YouTube) for all three songs — 2026-06-15.

Branch: `content/phase-0-ebook-fragments-the-reason` (final fragment branch)

Status: Complete — 9 of 9 fragments approved. Nine-fragment review phase done.

- The Reason review complete (branch: `content/phase-0-ebook-fragments-the-reason`):
  - TR-01 "Before I go" — Approved
  - TR-02 "I'm not a perfect person" — Approved
  - TR-03 "Start over new" — Approved
  - Non-adjacency confirmed by project owner. Ebook order confirmed to differ from source order.
- Nine-fragment educational review phase: Complete.
- Final nine-fragment cross-song review: Complete. See Section 9 of `docs/content/PHASE_0_EBOOK_FRAGMENT_REVIEW.md`.

### Ebook Final Content

- Clean learner-facing ebook source created at `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md`.
- All nine approved fragments integrated with standardized labels, design handoff markers, and explicit publication blockers.
- Cross-song editorial consistency pass complete.
- Official media links (YouTube) verified and included for all three songs.
- Internal editorial notes removed from learner-facing flow.
- Audit trail preserved in `docs/content/PHASE_0_EBOOK_DRAFT.md` and `docs/content/PHASE_0_EBOOK_FRAGMENT_REVIEW.md`.

Branch: `content/phase-0-ebook-final-content`

Status: Complete.

Remaining pre-publication work:

- Confirm official media links are still active before PDF export.
- Final publication-level legal-safe review of the complete ebook text.
- PDF design: branch `design/phase-0-ebook-pdf-template`.
- Mobile readability QA.
- PDF upload: `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- `/ebook-gratis` page conversion from waiting page to real download page. Status: complete — `feat/phase-0-ebook-pdf-delivery`.
- Home page alignment with active delivery flow. Status: complete — `fix/phase-0-home-ebook-delivery-alignment`.
- Production-origin approval, PDF backlink restoration, seven-link structural validation, source-to-public PDF integrity, metadata completion, and Production PDF smoke testing. Status: complete for current direct-delivery flow.
- Email provider setup and delivery automation.
- Validation-metrics baseline framework. Status: complete — `review/phase-0-validation-metrics-baseline`. See `docs/validation/PHASE_0_VALIDATION_METRICS_BASELINE.md`. Actual production data collection pending.

### Ebook PDF Template

- Design specification: `docs/design/PHASE_0_EBOOK_PDF_TEMPLATE.md` — 21-section specification covering format, brand, typography, components, accessibility, QA checklists, and handoff instructions.
- Static prototype: `docs/design/prototypes/phase-0-ebook-template.html` (9 representative pages) and `docs/design/prototypes/phase-0-ebook-template.css` (full design system with tokens, print styles, narrow-screen styles).
- A5 portrait format (148 × 210 mm), dark brand identity, 15 reusable components, mobile-first and print-safe.
- Historical template recommendation: 14–16 pages. Superseded by the approved 32-page mandatory-improvement architecture.

Branch: `design/phase-0-ebook-pdf-template`

Status: Complete.

### Ebook PDF Production Draft

- 21-page production HTML at `docs/design/production/phase-0-ebook.html`.
- Production CSS at `docs/design/production/phase-0-ebook.css` (23 sections, derived from prototype).
- PDF export script at `scripts/export-ebook-pdf.sh` (Chrome headless, Python 3 HTTP server, structural and link annotation validation).
- QA checklist at `docs/validation/PHASE_0_EBOOK_PDF_QA.md`.
- Publication readiness review at `docs/validation/PHASE_0_EBOOK_PUBLICATION_READINESS.md`.
- Production draft at `docs/design/production/phase-0-ebook-production-draft.pdf` — 21 pages, 1,322,844 bytes, all 9 fragments, 7 embedded links, complete metadata, official `Sing Pronunce Repeat` brand, and canonical `https://singpronuncerepeat.com/ebook-gratis` backlink.

Branch: `design/phase-0-ebook-pdf-production`

Status: Complete — structural QA passed. Visual QA: approved by project owner. Link QA: passed. Legal-safe review: conservative review passed. Metadata: complete (corrected in `feat/phase-0-ebook-pdf-delivery`). Publication readiness decision: PASS FOR CURRENT DIRECT-DELIVERY FLOW.

### Ebook PDF Delivery

- [x] Historical superseded public PDF at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` (1,322,844 bytes, SHA-256 `fa9801f66f1cb6b0ea4e4ea300e05e808e893993cb4d0a5fdc87bde191fb3f08`).
- [x] `/ebook-gratis` converted from waiting page to active download page.
- [x] Download CTA with `download` attribute and correct filename.
- [x] Survey and first-group CTAs preserved with correct Tally destinations.
- [x] PDF metadata corrected (Author, Subject, Keywords, Creator) via `scripts/patch-pdf-metadata.py`.
- [x] Owner visual review approved.
- [x] Source-to-public integrity documented in `docs/validation/PHASE_0_EBOOK_PDF_DELIVERY.md`.
- [x] Deployed-environment smoke test — passed through the canonical custom domain.
- [x] Production domain approval — complete; `/ebook-gratis` clickable backlink restored and verified inside the deployed PDF.
- [ ] Mobile browser QA — pending manual check.
- [x] Download analytics — Vercel Web Analytics code integration complete (`feat/phase-0-download-analytics`). Dashboard activation and production verification pending.
- [ ] Email delivery automation — pending provider selection.

Branch: `feat/phase-0-ebook-pdf-delivery`

Status: Locally complete. Deployment verification pending.

### Lead Capture

- Use the Tally ebook form to capture guide interest.
- Add email capture in Tally.
- Use `docs/validation/PHASE_0_EMAIL_DELIVERY_PLAN.md` to plan confirmation, ebook delivery, survey reminder, first-group interest, and feedback emails.
- Plan ebook delivery through a future `/ebook-gratis` download page instead of a default PDF attachment.

Acceptance criteria:

- Downloads and email conversions are measurable.
- Email delivery does not require a provider until the ebook page/PDF and consent approach are ready.
- Email copy stays brand-led, legal-safe, and free of personal-name references.

### Ebook Download Page

- `/ebook-gratis` is active for the current direct ebook-delivery flow.
- Public PDF remains at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- Include CTAs for PDF download, browser-open action, survey, and first group interest.
- Include the legal-safe educational note.

Acceptance criteria:

- The current page delivers the guide without email attachments.
- The page supports click tracking for download, survey, and first group interest.
- The page does not include full commercial lyrics or full translated lyrics.

### Email Provider Setup

- Choose MailerLite, Brevo, ConvertKit, or a manual workflow after validation volume is clearer.
- Define sender email/domain.
- Define unsubscribe and privacy approach.
- Import or connect Tally contacts only after consent fields are confirmed.

Acceptance criteria:

- No provider is integrated before the ebook delivery page or PDF exists.
- Emails are sent only to learners who consented.
- The provider supports basic tracking for opens, clicks, unsubscribes, and replies.

### Lead Funnel Implementation

- Privacy and consent branch: define production privacy policy, consent copy, and contact/support guidance.
- Provider setup branch: configure MailerLite first, with Brevo as fallback if official-plan verification changes the recommendation.
- Lead-form branch: add the short registration form to `/` and `/ebook-gratis`.
- Thank-you-page branch: create `/gracias` with immediate download, open-in-browser action, and optional survey CTA.
- Email-delivery branch: trigger Email 1 and the follow-up sequence.
- Landing CRO branch: make lead capture the primary journey while preserving the current public PDF fallback.
- Funnel-analytics branch: add exact-event measurement only through approved tooling.
- QA branch: verify consent, redirect, delivery, isolation, analytics, failure states, and rollback.

Acceptance criteria:

- Implementation remains split into small branches.
- No database or authentication is introduced.
- Tally remains available for survey and first-group research until replacement integrations are ready.
- Direct PDF delivery can be restored quickly if the lead funnel fails in production.

## Phase 1: MVP

### Lesson Model

- Define lesson structure for 5 songs and 25 micro-lessons.
- Define fields for song metadata, fragment, pronunciation guide, translation, explanation, quiz, and progress.
- Decide drip schedule.

Acceptance criteria:

- Lesson model supports learning without storing full lyrics.

### Quizzes

- Define question types.
- Create scoring rules.
- Define feedback tone.

Acceptance criteria:

- Quizzes test comprehension, pronunciation awareness, and meaning.

### Payments

- Research COP payment provider options.
- Define founder payment flow.
- Document refund and access policy.

Acceptance criteria:

- Payment flow is ready before implementation.

## Future

- SEO lesson previews.
- More songs and lesson routes.
- Scholarship workflow.
- Partner landing pages.
- Mobile app research.
- AI pronunciation support research.
