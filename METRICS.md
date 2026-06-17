# English with Lyrics Metrics

## Metric Philosophy

Use metrics to validate demand, learning value, and willingness to pay before building a large platform. Track only what supports decisions.

## Phase 0: Validation Metrics

Primary metrics:

- Landing page visits.
- Ebook interest clicks.
- Ebook form submissions.
- Visits to `/ebook-gratis`.
- Survey starts.
- Survey completion rate.
- Survey form submissions.
- Waitlist conversion rate.
- First group interest clicks.
- First group form submissions.
- Email delivery rate.
- Email open rate.
- Email click rate to ebook page.
- Founder offer click-through rate.
- Founder offer purchase or reservation rate.

Useful secondary metrics:

- Traffic source.
- Country.
- English level.
- Favorite music genres.
- Biggest pronunciation pain point.
- Preferred price range in COP.
- Preferred validation format: PDF, web, email/WhatsApp, video, or app later.
- Selected ebook path: Románticas, Rock / pop clásicos, or Principiantes.

Decision signals:

- Strong signal: users join the waitlist and express willingness to pay.
- Medium signal: users download or request content but avoid payment.
- Weak signal: users visit but do not join, answer, or click.

Survey interpretation:

- Strong signal: learners identify a repeated pain point and choose the free guide plus first group interest.
- Medium signal: learners want the free guide but need clearer proof before joining a group.
- Red flag: learners mainly ask for full lyrics, complete translations, or a karaoke replacement.

## Phase 0 Validation Metrics Baseline

The full framework — observation-window requirements, data-source inventory, funnel definitions, baseline calculations, minimum evidence thresholds, decision matrix, survey-analysis categories, privacy rules, and the go-forward procedure — is documented in `docs/validation/PHASE_0_VALIDATION_METRICS_BASELINE.md`.

### Evidence quality labels

Use these labels when recording any metric value:

| Label | Meaning |
|---|---|
| Verified | Exported directly from the Vercel or Tally dashboard for a defined observation window |
| Directional | Calculated from verified values but subject to cross-device or cross-session attribution gaps |
| Pending | No verified data yet; observation window not started or not complete |
| Not calculable | Denominator missing, zero, or data source unavailable |

Do not record a numeric value without a label and a source.

### Minimum evidence thresholds

| State | Home visitors | Ebook-page visitors | Submissions | Observation days |
|---|---|---|---|---|
| Insufficient | < 30 | < 10 | < 3 combined | Any |
| Early signal | ≥ 30 | ≥ 10 | ≥ 3 combined | ≥ 7 complete days |
| Baseline established | ≥ 100 | ≥ 30 | ≥ 10 survey + ≥ 3 first-group | ≥ 14 complete days |

### Current baseline status

| Metric | Value | Label |
|---|---|---|
| Home unique visitors | Pending manual data entry | Pending |
| Ebook-page unique visitors | Pending manual data entry | Pending |
| Ebook-page visit rate | Pending manual data entry | Pending |
| Survey submissions | Pending manual data entry | Pending |
| First-group submissions | Pending manual data entry | Pending |
| Observation window | Not started | — |
| **Decision** | **CONTINUE OBSERVING** | — |

---

## Phase 0.5: Ebook Metrics

### Available now (Vercel Web Analytics — Hobby plan)

- Landing page (`/`) visitors and page views.
- Ebook page (`/ebook-gratis`) visitors and page views.
- Traffic referrers and source channels.
- Device type and geographic aggregates.
- Survey submissions via Tally (`https://tally.so/r/eqzgbe`).
- First-group form submissions via Tally (`https://tally.so/r/D4a6NE`).

Do not use "ebook downloads" as a metric — only ebook-page visits are currently measurable. See `docs/validation/PHASE_0_DOWNLOAD_ANALYTICS.md` for the funnel model and calculations.

### Pending exact instrumentation

- PDF download-click count (requires Vercel Pro or alternative provider).
- Open-in-browser click count.
- CTA-specific click events (`ebook_download_clicked`, `ebook_survey_clicked`, `ebook_first_group_clicked`).
- Email delivery rate, open rate, and click rate (requires email provider setup).

### Ebook validation signal categories

These categories align with the signal framework in `docs/content/PHASE_0_EBOOK_CONTENT_PLAN.md` Section 16.

Interest signals:

- Visits to `/ebook-gratis`.
- Delivery email open rate (pending email provider).
- Click rate from delivery email to `/ebook-gratis` (pending email provider).

Engagement signals:

- Survey click-through from ebook page (via Tally).
- Survey completion rate (via Tally).
- First-group interest submissions (via Tally).
- Preferred song category (from survey, form field, or reply).
- Completion self-report.

High-intent signals:

- Survey completion after visiting the ebook page.
- First-group form submission.
- Direct replies requesting more lessons or specific songs.
- Reported pronunciation or listening improvement.

Monetization signals (not validated by the free ebook alone):

- Survey responses indicating willingness to pay in COP.
- First-group form submissions asking about pricing.
- Founder offer click-through if mentioned in the ebook.
- Direct pricing inquiries.

### Important note

Ebook page visit volume alone is not a strong validation signal. Survey completion and first-group interest are required to confirm real demand.

## Phase 1: MVP Metrics

Acquisition:

- Paid signups.
- Conversion from waitlist to paid.
- Conversion from ebook to paid.
- Cost per lead if ads are tested.

Activation:

- First lesson started.
- First quiz completed.
- First pronunciation practice completed.

Engagement:

- Lesson completion rate.
- Quiz completion rate.
- Average lessons completed per user.
- Drip email open and click rates.

Retention:

- Week 1 return rate.
- Week 2 return rate.
- Completion of all 25 micro-lessons.

Revenue:

- Gross revenue in COP.
- Refund rate.
- Payment failure rate.
- Founder offer conversion rate.

Qualitative:

- Confidence improvement feedback.
- Most confusing lesson parts.
- Song requests.
- Testimonials.

## Minimum Validation Dashboard

For early work, a simple spreadsheet is enough. Track:

- Date.
- Campaign/source.
- Visits.
- Ebook CTA clicks.
- Ebook Tally submissions.
- `/ebook-gratis` visits.
- `/ebook-gratis` CTA clicks.
- Survey starts.
- Survey completions.
- Waitlist signups.
- Ebook downloads.
- Email sent status.
- Email click status.
- PDF download clicks.
- Selected ebook path.
- Founder offer clicks.
- First group interest clicks.
- Paid founder customers.
- Notes from user conversations.

## Metrics To Avoid Early

Do not over-focus on:

- Vanity social views without conversion.
- Complex cohort dashboards before there are users.
- AI personalization metrics before AI exists.
- Mobile retention before a mobile app exists.
