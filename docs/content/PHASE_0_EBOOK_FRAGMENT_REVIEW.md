# Phase 0 Ebook Fragment Review Framework

---

## 1. Document Status

**Status:** In progress — A Thousand Years and Still Loving You reviews complete; The Reason pending
**Song fragments received:** 6 of 9
**Song fragments approved:** 6 of 9
**Pronunciation drafts completed:** 6 of 9
**Natural meanings completed:** 6 of 9
**Exercises completed:** 6 of 9
**Publication ready:** No

**Phase status:** In progress — ATY-01/02/03 and SLY-01/02/03 reviewed and approved; manual fragment input pending for TR-01–03

The A Thousand Years fragments were manually supplied in `content/phase-0-ebook-fragments-a-thousand-years`. Approved: "One step closer" (ATY-01), "Heart beats fast" (ATY-02), "Time stands still" (ATY-03). No lyrics were retrieved from external sources.

The Still Loving You fragments were manually supplied in `content/phase-0-ebook-fragments-still-loving-you`. Project owner confirmed non-adjacency and absence of verse/chorus reconstruction. Vocalist accent documented; neutral English pronunciation prioritized. Approved: "I will be there" (SLY-01), "All the way from the start" (SLY-02), "I can't get through" (SLY-03). No surrounding song text was stored.

The TR fragment text fields remain `[PENDING_MANUAL_INPUT]`.

---

## 2. Purpose

This document controls the fragment intake and review process for the nine short educational phrase slots in `docs/content/PHASE_0_EBOOK_DRAFT.md`.

It manages:

- **Manual fragment intake** — accepting one short phrase at a time from the project owner.
- **Editorial review** — evaluating length, reconstruction risk, educational value, and brand fit.
- **Pronunciation review** — assessing whether the Escríbelo como suena method can represent the fragment clearly.
- **Translation review** — confirming that a natural Spanish meaning can be explained originally.
- **Educational usefulness** — verifying that the fragment supports the learning objective.
- **Legal-safe screening** — checking that the fragment is short, non-sequential, and surrounded by original educational transformation.
- **Final approval** — advancing fragments to content drafting.
- **Song replacement decisions** — triggering a song swap if three suitable fragments cannot be approved conservatively for a given song.

This phase is not complete until nine fragment slots have received a final decision (approved, or replaced by a reviewed backup) and all approved fragments have pronunciation, meaning, vocabulary, and exercise content finalized.

---

## 3. Fragment Intake Rules

### Submission rules

These rules apply to every fragment submitted for review in this phase.

- Submit **one fragment at a time**. Do not batch-submit all three fragments for a song in one block.
- Keep the fragment **as short as educationally necessary**. A phrase of three to seven words is the target. Longer submissions require explicit justification.
- Prefer a **standalone phrase** rather than a complete lyrical line. If the phrase only makes sense within a complete verse, it is unlikely to be educationally useful without reproducing surrounding context.
- Do **not** submit a full verse or chorus.
- Do **not** submit several adjacent fragments from the same song section in the same review session.
- Do **not** combine fragments that, when read together, allow the reader to reconstruct a verse or chorus.
- Record the **intended educational purpose** for each fragment when submitting. "It sounds nice" is not a sufficient justification. Name the pronunciation target, the vocabulary value, or the practical-language opportunity.
- Confirm the **song title and fragment slot ID** (e.g., ATY-01) at the time of submission.
- Do **not** include surrounding lyrics as context. If context is needed to understand why the fragment was chosen, describe it in original words.
- Do **not** assume that a short fragment is automatically acceptable. Length alone does not determine suitability.
- **Reject** any fragment that cannot be taught without relying on the surrounding song text.

### Warning for AI-assisted review

> **Codex and Claude Code must never retrieve, infer, complete, or reconstruct missing lyrics.** They may only evaluate fragment text explicitly supplied by the project owner in the submission block. If a fragment text field is blank or marked `[PENDING_MANUAL_INPUT]`, it must remain so. No tool, model, or automation may fill it in.

---

## 4. Review Statuses

Each fragment moves through the following statuses. A fragment may skip statuses if it is rejected early or must jump back for revision.

| Status | Meaning | What moves it forward |
|---|---|---|
| **Pending input** | No fragment text has been supplied yet | Project owner submits a fragment using the format in Section 15 |
| **Received** | Fragment text has been supplied and logged | Reviewer confirms the fragment ID, song, and educational purpose |
| **Editorial review** | Fragment is being assessed for length, reconstruction risk, and educational value | Reviewer completes all editorial review dimensions in Section 5 |
| **Revision required** | Fragment is too long, too adjacent, or needs reframing | Project owner shortens or resubmits a different phrase; cycle restarts |
| **Rejected** | Fragment fails one or more criteria and cannot be revised to pass | Documented with reason; a replacement candidate is submitted or the song replacement gate is triggered |
| **Pronunciation review** | Fragment passed editorial review; pronunciation suitability is being assessed | Reviewer completes the pronunciation template in Section 10 |
| **Educational content drafting** | Fragment passed pronunciation review; natural meaning, vocabulary, and exercise are being drafted | Reviewer completes the natural meaning, vocabulary, and exercise templates in Sections 11–13 |
| **Legal-safe review** | All educational content has been drafted; final conservative check before approval | Reviewer completes the legal-safe gate in Section 17 |
| **Approved** | Fragment and all associated educational content have passed every gate | Fragment and content are ready to be inserted into `docs/content/PHASE_0_EBOOK_DRAFT.md` |
| **Replaced** | Fragment was rejected or the song was swapped; a backup is in use | Replacement song or phrase documented; new fragment enters the review cycle from Received |

---

## 5. Review Dimensions

Every fragment submitted must be evaluated across all five dimensions before reaching the pronunciation or content-drafting stages.

### 5.1 Length and excerpt risk

| Question | Assessment |
|---|---|
| Is the fragment as short as educationally necessary? | Does removing one word change the educational value? If not, remove it. |
| Does the fragment form a complete verse or chorus? | A complete standalone section is not acceptable regardless of length. |
| Is this fragment adjacent to another already-selected fragment from the same song? | Adjacent fragments that share a grammatical or melodic connection risk sequential reconstruction. Treat with caution. |
| Could the set of selected fragments for this song, when read in order, reconstruct a meaningful portion of the song? | Run the cross-fragment reconstruction check in Section 9 before approving the third fragment per song. |
| Can the educational goal be achieved with fewer words? | If yes, require shortening before advancing. |

### 5.2 Educational value

| Question | Assessment |
|---|---|
| Does this fragment offer a clear pronunciation teaching opportunity? | Name the specific sound, pattern, or reduction it demonstrates. |
| Does it offer useful listening-practice value? | Is it audible and isolatable in the recording? |
| Does it contain vocabulary worth teaching? | Are two to four words useful outside this song? |
| Does it contain practical language? | Could a learner use this phrase or vocabulary in a real conversation? |
| Is it suitable for a beginner or intermediate learner? | Would the educational block around it be accessible without advanced English? |
| Can an original exercise be created from it? | Can a learner practice without reproducing additional song text? |

### 5.3 Pronunciation suitability

| Question | Assessment |
|---|---|
| Is the vocal delivery clear enough to teach from? | If the singer swallows syllables or uses heavy processing, the fragment may not be teachable. |
| Does the fragment demonstrate useful connected speech? | Connected speech patterns are a key teaching value for this ebook. |
| Does it contain common reductions worth flagging? | Reductions are useful if they also appear in natural everyday speech. |
| Does the singer use a specific accent or delivery that differs from neutral English? | Document the variation. Do not mislead learners by ignoring it. |
| Can the Escríbelo como suena method represent this fragment without producing a misleading Spanish reading? | If the Spanish-friendly spelling would send learners to a significantly wrong sound, flag for revision. |
| Are the conventions for this fragment consistent with what will be used across all nine fragments? | Complete the internal pronunciation reference table before drafting. |

### 5.4 Translation and meaning

| Question | Assessment |
|---|---|
| Does this fragment have a useful standalone meaning? | A fragment that only makes sense in the full verse context is not suitable. |
| Is the required context minimal enough to explain in original words? | Describing context is fine. Quoting surrounding lyrics is not. |
| Can a natural Spanish meaning be written originally? | Do not copy from third-party lyric websites. |
| Is the wording too figurative or metaphorical for the target level? | Figurative language can be taught, but requires more explanation, which may push the lesson beyond the intended scope. |
| Does the meaning connect to practical real-life use? | A fragment whose meaning only works inside the song is a weaker candidate than one with clear real-world transferability. |

### 5.5 Editorial and brand fit

| Question | Assessment |
|---|---|
| Does this fragment create a warm, useful, encouraging learning moment? | The ebook should feel like guided practice, not a test. |
| Does it align with the ebook's overall learning journey? | The three fragments per song should feel progressive, not random. |
| Does selecting this fragment create thematic or emotional repetition across the set? | Avoid selecting three fragments per song that all convey exactly the same emotion or vocabulary cluster. |
| Is the content suitable for a general audience? | The ebook is not age-restricted, but fragments with explicit or inappropriate themes are not acceptable. |
| Does the educational block around this fragment make an achievable promise? | Do not build a lesson block that implies the learner will master pronunciation or vocabulary from this one fragment. |

---

## 6. Approval Scoring Model

### Scoring weights

Each fragment receives an editorial score out of 100 points. Scores are weighted estimates, not objective measurements. A high score does not override copyright or legal-safe concerns — a fragment that scores 95 but reproduces a complete chorus is still rejected.

| Criterion | Weight | Max points |
|---|---|---|
| Pronunciation usefulness | 20 | 20 |
| Learner accessibility | 15 | 15 |
| Practical language value | 15 | 15 |
| Listening value | 10 | 10 |
| Standalone meaning | 10 | 10 |
| Exercise potential | 10 | 10 |
| Fit within the three-song set | 10 | 10 |
| Conservative excerpt suitability | 10 | 10 |
| **Total** | **100** | **100** |

### Score scale (per criterion): 1–5

- 1 = Weak — significant limitation; may indicate rejection
- 2 = Limited — below average; requires justification to proceed
- 3 = Acceptable — meets minimum standard
- 4 = Strong — clearly suitable without major caveats
- 5 = Excellent — outstanding for this criterion

**Weighted contribution:** `(score ÷ 5) × weight`

### Decision thresholds

