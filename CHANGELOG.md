# Changelog

All notable changes to Sing Pronunce Repeat / English with Lyrics will be documented in this file.

## [Unreleased]

### Added

- [2026-08-06] Recorded PASS for MailerLite rights-request provider operations QA using one isolated Preview-only manual test contact: no group assignment, zero emails sent, provider consultation, transient JSON export without retention, non-personal correction, manual unsubscribe, GDPR Forget with provider deletion within 30 days, and subsequent zero-result search were verified. No public form, campaign, email, automation, lead-capture flow, or Production resource was activated or changed; Production consent linking, group/form, lead capture, Email 1, delivery, automation, rollout, and indexing remain pending or inactive, while direct PDF delivery remains active.

- [2026-08-03] Recorded project-owner approval of the canonical Production legal publication after the project owner reviewed `/privacidad` and `/tratamiento-de-datos` directly against `https://singpronuncerepeat.com`: both routes passed desktop and 390 px visual review with no horizontal overflow, approved-mode content, structurally populated responsible-party sections, completed professional and provider review statements, no draft or pending notices, no certification or guaranteed-compliance claim, retained `noindex, nofollow` and no personal value in metadata or Open Graph; the pre-existing absence of a reverse `/tratamiento-de-datos` to `/privacidad` link was approved as expected behavior and not a blocker; the `/ebook-gratis` privacy link, mobile containment and the `/gracias` regression passed with no form submitted, no lead created and no email sent; the project-owner canonical Production legal review and the final Production legal-publication acceptance gate now both pass and the Production legal policies are LIVE / ACCEPTED, while passing this gate does not activate lead capture, consent collection, email delivery, Email 1, MailerLite automation or the commercial funnel and does not constitute certification or guaranteed compliance; rollback remains PREPARED / NOT EXECUTED and the Production indexing decision, final consent linking, rights-request provider operations QA and controlled rollout remain pending with lead capture, Email 1, email delivery and automation still inactive and direct PDF delivery still active.
- [2026-08-03] Published the approved legal policies on the canonical Production origin by configuring ten server-only `LEGAL_*` variables for the Production scope only and redeploying the merged `main` state, then passed canonical Production smoke QA: `/privacidad` and `/tratamiento-de-datos` return HTTP 200 in approved mode with a structurally populated responsible-party section, valid effective and last-updated dates, completed professional Colombian and provider contractual/DPA review statements, no draft or pending notices, no certification or guaranteed-compliance claim, no personal value in metadata or Open Graph, no raw environment name or placeholder token, retained `noindex, nofollow`, and clean desktop and 390 px containment with no horizontal overflow; the ebook and thank-you regression passed with the `/ebook-gratis` privacy link resolving to `/privacidad`, the application form absent and the Production-served PDF hash unchanged; no environment value, responsible-party value, ephemeral deployment URL, screenshot, token or provider identifier was stored in the repository; rollback remains prepared and not executed, legal publication does not activate the funnel and does not constitute certification or guaranteed compliance, lead capture, Email 1, email delivery and automation remain inactive with direct PDF delivery active, and the project-owner canonical Production legal review, final acceptance gate, indexing decision, consent linking, rights-request operations QA and controlled rollout remain pending.
- [2026-08-02] Recorded project-owner approval of the `approved`-mode legal rendering on the branch-specific protected Preview after `/privacidad` and `/tratamiento-de-datos` each returned HTTP 200 and passed desktop and 390 px review with no horizontal overflow, approved-mode content, robots and metadata-privacy checks, native mailto/telephone/internal policy links, the `/ebook-gratis` privacy link to `/privacidad` and the `/gracias` regression; the approved-mode Preview readiness gate now passes and PR #63 is approved for merge, while Production environment configuration, legal publication, indexing decision, final consent linking, rights-request provider operations QA and controlled rollout remain pending and lead capture, Email 1, email delivery and automation remain inactive with direct PDF delivery active.
- [2026-08-02] Prepared state-aware `approved` rendering for both legal routes, removed stale draft and pending-review assertions from that mode, added the application privacy link beside the controlled form context, and passed synthetic pending/draft/approved local QA while keeping Production publication, indexing, MailerLite consent linking, rights operations, lead capture, Email 1 and automation pending or inactive.
- [2026-08-02] Verified the live 32-page ebook through the canonical Production routes, matching the candidate, repository and served PDF byte-for-byte; passed the 32-page A5, exact 16-annotation, root-domain canonical-link and 15-case embedded-QR smoke checks, verified rollback without executing it, and completed the mandatory improved-ebook direct-delivery gate while keeping lead capture, Email 1, automation and the full commercial funnel inactive.
- [2026-08-02] Recorded project-owner approval of the staged 32-page ebook Preview after desktop and 390 px `/ebook-gratis`, `/gracias`, and browser-open checks passed with no horizontal overflow; the public replacement Preview gate now passes and the repository replacement is approved for merge, while Production deployment and canonical-domain smoke QA remain unstarted.
- [2026-08-02] Staged the approved 32-page ebook at the unchanged public filename, updated active page-count and approximate-size copy, passed source-to-public integrity plus deployed Preview page, download, browser-open, PDF, annotation and embedded-QR QA, and prepared rollback; project-owner Preview review, Production deployment and post-merge Production smoke QA remain pending.
- [2026-08-02] Recorded project-owner approval of the 32-page production-PDF candidate after visual review of all pages and manual review of all five embedded QR codes with no unexpected redirects; the production-PDF gate now passes, while public replacement and deployed delivery QA remain unstarted.
- [2026-08-02] Generated the metadata-complete 32-page A5 production-PDF candidate and completed agent structural, visual, text, exact 16-link and five-code embedded-QR QA; project-owner PDF and embedded-QR review remain pending, while the public download and Production delivery remain unchanged.
- [2026-08-02] Recorded project-owner approval of the corrected full 32-page ebook design after passing the A5 and 390 px visual re-reviews; the full-design gate now passes, production PDF generation is next and unstarted, the public downloadable PDF is unchanged, and Production replacement remains blocked.
- Corrected the full ebook’s mobile review treatments so all natural meanings remain visible at 390 px, and balanced the page-22 A5 heading following the initial full-design visual review; project-owner re-review remains pending, with production PDF generation and Production unchanged.
- Implemented the complete approved 32-page ebook HTML/CSS design using the project-owner-approved visual prototype, exact learner copy, verified lesson and official-listening links, and committed QR assets; full-design owner review remains pending, while the production PDF, public download and Production delivery remain unchanged.
- Completed the project-owner A5 and 390 px mobile visual review of the twelve-page representative improved ebook prototype, passing all visual-review areas and the design prototype gate; full 32-page implementation is next, while PDF generation and Production remain unchanged.
- Applied A5 overflow and footer-clearance corrections to the representative improved ebook prototype following the initial project-owner visual review; visual re-review remains pending.
- Added a twelve-page representative visual prototype for the approved improved ebook, covering the principal page families, verified link and QR treatments, mobile behavior and A5 print structure; project-owner visual review remains pending, with the full 32-page design, PDF and Production unchanged.
- Completed the calibrated two-device manual scan of all five ebook QR assets at 30 mm and 24 mm, passing 20 of 20 checks with correct destinations and no unexpected redirects based on the project-owner report; the link/QR gate now passes and design implementation is next.
- Updated the three song QR destinations to the matching Sing Pronunce Repeat educational lessons while retaining the original official videos as secondary listening references.
- Verified three official song sources, the first-group continuation destination, learner survey, canonical domain and privacy route; omitted the advanced waitlist and optional channel link; generated five deterministic QR SVG assets with a 45-case programmatic decode pass, with no design, PDF or Production change.
- Corrected the qualified-pronunciation evidence record, documented the partial secondary-source limitation, removed a stale synchronization status, and restored the pre-review versus approved bridge audit trail without changing learner-facing content or the pronunciation gate decision.
- Completed the privacy-safe external pronunciation review, applied five approved bridge corrections and two resolved practice caveats, synchronized the pronunciation standard and improved 32-page source, and passed the pronunciation gate; PDF and Production remain unchanged.
- Added an independent Claude second-opinion pronunciation review covering all fourteen global conventions and all nine practices, recorded blind before reading the earlier AI pre-review and compared against it afterwards, without changing any pronunciation bridge, learner-facing note, ebook copy, PDF or Production configuration.
- Clarified the ATY-01 voiced-consonant review question, defined PASS WITH CAVEAT disposition requirements, and distinguished qualified-review approval from publication authorization, without changing any pronunciation bridge or learner-facing content.
- Added the qualified pronunciation reviewer packet with privacy-safe reviewer metadata, evidence requirements, global-convention fields and nine isolated practices initialized as `NOT REVIEWED`.
- Added an AI-assisted, non-authoritative pronunciation pre-review audit covering global consistency, high-risk sound categories, nine-practice triage, mandatory reviewer questions and non-approved candidate directions.
- Added the qualified-review readiness record and pronunciation-gate requirements; reviewer assignment and decision remain pending, and no pronunciation bridge, learner copy, PDF or Production setting changed.
- Addressed the initial project-owner copy review of the improved 32-page ebook draft: added a learner-facing difficult-sound legend on the method page, clarified the accent rule for multisyllables and monosyllables, replaced the day-three recall with a non-reconstruction activity, added confidence-scale legends to the second and third song-completion pages, and expanded the rights note to explicitly exclude complete translations — with no change to any approved fragment and no PDF or Production change.
- Added a single `Escríbelo como suena` pronunciation standard that normalizes the nine approved practice bridges (notation, stress, soft-air `h`, voiced/voiceless `th`, final consonants and temporary cluster support) without changing any approved English fragment.
- Added an improved 32-page ebook content source drafting all seven new pages and updating existing pages, preserving the nine approved fragments, correcting the known source typo in the new source only, and using internal placeholders instead of raw destinations, while leaving the current 21-page source and PDF unchanged.
- Added a copy and pronunciation readiness record documenting 32-page coverage, nine-practice preservation, pronunciation normalization, copyright safeguards and the remaining owner-approval, qualified-pronunciation-review, link-verification, design and PDF-generation gates.
- Approved the revised 32-page ebook architecture after project-owner review of the initial 30-page proposal returned CHANGES REQUESTED, implementing the separation of brand mission, future-product positioning and survey into three distinct pages, strengthening the expression-review contracts, and correcting the 30-page QA reference to 32 pages, while leaving the PDF, its sources and all Production configuration unchanged.
- Refined the proposed ebook improvement architecture from 30 to 32 pages after project-owner review, separating the brand mission, future-product positioning and survey into three distinct pages and strengthening the expression-review contracts on the completion and consolidated-review pages, while leaving the PDF, its sources and all Production configuration unchanged.
- Added a complete audit of the current 21-page ebook and a proposed 30-page improvement architecture, while leaving the PDF, its sources and all Production configuration unchanged.
- Added the Phase 0 professional legal-review brief, numbered counsel question list and handoff-readiness checklist without activating Production legal publication, email or lead capture.
- Added server-only legal-owner configuration with explicit pending and draft publication modes, expanded the privacy and data-treatment routes, and documented the rights-request workflow and provider inventory while keeping Production email and lead capture inactive.
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
- Approved `https://singpronuncerepeat.com` as the production origin, restored the absolute `/ebook-gratis` backlink inside the public PDF, and validated seven intended HTTPS link annotations with no localhost or preview URLs.
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

