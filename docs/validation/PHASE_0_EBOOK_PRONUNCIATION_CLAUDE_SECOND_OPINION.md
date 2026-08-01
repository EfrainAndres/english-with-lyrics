# Phase 0 Ebook Pronunciation — Claude Independent Second Opinion

```text
Document role: Claude independent second opinion
Qualified human review: NOT REPLACED
Authority to pass pronunciation gate: NO
Source changes authorized: NO
Pronunciation gate: BLOCKED
```

<!-- INTERNAL DOCUMENT — not learner-facing. IPA appears in this file for internal
     precision only and must never be added to learner-facing copy. No bridge,
     learner note, approved expression, standard, ebook page, PDF or Production
     configuration was changed by this review. -->

## 1. Scope

This document records an independent Claude review of the nine Spanish-friendly pronunciation bridges used in the approved 32-page ebook, plus the fourteen global notation and difficult-sound conventions that govern them.

It is the third of three intended perspectives:

1. Qualified human specialist — pending, and not replaced by this document.
2. ChatGPT independent second opinion — held outside this repository and deliberately not consulted here.
3. Claude independent second opinion — this document.

Reviewed against:

```text
Primary target: neutral General American English
Audience: Latin American Spanish speakers
Method: practical Spanish-friendly bridge
Official audio: final listening reference
Bridge claim: approximation, not exact phonetics
```

This review reaches verdicts and proposes candidate directions. It does not apply them. Every candidate is labelled `CLAUDE CANDIDATE — NOT APPROVED` and requires a qualified reviewer decision plus project-owner acceptance before any learner-facing use.

## 2. Independence method

Stage A was performed blind. Claude read exactly four sources before forming any conclusion:

1. `docs/content/PHASE_0_EBOOK_PRONUNCIATION_STANDARD.md`
2. `docs/content/PHASE_0_EBOOK_IMPROVED_CONTENT.md`
3. `docs/content/PHASE_0_EBOOK_PRONUNCIATION_REVIEW_PACKET.md`
4. `docs/content/PHASE_0_EBOOK_FRAGMENT_REVIEW.md`

The repository was not scanned. `docs/validation/PHASE_0_EBOOK_PRONUNCIATION_PRE_REVIEW_AUDIT.md` was not opened until all fourteen convention verdicts, all nine practice verdicts, and all dictionary evidence had been written to a temporary file outside the repository.

Stage B then read the earlier pre-review audit for comparison only. No Stage A conclusion was altered, softened, or re-rated to increase agreement with the earlier audit. Where the two documents diverge, the divergence is recorded in sections 7 and 9 rather than reconciled.

ChatGPT's conclusions were not read and are not referenced.

## 3. Evidence and limitations

Access date for all sources: 2026-08-01. Target dialect checked: American (General American) slot where the dictionary distinguishes it.

**Material limitation.** Of the four preferred authorities, three were unreachable from this environment. Cambridge Dictionary, Merriam-Webster, Oxford Learner's Dictionaries and Collins all returned `HTTP 403 Forbidden`. Only the Longman Dictionary of Contemporary English (LDOCE) was reachable.

Consequence: **every practice has at least one authoritative dictionary source, but the instruction to use two independent authorities on disputed or high-risk sounds could not be satisfied.** Single-source items are marked with reduced confidence throughout. No evidence was invented, and no blog, forum, lyric site, AI-generated page, video commentary or search snippet was used.

LDOCE prints pronunciations as `/British $ American/`. Strings below are verbatim.

| Word | LDOCE transcription | Bears on |
|---|---|---|
| one | `/wʌn/` | ATY-01, SLY-02 |
| close (verb) | `/kləʊz $ kloʊz/` | ATY-01 |
| close (adjective, comparative *closer*) | British `kləʊs` — see caveat below | ATY-01 |
| fast (adjective) | `/fɑːst $ fæst/` | ATY-02 |
| still | `/stɪl/` | ATY-03 |
| will (modal) | `/wɪl/` | SLY-01 |
| there | `/ðeə $ ðer/` | SLY-01 |
| from | `/frəm; strong frɒm $ frəm, strong frʌm, frɑːm/` | SLY-02 |
| can't | `/kɑːnt $ kænt/` | SLY-03 |
| through | `/θruː/` | SLY-03 |
| before | `/bɪˈfɔː $ -ˈfɔːr/` | TR-01 |
| perfect (adjective) | `/ˈpɜːfɪkt $ ˈpɜːr-/` | TR-02 |
| person | `/ˈpɜːsən $ ˈpɜːr-/` | TR-02 |
| over | `/ˈəʊvə $ ˈoʊvər/` | TR-03 |
| new | `/njuː $ nuː/` | TR-03 |

**Caveat on *close* (adjective).** The retrieval path returned an internally inconsistent American slot for the adjective entry, repeatedly echoing the verb's `kloʊz`. The British slot was returned consistently and cleanly, and it shows the decisive contrast: adjective `kləʊs` (voiceless) against verb `kləʊz` (voiced). Because the /s/~/z/ split in this word is a part-of-speech distinction and not a British/American one, that contrast is treated as evidence. The American slot itself is recorded as `NOT VERIFIED — EXTERNAL SOURCE UNAVAILABLE`, and the ATY-01 finding is flagged for confirmation against Cambridge or Merriam-Webster by the human reviewer.

