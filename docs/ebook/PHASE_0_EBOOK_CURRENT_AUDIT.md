# Phase 0 Current Ebook Audit

Audit status: COMPLETE

Canonical PDF located: YES

Source generator located: YES

Current page count: 21

Current PDF size: 1,322,844 bytes (approximately 1.26 MiB)

Current format: PDF 1.4, A5 portrait (420 × 594.96 pt), one digital version

Current Production suitability: NOT FINAL

## Decision

The current ebook is a useful implementation base, but it is not the final Production asset. Its mandatory improvements are a launch blocker. This phase recommends one improved digital PDF only; printable, EPUB, Kindle, paid-ebook and subscription-platform variants remain postponed.

The three songs and all nine short educational practices remain suitable. Approximately 80% of the useful educational content should be preserved. The highest-impact 20% to improve is the learner journey, pronunciation consistency, active review, progress feedback, link/QR usability, final conversion hierarchy and small-screen legibility.

## Artifact and workflow evidence

- Canonical artifact: `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- Production source: `docs/design/production/phase-0-ebook.html` and `docs/design/production/phase-0-ebook.css`.
- Learner-content source: `docs/content/PHASE_0_EBOOK_FINAL_CONTENT.md`.
- Reproducible generator: `scripts/export-ebook-pdf.sh`.
- Metadata patcher: `scripts/patch-pdf-metadata.py`.
- Pages visually inspected: all 21, rendered at approximately 200 DPI without OCR.
- Text: selectable on every page.
- Encryption: none.
- Page boxes: 21 consistent A5 portrait pages; no invalid or mixed page sizes observed.
- Metadata: title, author/organization, subject, keywords, creator and producer are present and use the official `Sing Pronunce Repeat` identity.
- Outline/bookmarks: none.
- Link annotations: seven HTTPS links; three official-song links, two survey links, one first-group link and one canonical ebook-page backlink.
- Rendering: no blank, duplicated or missing page; no clipping, overlap, broken glyph, black square, corrupted font or broken image observed.
- Diagnostic note: the local `file` utility reported an unreliable page count of eight; PDFKit inspection, rendered-page enumeration and the established repository validation all independently resolved 21 pages.

## Current link inventory

| Current page | Purpose | Destination | State |
| ---: | --- | --- | --- |
| 4 | Song 1 official source | `https://www.youtube.com/watch?v=rtOvBOTyX00` | Clickable; reverify before final export; QR absent |
| 9 | Song 2 official source | `https://www.youtube.com/watch?v=7pOr3dBFAeY` | Clickable; reverify before final export; QR absent |
| 14 | Song 3 official source | `https://www.youtube.com/watch?v=fV4DiAyExN0` | Clickable; reverify before final export; QR absent |
| 19 | Short survey | `https://tally.so/r/eqzgbe` | Clickable; reverify before final export |
| 20 | Short survey | `https://tally.so/r/eqzgbe` | Duplicate destination; clickable |
| 20 | First-group interest | `https://tally.so/r/D4a6NE` | Clickable; future role must be confirmed |
| 20 | Canonical ebook page | `https://singpronuncerepeat.com/ebook-gratis` | Clickable and canonical |

No annotation points to localhost, a Preview deployment or the legacy Vercel origin. No QR code is present.

## Page-by-page audit

### Page 1 — Cover

- **Current title or purpose:** Cover for *Aprende inglés con 3 canciones*.
- **Main content:** Official and secondary identities, method, three-song promise and short learning promise.
- **Educational objective:** Set expectations and identify the method.
- **Content worth preserving:** Calm dark direction, brand hierarchy, three-song/nine-expression promise and listening-first framing.
- **Copy or spelling issues:** None in the rendered PDF; official `Pronunce` spelling is correct.
- **Pronunciation issues:** None; no teaching notation appears.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Very low density; the large empty upper area can communicate audience or completion time without crowding.
- **Visual hierarchy:** Strong title and method hierarchy.
- **Contrast and legibility:** Strong main contrast; secondary purple text is smaller but readable.
- **Layout, clipping or overflow:** None observed.
- **Link status:** No link; appropriate for a cover.
- **CTA or conversion role:** None; appropriate.
- **Rights/copyright observation:** No artist image, album art, logo or affiliation claim.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 1.

