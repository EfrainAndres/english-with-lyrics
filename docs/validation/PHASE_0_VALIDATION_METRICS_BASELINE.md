# Phase 0 Validation Metrics Baseline

## 1. Baseline Status

| Field | Value |
|---|---|
| Review date | 2026-06-17 |
| Branch | `review/phase-0-validation-metrics-baseline` |
| Production origin | `https://english-with-lyrics.vercel.app` |
| Analytics provider | Vercel Web Analytics — code integrated, dashboard activation pending |
| Form provider | Tally |
| Observation-window status | Not started — no confirmed observation window with verified production data |
| Actual metrics available | No |
| **Baseline decision** | **INSUFFICIENT DATA** |

**Rationale:** Analytics and forms are operational, but no verified production data from a defined observation window has been manually supplied. The baseline framework is complete. Data collection must begin before any conversion metrics can be calculated.

---

## 2. Observation Window

No valid observation window exists yet. The framework below defines what a trustworthy window requires.

### Requirements for a valid window

- A clearly defined start date (preferably the first full day after the production deployment with analytics enabled).
- A clearly defined end date.
- At minimum 7 complete days.
- The deployment day should be excluded or annotated separately, as it mixes developer traffic with real visitor traffic.
- Known production smoke tests and internal visits should be annotated.
- Traffic sources should be documented (e.g., YouTube video publication date, WhatsApp share, Instagram post).

### Recommended windows

| Window | Days | Purpose |
|---|---|---|
| Early review | 7 complete days | First signal check — confirm analytics is working and forms are receiving traffic |
| Baseline review | 14 complete days | First trustworthy directional conversion calculations |
| Trend review | 30 complete days | Stable channel and device patterns |

These are practical minimums for a small-traffic Phase 0 project, not statistical guarantees. Very small samples (fewer than 30 unique visitors) should be interpreted conservatively regardless of the observation length.

### Distortion risks

- Deployment day typically includes developer and owner visits that inflate early numbers.
- Sharing to a personal network in one burst creates a spike that does not represent sustained organic discovery.
- Personal devices used for testing during the observation window add artificial sessions.

---

## 3. Data-Source Inventory

| Source | Metric | Available now? | Manual action required | Limitation |
|---|---|---|---|---|
| Vercel Web Analytics | Home (`/`) page views | When dashboard is enabled | Enable dashboard; export or record | Includes bot traffic and developer visits |
| Vercel Web Analytics | Home unique visitors | When dashboard is enabled | Enable dashboard | Estimate; Vercel uses privacy-preserving approximation |
| Vercel Web Analytics | Ebook page (`/ebook-gratis`) page views | When dashboard is enabled | Enable dashboard | Same limitations as above |
| Vercel Web Analytics | Ebook-page unique visitors | When dashboard is enabled | Enable dashboard | Same limitations |
| Vercel Web Analytics | Referrers / traffic sources | When dashboard is enabled | Enable dashboard | Referrer may be hidden for direct links (e.g. WhatsApp) |
| Vercel Web Analytics | Device type aggregates | When dashboard is enabled | Enable dashboard | Approximate |
| Vercel Web Analytics | Country aggregates | When dashboard is enabled | Enable dashboard | Privacy-conscious resolution; city-level not available |
| Tally survey | Total submissions | Available in Tally dashboard | Owner reads Tally dashboard | No cross-device match with Vercel |
| Tally survey | Submission dates | Available in Tally dashboard | Owner reads Tally dashboard | Dates in Tally account timezone |
| Tally survey | Song preferences | Available in Tally responses | Owner analyzes responses | Free-text; requires grouping |
| Tally survey | English level | Available in Tally responses | Owner analyzes responses | Self-reported |
| Tally survey | Main learning difficulty | Available in Tally responses | Owner analyzes responses | Self-reported |
| Tally survey | Interest in guided practice | Available in Tally responses | Owner analyzes responses | Self-reported |
| Tally survey | Willingness to pay (if asked) | When field exists in form | Owner confirms field is present | Optional field may not be filled |
| Tally first-group form | Total submissions | Available in Tally dashboard | Owner reads Tally dashboard | No cross-device match with Vercel |
| Tally first-group form | Level distribution | Available in Tally responses | Owner analyzes responses | Self-reported |
| Tally first-group form | Learning goal | Available in Tally responses | Owner analyzes responses | Self-reported |
| Tally first-group form | Feedback willingness | Available in Tally responses | Owner analyzes responses | Optional field |
| Tally first-group form | Preferred contact channel | Available in Tally responses | Owner analyzes responses | Optional field |
| Tally first-group form | Founder-access interest | Available in Tally responses | Owner analyzes responses | Optional field |
| — | Exact PDF download clicks | **Not available** | Requires Vercel Pro or alternative provider | Not instrumented on current Hobby plan |
| — | Completed browser downloads | **Not available** | No browser-completion signal exists | Technically unavailable |
| — | PDF reading completion | **Not available** | Would require reader-side tooling | Out of scope |
| — | Individual user journey (Vercel + Tally) | **Not available** | No cross-platform identity | Privacy by design |
| — | Email open rate / click rate | **Not available** | Requires email provider setup | Email automation not configured |
| — | Exact CTA click attribution | **Not available** | Requires custom events (Vercel Pro) | Not instrumented |

