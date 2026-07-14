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
| Fragment review framework | Complete — `docs/content/PHASE_0_EBOOK_FRAGMENT_REVIEW.md` (nine slots defined) |
| Fragment approval — A Thousand Years | Complete — ATY-01 "One step closer" (87/100), ATY-02 "Heart beats fast" (91/100), ATY-03 "Time stands still" (86/100). All approved. |
| Fragment approval — Still Loving You | Complete — SLY-01 "I will be there" (90/100), SLY-02 "All the way from the start" (81/100), SLY-03 "I can't get through" (91/100). All approved. Vocalist accent documented; neutral pronunciation prioritized. |
| Fragment approval — The Reason | Complete — TR-01 "Before I go" (86/100), TR-02 "I'm not a perfect person" (91/100), TR-03 "Start over new" (87/100). All approved. Non-adjacency and source-order distinction confirmed by project owner. |
| Nine-fragment review phase | Complete — all 9 of 9 fragments approved; cross-song consistency review done |
| Final content integration | Complete — `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md` (branch `content/phase-0-ebook-final-content`); official media links verified; design handoff markers in place; publication blocked by legal-safe review and PDF design |
| PDF design template | Complete — `docs/design/PHASE_0_EBOOK_PDF_TEMPLATE.md`; A5 portrait, 15 reusable components, static prototype at `docs/design/prototypes/`; recommended 14–16 pages |
| PDF production draft | Complete — 21-page PDF with full metadata at `docs/design/production/phase-0-ebook-production-draft.pdf`; owner visual review approved |
| PDF publication readiness review | Complete — `docs/validation/PHASE_0_EBOOK_PUBLICATION_READINESS.md`; decision: CONDITIONAL GO |
| PDF delivery and page conversion | Locally complete — `feat/phase-0-ebook-pdf-delivery`; public PDF at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`; `/ebook-gratis` download page active; deployed smoke test pending |
| Home page alignment | Locally complete — `fix/phase-0-home-ebook-delivery-alignment`; all home CTAs route to `/ebook-gratis`; waiting-state copy removed; deployed smoke test pending |
| Production origin + PDF backlink | Locally complete — `fix/phase-0-production-origin-and-pdf-backlink`; origin `https://english-with-lyrics.vercel.app` approved; PDF backlink restored; 7 annotations validated; production redeploy and PDF backlink click test pending |
| Baseline analytics | Code complete — `feat/phase-0-download-analytics`; `@vercel/analytics` installed; `<Analytics />` in root layout; dashboard activation and production verification pending; exact download-click events unavailable on Hobby plan |
| Validation-metrics baseline | Complete — `review/phase-0-validation-metrics-baseline`; 20-section framework in `docs/validation/PHASE_0_VALIDATION_METRICS_BASELINE.md`; observation window not yet started; all metric values pending manual data entry |
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

### Next rollout milestone: Lead capture and nurture funnel

Status: planned, not live.

Staged rollout:

1. Architecture approved.
2. Privacy and consent ready, including owner details and professional legal review.
3. Provider foundation documented.
4. Provider configured.
5. Form integrated.
6. `/gracias` ready.
7. Email 1 tested.
8. Full sequence prepared.
9. Preview QA.
10. Controlled production rollout.
11. Metrics review.

### Provider setup gates

1. Account approved.
2. Security and MFA completed.
3. Provider due diligence completed.
4. Preview group created.
5. Preview form created.
6. Preview automation prepared.
7. Sender verified.
8. Domain authenticated.
9. Export and deletion tested.
10. Unsubscribe tested.
11. Production identifiers created but inactive.
12. Public policies published.
13. Legal approval complete.
14. Controlled rollout approved.

### Privacy gates before production lead capture

All gates remain pending until supported by evidence:

1. Owner and responsible-party details complete.
2. Professional legal review complete.
3. Approved public privacy and data-processing policies published as applicable.
4. Privacy/contact channel operational.
5. MailerLite due diligence and international-processing review complete.
6. Production and Preview data isolation verified.
7. Explicit, unchecked consent UI verified.
8. Unsubscribe and suppression behavior verified.
9. Data deletion and export verified.
10. Controlled rollout approved.

Direct ebook delivery must remain active until the replacement funnel passes Preview, rollback, privacy, and production-readiness QA. Draft legal documents do not make the funnel live.

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