- Recorded final project-owner approval of the improved 32-page ebook copy after all requested corrections passed review, while keeping qualified pronunciation review, design, PDF generation and Production replacement blocked.
- Recorded completion of the professional Colombian legal and provider contractual/DPA reviews with no legal-content or provider-related changes requested, while keeping Production legal publication, consent linking, email and lead capture pending or inactive.
- Completed final protected Preview legal-page QA with responsive, accessibility, robots and metadata privacy checks, and recorded owner rendered-copy approval while keeping Production legal publication and email activation pending.
- Corrected the Phase 0 legal drafts with separate consultation and claim timelines, expanded data-subject rights and claim handling, request-responsibility designation, an internal policy link, and accessible telephone formatting without adding personal values.
- Regenerated and revalidated the public 21-page ebook PDF with the official `Sing Pronunce Repeat` brand and canonical `https://singpronuncerepeat.com/ebook-gratis` backlink, while preserving the existing public download path.
- Aligned public application metadata, links, legal and email documentation with the official `Sing Pronunce Repeat` brand and the canonical `https://singpronuncerepeat.com` Production origin.
- Established `https://singpronuncerepeat.com` as the canonical Production web domain, with HTTPS and a permanent `www` redirect managed through Vercel and Hostinger DNS.
- Updated README, backlog, launch, metrics, and validation docs to reflect the active `/ebook-gratis` delivery flow, validated 21-page PDF, approved production origin, and remaining analytics/email follow-up work.
- Updated all public ebook CTAs to route internally to `/ebook-gratis`, while survey and first-group actions continue to use their approved Tally destinations.
- Updated validation copy to explain that Phase 0 uses short external forms instead of local data capture.
- Aligned the Phase 0 landing visual system with the official brand color palette.
- Polished the real logo integration with clearer desktop sizing, a cleaner sticky header, and softer validation copy.
- Replaced the Phase 0 landing logo placeholder with the real Sing Pronunce Repeat / English with Lyrics logo.
- Updated app metadata to use the real favicon assets.
- Updated the landing waitlist area to point to validation placeholders for ebook interest, survey, and first group interest.
- Updated launch, metrics, and backlog docs to reference Phase 0 validation assets.
- Aligned the Phase 0 landing visual identity with the channel-inspired dark music style, neon accents, logo placeholder, learning-mode badges, and karaoke-style micro-lesson card.
- Aligned public brand copy around Sing Pronunce Repeat as the main brand, English with Lyrics as the secondary brand, and Escríbelo como suena as the method.
- Added warm Phase 0 landing redesign with ebook-first CTA, brand-led copy, micro-lesson demo, method section, polished waitlist placeholder, and legal-safe positioning.

## [2026-06-09] Channel Visual Identity Alignment

### Changed

- Updated the Phase 0 landing UI to use a dark music-style background with pink, purple, blue, and cream accents.
- Added a logo placeholder, visual learning-mode badges, and karaoke-inspired micro-lesson treatment.
- Refreshed ebook, form, footer, and legal-note styling to better match the channel identity.

## [2026-06-09] Public Brand Copy Alignment

### Changed

- Removed personal-name references from public-facing landing copy.
- Updated docs to require Sing Pronunce Repeat as the main public brand, English with Lyrics as the secondary brand, and Escríbelo como suena as the method.

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
