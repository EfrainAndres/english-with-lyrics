# Phase 0 Ebook Page Architecture

## Owner review decision

```text
Architecture base: APPROVED
Initial owner decision: CHANGES REQUESTED
Requested architecture revision: COMPLETE
Revised target page count: 32
Owner architecture approval: APPROVED
Architecture gate: PASS
```

This revision implements all requested changes. The 32-page architecture has been reviewed and approved by the project owner. All changes requested in the initial owner review have been satisfied. Copywriting may proceed in a separate branch. PDF implementation remains blocked until copy, links, QR requirements and design pass their own approval gates.

## Architecture decision

Recommended final page count: **32 pages**.

Thirty-two A5 portrait pages are sufficient to preserve the three songs and nine short practices while adding the missing orientation, progress, active review, three-day challenge, self-assessment and continuation layers. The proposal adds eleven net pages to the current 21-page artifact, but only seven pages are wholly new; the remaining growth comes from separating content that is currently crowded or functionally mixed. Two of those pages exist specifically to keep the brand mission, future-product positioning and survey from competing on one page — each now has its own page with a single purpose. The range remains intentionally controlled: no page is added elsewhere merely to increase the count.

Final format decisions:

- One digital PDF only.
- Printable version: postponed.
- EPUB: postponed.
- Kindle: postponed.
- Paid ebook: postponed.
- Subscription platform: postponed.
- Existing public filename remains unchanged during later implementation.
- Current PDF remains the implementation base, not the final Production asset.

## Reusable page contracts

The implementation should reuse four page families:

1. **Opening pages:** one primary message, no more than three supporting blocks and generous whitespace.
2. **Song introductions:** title, artist reference, text-plus-visual difficulty, reason, listening focus, verified official link, QR and journey position.
3. **Practice pages:** approved short fragment, `Escríbelo como suena`, natural meaning, vocabulary, original example, one active exercise, listen/repeat instruction and completion marker.
4. **Completion pages:** three-expression review (approved short expression, natural meaning, song/practice reference and recall-without-looking checkbox, one expression per isolated table row), personal sentence, difficult-sound reflection, confidence check and accumulated progress.

Global acceptance rules:

- A5 portrait, dark visual direction and existing brand hierarchy remain.
- Core body copy and interactive labels remain readable on phone/tablet PDF viewers.
- Secondary text meets a deliberately stronger contrast target than the current muted copy.
- Difficulty and progress use text plus a visual indicator; color is never the only cue.
- Each official-source or continuation QR is paired with a visible, clickable HTTPS link.
- No full lyrics, complete verses, full translations, artist faces, album artwork, official logos or affiliation implications.
- No invented product, bonus, result, testimonial, count, date or URL.
- Writing activities have adequate physical space in the digital page.
- Headers, footers and page numbers follow one consistent system.
- Expression-review tables use only the already approved short expression per row; no adjacent lines, translations beyond the approved natural meaning, or lyric-like combination of expressions are added.

## Opening

### Final page 1 — Cover

- **Page objective:** State the promise, identity and scope immediately.
- **Status:** MODIFIED.
- **Source page or content:** Current page 1.
- **Exact content blocks:** Official brand; secondary identity; method; title; “3 canciones · 9 prácticas”; one-sentence listening/pronunciation/vocabulary promise; concise audience label.
- **Approximate text density:** Very low, 45–70 words.
- **Visual components:** Existing dark cover, title lockup, method badge and restrained music/rhythm motif without artist imagery.
- **User interaction or writing activity:** None.
- **Progress indicator:** “Inicio” text label only.
- **Link or QR requirement:** None.
- **CTA role:** Establish value, not conversion.
- **Rights/copyright consideration:** No song lyrics, artwork, logos or affiliation claim.
- **Required placeholder or dependency:** None.
- **Acceptance criteria:** Official `Sing Pronunce Repeat` spelling is prominent; `English with Lyrics` remains secondary; title is readable at thumbnail size; no crowded copy.

### Final page 2 — Bienvenida, para quién es y alcance

- **Page objective:** Help the learner decide quickly whether the guide fits and how much time it needs.
- **Status:** MERGED.
- **Source page or content:** Current page 2 welcome, audience, inclusions, exclusions and completion-time blocks.
- **Exact content blocks:** Welcome; “Esta guía es para ti si…”; what it includes; what it does not include; estimated 30–45 minute first pass; optional 10–15 minute daily reuse.
- **Approximate text density:** Medium, 150–190 words.
- **Visual components:** Two-column or stacked “incluye/no incluye” cards and a time chip.
- **User interaction or writing activity:** One checkbox: “Quiero mejorar escuchando y repitiendo”.
- **Progress indicator:** “Preparación · 1 de 5”.
- **Link or QR requirement:** None.
- **CTA role:** Commitment to begin.
- **Rights/copyright consideration:** Explicitly states that the guide does not replace official audio or a lyrics service.
- **Required placeholder or dependency:** None.
- **Acceptance criteria:** Audience, scope and time are scannable; exclusions remain clear; no promise of fluency or guaranteed result.

### Final page 3 — Transformación y resultados de aprendizaje