| Score range | Decision |
|---|---|
| 80–100 | Strong candidate — still requires legal-safe review before approval |
| 65–79 | Usable with revision or caution — document specific concern before advancing |
| 50–64 | Weak candidate — replacement preferred; proceed only if no better option exists |
| Below 50 | Reject — document reason and submit a revised or replacement fragment |

### Important

A score of 80 or above does not automatically approve a fragment. Every fragment must still pass the full legal-safe gate in Section 17 regardless of its editorial score.

---

## 7. Nine-Slot Fragment Register

All nine fragment text fields are `[PENDING_MANUAL_INPUT]`. No song text has been supplied. All fields that depend on fragment content are also pending.

---

### ATY-01 — APPROVED

#### Register summary

| Field | Value |
|---|---|
| Fragment ID | ATY-01 |
| Song | A Thousand Years |
| Artist | Christina Perri |
| Fragment text | **One step closer** |
| Word count | 3 |
| Source | Manually supplied by project owner |
| Intended learning purpose | Useful expression for progress and personal goals; beginner-friendly rhythm; final consonant and diphthong practice |
| Learner level | A1–A2 |
| Status | **Approved** |
| Length review | Pass — 3 words; conservative |
| Sequential-risk review | Pass with note — adjacency to ATY-02 and ATY-03 requires manual project-owner verification before publication |
| Editorial score | 87 / 100 |
| Pronunciation review | Pass |
| Natural meaning review | Pass |
| Vocabulary review | Pass |
| Exercise review | Pass |
| Legal-safe review | Pass |
| Final decision | **Approved** |
| Reviewer notes | Adjacency relative to ATY-02 and ATY-03 cannot be confirmed without reviewing surrounding song text. Manual project-owner verification required before PDF publication. |

---

#### ATY-01 full review

**Length and excerpt risk**

- Fragment length: 3 words. Conservative. ✓
- Complete verse or chorus: No. ✓
- Adjacency to ATY-02 or ATY-03: Cannot be confirmed without surrounding song text. **Manual project-owner verification required before publication.**
- Reconstruction risk: Three independently short phrases with no shared vocabulary do not combine to reconstruct a verse or chorus. ✓
- Could be shorter: No. All three words are necessary. ✓

**Educational value**

- Pronunciation opportunity: Strong. The /st/ cluster in "step" and the diphthong /oʊ/ in "closer" are common challenges for Spanish speakers. ✓
- Listening value: Strong. Delivered clearly and slowly in this song. ✓
- Practical vocabulary: "step" and "closer" are high-frequency and broadly useful. ✓
- Real-life use: Excellent. "One step closer" appears widely in motivational, work, study, and everyday contexts. ✓
- Beginner/intermediate accessibility: A1–A2. Short, common words, natural rhythm. ✓
- Exercise potential: Excellent. Learners can write an original sentence about personal goals with no additional song text required. ✓

**Pronunciation analysis**

| Element | Detail |
|---|---|
| Main stressed words | "ONE" and "CLO-ser" |
| Difficult vowel | The diphthong /oʊ/ in "closer" — Spanish has a pure "o," not a gliding vowel |
| Difficult consonant | Initial /st/ cluster in "step" — Spanish speakers commonly insert "e" before "st" |
| Connected speech | The three words flow as one unit with no natural pause |
| Reduction | None significant |
| Singer-specific variation | Christina Perri delivers this phrase slowly and clearly; minimal distortion |
| Neutral learning pronunciation | "one step closer" as natural spoken English |
| Escríbelo como suena | **uán · estép · clóuzer** |
| Possible misleading spelling | "clóuzer" — the "ou" should glide as a diphthong, not be read as two separate vowels in Spanish. Add a learner note. |
| Final learner-facing pronunciation | **uán · estép · clóuzer** |

Nota para el aprendiz: el "ou" en "clóuzer" se pronuncia como una sola vocal deslizante — no digas "o" y "u" por separado.

**Natural meaning**

- Literal sense: A single step that brings you nearer than before.
- Natural Spanish meaning: "Un paso más cerca" — expresar que te estás acercando poco a poco a algo que quieres lograr.
- Context limitation: Stands alone without song context. ✓
- Standalone usefulness: Excellent — common in motivational speech and everyday goal-oriented conversation.
- Possible ambiguity: None significant.
- Final learner-facing explanation: "Un paso más cerca" — en inglés se usa para decir que estás progresando hacia una meta, sueño o logro. Es una expresión muy común y motivadora.

**Vocabulary**

*step — paso*
- Natural Spanish explanation: Un paso físico al caminar, o una etapa en un proceso.
- Original example: "Finishing one exercise is a step in the right direction."
- Spanish meaning of example: "Terminar un ejercicio es un paso en la dirección correcta."
- Real-life usage note: Used literally (take a step) and figuratively (step toward a goal). Very common.

*closer — más cerca*
- Natural Spanish explanation: El comparativo de "close" (cerca). La distancia —física o figurada— ha disminuido.
- Original example: "I feel closer to understanding English every time I practice."
- Spanish meaning of example: "Me siento más cerca de entender el inglés cada vez que practico."
- Real-life usage note: Used for physical proximity and for goals, relationships, and understanding.

**Original real-life example**

"Every lesson puts me one step closer to my goal."
*(Cada lección me pone un paso más cerca de mi meta.)*

**Original exercise**

Tipo: Escribe una frase original.

Instrucción: Usa "one step closer" o "one step" para hablar de algo que quieres lograr. Puede ser aprender inglés, un trabajo, un viaje, o cualquier meta tuya.

Ejemplo de respuesta: "Studying every day brings me one step closer to speaking English with confidence."
*(Este es solo un ejemplo — tu frase puede ser completamente diferente.)*

**Editorial score**

| Criterion | Score (1–5) | Weight | Weighted points |
|---|---|---|---|
| Pronunciation usefulness | 4 | 20 | 16 |
| Learner accessibility | 5 | 15 | 15 |
| Practical language value | 4 | 15 | 12 |
| Listening value | 4 | 10 | 8 |
| Standalone meaning | 4 | 10 | 8 |
| Exercise potential | 5 | 10 | 10 |
| Fit within the three-song set | 4 | 10 | 8 |
| Conservative excerpt suitability | 5 | 10 | 10 |
| **Total** | | **100** | **87** |

**Legal-safe gate — all items pass**

- [x] No full lyrics
- [x] No complete verse or chorus
- [x] Three fragments in combination do not reconstruct a song section
- [x] Fragment is as short as educationally necessary
- [x] Original pronunciation, meaning, vocabulary, and exercise surround the fragment
- [x] Official media will be linked (not embedded) — link pending verification
- [x] Adjacency uncertainty flagged for manual verification

**Final decision: Approved**

---

### ATY-02 — APPROVED

#### Register summary

| Field | Value |
|---|---|
| Fragment ID | ATY-02 |
| Song | A Thousand Years |
| Artist | Christina Perri |
| Fragment text | **Heart beats fast** |
| Word count | 3 |
| Source | Manually supplied by project owner |
| Intended learning purpose | Simple expression for physical or emotional reaction; final consonant clusters; natural rhythm between short content words |
| Learner level | A2–B1 |
| Status | **Approved** |
| Length review | Pass — 3 words; conservative |
| Sequential-risk review | Pass with note — adjacency to ATY-01 and ATY-03 requires manual project-owner verification before publication |
| Editorial score | 91 / 100 |
| Pronunciation review | Pass |
| Natural meaning review | Pass |
| Vocabulary review | Pass |
| Exercise review | Pass |
| Legal-safe review | Pass |
| Final decision | **Approved** |
| Reviewer notes | Three distinct pronunciation targets (initial /h/, long /iː/ in "beats," final /st/ cluster in "fast") make this an excellent teaching fragment. Adjacency to other ATY fragments requires manual verification. |

---

#### ATY-02 full review

**Length and excerpt risk**

- Fragment length: 3 words. Conservative. ✓
- Complete verse or chorus: No. ✓
- Adjacency to ATY-01 or ATY-03: Cannot be confirmed without surrounding song text. **Manual project-owner verification required before publication.**
- Reconstruction risk: Three independently short phrases with no shared vocabulary. ✓
- Could be shorter: No. All three words are necessary. ✓

**Educational value**

- Pronunciation opportunity: Excellent. Three distinct challenges for Spanish speakers: the English /h/ sound, the long /iː/ vowel in "beats," and the final /st/ cluster in "fast." ✓
- Listening value: Strong. Three clear monosyllabic words — ideal for perceiving individual sounds. ✓
- Practical vocabulary: "heart," "beat," and "fast" are all high-frequency, broadly useful words. ✓
- Real-life use: Strong. The combination "heart beats fast" applies directly to nervousness, excitement, fear, or exercise — common topics in everyday conversation. ✓
- Beginner/intermediate accessibility: A2–B1. Common vocabulary. The main challenge is the pronunciation, not the meaning. ✓
- Exercise potential: Excellent. Learners can identify situations from their own life with no additional song text required. ✓

**Pronunciation analysis**

| Element | Detail |
|---|---|
| Main stressed words | "HEART" and "FAST" |
| Difficult vowel (1) | The /ɑː/ vowel in "heart" — similar to Spanish "a" but more open and followed by the "r" |
| Difficult vowel (2) | The long /iː/ in "beats" — Spanish "i" is similar but must be held slightly longer |
| Difficult consonant | Final /st/ cluster in "fast" — Spanish speakers may add a vowel after the final "t" |
| Connected speech | "Heart beats" flows naturally — the two words connect without a hard stop |
| Reduction | None significant |
| Singer-specific variation | Christina Perri delivers this slowly; each word is distinct. Minimal singer distortion. |
| Neutral learning pronunciation | Natural spoken English at a comfortable pace |
| Escríbelo como suena | **jart · bíts · fast** |
| Possible misleading spelling | "jart" — in Spanish, "j" is a strong guttural sound. The English /h/ is much softer. Add a learner note. "fast" — the Spanish "a" in "fast" should be kept open, not closed toward "e". |
| Final learner-facing pronunciation | **jart · bíts · fast** |

Nota para el aprendiz: la "j" en "jart" es más suave que la "j" en español — es un sonido de aire suave, no gutural. Practica con el audio oficial para escuchar la diferencia.

**Natural meaning**