### Page 2 — Welcome, scope and time

- **Current title or purpose:** Welcome and guide orientation.
- **Main content:** Audience, contents, exclusions, estimated 30–45 minute first pass and educational-use note.
- **Educational objective:** Explain how the guide should be used and what it does not replace.
- **Content worth preserving:** Audience definition, three-song/nine-practice scope, listening requirement and realistic duration.
- **Copy or spelling issues:** No material error.
- **Pronunciation issues:** Correctly avoids presenting the guide as exact phonetics.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Dense for an opening page; transformation and outcomes are implicit rather than scannable.
- **Visual hierarchy:** Clear heading and two useful note cards.
- **Contrast and legibility:** Body copy and muted note text are small for phone-sized viewing.
- **Layout, clipping or overflow:** None observed.
- **Link status:** No link required.
- **CTA or conversion role:** Orientation, not conversion.
- **Rights/copyright observation:** Scope language supports transformative educational use.
- **Recommended decision:** MERGE.
- **Proposed destination:** Final page 2, with outcomes moved to final page 3.

### Page 3 — Method explanation

- **Current title or purpose:** Explain `Escríbelo como suena` and the four-step practice loop.
- **Main content:** Approximation caveat plus listen, read, understand and repeat sequence.
- **Educational objective:** Teach safe use of the pronunciation bridge.
- **Content worth preserving:** The practical-bridge disclaimer and four-step sequence.
- **Copy or spelling issues:** No material error.
- **Pronunciation issues:** The caveat is sound, but the notation lacks one compact legend for stress marks, separators, softened sounds and temporary Spanish-friendly supports.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Method purpose and operating instructions compete on one page.
- **Visual hierarchy:** Four cards are consistent but visually equal; sequence could be more explicit.
- **Contrast and legibility:** Acceptable; secondary card copy is small.
- **Layout, clipping or overflow:** None observed.
- **Link status:** No link required.
- **CTA or conversion role:** Learning activation.
- **Rights/copyright observation:** Original method explanation; no issue found.
- **Recommended decision:** MODIFY.
- **Proposed destination:** Split across final pages 4 and 5.

### Page 4 — Song 1 introduction

- **Current title or purpose:** Introduce *A Thousand Years*.
- **Main content:** Level, why it helps, listening focus and official-source link.
- **Educational objective:** Prepare the first listening session.
- **Content worth preserving:** Song rationale, suggested beginner-to-intermediate level and focus on connected speech.
- **Copy or spelling issues:** None.
- **Pronunciation issues:** No practice notation yet.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Low density with substantial unused lower space.
- **Visual hierarchy:** Strong divider; level is text-only.
- **Contrast and legibility:** Strong main hierarchy; link is visually distinct.
- **Layout, clipping or overflow:** None observed.
- **Link status:** Official source is clickable; URL needs revalidation; QR absent.
- **CTA or conversion role:** Primary action is listening at the official source.
- **Rights/copyright observation:** Uses title/artist reference only; no artwork or affiliation claim.
- **Recommended decision:** MODIFY.
- **Proposed destination:** Final page 7 with text-plus-visual difficulty, QR and progress context.

### Page 5 — Song 1, Practice 1

- **Current title or purpose:** Song 1 — Practice 1.
- **Main content:** One short fragment, practical pronunciation, natural meaning, vocabulary, original example, exercise and repetition.
- **Educational objective:** Recognize and reproduce one useful expression.
- **Content worth preserving:** Complete micro-lesson structure and short-fragment scope.
- **Copy or spelling issues:** None found.
- **Pronunciation issues:** Understandable bridge; stress/separator convention should be normalized globally.
- **Translation or meaning issues:** Natural meaning matches context.
- **Editorial-density issues:** Appropriate, though response affordance is small.
- **Visual hierarchy:** Clear labeled rows.
- **Contrast and legibility:** Muted example translation and repetition copy are small/low contrast.
- **Layout, clipping or overflow:** None observed.
- **Link status:** Relies on the song-introduction link; no duplicate needed.
- **CTA or conversion role:** Complete the practice checkbox.
- **Rights/copyright observation:** Fragment remains short and analytically transformed.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 8.