- **Page objective:** Convert the guide’s promise into observable, realistic outcomes.
- **Status:** NEW.
- **Source page or content:** Implicit promises from current pages 1–3 and current self-check concepts.
- **Exact content blocks:** “Antes” learner state; “Después de completar la guía” state; four outcomes—identify short expressions in audio, use a pronunciation bridge, understand natural meaning, produce a personal sentence; reminder that progress comes from repetition.
- **Approximate text density:** Low–medium, 110–150 words.
- **Visual components:** Before/after path and four outcome cards.
- **User interaction or writing activity:** Select one priority outcome.
- **Progress indicator:** “Preparación · 2 de 5”.
- **Link or QR requirement:** None.
- **CTA role:** Motivate completion.
- **Rights/copyright consideration:** Outcomes describe skills, not access to song text.
- **Required placeholder or dependency:** New copy approval.
- **Acceptance criteria:** Outcomes are measurable and modest; no invented result or testimonial; selection works in print-like PDF annotation-free use.

### Final page 4 — El método: qué hace y qué no hace

- **Page objective:** Define `Escríbelo como suena` responsibly.
- **Status:** MODIFIED.
- **Source page or content:** Current page 3 method introduction and caveat.
- **Exact content blocks:** Method definition; practical-bridge statement; “sí busca” list; “no busca” list; compact notation legend for stress, separators, soft-air cue and temporary supports; invitation to return to official audio.
- **Approximate text density:** Medium, 150–190 words.
- **Visual components:** Method card, paired “sí/no” columns and notation legend.
- **User interaction or writing activity:** None.
- **Progress indicator:** “Preparación · 3 de 5”.
- **Link or QR requirement:** None.
- **CTA role:** Prevent misuse and set a safe learning model.
- **Rights/copyright consideration:** Original method explanation; official audio remains the authority.
- **Required placeholder or dependency:** Qualified pronunciation consistency review.
- **Acceptance criteria:** No IPA; no claim of exact pronunciation; notation rules are consistent with all nine practices; English `h`, `th`, clusters and stress are explained conservatively.

### Final page 5 — Cómo usar cada práctica

- **Page objective:** Teach the repeatable learning loop before the songs begin.
- **Status:** MODIFIED.
- **Source page or content:** Current page 3 four-step sequence and current practice-card labels.
- **Exact content blocks:** 1 Escucha; 2 Lee la guía; 3 Comprende; 4 Repite; 5 Produce una frase propia; explanation of fragment, meaning, vocabulary, example, exercise and completion marker.
- **Approximate text density:** Medium, 130–170 words.
- **Visual components:** Five numbered steps and miniature practice-card map.
- **User interaction or writing activity:** Check “Tengo listo un lugar para escuchar y repetir”.
- **Progress indicator:** “Preparación · 4 de 5”.
- **Link or QR requirement:** None.
- **CTA role:** Begin intentionally.
- **Rights/copyright consideration:** Instructs learners to use official sources and only the selected short fragments.
- **Required placeholder or dependency:** Final practice-template labels.
- **Acceptance criteria:** Sequence is unambiguous; active production is included; no extra copyrighted text is introduced.

### Final page 6 — Tu recorrido musical

- **Page objective:** Preview the three-song journey and make progress visible.
- **Status:** NEW.
- **Source page or content:** Song order and levels from current divider pages.
- **Exact content blocks:** Three-song route; title and artist reference; suggested level; listening focus; completion milestones at 33%, 66% and 100%; three-day challenge preview.
- **Approximate text density:** Low, 80–120 words.
- **Visual components:** Three-stop horizontal or vertical journey, text-labeled progress states and difficulty legend.
- **User interaction or writing activity:** Circle the song expected to be easiest and hardest.
- **Progress indicator:** “Preparación · 5 de 5”.
- **Link or QR requirement:** None; official destinations live on each song page.
- **CTA role:** Start Song 1.
- **Rights/copyright consideration:** Titles and artist references only.
- **Required placeholder or dependency:** Final difficulty scale labels.
- **Acceptance criteria:** Song order and levels match the practice sequence; progress is understandable without color.

## Song 1

### Final page 7 — Canción 1: A Thousand Years

- **Page objective:** Prepare focused listening for Song 1.
- **Status:** MODIFIED.
- **Source page or content:** Current page 4.
- **Exact content blocks:** Song/artist identification; “Nivel sugerido: principiante–intermedio”; three-step visual difficulty indicator with text; why it helps; listening focus; primary educational-lesson CTA and QR; secondary official listening link; safety note to use official audio.
- **Approximate text density:** Low–medium, 100–140 words.
- **Visual components:** Song divider, difficulty meter, focus card, link button and QR.
- **User interaction or writing activity:** Check after first uninterrupted listen.
- **Progress indicator:** “Canción 1 de 3 · 0%”.
- **Link or QR requirement:** Clickable `SONG_1_LESSON_URL` plus matching QR, followed by clickable `SONG_1_OFFICIAL_URL` as the secondary original listening reference.
- **CTA role:** Open the educational lesson; retain the official source for final listening.
- **Rights/copyright consideration:** No artwork, embedded audio or lyric expansion.
- **Required placeholder or dependency:** Verified educational lesson URL, verified official listening URL and tested QR.
- **Acceptance criteria:** Text and visual difficulty agree; QR and primary CTA resolve to the educational lesson; secondary original link remains distinct; no third-party branding imitation.

### Final page 8 — Song 1 — Practice 1

