# Phase 0 Ebook PDF Template Specification

**Sing Pronunce Repeat / English with Lyrics**

---

## 1. Purpose

This document specifies the reusable visual template for the Phase 0.5 free ebook
*Aprende inglés con 3 canciones*. It defines page format, brand identity, typography,
components, layout rules, accessibility considerations, and production handoff instructions.

The template is the design system for the PDF. It is separate from the final learner
content, which lives in `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md`.

---

## 2. Template Status

| Property | Value |
|---|---|
| Status | Complete — specification and static prototype delivered |
| Branch | `design/phase-0-ebook-pdf-template` |
| Prototype | `docs/design/prototypes/phase-0-ebook-template.html` |
| CSS | `docs/design/prototypes/phase-0-ebook-template.css` |
| Content source | `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md` |
| Final PDF | Not created — pending full layout population and QA |
| Publication ready | No |

---

## 3. Format and Dimensions

**Print canvas:** A5 portrait
**Width:** 148 mm
**Height:** 210 mm
**Margins:** None on the @page declaration; safe-area padding applied inside each page element.

```css
@page {
  size: A5 portrait;
  margin: 0;
}
```

**Internal page padding:**
- Horizontal: 11 mm (each side)
- Vertical: 13 mm (top and bottom)

**Rationale:** A5 is a widely supported format for mobile-first PDFs. It reads comfortably
in portrait orientation on a phone screen at 100% zoom, and prints cleanly on A4 with
an automatic 2-up layout. It matches the 8–14 page target while leaving room for
adequate whitespace.

---

## 4. Brand Assets

**Available assets** (all located in `public/brand/`):

| File | Use |
|---|---|
| `logo-claro.svg` | **Primary logo for this ebook** — light version for dark page backgrounds |
| `logo-oscuro.svg` | Light-background contexts (not used in this dark-themed ebook) |
| `logo-fondo-transparente-B.png` | Fallback bitmap for dark contexts |
| `logo-fondo-transparente-N.png` | Fallback bitmap for light contexts |
| `favicon.png` | Favicon only — not used in PDF |
| `faviconx48.png` | Favicon only — not used in PDF |

**Logo usage rules:**
- Use `logo-claro.svg` on all dark pages in this ebook.
- Display at 36 px height on the cover; keep aspect ratio intact.
- On interior page headers use a small text identifier instead of repeating the full logo.
- Alt text: `Sing Pronunce Repeat / English with Lyrics logo`
- Do not recolor, crop, stretch, or recreate the logo in CSS.

**Relative path from prototype HTML to assets:**
```
../../../public/brand/logo-claro.svg
```

---

## 5. Color Usage

**Official palette:**

| Token | Hex | Role |
|---|---|---|
| `--c-black` | `#010101` | Primary page background |
| `--c-yellow` | `#FEE296` | Cover title, section headings, key fragment text, primary CTA background |
| `--c-pink` | `#FE9CE1` | Pronunciation rows, method label, song artist name, accent bar |
| `--c-purple` | `#CC9DEA` | Card borders, labels, secondary CTA, progress markers, footer accents |

**Surface layers (derived from black, no new colors):**

| Token | Hex | Role |
|---|---|---|
| `--c-surface` | `#140D14` | Slightly elevated surface for sidebar notes |
| `--c-card` | `#1C121C` | Fragment cards, step cards |
| `--c-card-accent` | `#221522` | Pronunciation row inside card |

**Text:**

| Token | Hex | Role |
|---|---|---|
| `--c-text` | `#FFF9FE` | Primary body text (near-white on dark) |
| `--c-text-sub` | `#C8BAC8` | Supporting text, descriptions |
| `--c-text-muted` | `#8A7E8A` | Legal text, footnotes, placeholder labels |

**Contrast guidance:**
- White/near-white on `#010101`: meets WCAG AA at body size.
- Black text on `#FEE296` (yellow CTA): meets WCAG AA.
- Avoid small purple or pink text on black — check contrast before finalizing.
- Do not use very small white text on pink or purple without verification.

---

## 6. Typography

### Font stacks

**Display / headings:**
```css
Georgia, 'Times New Roman', 'Palatino Linotype', Palatino, serif
```
*Rationale:* Elegant serif creates a premium, musical editorial feel distinct from
a classroom worksheet. Available on all major operating systems without downloading.

**Body / UI / labels:**
```css
system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif
```
*Rationale:* Matches the learner's own system UI, maximizing legibility. Keeps the
guide feeling practical and modern rather than purely academic.

### Type scale (final recommended values)

