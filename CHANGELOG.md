# Changelog

All notable changes to Sing Pronounce Repeat / English with Lyrics will be documented in this file.

## [Unreleased]

### Added

- Added the reusable Phase 0 ebook PDF design specification and static HTML/CSS prototype, including mobile-first A5 page templates, 15 reusable components (cover, song divider, learning cards, pronunciation treatment, vocabulary, exercises, challenge, self-assessment, CTA, rights note), design tokens, print-export styles, accessibility notes, and a 14–16 page count recommendation. Prototype at `docs/design/prototypes/`; specification at `docs/design/PHASE_0_EBOOK_PDF_TEMPLATE.md`.
- Added the clean Phase 0 ebook final-content source at `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md` with standardized learner-facing micro-lessons, verified official YouTube links for all three songs, a three-day practice challenge, self-assessment, CTAs, rights guidance, design handoff markers, and explicit publication blockers. PDF design, mobile QA, final legal-safe review, upload, and delivery remain pending.
- Completed the nine-fragment educational review for A Thousand Years, Still Loving You, and The Reason, including Escríbelo como suena guidance, natural meanings, original examples and exercises, reconstruction safeguards, and cross-song consistency checks. Project-owner adjacency and reconstruction verification complete for all three songs.
- Added the controlled editorial draft at `docs/content/PHASE_0_EBOOK_DRAFT.md` and the nine-slot fragment-review framework at `docs/content/PHASE_0_EBOOK_FRAGMENT_REVIEW.md`.
- Selected A Thousand Years, Still Loving You, and The Reason as the provisional three-song set, with documented backups and evidence gaps. See `docs/content/PHASE_0_EBOOK_SONG_SELECTION.md`.
- Added the Phase 0 ebook content strategy and benchmark at `docs/content/PHASE_0_EBOOK_CONTENT_PLAN.md`, including positioning, audience, mobile-first structure, song-selection criteria, legal-safe rules, production workflow, and design handoff requirements.
- Added repository-level Claude Code instructions in `CLAUDE.md` and coordination guidance in `AGENTS.md`.
- Added `/ebook-gratis` as a Phase 0 ebook waiting page with Tally CTAs, guide preview content, path options, and a legal-safe note.
- Added Phase 0 ebook download page documentation for current waiting-page behavior and future PDF delivery.
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

- Updated README, backlog, launch, and metrics docs to include the `/ebook-gratis` waiting/download route.
- Updated backlog, launch, and metrics docs to prefer a future `/ebook-gratis` download page over default PDF email attachments.
- Updated landing CTAs to open ebook, survey, and first-group Tally forms when configured.
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