### Page 6 — Song 1, Practice 2

- **Current title or purpose:** Song 1 — Practice 2.
- **Main content:** Same micro-lesson structure for the second short fragment.
- **Educational objective:** Practice rhythm and contextual vocabulary.
- **Content worth preserving:** Pronunciation explanation, contextual meaning, original example and production exercise.
- **Copy or spelling issues:** Rendered example is correct, but the content source contains a singular/plural typo that must be reconciled before the next export.
- **Pronunciation issues:** Understandable; separator spacing and stress notation need global consistency.
- **Translation or meaning issues:** Accurate in the rendered artifact.
- **Editorial-density issues:** Balanced.
- **Visual hierarchy:** Consistent with page 5.
- **Contrast and legibility:** Same small muted-copy concern as page 5.
- **Layout, clipping or overflow:** None observed.
- **Link status:** Inherits the official-source link from page 4.
- **CTA or conversion role:** Complete the practice checkbox.
- **Rights/copyright observation:** Short educational fragment; no reconstruction concern introduced.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 9.

### Page 7 — Song 1, Practice 3

- **Current title or purpose:** Song 1 — Practice 3.
- **Main content:** Third micro-lesson with connected-speech guidance and a personal-production exercise.
- **Educational objective:** Hear reduction/connection and use the expression independently.
- **Content worth preserving:** Strong production exercise and explicit repetition step.
- **Copy or spelling issues:** None found.
- **Pronunciation issues:** Practical but denser; stress and connected-speech notation should be standardized.
- **Translation or meaning issues:** Accurate.
- **Editorial-density issues:** One of the denser practice pages.
- **Visual hierarchy:** Good row structure, but long notes reduce scan speed.
- **Contrast and legibility:** Secondary explanation is small for mobile/tablet reading.
- **Layout, clipping or overflow:** No clipping; lower card remains inside the safe area.
- **Link status:** Inherits official-source link.
- **CTA or conversion role:** Complete the practice checkbox.
- **Rights/copyright observation:** Short fragment and original exercise remain appropriate.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 10.

### Page 8 — Song 1 review

- **Current title or purpose:** Quick review after Song 1.
- **Main content:** Three reflection questions, confidence scale and completion checkbox.
- **Educational objective:** Prompt reflection after the first song.
- **Content worth preserving:** Confidence check and completion acknowledgement.
- **Copy or spelling issues:** None.
- **Pronunciation issues:** Difficult-sound reflection is too general.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Severely underfilled; questions have no practical writing space.
- **Visual hierarchy:** Review card is clear but does not use the page.
- **Contrast and legibility:** Readable.
- **Layout, clipping or overflow:** No defect; excessive unused space.
- **Link status:** No link required.
- **CTA or conversion role:** Completion, but progress is not quantified.
- **Rights/copyright observation:** No fragment reproduction.
- **Recommended decision:** REPLACE.
- **Proposed destination:** Final page 11, expanded to a song summary with 33% progress.

### Page 9 — Song 2 introduction

- **Current title or purpose:** Introduce *Still Loving You*.
- **Main content:** Level, value, listening focus, singer-accent note and official-source link.
- **Educational objective:** Prepare an intermediate listening session and distinguish source accent from the neutral learning target.
- **Content worth preserving:** Accent caveat, rationale and connected-speech focus.
- **Copy or spelling issues:** None.
- **Pronunciation issues:** Accent note is responsible and should remain.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Balanced but leaves unused space.
- **Visual hierarchy:** Strong divider; difficulty is text-only.
- **Contrast and legibility:** Good.
- **Layout, clipping or overflow:** None observed.
- **Link status:** Official link clickable; revalidation and QR required.
- **CTA or conversion role:** Listen at official source.
- **Rights/copyright observation:** No artwork, lyrics block or affiliation claim.
- **Recommended decision:** MODIFY.
- **Proposed destination:** Final page 12.