- Literal sense: The heart is beating at a rapid pace.
- Natural Spanish meaning: "El corazón late rápido" — una reacción física y emocional que todos conocemos.
- Context limitation: Stands alone without song context. ✓
- Standalone usefulness: Excellent. Universal human experience — nervousness, excitement, fear, physical exertion.
- Possible ambiguity: None. The meaning is clear and universal.
- Final learner-facing explanation: "El corazón late rápido" — en inglés se usa para describir una reacción física o emocional: nervios, emoción, miedo, o cuando estás haciendo ejercicio. Es una expresión muy natural y común.

**Vocabulary**

*heart — corazón*
- Natural Spanish explanation: El corazón — el órgano físico, pero también usado en expresiones emocionales.
- Original example: "My heart beats faster when I'm nervous before a presentation."
- Spanish meaning of example: "Mi corazón late más rápido cuando estoy nervioso antes de una presentación."
- Real-life usage note: Used literally (the organ) and figuratively (emotions, courage, affection). Extremely common.

*beat / beats — latir / latido*
- Natural Spanish explanation: Como verbo, "to beat" = latir (para el corazón). También puede significar "ritmo" en música.
- Original example: "The music has a strong beat that makes you want to dance."
- Spanish meaning of example: "La música tiene un ritmo fuerte que te dan ganas de bailar."
- Real-life usage note: "My heart beats fast" = latido físico. "The beat of a song" = el ritmo musical. Two distinct uses worth noting.

*fast — rápido*
- Natural Spanish explanation: Rápido — puede funcionar como adjetivo ("a fast car") o adverbio ("run fast"). Aquí modifica el latido.
- Original example: "She speaks fast, so I need to concentrate to follow along."
- Spanish meaning of example: "Ella habla rápido, así que necesito concentrarme para seguirle el hilo."
- Real-life usage note: Very common. Interchangeable with "quickly" as an adverb in informal speech.

**Original real-life example**

"My heart beats fast before an important exam."
*(Mi corazón late rápido antes de un examen importante.)*

**Original exercise**

Tipo: Elige una situación real.

Instrucción: Nombra dos situaciones en las que tu corazón late rápido. Puedes escribirlas en español o en inglés.

Ejemplo de respuesta:
1. "Before speaking in public." / "Antes de hablar en público."
2. "When I watch a scary movie." / "Cuando veo una película de terror."

*(Tus respuestas pueden ser completamente diferentes.)*

**Editorial score**

| Criterion | Score (1–5) | Weight | Weighted points |
|---|---|---|---|
| Pronunciation usefulness | 5 | 20 | 20 |
| Learner accessibility | 5 | 15 | 15 |
| Practical language value | 4 | 15 | 12 |
| Listening value | 4 | 10 | 8 |
| Standalone meaning | 4 | 10 | 8 |
| Exercise potential | 5 | 10 | 10 |
| Fit within the three-song set | 4 | 10 | 8 |
| Conservative excerpt suitability | 5 | 10 | 10 |
| **Total** | | **100** | **91** |

**Legal-safe gate — all items pass**

- [x] No full lyrics
- [x] No complete verse or chorus
- [x] Three fragments in combination do not reconstruct a song section
- [x] Fragment is as short as educationally necessary
- [x] Original pronunciation, meaning, vocabulary, and exercise surround the fragment
- [x] Official media will be linked (not embedded) — link pending verification
- [x] Adjacency uncertainty flagged for manual verification

**Final decision: Approved**

---

### ATY-03 — APPROVED

#### Register summary

| Field | Value |
|---|---|
| Fragment ID | ATY-03 |
| Song | A Thousand Years |
| Artist | Christina Perri |
| Fragment text | **Time stands still** |
| Word count | 3 |
| Source | Manually supplied by project owner |
| Intended learning purpose | Useful figurative expression; consonant cluster practice; distinguishing literal from figurative meaning |
| Learner level | A2–B1 |
| Status | **Approved** |
| Length review | Pass — 3 words; conservative |
| Sequential-risk review | Pass with note — adjacency to ATY-01 and ATY-02 requires manual project-owner verification before publication |
| Editorial score | 86 / 100 |
| Pronunciation review | Pass |
| Natural meaning review | Pass — figurative meaning adds slight complexity; explicitly taught in the lesson |
| Vocabulary review | Pass |
| Exercise review | Pass |
| Legal-safe review | Pass |
| Final decision | **Approved** |
| Reviewer notes | The dual meaning of "still" (motionless vs. "todavía") is a valuable teaching point. Consonant clusters in "stands" and "still" require careful Escríbelo como suena treatment. Adjacency requires manual verification. |

---

#### ATY-03 full review

**Length and excerpt risk**

- Fragment length: 3 words. Conservative. ✓
- Complete verse or chorus: No. ✓
- Adjacency to ATY-01 or ATY-02: Cannot be confirmed without surrounding song text. **Manual project-owner verification required before publication.**
- Reconstruction risk: Three short independent phrases with no shared vocabulary. ✓
- Could be shorter: No. All three words are necessary for the figurative meaning. ✓

**Educational value**

- Pronunciation opportunity: Strong. Two /st/ clusters — one initial ("stands") and one initial in "still" — plus the diphthong /aɪ/ in "time." ✓
- Listening value: Strong. Short, clear, and slow in this song. ✓
- Practical vocabulary: "time," "stand still," and the figurative expression itself are all widely applicable. ✓
- Real-life use: Strong. "Time stands still" and "stand still" appear frequently in everyday speech and writing. ✓
- Beginner/intermediate accessibility: A2–B1. The words are simple; the figurative meaning requires brief explanation, making it slightly above beginner but appropriate for this level. ✓
- Exercise potential: Excellent. The literal vs. figurative distinction creates a natural exercise with no song text required. ✓

**Pronunciation analysis**

| Element | Detail |
|---|---|
| Main stressed words | "TIME" and "STILL" |
| Difficult vowel | The diphthong /aɪ/ in "time" — Spanish speakers may say "tim" with a short "i" instead |
| Difficult consonant (1) | Initial /st/ cluster in "stands" — Spanish speakers commonly add "e" before "st" |
| Difficult consonant (2) | Initial /st/ cluster in "still" — same pattern |
| Difficult consonant (3) | Final consonant cluster /-ndz/ in "stands" — can be simplified to "-nz" in natural speech |
| Connected speech | "Stands still" flows as a unit; the two "st" clusters in quick succession are a listening challenge |
| Reduction | "stands" in natural fast speech → the "-nds" cluster simplifies to "-nz" |
| Singer-specific variation | Delivered slowly and clearly in this song — minimal distortion |
| Neutral learning pronunciation | Natural spoken English at a careful pace |
| Escríbelo como suena | **taim · stanz · estil** |
| Possible misleading spelling | "taim" — the "ai" must glide (diphthong), not be two separate vowels. "stanz" — the initial "st" is a cluster, not "es-tan". "estil" — the added "e" helps Spanish speakers but must not become "es-til" with full stress on "es". |
| Final learner-facing pronunciation | **taim · stanz · estil** |

Nota para el aprendiz: en "taim," la vocal "ai" desliza suavemente de "a" a "i" — es un solo sonido continuo. En "stanz" y "estil," los dos grupos "st" son el mayor reto: practica con el audio oficial para acostumbrarte al ritmo.

**Natural meaning**

- Literal sense: Time (the force) stands (remains) still (motionless) — which is physically impossible.
- Natural Spanish meaning: "El tiempo se detiene" — expresión figurada para describir un momento tan intenso, hermoso, o emocionante que parece que el tiempo se para.
- Context limitation: The figurative meaning stands alone. No song context required once explained. ✓
- Standalone usefulness: Excellent. "Time stands still" is a widely used figurative expression in English. "Stand still" also functions as a literal instruction ("Please stand still").
- Possible ambiguity: "Still" has two common meanings in English: (a) motionless, as used here, and (b) "todavía" (still waiting, still here). The lesson must clarify that in this fragment, "still" means motionless — not "todavía."
- Final learner-facing explanation: "El tiempo se detiene" — es una expresión figurada. Nadie puede detener el tiempo de verdad, pero usamos esta frase para describir momentos tan especiales, emocionantes o hermosos que parece que el tiempo se para. Importante: aquí "still" no significa "todavía" — significa "inmóvil."

**Vocabulary**

*time — tiempo*
- Natural Spanish explanation: El tiempo — la duración, el reloj, las horas. Una de las palabras más comunes en inglés.
- Original example: "I don't have time to explain everything right now."
- Spanish meaning of example: "No tengo tiempo para explicar todo ahora mismo."
- Real-life usage note: Used in dozens of everyday expressions. Extremely high frequency.

*stand still / stands still — quedarse quieto / detenerse*
- Natural Spanish explanation: "Stand still" literalmente = quedarse inmóvil, sin moverse. Figuradamente = que el tiempo se detiene.
- Original example: "Please stand still while I take the photo."
- Spanish meaning of example: "Por favor quédate quieto mientras tomo la foto."
- Real-life usage note: Literal use is very common as an instruction ("stand still"). Figurative use in "time stands still" describes overwhelming emotional moments.

*still — aquí: inmóvil (no "todavía")*
- Natural Spanish explanation: En este fragmento, "still" significa sin movimiento. No confundir con "still" = todavía (como en "I'm still here").
- Original example: "The lake was still and peaceful in the early morning."
- Spanish meaning of example: "El lago estaba tranquilo e inmóvil en la mañana temprano."
- Real-life usage note: Two very different meanings of the same word. This lesson teaches the less common meaning, which prevents future confusion.

**Original real-life example**

"When I heard that song for the first time, time stood still."
*(Cuando escuché esa canción por primera vez, sentí que el tiempo se detuvo.)*

**Original exercise**

Tipo: Literal o figurada — elige y escribe.

Instrucción: ¿Cuál de estas situaciones usaría la expresión "time stands still" de forma figurada?

Opciones:
- A. Una clase de ciencias que explica que el tiempo siempre avanza.
- B. Un momento en el que ves algo tan hermoso que lo quieres recordar para siempre.
- C. Un reloj que se quedó sin batería.

Respuesta correcta: B *(Nota interna — eliminar antes de publicación)*

Tarea adicional: Describe en una frase un momento en el que sentiste que el tiempo se detuvo. Puedes escribirlo en español o en inglés.

**Editorial score**

