# Prototype — Phase 0 Ebook PDF Template

This folder contains the static design prototype for the Sing Pronunce Repeat / English with Lyrics Phase 0 ebook.

## This is not the final PDF

This prototype demonstrates the visual system, page components, and layout behavior. The complete learner-facing content is in `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md`. The full design specification is in `docs/design/PHASE_0_EBOOK_PDF_TEMPLATE.md`.

## Files

| File | Purpose |
|---|---|
| `phase-0-ebook-template.html` | Static 9-page component prototype |
| `phase-0-ebook-template.css` | Design system with tokens, components, print styles |
| `phase-0-ebook-improved-preview.html` | Representative 12-page prototype for the approved 32-page improved ebook |
| `phase-0-ebook-improved-preview.css` | Visual system and responsive/A5 print styles for the representative prototype |
| `README.md` | This file |

`phase-0-ebook-template.*` is the historical/current component template.

`phase-0-ebook-improved-preview.*` is the representative prototype for the approved 32-page improved ebook.

## How to open locally

Open `phase-0-ebook-template.html` directly in a browser. No server, build step, or dependencies are required.

```
open docs/design/prototypes/phase-0-ebook-template.html
```

Or drag the file into any modern browser window.

To open the improved-ebook representative prototype:

```
open docs/design/prototypes/phase-0-ebook-improved-preview.html
```

It contains twelve representative pages, not the full 32-page implementation, and is not the final PDF. It must pass project-owner visual review before the full design implementation begins.

## How to preview at mobile width

1. Open the file in Chrome, Firefox, or Safari.
2. Open browser developer tools (F12 or Cmd+Option+I).
3. Enable the responsive design / device toolbar.
4. Set width to 375px or 390px to simulate a phone screen.
5. Verify text is readable and no horizontal scrolling occurs.

Pages scale naturally to narrow viewports. No zooming should be required.

## How to preview the print layout

1. Open the file in a browser.
2. Choose File → Print (or Cmd+P / Ctrl+P).
3. Set paper size to A5.
4. Set margins to None.
5. Enable "Background graphics" or "Print backgrounds" so brand colors appear.
6. Preview each page before saving as PDF.

The print stylesheet sets `@page { size: A5 portrait; margin: 0; }` and applies `print-color-adjust: exact` so brand colors are preserved.

## No dependencies required

This prototype uses only:

- Semantic HTML
- A single local CSS file
- Official brand assets from `public/brand/` (referenced by relative path)
- No JavaScript
- No external fonts
- No frameworks
- No remote images

## Internal prototype labels

Small orange labels reading "Prototipo" or similar appear at the top-right of each page in the browser view. These are suppressed automatically in print mode and must be removed from the final PDF production file.

## Manual verification checklist

After any design change, open the prototype in a browser and check the following:

- [ ] Cover logo is clearly visible and proportionate — currently `height: 54px`.
- [ ] Page 7 (challenge): all three day cards fit within the A5 page boundary. Uses `.page--challenge` modifier.
- [ ] Confidence table (page 8): `○` circles are visible and large enough to mark with a pen.
- [ ] No URL appears twice: the song-listen link shows "Abrir video oficial — youtube.com" (once, via `.print-url` span); the challenge survey link shows `tally.so/r/eqzgbe` (once, as running text); no `::after` appends any URL.
- [ ] No full YouTube watch URL (`youtube.com/watch?v=…`) is printed anywhere.
- [ ] CTA labels (`→ Responder encuesta`, `→ Quiero saber del primer grupo`) remain clickable with no URL appended beside them.
- [ ] `/ebook-gratis` appears at most once in its CTA area (inside the tertiary link text).
- [ ] Fragment cards on page 6 ("I'm not a perfect person"): the Repítelo footer is visible and not clipped. Page `overflow` is `visible` on screen to surface any clipping during review.
- [ ] No long card extends into the footer area of the next page in print preview.
- [ ] Print preview at A5 shows background colors (enable "Background graphics").
- [ ] Internal prototype labels (purple uppercase, top-right) are hidden in print preview.

## Recommended next step

When the final PDF is ready to produce, duplicate `phase-0-ebook-template.html`, populate all content from `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md`, verify all links, perform the QA checklist in `docs/design/PHASE_0_EBOOK_PDF_TEMPLATE.md`, and export to PDF.
