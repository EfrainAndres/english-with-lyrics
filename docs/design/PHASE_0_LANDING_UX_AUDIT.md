# Phase 0 Landing UX Audit

## Purpose

This document proposes a warmer, more musical, brand-led direction for the English with Lyrics Phase 0 landing page.

The current landing page works as a functional validation page, but it should feel less like a generic SaaS page and more like a friendly learning experience connected to Sing Pronunce Repeat, English with Lyrics, songs, and Spanish-speaking learners.

This is a documentation-only audit. Do not change the landing code in this branch.

## Product Context

Sing Pronunce Repeat / English with Lyrics helps Spanish speakers learn English through songs, short educational fragments, natural translation, and the **Escríbelo como suena** method.

The page should validate:

- Whether learners understand the promise.
- Whether the Escríbelo como suena method feels useful and trustworthy.
- Whether visitors want the free ebook.
- Whether visitors want founder access.
- Which learners are strong candidates for the first MVP.

The page must not position the product as a lyrics replacement.

## 1. What Is Not Working In The Current UI

### It Feels Too Generic

The current layout uses familiar SaaS patterns:

- A sticky text nav.
- A large brand headline.
- A right-side product preview card.
- Repeated boxed sections.
- Metric cards for `3`, `5`, and `25`.

These patterns are clear, but they do not yet express music, learning, brand personality, or the emotional pain of not understanding songs.

### The Hero Does Not Show The Learning Moment

The hero says what the product does, but it does not immediately help the learner feel:

- "This is for me."
- "I have had this exact problem."
- "This method can make this easier."
- "I can learn with songs without feeling lost."

The current mock lesson preview is useful but too abstract. It looks like a product dashboard instead of a warm educational sample.

### The Visual System Feels Corporate

The current palette is clean, but the combination of `ink`, `lagoon`, `coral`, `sunshine`, and `paper` is applied in a restrained way that reads more operational than musical. The page needs more human warmth, rhythm, and educational friendliness.

### The Brand Method Is Not Present Enough

The product is connected to the English with Lyrics channel brand, but the current page does not make the method memorable enough. The design should make Sing Pronunce Repeat and Escríbelo como suena first-viewport signals.

This does not require a photo immediately if none is ready, but the layout should reserve space for:

- Sing Pronunce Repeat as the main brand.
- English with Lyrics as the secondary brand.
- A future photo or still from the channel.
- An Escríbelo como suena trust marker.

### The Spanish-Speaking Learner Is Not Specific Enough

The page uses Spanish copy, which helps. But it could speak more directly to moments like:

- "Lees la letra, pero no escuchas eso."
- "Sabes la palabra, pero en la cancion suena diferente."
- "Quieres cantar o entender, pero la pronunciacion te bloquea."

The current problem section is accurate but too broad.

### The CTAs Are Not Yet Validation-Sharp

The page has CTAs, but they should map more clearly to Phase 0 learning goals:

- Free ebook interest.
- Founder access interest.
- Survey completion.
- Waitlist signup.

The current waitlist form placeholder is honest, but it should eventually feel like a real next step, not a disabled product surface.

## 2. What Should Stay

Keep these foundations:

- Next.js App Router, TypeScript, and Tailwind CSS.
- A single-page landing page for Phase 0.
- Mobile-first responsive design.
- Clear legal-safe note.
- The core sections: hero, problem, method, how it works, ebook, founder access, waitlist/survey.
- The "no full lyrics" boundary.
- The message that Phase 0 is validation before a full platform.
- Simple reusable components.
- No auth, database, payments, AI, or mobile app scope.

Keep the product promise, but make it more human:

Current direction:

> Aprende ingles con canciones, pronunciacion facil, frases utiles y explicaciones naturales en espanol.

Recommended direction:

> Entiende tus canciones favoritas en ingles, frase por frase, con la forma facil de pronunciarlas y explicarlas en espanol.

## 3. New Visual Direction

### Brand Feel

The page should feel:

- Musical, but not like a karaoke app.
- Warm, but not childish.
- Educational, but not academic.
- Method-led, but not academic.
- Trustworthy, but not corporate.
- Mobile-first, quick to scan, and friendly.

### Concept