## 4. Global-convention review

Verdict counts: PASS 2 · PASS WITH CAVEAT 9 · CHANGE RECOMMENDED 3 · NOT VERIFIED 0.

### 1. Lowercase bridge convention — PASS

Applied uniformly across all nine bridges, including inside the `(e)` support marker. No exceptions found.

### 2. Word separators — PASS

` · ` with surrounding spaces is used consistently in all nine bridges.

### 3. Syllable separators — PASS WITH CAVEAT

Structurally correct: every multisyllabic bridge word is syllabified (`clóu·zer`, `bi·fór`, `pér·fect`, `pér·son`, `óu·ver`) and no monosyllable is.

- **Caveat:** the same glyph `·` marks both word and syllable boundaries, distinguished only by surrounding whitespace.
- **Risk:** at A5 trim size or on a phone, with tight tracking or justified text, the whitespace difference can collapse visually, turning `pér·fect` and `word · word` into the same signal.
- **Disposition recommendation:** documentation only at content level; carry to the design phase as a typographic constraint (minimum tracking, non-breaking spaces around word separators).
- **Learner-facing impact:** none if design honours the constraint; a learner may otherwise read a single word as two.

### 4. Accent marks — CHANGE RECOMMENDED

- **Current risk:** one diacritic encodes two unrelated things. In polysyllables it marks stress; in monosyllables the standard makes it an optional cue for "a misleading Spanish vowel reading or a glide". A learner cannot tell which function is active, and the standard states the accent "does not follow normal Spanish spelling rules" without giving a rule that replaces it.
- **Evidence:** application is demonstrably inconsistent across the nine bridges. `(e)stép` carries an accent but `(e)stil` does not, though both are stressed monosyllabic content words with the same structure. `bíts` is accented but `fast`, `cant` and `guet` are not. The standard's own glide list in §4 writes `ai` bare while writing `éi`, `óu` and `iú` accented — so the glide-accent rule is inconsistent inside the defining document, and the bridges inherit that.
- **Candidate direction:** `CLAUDE CANDIDATE — NOT APPROVED` — state one rule and apply it exhaustively; if the accent is to mean stress only, remove it from monosyllables and find a separate device for glide and vowel-quality cues.
- **Would change:** the standard's §4 text, and potentially several bridges. Learner notes would follow.

### 5. Vowel glides — PASS WITH CAVEAT

Conceptually the strongest part of the system. `ai`, `éi`, `óu` and `iú` are all reachable from native Spanish sequences (*aire*, *peine*, *estadounidense*, *ciudad*), so the "one continuous movement" instruction is realistic.

- **Caveat:** `óu` is the least native of the four and can be read as hiatus (two syllables).
- **Risk:** low — all three occurrences (`clóu·zer`, `góu`, `óu·ver`) carry an explicit glide note.
- **Disposition recommendation:** no action required; the note coverage already mitigates it.
- **Learner-facing impact:** none.

### 6. `/w/` onset — PASS WITH CAVEAT

Normalising `/w/` to a soft `u` glide is well motivated: Spanish already has this onset in *hueso*, *huevo*, *huella*. A Spanish reader given `u` will not produce `[v]`, so the standard's stated worry is largely self-solving.

- **Caveat:** colloquial Latin American Spanish frequently reinforces word-initial `/we/` with a velar onset — *huevo* as `[ˈgweβo]`.
- **Risk:** low to medium; `uéi` may surface as `[ˈgwei]` and `uán` as `[ˈgwan]`.
- **Disposition recommendation:** learner-note change, optional — one short cue that the `u` starts with the lips only, with no `g` before it.
- **Learner-facing impact:** minor; affects `uán`, `uíl`, `uéi`.

### 7. Soft-air English `h` — PASS WITH CAVEAT

- **Caveat:** the accuracy of `j` depends entirely on the learner's own variety. In Caribbean, coastal and much of Central American Spanish, `j` is already `[h]` — exactly right. In Mexican, Andean and Southern Cone Spanish it is `[x]` — a strong velar fricative and materially wrong.
- **Risk:** high for a large share of the audience, and the written note is the only thing standing between the learner and the wrong sound.
- **Disposition recommendation:** learner-note change. The current note is framed purely negatively ("no la `j` gutural del español") and gives no positive target. `CLAUDE CANDIDATE — NOT APPROVED` — add a positive articulatory anchor, for example the sound of blowing on cold hands or on glass.
- **Learner-facing impact:** affects ATY-02 only, but it is the note carrying the whole burden.

### 8. Voiced `th` — PASS WITH CAVEAT

Using `d` is a strong choice, and for a better reason than the standard states: Spanish already produces `[ð]` as the intervocalic allophone of `/d/` in *nada*, *cada*, *todo*. The target sound is already in the learner's mouth.