- **Page objective:** Learn and reproduce the first approved expression.
- **Status:** PRESERVED.
- **Source page or content:** Current page 5; Song 1 — Practice 1.
- **Exact content blocks:** Approved short fragment unchanged; normalized pronunciation; natural meaning; contextual vocabulary; original example and translation; one active comprehension/production exercise; listen/repeat instruction; completion checkbox.
- **Approximate text density:** Medium–high, 180–230 words.
- **Visual components:** Existing labeled practice card with stronger secondary contrast and larger minimum text.
- **User interaction or writing activity:** Exercise response plus completion checkbox.
- **Progress indicator:** “Canción 1 · Práctica 1 de 3”.
- **Link or QR requirement:** Back-reference to page 7 official-source action; no repeated QR required.
- **CTA role:** Complete one micro-lesson.
- **Rights/copyright consideration:** Preserve only the already approved short fragment.
- **Required placeholder or dependency:** Pronunciation notation consistency pass.
- **Acceptance criteria:** All seven teaching blocks fit without clipping; exercise requires learner action; no new song text.

### Final page 9 — Song 1 — Practice 2

- **Page objective:** Learn and use the second approved expression.
- **Status:** PRESERVED.
- **Source page or content:** Current page 6; Song 1 — Practice 2.
- **Exact content blocks:** Same practice template; rendered grammatical example retained; content-source typo corrected during later copy implementation.
- **Approximate text density:** Medium–high, 180–230 words.
- **Visual components:** Standard practice card.
- **User interaction or writing activity:** Original sentence or choice plus completion checkbox.
- **Progress indicator:** “Canción 1 · Práctica 2 de 3”.
- **Link or QR requirement:** Page 7 source reference.
- **CTA role:** Continue Song 1.
- **Rights/copyright consideration:** Existing short fragment only.
- **Required placeholder or dependency:** Reconciled canonical source text and pronunciation consistency pass.
- **Acceptance criteria:** Source and rendered example agree; meaning stays contextual; no overflow.

### Final page 10 — Song 1 — Practice 3

- **Page objective:** Complete the third expression and transfer it to personal use.
- **Status:** PRESERVED.
- **Source page or content:** Current page 7; Song 1 — Practice 3.
- **Exact content blocks:** Standard practice template with connected-speech note, active personal-use prompt and repetition check.
- **Approximate text density:** Medium–high, maximum 230 words.
- **Visual components:** Standard practice card with controlled note length.
- **User interaction or writing activity:** Personal sentence with two writing lines.
- **Progress indicator:** “Canción 1 · Práctica 3 de 3”.
- **Link or QR requirement:** Page 7 source reference.
- **CTA role:** Finish the song practices.
- **Rights/copyright consideration:** Existing short fragment only.
- **Required placeholder or dependency:** Final copy-density edit.
- **Acceptance criteria:** Personal response area is usable; long notes do not reduce body size below the standard.

### Final page 11 — Cierre de Canción 1

- **Page objective:** Consolidate Song 1 and make the first milestone visible.
- **Status:** MODIFIED.
- **Source page or content:** Current page 8 plus the three Song 1 practice outcomes.
- **Exact content blocks:** Three-row expression-review table for Song 1's three approved short expressions — each row holds the approved short expression, its natural meaning, its song/practice reference and a recall-without-looking checkbox, with no adjacent lines or combined lyric-like paragraph; one personal sentence; difficult-sound reflection; confidence 1–5; song completion checkbox.
- **Approximate text density:** Medium, 120–170 words plus writing space.
- **Visual components:** Compact review table, writing field, confidence scale and labeled progress bar.
- **User interaction or writing activity:** Three recall checks, sentence, sound reflection and confidence selection.
- **Progress indicator:** “1 de 3 canciones · 33%”.
- **Link or QR requirement:** None.
- **CTA role:** Continue to Song 2 after meaningful completion.
- **Rights/copyright consideration:** Review table uses only the three already approved short expressions for Song 1, one per isolated row; no additional translation or reconstructed fragment text is added.
- **Required placeholder or dependency:** Final meanings from approved practice copy.
- **Acceptance criteria:** Writing spaces are usable; 33% appears as text and visual; no empty half-page.

## Song 2

### Final page 12 — Canción 2: Still Loving You

- **Page objective:** Prepare focused listening for Song 2.
- **Status:** MODIFIED.
- **Source page or content:** Current page 9.
- **Exact content blocks:** Song/artist identification; intermediate difficulty text and visual; why it helps; listening focus; preserved singer-accent caveat; primary educational-lesson CTA and QR; secondary official listening link.
- **Approximate text density:** Low–medium, 110–150 words.
- **Visual components:** Standard song divider, difficulty meter, accent note, link and QR.
- **User interaction or writing activity:** Check after the first listen.
- **Progress indicator:** “Canción 2 de 3 · 33% acumulado”.
- **Link or QR requirement:** Clickable `SONG_2_LESSON_URL` plus matching QR, followed by clickable `SONG_2_OFFICIAL_URL` as the secondary original listening reference.
- **CTA role:** Open the educational lesson; retain the official source for final listening.
- **Rights/copyright consideration:** No artwork, audio or affiliation implication.
- **Required placeholder or dependency:** Verified educational lesson URL, verified official listening URL and tested QR.
- **Acceptance criteria:** Accent note distinguishes source listening from neutral teaching target; QR and primary CTA match; secondary original link remains distinct.

### Final page 13 — Song 2 — Practice 1

