# Phase 0 PR #83 Production And Provider Presentation Verification

## Result and scope

Status: **PR #83 LIVE / PUBLIC SMOKE PASSED / PROVIDER PRESENTATION UPDATED**.

- PR #83 is merged in `origin/main` at
  `29c2ee4187b6c680957b66ea7acc7eaa5cd912bd`.
- The automatic Production deployment built from that exact merge reached
  READY on 2026-09-09 at 11:48:32 in `America/Bogota`.
- Canonical origin: `https://singpronuncerepeat.com`.
- The provider work was limited to presentation settings on the single existing
  canonical Production form. No form, group, workflow, field, subscriber,
  campaign, email or replacement resource was created.

No deployment identifier, temporary deployment URL, provider URL, provider
identifier, credential, subscriber information or other personal data is
retained in this record.

## Canonical Production smoke

Desktop and exact 390 x 844 browser checks passed without horizontal overflow:

- `/ebook-gratis` presents `Recibir mi guía gratis` within the first viewport
  when the handoff is configured. Keyboard activation scrolls to the existing
  disclosure and visibly focuses that section.
- The actual MailerLite action states that it opens the form in a new tab and
  retains safe external-link attributes, the approved combined consent
  disclosure and the canonical privacy destination.
- `/privacidad` and `/tratamiento-de-datos` retain both return destinations.
  The data-policy table exposes 19 unique links; keyboard activation reaches and
  focuses every corresponding existing section heading.
- The lesson card is clearly labeled `Ejemplo visual` and exposes no audio or
  playback control.
- `/gracias` uses guide-ready footer language, retains the privacy/rights label,
  both PDF actions and its optional follow-ups, and does not ask the user to
  register again.
- `/` and `/ebook-gratis` expose no direct PDF link. The PDF remains available
  through `/gracias` and independently when its stable URL is already known.
- `/`, `/ebook-gratis`, `/gracias`, `/privacidad`,
  `/tratamiento-de-datos` and the public PDF return HTTP 200 with the expected
  content types.
- `/ebook-gratis`, `/gracias` and both legal routes retain
  `noindex, nofollow`; homepage and repository robots behavior are unchanged.
- The canonical PDF stream and repository artifact have the same SHA-256:
  `45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09`.

No form was submitted, no email was sent and no inbox delivery was tested.

## Provider identity and preserved behavior

An authenticated provider session matched the public canonical handoff to the
existing Production form before editing. The form still selects the same single
Production group, and the corresponding active workflow still starts when a
subscriber joins that group and contains the same single Email 1.

The following behavior was reopened and reverified after saving:

- The combined authorization wording exactly matches the approved repository
  text, remains required and is initially unchecked.
- Email remains required and name remains optional.
- The privacy destination and custom `/gracias` success redirect are unchanged.
- Single opt-in remains configured; no second authorization or new purpose was
  introduced.
- The public form URL, group mapping, evidence fields, workflow trigger,
  workflow activation state, Email 1 content and sender are unchanged.

## Presentation changes and native limitations

Completed on the existing canonical form:

- Replaced the stale public `Staging` / `INACTIVE` browser title with
  `Recibe tu guía gratis | Sing Pronunce Repeat`.
- Enabled persistent visible Spanish labels: `Correo electrónico` and
  `Nombre (opcional)`.
- Applied the existing brand palette and native typography, spacing, border and
  consent/privacy controls to improve visual continuity, contrast and
  legibility at desktop and 390 px.
- Reopened both editor and public form; the saved title, labels and visual
  settings persisted without mobile overflow.

Native limitations retained rather than worked around:

- The current Classic editor exposed no supported logo/content-image block. No
  logo, new asset, template replacement, custom script or paid feature was used.
- The visible Spanish labels persist, but the public accessibility tree still
  exposes generic provider field names rather than programmatically associated
  Spanish names.
- The consent label provides a broad mobile tap area, but the rendered input and
  button controls themselves remain below 44 pixels in one dimension under the
  provider's native layout.
- Missing-consent error accessibility remains **UNVERIFIED** because this task
  prohibited submission. It is not recorded as fixed.

## Current authenticated operational observation

Observed on 2026-09-09 in the authenticated provider interface:

| Observation | Current result and scope |
| --- | --- |
| Target workflow state | ACTIVE; no state change made |
| In progress | 0 |
| Separate queued counter | Not exposed in the inspected view |
| Completed workflow activity | 3 retained records in the workflow summary; not a release-window count |
| Target group subscribers | 1 point-in-time aggregate subscriber |
| Reporting period | Last 30 days, explicitly selected |
| Sends | 3 |
| Hard delivery failures | 0 |
| Soft delivery failures | 0 |
| Complaints | 0 |
| Unsubscribes | 1 |
| Association | Canonical form -> target group -> target workflow -> one Email 1: verified |

The three completed records and three sends include retained controlled QA
history that falls inside the selected period; they are not new PR #83 release
activity. Zero failures or complaints in this limited view does not mean no
incident has ever occurred. No inbox was checked. Stale internal group/workflow
names remain an operational naming follow-up and do not describe the actual
active workflow state.

## Operational decision still required

Repository evidence still contains no completed post-72-hour go/no-go, explicit
closure or subsequent authorization that makes the historical bounded rollout
current. This task did not authorize activation, suspension, extension or
broader promotion.

Before broader promotion, the owner must explicitly choose and document either:

1. a new bounded operating window, cap, monitoring owner and stop criteria that
   account for the current active workflow and remaining native provider
   accessibility/deliverability limitations; or
2. closure of public intake and the workflow through the separately authorized
   stop process.

## Validation and change boundaries

- Canonical desktop and exact 390 x 844 smoke: PASS.
- Keyboard focus/scroll and all 19 legal anchors: PASS.
- Route, robots, soft-gate and PDF identity checks: PASS.
- Provider save/reopen persistence and desktop/390 px containment: PASS.
- Consent and functional-setting comparison before/after: PASS.
- Form submissions, subscribers created, emails sent, workflow operations,
  manual Production deployment and Vercel/Analytics/indexing changes: NONE.
- Merged PR #83 lint/build evidence remains applicable; this branch changes
  Markdown only, and the PR #83 source lint was reconfirmed unchanged.
- Repository change scope: documentation and changelog only.
- `git diff --check` and sensitive-value review: PASS.
