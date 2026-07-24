# English with Lyrics Backlog

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
- [ ] Complete final Production consent linking.
- [ ] Complete Production environment configuration.
- [ ] Approve Production legal publication.
- [x] Create the public `/privacidad` route with safe draft/preparation rendering. Route implemented in `feat/phase-0-public-legal-routes`; content remains a working draft pending owner input and legal approval. See `docs/validation/PHASE_0_PUBLIC_LEGAL_ROUTES.md`.
- [x] Create the public `/tratamiento-de-datos` route with safe draft/preparation rendering. Route implemented in `feat/phase-0-public-legal-routes`; content remains a working draft pending owner input and legal approval.
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
- [x] Create the Preview automation in MailerLite.
- [ ] Create the Production groups in MailerLite.
- [ ] Create the Production form in MailerLite.
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
- [x] Define subject and preheader.
- [x] Define the Preview delivery target.
- [x] Define the four-email sequence outline.
- [x] Create the ebook delivery validation documentation.
- [x] Add MailerLite manual configuration instructions for Email 1.
- [ ] Configure Preview Email 1 in MailerLite.
- [ ] Run Preview Email 1 QA.
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

Privacy drafting status: legal-owner configuration, internal/owner review, professional Colombian legal review and provider contractual/DPA review are complete. Counsel reviewed the full legal and provider package and requested no legal-content or provider-related changes. This outcome does not activate Production. Final Production consent linking, environment configuration, legal publication and controlled rollout remain pending; Production email, automation and lead capture remain inactive. See:

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
- [ ] Complete the qualified pronunciation review of the nine normalized bridges.
- [ ] Reverify all final destinations.
- [ ] Generate and scan-test QR codes from verified destinations.
- [ ] Implement the improved ebook design.
- [ ] Generate the replacement PDF through the existing workflow.
- [ ] Complete final structural, visual, text, metadata and link QA.
- [ ] Replace the Production PDF while preserving the public filename.
- [ ] Integrate the approved ebook into the future Production funnel.
- [ ] Complete controlled Production rollout.

Architecture approval status: APPROVED (revised 32-page target). Improved 32-page learner copy: APPROVED; owner copy gate: PASS. Pronunciation standard: COMPLETE DRAFT; qualified pronunciation review: NEXT; pronunciation gate: BLOCKED. Link verification and QR: PENDING. Design implementation, PDF generation and Production replacement: BLOCKED. Production lead capture, Production Email 1 and Production automation: INACTIVE. See `docs/content/PHASE_0_EBOOK_IMPROVED_CONTENT.md`, `docs/content/PHASE_0_EBOOK_PRONUNCIATION_STANDARD.md` and `docs/validation/PHASE_0_EBOOK_COPY_PRONUNCIATION_READINESS.md`. The current 21-page source and PDF are unchanged.

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

- [x] Public PDF at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` (1,322,844 bytes, SHA-256 `fa9801f66f1cb6b0ea4e4ea300e05e808e893993cb4d0a5fdc87bde191fb3f08`).
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
