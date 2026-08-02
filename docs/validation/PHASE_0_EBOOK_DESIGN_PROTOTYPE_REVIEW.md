# Phase 0 Ebook Design Prototype Review

## Scope

This record covers the representative static visual prototype for the approved improved 32-page Phase 0 ebook. It demonstrates the reusable visual system with twelve approved final-page families. It is not the complete 32-page implementation, a final PDF, or a Production replacement.

## Entry Gates

Architecture gate: PASS
Owner copy gate: PASS
Pronunciation gate: PASS
Link/QR gate: PASS

Initial project-owner visual decision: CHANGES REQUESTED

Review artifact: 12-page A5 prototype PDF

Initial findings:

- Final page 2: missing footer / insufficient bottom clearance.
- Final page 4: clipped notation content / missing footer.
- Final page 5: clipped footer.
- Final page 24: challenge overflow / missing footer.

## Representative-Page Inventory

| Final page | Page family | Prototype status |
|---|---|---|
| 1 | Cover | REPRESENTED |
| 2 | Bienvenida, audiencia y alcance | REPRESENTED |
| 4 | El método: qué hace y qué no hace | REPRESENTED |
| 5 | Cómo usar cada práctica | REPRESENTED |
| 6 | Tu recorrido musical | REPRESENTED |
| 7 | Canción 1: A Thousand Years | REPRESENTED |
| 8 | Canción 1 — Práctica 1 | REPRESENTED |
| 11 | Cierre de Canción 1 | REPRESENTED |
| 24 | Reto de tres días — Día 1 | REPRESENTED |
| 28 | Continuación: posible primer grupo | REPRESENTED |
| 31 | Encuesta | REPRESENTED |
| 32 | Cierre, marca y referencia canónica | REPRESENTED |

Challenge representation: Final page 24 — Day 1 challenge card

Challenge component coverage: PASS — reusable single-day challenge pattern represented

Final pages 25 and 26: Deferred to the full 32-page implementation

Final page 23: Not represented in this prototype; its approved final-review content remains unchanged in the source.

## Visual Tokens

- Format: A5 portrait with internal safe-area padding.
- Direction: dark, modern, educational and premium.
- Primary brand: Sing Pronunce Repeat.
- Secondary identity: English with Lyrics.
- Method: Escríbelo como suena.
- Base palette: `#010101` black, `#FEE296` yellow, `#FE9CE1` pink, `#CC9DEA` purple and `#FFF9FE` text.
- Display typography: Georgia, Times New Roman, Palatino or an equivalent local serif fallback.
- Body and UI typography: system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif.
- Print body size: 10.5 pt minimum. Supporting and legal copy: 10 pt minimum.

## Component Coverage

The prototype represents all required reusable treatments:

- Cover; internal page header; page footer and page number; preparation progress indicator.
- Includes / does-not-include cards; before / after learning path; method explanation card; difficult-sound notation legend.
- Five-step usage flow; three-song journey map; text-plus-visual difficulty meter.
- Primary lesson CTA; secondary official-listening link; QR presentation card.
- Practice card; pronunciation row; meaning row; vocabulary block; original example and translation; active exercise; writing area; completion checkbox.
- Three-expression review table; confidence scale; reusable challenge-day card pattern.
- Continuation CTA page; survey CTA page; rights / source / brand closing treatment.

## Content-Integrity Checks

- The prototype contains exactly the twelve representative approved final pages listed above.
- Final page 8 contains one approved Song 1 expression only: `One step closer`.
- No adjacent or surrounding song line, full lyric passage, or full translation was introduced.
- Final page 11 retains three isolated approved expression rows, one per row.
- Final page 24 uses only the approved Day 1 content: estimated time, four steps, objective, reflection area, checkbox and progress text.
- Final pages 23, 25 and 26 were not moved, combined, or rewritten.
- The continuation page remains information/interest-oriented and the survey remains optional.
- No visible internal status, architecture instruction, placeholder, paid-product claim, price, date, guarantee, testimonial, or audience count appears in the prototype.

## Link and QR Checks

- Final page 7 primary lesson: `https://www.youtube.com/watch?v=si9YeTd8z1E`.
- Final page 7 secondary official listening reference: `https://www.youtube.com/watch?v=rtOvBOTyX00`.
- Final page 28 continuation: `https://tally.so/r/D4a6NE`.
- Final page 31 survey: `https://tally.so/r/eqzgbe`.
- Privacy route: `https://singpronuncerepeat.com/privacidad`.
- Canonical closing reference: `https://singpronuncerepeat.com`.
- The page 7, page 28 and page 31 QR cards use the committed local SVG source assets directly, retain their white quiet zones, and link to their matching primary destinations.
- QR presentation size is 30 mm on page 7 and at least 24 mm on the continuation and survey pages.
- No legacy waitlist, Vercel fallback, shortened URL, tracking parameter, or second song QR is present.

