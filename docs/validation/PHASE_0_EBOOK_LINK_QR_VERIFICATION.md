# Phase 0 Ebook Link and QR Verification

## 1. Scope

This record verifies the approved external destinations for the improved 32-page ebook, records deterministic QR source assets, and prepares the manual scan gate. It does not implement visual design, generate a final PDF, or change Production configuration.

Verification date: 2026-08-01.

## 2. Entry-gate status

```text
Qualified pronunciation review: COMPLETE
Pronunciation gate: PASS
Link verification and QR: NEXT
Design implementation: BLOCKED
PDF generation: BLOCKED
Production replacement: BLOCKED
```

## 3. Final destination inventory

| ID | Requested URL | Final URL | HTTP result | Redirect count | HTTPS preserved | Unexpected hostname change | Result |
|---|---|---|---:|---:|---|---|---|
| SONG_1_OFFICIAL_URL | `https://www.youtube.com/watch?v=rtOvBOTyX00` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| SONG_2_OFFICIAL_URL | `https://www.youtube.com/watch?v=7pOr3dBFAeY` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| SONG_3_OFFICIAL_URL | `https://www.youtube.com/watch?v=fV4DiAyExN0` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| CONTINUE_PRACTICING_URL | `https://tally.so/r/D4a6NE` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| SURVEY_URL | `https://tally.so/r/eqzgbe` | Same as requested | 200 | 0 | YES | NO | VERIFIED |
| CANONICAL_DOMAIN | `https://singpronuncerepeat.com` | `https://singpronuncerepeat.com/` | 200 | 0 | YES | NO | VERIFIED |

The auxiliary privacy route, `https://singpronuncerepeat.com/privacidad`, also returned HTTPS 200 with no redirect and no hostname change.

## 4. Song-source verification

| Song | Canonical video URL | Video title | Publishing channel | Availability | Official or authorized source conclusion |
|---|---|---|---|---|---|
| A Thousand Years | `https://www.youtube.com/watch?v=rtOvBOTyX00` | Christina Perri - A Thousand Years [Official Music Video] | Christina Perri, Official Artist Channel | Available | Official music video verified through oEmbed and the public video page. |
| Still Loving You | `https://www.youtube.com/watch?v=7pOr3dBFAeY` | Scorpions - Still Loving You (Official Video) | Scorpions, Official Artist Channel | Available | Official video verified through oEmbed and the public video page. |
| The Reason | `https://www.youtube.com/watch?v=fV4DiAyExN0` | Hoobastank - The Reason (Official Music Video) | HoobastankVEVO, Official Artist Channel | Available | Official music video verified through oEmbed and the public video page. |

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

The manifest records five assets in source order, their exact payloads, SHA-256 values, QR specification, verification date, programmatic decode result, and pending manual scan state.

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

Manual two-device scanning must occur after this branch is pushed. Each row covers both required rendered sizes.

| QR ID | Payload | Device | 30 mm scan | 24 mm scan | Opened final destination | Destination identity correct | Unexpected redirect | Test date | Notes |
|---|---|---|---|---|---|---|---|---|---|
| song-1-a-thousand-years | `https://www.youtube.com/watch?v=rtOvBOTyX00` | iPhone 12 Pro Max | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING |
| song-1-a-thousand-years | `https://www.youtube.com/watch?v=rtOvBOTyX00` | USB-C Android phone | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING |
| song-2-still-loving-you | `https://www.youtube.com/watch?v=7pOr3dBFAeY` | iPhone 12 Pro Max | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING |
| song-2-still-loving-you | `https://www.youtube.com/watch?v=7pOr3dBFAeY` | USB-C Android phone | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING |
| song-3-the-reason | `https://www.youtube.com/watch?v=fV4DiAyExN0` | iPhone 12 Pro Max | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING |
| song-3-the-reason | `https://www.youtube.com/watch?v=fV4DiAyExN0` | USB-C Android phone | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING |
| continue-first-group | `https://tally.so/r/D4a6NE` | iPhone 12 Pro Max | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING |
| continue-first-group | `https://tally.so/r/D4a6NE` | USB-C Android phone | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING |
| survey-feedback | `https://tally.so/r/eqzgbe` | iPhone 12 Pro Max | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING |
| survey-feedback | `https://tally.so/r/eqzgbe` | USB-C Android phone | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING | PENDING |

## 13. Gate criteria

The link/QR gate may pass only when every required destination remains verified, every QR payload matches its visible and clickable destination, programmatic decode passes, and both devices pass manual scans at 30 mm and 24 mm with the correct final destination and no unexpected redirect.

## 14. Current status

```text
Pronunciation gate: PASS
Required destinations resolved: 6 of 6
Required external links verified: 6 of 6
Optional advanced waitlist: OMITTED
Optional YouTube channel link: OMITTED
QR source assets generated: 5 of 5
Programmatic QR decode: PASS
Manual two-device QR scan: PENDING
Link verification: COMPLETE
QR generation: COMPLETE
Link/QR gate: BLOCKED — MANUAL SCAN PENDING
Design implementation: BLOCKED
PDF generation: BLOCKED
Production replacement: BLOCKED
```

## 15. Remaining actions

1. Render all five source assets at 30 mm and 24 mm in the approved future design.
2. Scan each rendered QR with the iPhone 12 Pro Max and USB-C Android phone.
3. Record final destinations, identity checks, redirects, dates, and notes in the manual matrix.
4. Keep the link/QR gate blocked until every required manual result passes.
5. Begin design implementation only after the link/QR gate passes.