---

## 4. Manual Baseline Data-Entry Template

Enter verified values from the Vercel dashboard and Tally after a complete observation window. Do not estimate or round up unknown values.

| Metric | Value | Source | Date range | Verified by | Notes |
|---|---|---|---|---|---|
| Home page views | Pending manual data entry | Vercel Analytics | — | — | — |
| Home unique visitors | Pending manual data entry | Vercel Analytics | — | — | — |
| Ebook-page (`/ebook-gratis`) page views | Pending manual data entry | Vercel Analytics | — | — | — |
| Ebook-page unique visitors | Pending manual data entry | Vercel Analytics | — | — | — |
| Survey submissions | Pending manual data entry | Tally | — | — | — |
| First-group form submissions | Pending manual data entry | Tally | — | — | — |
| Top referrer / traffic source | Pending manual data entry | Vercel Analytics | — | — | — |
| Mobile traffic share (%) | Pending manual data entry | Vercel Analytics | — | — | — |
| Colombia traffic share (%) | Pending manual data entry | Vercel Analytics | — | — | — |
| Other relevant market | Pending manual data entry | Vercel Analytics | — | — | — |
| Legacy ebook-form submissions (`tally.so/r/q4z8l9`) | Pending manual data entry | Tally | — | — | Form still active; track separately from survey |

---

## 5. Funnel Definitions

### Stage 1 — Awareness

**Metric:** Unique visitors to `/`

Source: Vercel Web Analytics.

This represents exposure to the Sing Pronounce Repeat brand and value proposition.

### Stage 2 — Ebook interest

**Metric:** Unique visitors to `/ebook-gratis`

Source: Vercel Web Analytics.

This represents users who acted on the download CTA or navigated directly to the ebook page.

### Stage 3 — Guide acquisition intent

**Proxy metric:** Ebook-page visit

**Important:** A visit to `/ebook-gratis` is **not equivalent to a completed download.** The download is a direct browser anchor. No click event is instrumented. Use the term **ebook-page visit rate**, not *download rate*.

### Stage 4 — Research participation

**Metric:** Tally survey submissions

Source: Tally dashboard.

This represents users who engaged actively with the validation process. Survey URL: `https://tally.so/r/eqzgbe`.

### Stage 5 — Stronger intent

**Metric:** First-group form submissions

Source: Tally dashboard.

This represents users who expressed explicit interest in a structured practice group. First-group URL: `https://tally.so/r/D4a6NE`.

Do not merge survey and first-group submissions into a single conversion figure.

---

## 6. Baseline Calculations

These formulas are directional. Cross-device visits, direct navigation bypassing the home, and the gap between Tally and Vercel sessions mean these are approximations.

### Ebook-page visit rate

```text
unique /ebook-gratis visitors
÷ unique home visitors
× 100
```

Requirements:
- Use the same observation window for both values.
- Use unique visitors, not page views, when available.
- Record `Not calculable` if the denominator is missing or zero.

### Survey conversion from ebook page

```text
survey submissions
÷ unique /ebook-gratis visitors
× 100
```

**Label as directional** because:
- Users may reach Tally from the home page or a direct link, not only from the ebook page.
- Users may submit the survey on a different day or device.
- Cross-device identity is unavailable.

### First-group interest rate

```text
first-group submissions
÷ unique /ebook-gratis visitors
× 100
```

**Label as directional** for the same reasons.

### Survey completion share

Only calculable when Tally provides both starts and completed submissions:

```text
completed survey submissions
÷ survey starts
× 100
```

Do not create this metric when starts are unavailable in the Tally dashboard.

---

## 7. Data-Quality Risks

| Risk | Impact | Mitigation | Blocks interpretation? |
|---|---|---|---|
| Developer and owner visits during the observation window | Inflates visitor counts in small samples | Avoid repeated production testing; use preview deployments for routine checks | Yes — in very small samples (< 30 visitors) |
| Preview deployment traffic bleeding into production analytics | Could add non-real visitor data | Vercel Analytics only counts production domain; preview deployments use separate analytics if enabled | No — production analytics is scoped to `english-with-lyrics.vercel.app` |
| Burst traffic from a single share (YouTube, WhatsApp, Instagram) | Creates a spike that does not represent discovery patterns | Annotate promotion dates; interpret burst traffic separately | Partial — note the source channel |
| Bot traffic | Artificially inflates page views | Vercel's analytics filters some bots; small projects may still see occasional crawlers | Low |
| Shared devices | A single device used by multiple people counts as one visitor | Acknowledge limitation; do not over-correct | Low for Phase 0 |
| Cross-device visits (same person on phone then desktop) | Unique-visitor count is inflated; user looks like two visitors | Vercel's privacy model does not track identity; acknowledge limitation | Low — directional metrics remain valid |
| Users bypassing the home (direct link to `/ebook-gratis`) | Ebook-page visit rate denominator is understated | This is a real user behavior, not a data flaw; note in analysis | No |
| Tally submissions without a matching Vercel session | Survey-conversion denominator may not include all Tally respondents | Label all conversion rates as directional | No |
| Legacy Tally ebook-form submissions (`tally.so/r/q4z8l9`) | May appear as distinct signal from survey or first-group submissions | Track legacy form separately; do not merge into survey count | No |
| Traffic from YouTube, WhatsApp, Instagram, Facebook, or TikTok | Referrer may be missing or incomplete (apps strip referrer headers) | Record promotion dates; annotate known channels separately | Partial — referrer data is unreliable for in-app links |
| Analytics blocked by browser extension | Real visitors are undercounted | Vercel's script is lightweight and privacy-friendly; some extensions still block it | Low — accept small undercounting |

---

## 8. Internal-Traffic Handling

Vercel Web Analytics on the Hobby plan does not automatically exclude owner or developer visits.

Practical options to reduce contamination:

- Avoid opening the production site repeatedly during the observation window.
- Use local development (`localhost:3000`) or Vercel Preview deployments for all routine testing and smoke checks.
- Record the dates of any required production smoke tests in a private log and annotate them when reviewing Vercel data.
- Annotate campaign launch dates (video publication, WhatsApp shares, Instagram posts) to explain traffic spikes.
- When the total visitor count is very small (fewer than 30 unique home visitors), treat all conversion ratios as illustrative rather than actionable.

---

## 9. Minimum Evidence Thresholds

These are conservative internal decision thresholds for Phase 0. They are project hypotheses, not universal benchmarks.

**Initial internal decision thresholds — revise after real traffic data.**

### Insufficient data

- Fewer than 30 unique home visitors.
- Fewer than 10 unique ebook-page visitors.
- Fewer than 3 total validation submissions (survey + first-group combined).

### Early signal

- At least 30 unique home visitors.
- At least 10 unique ebook-page visitors.
- At least 3 combined survey or first-group submissions.
- At least 7 complete observation days.

### Baseline established

- At least 100 unique home visitors.
- At least 30 unique ebook-page visitors.
- At least 10 survey submissions.
- At least 3 first-group submissions.
- At least 14 complete observation days.
- No major unresolved tracking issue (e.g., analytics dashboard not enabled, form links broken).

---

## 10. Product Signals

### Positive signals

- Meaningful traffic reaches `/ebook-gratis` relative to home traffic.
- Survey submissions contain repeated pronunciation pain points.
- Users mention difficulty understanding sung English or joined words.
- Users value the Escríbelo como suena approach.
- First-group interest exists alongside survey engagement.
- Users suggest specific songs or artists.
- Users complete optional free-text or feedback fields.
- Returning or referral traffic emerges after the initial launch wave.

### Weak signals

- Strong home traffic but few ebook-page visits (landing CTA or copy may need adjustment).
- Ebook-page visits but no survey submissions (friction between guide and survey, or wrong audience).
- Survey interest but no first-group submissions (willingness to engage but not commit).
- High mobile traffic with usability complaints or broken layout reports.
- Repeated song requests that do not match the current guide content.