### Page 10 — Song 2, Practice 1

- **Current title or purpose:** Song 2 — Practice 1.
- **Main content:** Short-fragment micro-lesson and comprehension choice.
- **Educational objective:** Recognize a connected phrase and infer natural meaning.
- **Content worth preserving:** Contextual note, vocabulary and original example.
- **Copy or spelling issues:** None found.
- **Pronunciation issues:** Initial consonant and reduced-sound guidance is useful; notation convention should be unified.
- **Translation or meaning issues:** Accurate.
- **Editorial-density issues:** Dense; the supplied answer choices make the exercise relatively passive.
- **Visual hierarchy:** Consistent and clear.
- **Contrast and legibility:** Muted notes are small.
- **Layout, clipping or overflow:** None observed.
- **Link status:** Inherits page 9 official link.
- **CTA or conversion role:** Complete exercise and repetition.
- **Rights/copyright observation:** Short and transformative.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 13.

### Page 11 — Song 2, Practice 2

- **Current title or purpose:** Song 2 — Practice 2.
- **Main content:** Short-fragment micro-lesson with phrase construction.
- **Educational objective:** Practice rhythm, reductions and personal use.
- **Content worth preserving:** Useful expression, original example and active writing line.
- **Copy or spelling issues:** None found.
- **Pronunciation issues:** Practical guidance is clear but separator/stress conventions remain inconsistent with other practices.
- **Translation or meaning issues:** Natural alternatives need concise context labels so they are not read as interchangeable in every situation.
- **Editorial-density issues:** High but manageable.
- **Visual hierarchy:** Good.
- **Contrast and legibility:** Small secondary translation.
- **Layout, clipping or overflow:** None observed.
- **Link status:** Inherits official-source link.
- **CTA or conversion role:** Write and repeat.
- **Rights/copyright observation:** Short fragment; original example is independent of the song.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 14.

### Page 12 — Song 2, Practice 3

- **Current title or purpose:** Song 2 — Practice 3.
- **Main content:** Third short-fragment micro-lesson, sound note, meaning, example and interpretation exercise.
- **Educational objective:** Distinguish difficult consonants and use the expression in context.
- **Content worth preserving:** Clear warning about the temporary pronunciation bridge and a useful contextual example.
- **Copy or spelling issues:** None found.
- **Pronunciation issues:** The `th` and final-consonant strategy needs one shared articulation note; the exercise should distinguish sound from spelling more clearly.
- **Translation or meaning issues:** Accurate, with context-sensitive alternatives.
- **Editorial-density issues:** Dense and near the lower safe area, though still readable.
- **Visual hierarchy:** Consistent.
- **Contrast and legibility:** Muted explanatory lines are small.
- **Layout, clipping or overflow:** No clipping observed.
- **Link status:** Inherits official-source link.
- **CTA or conversion role:** Interpret, repeat and check completion.
- **Rights/copyright observation:** Short educational use remains appropriate.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 15.

### Page 13 — Song 2 review

- **Current title or purpose:** Quick review after Song 2.
- **Main content:** Three prompts, confidence scale and completion checkbox.
- **Educational objective:** Reflect on progress.
- **Content worth preserving:** Confidence and completion concepts.
- **Copy or spelling issues:** None.
- **Pronunciation issues:** Does not capture the learner's difficult sound or planned correction.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Underfilled and lacks writing space.
- **Visual hierarchy:** Clear but incomplete.
- **Contrast and legibility:** Readable.
- **Layout, clipping or overflow:** No defect; excessive unused space.
- **Link status:** No link required.
- **CTA or conversion role:** Completion without accumulated progress.
- **Rights/copyright observation:** No issue.
- **Recommended decision:** REPLACE.
- **Proposed destination:** Final page 16 with 66% accumulated progress.

### Page 14 — Song 3 introduction

