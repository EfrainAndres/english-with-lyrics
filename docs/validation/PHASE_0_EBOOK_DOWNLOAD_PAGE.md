# Phase 0 Ebook Download Page

## Purpose

`/ebook-gratis` is the public delivery-prep page for the free ebook lead magnet.

During Phase 0, the page gives learners a clear place to land after email or social CTAs while the ebook is still being prepared. It should set expectations honestly, collect interest through Tally, and point users toward the survey and first-group interest form.

## Current State

The ebook PDF is not ready yet.

The current page is a waiting page, not a real download page. It should:

- Say the guide is in preparation.
- Invite users to request a notification when it is ready.
- Link to the survey.
- Link to the first group interest form.
- Explain what the guide will include.
- Avoid fake download buttons or placeholder PDF links.

Current route:

- `/ebook-gratis`

Current form links:

- Ebook / waitlist: `https://tally.so/r/q4z8l9`
- Survey: `https://tally.so/r/eqzgbe`
- First group: `https://tally.so/r/D4a6NE`

## Future State

When the ebook PDF is ready, `/ebook-gratis` should become the real download page.

Future PDF path:

```text
public/downloads/guia-gratis-sing-pronounce-repeat.pdf
```

Future page changes:

- Change title to `Tu guía gratis está lista`.
- Add a primary `Descargar PDF` CTA.
- Keep `Responder encuesta`.
- Keep `Quiero saber del primer grupo`.
- Keep a clear legal-safe educational note.
- Remove language that says the guide is still in preparation.
- Add tracking for PDF download clicks if analytics tooling exists.

Do not create `public/downloads/` or add a PDF until the ebook file exists.

## Tracking Ideas

Track these metrics manually or with analytics later:

- Visits to `/ebook-gratis`.
- Clicks on `Avisarme cuando esté lista`.
- Clicks on `Responder encuesta`.
- Clicks on `Quiero saber del primer grupo`.
- Future PDF download clicks.
- Traffic source: email, YouTube, social, direct, or landing page.
- Survey completion after visiting the page.
- First group interest after visiting the page.

## Legal-Safe Reminders

The page must not include full commercial song lyrics or full translated lyrics.

The page can mention that the future guide will use:

- Short educational fragments.
- Original Escríbelo como suena pronunciation guidance.
- Natural translation for short phrases only.
- Educational explanations and practice prompts.

Required legal-safe note:

```text
Esta guía usará fragmentos educativos cortos y explicaciones propias. No reemplaza letras completas ni plataformas oficiales de música o video.
```

## Future Implementation Checklist

Before converting the waiting page into the download page:

- Confirm the ebook PDF is final enough to publish.
- Confirm the PDF follows `CONTENT_GUIDE.md` and `LEGAL_GUIDE.md`.
- Place the PDF at `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- Update page copy from preparation to delivery.
- Add the real PDF download CTA.
- Test the PDF link on desktop and mobile.
- Confirm survey and first-group CTAs still open the correct Tally forms.
