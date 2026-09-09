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

## Authenticated operational observation and baseline

Current status and the new counting baseline were observed through an
authenticated, read-only provider session. No subscriber-level value is stored
in this record.

| Observation | Current result and scope |
| --- | --- |
| Baseline timestamp | 2026-09-09 14:12:10 UTC-05:00 (`America/Bogota`) |
| Target workflow state | ACTIVE; no state change made |
| In progress | 0 |
| Separate queued counter | Not exposed in the inspected view |
| Completed workflow activity | 3 retained records in the workflow summary; not a release-window count |
| Target group subscribers | 1 point-in-time aggregate subscriber |
| Form Analytics range | 2026-08-07 through 2026-09-09; the end is the observation date, not a closing date |
| Form-analytics baseline | 5 registrations collected from form creation through the baseline observation |
| New registrations after baseline | 0 |
| Review milestone | 10 new accumulated registrations; form-analytics total 15 |
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

### Counting method

Use the existing canonical form's Analytics view, not the current group size or
workflow-completion total:

1. Select the fixed start date 2026-08-07, when this form was created, and extend
   the end of the reporting range to the day of each manual observation.
2. Read `Subscribers collected` and subtract the fixed baseline of 5. The result
   is the cumulative number of provider-recorded form registrations after the
   baseline timestamp.
3. Do not decrement that result for a later unsubscribe or removal. The provider
   currently retains five collected registrations while the target group has
   only one current subscriber, which confirms that the collected-registration
   aggregate is distinct from current membership.
4. When the result reaches 10 (an Analytics total of 15), report the milestone
   and request the owner's continuation decision. Do not pause intake or the
   workflow automatically.

This method excludes all subscribers and registrations that existed at the
baseline, and removals cannot reset its cumulative delta. The aggregate does not
prove that every registration belongs to a distinct person; subscriber-level
deduplication for removed contacts is not available from this read-only view.
If form Analytics is reset or its counting semantics change, this baseline is no
longer sufficient and must be re-established with owner-approved evidence.

## Owner-authorized operating decision

The owner authorizes the existing public intake and workflow to continue without
a scheduled closing date. This is the current decision and supersedes an
intervening seven-day closure instruction, which must not be executed. The
earlier ten-subscriber / 72-hour windows remain historical evidence and are not
rewritten as though they had never existed.

- Monitoring is manual and assigned to the owner. No background monitor,
  automatic counter, automatic cap or scheduled shutdown exists.
- Ten new accumulated registrations are an evaluation milestone, not a stop
  instruction and not authorization for broader promotion.
- Reaching the milestone requires reporting the result and requesting the
  owner's continuation decision. It does not authorize pausing either resource.
- Existing subscribers are outside the new-registration count. Unsubscribes or
  removals after the baseline do not reduce or reset it.
- The existing incident-response procedure remains in force for any unexpected
  email, consent/privacy issue, delivery failure, complaint or workflow error:
  preserve subscribers and consent evidence, pause the workflow first, remove
  the Production handoff second, and return the verified application to its
  fail-closed state through the separately authorized deployment procedure.

This documentation update records the decision only. It changes no provider
state and executes neither the superseded seven-day closure instruction nor an
incident response; if an incident occurs, the retained procedure above applies.

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