- **Current title or purpose:** Introduce *The Reason*.
- **Main content:** Level, rationale, listening focus and official-source link.
- **Educational objective:** Prepare the third intermediate listening session.
- **Content worth preserving:** Emotional-language rationale and rhythm focus.
- **Copy or spelling issues:** None.
- **Pronunciation issues:** None on this page.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Low; lower area underused.
- **Visual hierarchy:** Strong; difficulty is text-only.
- **Contrast and legibility:** Good.
- **Layout, clipping or overflow:** None observed.
- **Link status:** Official link clickable; revalidation and QR required.
- **CTA or conversion role:** Listen at official source.
- **Rights/copyright observation:** No artwork or affiliation implication.
- **Recommended decision:** MODIFY.
- **Proposed destination:** Final page 17.

### Page 15 — Song 3, Practice 1

- **Current title or purpose:** Song 3 — Practice 1.
- **Main content:** Short-fragment micro-lesson with sound guidance and original usage.
- **Educational objective:** Practice connected speech and a useful transition expression.
- **Content worth preserving:** Full teaching stack and active exercise.
- **Copy or spelling issues:** None found.
- **Pronunciation issues:** The Spanish-friendly `h` support must consistently reinforce a soft breath rather than a guttural Spanish sound.
- **Translation or meaning issues:** Accurate.
- **Editorial-density issues:** Dense but coherent.
- **Visual hierarchy:** Clear.
- **Contrast and legibility:** Secondary copy is small.
- **Layout, clipping or overflow:** None observed.
- **Link status:** Inherits official-source link.
- **CTA or conversion role:** Write, listen and repeat.
- **Rights/copyright observation:** Short fragment and original example remain transformative.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 18.

### Page 16 — Song 3, Practice 2

- **Current title or purpose:** Song 3 — Practice 2.
- **Main content:** Short-fragment micro-lesson focused on rhythm and self-description.
- **Educational objective:** Practice stress timing and honest personal expression.
- **Content worth preserving:** Rhythm explanation, contextual meaning and original example.
- **Copy or spelling issues:** None found.
- **Pronunciation issues:** Practical and understandable; separator style and syllable emphasis need global normalization.
- **Translation or meaning issues:** Accurate.
- **Editorial-density issues:** Dense but remains within the card.
- **Visual hierarchy:** Strong row labels.
- **Contrast and legibility:** Muted translation and repetition line are small.
- **Layout, clipping or overflow:** No clipping, including the lower repetition row.
- **Link status:** Inherits official-source link.
- **CTA or conversion role:** Rhythm self-check and completion.
- **Rights/copyright observation:** Short fragment and original context are appropriate.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 19.

### Page 17 — Song 3, Practice 3

- **Current title or purpose:** Song 3 — Practice 3.
- **Main content:** Short-fragment micro-lesson with an original personal-sentence activity.
- **Educational objective:** Reduce a temporary Spanish support sound and transfer vocabulary to personal use.
- **Content worth preserving:** Explicit temporary-support explanation and active writing line.
- **Copy or spelling issues:** None found.
- **Pronunciation issues:** Initial-cluster support is well framed as temporary; the final method should state a measurable reduction goal.
- **Translation or meaning issues:** Accurate.
- **Editorial-density issues:** Dense; long meaning and example blocks slow scanning.
- **Visual hierarchy:** Consistent.
- **Contrast and legibility:** Secondary translation is low emphasis.
- **Layout, clipping or overflow:** No clipping; content approaches but does not cross the lower safe boundary.
- **Link status:** Inherits official-source link.
- **CTA or conversion role:** Write a personal sentence, repeat and complete.
- **Rights/copyright observation:** Short fragment remains within the established safeguard.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 20.

### Page 18 — Song 3 review

- **Current title or purpose:** Quick review after Song 3.
- **Main content:** Three questions, confidence scale and completion checkbox.
- **Educational objective:** Close the third song.
- **Content worth preserving:** Confidence and completion markers.
- **Copy or spelling issues:** One prompt shifts prematurely to all three songs; it belongs in consolidated review.
- **Pronunciation issues:** Difficult-sound reflection remains too general.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Very underfilled with no writing area.
- **Visual hierarchy:** Clear but visually incomplete.
- **Contrast and legibility:** Readable.
- **Layout, clipping or overflow:** No defect; excessive empty space.
- **Link status:** No link required.
- **CTA or conversion role:** Completion, but no explicit 100% progress state.
- **Rights/copyright observation:** No issue.
- **Recommended decision:** REPLACE.
- **Proposed destination:** Final page 21 with 100% accumulated progress.

