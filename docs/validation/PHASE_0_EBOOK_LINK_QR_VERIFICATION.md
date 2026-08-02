# Phase 0 Ebook Link and QR Verification

## 1. Scope

This record verifies the approved external destinations for the improved 32-page ebook, records deterministic QR source assets, preserves the completed source-asset scan gate, and records the generated PDF candidate handoff. Song QR codes open the matching Sing Pronunce Repeat educational lessons; original official videos remain secondary listening references. It does not authorize public PDF replacement or change Production configuration.

Verification date: 2026-08-02.

## 2. Entry-gate status

Historical entry state before the manual gate:

```text
Qualified pronunciation review: COMPLETE
Pronunciation gate: PASS
Link verification and QR: NEXT
Design implementation: BLOCKED
PDF generation: BLOCKED
Production replacement: BLOCKED
```

The source-asset manual QR gate is complete based on the project-owner
two-device test report recorded below. That historical source-asset evidence is
separate from the completed final embedded-PDF QR review.

## 3. Final destination inventory

| ID | Requested URL | Final URL | HTTP result | Redirect count | HTTPS preserved | Unexpected hostname change | Result |
|---|---|---|---:|---:|---|---|---|
| SONG_1_LESSON_URL | `https://www.youtube.com/watch?v=si9YeTd8z1E` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| SONG_1_OFFICIAL_URL | `https://www.youtube.com/watch?v=rtOvBOTyX00` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| SONG_2_LESSON_URL | `https://www.youtube.com/watch?v=HetOzN4RtTY` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| SONG_2_OFFICIAL_URL | `https://www.youtube.com/watch?v=7pOr3dBFAeY` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| SONG_3_LESSON_URL | `https://www.youtube.com/watch?v=OYJRuJ18_Rg` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| SONG_3_OFFICIAL_URL | `https://www.youtube.com/watch?v=fV4DiAyExN0` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| CONTINUE_PRACTICING_URL | `https://tally.so/r/D4a6NE` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| SURVEY_URL | `https://tally.so/r/eqzgbe` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| CANONICAL_DOMAIN | `https://singpronuncerepeat.com` | `https://singpronuncerepeat.com/` | 200 | 0 | YES | NO | VERIFIED |

The auxiliary privacy route, `https://singpronuncerepeat.com/privacidad`, also returned HTTPS 200 with no redirect and no hostname change.

## 4. Song-source verification

### Educational lesson destinations

| Song | Canonical lesson URL | Video title | Publishing channel | Availability | Song identity | Educational lesson destination |
|---|---|---|---|---|---|---|
| A Thousand Years | `https://www.youtube.com/watch?v=si9YeTd8z1E` | A Thousand Years - Christina Perri \| Lyrics, Pronunciación y Traducción al Español | Sing Pronunce Repeat / English with Lyrics | PASS | PASS | APPROVED |
| Still Loving You | `https://www.youtube.com/watch?v=HetOzN4RtTY` | Still Loving You - Scorpions \| Lyrics, Pronunciation, Pronunciación y Traducción | Sing Pronunce Repeat / English with Lyrics | PASS | PASS | APPROVED |
| The Reason | `https://www.youtube.com/watch?v=OYJRuJ18_Rg` | The Reason - Hoobastank \| Lyrics, Pronunciación y Traducción al Español | Sing Pronunce Repeat / English with Lyrics | PASS | PASS | APPROVED |

Each lesson was checked through HTTPS, YouTube oEmbed, and its public video page on 2026-08-02. The final URL matched the requested canonical URL with no redirect. The public title and publishing channel confirmed the intended song and Sing Pronunce Repeat educational-lesson destination.

### Original official listening references

| Song | Canonical video URL | Video title | Publishing channel | Availability | Official or authorized source conclusion |
|---|---|---|---|---|---|
| A Thousand Years | `https://www.youtube.com/watch?v=rtOvBOTyX00` | Christina Perri - A Thousand Years [Official Music Video] | Christina Perri, Official Artist Channel | Available | Official music video retained as the secondary listening reference. |
| Still Loving You | `https://www.youtube.com/watch?v=7pOr3dBFAeY` | Scorpions - Still Loving You (Official Video) | Scorpions, Official Artist Channel | Available | Official video retained as the secondary listening reference. |
| The Reason | `https://www.youtube.com/watch?v=fV4DiAyExN0` | Hoobastank - The Reason (Official Music Video) | HoobastankVEVO, Official Artist Channel | Available | Official music video retained as the secondary listening reference. |

Destination policy:

```text
Primary song QR: Sing Pronunce Repeat educational lesson.
Secondary text link: original official music video.
Original audio: final listening reference.
```