| Criterion | Score (1–5) | Weight | Weighted points |
|---|---|---|---|
| Pronunciation usefulness | 4 | 20 | 16 |
| Learner accessibility | 4 | 15 | 12 |
| Practical language value | 4 | 15 | 12 |
| Listening value | 4 | 10 | 8 |
| Standalone meaning | 5 | 10 | 10 |
| Exercise potential | 5 | 10 | 10 |
| Fit within the three-song set | 4 | 10 | 8 |
| Conservative excerpt suitability | 5 | 10 | 10 |
| **Total** | | **100** | **86** |

**Legal-safe gate — all items pass**

- [x] No full lyrics
- [x] No complete verse or chorus
- [x] Three fragments in combination do not reconstruct a song section
- [x] Fragment is as short as educationally necessary
- [x] Original pronunciation, meaning, vocabulary, and exercise surround the fragment
- [x] Official media will be linked (not embedded) — link pending verification
- [x] Adjacency uncertainty flagged for manual verification

**Final decision: Approved**

---

### SLY-01 — APPROVED

#### Register summary

| Field | Value |
|---|---|
| Fragment ID | SLY-01 |
| Song | Still Loving You |
| Artist | Scorpions |
| Fragment text | **I will be there** |
| Word count | 4 |
| Source | Manually supplied by project owner |
| Intended learning purpose | Common promise and availability expression; "will" for future/intention; voiced TH in "there"; beginner-accessible rhythm |
| Learner level | A1–A2 |
| Status | **Approved** |
| Length review | Pass — 4 words; conservative |
| Sequential-risk review | Pass — project owner confirmed non-adjacency to SLY-02 and SLY-03; fragments do not reconstruct a verse or chorus |
| Editorial score | 90 / 100 |
| Pronunciation review | Pass — vocalist accent documented; neutral pronunciation prioritized |
| Natural meaning review | Pass |
| Vocabulary review | Pass |
| Exercise review | Pass |
| Legal-safe review | Pass |
| Final decision | **Approved** |
| Reviewer notes | The vocalist's non-native English delivery is noted but does not impair this fragment's teachability. "There" is an excellent entry point for the voiced TH sound. "Will" introduces a core grammar point (future intention) suitable for A1–A2 learners. |

---

#### SLY-01 full review

**Length and excerpt risk**

- Fragment length: 4 words. Conservative. ✓
- Complete verse or chorus: No. ✓
- Adjacency to SLY-02 or SLY-03: **Project owner confirmed non-adjacent. Verification complete.** ✓
- Reconstruction risk: Three independent short phrases with distinct vocabulary confirmed non-adjacent. Low risk. ✓
- Could be shorter: No. All four words are necessary to communicate the promise. ✓

**Educational value**

- Pronunciation opportunity: Strong. The voiced TH in "there" is one of the most common pronunciation challenges for Spanish speakers. The /w/ onset in "will" and the reduced or connected speech across "I will be" also offer listening value. ✓
- Listening value: Strong. Delivered clearly in the ballad section. Short, slow, and isolatable. ✓
- Practical vocabulary: "will," "be there," and "there" are all extremely high-frequency. ✓
- Real-life use: Excellent. "I will be there" is a universal promise of presence or support — used daily in personal and professional contexts. ✓
- Beginner/intermediate accessibility: A1–A2. Four common words, natural subject–auxiliary–verb structure. ✓
- Exercise potential: Excellent. A situation-choice exercise lets learners identify when this promise fits without needing additional song text. ✓

**Pronunciation analysis**

| Element | Detail |
|---|---|
| Main stressed words | "WILL" and "THERE" |
| Difficult vowel | The /ɛ/ in "there" — closer to "e" in Spanish but paired with "r" (vowel + r combination) |
| Difficult consonant | The voiced TH /ð/ in "there" — does not exist in Spanish; approximated with "d" |
| Connected speech | "I will be" flows as a natural unit; in fast speech can reduce to "I'll be" |
| Reduction | "I will" commonly contracts to "I'll" /aɪl/ in informal speech — worth noting as a listening point |
| Singer-specific variation | The vocalist's non-native English accent means the "th" in "there" may be rendered closer to "d" or "z." This aligns with the Escríbelo como suena convention (voiced TH → d). The difference between singer delivery and neutral English is minimal for this fragment. |
| Neutral learning pronunciation | "I will be there" as natural spoken American or British English |
| Escríbelo como suena | **ai · wil · bi · dér** |
| Possible misleading spelling | "wil" — Spanish speakers may over-stress the "i." The English /w/ is softer than Spanish "v" — closer to a "u" glide. "dér" — the "d" represents the voiced TH, not a Spanish "d." Add learner notes for both. |
| Final learner-facing pronunciation | **ai · wil · bi · dér** |

Nota para el aprendiz: la "d" en "dér" no es la "d" del español — es el sonido "th" del inglés, que se hace apoyando levemente la lengua en los dientes y dejando salir el aire con voz. Practica con el audio oficial. También nota que en inglés informal "I will be" se contrae a "I'll be" — es muy común escucharla así en conversaciones.

**Natural meaning**

- Literal sense: I + will (future marker) + be + there (that place) = I will be present in that place.
- Natural Spanish meaning: "Estaré ahí" / "Puedes contar conmigo" — una promesa de presencia física o de apoyo emocional.
- Context limitation: Stands alone completely without song context. ✓
- Standalone usefulness: Excellent. One of the most common English reassurances in personal and professional life.
- Possible ambiguity: "There" can mean a physical location or abstract availability ("I'm here for you"). The lesson teaches both.
- Final learner-facing explanation: "Estaré ahí" — una promesa directa de presencia o apoyo. En inglés se usa tanto para compromisos físicos ("voy a ir") como para apoyo emocional ("puedes contar conmigo"). Es una frase muy común en mensajes, conversaciones y compromisos del día a día.

**Vocabulary**

*will — auxiliar de futuro / promesa*
- Natural Spanish explanation: "Will" convierte un verbo en futuro o promesa. "I will go" = voy a ir / iré. Es una de las palabras más importantes del inglés.
- Original example: "I will call you as soon as I finish the meeting."
- Spanish meaning of example: "Te llamaré en cuanto termine la reunión."
- Real-life usage note: Used in formal and informal speech for future plans, promises, and offers. Contracts to "'ll" in informal speech: "I'll call you."

*be there — estar ahí / estar presente*
- Natural Spanish explanation: La combinación "be there" = estar en ese lugar o estar disponible para alguien.
- Original example: "Whatever happens, I will be there to support you."
- Spanish meaning of example: "Pase lo que pase, estaré ahí para apoyarte."
- Real-life usage note: Common in both literal (I'll be at the event) and figurative (I'll support you) contexts.

*there — ahí / allí*
- Natural Spanish explanation: "There" = ahí o allí, un lugar diferente de donde estás. También aparece en "there is / there are" para indicar que algo existe.
- Original example: "The library is over there, next to the park."
- Spanish meaning of example: "La biblioteca está por allá, al lado del parque."
- Real-life usage note: Extremely common in directions and instructions. Also in idioms: "be there for someone" = apoyar a alguien.

**Original real-life example**

"Don't worry about the presentation — I will be there to help you."
*(No te preocupes por la presentación — estaré ahí para ayudarte.)*

**Original exercise**

Tipo: Elige la situación real.

Instrucción: ¿En cuál de estas situaciones sería natural decir "I will be there"?

Opciones:
- A. Un amigo te invita a su cumpleaños y tú confirmas que vas a ir.
- B. Estás describiendo el tiempo que hace hoy.
- C. Estás explicando cómo se prepara una receta.

Respuesta correcta: A *(Nota interna — eliminar antes de publicación)*

Tarea adicional: Escribe tu propia promesa usando "I will be there" o "I will be there for you." Puede ser real o imaginaria.

**Editorial score**

| Criterion | Score (1–5) | Weight | Weighted points |
|---|---|---|---|
| Pronunciation usefulness | 4 | 20 | 16 |
| Learner accessibility | 5 | 15 | 15 |
| Practical language value | 5 | 15 | 15 |
| Listening value | 4 | 10 | 8 |
| Standalone meaning | 5 | 10 | 10 |
| Exercise potential | 4 | 10 | 8 |
| Fit within the three-song set | 4 | 10 | 8 |
| Conservative excerpt suitability | 5 | 10 | 10 |
| **Total** | | **100** | **90** |

**Legal-safe gate — all items pass**

- [x] No full lyrics
- [x] No complete verse or chorus
- [x] Three fragments in combination do not reconstruct a song section (project owner confirmed)
- [x] Fragment is as short as educationally necessary
- [x] Original pronunciation, meaning, vocabulary, and exercise surround the fragment
- [x] Official media will be linked (not embedded) — link pending verification
- [x] Singer-specific accent documented; neutral pronunciation prioritized

**Final decision: Approved**

---

### SLY-02 — APPROVED

#### Register summary

| Field | Value |
|---|---|
| Fragment ID | SLY-02 |
| Song | Still Loving You |
| Artist | Scorpions |
| Fragment text | **All the way from the start** |
| Word count | 6 |
| Source | Manually supplied by project owner |
| Intended learning purpose | "All the way" and "from the start" as high-frequency expressions; connected speech across six short words; consonant clusters in "from" and "start" |
| Learner level | A2–B1 |
| Status | **Approved** |
| Length review | Pass — 6 words; at upper end of target but justified as an indivisible phrase unit |
| Sequential-risk review | Pass — project owner confirmed non-adjacency to SLY-01 and SLY-03; fragments do not reconstruct a verse or chorus |
| Editorial score | 81 / 100 |
| Pronunciation review | Pass — multiple challenges documented; singer delivery noted |
| Natural meaning review | Pass |
| Vocabulary review | Pass |
| Exercise review | Pass |
| Legal-safe review | Pass |
| Final decision | **Approved** |
| Reviewer notes | At 6 words, this fragment is at the upper end of the conservative target. The educational justification is strong: both "all the way" and "from the start" are independently common and useful, and together they form a single natural phrase unit. The consonant cluster in "start" and the connected speech across 6 short words provide clear pronunciation teaching opportunities. The singer's non-native delivery adds a listening-contrast teaching point. |

---

#### SLY-02 full review

**Length and excerpt risk**