- **Page objective:** Recognize and use the first Song 2 expression.
- **Status:** PRESERVED.
- **Source page or content:** Current page 10; Song 2 — Practice 1.
- **Exact content blocks:** Standard practice template; replace passive confirmation with one recall or production prompt while preserving meaning and example.
- **Approximate text density:** Medium–high, 180–225 words.
- **Visual components:** Standard practice card.
- **User interaction or writing activity:** Recall/production response and completion checkbox.
- **Progress indicator:** “Canción 2 · Práctica 1 de 3”.
- **Link or QR requirement:** Page 12 source reference.
- **CTA role:** Start Song 2 practice.
- **Rights/copyright consideration:** Existing approved short fragment only.
- **Required placeholder or dependency:** Exercise-copy revision.
- **Acceptance criteria:** Learner must produce or recall; contextual explanation stays concise.

### Final page 14 — Song 2 — Practice 2

- **Page objective:** Practice rhythm and contextual use.
- **Status:** PRESERVED.
- **Source page or content:** Current page 11; Song 2 — Practice 2.
- **Exact content blocks:** Standard practice template; natural-meaning alternatives labeled by context; original personal sentence exercise.
- **Approximate text density:** Medium–high, 180–225 words.
- **Visual components:** Standard practice card with context tags.
- **User interaction or writing activity:** One original sentence and completion checkbox.
- **Progress indicator:** “Canción 2 · Práctica 2 de 3”.
- **Link or QR requirement:** Page 12 source reference.
- **CTA role:** Continue active production.
- **Rights/copyright consideration:** Existing short fragment only.
- **Required placeholder or dependency:** Context-label copy edit.
- **Acceptance criteria:** Alternatives are not presented as universal synonyms; response area is sufficient.

### Final page 15 — Song 2 — Practice 3

- **Page objective:** Practice difficult consonants and contextual meaning.
- **Status:** PRESERVED.
- **Source page or content:** Current page 12; Song 2 — Practice 3.
- **Exact content blocks:** Standard practice template; shared method reference for `th`/final consonant; one sound-versus-spelling check; repetition instruction.
- **Approximate text density:** Medium–high, maximum 225 words.
- **Visual components:** Standard practice card plus compact articulation cue.
- **User interaction or writing activity:** Sound distinction and completion checkbox.
- **Progress indicator:** “Canción 2 · Práctica 3 de 3”.
- **Link or QR requirement:** Page 12 source reference.
- **CTA role:** Finish Song 2 practices.
- **Rights/copyright consideration:** Existing short fragment only.
- **Required placeholder or dependency:** Qualified pronunciation review.
- **Acceptance criteria:** Articulation cue is practical and non-IPA; content fits without shrinking or clipping.

### Final page 16 — Cierre de Canción 2

- **Page objective:** Consolidate Song 2 and connect it with prior learning.
- **Status:** MODIFIED.
- **Source page or content:** Current page 13 plus Song 2 outcomes.
- **Exact content blocks:** Three-row expression-review table for Song 2's three approved short expressions — each row holds the approved short expression, its natural meaning, its song/practice reference and a recall-without-looking checkbox, with no adjacent lines or combined lyric-like paragraph; personal sentence; difficult-sound reflection; one comparison with Song 1; confidence 1–5; completion checkbox.
- **Approximate text density:** Medium, 130–175 words plus writing space.
- **Visual components:** Review table, writing field, confidence scale and progress bar.
- **User interaction or writing activity:** Recall, sentence, comparison, reflection and confidence.
- **Progress indicator:** “2 de 3 canciones · 66%”.
- **Link or QR requirement:** None.
- **CTA role:** Continue to Song 3.
- **Rights/copyright consideration:** Review table uses only the three already approved short expressions for Song 2, one per isolated row; no additional translation or reconstructed fragment text is added.
- **Required placeholder or dependency:** Final practice meanings.
- **Acceptance criteria:** 66% is explicit in text and visual; no underfilled page; comparison does not introduce new fragments.

## Song 3

### Final page 17 — Canción 3: The Reason

- **Page objective:** Prepare focused listening for Song 3.
- **Status:** MODIFIED.
- **Source page or content:** Current page 14.
- **Exact content blocks:** Song/artist identification; intermediate difficulty text and visual; why it helps; listening focus; primary educational-lesson CTA and QR; secondary official listening link.
- **Approximate text density:** Low–medium, 100–140 words.
- **Visual components:** Standard song divider, difficulty meter, link and QR.
- **User interaction or writing activity:** Check after first listen.
- **Progress indicator:** “Canción 3 de 3 · 66% acumulado”.
- **Link or QR requirement:** Clickable `SONG_3_LESSON_URL` plus matching QR, followed by clickable `SONG_3_OFFICIAL_URL` as the secondary original listening reference.
- **CTA role:** Open the educational lesson; retain the official source for final listening.
- **Rights/copyright consideration:** No artwork, embedded audio or affiliation claim.
- **Required placeholder or dependency:** Verified educational lesson URL, verified official listening URL and tested QR.
- **Acceptance criteria:** QR and primary CTA match; secondary original link remains distinct; level is conveyed with words and shape/count, not color alone.

### Final page 18 — Song 3 — Practice 1

- **Page objective:** Practice connected speech and a transition expression.
- **Status:** PRESERVED.
- **Source page or content:** Current page 15; Song 3 — Practice 1.
- **Exact content blocks:** Standard practice template; consistent soft-air guidance; natural meaning; original example; active exercise; repetition.
- **Approximate text density:** Medium–high, 180–225 words.
- **Visual components:** Standard practice card.
- **User interaction or writing activity:** Active response and completion checkbox.
- **Progress indicator:** “Canción 3 · Práctica 1 de 3”.
- **Link or QR requirement:** Page 17 source reference.
- **CTA role:** Start Song 3 practice.
- **Rights/copyright consideration:** Existing approved short fragment only.
- **Required placeholder or dependency:** Qualified soft-air notation review.
- **Acceptance criteria:** Guidance cannot reasonably be read as prescribing a harsh guttural sound; no overflow.