| Element | Screen size | Print equivalent | Font | Weight |
|---|---|---|---|---|
| Cover title | 2.1 rem | ~32pt | Serif | Bold |
| Cover subtitle | 1.0 rem | ~15pt | Sans | Regular |
| Section title | 1.4 rem | ~21pt | Serif | Bold |
| Card heading / song title | 1.05–1.7 rem | ~16–26pt | Serif | Bold |
| Card label (uppercase) | 0.58–0.62 rem | ~9pt | Sans | Bold |
| Body text | 0.875 rem | ~13pt | Sans | Regular |
| Small / supporting | 0.75–0.78 rem | ~11pt | Sans | Regular |
| Legal / muted | 0.68–0.7 rem | ~10pt | Sans | Regular |

**Minimum print body size:** 10.5pt equivalent (enforced by 0.875 rem on a 16px base).
**Minimum legal text:** 10pt equivalent. Do not go below this in final PDF production.

### Line length

Target body line length: 50–60 characters on the content column. The page safe-area
padding (11 mm each side) naturally produces this on A5.

### Line height

- Body: 1.55–1.6
- Headings: 1.15–1.2
- Small text: 1.5
- Card labels: 1.4

---

## 7. Spacing and Grid

**Spacing scale (4-point grid):**

| Token | Value | Common use |
|---|---|---|
| `--sp-1` | 4 px | Micro gap (label above value) |
| `--sp-2` | 8 px | Tight inner padding |
| `--sp-3` | 12 px | Card inner padding, small gap |
| `--sp-4` | 16 px | Standard card padding, list gap |
| `--sp-5` | 20 px | Section gap |
| `--sp-6` | 24 px | Section separator |
| `--sp-8` | 32 px | Major section break |
| `--sp-10` | 40 px | Large visual breathing room |
| `--sp-12` | 48 px | Cover and chapter openers |

**Card interior grid:** Two-column grid with a 92 px label column and a flexible value column.
Collapses to single-column at narrow widths (≤ 600 px screen, or if PDF viewer wraps).

---

## 8. Page Anatomy

Every page except the cover shares this anatomy:

```
┌─────────────────────────────────┐
│  Page header                    │  small method identifier + section name
├─────────────────────────────────┤
│                                 │
│  Main content                   │  varies by page type
│                                 │
│                                 │
│                                 │
│                                 │
│                                 │
├─────────────────────────────────┤
│  Page footer                    │  brand + page number
└─────────────────────────────────┘
```

The cover has no header or footer — only the logo, content, and a promise line.

---

## 9. Component Inventory

### A. Cover page
Dark full-bleed background. Logo at top. Yellow serif title. Pink method badge.
Cream subtitle and promise. CSS-only decorative background ring.

### B. Internal page header
Pink method identifier (left). Section name (right). Separated from content by a
faint pink border. Does not repeat the full logo.

### C. Welcome / introduction page
Section title in yellow serif. Body paragraphs. Bullet list with musical note prefix.
Sidebar-style notes in purple-bordered panels.

### D. Escríbelo como suena method card
Distinct card on dark surface. Two-column label/value layout. English line in white.
Pronunciation line in pink italic serif. Method note below. Original non-song example only.

### E. Four-step practice flow
2×2 card grid. Yellow step number in large serif. Step name in bold sans. Brief
description. Collapses to single column on narrow screens.

### F. Song divider page
Horizontal pink-to-purple gradient bar at top. Song number label. Large yellow
serif title. Pink artist name. Metadata rows (level, why it helps, listening focus).
Listen CTA with official URL. Dashed placeholder for optional QR code.
Label: "QR opcional — generar y probar en producción"

### G. Learning fragment card
The central reusable component. Purple-bordered card with dark surface. Label column
(uppercase purple sans) plus value column. Fragment row in yellow serif. Pronunciation
row with pink accent background. Vocabulary as compact list. Example + translation.
Exercise. Footer bar with pink Repítelo label, instruction, and Listo checkbox.

**Card must not split across printed pages.** Use `break-inside: avoid`.

### H. Vocabulary cards
Within the fragment card vocabulary row. Compact `<ul>` with no bullets.
Bold English term, regular Spanish meaning. Supports 2–4 items comfortably.

### I. Exercise block variants
Three variants demonstrated in prototype and available as standalone `.exercise-block`:
- **Multiple choice / meaning selection:** Lettered options list.
- **Sentence writing:** Question prompt + writing line.
- **Pronunciation self-rating:** "Sí / Más o menos / Todavía no" rating pills.