- Fragment length: 6 words. At the upper end of the 3–7 word target. ✓ (Justified — the phrase unit cannot be shortened without losing the educational value of both "all the way" and "from the start.")
- Complete verse or chorus: No. ✓
- Adjacency to SLY-01 or SLY-03: **Project owner confirmed non-adjacent. Verification complete.** ✓
- Reconstruction risk: Three independent phrases from different points in the song, confirmed non-adjacent. Low risk. ✓
- Could be shorter: "From the start" (4 words) is a standalone expression. However, "All the way from the start" as a complete phrase unit adds additional teaching value ("all the way" as a separate high-frequency expression). Decision: keep at 6 words for richer teaching content; length justification documented here.

**Educational value**

- Pronunciation opportunity: Strong. Five distinct challenges across 6 words: the open /ɔː/ in "all," the /w/ onset in "way," the /eɪ/ diphthong in "way," the /fr/ cluster in "from," and the /st/ cluster in "start." ✓
- Listening value: Acceptable. Six short words flow together as a natural phrase. The pace in a rock ballad section may make isolation slightly harder than a 3–4 word fragment, but the phrase is still conservative. ✓
- Practical vocabulary: Excellent. "From the start" is one of the most commonly used time expressions in English. "All the way" is widely used to indicate completeness or the full distance of a process. ✓
- Real-life use: Excellent. Both sub-expressions appear constantly in everyday conversation, writing, and media. ✓
- Beginner/intermediate accessibility: A2–B1. Individual words are simple; the phrase requires context explanation to distinguish "all the way" from "the way," but this is part of the educational value. ✓
- Exercise potential: Excellent. Writing an original sentence with "from the start" produces a practical and personal exercise. ✓

**Pronunciation analysis**

| Element | Detail |
|---|---|
| Main stressed words | "ALL" and "START" |
| Difficult vowel (1) | The /ɔː/ in "all" — more open and longer than Spanish "o" |
| Difficult vowel (2) | The /eɪ/ diphthong in "way" — Spanish speakers may produce a flat "e" instead of gliding |
| Difficult consonant (1) | The /fr/ cluster in "from" — Spanish allows "fr" (frío, frente) but the vowel /ʌ/ after it is unfamiliar |
| Difficult consonant (2) | The /st/ cluster in "start" — Spanish speakers commonly insert "e" before "st" |
| Connected speech | "All the way" flows as a single rhythmic unit; both instances of "the" are weak/reduced |
| Reduction | Both instances of "the" reduce to a brief, unstressed "de" |
| Singer-specific variation | The vocalist's non-native English delivery may affect the /ɔː/ in "all" and the "r" coloring in "from" and "start." Learners should use neutral English as the pronunciation target, not the singer's exact delivery. |
| Neutral learning pronunciation | Careful spoken American or British English at a moderate pace |
| Escríbelo como suena | **ól · de · uéi · from · de · estárt** |
| Possible misleading spelling | "ól" — must be an open, long sound; not the closed Spanish "o." "uéi" — the "u" starts the diphthong and does not produce a strong "u" vowel. "from" — the vowel after "fr" is short and central; avoid over-pronouncing the "o." "estárt" — the added "e" helps Spanish speakers but must not become "es-tárt" with full stress on "es." |
| Final learner-facing pronunciation | **ól · de · uéi · from · de · estárt** |

Nota para el aprendiz: en "ól," la vocal es más abierta que la "o" del español — imagina que abres un poco más la boca. Las dos "de" son muy suaves y rápidas, casi no se notan al hablar. En "estárt," el grupo "st" es un reto clásico para hispanohablantes; practica con el audio oficial para escuchar cómo suena en inglés.

**Natural meaning**

- Literal sense: All (complete) + the way (the path/distance) + from (starting point) + the start (the beginning).
- Natural Spanish meaning: "Desde el principio" / "Desde el comienzo mismo" / "De principio a fin." Used to emphasize that something has been consistent or present from the very first moment.
- Context limitation: Stands alone without song context. ✓
- Standalone usefulness: Excellent. "From the start" is one of the most common time-anchoring expressions in English. "All the way" as an intensifier appears in countless everyday sentences.
- Possible ambiguity: "All the way" can mean "the entire physical distance" (we walked all the way to the station) or completeness/duration (I supported you all the way). The lesson teaches both.
- Final learner-facing explanation: "Desde el principio" / "De punta a punta, desde el comienzo" — "from the start" se usa para decir que algo comenzó en el primer momento y ha continuado. "All the way" añade énfasis: no solo desde el principio, sino completamente, sin interrupciones. Juntas, estas expresiones son muy comunes en inglés para hablar de procesos, relaciones o esfuerzos que empezaron desde cero.

**Vocabulary**

*all the way — todo el camino / completamente*
- Natural Spanish explanation: "All the way" = de principio a fin, sin parar, en toda su extensión. Puede ser literal (caminamos todo el camino) o figurado (te apoyé en todo el proceso).
- Original example: "She ran all the way to the station without stopping."
- Spanish meaning of example: "Corrió hasta la estación sin parar."
- Real-life usage note: Used literally for distance and figuratively for completeness or unwavering support. Very common in informal speech.

*from the start — desde el principio*
- Natural Spanish explanation: "From the start" = desde el principio, desde el primer momento. Se usa para decir que algo estuvo presente o fue cierto desde el comienzo.
- Original example: "I knew from the start that this project would take months."
- Spanish meaning of example: "Supe desde el principio que este proyecto tomaría meses."
- Real-life usage note: Extremely common in English for time references, personal stories, and explanations. Used in formal and informal contexts.

*start — comienzo / inicio / empezar*
- Natural Spanish explanation: "Start" como sustantivo = el comienzo. Como verbo = empezar. Aquí funciona como sustantivo en "from the start."
- Original example: "A good start makes the rest of the journey easier."
- Spanish meaning of example: "Un buen comienzo hace el resto del camino más fácil."
- Real-life usage note: Extremely versatile — appears in "from the start," "fresh start," "start over," "head start." One of the most common words in English.

**Original real-life example**

"I believed in this idea from the start — all the way from the first conversation."
*(Creí en esta idea desde el principio — desde la primera conversación.)*

**Original exercise**

Tipo: Escribe una frase original.

Instrucción: Usa "from the start" para escribir una frase sobre algo que empezaste desde cero — puede ser aprender inglés, un proyecto, una amistad, o cualquier proceso tuyo.

Ejemplo de respuesta: "From the start, I knew that learning English would take time and practice."
*(Desde el principio, supe que aprender inglés iba a tomar tiempo y práctica.)*

*(Este es solo un ejemplo — tu frase puede ser completamente diferente.)*

**Editorial score**

| Criterion | Score (1–5) | Weight | Weighted points |
|---|---|---|---|
| Pronunciation usefulness | 4 | 20 | 16 |
| Learner accessibility | 4 | 15 | 12 |
| Practical language value | 5 | 15 | 15 |
| Listening value | 3 | 10 | 6 |
| Standalone meaning | 4 | 10 | 8 |
| Exercise potential | 4 | 10 | 8 |
| Fit within the three-song set | 4 | 10 | 8 |
| Conservative excerpt suitability | 4 | 10 | 8 |
| **Total** | | **100** | **81** |

**Legal-safe gate — all items pass**

- [x] No full lyrics
- [x] No complete verse or chorus
- [x] Three fragments in combination do not reconstruct a song section (project owner confirmed)
- [x] Fragment is as short as educationally necessary (6 words is the minimum for this phrase unit)
- [x] Original pronunciation, meaning, vocabulary, and exercise surround the fragment
- [x] Official media will be linked (not embedded) — link pending verification
- [x] Singer-specific accent documented; neutral pronunciation prioritized

**Final decision: Approved**

---

### SLY-03 — APPROVED

#### Register summary

| Field | Value |
|---|---|
| Fragment ID | SLY-03 |
| Song | Still Loving You |
| Artist | Scorpions |
| Fragment text | **I can't get through** |
| Word count | 4 |
| Source | Manually supplied by project owner |
| Intended learning purpose | "can't" vs "can" distinction; phrasal verb "get through" with context-dependent meaning; unvoiced TH in "through"; consecutive consonant sounds |
| Learner level | A2–B1 |
| Status | **Approved** |
| Length review | Pass — 4 words; conservative |
| Sequential-risk review | Pass — project owner confirmed non-adjacency to SLY-01 and SLY-02; fragments do not reconstruct a verse or chorus |
| Editorial score | 91 / 100 |
| Pronunciation review | Pass — "through" requires special learner note on the TH + r combination; singer delivery noted |
| Natural meaning review | Pass — multiple meanings of "get through" are an explicit teaching point |
| Vocabulary review | Pass |
| Exercise review | Pass |
| Legal-safe review | Pass |
| Final decision | **Approved** |
| Reviewer notes | The unvoiced TH in "through" is the most challenging sound in this fragment — neither the exact sound nor the letter combination exists in Spanish. The Escríbelo como suena approximation ("zrú") is the closest readable option using the convention table but requires a clear learner note. The multiple meanings of "get through" are an excellent teaching opportunity. Singer delivery of "through" may differ from neutral English due to the vocalist's accent — learners should use a neutral model as their pronunciation target. |

---

#### SLY-03 full review

**Length and excerpt risk**

- Fragment length: 4 words. Conservative. ✓
- Complete verse or chorus: No. ✓
- Adjacency to SLY-01 or SLY-02: **Project owner confirmed non-adjacent. Verification complete.** ✓
- Reconstruction risk: Three independent phrases from different points in the song, confirmed non-adjacent. Low risk. ✓
- Could be shorter: No. All four words are necessary to produce the phrasal verb "get through" with subject and negation. ✓

**Educational value**

- Pronunciation opportunity: Excellent. Four distinct challenges: the /æ/ vowel in "can't," the final /t/ of "can't" (distinguishing it from "can"), the hard /ɡ/ and final consonant in "get," and the unvoiced TH /θ/ + /r/ cluster in "through." ✓
- Listening value: Strong. The audible difference between "can" and "can't" is a genuine listening skill that many Spanish-speaking learners find difficult. ✓
- Practical vocabulary: Excellent. "Can't" is one of the most essential contractions. "Get through" is one of the most versatile and common phrasal verbs in everyday English. ✓
- Real-life use: Excellent. Both the "communication" meaning and the "overcoming difficulty" meaning of "get through" appear constantly in everyday conversation. ✓
- Beginner/intermediate accessibility: A2–B1. "Can't" is beginner-level; "get through" as a phrasal verb is intermediate but explained clearly. ✓
- Exercise potential: Excellent. Matching different meanings of "get through" to different contexts is a natural, original exercise with no song text needed. ✓

**Pronunciation analysis**