- **Caveat one:** no note anywhere names that anchor, so the system asks learners to build a sound they already own.
- **Caveat two:** standard §5 places voiced `th` "near the teeth" and voiceless `th` "between the teeth". These are one voicing pair at one place of articulation; teaching two different placements is phonetically inaccurate and invites learners to treat them as unrelated sounds.
- **Risk:** medium. Word-initial `dér` will be produced as a stop `[d]`, which is intelligible but not the target.
- **Disposition recommendation:** learner-note change. `CLAUDE CANDIDATE — NOT APPROVED` — anchor `dér` to the `d` of *nada*, and align the two `th` placement descriptions so only voicing differs between them.
- **Learner-facing impact:** SLY-01 note, method page 4 legend, standard §5.

### 9. Voiceless `th` — CHANGE RECOMMENDED

- **Current risk:** three compounding problems for the stated audience.
  1. Latin American Spanish is uniformly *seseo*: `z` is `[s]`. The letter that would be perfect for a Peninsular reader gives this audience no articulatory advantage over `s`, while implying a distinction they do not make.
  2. The letter collides inside the system. `z` stands for `/θ/` in `zrú` but for English `/z/` in `clóu·zer` and `stanz` — one letter, two unrelated English sounds, with no note disambiguating them.
  3. `zr` is not a licit Spanish onset. Spanish permits `/r/` in an onset cluster only after obstruents like *p, t, k, b, d, g, f*; `sr` never occurs. Readers resolve such sequences by epenthesis or by syllabifying across the cluster, which is how *Israel* becomes `[is.ra.ˈel]` with a trill.
- **Evidence:** LDOCE `through /θruː/`. The target onset is `/θr/`; the predicted Spanish output for `zrú` is `[es.ˈru]` or `[sə.ˈru]`, potentially with a trilled `[r]` — three departures from target in one syllable.
- **Candidate direction:** `CLAUDE CANDIDATE — NOT APPROVED` — either reserve `z` exclusively for `/θ/` and re-letter English `/z/` elsewhere, or retain `zrú` and add an explicit anti-epenthesis, anti-trill cue to its note.
- **Would change:** both. The standard's convention and, at minimum, the SLY-03 learner note.

### 10. English `r` — CHANGE RECOMMENDED

- **Current risk:** the rule is stated only as a prohibition — "approximate it softly", "do not trill or roll it like a Spanish `rr`". A Spanish tap `[ɾ]` is soft and is not a trill, so the rule as written permits precisely the error it is meant to prevent. Nothing steers the learner toward the General American bunched or retroflex approximant.
- **Evidence:** `r` appears in seven of the nine bridges — `clóu·zer`, `jart`, `dér`, `from`, `(e)stárt`, `bi·fór`, `pér·fect`/`pér·son`, `óu·ver`, `zrú`. LDOCE gives rhotic American forms throughout: `ˈpɜːr-`, `ˈoʊvər`, `ðer`, `-ˈfɔːr`. Not one of the nine practice notes mentions the `r` at all; the only mention in learner copy is a single line on method page 4.
- **Candidate direction:** `CLAUDE CANDIDATE — NOT APPROVED` — replace the prohibition with a positive instruction (tongue pulled back and not touching the roof of the mouth; the sound continues rather than tapping), and reinforce it in the rhotic practices rather than only on the method page.
- **Would change:** both. Standard §5 and several learner notes; the bridges themselves could stay as they are.

### 11. Final consonants — PASS WITH CAVEAT

The `can't` treatment is the best-executed item in the whole set: the meaning-changing final `/t/` is identified, explained and tied to the opposite meaning.

- **Caveat:** coverage is uneven. `stanz` silently drops the `/d/` of *stands*; `pér·fect` ends in a `/kt/` cluster no note addresses; and coda `/s/` is aspirated or deleted in Caribbean Spanish, which puts `bíts`, `stanz` and `fast` at risk of losing grammatical endings.
- **Risk:** medium — plural and third-person marking is what erodes.
- **Disposition recommendation:** learner-note change for the `/kt/` and coda-`/s/` cases; documentation only for `stanz`, where the simplification is legitimate (see ATY-03).
- **Learner-facing impact:** ATY-02, ATY-03, TR-02 notes.

### 12. Temporary cluster support — PASS WITH CAVEAT

Genuinely good design, and the strongest pedagogical idea in the standard: parentheses mark the support as provisional, every occurrence states a reduction goal, and page 20 gives the learner a self-check ("¿Pude reducir el apoyo `(e)`?"). The support is scaffolding with a stated exit, which is exactly right.

- **Caveat:** ATY-03 applies it inconsistently *within a single fragment* — `stanz` gets no support while `(e)stil` does, though both are `/st/` onsets three words apart.
- **Risk:** medium — the learner is given no principle explaining why the same cluster is treated two ways, which undermines the credibility of the device.
- **Disposition recommendation:** learner-note change or bridge change; the qualified reviewer should decide which of the two treatments is correct and apply it consistently.
- **Learner-facing impact:** ATY-03 bridge and note.

### 13. Connected speech — PASS WITH CAVEAT

Correctly scoped as selective rather than exhaustive, and used well in SLY-01 (`I'll be`) and SLY-02 (weak `de`).

