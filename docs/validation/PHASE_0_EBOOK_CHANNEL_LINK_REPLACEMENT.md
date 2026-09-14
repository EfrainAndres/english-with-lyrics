# Ebook channel-link replacement

## Request and scope

The owner requested replacement, not addition, of the three original-song
video destinations with the videos supplied by the channel owner. Baseline:
`7f45a55d360f23ad77578ef90c0e5e241699b37e` (merged PR #85).

This revision changes the secondary link and label on pages 7, 12 and 17.
The primary lesson CTA and QR on each page already use the requested channel
video. They are preserved, not regenerated. Related navigation copy on pages
2, 5 and 24 no longer promises a linked original video. Educational fragments,
pronunciation, exercises, audio-reference guidance and the rights notice are
unchanged. This is not a new legal or music-rights clearance.

## Confirmed mapping

Public YouTube oEmbed returned HTTP 200 for each destination on 2026-09-14.
All three identify the publisher as Sing Pronunce Repeat / English with Lyrics
and its channel as `https://www.youtube.com/@SingPronunceRepeat`.
Share-tracking parameters from the supplied links are omitted.

| Page / song | Channel destination | Superseded original-video ID |
|---|---|---|
| 7 / A Thousand Years | https://www.youtube.com/watch?v=si9YeTd8z1E | rtOvBOTyX00 |
| 12 / Still Loving You | https://www.youtube.com/watch?v=HetOzN4RtTY | 7pOr3dBFAeY |
| 17 / The Reason | https://www.youtube.com/watch?v=OYJRuJ18_Rg | fV4DiAyExN0 |

Public titles matched each song and described lyrics, pronunciation and
translation. Metadata verification is not a playback test on every device.

## Candidate

- File: `docs/design/production/phase-0-ebook-production-draft.pdf`.
- SHA-256: `d640f06349d4c49ea20bed5b84d8e831d2ab41c9fb8fc4cac46b473d120f7563`.
- Size: 1,315,226 bytes; approximately 1285 KB (existing rounded display unchanged).
- Pages: 32, A5 portrait, 420.00 × 594.96 pt.
- Metadata: existing title, author, subject, keywords and creator preserved.
- Exact annotation inventory: 16 HTTPS links. Each channel video appears three
  times (primary CTA, secondary link and QR link); continuation and survey
  appear twice each, privacy twice, canonical home once.
- Superseded original-video destinations: ZERO active annotations.
- QR assets/manifest: byte-unchanged. Five embedded QR codes decoded
  successfully at 100, 150 and 200 DPI: 15 of 15 PASS.
- Page order and the nine approved fragment IDs: PASS.
- Extracted text comparison to the published PDF: changes confined to pages
  2, 5, 7, 12, 17 and 24. Other 26 pages have identical normalized text.
- Text within page bounds and footer page-number checks: 32 of 32 PASS.
- All 32 rendered pages inspected in overview; modified song pages additionally
  inspected individually. No new clipping, overlap or broken QR observed.
- Exporter enforces the new exact inventory and rejects the three superseded
  destination IDs in the source HTML.

## Publication and review status

- Agent candidate structural/content/link/QR/visual QA: PASS.
- Owner review of this candidate: PENDING.
- Public replacement: NOT STARTED; unchanged filename reserved for later replacement.
- Published/repository-public artifact SHA-256 remains
  `45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09`.
- Candidate and public artifact are intentionally DIFFERENT until approval.
- No public PDF replacement, Production deployment, MailerLite operation,
  form submission, email, workflow, website source, logo or indexing change.
- Opening links in a new tab is controlled by the PDF viewer/device; no
  universal new-tab guarantee or PDF JavaScript was added.
- Previous publication and manual-QR approvals remain historical evidence,
  not owner approval of this revised PDF.

After owner review, stage the identical candidate at the existing public
filename on this same branch, verify Preview delivery, then merge and confirm
the canonical served hash. Preserve the previous published artifact in Git for
rollback. Do not regenerate between owner approval and public replacement.
