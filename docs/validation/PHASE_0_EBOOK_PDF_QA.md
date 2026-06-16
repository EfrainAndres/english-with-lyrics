# QA Checklist — Phase 0 Ebook PDF Production Draft

## Overview

This checklist must be completed manually before approving the production draft
for public delivery.

**Source HTML:** `docs/design/production/phase-0-ebook.html`  
**Production CSS:** `docs/design/production/phase-0-ebook.css`  
**Export script:** `scripts/export-ebook-pdf.sh`  
**Draft PDF:** `docs/design/production/phase-0-ebook-production-draft.pdf`  
**Future public path:** `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`

---

## Export history

### First export (INVALID — replaced)

- **Date:** 2026-06-15
- **File size:** 70,172 bytes
- **Status:** INVALID
- **Reason:** Chrome was launched without a server-readiness check. The local HTTP server
  had not yet bound to the port when Chrome started, causing an `ERR_CONNECTION_REFUSED`
  error page to be exported as PDF instead of the ebook.
- **Detected by:** Raw byte search found `127.0.0.1` in the PDF; expected ebook content
  ("Aprende inglés", "A Thousand Years", "Still Loving You", "The Reason") was absent.
- **Action:** Export script rewritten with curl readiness loop, temporary-file validation,
  and content checks. Invalid PDF replaced.

### Corrected export (2026-06-16, pre-QA layout)

- **Date:** 2026-06-16
- **File size:** 1,154,555 bytes
- **Page count:** 18 (confirmed via PDF `/Type /Page` objects)
- **Status:** Superseded — replaced by QA-corrected layout export below.
- **Reason superseded:** Manual visual QA identified overflow on pages 7, 11, 15 (Fragment 3 + quick-review shared page caused content to be pushed off A5 boundary); challenge page footer not visible; self-assessment footer and /ebook-gratis reference not visible.

### QA-corrected export (current)

- **Date:** 2026-06-16
- **File size:** 1,223,741 bytes
- **Page count:** 21 (confirmed via PDF `/Type /Page` objects — within expected range 21–23)
- **PDF title:** "Aprende inglés con 3 canciones — Sing Pronounce Repeat" (UTF-16BE metadata)
- **Network-error check:** PASSED
- **Brand colors:** PASSED — yellow #FEE296 detected in shading functions
- **All 9 learning blocks:** PASSED (deterministic structural validation via Python script)
- **All 9 fragments present:** PASSED
- **Three dedicated quick-review pages:** PASSED (pages 8, 13, 18)
- **Footer on every non-cover page:** PASSED (pages 2–21)
- **/ebook-gratis visible text count:** 1 (page 20 CTA section)
- **Challenge page footer:** Structurally present (page 19) — visual confirmation pending manual QA
- **Export method:** Chrome headless (`--headless=new`, `--virtual-time-budget=10000`), Python 3 HTTP server with curl readiness loop, temporary PDF validated before move
- **Manual visual QA:** Pending
- **Publication readiness:** No

---

## 1. Page count and structure

| Check | Expected | Pass? |
|---|---|---|
| Total page count | 21 A5 pages | |
| Page 1 | Cover | |
| Page 2 | Bienvenida | |
| Page 3 | Método (4 pasos) | |
| Page 4 | Separador — A Thousand Years | |
| Pages 5–6 | ATY Fragmentos 1–2 | |
| Page 7 | ATY Fragmento 3 (complete, dedicated) | |
| Page 8 | ATY Revisión rápida (dedicated) | |
| Page 9 | Separador — Still Loving You | |
| Pages 10–11 | SLY Fragmentos 1–2 | |
| Page 12 | SLY Fragmento 3 (complete, dedicated) | |
| Page 13 | SLY Revisión rápida (dedicated) | |
| Page 14 | Separador — The Reason | |
| Pages 15–16 | TR Fragmentos 1–2 | |
| Page 17 | TR Fragmento 3 (complete, dedicated) | |
| Page 18 | TR Revisión rápida (dedicated) | |
| Page 19 | Reto de tres días | |
| Page 20 | Autochequeo + ¿Qué sigue? | |
| Page 21 | Nota educativa y de derechos | |