## 5. Continuation-destination decision

`https://tally.so/r/D4a6NE` is approved as the sole primary continuation destination.

```text
Purpose: information about the possible first guided group
Brand spelling: Sing Pronunce Repeat
Name field: present
Email field: present
Consent control: visible and required
Consent selected by default: NO
Privacy notice: visible before submission
Privacy link: https://singpronuncerepeat.com/privacidad
Guaranteed access promise: NO
Confirmed launch date: NO
Confirmed price: NO
Continuation-form prerequisite: PASS
```

The project owner confirmed the prerequisite. No form data was entered or submitted during this verification.

## 6. Survey verification

| Check | Result |
|---|---|
| Destination | `https://tally.so/r/eqzgbe` |
| Purpose | Learner feedback survey |
| Availability | Active; HTTPS 200 |
| Estimated duration | Less than three minutes, displayed publicly |
| Email field | Optional; no required marker displayed |
| Privacy context | Public privacy route verified at `https://singpronuncerepeat.com/privacidad`; no survey submission made |
| First-group CTA replacement | NO |

## 7. Optional-destination omissions

```text
ADVANCED_EBOOK_WAITLIST_URL: OMITTED
Reason: no approved advanced-ebook waitlist or product exists.

YOUTUBE_CHANNEL_URL: OMITTED
Reason: optional and unnecessary for this ebook gate.
```

The legacy waitlist and the legacy Vercel hostname are not used.

## 8. Canonical and privacy-route verification

```text
Canonical domain: https://singpronuncerepeat.com
Canonical HTTPS: PASS
Canonical hostname: singpronuncerepeat.com
Legacy Vercel hostname exposed to learner: NO
Preview hostname exposed to learner: NO
Privacy route: https://singpronuncerepeat.com/privacidad
Privacy route reachable: YES
```

## 9. QR-generation specification

```text
Format: SVG
Foreground: #000000
Background: #FFFFFF
Transparency: NO
Logo or icon inside QR: NO
Rounded/custom modules: NO
Error correction: Q
Quiet zone: 4 modules
Payload: exact HTTPS destination
Tracking parameters: NONE
URL shortener: NONE
```

## 10. QR manifest

Manifest: `docs/design/assets/phase-0-ebook/qr/manifest.json`

The manifest records five assets in source order, their exact payloads, SHA-256 values, QR specification, verification date, programmatic decode result, and completed manual scan state. The first three payloads are the verified educational lessons; the continuation and survey payloads are unchanged.

## 11. Programmatic decode results

Each SVG was rasterized temporarily at 354 px, 283 px, and 236 px. Each rendered size was decoded as PNG, JPEG quality 85, and JPEG quality 70 with `zxingcpp`.

```text
QR assets: 5
Rendered sizes: 3
Image variants: 3
Decode checks: 45
Result: 45 of 45 PASS
Minimum approved design size: 20 mm or greater; 20 mm passed this matrix.
```

Every decoded value matched its manifest payload byte-for-byte.

## 12. Manual scan-test matrix

Manual test date: 2026-08-02
Calibration line: 50 mm PASS
Devices tested: 2
QR assets tested: 5
Sizes tested: 30 mm and 24 mm
Manual scan checks: 20
Result: 20 of 20 PASS
Unexpected redirects: NONE
Evidence source: project-owner manual test report

The matrix below records the owner-reported calibrated result. Each row covers both required rendered sizes, producing 20 manual scan checks across five QR assets and two devices. No Tally form was submitted.