### Page 19 — Three-day challenge

- **Current title or purpose:** Consolidate learning over three days.
- **Main content:** Three four-step daily plans, objectives, completion boxes and one survey link.
- **Educational objective:** Turn one reading into repeated listening, speaking and recall.
- **Content worth preserving:** The three-day structure, 10–15 minute duration, listening-first sequence and personal-production step.
- **Copy or spelling issues:** None found.
- **Pronunciation issues:** Day 2 appropriately compares self-recording with official audio without promising perfection.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Highest-density page in the PDF; three days compete vertically.
- **Visual hierarchy:** Day cards are clear, but compactness reduces writing/reflection room.
- **Contrast and legibility:** Dense muted objective text is small.
- **Layout, clipping or overflow:** No clipping; final card sits close to the footer separator.
- **Link status:** Survey link clickable; its placement before final self-check interrupts value completion.
- **CTA or conversion role:** Survey is premature and should move after the learning payoff.
- **Rights/copyright observation:** Refers to practices without reproducing additional song text.
- **Recommended decision:** MODIFY.
- **Proposed destination:** Split into final pages 24–26; move survey to final page 29.

### Page 20 — Self-check and continuation actions

- **Current title or purpose:** Self-assessment and next actions.
- **Main content:** Activity checklist, four confidence scales, survey CTA, first-group CTA and canonical ebook-page link.
- **Educational objective:** Assess progress and offer continuation.
- **Content worth preserving:** Four-skill self-check, survey concept and canonical backlink.
- **Copy or spelling issues:** None found.
- **Pronunciation issues:** Self-assessment is useful but lacks a before/after or next-practice prompt.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Dense and functionally overloaded.
- **Visual hierarchy:** Three continuation actions compete; the primary next step is unclear.
- **Contrast and legibility:** Generally readable; scale circles may be small on phones.
- **Layout, clipping or overflow:** No clipping.
- **Link status:** Three clickable links work; two Tally destinations need role/relevance revalidation.
- **CTA or conversion role:** Diluted by survey, first group and ebook backlink appearing together.
- **Rights/copyright observation:** No issue.
- **Recommended decision:** REPLACE.
- **Proposed destination:** Final pages 27–29 with one primary continuation CTA and survey after value delivery.

### Page 21 — Educational and rights note

- **Current title or purpose:** Explain educational use and rights boundaries.
- **Main content:** Short-fragment policy, rights ownership, official-audio requirement and no-guarantee educational intent.
- **Educational objective:** Set responsible-use boundaries.
- **Content worth preserving:** Entire conservative rights framework and brand-led authorship statement.
- **Copy or spelling issues:** None; official brand is correct.
- **Pronunciation issues:** None.
- **Translation or meaning issues:** None.
- **Editorial-density issues:** Dense but appropriate for a final note; can be tightened without weakening safeguards.
- **Visual hierarchy:** Four semantic subsections are clear.
- **Contrast and legibility:** Body text is readable but small for tablet/mobile viewing.
- **Layout, clipping or overflow:** None observed.
- **Link status:** No link required.
- **CTA or conversion role:** None; correct after continuation actions.
- **Rights/copyright observation:** Strong; avoids full lyrics, complete verses, translations, artwork and affiliation claims.
- **Recommended decision:** KEEP WITH MINOR EDITS.
- **Proposed destination:** Final page 30.

## Educational review of the nine practices

The table intentionally identifies practices without reproducing their copyrighted fragments.