### J. Quick review component
Yellow-serif title. Numbered reflection questions. 1–5 confidence scale using
circular pips. Progress checkbox.

### K. Three-day challenge page
Challenge title in yellow serif. Intro paragraph. Three day cards (dark surface,
purple border). Each card: pink day label, bold day title, numbered steps,
italic objective, Completé el día N checkbox. CTA link on Day 3.

**Challenge-page density rule:** Use the `.page--challenge` modifier class on this page.
The modifier reduces challenge-intro bottom margin to 8px, card padding to 8px/12px,
and card gap to 8px. This is the minimum spacing that keeps the three day cards within
A5 height. Do not add extra content to this page. If the three-day challenge expands
beyond three items per day, move Day 3 to a second challenge page.

### L. Self-assessment page
Yellow-serif title. "Lo que hice" checklist with purple checkboxes. Confidence
table with four skills and five-point scale. Optional note area.

### M. CTA page
Title + brief intro. Primary CTA: full-width yellow button with black bold text.
Secondary CTA: purple-outlined button. Tertiary: underlined text link.
Only one visually dominant CTA (yellow button). No competing primary actions.
Print-safe: short human-readable destinations appear only via explicit `.print-url` spans
inside the link element; full URLs remain embedded as clickable targets. No automatic
`a[href]::after` expansion — prevents full YouTube watch URLs and Tally query strings
from appearing in the printed output.

### N. Educational and rights note
Purple-uppercase title. Four labeled sections: fragments, rights, audio, educational
intent. Body text in sub-color. Minimum body size respected.
Do not reduce this note to illegible font sizes.

### O. Footer
Brand name in italic muted text (left). Page number in purple (right).
Separated from content by a faint purple border.

---

## 10. Component Behavior — Short and Long Content

**Fragment card short content** (3–4 words, e.g., "Heart beats fast"):
- Card is compact and typically fits on a single A5 page alongside a second card or review.
- Vocabulary row: 2–3 items.
- Exercise: one short prompt.

**Fragment card medium content** (4–6 words, e.g., "I will be there"):
- Standard height. Fits one card per page when combined with a page header and footer.
- Vocabulary row: 3 items.
- Exercise: one multi-part prompt.

**Fragment card long content** (5–6 words, complex exercise, e.g., "I'm not a perfect person"):
- May overflow a shared page. Assign one card per page.
- Vocabulary row: 3 items.
- Exercise includes rating variant (three pills).
- Use `break-inside: avoid` strictly.

**General rule:** If a card overflows its page in the final production layout, move it
to its own page. Do not reduce font size to force it to fit.

---

## 11. Song-Section Pattern

Each song follows this three-page pattern in the final ebook:

1. **Song divider page** — song intro, metadata, official link.
2. **Fragment pages** — one or two cards per page depending on card height.
3. **Quick review** — compact component at the bottom of the final fragment page,
   or on its own half-page if space is tight.

**Escríbelo como suena consistency reminder for Still Loving You:**
Include the learner-facing accent note in the song divider or first fragment page.
Example treatment already documented in `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md`.

---

## 12. Mobile / Browser-Preview Behavior

At screen widths ≤ 600 px:
- Pages scale to 100% viewport width.
- No horizontal scrolling.
- Padding reduces to 5–6 vw.
- The four-step grid collapses from 2×2 to single column.
- Fragment card label column reduces from 92 px to 80 px.
- Cover title scales down to approximately 1.6 rem.
- Page box-shadow is removed.
- Pages display as a continuous scroll rather than fixed-height cards.

At desktop browser widths:
- Pages display at A5 width (148 mm) as card-like blocks with drop shadows.
- Body background is dark to provide contrast between pages.

---

## 13. Print / Export Behavior

- `@page { size: A5 portrait; margin: 0; }` sets the print canvas.
- `-webkit-print-color-adjust: exact` and `print-color-adjust: exact` ensure brand
  colors render in print.
- Each `.page` uses `break-after: page` / `page-break-after: always`.
- Fragment cards, challenge days, and exercise blocks use `break-inside: avoid`.
- In print mode, `a[href]::after` appends the URL in parentheses so links remain
  readable on paper. Button and `#` anchors suppress this via specificity override.
- The internal prototype page label (`.page::before`) is hidden in print.
- The `.prototype-label` badge is suppressed in print.

---

## 14. Accessibility Considerations