- **Caveat:** under-applied against the project's own analysis. The fragment review names "before I" linking as TR-01's primary teaching point, but the TR-01 note covers only stress and the `óu` glide.
- **Risk:** low — an omission rather than an error.
- **Disposition recommendation:** learner-note change, optional.
- **Learner-facing impact:** TR-01.

### 14. Singer-specific differences — PASS WITH CAVEAT

Handled better than most published learner material. Page 12 carries an explicit, honest accent note for the Scorpions track, songs 1 and 3 are documented as needing none, and the packet reserves a separate section for performance observations. The neutral baseline is never redefined by the recording.

- **Caveat:** the accent note lives only on the song-divider page. A learner opening a practice page directly — which the three-day challenge on pages 24–26 actively encourages — does not see it.
- **Risk:** low.
- **Disposition recommendation:** documentation only, or a one-line echo on the three Song 2 practice pages at design time.
- **Learner-facing impact:** minor; pages 13–15.

## 5. Nine-practice review

Verdict counts: PASS 1 · PASS WITH CAVEAT 5 · CHANGE RECOMMENDED 3 · NOT VERIFIED 0.

Approved English expressions are reproduced unchanged and in isolation. No adjacent song line was added and no verse or chorus was reconstructed. No bridge was edited in its source.

| Practice ID | Approved English expression | Current bridge | Target pronunciation checked | Primary Spanish-transfer risk | Claude verdict | Candidate bridge | Candidate learner-note change | Evidence | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| ATY-01 | One step closer | `uán · (e)stép · clóu·zer` | `/wʌn stɛp ˈkloʊsər/` | `z` read as `[s]`; `-er` as vowel + tap | CHANGE RECOMMENDED | none proposed | Yes — see below | LDOCE *one*, *close* | Medium |
| ATY-02 | Heart beats fast | `jart · bíts · fast` | `/hɑːrt biːts fæst/` | `j` as velar `[x]`; `a` pushed to back `/ɑː/` | PASS WITH CAVEAT | none proposed | Yes — see below | LDOCE *fast* | Medium |
| ATY-03 | Time stands still | `taim · stanz · (e)stil` | `/taɪm stændz stɪl/` | `stil` read as *steel*; split `/st/` treatment | PASS WITH CAVEAT | none proposed | Yes — see below | LDOCE *still* | Medium |
| SLY-01 | I will be there | `ai · uíl · bi · dér` | `/aɪ wɪl bi ðer/` | accent promotes a function word; `d` as stop | PASS WITH CAVEAT | none proposed | Yes — see below | LDOCE *will*, *there* | Medium |
| SLY-02 | All the way from the start | `ól · de · uéi · from · de · (e)stárt` | `/ɔːl ðə weɪ frəm ðə stɑːrt/` | `from` read with full `[o]`; dark `l` | CHANGE RECOMMENDED | none proposed | Yes — see below | LDOCE *from*, *one* | High |
| SLY-03 | I can't get through | `ai · cant · guet · zrú` | `/aɪ kænt ɡɛt θruː/` | `zr` not a Spanish onset — epenthesis or trill | PASS WITH CAVEAT | none proposed | Yes — see below | LDOCE *can't*, *through* | High |
| TR-01 | Before I go | `bi·fór · ai · góu` | `/bɪˈfɔːr aɪ ɡoʊ/` | none material | PASS | none proposed | Optional — linking | LDOCE *before* | High |
| TR-02 | I'm not a perfect person | `aim · nat · a · pér·fect · pér·son` | `/aɪm nɑːt ə ˈpɜːrfɪkt ˈpɜːrsən/` | `/ɜːr/` as `[e]` + tap; full vowels for schwa | PASS WITH CAVEAT | none proposed | Yes — see below | LDOCE *perfect*, *person* | High |
| TR-03 | Start over new | `(e)stárt · óu·ver · niú` | `/stɑːrt ˈoʊvər nuː/` | yod is British; `v` merged with `b` | CHANGE RECOMMENDED | none proposed | Yes — see below | LDOCE *new*, *over* | High |

No candidate bridge is proposed anywhere in this table. Selecting replacement wording is a qualified-reviewer decision, and section 10 records only directions.

### Per-practice detail

**ATY-01 — CHANGE RECOMMENDED.** *closer* here is the comparative of the **adjective** *close* (near), which is voiceless `/ˈkloʊsər/`. It is not the verb *close* (to shut), which is voiced `/ˈkloʊzər/`. LDOCE shows the split cleanly in the British slot — adjective `kləʊs` against verb `kləʊz`. The bridge writes `z`. Because Latin American `z` is `[s]`, most learners will land on an acceptable sound, but for the wrong reason and in contradiction of the system's own rule that `z` represents the voiceless `th`. Any note that instructed learners to "add voice" to this `z` would push them to the wrong word class. `uán` is well motivated (LDOCE `/wʌn/`). Note change: identify the `z` as the `s` sound of the adjective, and treat `-er` under the rhotic convention. Flagged for Cambridge or Merriam-Webster confirmation given the retrieval caveat in section 3.