### Final page 19 — Song 3 — Practice 2

- **Page objective:** Practice English rhythm and honest personal expression.
- **Status:** PRESERVED.
- **Source page or content:** Current page 16; Song 3 — Practice 2.
- **Exact content blocks:** Standard practice template; normalized rhythm notation; original example; self-assessment exercise; repetition.
- **Approximate text density:** Medium–high, 180–225 words.
- **Visual components:** Standard practice card.
- **User interaction or writing activity:** Rhythm choice and completion checkbox.
- **Progress indicator:** “Canción 3 · Práctica 2 de 3”.
- **Link or QR requirement:** Page 17 source reference.
- **CTA role:** Continue Song 3.
- **Rights/copyright consideration:** Existing approved short fragment only.
- **Required placeholder or dependency:** Notation consistency pass.
- **Acceptance criteria:** Stress cue matches the method legend; lower repetition block remains inside safe area.

### Final page 20 — Song 3 — Practice 3

- **Page objective:** Reduce a temporary Spanish support sound and create a personal sentence.
- **Status:** PRESERVED.
- **Source page or content:** Current page 17; Song 3 — Practice 3.
- **Exact content blocks:** Standard practice template; temporary initial-cluster support and reduction goal; natural meaning; original example; two-line personal sentence; repetition.
- **Approximate text density:** Medium–high, maximum 225 words.
- **Visual components:** Standard practice card with “apoyo → reducción” cue.
- **User interaction or writing activity:** Personal sentence, reduction reflection and completion checkbox.
- **Progress indicator:** “Canción 3 · Práctica 3 de 3”.
- **Link or QR requirement:** Page 17 source reference.
- **CTA role:** Finish the nine practices.
- **Rights/copyright consideration:** Existing approved short fragment only.
- **Required placeholder or dependency:** Final pronunciation review.
- **Acceptance criteria:** Temporary support is not presented as the target pronunciation; response area remains usable.

### Final page 21 — Cierre de Canción 3

- **Page objective:** Complete Song 3 and the musical journey.
- **Status:** MODIFIED.
- **Source page or content:** Current page 18 plus Song 3 outcomes.
- **Exact content blocks:** Three-row expression-review table for Song 3's three approved short expressions — each row holds the approved short expression, its natural meaning, its song/practice reference and a recall-without-looking checkbox, with no adjacent lines or combined lyric-like paragraph; personal sentence; difficult-sound reflection; confidence 1–5; “qué cambió desde la canción 1”; completion checkbox.
- **Approximate text density:** Medium, 130–175 words plus writing space.
- **Visual components:** Review table, reflection area, confidence scale and complete progress bar.
- **User interaction or writing activity:** Recall, sentence, sound reflection, change reflection and confidence.
- **Progress indicator:** “3 de 3 canciones · 100%”.
- **Link or QR requirement:** None.
- **CTA role:** Celebrate completion and enter consolidated review.
- **Rights/copyright consideration:** Review table uses only the three already approved short expressions for Song 3, one per isolated row; no additional fragment reproduction.
- **Required placeholder or dependency:** Final practice meanings.
- **Acceptance criteria:** 100% is explicit in text and visual; current all-song prompt is placed here only if it supports consolidation.

## Final learning section

### Final page 22 — Repaso de expresiones 1–5

- **Page objective:** Retrieve the first five practices without relying on page order.
- **Status:** NEW.
- **Source page or content:** Meanings and song associations from practices 1–5.
- **Exact content blocks:** Five-row expression-review table covering the first five practices — each row holds the approved short expression, its natural meaning, its song/practice reference and a “la recuerdo sin mirar” recall-without-looking checkbox, with no adjacent lines or combined lyric-like paragraph; one instruction to verify after attempting recall.
- **Approximate text density:** Medium, 100–140 words plus table.
- **Visual components:** High-contrast review table and five checkboxes.
- **User interaction or writing activity:** Five recall checks.
- **Progress indicator:** “Repaso final · 1 de 2”.
- **Link or QR requirement:** None.
- **CTA role:** Strengthen retention before conversion.
- **Rights/copyright consideration:** Each of the five already approved short expressions occupies its own isolated table row; do not reproduce the five fragments together as a combined passage.
- **Required placeholder or dependency:** Approved concise meanings.
- **Acceptance criteria:** Song and meaning columns remain readable; learner attempts recall before checking prior pages.

### Final page 23 — Repaso de expresiones 6–9 y mis tres elegidas

- **Page objective:** Complete consolidated recall and select the three most useful expressions.
- **Status:** NEW.
- **Source page or content:** Practices 6–9 and existing self-reflection prompts.
- **Exact content blocks:** Four-row expression-review table covering the remaining four practices — each row holds the approved short expression, its natural meaning, its song/practice reference and a recall-without-looking checkbox, with no adjacent lines or combined lyric-like paragraph; three selection fields for the learner's three most useful expressions across all nine; one reason field; one plan for using an expression this week.
- **Approximate text density:** Medium, 100–150 words plus writing space.
- **Visual components:** Review table, numbered choice cards and writing lines.
- **User interaction or writing activity:** Four recall checks, choose three expressions and write one use plan.
- **Progress indicator:** “Repaso final · 2 de 2”.
- **Link or QR requirement:** None.
- **CTA role:** Convert recognition into personally relevant use.
- **Rights/copyright consideration:** No aggregate lyric block; each remaining expression stays in its own isolated row and selected items are referenced by song/practice reference, not reproduced.
- **Required placeholder or dependency:** Approved concise meanings.
- **Acceptance criteria:** Exactly three choices can be recorded; enough space exists for one personal plan.

