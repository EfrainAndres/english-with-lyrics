# Changelog

All notable changes to Sing Pronounce Repeat / English with Lyrics will be documented in this file.

## [Unreleased]

### Added

- Added public Phase 0 privacy and data-processing routes with centralized legal configuration, safe incomplete-state rendering, noindex metadata, accessible footer links, Preview QA guidance, and Production lead-capture gates.
- Added the Phase 0 ebook delivery-email package, including approved Email 1 content, stable `/gracias?source=email` delivery, Preview/Production separation, four-email sequence planning, MailerLite manual configuration steps, and production-readiness gates.
- Added the environment-aware `/gracias` page with immediate ebook access, optional survey and first-group actions, privacy-safe query handling, noindex metadata, and Preview-ready MailerLite redirect support.
- Added a controlled-Preview MailerLite lead-capture component with strict Local/Preview/Production isolation, safe configuration fallbacks, provider-managed consent, and preserved direct ebook delivery in Production.
- Added the non-production MailerLite provider foundation, including capability verification, subscriber-group and field taxonomy, Preview/Production isolation, environment-variable contract, sender-domain checklist, manual setup guide, and production-readiness gates.
- Added the Phase 0 privacy and consent documentation package, including draft privacy and data-treatment policies, explicit-consent copy, data inventory and retention rules, provider due-diligence requirements, privacy decisions, implementation gates, and rights-request procedures.
- Added the Phase 0 lead-funnel architecture and decision log, defining the email-provider recommendation, explicit-consent model, post-registration `/gracias` flow, provider integration boundaries, email sequence, analytics contract, environment isolation, failure handling, and phased implementation plan.
- Added the Phase 0 validation-metrics baseline framework in `docs/validation/PHASE_0_VALIDATION_METRICS_BASELINE.md`, covering observation-window requirements, data-source inventory, funnel definitions, baseline calculations, evidence thresholds, decision matrix, survey-analysis categories, privacy rules, and next-step procedure; all metric values remain pending manual data entry and the current decision is CONTINUE OBSERVING.
- Added privacy-conscious Vercel Web Analytics page-view tracking and Phase 0 ebook-funnel documentation, while keeping exact download-click events pending because custom events are unavailable on the current hosting plan.
- Completed the Phase 0 ebook validation and delivery flow for **Aprende inglés con 3 canciones**, including the three-song content strategy, nine approved educational fragments, `Escríbelo como suena` guidance, natural meanings, original examples, exercises, reconstruction safeguards, and final learner-facing content.
- Added the reusable A5 ebook design system, production HTML/CSS, reproducible Chrome-based export tooling, metadata patching, structural PDF validation, visual QA corrections, publication-readiness review, and the final validated 21-page PDF artifact.
- Enabled direct ebook delivery through `/ebook-gratis`, added the approved public PDF at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`, aligned the home landing with the active download flow, and preserved survey and first-group actions as optional follow-ups.
- Approved `https://english-with-lyrics.vercel.app` as the production origin, restored the absolute `/ebook-gratis` backlink inside the public PDF, and validated seven intended HTTPS link annotations with no localhost or preview URLs.
- Added Phase 0 ebook delivery, publication-readiness, home-alignment, production-origin, and PDF QA documentation, while keeping download analytics and email-provider automation as pending follow-up work.
- Added repository-level Claude Code instructions in `CLAUDE.md` and coordination guidance in `AGENTS.md`.
- Added Phase 0 email delivery planning documentation for ebook delivery, follow-up emails, segmentation, privacy, and provider timing.
- Added Phase 0 Tally form link integration with environment-variable configuration and safe local anchor fallbacks.
- Added documentation for Phase 0 external form setup, local testing, recommended fields, and privacy guardrails.
- Added official brand color palette documentation for black, yellow, pink, and purple usage.
- Added real brand logo and favicon assets under `public/brand/`.
- Added brand asset usage documentation for logos, favicons, and future social images.
- Added Phase 0 validation assets for survey questions, waitlist/social CTA copy, and the free ebook lead magnet plan.
- Documented how to interpret survey responses, track ebook interest, and evaluate first group demand without adding real integrations.
- Added Phase 0 landing UX audit documentation with redesign direction, copy recommendations, accessibility notes, and implementation plan.
- Added Phase 0 validation foundation with a Next.js App Router app, TypeScript, Tailwind CSS, and responsive landing page.
- Added setup and validation instructions in `README.md`.
- Added initial project documentation foundation for English with Lyrics.
- Defined project vision, target audience, social problem, and value proposition.
- Documented product phases from validation through future app and AI possibilities.
- Added legal and content rules for educational use of short song fragments.
- Added Escríbelo como suena content guidance.
- Added validation metrics, launch plan, backlog, and Codex collaboration rules.