**ATY-02 — PASS WITH CAVEAT.** LDOCE gives *fast* as `/fɑːst $ fæst/`. The General American vowel `/æ/` is low and **front**. The current note tells learners to keep the `a` open and not to close it toward `e` — which steers them toward the fully open back `[ɑ]`, and that is precisely the **British** form `/fɑːst/`. The note is not merely insufficient; its direction is wrong for the stated baseline. It also contradicts the project's own SLY-03 analysis, which describes the same `/æ/` phoneme as "positioned between 'a' and 'e'". The two documents give opposite advice for one vowel. The `j` risk is covered under convention 7; `jart` additionally carries an unaddressed rhotic.

**ATY-03 — PASS WITH CAVEAT.** *still* is `/stɪl/` with a lax vowel; Spanish has only tense `/i/`, so `stil` will be read as *steel* — an unflagged minimal pair, and the system nowhere encodes the `/iː/`~`/ɪ/` contrast (compare accented `bíts` for `/iː/` with bare `stil` for `/ɪ/`, a distinction the accent rule does not actually claim to make). The `stanz` simplification of `/ndz/` to `[nz]` is a legitimate, attested casual-speech reduction and is **not** in itself a defect. The real defect is the split `/st/` treatment described under convention 12.

**SLY-01 — PASS WITH CAVEAT.** *will* is `/wɪl/`, lax, and in this phrase it is an unstressed function word — the phrase prominence falls on *there*. Marking `uíl` with an accent promotes a function word to visual prominence and works against the note's own point that the phrase contracts to *I'll be*. Under the accent rule the mark is ambiguous: stress cue, or vowel cue implying a long `/iː/`? `dér` is sound; its note should anchor to the `d` of *nada* rather than describing the placement from scratch. LDOCE *there* `/ðer/` confirms the rhotic vowel.

**SLY-02 — CHANGE RECOMMENDED.** `from` is the only bridge word left as unmodified English spelling, which defeats the premise of *Escríbelo como suena*. A Spanish reader produces `[fɾom]` with a full `[o]` — a vowel that appears in **no** attested form: LDOCE gives American weak `frəm` and strong `frʌm` or `frɑːm`. The inconsistency is internal and demonstrable: `/wʌn/` is written `uán` with `a`, while `/frʌm/` is written `from` with `o` — the same phoneme, two different letters, in the same nine-bridge set. Separately, `ól` (and `uíl`, `(e)stil`) involve coda `/l/`, which is dark `[ɫ]` in General American and clear in Spanish; the system has no dark-`l` convention at all. Highest-confidence finding in the set.

**SLY-03 — PASS WITH CAVEAT.** `guet` deserves explicit credit: using Spanish `gu` before `e` to force a hard `/ɡ/` is exactly the right instinct for this method, and it prevents *get* from being read as *jet*. `zrú` is the highest-risk bridge in the ebook for the phonotactic reasons in convention 9. On `cant`: the note is correct for production, but oversimplifies listening. In General American the final `/t/` is frequently glottalised or unreleased, and the more reliable perceptual cue is that affirmative *can* reduces to `/kən/` while *can't* keeps a full `/æ/`. Since the ebook's stated method is listen-then-repeat, the listening cue matters as much as the production rule.

**TR-01 — PASS.** LDOCE `before /bɪˈfɔː $ -ˈfɔːr/` confirms the reduced first syllable, the stressed second syllable and the rhotic vowel — `bi·fór` matches on all three. `góu` correctly uses `g` before `o` for a hard `/ɡ/`, consistent with `guet`. The only gap is the missing linking note, which is optional. This is the cleanest practice in the set.

**TR-02 — PASS WITH CAVEAT.** `nat` deserves credit: it targets General American `/ɑ/` rather than British `/ɒ/`, showing the dialect discipline the baseline asks for. The caveat is the rhotic vowel: LDOCE gives `ˈpɜːr-` for both *perfect* and *person*, a single r-coloured vowel, whereas `pér` invites a Spanish `[e]` followed by a tap `[ɾ]` — two segments where English has one. This is the system's largest rhotic exposure. Secondary: LDOCE `ˈpɜːfɪkt` shows the second syllable as `/ɪ/`, and `ˈpɜːsən` shows a schwa, but the bridge writes full `e` and `o` in `fect` and `son`. The rhythm note is otherwise excellent and correctly identifies the stress pattern.

**TR-03 — CHANGE RECOMMENDED.** LDOCE: `new /njuː $ nuː/`. The yod is the **British** form; General American drops it after coronals, giving `/nuː/`. The bridge `niú` encodes the yod, and the learner note teaches it explicitly ("hay una `i` breve antes de la `u`"). This is a silent British target inside a document whose stated baseline is neutral General American — the one thing the review packet §4 says must not happen. It is also a regression: the fragment review's own earlier analysis recorded that "in American English [it] may sound closer to 'nu'", and normalisation then strengthened the yod by adding an accent (`niu` → `niú`). Separately, `óu·ver` is the only English `/v/` in the nine bridges, and Spanish has no `/b/`~`/v/` contrast — `v` and `b` are both `[b]`/`[β]` — so `óu·ver` will be read `[ˈowβer]`. The system has no `/v/` convention and no note anywhere addresses it.

## 6. System-level consistency risks

Each question below was evaluated independently rather than assumed to be a problem.

