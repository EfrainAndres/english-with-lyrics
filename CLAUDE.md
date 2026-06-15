# Claude Code Instructions for Sing Pronounce Repeat / English with Lyrics

## Canonical Sources

- `PROJECT_BRIEF.md` is the canonical product source.
- `CONTENT_GUIDE.md` and `LEGAL_GUIDE.md` are mandatory for any song, ebook, lesson, or lyric-related task.
- `ROADMAP.md`, `BACKLOG.md`, `METRICS.md`, and `LAUNCH_PLAN.md` define phase order and execution priorities.
- `CHANGELOG.md` contains implemented changes only.
- Future work belongs in `BACKLOG.md`, not the changelog.

## Project Identity

- Main public brand: Sing Pronounce Repeat.
- Secondary brand: English with Lyrics.
- Core method: Escríbelo como suena.
- Audience: Spanish speakers learning English.
- Do not mention personal names in public-facing content.

## Current Phase

- Phase 0 validation and lightweight follow-up work.
- Current product surface: web-first.
- Current direction: Next.js, TypeScript, Tailwind CSS, and Tally forms.
- Do not add Supabase, auth, payments, AI, mobile app work, or a separate backend unless explicitly approved.

## Brand And Assets

- Official palette: black `#010101`, yellow `#FEE296`, pink `#FE9CE1`, purple `#CC9DEA`.
- Brand assets live in `public/brand/`.
- Use the real logo and favicon assets already in the repo.
- Do not recolor, stretch, crop, or redraw brand assets in code.

## Editorial Rules

- Use Escríbelo como suena as a Spanish-friendly pronunciation aid only.
- Do not use IPA symbols.
- Keep pronunciation guidance clear, original, and educational.
- Encourage listening to official audio.
- Do not present pronunciation approximations as perfect or definitive.

## Legal And Copyright Rules

- Do not include full lyrics from commercial songs.
- Use short educational fragments only.
- Do not publish full translated lyrics.
- Do not position the product as a lyrics replacement.
- Use natural translation, original commentary, and short practice prompts.
- Consult the legal guide before any song, ebook, lesson, or lyric-adjacent change.

## Git Workflow

- Do not work directly on `main`.
- Start from `main`, pull latest `origin/main`, then create the requested branch.
- Use conventional commits.
- Commit only implemented changes.
- Push the branch to origin when complete.

## Small-Change Rules

- Keep changes tightly scoped to the task.
- Read only the docs and source files relevant to the current work.
- Avoid unrelated refactors.
- Prefer simple, maintainable edits over new abstractions.
- Keep token usage low by summarizing rather than re-reading everything.

## Validation

- For code changes, run the smallest relevant validation set, usually lint and build.
- For Markdown-only changes, run `git diff --check` and review `git status`.
- Verify local route behavior or responsive UI when a task changes the interface.
- Do not claim validation you did not perform.

## Required Final Report

Every completed task should report:

- Branch.
- Files created or modified.
- Summary of the change.
- Validation results.
- Git status.
- Commit hash.
- Push result.
- Any limits or blockers.
