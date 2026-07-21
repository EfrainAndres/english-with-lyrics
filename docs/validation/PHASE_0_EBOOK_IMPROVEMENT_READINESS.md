# Phase 0 Ebook Improvement Readiness

## Current status

```text
Current PDF audit: COMPLETE
All current pages visually inspected: YES
Educational practices reviewed: YES
Current links inventoried: YES
Final page architecture: COMPLETE
Target page count selected: YES
Initial architecture owner review: CHANGES REQUESTED
Requested architecture revision: COMPLETE
Revised target: 32 pages
Architecture revision implementation: COMPLETE
Owner final architecture approval: APPROVED
Architecture gate: PASS
New-page copy: PENDING
Existing-page copy corrections: PENDING
Official URL verification: PENDING
QR generation: PENDING
PDF source editing: PENDING
PDF generation: PENDING
Final PDF visual QA: PENDING
Production replacement: BLOCKED
Production funnel activation: PENDING
```

Page-by-page architecture approved by project owner: **APPROVED**.

The initial 30-page proposal received owner feedback of CHANGES REQUESTED. The revised 32-page architecture in `docs/ebook/PHASE_0_EBOOK_PAGE_ARCHITECTURE.md` separates the mission, future-product positioning and survey into three distinct pages and strengthens the expression-review contracts. This revised architecture has been approved by the project owner. Copywriting and pronunciation-normalization phases may now proceed; PDF implementation remains blocked until copy, design and link verification pass their own gates.

## Confirmed baseline

| Check | Result |
| --- | --- |
| Canonical PDF | `public/downloads/guia-gratis-sing-pronounce-repeat.pdf` |
| Canonical PDF located | YES |
| Source and generator located | YES |
| Current page count | 21 |
| Current size | 1,322,844 bytes |
| Current format | PDF 1.4, A5 portrait |
| Pages visually inspected | 21 of 21 |
| Text selectable | YES |
| HTTPS annotations | 7 |
| Broken/clipped pages observed | NO |
| Three current songs retained | YES |
| Nine short practices retained | YES |
| Recommended final page count | 32 |
| Current ebook useful as implementation base | YES |
| Current ebook approved as final Production asset | NO |
| Mandatory improvement status | LAUNCH BLOCKER |

## Completed evidence

- The current PDF, its production HTML/CSS, learner-content source, export script, metadata patcher and relevant PDF validation records were inspected.
- All 21 rendered pages were reviewed visually without OCR.
- The nine practices were reviewed for practical pronunciation, natural meaning, vocabulary, original examples, exercise clarity, level and short-fragment safeguards.
- Current link annotations were inventoried: three official-song links, two survey links, one first-group link and one canonical ebook backlink.
- The proposed 32-page architecture preserves all three songs and all nine practices while improving the opening, progress, review, challenge, self-assessment and conversion sequence.
- No PDF, ebook source, generator, application code, Production configuration or provider configuration changed in this audit or in this revision.

## Mandatory pre-generation gates

- [x] Project owner approves the 32-page architecture.
- [ ] New opening, transformation, journey and consolidated-review copy is approved.
- [ ] Existing practice-source typo is reconciled with the already-correct rendered copy.
- [ ] Pronunciation notation receives a consistency pass, including stress, separators, soft-air guidance, `th`, vowel/final-consonant distinctions and temporary initial-cluster supports.
- [ ] Natural-meaning alternatives receive context labels where needed.
- [ ] Practice exercises receive the approved recall/production improvements.
- [ ] All three official song URLs are reverified.
- [ ] The single primary continuation URL is approved and verified.
- [ ] The survey destination and privacy context are reverified.
- [ ] Optional future-product and channel destinations are either verified or omitted.
- [ ] QR codes are generated only from verified destinations and scan-tested at final A5 size.
- [ ] Final design is implemented using the established source/generator workflow.
- [ ] The final binary passes 32-page structural, text, metadata, annotation, accessibility-support and visual QA.
- [ ] The public PDF is replaced only after approved QA and rollback preparation.

## Product boundaries

```text
Final versions for this phase: ONE DIGITAL VERSION ONLY
Printable version: POSTPONED
EPUB: POSTPONED
Kindle: POSTPONED
Paid ebook: POSTPONED
Subscription platform: POSTPONED
Production Email 1: INACTIVE
Production automation: INACTIVE
Production lead capture: INACTIVE
Controlled Production rollout: PENDING
```

## Decision

Page-by-page architecture is approved. Implementation gates advance to copy and design phases. Copywriting and pronunciation-normalization phases may now proceed in a separate branch. PDF source editing, design implementation and PDF generation remain blocked until new-page copy, pronunciation normalization, link verification/QR creation and design implementation pass their own approval gates. The current direct-delivery PDF remains available at its existing path and will remain until the approved replacement passes final QA and rollback preparation.