**Is one letter used for multiple unrelated English sounds?** Yes, in two places that matter. `z` carries `/θ/` (`zrú`) and `/z/` (`clóu·zer`, `stanz`) — unrelated sounds, no disambiguating note. `a` carries `/ʌ/` (`uán`), `/ɑ/` (`nat`, `jart`, `stárt`), `/æ/` (`fast`, `cant`), `/ə/` (the article `a`) and the first element of `/aɪ/`. The `a` overload is largely unavoidable given Spanish's five-vowel system and is acceptable if notes compensate; the `z` collision is avoidable and is not acknowledged anywhere.

**Does the system consistently represent voiced versus voiceless consonants?** No. Latin American *seseo* neutralises `s`/`z` on the page, so the writing system cannot express the contrast to this audience at all. This surfaces in `clóu·zer`, `stanz` and `bíts`, and it is the root cause of the ATY-01 finding.

**Do reduced vowels receive full Spanish vowels?** Yes, systematically — `de` for `/ðə/`, `a` for `/ə/`, `son` for `/sən/`, `fect` for `/fɪkt/`, `bi` for `/bɪ/`. Given a no-IPA constraint this is a defensible trade, and SLY-02 and TR-02 both mitigate it in prose. The residual risk is syllable-timed delivery, which the notes address only for TR-02.

**Will English rhotic vowels become Spanish vowel-plus-tap sequences?** Yes, and this is the least-defended risk in the system. Seven of nine bridges contain `r`; no practice note addresses it; the only guidance is a prohibition that does not exclude the tap.

**Do final consonants and clusters remain recoverable?** Mostly. `cant` is protected explicitly and well. `stanz`, `pér·fect` and coda `/s/` are not, and Caribbean coda-`/s/` weakening threatens grammatical endings.

**Do temporary support vowels have a clear reduction path?** Yes — this is the system's best feature: parenthesis notation, an explicit goal in every occurrence, and a learner self-check on page 20. The only flaw is inconsistent application inside ATY-03.

**Does any bridge silently mix British and American targets?** Yes — one: `niú` in TR-03. Everything else is consistently American, and `nat` and `fast` show the authors actively choosing American vowels elsewhere, which makes `niú` an isolated slip rather than a systemic drift. The ATY-02 *fast* note pushes toward the British vowel in prose while the bridge itself stays American.

**Is visual simplicity prioritised beyond acceptable intelligibility risk?** Generally no. The system is appropriately restrained, and the choice not to encode `/iː/`~`/ɪ/` or `/æ/`~`/ɑ/` is a reasonable readability trade for a lead magnet. The one place simplicity wins too easily is `from`, where no transliteration was attempted at all.

**Do notes compensate sufficiently for imperfect bridge spellings?** Partially. Notes are strong on glides, temporary support and the `can't` contrast; absent on `r`, `/v/`, dark `l` and the `z` collision. The `h` and `th` notes carry more weight than their current wording can bear.

**Does the notation remain usable on a small A5 or mobile layout?** Mostly yes — lowercase, short bridges, few diacritics. Two constraints for the design phase: the `·` word/syllable distinction depends on whitespace that must not collapse, and the longest bridge, `ól · de · uéi · from · de · (e)stárt`, needs to hold on one line at A5 width or its phrase rhythm breaks.

## 7. Comparison with the previous AI pre-review

The earlier audit is structured as triage: it raises questions, assigns preliminary risk levels, and explicitly withholds conclusions. This document reaches verdicts and cites dictionary evidence. The two are therefore complementary in kind, and the comparison below concerns substance, not format.

The most important structural difference: the earlier audit cites **no external source for any claim**. Every item is labelled `AI-ASSISTED — QUALIFIED VERIFICATION REQUIRED`. This review is single-sourced but externally grounded.

### Exact agreements

- **Letter-to-sound instability is the central risk.** The audit rates it HIGH and names `j`, `z`, `d`, `r` and initial `u`. Claude reached the same five letters independently.
- **Rhotic vowels are high risk.** The audit asks whether the bridge teaches a rhotic vowel "rather than a full Spanish vowel followed by a rolled or tapped `r`". That is precisely Claude's convention-10 finding, in nearly the same words.
- **Schwa and reduced vowels are high risk.** Both flag full Spanish vowels in unstressed positions, and both point at TR-02 and SLY-02.
- **`new` is an open General American question.** The audit asks whether *new* should take a y-like glide, and lists confirming one American treatment as a candidate.
- **`can`/`can't` depends on the final consonant** and needs intelligibility protection.
- **`zrú` needs a dedicated check** for voiceless `th` plus `r`.
- **Soft-air `h`**: both flag that the `j` spelling may overwhelm the written warning.
- **Temporary support needs a concrete reduction goal.**

### Partial agreements