| Check | Status |
|---|---|
| Near-white (`#FFF9FE`) on black (`#010101`) body text | Passes WCAG AA (contrast > 7:1) |
| Black text on yellow (`#FEE296`) CTA button | Passes WCAG AA |
| Body text minimum 10.5pt equivalent | Met — 0.875 rem on 16px base |
| Logical heading order (h1 → h2 → h3) | Implemented in prototype |
| Visible link focus: 2px solid yellow outline | Implemented |
| Non-color-only meaning | Labels are always text, not color alone |
| Pronunciation labels are textual, not color-only | Implemented (both label and pink background) |
| Translation distinguished from pronunciation by label | Label column required — not merged |
| Logo alt text | `Sing Pronunce Repeat / English with Lyrics logo` |
| Links visible in print | URL appended via CSS `::after` in print mode |
| Line length | 50–60 ch — comfortable for prose reading |
| Adequate spacing | 4-point grid minimum spacing between elements |
| QR code not the only access path | Official link always present alongside QR placeholder |
| Confidence table rating cells are markable on paper | `○` (U+25CB) characters at 1rem — large enough to circle or tick with a pen |
| `lang="es"` on `<html>` | Set — document language is Spanish |
| Viewport meta | Set — `width=device-width, initial-scale=1.0` |

**Not claimed:** formal WCAG certification. Final PDF should be reviewed against
WCAG 2.1 AA before publication, particularly for print-rendered text contrast.

---

## 15. Content-Density Limits

These are template rules to preserve readability. Apply them during full PDF population.

| Rule | Value |
|---|---|
| Main learning objectives per page | 1 |
| Dense fragment cards per page | 1 (max 2 for very short cards) |
| Vocabulary items per fragment | 2–4 |
| Exercises per card | 1 |
| Reflections per quick-review | 1 rating scale + up to 3 questions |
| Song sections per divider page | 1 |
| Primary CTAs per page | 1 |
| Minimum font size in final PDF | 10pt (legal text) |

**Do not** reduce typography to force overflowing content onto fewer pages.
Move overflow to a new page instead.

**Long fragment card rule:** The `.page` base style uses `overflow: visible` on screen
so that long cards surface visually during layout review. In print mode the `@media print`
block enforces `overflow: hidden` with a fixed `height: 210mm`. If the fragment-footer
(Repítelo + Listo) is not visible in print preview, the card is too tall for the page.
Assign it to its own page and ensure no other shared content (header, footer, method card)
competes for vertical space. This applies particularly to "I'm not a perfect person"
and any future 5–6 word card with a rating exercise.

**Print URL rule:** No automatic `a[href]::after` URL expansion is used. The print CSS
does not append any URL behind anchor elements. Short human-readable destinations are
shown only via explicit `<span class="print-url">` elements placed inside the anchor.
The `.print-url` span is `display: none` on screen and `display: inline` in print.
Currently only the song-listen link uses this pattern, showing `youtube.com`.
CTA buttons and the tertiary ebook link show their visible label only. The inline
survey URL on the challenge page (`tally.so/r/eqzgbe`) is already legible as running
text and needs no additional printed destination.

---

## 16. Page-Count Recommendation

**Revised recommended range: 14–16 pages**

The original content plan estimated 8–14 pages. After reviewing the actual approved
nine-fragment content in `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md`, a more
realistic estimate is:

| Section | Pages |
|---|---|
| Cover | 1 |
| Welcome | 1 |
| Method + Four steps | 1 |
| Song 1 divider | 1 |
| Song 1 — 3 fragment cards (2 short, 1 medium) | 2 |
| Song 1 — Quick review | shared with last card |
| Song 2 divider | 1 |
| Song 2 — 3 fragment cards (1 short, 2 medium) | 2–3 |
| Song 2 — Quick review | shared or separate |
| Song 3 divider | 1 |
| Song 3 — 3 fragment cards (2 medium, 1 complex) | 2–3 |
| Song 3 — Quick review | shared with last card |
| Three-day challenge | 1 |
| Self-assessment | 1 |
| CTA | shared with self-assessment or separate |
| Rights note | 1 |
| **Total** | **14–16** |

12–14 pages is achievable only if quick reviews share pages with the last fragment cards
of each song and the CTA shares a page with the self-assessment. This requires careful
column layout during full PDF population.

16–18 pages is acceptable if larger print type (12pt body) is required for accessibility.
Do not force 8 pages — readability would suffer significantly.

---

## 17. Visual QA Checklist

Before handing to PDF export:

