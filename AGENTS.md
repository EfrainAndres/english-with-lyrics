# Sing Pronounce Repeat / English with Lyrics Agent Guide

## Purpose

This file gives Codex and other coding agents the operating rules for Sing Pronounce Repeat / English with Lyrics.

## Project Status

This repository is currently documentation-only. Do not create the app until a task explicitly asks for implementation.

## Brand Rules

- Main public brand: Sing Pronounce Repeat.
- Secondary brand: English with Lyrics.
- Core method: Escríbelo como suena.
- Audience: Spanish speakers learning English.
- First product surface: Web app.

Do not mention any personal creator name in public-facing UI copy. Use brand-led wording instead.

## Current Technical Direction

When app development begins, use:

- Next.js.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.

Do not add these dependencies during documentation-only tasks.

## Scope Rules

Allowed now:

- Markdown documentation.
- Planning documents.
- Backlog refinement.
- Prompt templates.
- Research notes if requested.

Not allowed until explicitly requested:

- Next.js app scaffolding.
- Supabase.
- Authentication.
- Payment integration.
- AI features.
- Mobile app.
- Full lyrics database.

## Legal And Content Rules

- Do not include full lyrics from commercial songs.
- Use short educational fragments only.
- Do not include full translated lyrics.
- Embed official YouTube videos when needed.
- Use original Escríbelo como suena pronunciation guidance.
- Use natural translation and educational explanations.
- Make the product transformative and educational.
- Avoid presenting the platform as a lyrics replacement.

## Escríbelo Como Suena Rules

- Use Spanish-friendly pronunciation guidance.
- Do not use IPA symbols.
- Keep approximations clear and readable.
- Explain sounds that are hard for Spanish speakers.
- Encourage listening to official audio.
- Do not claim the written guide is a perfect pronunciation system.

## Git Workflow

Do not work directly on `main`.

Before changes, run:

```bash
git checkout main
git pull origin main
```

Then create a task branch. Use the `codex/` prefix for normal coding branches unless the user requests a specific branch name.

For this documentation foundation, the requested branch is:

```bash
docs/project-foundation
```

Commit messages should follow conventional commit style. The initial documentation commit is:

```bash
docs: add project foundation
```

After changes:

```bash
git status
git add <files>
git commit -m "docs: add project foundation"
git push origin <branch>
```

## Changelog Rule

Update `CHANGELOG.md` for every meaningful change.

## Agent Working Style

- Read existing docs before changing direction.
- Keep changes tightly scoped to the user's request.
- Prefer practical, future-useful documentation over abstract strategy.
- Do not introduce dependencies or generated app files unless explicitly requested.
- Call out legal uncertainty instead of pretending it is solved.