Use the idea of a guided listening session:

1. The learner hears a short fragment.
2. The method shows how it sounds.
3. The learner sees the natural meaning.
4. The learner practices one tiny step.

The UI should feel like opening a small guided lesson, not entering a SaaS dashboard.

### Visual Motifs

Use subtle, functional music and learning cues:

- Audio timeline bars.
- Small play-button shapes.
- Lesson strips.
- Phrase cards.
- Handwritten-style pronunciation callouts.
- Highlighted word chips for sound, meaning, and practice.
- A brand/method note block.

Avoid:

- Decorative music-note overload.
- Karaoke-style lyric screens.
- Full-song lyric layouts.
- Generic analytics cards.
- Excessive gradients or abstract blobs.
- Dense product-dashboard previews.

### Imagery

Preferred future asset:

- A real channel-aligned brand image or planned educational brand photo.

Fallback before real assets:

- A warm editorial-style lesson mockup with audio/phrase/pronunciation elements.
- A simple method badge: "Escríbelo como suena".
- A small "YouTube channel inspired" trust note without embedding video yet.

Do not add stock-looking generic music photos unless they clearly improve trust and learning context.

## 4. Suggested Color Palette

The current colors can evolve into a warmer, more musical palette without becoming one-note.

### Recommended Palette

- Ink: `#1F1A17`
  - Primary text. Warmer than the current blue-black.
- Warm Paper: `#FFF8ED`
  - Main background.
- Cassette Cream: `#F4E6D0`
  - Soft section backgrounds and lesson panels.
- Stage Teal: `#0E6F68`
  - Primary CTA and trust accents.
- Coral Voice: `#E85D4F`
  - Pronunciation highlights and emotional emphasis.
- Golden Beat: `#F4B942`
  - Small rhythm markers, badges, progress, and highlights.
- Deep Plum: `#3B243B`
  - Occasional contrast section for ebook/founder offer.
- Sky Note: `#BFE5E0`
  - Supporting soft accent for sound/translation chips.

### Usage Notes

- Use Warm Paper and Cassette Cream as the dominant surfaces.
- Use Stage Teal for primary action only.
- Use Coral Voice for "Escríbelo como suena" moments.
- Use Golden Beat sparingly for music rhythm and progress.
- Use Deep Plum for one immersive section, not the whole page.
- Keep contrast high for text and buttons.

## 5. Typography Recommendations

### Web-Safe Option

If avoiding new font downloads:

- Headings: `Georgia`, `Times New Roman`, serif fallback for warmer editorial character.
- Body: `Arial`, `Helvetica`, sans-serif for readability.

This gives the page a more human educational feel without adding dependencies.

### Google Fonts Option

If Google Fonts are acceptable later:

- Headings: `Fraunces` or `Merriweather`
  - Warm, expressive, readable.
- Body: `Inter`, `Nunito Sans`, or `Source Sans 3`
  - Friendly and clear.
- Pronunciation callouts: use the body font with handwritten-like treatment through color, spacing, and underline rather than adding a novelty font.

Recommended pairing:

- `Fraunces` for major headlines.
- `Nunito Sans` for body and UI.

Avoid:

- Overly corporate geometric fonts as the main personality.
- Decorative script fonts for long text.
- Negative letter spacing.
- Font sizes that scale directly with viewport width.

## 6. Landing Page Section Order

Recommended order for the next implementation branch:

1. **Hero: Sing Pronunce Repeat / English with Lyrics**
   - Brand promise, method trust, primary CTA, secondary CTA.
   - Include a warm lesson preview that shows sound, meaning, and practice.

2. **The Familiar Problem**
   - Speak directly to the learner's frustration.
   - Example messages without lyrics:
     - "Lees la frase, pero cuando suena en la cancion parece otra cosa."
     - "Sabes palabras en ingles, pero se conectan tan rapido que se pierden."

3. **The Method: Escríbelo Como Suena**
   - Make this the emotional and educational center.
   - Show a short original example using a made-up phrase or generic phrase, not commercial lyrics.

4. **A Micro-Lesson In 60 Seconds**
   - Demonstrate the flow:
     - Listen.
     - Read how it sounds.
     - Understand the meaning.
     - Practice one quiz.

