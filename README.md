# Sing Pronunce Repeat / English with Lyrics

Sing Pronunce Repeat is a web-first educational product connected to the English with Lyrics channel brand. It helps Spanish speakers learn English through songs, easy pronunciation, useful phrases, natural Spanish explanations, quizzes, and micro-lessons.

The core method is **Escríbelo como suena**: English pronunciation written in a simple Spanish-friendly way, without IPA symbols.

## Brand Rules

- Main public brand: Sing Pronunce Repeat.
- Secondary brand: English with Lyrics.
- Core method: Escríbelo como suena.
- Do not mention any personal creator name in public-facing UI copy.
- Official brand alignment: COMPLETE.

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
- `/privacidad` — public privacy policy (draft/preparation state; `noindex`)
- `/tratamiento-de-datos` — public data-processing policy (draft/preparation state; `noindex`)

## Free ebook PDF

Public file: `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`

Local URL: `http://localhost:3000/downloads/guia-gratis-sing-pronounce-repeat.pdf`

To verify the file after cloning:

```bash
shasum -a 256 public/downloads/guia-gratis-sing-pronounce-repeat.pdf
# Expected: fa9801f66f1cb6b0ea4e4ea300e05e808e893993cb4d0a5fdc87bde191fb3f08
```

Email automation is not configured. Direct web download through `/ebook-gratis` is the current delivery method.

## MailerLite provider setup

MailerLite is the proposed Phase 0 email provider for the future soft-gated lead funnel, but Production activation is blocked.

- Custom production web domain: ACTIVE.
- Canonical production origin: `https://singpronuncerepeat.com`.
- `https://www.singpronuncerepeat.com` permanently redirects to `https://singpronuncerepeat.com`.
- HTTPS, Vercel Production connection, and Hostinger DNS connection are verified.
- Professional privacy mailbox: VERIFIED — `privacidad@singpronuncerepeat.com`.
- Legacy Vercel origin: NON-CANONICAL TECHNICAL FALLBACK. Public links and metadata should use the canonical custom domain.
- MailerLite sending-domain authentication and the controlled Preview workflow are verified. Production lead capture, Production Email 1, Production automation, and Production email delivery remain inactive.
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

Phase 0 legal-owner configuration is server-only and uses no `NEXT_PUBLIC_` prefix. Variable names and non-personal placeholders live in `.env.example`:

```bash
LEGAL_PUBLICATION_STATUS=pending
LEGAL_OWNER_TYPE=natural_person
LEGAL_OWNER_NAME="<configured-in-vercel>"
LEGAL_OWNER_ROLE="Responsable del proyecto Sing Pronunce Repeat"
LEGAL_OWNER_DOMICILE="<configured-in-vercel>"
LEGAL_CONTACT_ADDRESS="<configured-in-vercel>"
LEGAL_CONTACT_PHONE="<configured-in-vercel>"
LEGAL_PRIVACY_EMAIL="privacidad@singpronuncerepeat.com"
LEGAL_EFFECTIVE_DATE="2026-07-20"
LEGAL_LAST_UPDATED_DATE="2026-07-20"
```

Publication behavior is explicit:

- `pending` is the safe default when variables are absent or incomplete. It renders a neutral preparation message and no personal owner fields.
- `draft` renders the complete environment-backed legal draft with a visible owner-approval and professional-review notice. It is intended only for a protected Preview deployment.
- `approved` is supported for a later reviewed phase but is not activated here and does not enable indexing.

Real owner values must never be placed in Git, `.env.example`, screenshots, logs, tests or documentation. Configure them manually in Vercel Preview environment variables. Production remains `pending` during this phase, and any environment-variable change requires a new deployment. Both legal routes remain `noindex, nofollow` in every state. See `docs/validation/PHASE_0_LEGAL_OWNER_CONFIGURATION.md`.

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

- `https://singpronuncerepeat.com/`
- `https://singpronuncerepeat.com/ebook-gratis`

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
- `docs/legal/PHASE_0_DATA_SUBJECT_RIGHTS_WORKFLOW.md`
- `docs/legal/PHASE_0_PROVIDER_INVENTORY.md`
- `docs/validation/PHASE_0_LEGAL_OWNER_CONFIGURATION.md`
