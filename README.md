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
- Value proposition.
- Social problem.
- Escríbelo como suena method explanation.
- Free ebook lead magnet CTA.
- Founder access CTA.
- Waitlist and survey CTA placeholder.
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
