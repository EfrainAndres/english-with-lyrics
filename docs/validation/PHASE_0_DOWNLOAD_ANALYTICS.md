# Phase 0 Download Analytics

## 1. Purpose

This document establishes trustworthy baseline analytics for the Phase 0 ebook funnel. The goal is to measure real acquisition behavior honestly — distinguishing what is currently measurable from what requires a future plan upgrade or provider change.

---

## 2. Current Platform

| Field | Value |
|---|---|
| Provider | Vercel Web Analytics |
| Hosting plan | Hobby |
| Production origin | `https://english-with-lyrics.vercel.app` |
| Implementation | `<Analytics />` rendered in `src/app/layout.tsx` via `@vercel/analytics/next` |
| Package | `@vercel/analytics` ^2.0.1 |
| Implementation status | Complete — code integrated; dashboard activation pending |
| Custom-event availability | **Not available on the current Hobby plan** |

Dashboard activation is a separate manual step in the Vercel project settings and is not handled by code. See Section 9.

---

## 3. Measurable Metrics

The following are available through Vercel Web Analytics on the current plan:

- Home page (`/`) views and unique visitors.
- Ebook page (`/ebook-gratis`) views and unique visitors.
- Traffic referrers (source channel, referring domain).
- Device type aggregates (desktop, mobile, tablet).
- Geographic aggregates (country, region) at privacy-conscious resolution.
- Survey submissions via Tally's own reporting (`https://tally.so/r/eqzgbe`).
- First-group submissions via Tally's own reporting (`https://tally.so/r/D4a6NE`).

---

## 4. Metrics Not Currently Measurable

| Metric | Reason |
|---|---|
| Exact PDF download clicks | Hobby plan does not support custom events; download is a direct anchor |
| Completed browser downloads | No browser-completion signal is available without a custom endpoint |
| Time spent reading the PDF | Out of scope for web analytics; would require reader-side tooling |
| Whether a user finished all 21 pages | Same — requires reader-side instrumentation |
| Which specific PDF link was clicked (YouTube, Tally, backlink) | Requires custom events or PDF reader integration |
| Open-in-browser vs. download distinction | Same — both use direct anchors |
| Cross-device user identity | Vercel Web Analytics is privacy-conscious and does not track identity |

Use **ebook page visits** as the proxy for download intent, not as a confirmed download count.

---

## 5. Funnel Model

| Stage | Route / Source | Metric | Current availability |
|---|---|---|---|
| Landing | `/` | Page views, unique visitors, referrers | Available — Vercel Web Analytics |
| Ebook page | `/ebook-gratis` | Page views, unique visitors | Available — Vercel Web Analytics |
| PDF download intent | `/ebook-gratis` CTA click → `/downloads/...` | Not directly measured | Unavailable on Hobby — use ebook-page visits as proxy |
| Survey participation | `https://tally.so/r/eqzgbe` | Submissions | Available — Tally dashboard |
| First-group interest | `https://tally.so/r/D4a6NE` | Submissions | Available — Tally dashboard |

---

## 6. Baseline Calculations

These formulas are directional. Traffic sources and attribution differences mean they are approximations, not exact conversion rates. Do not record actual percentages until real data exists.

```text
Ebook-page visit rate =
  unique /ebook-gratis visitors
  ÷ unique home visitors
  × 100
```

```text
Survey conversion from ebook page =
  Tally survey submissions
  ÷ unique /ebook-gratis visitors
  × 100
```

```text
First-group interest rate =
  Tally first-group submissions
  ÷ unique /ebook-gratis visitors
  × 100
```

---

## 7. Exact-Download Measurement Options

### Option A — Vercel Pro custom events

Upgrade the current Hobby plan to Pro.

**Pros:**
- Native integration with existing analytics.
- Minimal additional code — call `track("ebook_download_clicked")` in the download CTA.
- Event visible in the same Vercel dashboard.
- No third-party dependency.

**Cons:**
- Paid plan required.
- Measures click intent, not guaranteed download completion (browser may cancel).
- Cost should be evaluated against current traffic volume.

### Option B — Privacy-conscious third-party analytics

Evaluate later. Do not select or integrate a provider in this branch.

Considerations when evaluating:
- Cost relative to traffic volume.
- Consent requirements under Colombian data privacy law (Ley 1581 de 2012).
- Data retention and deletion policy.
- Cookie or fingerprinting behavior.
- Setup complexity and developer maintenance.
- Custom-event support without plan gating.
- Impact on page-load performance.

### Option C — First-party download endpoint

Possible future architecture. Do not implement now.

This would require:
- A server-side route (`/api/download` or similar) that logs the event before redirecting.
- Persistent storage or an external event sink (database, log service, analytics API).
- Bot filtering and duplicate-request handling.
- Defined privacy and data-retention rules before deployment.
- Privacy policy update.

---

## 8. Privacy Principles

This implementation:

- Collects no names, email addresses, or Tally answers.
- Collects no pronunciation attempts or song preferences.
- Adds no persistent user identifiers beyond what Vercel Web Analytics applies server-side in aggregate.
- Does no browser fingerprinting.
- Does not sell or share user data for advertising.
- Does not block ebook access when analytics is blocked by a browser extension or privacy tool.
- Does not set cookies in application code.

Future provider changes require a privacy review before integration. Vercel's own data handling policies apply to all page-view data collected through `@vercel/analytics`.

---

## 9. Dashboard Activation

Code integration (`<Analytics />` rendered in layout) and dashboard activation are separate steps.

To enable the dashboard:

1. Go to the Vercel project dashboard.
2. Open **Analytics**.
3. Click **Enable**.

This step is performed by the project owner in the Vercel UI. It is not handled by code. Do not assume the dashboard is active until the owner confirms it.

---

## 10. Production Verification

These checks require the branch to be deployed and the dashboard to be enabled.

| Check | Status |
|---|---|
| Production deployment with `<Analytics />` completed | Pending — deploy branch |
| Analytics script request visible in browser network tools | Pending — verify after deploy |
| Home page view appears in Vercel Analytics dashboard | Pending — verify after dashboard enabled and data processed |
| `/ebook-gratis` page view appears in Vercel Analytics | Pending |
| No JavaScript console error from analytics script | Pending |
| Download still works when analytics is blocked | Pending — test with uBlock Origin or similar |
| Tally survey link still opens correctly | Pending |
| Tally first-group link still opens correctly | Pending |

---

## 11. Event-Name Reservation

The following event names are reserved for future use when a custom-event-capable plan or provider is available:

| Event name | Intended trigger |
|---|---|
| `ebook_download_clicked` | User clicks the "Descargar guía gratis" download CTA |
| `ebook_opened_in_browser` | User clicks the "Abrir en el navegador" secondary CTA |
| `ebook_survey_clicked` | User clicks any survey CTA on the ebook page |
| `ebook_first_group_clicked` | User clicks the first-group CTA on the ebook page |

**Reserved only — not emitted on the current Hobby implementation.**

No `track()` calls exist in application code.

---

## 12. Go/No-Go Result

**Result: CONDITIONAL PASS**

**Reason:**
- Baseline page-view analytics implemented in code (`<Analytics />` added to root layout).
- Exact PDF download clicks remain unavailable on the current Hobby plan.
- Production dashboard activation and deployed verification remain pending.
- Analytics does not block or alter the download experience.