### Final page 24 — Reto de tres días: Día 1

- **Page objective:** Reconnect text with official audio.
- **Status:** MODIFIED.
- **Source page or content:** Current page 19, Day 1.
- **Exact content blocks:** 10–15 minute estimate; listen to each official source; identify practiced expressions; revisit meanings; record one difficult sound; completion checkbox; brief reflection.
- **Approximate text density:** Low–medium, 100–140 words.
- **Visual components:** Day card, timer chip, four-step list and reflection box.
- **User interaction or writing activity:** Difficult-sound note and completion check.
- **Progress indicator:** “Reto · Día 1 de 3”.
- **Link or QR requirement:** References verified song-source pages 7, 12 and 17; no duplicate QR required.
- **CTA role:** Continue the challenge.
- **Rights/copyright consideration:** No added excerpts.
- **Required placeholder or dependency:** Final internal page-reference check.
- **Acceptance criteria:** Can be completed independently in 10–15 minutes; reflection area is usable.

### Final page 25 — Reto de tres días: Día 2

- **Page objective:** Compare personal pronunciation with official audio.
- **Status:** MODIFIED.
- **Source page or content:** Current page 19, Day 2.
- **Exact content blocks:** Revisit pronunciation bridges; repeat selected practices; optional self-recording; compare one feature; note one improvement target; completion checkbox.
- **Approximate text density:** Low–medium, 100–140 words.
- **Visual components:** Day card, comparison columns and reflection box.
- **User interaction or writing activity:** Record one observed difference and one next attempt.
- **Progress indicator:** “Reto · Día 2 de 3”.
- **Link or QR requirement:** References song-source pages.
- **CTA role:** Continue to recall and use.
- **Rights/copyright consideration:** Recording is personal practice; guide distributes no audio.
- **Required placeholder or dependency:** None beyond verified source links.
- **Acceptance criteria:** Self-recording remains optional; no claim of perfect pronunciation; task fits 10–15 minutes.

### Final page 26 — Reto de tres días: Día 3

- **Page objective:** Recall and use learning without looking first.
- **Status:** MODIFIED.
- **Source page or content:** Current page 19, Day 3, excluding the premature survey.
- **Exact content blocks:** Recall one practice per song; use one expression in an original sentence; revisit only after attempting; choose one ongoing habit; completion checkbox.
- **Approximate text density:** Low–medium, 100–140 words plus writing space.
- **Visual components:** Three recall slots, one sentence field and habit card.
- **User interaction or writing activity:** Three recalls, one original sentence, one habit selection.
- **Progress indicator:** “Reto · Día 3 de 3 · Completado”.
- **Link or QR requirement:** None.
- **CTA role:** Finish the learning sequence before self-assessment.
- **Rights/copyright consideration:** Recall uses practice IDs; no prompt to reconstruct lyrics.
- **Required placeholder or dependency:** None.
- **Acceptance criteria:** Survey is absent; learner receives full value before any conversion request.

### Final page 27 — Autochequeo final

- **Page objective:** Capture the learner’s self-assessment and next priority.
- **Status:** MODIFIED.
- **Source page or content:** Current page 20 activity checklist and scales.
- **Exact content blocks:** Completion checklist; 1–5 scales for listening, pronunciation, vocabulary and confidence; “mi siguiente prioridad”; one evidence prompt (“¿qué puedes hacer ahora que antes costaba?”).
- **Approximate text density:** Medium, 100–140 words plus scales.
- **Visual components:** Accessible checkboxes, four labeled scales and next-step card.
- **User interaction or writing activity:** Checklist, four ratings and one next priority.
- **Progress indicator:** “Aprendizaje completado”.
- **Link or QR requirement:** None.
- **CTA role:** Confirm value before continuation.
- **Rights/copyright consideration:** No song content required.
- **Required placeholder or dependency:** Final scale labels.
- **Acceptance criteria:** Listening, pronunciation, vocabulary and confidence all appear; controls are large enough; color is not the only rating cue.

## Continuation and conversion

### Final page 28 — ¿Quieres seguir practicando?

- **Page objective:** Offer one clear, realistic next step.
- **Status:** MODIFIED.
- **Source page or content:** Current page 20 continuation section.
- **Exact content blocks:** Required heading “¿Quieres seguir practicando?”; short value recap; realistic future benefits such as more short practices, pronunciation guidance and learning exercises; one primary CTA; visible destination text; privacy-respect note if the destination collects data.
- **Approximate text density:** Low, 80–120 words.
- **Visual components:** One primary CTA card, matching QR and visible URL; no competing button.
- **User interaction or writing activity:** Open the verified continuation destination.
- **Progress indicator:** “Siguiente paso · Opcional”.
- **Link or QR requirement:** `{{CONTINUE_PRACTICING_URL}}` and matching QR.
- **CTA role:** Sole primary continuation CTA.
- **Rights/copyright consideration:** No promise of unapproved content, product, schedule or result.
- **Required placeholder or dependency:** Verified continuation destination, consent/legal-link review if data is collected and tested QR.
- **Acceptance criteria:** Exactly one primary CTA; visible URL matches annotation and QR; unresolved destination blocks final generation.