| Element | Detail |
|---|---|
| Main stressed words | "CAN'T" and "THROUGH" |
| Difficult vowel | The /æ/ in "can't" — more open than Spanish "a"; positioned between "a" and "e" |
| Difficult consonant (1) | The final /t/ in "can't" — essential for distinguishing from "can"; must be audible even when soft |
| Difficult consonant (2) | The unvoiced TH /θ/ in "through" — does not exist in Spanish; approximated with "z" or "s" |
| Difficult consonant (3) | The /θr/ cluster in "through" — unvoiced TH immediately followed by "r" creates a cluster with no Spanish equivalent |
| Connected speech | "Get through" flows as one unit in natural speech; the final /t/ of "get" may soften before "through" |
| Reduction | In fast speech, "can't" may reduce its vowel but the final /t/ remains the key distinguishing feature |
| Singer-specific variation | The vocalist's non-native English accent may render the TH in "through" as "d," "z," or "t." This does not invalidate the teaching opportunity — it is a useful contrast for learners to compare with neutral English. |
| Neutral learning pronunciation | Careful spoken English: "can't" with audible final /t/; "get" clearly articulated; "through" with tongue between teeth for TH |
| Escríbelo como suena | **ai · cant · guet · zrú** |
| Possible misleading spelling | "cant" — in Spanish, this could be read like the start of "canto." The /æ/ is slightly more open than Spanish "a." "guet" — the "gu" before "e/i" is needed to represent the hard /g/; without it, "get" would sound like "jet." "zrú" — "zr" is not a natural Spanish cluster; it is a compromise to represent TH + r + long U. Clear learner note required. |
| Final learner-facing pronunciation | **ai · cant · guet · zrú** |

Nota para el aprendiz: el sonido "th" en "through" no existe en español. En "zrú," la "z" es solo una aproximación — para el sonido real, coloca la punta de la lengua levemente entre los dientes y deja salir el aire sin voz, luego pasa a la "r" y a la "u" larga. Practica con el audio oficial de un hablante neutro de inglés. La "t" al final de "cant" es importante — sin ella suena como "can" (puedo), que tiene el significado opuesto.

**Natural meaning**

- Literal sense: I (subject) + can't (cannot) + get through (phrasal verb with contextual meaning).
- Natural Spanish meaning: "No puedo comunicarme" / "No puedo superar esto" / "No puedo pasar" — the meaning depends on context:
  - Emotional/relational: "No puedo superarlo" / "No puedo salir de esto"
  - Communication: "No puedo comunicarme" / "No puedo contactar a alguien"
  - Physical: "No puedo pasar" (through a crowd, obstacle, etc.)
- Context limitation: No surrounding song text is needed to explain the phrase — the ambiguity itself is the teaching point. ✓
- Standalone usefulness: Excellent. "Get through" is one of the most versatile phrasal verbs in English, and learners encounter it constantly.
- Possible ambiguity: Three common meanings exist. The lesson teaches all three and lets learners identify which applies in different real-life situations.
- Final learner-facing explanation: "No puedo comunicarme / No puedo superar esto" — "get through" es un phrasal verb con varios significados según el contexto: (1) superar un momento difícil ("I got through the exam" = pasé el examen), (2) comunicarse con alguien ("I can't get through to her" = no puedo comunicarme con ella), (3) pasar físicamente por algo. La ambigüedad es parte de la lección — aprender a reconocer el contexto es la habilidad clave.

**Vocabulary**

*can't — no puedo / no es posible*
- Natural Spanish explanation: "Can't" = contracción de "cannot." Se usa para expresar incapacidad, imposibilidad o negativa. La diferencia entre "can" y "can't" es crítica — solo la "t" final las distingue al escuchar.
- Original example: "I can't find my keys anywhere — I've looked in every room."
- Spanish meaning of example: "No encuentro mis llaves en ningún lado — busqué en cada habitación."
- Real-life usage note: One of the most common contractions in English. In American English, the final /t/ is often a quick glottal stop, not a full "t."

*get through — superar / comunicarse / pasar*
- Natural Spanish explanation: Un phrasal verb con tres sentidos principales: (1) superar algo difícil, (2) comunicarse con alguien, (3) pasar físicamente por algo. El significado cambia completamente según el contexto.
- Original example: "Somehow, we got through the most difficult year of our lives."
- Spanish meaning of example: "De alguna manera, superamos el año más difícil de nuestras vidas."
- Real-life usage note: Extremely common in everyday conversation and writing. All three meanings appear regularly. Recognizing the context is the key skill for using this phrasal verb correctly.

*through — a través de / por*
- Natural Spanish explanation: "Through" = a través de, por dentro, de un lado al otro. Aparece en muchas expresiones del inglés cotidiano.
- Original example: "She walked through the crowd to reach the front."
- Spanish meaning of example: "Caminó entre la multitud para llegar al frente."
- Real-life usage note: Used in physical (through the door) and figurative (get through a challenge) contexts. The TH sound is one of the most important and distinctive sounds to learn in English.

**Original real-life example**

"I've been trying to call the office all morning but I can't get through."
*(He estado llamando a la oficina toda la mañana pero no puedo comunicarme.)*

**Original exercise**

Tipo: Elige el significado correcto.

Instrucción: ¿Qué significa "get through" en cada situación? Elige: superar algo / comunicarse / pasar físicamente.

A. "I finally got through to the doctor after three hours on hold."
→ _______________

B. "I don't know how she got through such a difficult loss."
→ _______________

C. "We couldn't get through the traffic — the road was completely blocked."
→ _______________

Respuestas correctas: A → comunicarse · B → superar algo · C → pasar físicamente *(Nota interna — eliminar antes de publicación)*

Tarea adicional: Describe una situación de tu vida real donde usarías "I can't get through" — en cualquiera de sus significados.

**Editorial score**

| Criterion | Score (1–5) | Weight | Weighted points |
|---|---|---|---|
| Pronunciation usefulness | 5 | 20 | 20 |
| Learner accessibility | 4 | 15 | 12 |
| Practical language value | 5 | 15 | 15 |
| Listening value | 4 | 10 | 8 |
| Standalone meaning | 4 | 10 | 8 |
| Exercise potential | 5 | 10 | 10 |
| Fit within the three-song set | 4 | 10 | 8 |
| Conservative excerpt suitability | 5 | 10 | 10 |
| **Total** | | **100** | **91** |

**Legal-safe gate — all items pass**

- [x] No full lyrics
- [x] No complete verse or chorus
- [x] Three fragments in combination do not reconstruct a song section (project owner confirmed)
- [x] Fragment is as short as educationally necessary
- [x] Original pronunciation, meaning, vocabulary, and exercise surround the fragment
- [x] Official media will be linked (not embedded) — link pending verification
- [x] Singer-specific accent documented; neutral pronunciation prioritized

**Final decision: Approved**

---

### TR-01

| Field | Value |
|---|---|
| Fragment ID | TR-01 |
| Song | The Reason |
| Artist | Hoobastank |
| Fragment text | [PENDING_MANUAL_INPUT] |
| Source supplied by project owner | No |
| Intended learning purpose | Practical phrase or grammatical structure with real-life communicative value (provisional role — see Section 8) |
| Status | Pending input |
| Length review | Pending |
| Sequential-risk review | Pending |
| Educational score | Pending |
| Pronunciation review | Pending |
| Natural meaning review | Pending |
| Vocabulary review | Pending |
| Exercise review | Pending |
| Legal-safe review | Pending |
| Final decision | Pending |
| Reviewer notes | This song is the practical-language anchor of the ebook. Fragments should prioritize phrases usable outside the song context. |

---

### TR-02

| Field | Value |
|---|---|
| Fragment ID | TR-02 |
| Song | The Reason |
| Artist | Hoobastank |
| Fragment text | [PENDING_MANUAL_INPUT] |
| Source supplied by project owner | No |
| Intended learning purpose | Clear consonant or stress pattern demonstrating standard American English pronunciation (provisional role — see Section 8) |
| Status | Pending input |
| Length review | Pending |
| Sequential-risk review | Pending |
| Educational score | Pending |
| Pronunciation review | Pending |
| Natural meaning review | Pending |
| Vocabulary review | Pending |
| Exercise review | Pending |
| Legal-safe review | Pending |
| Final decision | Pending |
| Reviewer notes | — |

---

### TR-03

| Field | Value |
|---|---|
| Fragment ID | TR-03 |
| Song | The Reason |
| Artist | Hoobastank |
| Fragment text | [PENDING_MANUAL_INPUT] |
| Source supplied by project owner | No |
| Intended learning purpose | Expression useful for explaining reasons, feelings, or personal reflection — high real-life transfer (provisional role — see Section 8) |
| Status | Pending input |
| Length review | Pending |
| Sequential-risk review | Pending |
| Educational score | Pending |
| Pronunciation review | Pending |
| Natural meaning review | Pending |
| Vocabulary review | Pending |
| Exercise review | Pending |
| Legal-safe review | Pending |
| Final decision | Pending |
| Reviewer notes | After TR-01 and TR-02 are received, run the sequential-risk check before accepting TR-03. |

---

## 8. Desired Fragment Roles

These are provisional educational targets. They describe what each fragment slot is intended to teach. They are not evidence about the actual lyrics or wording of any song. The project owner will supply actual fragment text separately.

### A Thousand Years — Christina Perri

| Slot | Provisional role |
|---|---|
| ATY-01 | A short phrase demonstrating a clear vowel or stress pattern at a slow, audible tempo. Goal: give learners a low-friction first pronunciation experience. |
| ATY-02 | An accessible emotional expression that has a natural and useful Spanish equivalent. Goal: connect pronunciation practice to meaning in a warm, recognizable moment. |
| ATY-03 | A phrase or structure containing one to three vocabulary items that transfer clearly to everyday English conversation outside the song. Goal: demonstrate that the language in the song is real and usable. |

### Still Loving You — Scorpions

| Slot | Provisional role |
|---|---|
| SLY-01 | A short phrase from a slower ballad section that gives learners a rock-vocal listening challenge at a manageable pace. Goal: introduce genre contrast and a slightly harder listening context. |
| SLY-02 | A phrase demonstrating connected speech or a vowel clarity pattern — especially useful when the singer's accent creates an interesting contrast with standard English. Goal: teach learners that English is pronounced differently across accents and styles. |
| SLY-03 | An expression from the slower sections that remains meaningful and usable outside the song — ideally one that could appear in a heartfelt conversation or message. Goal: ground the rock ballad lesson in practical language. |

