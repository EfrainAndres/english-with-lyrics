# Phase 0 Consent Revision — Production Publication Verification

## Result

Status: **LIVE / PUBLICATION VERIFIED** for the professionally reviewed
consent-purpose revision merged through PR #81.

- Verified `origin/main` and local `main`:
  `a03b192e241c2ccedc02fd8b3e7358b6c382b653`.
- PR #81 merge recorded at 2026-09-08 11:42:27 in `America/Bogota`.
- The automatic Production deployment built from that exact merge commit reached
  READY at 11:43:03. The revised wording was then live with the prior published
  legal dates.
- The legal last-updated date was changed through the existing Production-only
  server configuration, followed by a clean deployment of the same verified
  merge commit. The canonical deployment reached READY at 11:49:49.
- Canonical origin: `https://singpronuncerepeat.com`.

No deployment identifier, ephemeral URL, private legal value, provider URL or
provider identifier is retained in this record.

## Legal-date handling

The public legal pages distinguish the policy's original effective date from the
date of its latest published revision.

- `LEGAL_EFFECTIVE_DATE` remains 2026-07-27. Existing publication evidence and
  the public label identify it as the policy's original effective date; the
  approved consent revision did not explicitly require a new effective date.
- `LEGAL_LAST_UPDATED_DATE` is 2026-09-08, the actual Bogotá calendar date on
  which the PR #81 revision reached canonical Production.
- Only the existing Production `LEGAL_LAST_UPDATED_DATE` value was updated.
  `LEGAL_EFFECTIVE_DATE`, every other Production variable, and all Preview and
  Development scopes were preserved.
- The publication date is not represented as a professional-review date. No
  reviewer identity, credentials, review date, certificate or supporting
  document is asserted.

## Canonical public verification

| Check | Result |
| --- | --- |
| `/` | HTTP 200; homepage CTA routes to `/ebook-gratis`; no direct PDF link |
| `/ebook-gratis` | HTTP 200; one safe external provider handoff; no native form fields; no direct PDF link |
| `/gracias` | HTTP 200; immediate download and browser-open PDF actions retained; survey and first-group actions remain optional |
| `/privacidad` | HTTP 200; revised purposes, unsubscribe, rights channel and dates verified |
| `/tratamiento-de-datos` | HTTP 200; revised purposes, unsubscribe, rights channel and dates verified |
| Public PDF | HTTP 200; Production SHA-256 matches the repository artifact |

Both legal pages now state that one required, initially unchecked authorization
covers delivery of the free guide and related educational communications. They
preserve unsubscribe and privacy-rights channels, state that only the first email
is currently part of the documented journey, and do not claim certification or
guaranteed compliance.

The obsolete public statements that Production email handling is inactive and
that related educational communications require a second authorization are
absent. Provider availability is described conditionally; the policies do not
claim that provider activity was verified by this publication task.

Additional checks:

- Desktop containment: PASS; no horizontal overflow on the five application
  routes.
- Exact 390 x 844 visual containment: PASS using a temporary external QA frame;
  no repository artifact or Production page was modified.
- Configured handoff disclosure: PASS; unchanged combined checkbox text, exact
  privacy destination, safe external-link behavior, no app-side personal-data
  fields and no pre-registration PDF fallback.
- Unavailable handoff regression: PASS by the unchanged PR #81 source and its
  successful missing/invalid-configuration evidence; canonical Production was
  configured, so this fail-closed branch was not triggered on the live origin.
- Robots: PASS; `/ebook-gratis`, `/gracias`, `/privacidad` and
  `/tratamiento-de-datos` retain `noindex, nofollow`; homepage behavior is
  unchanged.
- PDF identity: PASS; Production and repository SHA-256 remain
  `45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09`.

No form was submitted, no PDF action was clicked, and no email or inbox delivery
was tested during this publication verification.

## Current MailerLite observation

The check was strictly read-only. The canonical handoff reaches the existing
public provider-hosted form. Observable public state:

- Form reachable: PASS.
- One email field, one name field and one consent checkbox: PRESENT.
- Combined consent wording: EXACT MATCH.
- Canonical privacy destination: PRESENT.
- Submission or provider success state triggered: NO.
- Provider-hosted title: still contains the historical `Production Staging` and
  `INACTIVE` wording. This conflicts with the form's current public reachability
  and remains a provider-side clarity issue.

No authenticated MailerLite session and no provider read-only API integration
were available. The hosted form does not expose internal operational counters or
associations. Current internal status is therefore:

| Provider observation | Current result |
| --- | --- |
| Workflow active or paused | UNVERIFIED |
| Queued or in-progress contacts | UNVERIFIED |
| Aggregate Production-group subscribers | UNVERIFIED |
| Aggregate automated sends | UNVERIFIED |
| Delivery failures | UNVERIFIED |
| Complaints | UNVERIFIED |
| Form-to-group mapping | UNVERIFIED internally; public form identity is unchanged |
| Email 1 workflow association | UNVERIFIED internally |

The last documented provider checkpoint remains historical evidence only:

- Production group: zero subscribers at rollout activation.
- Workflow: zero queued/in progress and three retained completed records at
  activation.
- Provider-recorded automated sends: three historical total.
- Inbox-verified deliveries: two historical total; no inbox check was repeated.
- New failures and complaints during the documented rollback exposure: zero;
  this is not a current aggregate.
- The isolated form-to-group mapping and Email 1 workflow association were
  previously verified, but were not independently reverified now.

## Rollout authorization boundary

Repository search found no completed post-72-hour go/no-go, explicit rollout
closure, or subsequent authorization that makes the old bounded rollout current.
The former 72-hour authorization must not be treated as active or permanent.

Operational decision remains **UNRESOLVED**: obtain an authorized authenticated
provider status check and decide whether the publicly reachable handoff/workflow
should remain enabled under a new bounded authorization or be closed using the
documented stop process. This legal publication does not make that decision and
does not approve broader public promotion.

## Change boundaries

- MailerLite resources, workflow state, form mapping, contacts and emails:
  UNCHANGED.
- Vercel change: Production `LEGAL_LAST_UPDATED_DATE` only, followed by the
  required clean rebuild of verified merged `main`.
- Source application, PDF, Analytics and robots configuration: UNCHANGED.
- Preview and Development configuration: UNCHANGED.

## Repository validation

- Production build from verified merged `main`: PASS during the required
  legal-date rebuild.
- `npm run lint`: PASS.
- `git diff --check`: PASS.
- Documentation scope: PASS; no source, PDF, robots or dependency file changed.
- Sensitive-value review: PASS; the documentation diff contains no provider or
  deployment identifier, private endpoint, credential, secret or personal data.
- Draft-PR Preview checks: pending until this record is pushed.