### Final page 29 — ¿Por qué existe Sing Pronunce Repeat?

- **Page objective:** Explain the educational mission and situate `Escríbelo como suena` as a bridge toward real audio, not a replacement.
- **Status:** NEW.
- **Source page or content:** New brand-mission copy; replaces the mission portion of the removed merged final page 29. No current page maps directly.
- **Exact content blocks:** Short learner problem; two-to-three sentence mission describing music, emotion, listening and repetition as a practical learning path; “Escucha. Lee. Repite. Usa lo aprendido.”; practical-bridge reminder that `Escríbelo como suena` supports, not replaces, official audio.
- **Approximate text density:** Low, 90–130 words.
- **Visual components:** Mission card with brand identity treatment; no interactive control.
- **User interaction or writing activity:** None.
- **Progress indicator:** “Nuestra misión”.
- **Link or QR requirement:** None required; an optional discreet `{{YOUTUBE_CHANNEL_URL}}` footer link or non-competing text link may appear only if verified.
- **CTA role:** Brand trust only; no commercial CTA.
- **Rights/copyright consideration:** No personal creator name; no artist affiliation implication; official `Sing Pronunce Repeat` spelling used.
- **Required placeholder or dependency:** Approved mission copy; optional verified `{{YOUTUBE_CHANNEL_URL}}`.
- **Acceptance criteria:** No commercial CTA appears; mission reads as educational, not promotional; the method is explicitly framed as a bridge to official audio, not a replacement.

### Final page 30 — Próximo paso

- **Page objective:** Present a possible future learning product without claiming it exists.
- **Status:** NEW.
- **Source page or content:** Future-product positioning previously folded into the removed merged final page 29. No current page maps directly.
- **Exact content blocks:** Cautious, non-committal language only (“Estamos preparando…”, “Podrá incluir…”, “Estamos explorando…”); possible learner-facing content limited to more songs, guided pronunciation, useful expressions, exercises, short challenges and complementary learning material.
- **Approximate text density:** Low, 70–110 words.
- **Visual components:** Subdued “future” card; optional waitlist CTA card, QR and visible URL only when a real destination is approved and verified.
- **User interaction or writing activity:** None required; optional waitlist action only.
- **Progress indicator:** “Próximo paso · Opcional”.
- **Link or QR requirement:** `{{ADVANCED_EBOOK_WAITLIST_URL}}` and matching QR only if a real, approved and verified destination exists; otherwise the button, QR and any interactive-looking control are omitted entirely rather than shown disabled or invented.
- **CTA role:** Optional future-product waitlist only when real and verified.
- **Rights/copyright consideration:** No mention of EPUB, Kindle, printable versions, internal implementation formats, payment or subscription unless later explicitly approved; no feature described that does not exist.
- **Required placeholder or dependency:** `{{ADVANCED_EBOOK_WAITLIST_URL}}` verification, or explicit omission of the action if unresolved.
- **Acceptance criteria:** Language never claims the product currently exists; no invented destination, bonus or schedule; the placeholder does not block the architecture when the action is omitted, but blocks final PDF generation if rendered as an actionable control while unresolved.

### Final page 31 — Ayúdanos a mejorar

- **Page objective:** Invite optional feedback only after all educational value and the primary continuation action have been delivered.
- **Status:** NEW.
- **Source page or content:** Current page 19/20 survey concept, isolated into its own dedicated page. Replaces the survey portion of the removed merged final page 29.
- **Exact content blocks:** Short thank-you; two-minute survey-time expectation only if accurate; questions may cover useful section, difficulty, future songs and advanced-material interest; privacy-context note when applicable; one secondary survey CTA with matching visible URL and QR.
- **Approximate text density:** Low, 70–100 words.
- **Visual components:** Single survey CTA card with QR; no competing button, channel link or waitlist control.
- **User interaction or writing activity:** Optional survey.
- **Progress indicator:** “Tu opinión · Opcional”.
- **Link or QR requirement:** `{{SURVEY_URL}}` plus matching QR.
- **CTA role:** One optional secondary survey CTA.
- **Rights/copyright consideration:** No song content required; no additional fragment reproduction.
- **Required placeholder or dependency:** Survey destination, question set and privacy-context verification.
- **Acceptance criteria:** Exactly one CTA on the page; no waitlist, channel link or second button competes; visible URL matches the QR payload; survey follows all prior value delivery.

### Final page 32 — Nota educativa y de derechos

- **Page objective:** Close with the established educational and copyright boundaries.
- **Status:** PRESERVED.
- **Source page or content:** Current page 21. Moved from final page 30 to final page 32 to make room for the separated mission, future-product and survey pages.
- **Exact content blocks:** Short-fragment purpose; rights ownership; official-source audio rule; original educational contribution; no affiliation; no legal-guarantee statement; canonical brand/footer.
- **Approximate text density:** Medium, approximately 190–240 words when copywriting is later performed, after careful tightening.
- **Visual components:** Four short legal sections with stronger body contrast and consistent footer.
- **User interaction or writing activity:** None.
- **Progress indicator:** “Fin”.
- **Link or QR requirement:** Optional canonical-domain text using `{{CANONICAL_DOMAIN}}`; no QR required.
- **CTA role:** None.
- **Rights/copyright consideration:** This page is the primary safeguard and may not be weakened during copy reduction. It must preserve short-fragment scope, no full lyrics, no commercial audio distribution, rights ownership, the official-source rule, original method/exercises, no affiliation and no absolute legal-protection claim.
- **Required placeholder or dependency:** Final legal/editorial check of shortened language.
- **Acceptance criteria:** No full lyrics or translations; no ownership/affiliation claim; readable body size at A5 phone-viewing scale; official brand correct.