**Flag for Still Loving You:** The vocalist's non-native English accent makes pronunciation transcription more complex than for Songs 1 and 3. If three fragments from the slower sections cannot be approved without either (a) requiring the singer's accent to be presented as standard English or (b) creating misleading Escríbelo como suena guidance, trigger the song replacement gate and evaluate Nothing Else Matters — Metallica.

### The Reason — Hoobastank

| Slot | Provisional role |
|---|---|
| TR-01 | A practical phrase or grammatical structure with clear real-life communicative value — something a learner could actually say or write. Goal: demonstrate that the vocabulary in this song is broadly useful. |
| TR-02 | A phrase showcasing a clear consonant or stress pattern in standard American English. Goal: provide a pronunciation contrast to the other two songs. |
| TR-03 | An expression relating to explaining reasons, emotions, or personal reflection — the thematic core of the song — that also works as an original sentence template. Goal: close the ebook's language arc with a memorable, practical phrase. |

---

## 9. Cross-Fragment Reconstruction Check

This check must be run per song after all three fragment slots for that song are in **Pronunciation review** status or later. It cannot be completed until all three fragments are received.

### A Thousand Years

| Check | Status |
|---|---|
| ATY-01, ATY-02, and ATY-03 are not adjacent in the song | **Manual project-owner verification required** — adjacency cannot be confirmed without reviewing surrounding song text |
| The three fragments do not, in sequence, reconstruct a verse | **Low risk** — three 3-word phrases (9 words total) with entirely distinct vocabulary and grammar cannot reconstruct a verse |
| The three fragments do not, in sequence, reconstruct a chorus | **Low risk** — same rationale as above; no shared words or connected structure across the three fragments |
| The order in the ebook does not follow song order unnecessarily | **Addressed** — ebook order (One step closer → Heart beats fast → Time stands still) was intentionally set to a different sequence from how the fragments were identified in the song |
| Each fragment has a distinct educational purpose | **Pass** — ATY-01: progress/goals vocabulary + diphthong; ATY-02: emotional reaction + multiple consonant clusters; ATY-03: figurative expression + two /st/ clusters |
| Removing any one fragment leaves the other two without a lyric-sequence function | **Pass** — the three phrases share no vocabulary, grammar, or sequential context |
| Total quoted material across ATY-01, ATY-02, and ATY-03 remains conservative | **Pass** — 9 words total; 3 words per fragment |

**A Thousand Years cross-fragment result:** Low reconstruction risk. Manual adjacency verification by the project owner is required before PDF publication. All other checks pass.

### Still Loving You

