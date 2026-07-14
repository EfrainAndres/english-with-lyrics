# Sing Pronounce Repeat / English with Lyrics

Sing Pronounce Repeat is a web-first educational product connected to the English with Lyrics channel brand. It helps Spanish speakers learn English through songs, easy pronunciation, useful phrases, natural Spanish explanations, quizzes, and micro-lessons.

The core method is **Escríbelo como suena**: English pronunciation written in a simple Spanish-friendly way, without IPA symbols.

## Brand Rules

- Main public brand: Sing Pronounce Repeat.
- Secondary brand: English with Lyrics.
- Core method: Escríbelo como suena.
- Do not mention any personal creator name in public-facing UI copy.

## Brand Assets

Logo and favicon files live in `public/brand/`. Usage rules are documented in `docs/design/BRAND_ASSETS.md`.

## Current Phase

Phase 0 validation foundation:

- Responsive landing page.
- Ebook waiting page at `/ebook-gratis`.
- Value proposition.
- Social problem.
- Escríbelo como suena method explanation.
- Free ebook lead magnet CTA.
- External Tally form links for ebook interest, survey, and first group interest.
- Founder access CTA.
- Waitlist and survey CTA cards.
- Legal-safe note about short educational fragments.

This phase does not include Supabase, auth, payments, AI, mobile app work, or full lyrics.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Useful local routes:

- `/`
- `/ebook-gratis` — ebook download page (download CTA active; PDF at `/downloads/guia-gratis-sing-pronounce-repeat.pdf`)

## Free ebook PDF

Public file: `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`

Local URL: `http://localhost:3000/downloads/guia-gratis-sing-pronounce-repeat.pdf`

To verify the file after cloning:

```bash
shasum -a 256 public/downloads/guia-gratis-sing-pronounce-repeat.pdf
# Expected: ebd1745feba55b15cf1d698e890c1ac26b01ffb2ba6c1aac38f1e428a43daf19
```

Email automation is not configured. Direct web download through `/ebook-gratis` is the current delivery method.

## MailerLite provider setup

MailerLite is the proposed Phase 0 email provider for the future soft-gated lead funnel, but Production activation is blocked.

- Manual setup checklist: `docs/integrations/PHASE_0_MAILERLITE_MANUAL_CHECKLIST.md`
- Setup and readiness docs: `docs/integrations/PHASE_0_MAILERLITE_SETUP.md` and `docs/validation/PHASE_0_EMAIL_PROVIDER_READINESS.md`
- Preview and Production identifiers must remain isolated.
- No real secrets, API keys, group IDs, or automation IDs belong in Git.
- Current direct ebook delivery remains active until the replacement funnel passes QA and approval.

## Environment Variables

Phase 0 form links are configured with public environment variables. Copy `.env.example` to `.env.local` for local testing:

```bash
NEXT_PUBLIC_EBOOK_FORM_URL=https://tally.so/r/q4z8l9
NEXT_PUBLIC_SURVEY_FORM_URL=https://tally.so/r/eqzgbe
NEXT_PUBLIC_WAITLIST_FORM_URL=https://tally.so/r/q4z8l9
NEXT_PUBLIC_FIRST_GROUP_FORM_URL=https://tally.so/r/D4a6NE
```

Do not commit `.env.local`; it is ignored by git.

When these variables are missing, CTA links fall back to local anchors so the page can still be checked without external forms. When the values start with `https://`, form links open in a new tab with safe external-link attributes.

Future provider-hosted form placeholders for the lead funnel also live in `.env.example`:

```bash
NEXT_PUBLIC_MAILERLITE_PREVIEW_FORM_URL=
NEXT_PUBLIC_MAILERLITE_PRODUCTION_FORM_URL=
NEXT_PUBLIC_PRIVACY_POLICY_URL=
```

Leave them empty until Preview-safe provider forms and approved public privacy routes exist.

Lead-capture form foundation behavior:

- Local submission is disabled.
- Preview requires `NEXT_PUBLIC_MAILERLITE_PREVIEW_FORM_URL`.
- Production form remains inactive.
- Do not use Production form values in Preview.
- Current Production direct delivery remains active.

Thank-you page behavior:

- `/gracias` exists.
- The route is public but unpromoted.
- The route is `noindex`.
- The route contains no personal data.
- Preview MailerLite can later redirect to `/gracias?source=ebook`.
- Production lead capture remains inactive.
- Direct Production ebook delivery remains active.

Email 1 delivery package:

- Source: `docs/email/PHASE_0_EBOOK_DELIVERY_EMAIL.md`
- Sequence outline: `docs/email/PHASE_0_EMAIL_SEQUENCE.md`
- Preview automation is test-only.
- The email must link to `/gracias?source=email`, not attach the PDF.
- Production sending remains inactive.
- Do not commit MailerLite IDs, contacts, or screenshots.

## Validation Commands

```bash
npm run lint
npm run build
```

For local form-link testing:

1. Run without `.env.local` and confirm fallback anchors work.
2. Add `.env.local` with the Tally URLs.
3. Restart `npm run dev`.
4. Confirm the ebook, survey, and first-group CTAs open Tally forms in a new tab.

## Content And Legal Guardrails

- Do not include full lyrics from commercial songs.
- Use short educational fragments only when examples are needed.
- Do not position the product as a lyrics replacement.
- Use original pronunciation guidance and natural translation.
- Embed official YouTube videos only in later phases when needed.

## Analytics

Provider: Vercel Web Analytics (`@vercel/analytics`).

`<Analytics />` is rendered in `src/app/layout.tsx` and tracks page views on all routes automatically.

To enable the dashboard, open the Vercel project → **Analytics** → **Enable**. This is a manual step separate from the code integration.

**Current limitation:** Custom events (e.g. `ebook_download_clicked`) require the Vercel Pro plan. Exact PDF download clicks are not measured on the current Hobby plan. Use `/ebook-gratis` page views as a proxy for download intent. See `docs/validation/PHASE_0_DOWNLOAD_ANALYTICS.md`.

Production routes to verify after enabling:

- `https://english-with-lyrics.vercel.app/`
- `https://english-with-lyrics.vercel.app/ebook-gratis`

## Useful Docs

- `PROJECT_BRIEF.md`
- `ROADMAP.md`
- `BACKLOG.md`
- `CONTENT_GUIDE.md`
- `LEGAL_GUIDE.md`
- `METRICS.md`
- `LAUNCH_PLAN.md`
- `AGENTS.md`
- `docs/validation/PHASE_0_FORM_INTEGRATION.md`
- `docs/validation/PHASE_0_EBOOK_DOWNLOAD_PAGE.md`
- `docs/validation/PHASE_0_VALIDATION_METRICS_BASELINE.md`