| Practice | Pronunciation bridge | Meaning and vocabulary | Original example | Exercise and level | Decision |
| --- | --- | --- | --- | --- | --- |
| Song 1 — Practice 1 | Understandable; normalize stress/separator notation | Accurate and contextual | Grammatically correct | Clear for beginner–intermediate | Preserve |
| Song 1 — Practice 2 | Understandable; normalize notation | Accurate | Rendered example correct; source typo needs reconciliation | Appropriate active prompt | Preserve with source correction |
| Song 1 — Practice 3 | Useful connected-speech guidance; denser than peers | Accurate | Grammatically correct | Appropriate, but add clearer response space | Preserve |
| Song 2 — Practice 1 | Clear bridge; standardize notation | Accurate | Grammatically correct | Comprehension choice is too passive | Preserve; strengthen recall |
| Song 2 — Practice 2 | Clear rhythm support | Accurate; label contextual alternatives | Grammatically correct | Appropriate writing task | Preserve |
| Song 2 — Practice 3 | Useful but needs shared `th`/final-consonant guidance | Accurate; alternatives are contextual | Grammatically correct | Appropriate for intermediate learners | Preserve with pronunciation note |
| Song 3 — Practice 1 | Soft-air `h` guidance must remain non-guttural | Accurate | Grammatically correct | Appropriate active task | Preserve |
| Song 3 — Practice 2 | Clear rhythm focus; normalize notation | Accurate | Grammatically correct | Useful confidence choice | Preserve |
| Song 3 — Practice 3 | Temporary initial-vowel support is responsibly framed | Accurate | Grammatically correct | Strong personal production | Preserve |

Cross-practice conclusions:

- All nine fragments remain short, educational and contextual; no serious educational or rights defect requires replacing a song.
- `Escríbelo como suena` is consistently presented as a bridge rather than exact phonetics, but the final edition needs one shared notation legend.
- Written accents, middle dots and spacing are not fully consistent across practices.
- Spanish-friendly approximations for soft English `h`, `th`, vowel contrast and initial consonant clusters need one qualified consistency pass before final copy.
- Natural Spanish meanings and vocabulary are materially accurate. Context-dependent alternatives should be labeled rather than presented as universal equivalents.
- Original examples are grammatically sound in the rendered PDF. The source/render mismatch on Song 1 — Practice 2 must be resolved in the next copy pass.
- The learning level is appropriate: Song 1 supports beginner–intermediate learners; Songs 2 and 3 are reasonable intermediate progressions.
- Several exercises confirm recognition rather than requiring recall or production. The new summaries should add writing, recall and self-observation without adding copyrighted material.

## Visual and editorial findings

- **Pages 1–3:** Coherent opening, but transformation, outcomes and progress are implicit. Page 2 is dense and page 3 combines method rationale with operating instructions.
- **Pages 4, 9 and 14:** Strong song dividers with unused space. Add text-plus-visual difficulty, QR, verified link label and journey position.
- **Pages 5–7, 10–12 and 15–17:** Consistent teaching cards with no clipping. Secondary text is small and muted; pages 7, 10–12 and 15–17 are the most demanding on small screens.
- **Pages 8, 13 and 18:** Excessive unused space and no writing affordance. These are the clearest opportunities for high-impact learning improvement.
- **Page 19:** Useful challenge compressed into one dense page; splitting it improves completion and reflection without adding content for its own sake.
- **Page 20:** Strong self-check trapped inside a three-CTA conversion cluster. Separate assessment from continuation and retain one primary action.
- **Page 21:** Strong safeguards; preserve and modestly improve readability.
- **System-wide:** Dark direction, card contrast, headings, headers, footers and page numbers are consistent. Meaning is not dependent only on color, but progress and difficulty need text labels as well as visual indicators.

## Conversion and rights conclusions

- The guide delivers value before conversion, but the survey first appears inside the challenge and the final page presents competing actions.
- The improved version should offer one verified primary continuation CTA after self-assessment, then a short survey as a secondary action.
- Future products must use non-committal language and no invented bonuses, schedules, results or availability.
- All three official song links are clickable, but must be reverified and paired with tested QR codes.
- The canonical ebook backlink is correct.
- The final edition must keep the short-fragment policy, official-source listening, original examples, no artwork, no artist affiliation and no full-lyrics/full-translation safeguards.

## Final audit decision

The current 21-page PDF is technically healthy and remains a useful base. It is not approved as the final Production asset. Proceed only after project-owner approval of the proposed page architecture, completion of new/corrected copy, verified destinations, QR generation, design implementation, PDF export and full visual/link QA.