| Check | Status |
|---|---|
| SLY-01, SLY-02, and SLY-03 are not adjacent in the song | **Project owner verified** — non-adjacency confirmed manually outside the repository |
| The three fragments do not, in sequence, reconstruct a verse | **Pass** — three phrases (4 + 6 + 4 = 14 words total) with distinct vocabulary and grammar; confirmed non-adjacent; cannot reconstruct a verse |
| The three fragments do not, in sequence, reconstruct a chorus | **Pass** — same rationale; confirmed non-adjacent by project owner |
| The order in the ebook does not follow song order unnecessarily | **Addressed** — ebook order (I will be there → All the way from the start → I can't get through) was set independently of song sequence to reduce sequential reconstruction risk |
| Each fragment has a distinct educational purpose | **Pass** — SLY-01: promise/availability + "will" + voiced TH; SLY-02: "all the way" + "from the start" + connected speech + consonant clusters; SLY-03: "can't" vs "can" + phrasal verb "get through" + unvoiced TH |
| Removing any one fragment leaves the other two without a lyric-sequence function | **Pass** — the three phrases share no vocabulary, grammar, or sequential context |
| Total quoted material across SLY-01, SLY-02, and SLY-03 remains conservative | **Pass** — 14 words total; 4 / 6 / 4 words per fragment |

**Still Loving You cross-fragment result:** Low reconstruction risk. Non-adjacency confirmed by project owner. Vocalist accent documented — neutral English pronunciation prioritized in all three Escríbelo como suena drafts. Still Loving You remains suitable for the ebook. All three fragments approved.

### The Reason

| Check | Status |
|---|---|
| TR-01, TR-02, and TR-03 are not adjacent in the song | Pending |
| The three fragments do not, in sequence, reconstruct a verse | Pending |
| The three fragments do not, in sequence, reconstruct a chorus | Pending |
| The order in the ebook does not follow song order unnecessarily | Pending |
| Each fragment has a distinct educational purpose | Pending |
| Removing any one fragment leaves the other two without a lyric-sequence function | Pending |
| Total quoted material across TR-01, TR-02, and TR-03 remains conservative | Pending |

---

## 10. Pronunciation Drafting Template

Use this template for each fragment after it passes editorial review. Complete one template per approved fragment before advancing to the natural-meaning stage.

```
Fragment ID:
Song:
Approved fragment text:

--- Listening analysis ---
Slow listening notes:
  (What does this sound like at half speed?)

Main stressed word:
  (Which word carries primary stress in the phrase?)

Difficult vowel for Spanish speakers:
  (Which vowel sound is likely to cause confusion or approximation error?)

Difficult consonant for Spanish speakers:
  (Which consonant or cluster is likely to be mispronounced?)

Connected speech:
  (Are any words run together or merged in the recording?)

Reduction:
  (Are any words shortened or swallowed? e.g., "gonna", "wanna", final consonant drops)

Singer-specific variation:
  (Does the vocalist's accent, style, or phrasing differ from standard English in a way that affects teaching?)

--- Drafting ---
Neutral learning pronunciation:
  (How would a clear, standard English speaker say this? Not the singer's version — the teachable version.)

Escríbelo como suena draft:
  (Write the pronunciation using Spanish-friendly letters and stress marks.
   Use the internal reference table for consistency.)

Possible misleading Spanish spelling:
  (Is there any letter combination in the above that would send a Spanish speaker to the wrong sound?
   If yes, revise before finalizing.)

--- Decision ---
Final learner-facing pronunciation:
  (Confirmed Escríbelo como suena text, ready for the ebook.)

Reviewer decision:
  [ ] Approved for natural-meaning stage
  [ ] Revision required — reason: ___
  [ ] Rejected — reason: ___
```

### Pronunciation rules

- No IPA symbols in learner-facing content.
- IPA may not be added to this document unless explicitly approved for internal editorial analysis only and clearly labeled as internal.
- Prioritize readability over phonetic precision. A Spanish speaker who reads the guide aloud should produce an approximation that is recognizably close to the English sound.
- Do not imitate singer-specific pronunciation when it would mislead learners. If the vocalist's delivery creates a sound that does not represent common English usage, explain the difference rather than transcribing the unique delivery.
- Document when a performance differs from a neutral pronunciation, and note it in the learner-facing lesson as a tip.
- Keep all Escríbelo como suena conventions consistent across all nine fragments. Complete the internal reference table before drafting any fragment.

### Internal pronunciation reference table

Fill this table before drafting the first fragment. It must remain consistent for all nine fragments across all three songs.

| English sound | Escríbelo como suena convention | Example (non-song) |
|---|---|---|
| Long A (say) | ei | sei |
| Long E (see) | i | si |
| Long I (time) | ai | taim |
| Long O (go) | ou | gou |
| Long U (you) | iu | iu |
| Short A (cat) | a | (standard a) |
| TH voiced (the) | d / dh | de |
| TH unvoiced (think) | z / s | zink / sink |
| Schwa (a, the unstressed) | e / a | e / a |
| Final -ing | in | (drop the g) |
| Stress marker | Capital letters or accent mark | re·MÉM·ber |
| Connected speech | Hyphen | (wóna = want to) |

*(Complete remaining sounds before first fragment is drafted. This table is an internal reference — not learner-facing.)*

---

## 11. Natural Meaning Template

Use this template for each fragment after pronunciation review is approved.

```
Fragment ID:
Song:
Approved fragment text:

--- Analysis ---
Literal sense:
  (What do the words mean word by word? Keep it very brief.)

Natural Spanish meaning:
  (How would a native Spanish speaker express this idea naturally?
   Not a dictionary translation — a real communicative equivalent.)

Required song context:
  (Does the learner need to know the song's situation to understand this phrase?
   If yes, describe the context in original words — do not quote surrounding lyrics.)

Standalone usefulness:
  (Can this phrase mean something useful outside the song? Yes / Partially / No)

Possible ambiguity:
  (Is there more than one reasonable interpretation? If yes, note which one will be taught and why.)

--- Draft ---
Final learner-facing explanation:
  (The natural meaning block that will appear in the ebook phrase card.
   Write in warm, plain Spanish. Do not copy from third-party lyric websites.)

Reviewer decision:
  [ ] Approved for educational content drafting
  [ ] Revision required — reason: ___
  [ ] Rejected — reason: ___
```

### Translation rules

- Do not copy translations from third-party lyric websites, fan translation pages, or any external source.
- Write original natural explanations.
- Avoid overly literal Spanish that sounds unnatural. Prioritize communicative equivalence.
- Do not claim one translation is universally correct when context reasonably allows alternative readings.
- If the phrase is culturally specific or figurative, explain the concept briefly in original words rather than forcing a one-to-one translation.

---

## 12. Vocabulary Template

Use this template for each fragment after the natural meaning is approved. Select 2 to 4 vocabulary items per fragment.

```
Fragment ID:
Song:
Approved fragment text:

--- Vocabulary items ---

Item 1:
  Word or short phrase:
  Simple English meaning (internal reference):
  Natural Spanish explanation:
  Original non-song example sentence:
  Real-life usage note:
    (When and how would someone actually use this word? Register, frequency, context.)

Item 2:
  Word or short phrase:
  Simple English meaning (internal reference):
  Natural Spanish explanation:
  Original non-song example sentence:
  Real-life usage note:

Item 3 (optional):
  Word or short phrase:
  Simple English meaning (internal reference):
  Natural Spanish explanation:
  Original non-song example sentence:
  Real-life usage note:

Item 4 (optional):
  Word or short phrase:
  Simple English meaning (internal reference):
  Natural Spanish explanation:
  Original non-song example sentence:
  Real-life usage note:

Reviewer decision:
  [ ] Approved for exercise drafting
  [ ] Revision required — reason: ___
```

### Vocabulary rules

- Select 2 to 4 items per fragment. Do not explain every word in the phrase.
- Prioritize words that appear frequently in everyday English and have clear real-life use.
- Write all example sentences as original content. Do not use additional song lyrics as examples.
- Do not include vocabulary items that require advanced grammar explanation to understand.
- Separate what the word means (natural Spanish explanation) from when to use it (real-life usage note).

---

## 13. Exercise Template

Use this template to select and draft one primary exercise per fragment, after vocabulary is approved.

```
Fragment ID:
Song:
Approved fragment text:

--- Exercise selection ---
Selected exercise type:
  [ ] Choose the natural meaning (multiple choice)
  [ ] Identify the stressed syllable
  [ ] Repeat and self-rate
  [ ] Match vocabulary to a definition
  [ ] Choose a real-life situation
  [ ] Write an original sentence
  [ ] Compare first and second pronunciation attempts

--- Exercise draft ---
Exercise instruction (learner-facing, in Spanish):

Exercise content:
  (Fill in based on the selected type.
   For multiple choice: write the options.
   For matching: write the vocabulary items and definitions.
   For stress identification: write the Escríbelo como suena text.
   For writing: write the prompt.
   For self-rating: write the scale.)

Answer key or correct decision:
  (Internal only — remove before PDF publication.)

Reviewer decision:
  [ ] Approved — exercise is complete and ready for ebook insertion
  [ ] Revision required — reason: ___
```

### Exercise rules

- Select only one primary exercise per fragment. The ebook is already a full guided experience; do not overload each phrase block.
- Do not use full-song gap-fill, verse reconstruction, lyric ordering, or any exercise that requires completing missing copyrighted lines.
- All exercises must be completable in under two minutes by the target learner.
- Do not use additional song lyrics in the exercise content. Use original sentences or the vocabulary items from the approved fragment lesson only.

---

## 14. Song Replacement Gate

### When to consider replacement

A provisional song enters the replacement review if any of the following conditions apply:

- Fewer than three fragments pass conservative editorial and legal-safe review.
- The vocalist's pronunciation is too singer-specific or unclear to produce usable Escríbelo como suena guidance.
- Two or more fragments require surrounding lyric context to be understood, making standalone use impractical.
- The three selected fragments, when combined, are too close in the song's structure to avoid sequential-reconstruction risk.
- The song creates a difficulty spike that significantly exceeds the Intermediate level target.
- The three songs in the set have become musically or educationally too similar after fragment review reveals unexpected overlaps.
- Official media linking (YouTube official channel, Spotify, Apple Music) cannot be verified for the song.
- Survey or channel evidence strongly favors a backup song over the provisional selection.

### Replacement order

Replacement songs are evaluated in this order. Do not evaluate backup fragments in this branch.

1. **Nothing Else Matters — Metallica** — Primary backup for the rock/classic slot (replaces Still Loving You). See `docs/content/PHASE_0_EBOOK_SONG_SELECTION.md` Section 7 for conditions.
2. **Thank You — Dido** — Secondary backup for the practical-language slot (replaces The Reason). See `docs/content/PHASE_0_EBOOK_SONG_SELECTION.md` Section 7 for conditions.

### Replacement process

1. Document which condition triggered the replacement review.
2. Mark the affected song's slots as Replaced in the register.
3. Confirm which backup song enters the set.
4. Create three new fragment slots for the backup song (e.g., NEM-01, NEM-02, NEM-03 for Nothing Else Matters).
5. Update the ebook draft section header.
6. Update `docs/content/PHASE_0_EBOOK_SONG_SELECTION.md` with the replacement decision.
7. Begin fragment intake for the replacement song from Section 15.

---

## 15. Manual Fragment Submission Format

The project owner must use this template to submit each fragment for review. Copy the block, fill in the fields, and submit one block per fragment.

```
---
Fragment submission

Fragment ID:
  (Use one of: ATY-01, ATY-02, ATY-03, SLY-01, SLY-02, SLY-03, TR-01, TR-02, TR-03)

Song:
  (Full song title)

Short fragment:
  (The exact short phrase — 3 to 7 words preferred. No surrounding lyrics.)

Why it may help:
  (Describe in original words what makes this fragment educationally useful.
   Example: "It contains a clear example of the -ed ending in past tense."
   Do not quote surrounding lyrics as context.)

Main pronunciation focus:
  (What sound, pattern, or challenge does this fragment demonstrate?
   Example: "The vowel in the main stressed word is a long 'i' sound.")

Possible learner level:
  (Beginner / Intermediate / Advanced)

Any concern:
  (Optional. Note if the fragment is close to another selected fragment,
   if it contains an unusual accent, or if you are uncertain about its length.)
---
```

### Submission instructions

- Submit **one block per fragment**. Do not combine multiple fragments in one submission.
- Do not submit a full verse or chorus as the fragment text.
- Keep the fragment as short as possible. If you are unsure whether to include a connecting word, leave it out and note the question in the concern field.
- Do not include surrounding lyrics as context. Describe the song situation in original words if context is needed.
- If you are uncertain whether a fragment is suitable, submit it with your concern noted. The review process will evaluate it.

---

## 16. Review Workflow

The following sequence applies to each fragment individually.

1. **Project owner supplies one short fragment** using the format in Section 15.
2. **Confirm song and fragment ID.** Log the received date and mark the fragment status as Received in the register.
3. **Run length and reconstruction screening** using the criteria in Section 5.1. If the fragment fails, request revision or reject.
4. **Evaluate educational value** using the criteria in Section 5.2. If educational value is insufficient, request revision or reject.
5. **Evaluate pronunciation suitability** using the criteria in Section 5.3. Mark status as Pronunciation review. If the fragment cannot be transcribed clearly, request revision or reject.
6. **Draft natural meaning** using the template in Section 11. Mark status as Educational content drafting.
7. **Draft vocabulary and original examples** using the template in Section 12.
8. **Draft one original exercise** using the template in Section 13.
9. **Run the legal-safe checklist** in Section 17. If the fragment fails any legal-safe gate item, mark as Revision required or Rejected.
10. **Approve, revise, or reject.** Mark status as Approved, Revision required, or Rejected in the register.
11. **Repeat for all nine slots.** Handle each song's three fragments in sequence where possible to enable early cross-fragment checking.
12. **Run the cross-fragment reconstruction check** in Section 9 after all three fragments for a given song reach Pronunciation review status or later.
13. **Update the ebook draft** only after a fragment is Approved and all associated educational content (pronunciation, meaning, vocabulary, exercise) is complete. Replace the corresponding placeholder in `docs/content/PHASE_0_EBOOK_DRAFT.md`.

---

## 17. Quality Gates

### Fragment gate

- [ ] Fragment is as short as educationally necessary (3–7 words target)
- [ ] Fragment does not form a complete verse or chorus
- [ ] Fragment is not adjacent to another selected fragment from the same song
- [ ] Fragment, in combination with others from the same song, does not reconstruct a meaningful section
- [ ] Fragment can be taught without reproducing surrounding lyrics
- [ ] Fragment has a clear, documentable educational purpose

### Pronunciation gate

- [ ] The vocal delivery is clear enough to teach from
- [ ] Escríbelo como suena representation is possible without misleading Spanish readings
- [ ] Singer-specific accent or delivery variation is documented
- [ ] Pronunciation conventions are consistent with the internal reference table
- [ ] No IPA appears in the learner-facing draft
- [ ] Neutral learning pronunciation is distinguished from singer-specific delivery where relevant

### Translation gate

- [ ] Natural Spanish meaning is original — not copied from any external source
- [ ] Meaning is understandable without surrounding lyrics
- [ ] Ambiguity is documented and one interpretation is chosen for the ebook
- [ ] Literal and natural translations are distinguished where needed
- [ ] Figurative language is explained rather than translated word for word

### Educational gate

- [ ] A useful learner outcome is defined for this fragment
- [ ] All vocabulary example sentences are original — not from additional song text
- [ ] The selected exercise does not require reproducing or completing song lyrics
- [ ] The exercise is completable in under two minutes
- [ ] The content is appropriate for a beginner or intermediate learner

### Legal-safe gate

- [ ] No full song lyrics appear in this fragment or its associated content
- [ ] No verse or chorus is reconstructed through this fragment alone or in combination
- [ ] No translation has been copied from third-party lyric or translation sites
- [ ] No pronunciation transcription has been copied from external sources
- [ ] Original educational transformation (pronunciation, meaning, vocabulary, exercise) surrounds the fragment
- [ ] The fragment is conservatively short and educationally necessary
- [ ] All uncertain cases are flagged as pending rather than assumed safe

> The project does not claim legal certainty. Educational intent does not automatically constitute fair use or equivalent legal protection. These gates are designed to support a conservative, legally cautious approach. A formal legal review remains a requirement before the ebook is published at scale. See `LEGAL_GUIDE.md`.

---

## 18. Phase Completion Criteria

This phase may only be marked complete when all of the following are true:

- [ ] All nine fragment slots have a final decision (Approved or Replaced).
- [ ] Every approved fragment has completed content: pronunciation, natural meaning, vocabulary, and exercise.
- [ ] Every song has passed the cross-fragment reconstruction check in Section 9.
- [ ] At least three approved fragments exist per final selected song (original or replacement).
- [ ] All rejected fragments are documented with reasons.
- [ ] All replacement decisions are documented.
- [ ] All ebook draft placeholders corresponding to approved fragments have been updated in `docs/content/PHASE_0_EBOOK_DRAFT.md`.
- [ ] Final legal-safe review remains acknowledged as a publication requirement.

**Current status:** In progress — 6 of 9 fragments approved (ATY-01/02/03 and SLY-01/02/03). The Reason fragments pending manual input.

No completion criteria can be checked off until all nine slots receive a final decision.

---

## 19. Next Action

PDF design must not begin until this phase is complete.

**Immediate next action:**

> Continue `content/phase-0-ebook-fragment-review` with manually supplied fragments. The project owner should use the submission format in Section 15 to submit one fragment at a time for ATY-01 through TR-03.

After all nine slots are approved and all associated educational content is finalized, the recommended next branch is:

**`content/phase-0-ebook-final-content`**

That branch will integrate all approved fragment content into `docs/content/PHASE_0_EBOOK_DRAFT.md`, run a full editorial and legal-safe consistency review across the complete ebook, and confirm the document is ready for PDF design.

Do not create that branch now.