- [ ] All nine fragment cards render without overflow on their assigned pages.
- [ ] Cover logo is crisp and correctly sized; aspect ratio intact.
- [ ] Yellow title is legible at small print sizes.
- [ ] Pink pronunciation rows are visually distinct from meaning rows.
- [ ] Purple label column is readable but does not compete with yellow content.
- [ ] Song divider accent bar is visible in both screen and print preview.
- [ ] Quick review confidence scale pips are aligned and not cramped.
- [ ] Three-day challenge days do not split across a page break.
- [ ] CTA buttons have clearly different visual weight (primary > secondary > tertiary).
- [ ] Rights note text is not smaller than 10pt equivalent.
- [ ] Footer is present on all pages except the cover.
- [ ] No `.prototype-label` badges or internal labels appear in print preview.
- [ ] No `[DESIGN: ...]` markers from PHASE_0_EBOOK_FINAL_CONTENT.md appear.
- [ ] Internal `<!-- INTERNAL -->` comments do not appear in rendered output.

---

## 18. Print / PDF QA Checklist

- [ ] Open in Chrome, Firefox, and Safari — verify consistent rendering.
- [ ] Print preview at A5 portrait — verify all pages complete without clipping.
- [ ] "Background graphics" enabled in print dialog — verify brand colors print.
- [ ] Each page starts exactly at the top of a new A5 canvas.
- [ ] `a[href]::after` appends URLs in print — verify survey and media links are readable.
- [ ] CTA button URLs visible without relying on click.
- [ ] PDF opens at 100% zoom on a 375 px phone screen — no horizontal scroll.
- [ ] Body text is legible without pinching to zoom.
- [ ] Fragment cards do not split across pages.
- [ ] All nine fragments present and correctly labelled.
- [ ] No surrounding song text, completed verses, or choruses appear.
- [ ] Official media links resolve to the verified YouTube videos.
- [ ] Tally survey link resolves: `https://tally.so/r/eqzgbe`
- [ ] First group link resolves: `https://tally.so/r/D4a6NE`
- [ ] `/ebook-gratis` is updated before distribution.
- [ ] PDF metadata: title, language, and filename confirmed.
- [ ] Filename: `guia-gratis-sing-pronounce-repeat.pdf` (suggested).

---

## 19. Handoff Instructions

### For the designer producing the final PDF

1. Duplicate `docs/design/prototypes/phase-0-ebook-template.html`.
2. Copy the CSS file or inline it for self-contained delivery.
3. Populate all content from `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md`.
   Follow the section order and use the approved text verbatim.
4. Replace all `[OFFICIAL_MEDIA_LINK_PENDING]` values with the verified YouTube links
   documented in the internal production status block of PHASE_0_EBOOK_FINAL_CONTENT.md.
5. Generate optional QR codes for the official media links and the survey CTA.
   Reserve spaces are labeled "QR opcional — generar y probar en producción."
6. Remove all `[DESIGN: ...]` markers, `<!-- INTERNAL -->` comments, and
   `.prototype-label` badges from the final production file.
7. Complete the Visual QA Checklist (Section 17).
8. Complete the Print / PDF QA Checklist (Section 18).
9. Submit to final publication-level legal-safe review. Do not publish before this step.
10. Export to PDF. Confirm filename: `guia-gratis-sing-pronounce-repeat.pdf`.
11. Upload to `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
12. Update `/ebook-gratis` from waiting page to real download page.
13. Enable email delivery only after successful QA and upload.

### CSS token reference for production

All design tokens are in the `:root` block at the top of `phase-0-ebook-template.css`.
Override specific values there rather than deep in component rules.

---

## 20. Remaining Blockers

| Blocker | Status |
|---|---|
| Full PDF layout population | Pending — branch `feat/phase-0-ebook-pdf-delivery` |
| Final publication-level legal-safe review | Pending — must complete before publishing |
| QR code generation and verification | Pending — optional; do not make QR the only access path |
| PDF export | Pending |
| Mobile readability QA | Pending |
| Link QA (Tally, YouTube, `/ebook-gratis`) | Pending |
| PDF metadata confirmation | Pending |
| `/ebook-gratis` activation | Pending — convert waiting page to download page |
| Email delivery setup | Pending — enable only after PDF and QA are complete |

---

## 21. Next Recommended Branch

**`feat/phase-0-ebook-pdf-delivery`**

This branch will:
- Populate all final learner content from PHASE_0_EBOOK_FINAL_CONTENT.md into the HTML template.
- Add verified QR codes if confirmed for production.
- Complete the Visual QA and Print/PDF QA checklists.
- Perform the final publication-level legal-safe review.
- Export the PDF.
- Upload to `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- Update `/ebook-gratis` from waiting page to real download page.
- Enable email delivery.

Do not start this branch until the final publication-level legal-safe review is scheduled.