---

## 2. Visual layout

| Check | Expected | Pass? |
|---|---|---|
| Cover logo | Clearly visible, proportionate, `height: 54px` | |
| Cover background | Dark background with yellow, pink, or black brand color | |
| Page 19 (challenge) | All 3 day cards fit within the A5 boundary | |
| Fragment cards | No card extends into the footer area in print | |
| Confidence table | `○` circles visible and large enough to mark with a pen | |
| Song divider bars | Colored horizontal bars appear on each song separator | |
| Brand palette | Black, yellow, pink, purple used consistently | |
| System fonts | No missing fonts; text readable without custom font installation | |
| Print backgrounds | Background colors visible in PDF (requires "Background graphics" on) | |
| Page numbers | Sequential 1–18 in the footer of each page | |

---

## 3. Content integrity

| Check | Expected | Pass? |
|---|---|---|
| No internal notes | No `[DESIGN: ...]` annotations in the PDF | |
| No production status | No internal production status block | |
| No publication blockers | No "publication blockers" section | |
| No review scores | No confidence percentages or review scores visible | |
| Fragments only | Only the 9 approved educational fragments appear | |
| No surrounding lyrics | No surrounding verse lines, choruses, or extended quotes | |
| ATY-02 translation | "examen importante" (not "examen importantes") | |
| No personal names | No personal names in public-facing content | |

---

## 4. Links

| Check | Expected URL | Pass? |
|---|---|---|
| ATY song link (Page 4) | `https://www.youtube.com/watch?v=rtOvBOTyX00` | |
| SLY song link (Page 8) | `https://www.youtube.com/watch?v=7pOr3dBFAeY` | |
| TR song link (Page 12) | `https://www.youtube.com/watch?v=fV4DiAyExN0` | |
| Day 3 survey link (Page 16) | `https://tally.so/r/eqzgbe` | |
| Primary CTA (Page 17) | `https://tally.so/r/eqzgbe` | |
| Secondary CTA (Page 17) | `https://tally.so/r/D4a6NE` | |
| Tertiary link (Page 17) | `/ebook-gratis` | |

---

## 5. Print URL behavior

| Check | Expected | Pass? |
|---|---|---|
| Song listen links | "Abrir video oficial — youtube.com" (not the full watch URL) | |
| Full YouTube watch URLs | No full `youtube.com/watch?v=…` URLs printed anywhere | |
| Tally query strings | No Tally query string appended beside CTA button labels | |
| `/ebook-gratis` | Appears at most once, in the tertiary link text only | |
| No URL duplication | No link destination appears twice on any page | |

---

## 6. Exercises and interactivity

| Check | Expected | Pass? |
|---|---|---|
| Write lines | Visible horizontal lines for handwritten responses | |
| Multiple choice lists | Numbered options, clearly readable | |
| Rating rows (TR-02) | Sí / Más o menos / Todavía no options visible | |
| Checkboxes | Checkbox inputs visible on all progress and review markers | |
| Confidence scale pips | 1–5 numbered circles on each quick review | |

---

## 7. Legal and safety

| Check | Expected | Pass? |
|---|---|---|
| Fragment length | Each fragment is a short phrase (2–5 words) only | |
| No complete verses | No complete verse, bridge, or chorus reproduced | |
| Rights note visible | Page 18 rights note is present and complete | |
| Listen guidance | Each song separator directs the reader to the official source | |
| No claimed certainty | Pronunciation guides include caveats about accent variation | |

---

## 8. Approval gate

Complete all checks above before taking any of these actions:

- [ ] Manual review complete — no blocking issues found
- [ ] PDF exported and visually inspected page by page
- [ ] All links tested in the browser
- [ ] Legal-safe review confirmed
- [ ] Approved for public delivery

Only after all boxes are checked:

```
cp docs/design/production/phase-0-ebook-production-draft.pdf \
   public/downloads/guia-gratis-sing-pronounce-repeat.pdf
```

---

## Issue log

Use this table to record any issues found during QA.

| Page | Issue | Severity | Fixed? |
|---|---|---|---|
| | | | |