### Negative signals

- Users do not understand the Escríbelo como suena method.
- Guide feedback says the pronunciation notation is confusing or unhelpful.
- Users report broken mobile layout or download failure.
- Users believe full lyrics are included (misaligned expectations).
- Legal or rights-holder concerns emerge.
- Almost no traffic after meaningful distribution to the existing audience.

Do not classify actual project performance using these categories until real survey responses and traffic data are available.

---

## 11. Survey-Analysis Framework

Use these categories when manually reviewing Tally survey responses. Do not paste individual free-text answers or personally identifiable information into this document.

| Category | What to record |
|---|---|
| English level | Beginner / Intermediate / Advanced distribution |
| Learning objective | Listening comprehension / Pronunciation / Vocabulary / Conversation / Other |
| Main difficulty | Most frequently mentioned challenge |
| Preferred song genre | Románticas / Rock / Pop / Other categories mentioned |
| Preferred artist or song | Top requests (anonymized aggregate, no submitter identity) |
| Interest in pronunciation | Yes / No / Conditional distribution |
| Interest in guided practice | Yes / No / Conditional distribution |
| Preferred practice format | PDF / Web / Email / WhatsApp / Video / App / Other |
| Willingness to give feedback | Yes / No distribution |
| First-group interest | Yes / No / Already submitted first-group form distribution |
| Willingness to pay (if field present) | COP range distribution |
| Free-text recurring themes | 3–5 anonymized recurring themes |

Group free-text answers by theme. Do not store individual names, emails, or contact details in repository files.

---

## 12. First-Group Lead Quality

Use these non-sensitive quality levels when reviewing first-group form submissions. Do not expose names, emails, or contact details in the repository.

### Strong intent

- Submitted the first-group form.
- Expressed willingness to provide feedback.
- Stated a clear learning goal.
- Provided a preferred contact channel.
- Expressed founder-access interest.

### Medium intent

- Submitted the form.
- General interest with limited detail.
- Minimal or absent feedback commitment.

### Exploratory

- Minimal answers.
- No stated learning goal.
- No feedback commitment.
- Unclear intent or motivation.

---

## 13. Decision Matrix

| Area | Evidence required | Current state | Decision |
|---|---|---|---|
| Traffic | ≥ 30 unique home visitors, 14-day window | Pending manual data entry | Continue observing |
| Ebook interest | ≥ 10 unique `/ebook-gratis` visitors | Pending manual data entry | Continue observing |
| Survey participation | ≥ 3 survey submissions | Pending manual data entry | Continue observing |
| First-group interest | ≥ 1 first-group submission | Pending manual data entry | Continue observing |
| Method clarity | Survey feedback on Escríbelo como suena | Pending manual data entry | Continue observing |
| Mobile usability | No mobile layout complaints; mobile share observed | Pending manual data entry | Continue observing |
| Legal-safe delivery | No rights complaints received | No complaints reported | No action needed |
| Email follow-up readiness | Email provider selected; consent approach confirmed | Pending provider decision | Continue observing |
| Exact download instrumentation | Pro plan or alternative provider | Unavailable on current Hobby plan | Evaluate after baseline |

---

## 14. Current Decision

```text
Decision: CONTINUE OBSERVING

Reason:
Analytics and forms are operational, but there is not yet a verified
observation window or enough manually supplied production data to
establish a trustworthy baseline.
```

Do not interpret code integration or deployment success as evidence of user demand.

---

## 15. Seven-Day Review Procedure

1. Choose a fixed observation start date — the first full calendar day after the analytics dashboard is confirmed active in Vercel.
2. Record all production promotion dates during the window (YouTube publication, WhatsApp share, Instagram post, etc.).
3. Avoid opening the production site for testing during the window. Use local or preview deployments instead.
4. After 7 complete days, open the Vercel Analytics dashboard and record unique visitors and page views for `/` and `/ebook-gratis`.
5. Open the Tally dashboard and record the total survey and first-group submission counts.
6. Enter the verified values in the baseline table in Section 4.
7. Calculate the ebook-page visit rate and directional survey conversion using the formulas in Section 6.
8. Review Tally survey responses: group free-text answers into recurring themes using the categories in Section 11.
9. Classify first-group submissions using the intent levels in Section 12.
10. Decide: continue observing, increase distribution, or recruit a first pilot group.

