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
- Nine-slot register created. All nine fragment text fields remain [PENDING_MANUAL_INPUT].
- Intake rules, review statuses, editorial scoring model, pronunciation template, natural meaning template, vocabulary template, exercise template, cross-fragment reconstruction check, and song replacement gate are all defined.
- Manual fragment input from the project owner is required before any slot can advance.

Branch: `content/phase-0-ebook-fragment-review`

Status: In progress — framework complete, manual fragment input pending.

Remaining acceptance criteria:

- All nine fragment slots receive a final decision (Approved or Replaced).
- No fragment reconstructs a verse or chorus when combined sequentially.
- Pronunciation, natural meaning, vocabulary, and exercises are finalized for all nine approved slots.
- Legal-safe review completed for each approved fragment.
- Ebook draft placeholders updated after each slot is approved.

### Ebook PDF Template

- Create the PDF visual template using the design handoff requirements from Section 17 of the content plan.
- Use official brand colors and logo assets from `public/brand/`.
- Target A5 or equivalent mobile-first vertical format.
- Aim for 8–14 pages.

Branch: `design/phase-0-ebook-pdf-template`

Acceptance criteria:

- Template is readable on a phone without zooming.
- All brand checklist items from Section 19 pass.

### Ebook PDF Delivery

- Upload the final PDF to `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- Convert `/ebook-gratis` from waiting page to real download page.
- Confirm all Tally CTAs link correctly.
- Configure email delivery per `docs/validation/PHASE_0_EMAIL_DELIVERY_PLAN.md`.

Branch: `feat/phase-0-ebook-pdf-delivery`

Acceptance criteria:

- PDF is downloadable from `/ebook-gratis`.
- Delivery email links to `/ebook-gratis`, not a PDF attachment.
- No provider integration before PDF and consent approach are confirmed.

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