## CTA hierarchy

```text
Page 28: Sole primary continuation CTA.
Page 29: No CTA; mission and trust.
Page 30: Optional future-product waitlist only when real and verified.
Page 31: One optional secondary survey CTA.
Page 32: No CTA.
```

The YouTube channel may appear only as a discreet verified footer link, or as a non-competing text link on the brand-mission page (final page 29). It must never become another primary or secondary button.

## Source disposition summary

| Final status | Pages | Count |
| --- | --- | ---: |
| NEW | 3, 6, 22, 23, 29, 30, 31 | 7 |
| PRESERVED | 8–10, 13–15, 18–20, 32 | 10 |
| MODIFIED | 1, 4–5, 7, 11–12, 16–17, 21, 24–28 | 14 |
| MERGED | 2 | 1 |

No current song or practice is removed. The current review pages 8, 13 and 18 are replaced by richer completion pages; current page 19 is split across three challenge pages; current page 20 is separated into self-check and primary continuation pages, and its remaining survey concept becomes final page 31. These changes, plus the three-way split of the brand mission, future-product positioning and survey into final pages 29–31, explain the eleven-page net growth.

## Destination dependency inventory

| Destination or omission | Purpose | Final value or decision | Verification result | QR required | Blocks final PDF generation |
| --- | --- | --- | --- | --- | --- |
| SONG_1_LESSON_URL | Primary Sing Pronunce Repeat educational lesson for Song 1 | `https://www.youtube.com/watch?v=si9YeTd8z1E` | VERIFIED | YES | YES |
| SONG_1_OFFICIAL_URL | Secondary original listening source for Song 1 | `https://www.youtube.com/watch?v=rtOvBOTyX00` | VERIFIED | NO | YES |
| SONG_2_LESSON_URL | Primary Sing Pronunce Repeat educational lesson for Song 2 | `https://www.youtube.com/watch?v=HetOzN4RtTY` | VERIFIED | YES | YES |
| SONG_2_OFFICIAL_URL | Secondary original listening source for Song 2 | `https://www.youtube.com/watch?v=7pOr3dBFAeY` | VERIFIED | NO | YES |
| SONG_3_LESSON_URL | Primary Sing Pronunce Repeat educational lesson for Song 3 | `https://www.youtube.com/watch?v=OYJRuJ18_Rg` | VERIFIED | YES | YES |
| SONG_3_OFFICIAL_URL | Secondary original listening source for Song 3 | `https://www.youtube.com/watch?v=fV4DiAyExN0` | VERIFIED | NO | YES |
| CONTINUE_PRACTICING_URL | Sole primary continuation action | `https://tally.so/r/D4a6NE` | VERIFIED | YES | YES |
| SURVEY_URL | Optional short feedback survey | `https://tally.so/r/eqzgbe` | VERIFIED | YES | YES |
| ADVANCED_EBOOK_WAITLIST_URL | Optional future-product interest on final page 30 | OMITTED — no approved advanced-ebook waitlist or product exists | OMITTED | NO | NO |
| YOUTUBE_CHANNEL_URL | Optional discreet footer link on final page 29 | OMITTED — optional and unnecessary for this ebook gate | OMITTED | NO | NO |
| CANONICAL_DOMAIN | Canonical project identity and footer reference | `https://singpronuncerepeat.com` | VERIFIED | NO | YES |

Rules for destinations:

- Never invent or shorten a destination.
- No unresolved destination token may remain in the generated learner-facing PDF.
- Each song QR payload and its primary visible/clickable educational-lesson URL must be identical. The original official song URL is a secondary text link and has no QR.
- Every QR must be scan-tested at rendered A5 size and after common phone zoom/compression.
- Optional unresolved destinations are omitted rather than converted into disabled, misleading or interactive-looking controls.
- The three educational lesson URLs, three original official song URLs, continuation URL, survey URL and canonical domain block final export when unresolved. The official source remains the final listening reference; the educational lesson is the primary QR continuation from the ebook. The advanced waitlist URL is omitted because no approved destination exists. The YouTube channel link is omitted and must never become another primary or secondary button.

```text
Required destinations resolved: 9 of 9
Required external links verified: 9 of 9
Song QR destination: educational lesson
Original song destination: secondary listening link
```

```text
Manual QR scan validation: PENDING
Link/QR gate: BLOCKED until manual scan PASS
```

## Approval and implementation gate

Page-by-page architecture approved by project owner: **APPROVED**.

Owner review of the prior 30-page architecture returned CHANGES REQUESTED; this 32-page revision implements all requested changes and has been approved. Copywriting and pronunciation-normalization phases may now proceed in a separate branch. PDF source editing, design implementation and PDF generation remain blocked until new-page copy, pronunciation normalization, link verification/QR creation and design implementation pass their own approval gates. After design and copy approval, work should proceed in separate, scoped phases for link verification/QR creation, design implementation, export and independent PDF QA.