---

## 16. Fourteen-Day Decision Review

After 14 complete days, review all of the following and update the baseline table:

- Total traffic volume and trend (day-by-day if Vercel provides it).
- Traffic source quality (referrer channels, direct vs. social vs. YouTube).
- Ebook-page visit rate vs. early-signal threshold (10 unique visitors).
- Survey response volume vs. baseline threshold (10 submissions).
- First-group interest volume vs. threshold (3 submissions).
- Mobile share of traffic and any reported layout issues.
- Recurring pronunciation or listening pain points from survey.
- Most requested songs or artists.
- Feedback on the Escríbelo como suena method.
- Whether email automation is justified by submission volume and survey consent rates.
- Whether exact download tracking is worth implementing (Vercel Pro decision).
- Whether the evidence is sufficient to recruit the first guided practice group.

---

## 17. Metrics Reporting Template

Use this template when recording a completed observation window. Enter only verified values.

```text
Observation window:         [start date] — [end date] ([N] complete days)
Promotion channels:         [list all known channels and dates]
Home unique visitors:       [value or Pending manual data entry]
Ebook-page unique visitors: [value or Pending manual data entry]
Ebook-page visit rate:      [value% or Not calculable]
Survey submissions:         [value or Pending manual data entry]
Survey conversion:          [value% or Not calculable — directional]
First-group submissions:    [value or Pending manual data entry]
First-group interest rate:  [value% or Not calculable — directional]
Top learning difficulty:    [anonymized theme or Pending manual data entry]
Top requested song/artist:  [anonymized or Pending manual data entry]
Most repeated free-text:    [anonymized theme or Pending manual data entry]
Known data-quality issues:  [list or None]
Decision:                   [INSUFFICIENT DATA / EARLY SIGNAL / BASELINE ESTABLISHED]
Next action:                [Continue observing / Increase distribution / Recruit pilot group / Other]
```

---

## 18. Privacy Rules

- Do not store respondent names in repository documents.
- Do not store email addresses in repository documents.
- Do not copy full Tally form exports into Git.
- Do not include IP addresses or device identifiers.
- Do not include free-text answers that could identify a specific person.
- Use only aggregated counts and anonymized recurring themes.
- Restrict raw Tally form access to the project owner.
- Delete unnecessary export files after analysis.
- Review privacy implications before adding another analytics or email provider.

Vercel Web Analytics is privacy-conscious by design and does not identify individual users. This does not constitute formal legal compliance certification.

Colombian data-privacy obligations (Ley 1581 de 2012 and related regulation) apply to personal data collected via Tally forms. The project owner is responsible for form data handling, consent, and deletion rights.

---

## 19. Remaining Instrumentation Gaps

These gaps are documented, not blocking. Prioritize only after baseline traffic exists.

| Gap | Current status | When to address |
|---|---|---|
| Exact PDF download clicks | Unavailable — Hobby plan | After baseline; evaluate Vercel Pro vs. alternative |
| Open-in-browser clicks | Unavailable | Same as above |
| Survey CTA click attribution | Unavailable — no custom events | After baseline |
| First-group CTA click attribution | Unavailable — no custom events | After baseline |
| Cross-device user attribution | Unavailable — privacy by design | Accept as a permanent limitation |
| Email funnel metrics | Unavailable — no email provider | After email provider is selected |
| PDF engagement (scroll depth, time-on-page) | Unavailable | After first MVP; not needed for Phase 0 |
| Returning-visitor identification | Vercel approximation only | Accept current level for Phase 0 |

---

## 20. Next Recommended Action

No verified baseline data exists. Proceed in this order:

1. Merge and deploy the analytics branch (`feat/phase-0-download-analytics`).
2. Open the Vercel project → **Analytics** → **Enable** (manual step by the project owner).
3. Verify that page views for `/` and `/ebook-gratis` appear in the dashboard after a test visit.
4. Choose an observation start date and record it.
5. Distribute to the existing audience (YouTube video, WhatsApp, Instagram, or other channels).
6. Avoid unnecessary production testing during the 7-day window.
7. After 7 complete days, collect Vercel and Tally values and complete Section 4 (manual baseline table).
8. After 14 complete days, run the full decision review in Section 16.
9. Do not add another analytics provider before baseline data exists.
10. Do not recommend MVP progression based solely on page views.
