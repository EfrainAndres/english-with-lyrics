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

## Validation Commands

```bash
npm run lint
npm run build
```

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