5. **Free Ebook: 3 Songs, Short Educational Fragments**
   - Lead magnet CTA.
   - Clarify it is not a lyric book.

6. **Founder Access**
   - Explain the first paid idea: 5 songs, 25 micro-lessons.
   - Frame as early access interest, not payment yet.

7. **Waitlist And Survey**
   - Single clear form area.
   - Ask for email plus a survey CTA.
   - Make the next step feel real and helpful.

8. **Legal-Safe Learning Note**
   - Short, visible, plain-language note.
   - Keep the legal note respectful and not fear-based.

9. **Footer**
   - Sing Pronunce Repeat, English with Lyrics, method, and legal/content summary.

## 7. Recommended Copy Changes

### Hero

Current:

> Aprende ingles con canciones, pronunciacion facil, frases utiles y explicaciones naturales en espanol.

Recommended:

> Entiende canciones en ingles frase por frase, con pronunciacion facil y explicaciones naturales en espanol.

Supporting copy:

> Aprende a escuchar, pronunciar y repetir sonidos en ingles con el metodo Escríbelo como suena, sin usar simbolos raros.

Primary CTA:

> Quiero aprender con canciones

Secondary CTA:

> Ver el ebook gratis

### Problem Section

Recommended headline:

> Si alguna vez leiste la letra y pensaste "eso no suena asi", esto es para ti.

Recommended bullets:

- El ingles cantado une palabras y cambia sonidos.
- Las traducciones literales no siempre explican lo que la frase quiere decir.
- La pronunciacion tecnica puede intimidar cuando apenas quieres entender y repetir.

### Method Section

Recommended headline:

> Convertimos el ingles a una guia de sonido para que puedas escucharlo mejor.

Recommended body:

> No es IPA. No es una regla perfecta. Es una guia practica para que una persona hispanohablante se acerque al sonido real, compare con el audio y gane confianza.

### Ebook Section

Recommended headline:

> Empieza gratis con 3 canciones seleccionadas.

Recommended body:

> Recibe un ebook con fragmentos educativos cortos, pronunciacion sencilla, traduccion natural y una practica simple por cancion.

### Founder Access

Recommended headline:

> Ayudanos a construir la primera version.

Recommended body:

> Si el metodo te sirve, podras apuntarte al acceso fundador: 5 canciones convertidas en 25 micro-lecciones, con quizzes y progreso simple.

### Legal-Safe Note

Recommended copy:

> English with Lyrics no publica letras completas. Cada leccion usa fragmentos breves con fines educativos, pronunciacion original, traduccion natural y explicaciones para aprender ingles.

## 8. Mobile-First Considerations

The primary audience will likely arrive from YouTube, Instagram, TikTok, WhatsApp, or mobile search. The landing should be designed mobile-first.

Recommendations:

- Hero should fit the value proposition, brand signal, and primary CTA in the first mobile viewport.
- Avoid desktop-first two-column complexity above the fold.
- Use one main CTA at a time on small screens.
- Keep the lesson preview short and tappable-looking, but do not fake interactivity unless implemented.
- Use large touch targets: minimum 44px height.
- Keep form fields simple: name, email, country/level can come later or in the survey.
- Make the legal note concise on mobile, with fuller wording lower on the page.
- Avoid horizontal scroll from oversized cards, long words, or decorative elements.
- Use compact section spacing on mobile so the page does not feel endless.
- Put the ebook CTA before the founder access CTA if free lead capture is the main Phase 0 action.

## 9. Components To Redesign

### Hero

Replace the generic product-preview card with a "micro-lesson moment":

- Small method label: "Escríbelo como suena".
- A fake audio strip with a play marker.
- A short, original placeholder phrase.
- A pronunciation callout.
- A natural Spanish meaning callout.
- A one-question practice row.

Keep all text original and generic. Do not use commercial lyrics.

### Navigation

Make nav lighter and more brand-led:

- Brand left.
- Mobile-friendly CTA right.
- Reduce section links on mobile.
- Consider "English with Lyrics" as a secondary trust item.

### Problem Cards

Replace generic cards with learner moment strips:

- "Leo una cosa, escucho otra."
- "Se me pierden las palabras."
- "La traduccion literal no me ayuda."

Use warm educational language.

### Method Block

Give Escríbelo como suena a distinctive treatment:

- Highlighted phrase.
- Annotated callout.
- "No IPA" badge.
- "Guia practica, no transcripcion perfecta" note.

### Ebook Section

Make this feel like a useful free resource, not a statistics row:

- Small ebook cover mockup.
- Three benefit bullets.
- CTA.
- Legal-safe note: short fragments only.

### Founder Access Section

Make founder access feel like a community-building invitation:

- "Ayudanos a elegir las primeras canciones."
- "Recibe acceso temprano cuando abramos cupos."
- "Comparte tu nivel y tus canciones favoritas."

Avoid implying that payments are active.

### Waitlist / Survey Form

Eventually split into two actions:

- Waitlist: email capture.
- Survey: deeper learner questions.

For now, the UI can show:

- Email field.
- Button.
- Secondary survey link or button.
- Privacy reassurance.

## 10. Accessibility Considerations

- Keep all text contrast at WCAG AA or better.
- Do not rely on color alone to distinguish pronunciation, translation, and quiz states.
- Use semantic headings in order.
- Use real labels for form fields.
- Provide visible focus states for links, buttons, and inputs.
- Keep button text specific.
- Ensure touch targets are at least 44px high.
- Avoid autoplaying audio or video.
- If future audio controls are added, provide captions or text equivalents.
- If a channel or brand image is added, use meaningful alt text.
- Avoid text embedded inside images for critical content.

## 11. Legal-Safe UI And Content Considerations

The UI must support the legal/content strategy:

- Do not display full commercial lyrics.
- Do not display full translated lyrics.
- Do not present the product as a lyrics database.
- Do not create a karaoke or sing-along interface.
- Do not imply users can search any full song lyric.
- Use short educational fragments only.
- Prefer original or generic sample phrases in the landing preview.
- If referencing songs in the ebook or MVP, frame them as selected lessons with educational commentary.
- Place the legal-safe note near the ebook/founder areas and again in the footer.
- When official YouTube embeds are added in later phases, make them supporting context, not the primary substitute for licensed music platforms.

Recommended landing phrase:

> Usamos fragmentos breves para ensenar pronunciacion, significado y escucha. No reemplazamos letras completas ni plataformas oficiales.

## 12. Implementation Plan For The Next Branch

Recommended branch:

```bash
design/phase-0-landing-warm-redesign
```

### Step 1: Update Design Tokens

- Adjust Tailwind colors to the warmer palette.
- Add font-family tokens for heading and body stacks.
- Keep dependencies unchanged unless a later decision explicitly adds Google Fonts through Next font handling.

### Step 2: Refactor Page Data

- Move section content into local arrays where useful.
- Keep all copy original and legal-safe.
- Avoid hard-coded commercial lyric examples.

### Step 3: Redesign Hero

- Rework the first viewport around Sing Pronunce Repeat, English with Lyrics, the learner problem, and a micro-lesson preview.
- Make the primary CTA the waitlist or ebook based on the validation priority.

### Step 4: Redesign Core Sections

- Problem section: learner moments.
- Method section: signature treatment for Escríbelo como suena.
- How it works: 60-second micro-lesson sequence.
- Ebook: resource-style visual block.
- Founder access: invitation and early-access framing.
- Waitlist/survey: clearer capture area.

### Step 5: Preserve Legal Boundaries

- Keep the legal-safe note visible.
- Use generic educational sample phrases only.
- Add footer reminder that the product does not publish full lyrics.

### Step 6: Validate

- Run `npm run lint`.
- Run `npm run build`.
- Run a desktop and mobile browser smoke check.
- Check for no horizontal overflow on mobile.
- Check that CTAs are visible in the first and final sections.

## Success Criteria

The redesigned landing should:

- Feel clearly connected to Sing Pronunce Repeat, English with Lyrics, and music learning.
- Speak directly to Spanish-speaking learners.
- Explain Escríbelo como suena in a memorable way.
- Make the free ebook and founder access easier to understand.
- Preserve the legal-safe educational positioning.
- Remain simple enough for Phase 0 validation.