## Responsive Checks

Local HTTP review endpoint: `http://127.0.0.1:9898/docs/design/prototypes/phase-0-ebook-improved-preview.html`.

- Desktop preview: CORRECTION STRUCTURAL PASS — all twelve page footers and matching final-page numbers are rendered; pages 2, 4, 5 and 24 retain a visible footer reserve after their layout corrections. Project-owner visual re-review remains pending.
- 390 px mobile: STRUCTURAL PASS — the stylesheet limits page width to the viewport, stacks multi-column layouts, keeps QR cards within the page width, and does not use fixed screen heights or horizontal overflow. Project-owner mobile readability review remains pending.
- Screen-only prototype labels are defined separately and hidden in print mode.

## A5 Print Checks

- A5 print structure: STRUCTURAL PASS — `@page` is A5 portrait with zero external margin; every prototype page has A5 dimensions, safe-area padding and a page break.
- Print-color preservation: STRUCTURAL PASS — the stylesheet applies exact print-color adjustment.
- Card, table, exercise and QR blocks use print break protection.
- Screen labels and long YouTube URLs are hidden in print mode. Readable short destinations are limited to designated print URL elements.
- A5 correction structural validation: PASS — pages 2, 4, 5 and 24 use tightened page-family spacing, retain their full approved content, and reserve the standard footer area without changing the shared text minimums.
- Temporary local A5 review artifact: 12 pages rendered from the served prototype. All twelve final-page footers and page numbers are visible; pages 2, 4, 5 and 24 show their complete corrected treatments above the footer.
- A5 print preview: RE-REVIEW PENDING — project-owner confirmation of page balance, footer clearance and background-graphics settings is required.

## Accessibility and Contrast Review

- The primary text and supporting text use light, high-contrast colors against near-black surfaces.
- Progress, level and confidence information are communicated with words and numbers in addition to color.
- Semantic headings, lists, tables, labels, descriptive QR alternative text and native checkbox/radio controls are present.
- Interactive destinations retain visible text labels; QR codes are not the only way to reach an action.
- Keyboard-focus treatment is defined for primary CTA links.

## Copyright and Brand-Safety Checks

- Sing Pronunce Repeat is the prominent brand; English with Lyrics remains secondary.
- The prototype has no artist photography, album artwork, third-party logo, remote image, embedded audio, or embedded video.
- Song material remains limited to the approved short educational expressions and original educational explanation.
- Page 32 preserves the approved educational and rights treatment, including the official-source listening rule.

## Project-Owner Visual-Review Matrix

| Review area | Status | Notes |
|---|---|---|
| Overall visual direction | PASS | |
| Cover | PASS | |
| Opening pages | RE-REVIEW PENDING | Corrected final page 2 footer and bottom clearance |
| Method and notation | RE-REVIEW PENDING | Corrected final page 4 notation density and footer clearance |
| Song introduction | PASS | |
| Practice card | PASS | |
| Completion page | PASS | |
| Challenge page | RE-REVIEW PENDING | Corrected final page 24 Day 1 layout and footer clearance |
| CTA pages | PASS | |
| QR presentation | PASS | |
| Mobile readability | PENDING | |
| A5 print preview | RE-REVIEW PENDING | Corrected final pages: 2, 4, 5 and 24 |
| Final approval | RE-REVIEW PENDING | |

## Current Gate Status

Representative pages implemented: 12 of 12
Design components represented: COMPLETE
Prototype structural validation: PASS
Visual corrections implemented: COMPLETE
Correction structural validation: PASS
Project-owner visual re-review: PENDING
Design prototype gate: BLOCKED — OWNER VISUAL RE-REVIEW PENDING
Full 32-page design implementation: BLOCKED
PDF generation: BLOCKED
Production replacement: BLOCKED

## Remaining Actions

1. Project owner re-reviews the corrected prototype at desktop width, 390 px mobile width and A5 print preview with background graphics enabled.
2. Record the re-review decision and any further visual corrections without changing approved learner-facing copy.
3. After the prototype gate passes, implement all 32 approved final pages using the accepted reusable system.
4. Complete final embedded-link and QR checks during the later PDF QA phase before any Production replacement.
