# Phase 0 Home Landing Page — Ebook Delivery Alignment

## Summary

The home landing page (`/`) has been aligned with the active ebook delivery flow. All CTAs that previously pointed to the Tally ebook interest form now route to `/ebook-gratis`, where visitors can download the guide directly. Waiting-state copy has been replaced with published-guide copy. The waitlist section has been reframed as a project follow-up section.

## Branch

`fix/phase-0-home-ebook-delivery-alignment`

---

## Files Changed

| File | Change |
|---|---|
| `src/lib/links.ts` | Added `export const ebookPagePath = "/ebook-gratis"` |
| `src/app/page.tsx` | Updated all ebook CTAs, copy, and sections as described below |

---

## Changes by Area

### `src/lib/links.ts`

Added `ebookPagePath = "/ebook-gratis"` as a named constant. All home-page ebook CTAs import this value instead of `ebookFormUrl`.

### Navigation CTA

| Before | After |
|---|---|
| Label: "Ebook gratis" | Label: "Descargar guía gratis" |
| Destination: `ebookFormUrl` (Tally form) | Destination: `ebookPagePath` (`/ebook-gratis`) |
| External link (new tab) | Internal link |

### Hero CTA

| Before | After |
|---|---|
| Label: "Quiero mi ebook gratis" | Label: "Descargar guía gratis" |
| Destination: `ebookFormUrl` | Destination: `ebookPagePath` |
| Supporting text: "Recibe una guía gratis con 3 canciones..." | Supporting text: "Guía gratuita disponible — 3 canciones, 9 prácticas de pronunciación, ejercicios originales y reto de tres días." |

### Ebook Section (`#ebook`)

| Element | Before | After |
|---|---|---|
| Eyebrow | "Guía gratis" | "Guía gratuita disponible" |
| Title | "Descarga tu guía gratis" | "Aprende inglés con 3 canciones" |
| Left card body | "Elige el tipo de canciones que más te motivan..." | "Escucha, repite y entiende inglés real con canciones seleccionadas..." |
| Content list | `guidePaths`: Románticas / Rock pop / Principiantes | `guideContents`: 3 canciones seleccionadas / 9 prácticas / Significados y vocabulario / Ejercicios y reto |
| CTA label | "Elegir mi guía gratis" | "Descargar guía gratis" |
| CTA destination | `ebookFormUrl` | `ebookPagePath` |

### First-Group Section (`#first-group`)

Intro updated from "Cuando la guía gratis esté lista, abriremos un grupo pequeño..." to "La guía gratis ya está disponible. Ahora preparamos un grupo pequeño...".

### Waitlist Section (`#waitlist`)

| Element | Before | After |
|---|---|---|
| Section title | "Únete a la lista de espera" | "Sigue aprendiendo con nosotros" |
| Section intro | "Elige cómo quieres participar en la validación..." | "La guía gratuita ya está disponible. Puedes responder la encuesta para ayudar a elegir las próximas canciones o pedir información sobre el primer grupo de práctica." |
| Left heading | "Queremos construir esto con estudiantes reales." | "Construido con estudiantes reales." |
| Validation note | "Validación en curso: guía gratis, encuesta y primer grupo se registran por formularios cortos de Tally." | "Encuesta y primer grupo se registran por formularios cortos de Tally." |
| Action cards | 3 cards: ebook form + survey + first group | 2 cards: survey + first group (ebook form removed) |

### Footer Link

| Before | After |
|---|---|
| Label: "Quiero mi ebook gratis" | Label: "Descargar guía gratis" |
| Destination: `ebookFormUrl` | Destination: `ebookPagePath` |

---

## Removed Copy

Waiting-state copy confirmed removed from home page:

- "Quiero mi ebook gratis" (hero CTA)
- "Recibe una guía gratis con 3 canciones para practicar pronunciación sin símbolos raros." (hero supporting text, replaced with available-now copy)
- "Elige el tipo de canciones que más te motivan y ayúdanos a validar el primer recurso gratuito." (ebook section left card)
- "Elegir mi guía gratis" (ebook section CTA)
- `guidePaths` array: "Románticas", "Rock / pop clásicos", "Principiantes" (guide type selector replaced with actual contents)
- "Quiero la guía gratis" action card (entire card removed from waitlist section)
- "Elige cómo quieres participar en la validación." (waitlist section intro)
- "Cuando la guía gratis esté lista, abriremos un grupo pequeño..." (first-group section intro)
- "Validación en curso: guía gratis, encuesta y primer grupo..." (validation-status note updated to remove ebook)
- "Únete a la lista de espera" (section title)
- "Quiero mi ebook gratis" (footer link)

---

## Preserved CTAs

| CTA | Destination | Status |
|---|---|---|
| Responder encuesta | `surveyFormUrl` (`https://tally.so/r/eqzgbe`) | Preserved — unchanged |
| Quiero saber del primer grupo | `firstGroupFormUrl` (`https://tally.so/r/D4a6NE`) | Preserved — unchanged |
| External links | `target="_blank" rel="noopener noreferrer"` via `getLinkProps` | Preserved |

---

## Validation

| Check | Status |
|---|---|
| `npm run lint` — 0 errors | Pass |
| `npm run build` — compiles and generates static pages | Pass |
| `/` route listed as static | Pass |
| `/ebook-gratis` route listed as static | Pass |
| No `ebookFormUrl` references remaining in `src/app/page.tsx` | Pass |
| No waiting-state copy in page | Pass |
| Survey and first-group CTAs preserved | Pass |
| External links use `target="_blank" rel="noopener noreferrer"` | Pass — via `getLinkProps` |
| Internal ebook links do not open new tab | Pass — `ebookPagePath` is internal; `getLinkProps` returns plain `{ href }` |

---

## Blockers

| ID | Description | Severity |
|---|---|---|
| BLK-DEP-01 | Deployed-environment smoke test not performed | High — test after deploying |
| BLK-DEP-02 | Mobile browser QA not performed | Medium — manual check required |
