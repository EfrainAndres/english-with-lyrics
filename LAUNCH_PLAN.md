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

Sing Pronounce Repeat helps Spanish speakers learn English through songs using the Escríbelo como suena method, short educational fragments, natural translation, and practical micro-lessons.

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
| Fragment review | Pending — `content/phase-0-ebook-fragment-review` |
| PDF template | Pending — `design/phase-0-ebook-pdf-template` |
| PDF delivery and page conversion | Pending — `feat/phase-0-ebook-pdf-delivery` |
| Email provider setup | Pending — after PDF and consent approach confirmed |

### Launch Steps

1. Provisional song set selected: A Thousand Years, Still Loving You, The Reason. Confirm or revise based on survey and channel evidence before drafting. See `docs/content/PHASE_0_EBOOK_SONG_SELECTION.md`.
2. Create short educational lessons for each song following the micro-lesson template and editorial rules in the content plan.
3. Review content against `CONTENT_GUIDE.md`, `LEGAL_GUIDE.md`, and the quality gates in Section 19 of the content plan.
4. Create the PDF template using the design handoff requirements in Section 17 of the content plan.
5. Convert `/ebook-gratis` from waiting page to real download page.
6. Send the delivery email with a link to `/ebook-gratis`.
7. Promote through YouTube, social, and email.
8. Measure downloads, replies, survey clicks, and first-group interest.
9. Compare demand across Románticas, Rock / pop clásicos, and Principiantes paths.

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