| QR ID | Payload | Device | 30 mm scan | 24 mm scan | Opened final destination | Destination identity correct | Unexpected redirect | Test date | Notes |
|---|---|---|---|---|---|---|---|---|---|
| song-1-a-thousand-years | `https://www.youtube.com/watch?v=si9YeTd8z1E` | iPhone 12 Pro Max | PASS | PASS | PASS | PASS | NO | 2026-08-02 | Owner-reported calibrated manual scan; no Tally form submitted. |
| song-1-a-thousand-years | `https://www.youtube.com/watch?v=si9YeTd8z1E` | USB-C Android phone | PASS | PASS | PASS | PASS | NO | 2026-08-02 | Owner-reported calibrated manual scan; no Tally form submitted. |
| song-2-still-loving-you | `https://www.youtube.com/watch?v=HetOzN4RtTY` | iPhone 12 Pro Max | PASS | PASS | PASS | PASS | NO | 2026-08-02 | Owner-reported calibrated manual scan; no Tally form submitted. |
| song-2-still-loving-you | `https://www.youtube.com/watch?v=HetOzN4RtTY` | USB-C Android phone | PASS | PASS | PASS | PASS | NO | 2026-08-02 | Owner-reported calibrated manual scan; no Tally form submitted. |
| song-3-the-reason | `https://www.youtube.com/watch?v=OYJRuJ18_Rg` | iPhone 12 Pro Max | PASS | PASS | PASS | PASS | NO | 2026-08-02 | Owner-reported calibrated manual scan; no Tally form submitted. |
| song-3-the-reason | `https://www.youtube.com/watch?v=OYJRuJ18_Rg` | USB-C Android phone | PASS | PASS | PASS | PASS | NO | 2026-08-02 | Owner-reported calibrated manual scan; no Tally form submitted. |
| continue-first-group | `https://tally.so/r/D4a6NE` | iPhone 12 Pro Max | PASS | PASS | PASS | PASS | NO | 2026-08-02 | Owner-reported calibrated manual scan; no Tally form submitted. |
| continue-first-group | `https://tally.so/r/D4a6NE` | USB-C Android phone | PASS | PASS | PASS | PASS | NO | 2026-08-02 | Owner-reported calibrated manual scan; no Tally form submitted. |
| survey-feedback | `https://tally.so/r/eqzgbe` | iPhone 12 Pro Max | PASS | PASS | PASS | PASS | NO | 2026-08-02 | Owner-reported calibrated manual scan; no Tally form submitted. |
| survey-feedback | `https://tally.so/r/eqzgbe` | USB-C Android phone | PASS | PASS | PASS | PASS | NO | 2026-08-02 | Owner-reported calibrated manual scan; no Tally form submitted. |

## 12a. Final embedded-PDF QR review

The project owner manually reviewed the five QR codes embedded in the generated
32-page PDF candidate. This evidence is distinct from the earlier source-asset
two-device scan.

| PDF page | Expected destination | Result |
|---:|---|---|
| 7 | `https://www.youtube.com/watch?v=si9YeTd8z1E` | PASS |
| 12 | `https://www.youtube.com/watch?v=HetOzN4RtTY` | PASS |
| 17 | `https://www.youtube.com/watch?v=OYJRuJ18_Rg` | PASS |
| 28 | `https://tally.so/r/D4a6NE` | PASS |
| 31 | `https://tally.so/r/eqzgbe` | PASS |

```text
Evidence source: project-owner manual embedded-PDF review
Embedded QR codes reviewed: 5 of 5 PASS
Unexpected redirects: NONE
Final embedded-PDF QR gate: PASS
Production PDF gate: PASS
```

## 13. Gate criteria

The link/QR gate may pass only when every required destination remains verified, every QR payload matches its visible and clickable primary educational-lesson destination, programmatic decode passes, and both devices pass manual scans at 30 mm and 24 mm with the correct final destination and no unexpected redirect. The original official song links remain secondary listening references and receive no QR.

## 14. Current status

```text
Pronunciation gate: PASS
Required destinations resolved: 9 of 9
Required external links verified: 9 of 9
Educational lesson destinations verified: 3 of 3
Original official listening destinations verified: 3 of 3
Optional advanced waitlist: OMITTED
Optional YouTube channel link: OMITTED
QR source assets generated: 5 of 5
Programmatic QR decode: 45 of 45 PASS
Manual two-device QR scan: PASS
Manual scan checks: 20 of 20 PASS
Link verification: COMPLETE
QR generation: COMPLETE
Link/QR gate: PASS
Design implementation: COMPLETE / APPROVED
PDF generation: COMPLETE — 32-page candidate
Embedded PDF annotation validation: PASS — 16 of 16
Embedded PDF programmatic QR decode: PASS — 5 of 5
Project-owner/manual embedded-PDF QR review: PASS
Five embedded QR codes reviewed: 5 of 5
Unexpected redirects: NONE
Final embedded-PDF QR gate: PASS
Production PDF gate: PASS
Public downloadable PDF: UNCHANGED
Public replacement: NEXT / UNBLOCKED — NOT STARTED
Production deployment: NOT STARTED
Production replacement: BLOCKED pending public replacement and delivery QA
```

## 15. Remaining actions

1. Replace the public PDF in a separate approved branch while preserving the public filename.
2. Complete source-to-public PDF integrity verification.
3. Complete deployed Production PDF smoke testing and rollback verification.
4. Preserve the verified five QR source assets and exact payloads.
5. Keep Production replacement blocked until the later public-replacement and delivery-QA gate passes.

The source-asset two-device scan remains historical evidence. The completed
embedded-PDF programmatic and project-owner manual review apply only to the
generated 32-page candidate and do not replace the separate public-delivery
verification still required.