### Changed

- Updated README, backlog, launch, metrics, and validation docs to reflect the active `/ebook-gratis` delivery flow, validated 21-page PDF, approved production origin, and remaining analytics/email follow-up work.
- Updated all public ebook CTAs to route internally to `/ebook-gratis`, while survey and first-group actions continue to use their approved Tally destinations.
- Updated validation copy to explain that Phase 0 uses short external forms instead of local data capture.
- Aligned the Phase 0 landing visual system with the official brand color palette.
- Polished the real logo integration with clearer desktop sizing, a cleaner sticky header, and softer validation copy.
- Replaced the Phase 0 landing logo placeholder with the real Sing Pronounce Repeat / English with Lyrics logo.
- Updated app metadata to use the real favicon assets.
- Updated the landing waitlist area to point to validation placeholders for ebook interest, survey, and first group interest.
- Updated launch, metrics, and backlog docs to reference Phase 0 validation assets.
- Aligned the Phase 0 landing visual identity with the channel-inspired dark music style, neon accents, logo placeholder, learning-mode badges, and karaoke-style micro-lesson card.
- Aligned public brand copy around Sing Pronounce Repeat as the main brand, English with Lyrics as the secondary brand, and Escríbelo como suena as the method.
- Added warm Phase 0 landing redesign with ebook-first CTA, brand-led copy, micro-lesson demo, method section, polished waitlist placeholder, and legal-safe positioning.

## [2026-06-09] Channel Visual Identity Alignment

### Changed

- Updated the Phase 0 landing UI to use a dark music-style background with pink, purple, blue, and cream accents.
- Added a logo placeholder, visual learning-mode badges, and karaoke-inspired micro-lesson treatment.
- Refreshed ebook, form, footer, and legal-note styling to better match the channel identity.

## [2026-06-09] Public Brand Copy Alignment

### Changed

- Removed personal-name references from public-facing landing copy.
- Updated docs to require Sing Pronounce Repeat as the main public brand, English with Lyrics as the secondary brand, and Escríbelo como suena as the method.

## [2026-06-09] Phase 0 Warm Landing Redesign

### Changed

- Redesigned the Phase 0 landing page to feel warmer, more musical, brand-led, and mobile-first.
- Made the free ebook the primary CTA and reframed founder access as the first group.
- Added a legal-safe micro-lesson demo using a short educational example.

## [2026-06-09] Phase 0 Landing UX Audit

### Added

- Created `docs/design/PHASE_0_LANDING_UX_AUDIT.md` with a documentation-only redesign proposal for the Phase 0 landing page.

## [2026-06-09] Phase 0 Validation Foundation

### Added

- Created the initial Next.js App Router foundation with TypeScript and Tailwind CSS.
- Built a responsive landing page for Phase 0 validation.
- Added landing sections for the value proposition, social problem, Escríbelo como suena method, how it works, ebook lead magnet, founder access, waitlist/survey CTA, and legal-safe content note.
- Added `README.md` with setup, run, and validation commands.

## [2026-06-09] Documentation Foundation

### Added

- Created `PROJECT_BRIEF.md`, `ROADMAP.md`, `BACKLOG.md`, `CONTENT_GUIDE.md`, `LEGAL_GUIDE.md`, `METRICS.md`, `LAUNCH_PLAN.md`, `AGENTS.md`, and `docs/prompts/README.md`.