- **ATY-01.** Both identify `z` in `clóu·zer`. But the audit assumes the target is voiced `/z/` and asks whether learners will wrongly read `[s]`; Claude finds the target is voiceless `/s/`, so the reading is right and the letter is wrong. Same location, inverted diagnosis — recorded as a material disagreement below.
- **TR-03 `new`.** Agreement that it is open; disagreement on strength. The audit rates TR-03 MEDIUM and leaves it as a question. Claude resolves it against LDOCE and rates it CHANGE RECOMMENDED.
- **ATY-03 `stanz`.** The audit rates it HIGH on the grounds that the cluster may not be recoverable. Claude finds the `/ndz/`→`[nz]` simplification legitimate and locates the real problem elsewhere — the split `/st/` treatment inside one fragment, which the audit does not mention.
- **SLY-02 `from`.** The audit groups it with reduced function words and over-articulation. Claude finds a more basic defect: `from` is untransliterated and its Spanish reading matches no attested vowel.
- **ATY-02 `fast`.** The audit asks whether it "needs a clearer warning". Claude finds the existing warning points the wrong way.

### Material disagreements

1. **ATY-01 direction.** The audit's candidate question asks whether "the learner note [should] explicitly instruct the learner to add voice". On Claude's evidence that instruction would be an error — it would move learners from the correct adjective `/ˈkloʊsər/` toward the verb `/ˈkloʊzər/`. This is the single most consequential divergence and needs a human tie-break.
2. **ATY-02 note direction.** Not a matter of insufficient warning but of wrong-signed advice: "keep the `a` open, do not close it toward `e`" describes British `/ɑː/`, while the American target `/æ/` is low-front.
3. **Stress notation.** The audit states that "written accents consistently signal prominence" and rates it MEDIUM. Claude does not confirm consistency and rates the accent convention CHANGE RECOMMENDED, citing `(e)stép` versus `(e)stil` and the standard's own inconsistent glide list.
4. **`/w/` onset risk level.** The audit rates MEDIUM and worries about "a hard `v` substitution". Claude finds that specific error unlikely — a Spanish reader given `u` will not produce `[v]` — and identifies a different residual risk, the `[gw]` reinforcement.
5. **Separator notation.** The audit rates it LOW and structurally consistent. Claude confirms the structure but adds a legibility caveat the audit does not raise.
6. **Risk ratings generally.** The audit rates ATY-01 and TR-03 MEDIUM; Claude rates both CHANGE RECOMMENDED — the two highest-confidence findings in this review are among the audit's lower-rated items.

### New risks found only by Claude

