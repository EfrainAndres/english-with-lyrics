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

- Define privacy and consent surface for production lead capture.
- Verify current official plan details for the selected email provider.
- Configure provider, sender identity, groups, automations, and preview isolation.
- Add the reusable lead form to `/` and `/ebook-gratis`.
- Create `/gracias` as the immediate post-registration delivery page.
- Connect Email 1 delivery and the four-email educational sequence.
- Restructure landing conversion hierarchy around the new lead form.
- Add exact funnel-event analytics when approved tooling exists.
- Run preview QA, rollback QA, and production-readiness review.

Acceptance criteria:

- Direct delivery remains active until the replacement funnel passes QA.
- No production leads are collected before privacy and consent are approved.
- Production and Preview data remain isolated.
- No implementation branch marks the lead funnel live before controlled rollout approval.

### Ebook Content Plan

- Content plan complete. See `docs/content/PHASE_0_EBOOK_CONTENT_PLAN.md` for strategic, editorial, legal-safe, and design-ready guidance.

Status: done.

### Ebook Song Selection

- Provisional selection complete. See `docs/content/PHASE_0_EBOOK_SONG_SELECTION.md`.
- Provisional set: A Thousand Years (Christina Perri), Still Loving You (Scorpions), The Reason (Hoobastank).
- Primary backup: Nothing Else Matters (Metallica). Secondary backup: Thank You (Dido).
- Selection is provisional; survey and channel evidence may change it before drafting.

Status: done.

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
- Production-origin approval, PDF backlink restoration, seven-link structural validation, source-to-public PDF integrity, metadata completion. Status: locally complete — `fix/phase-0-production-origin-and-pdf-backlink`. Production redeploy and PDF backlink click verification pending.
- Email provider setup and delivery automation.
- Validation-metrics baseline framework. Status: complete — `review/phase-0-validation-metrics-baseline`. See `docs/validation/PHASE_0_VALIDATION_METRICS_BASELINE.md`. Actual production data collection pending.

### Ebook PDF Template

- Design specification: `docs/design/PHASE_0_EBOOK_PDF_TEMPLATE.md` — 21-section specification covering format, brand, typography, components, accessibility, QA checklists, and handoff instructions.
- Static prototype: `docs/design/prototypes/phase-0-ebook-template.html` (9 representative pages) and `docs/design/prototypes/phase-0-ebook-template.css` (full design system with tokens, print styles, narrow-screen styles).
- A5 portrait format (148 × 210 mm), dark brand identity, 15 reusable components, mobile-first and print-safe.
- Recommended final page count: 14–16 pages.

Branch: `design/phase-0-ebook-pdf-template`

Status: Complete.

### Ebook PDF Production Draft

- 21-page production HTML at `docs/design/production/phase-0-ebook.html`.
- Production CSS at `docs/design/production/phase-0-ebook.css` (23 sections, derived from prototype).
- PDF export script at `scripts/export-ebook-pdf.sh` (Chrome headless, Python 3 HTTP server, structural and link annotation validation).
- QA checklist at `docs/validation/PHASE_0_EBOOK_PDF_QA.md`.
- Publication readiness review at `docs/validation/PHASE_0_EBOOK_PUBLICATION_READINESS.md`.
- Production draft at `docs/design/production/phase-0-ebook-production-draft.pdf` — 21 pages, 1,225,508 bytes, all 9 fragments, 6 embedded links, complete metadata.

Branch: `design/phase-0-ebook-pdf-production`

Status: Complete — structural QA passed. Visual QA: approved by project owner. Link QA: passed. Legal-safe review: conservative review passed. Metadata: complete (corrected in `feat/phase-0-ebook-pdf-delivery`). Publication readiness decision: CONDITIONAL GO.

### Ebook PDF Delivery

- [x] Public PDF at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` (1,225,508 bytes, SHA-256 `ebd1745f...`).
- [x] `/ebook-gratis` converted from waiting page to active download page.
- [x] Download CTA with `download` attribute and correct filename.
- [x] Survey and first-group CTAs preserved with correct Tally destinations.
- [x] PDF metadata corrected (Author, Subject, Keywords, Creator) via `scripts/patch-pdf-metadata.py`.
- [x] Owner visual review approved.
- [x] Source-to-public integrity documented in `docs/validation/PHASE_0_EBOOK_PDF_DELIVERY.md`.
- [ ] Deployed-environment smoke test — pending deployment.
- [ ] Production domain approval — needed to restore `/ebook-gratis` clickable backlink inside PDF.
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

- Maintain `/ebook-gratis` as a waiting page until the ebook PDF is ready.
- Store the future PDF at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- Include CTAs for PDF download, survey, and first group interest.
- Include the legal-safe educational note.

Acceptance criteria:

- The current page does not fake a download before the PDF exists.
- The future page delivers the guide without email attachments.
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