1. **English `/v/` has no convention.** `óu·ver` is the only `/v/` in the nine bridges, and Spanish has no `/b/`~`/v/` contrast. Absent from the audit entirely.
2. **Dark `[ɫ]` has no convention.** Affects `ól`, `(e)stil`, `uíl`.
3. **The `z` collision.** The audit treats `clóu·zer` and `zrú` as separate items and never connects them; the collision itself — one letter, two unrelated English sounds — is unstated.
4. **Voiced and voiceless `th` are given two different tongue placements** in standard §5 ("near" versus "between" the teeth) for what is one voicing pair.
5. **Accent-mark application is demonstrably inconsistent** — `(e)stép` versus `(e)stil`, `bíts` versus `fast`, and the standard's own `ai`/`éi` mismatch.
6. **`/iː/`~`/ɪ/` is unencoded**, producing the unflagged *still*/*steel* minimal pair.
7. **`pér·fect`'s second syllable is `/ɪ/`, not `/e/`** (LDOCE `ˈpɜːfɪkt`). The audit asks only about `pér·son`'s `o`.
8. **`from` is internally inconsistent with `uán`** for the same `/ʌ/`.
9. **Spanish phonotactics specifically forbid a `zr` onset**, predicting epenthesis or a trill — a sharper mechanism than the audit's general concern.
10. **The can/can't listening cue** (*can* reduces to `/kən/`) is stronger than the production cue the note relies on.
11. **The singer-accent note is placed only on the song divider**, not on the practice pages.
12. **The `·` glyph collision** at small sizes.
13. **`uéi` may take a `[gw]` onset** in colloquial Latin American Spanish.

### Risks in the earlier audit not confirmed by Claude

- **"Written accents consistently signal prominence"** — not confirmed; Claude finds inconsistency.
- **`/w/` onset as a MEDIUM hard-`v` risk** — not confirmed at that level or for that reason.
- **`stanz` as a HIGH cluster-recoverability risk** — not confirmed; the simplification is attested in natural speech.
- **Separator notation as LOW with no caveat** — not confirmed without the legibility qualifier.
- **`guet` "may need an accent or vowel clarification"** (audit §6, SLY-03) — not confirmed; Claude finds `guet` well formed as written and one of the better choices in the set.

### Items needing human tie-break

1. **ATY-01: is the target `/s/` or `/z/`?** Decisive, and Claude's single reachable source returned an unreliable American slot. Confirm against Cambridge or Merriam-Webster before anything is changed.
2. **ATY-02: which direction should the `fast` note point?**
3. **Should `z` be reserved exclusively for `/θ/`,** with English `/z/` re-lettered?
4. **TR-03: remove the yod from `niú`** to match the General American baseline, or restate the baseline?
5. **SLY-02: should `from` be respelled,** and if so must `uán` change with it for consistency?
6. **Should `/v/` and dark `[ɫ]` conventions be added,** or accepted as out of scope for a lead magnet?
7. **Accent convention: one function or two?**

## 8. Agreements

Claude independently confirms the following from the earlier pre-review: letter-to-sound instability across `j`, `z`, `d`, `r` and initial `u` is the central systemic risk; rhotic vowels and reduced vowels are both high risk; final-consonant protection matters most at `can`/`can't`; `zrú` requires a dedicated intelligibility check; the soft-air `h` spelling may overwhelm its warning; temporary support requires a concrete reduction goal; and the General American treatment of *new* is unresolved.

Claude also affirms several strengths of the material that neither document was required to record but which bear on the gate decision: the temporary-support notation with its stated reduction path and page-20 self-check; the `guet` spelling; the `nat` vowel choice; the honest and well-placed Scorpions accent note; the consistent refusal to let the recording redefine the neutral baseline; and the absence of any IPA in learner-facing copy.

## 9. Disagreements

Recorded in full in section 7 under *Material disagreements* and *Risks in the earlier audit not confirmed by Claude*. In summary, six material disagreements: the inverted ATY-01 diagnosis and its unsafe candidate direction; the wrong-signed ATY-02 note; the claim that stress notation is consistent; the `/w/` onset risk level and mechanism; the separator risk level; and the risk ratings for ATY-01 and TR-03.

None of these disagreements was introduced after reading the earlier audit. All six follow from Stage A conclusions recorded before it was opened.

## 10. Candidate changes

Six items, each `CLAUDE CANDIDATE — NOT APPROVED`. Directions only — no replacement bridge wording is proposed, because selecting it is a qualified-reviewer decision.

1. `CLAUDE CANDIDATE — NOT APPROVED` — **ATY-01**: confirm the voiceless target for *closer* and align the note; do not instruct learners to add voice to the `z`. Note change; bridge change only if the reviewer chooses to resolve the `z` collision.
2. `CLAUDE CANDIDATE — NOT APPROVED` — **ATY-02**: reverse the direction of the `fast` note so it targets the low-front American `/æ/` rather than the open back British vowel. Note change only.
3. `CLAUDE CANDIDATE — NOT APPROVED` — **TR-03**: bring `niú` onto the General American baseline by removing the yod, or explicitly document the departure. Bridge and note change.
4. `CLAUDE CANDIDATE — NOT APPROVED` — **SLY-02**: transliterate `from` and reconcile it with `uán` for the same `/ʌ/`. Bridge and note change.
5. `CLAUDE CANDIDATE — NOT APPROVED` — **Convention 10**: replace the `r` prohibition with a positive articulatory instruction and reinforce it in the rhotic practices. Standard and note change.
6. `CLAUDE CANDIDATE — NOT APPROVED` — **Convention 9**: resolve the `z` collision, either by reserving `z` for `/θ/` or by adding an explicit anti-epenthesis and anti-trill cue at `zrú`. Standard and note change.

Lower-priority note-level directions, all `CLAUDE CANDIDATE — NOT APPROVED`: anchor `dér` to the `d` of *nada*; give the soft-air `h` a positive anchor; align the two `th` tongue placements; resolve the split `/st/` treatment in ATY-03; add the can/can't listening cue; consider `/v/` and dark-`l` conventions; state one accent-mark rule.

Every item requires a qualified reviewer decision, an approved replacement where applicable, synchronised changes to the standard and improved content, a post-change consistency check, and project-owner acceptance before any learner-facing use.

## 11. Non-decisions

This document does not:

- Approve or reject any bridge, learner note, or convention.
- Complete, confirm, replace, or override a qualified human pronunciation review.
- Pass, advance, or unblock the pronunciation gate.
- Change any approved English expression, bridge, learner note, standard, ebook copy, PDF, or Production configuration.
- Select final candidate wording for any change.
- Assign a reviewer or represent any credential.
- Add IPA to learner-facing copy.
- Authorise design implementation, PDF generation, Production replacement, email, automation, or lead capture.
- Read, reference, or reconcile with ChatGPT's independent second opinion, which is intentionally excluded from this review.

## 12. Final Claude second-opinion summary

Claude reviewed all fourteen global conventions and all nine practices independently and blind, then compared against the earlier pre-review without revising any Stage A conclusion.

The system is better than its individual weak points suggest. The temporary-support notation, the glide treatment, the `can't` final-consonant protection, the `guet` and `nat` spellings, and the honest handling of the Scorpions accent are all sound work. The recurring weaknesses are concentrated in four places: the unprotected English `r`, the `z` letter collision, full Spanish vowels standing in for reduced ones, and two isolated target errors at `niú` and `from`.

Two findings should be treated as blocking regardless of how the remaining items are dispositioned: **TR-03 `niú` teaches a British form against a stated General American baseline**, and **ATY-01 may have an inverted voicing diagnosis in the earlier audit whose suggested remedy would introduce an error**. Both are cheap to fix and expensive to ship.

```text
Claude independent second opinion: COMPLETE
Qualified human specialist decision: NOT OVERRIDDEN
Practices reviewed by Claude: 9 of 9
Global conventions reviewed by Claude: 14 of 14
Claude-recommended changes: 6
Claude caveats: 14
Source changes applied: NO
Owner acceptance: PENDING for any proposed change
Pronunciation gate: BLOCKED pending three-way comparison
```
