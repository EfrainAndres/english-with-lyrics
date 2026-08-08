# Phase 0 Production Lead Capture Activation and Rollback

## Current state

- Website support: PREPARED / FAIL-CLOSED / NOT ACTIVATED.
- Production-scoped website configuration: ABSENT and unchanged by this task.
- Production group/form: exactly one isolated path STAGED / INACTIVE FROM THE WEBSITE PERSPECTIVE / ZERO SUBSCRIBERS.
- Production Email 1: exactly one draft STAGED / INACTIVE / UNSENT.
- Production automation: exactly one matching workflow STAGED / INACTIVE / ZERO CONTACTS IN PROGRESS OR COMPLETED.
- Production test, campaign and Production sends: ZERO / ZERO / ZERO.
- Existing sender: VERIFIED / UNCHANGED.
- `/gracias`, `/privacidad`, `/tratamiento-de-datos`, and direct PDF delivery: AVAILABLE; direct PDF access remains independent of consent and email.
- Lead capture and email delivery: INACTIVE.
- Analytics dashboard activation, indexing decision, controlled test, and rollout: PENDING.

Merging the support code does not configure Vercel, expose the staged form on
the public website, activate Email 1 or the automation, submit a form, create a
subscriber, send an email, enable analytics, change indexing, or deploy.

## Configuration and rendering matrix

| Runtime | Configuration | Result |
|---|---|---|
| Local | Any provider-form value | Provider handoff disabled; direct PDF remains available. |
| Preview | Missing or invalid Preview value | Existing isolated diagnostic state; no provider handoff. |
| Preview | Valid Preview value | Existing Preview-only external handoff and warning; Production path unused. |
| Production | Absent or blank Production value | Entire lead-capture surface omitted. |
| Production | Malformed, unsupported or invalid Production value | Entire lead-capture surface omitted. |
| Production | Valid Production value | External provider handoff only, with the approved disclosure and exact `/privacidad` link; no native form fields or app-side personal-data handling. |

A supported form URL must be an absolute HTTPS URL with no surrounding
whitespace, credentials, custom port, query string, fragment, local/IP host, or
root-only path. The implementation does not hard-code or record a real form URL.

## Remaining activation gates

### Technical prerequisites

- Confirm the activation starts from the merged support commit and a clean branch.
- Reverify the exact staged group/form-to-workflow-to-Email-1 mapping, empty group, zero workflow contacts, zero sends, and unchanged sender before touching configuration.
- Confirm the Production-scoped form value is still absent and Preview/Development scopes remain unchanged.
- Confirm rollback access, the last known-good deployment, and an authorized rollback operator are available before the test window.
- Pass lint, build, `git diff --check`, sensitive-content scanning, the configuration matrix, desktop/390 px containment, route regressions, synchronization, and mergeability.

### Owner authorization

- Explicitly authorize Production collection, the single controlled contact, the temporary automation activation needed for that delivery, and rollback execution.
- Approve the exact test window, controlled address owner, success criteria, stop conditions, and post-test data disposition without recording personal data in Git.

### Controlled test requirement

- Perform the controlled provider-path test before public website linking or promotion.
- Limit the test to one authorized contact, one affirmative form submission, one expected Production group assignment, one automation enrollment, and one Email 1 delivery.
- Verify `/gracias`, direct PDF access, privacy and unsubscribe behavior, zero unexpected contacts or sends, and provider counters before continuing.
- Stop and roll back on any mismatch, duplicate/unexpected message, incorrect group, missing consent evidence, broken route, or containment/accessibility regression.

### Activation acceptance for staged limitations

- The provider-native missing-consent feedback limitation and possible reachability of the undistributed direct provider form were accepted only for inactive staging.
- Before activation, the owner must explicitly accept those limitations for the controlled Production boundary or require them to be resolved. Neither is represented as fixed, fully accessible, certified, or guaranteed compliant.
- The open corporate Outlook placement limitation must be explicitly accepted, resolved, or kept as a documented rollout stop condition.

### Indexing decision

- Make an explicit, separate Production indexing decision. Current `noindex` behavior remains unchanged until that decision is authorized and implemented in its own scope.

## Safe activation sequence

1. Record owner authorization and the exact one-contact boundary, test window, success criteria, stop conditions, rollback operator, and post-test data disposition.
2. Reverify source synchronization, scoped validation, staged provider mapping, zero baseline counts, unchanged sender, route health, and rollback access.
3. Activate the staged automation only for the authorized controlled provider-path test; do not configure or expose the website handoff yet.
4. Submit exactly one affirmative provider-hosted Production form using the authorized controlled contact.
5. Verify exactly one expected group assignment, automation enrollment, Email 1 delivery, `/gracias`, independent PDF access, privacy and unsubscribe treatment, and zero unexpected contacts or sends.
6. If and only if the controlled test passes and the limitation acceptance is recorded, configure the Production-scoped website handoff value without changing Preview or Development.
7. Deploy the already merged support commit, then run a no-submission public smoke check for the external handoff, adjacent `/privacidad` link, absence of native fields, route health, and desktop/390 px containment.
8. Verify the analytics dashboard without adding payloads, cookies, tracking parameters, or personal-data logging; keep indexing unchanged pending its separate decision.
9. Begin the approved 10-subscriber rollout, monitor contacts, delivery, unsubscribe, route health and unexpected-send indicators for 72 hours, then require a go/no-go review before expansion.

There is no assumption that a configuration change affects an existing
deployment automatically; the authorized activation plan must include the
required deployment and the corresponding rollback deployment.

## Rollback sequence

1. Stop public intake first by removing the Production-scoped handoff value and deploying the last approved fail-closed source state.
2. Confirm the Production lead-capture surface is absent while `/gracias`, legal routes and direct PDF delivery remain healthy.
3. Deactivate the Production automation to prevent new enrollment or delivery.
4. Confirm contact and send counters have stopped changing and record only non-personal aggregate results.
5. Apply the pre-authorized disposition to the controlled test contact using provider operations; do not alter unrelated Preview or Production contacts or resources.
6. Keep the staged group/form, Email 1 and workflow for diagnosis unless separate deletion authority is granted. Resource deletion is not required for website rollback.
7. Reverify Preview isolation, route health, direct PDF independence, analytics/indexing unchanged state, and clean repository synchronization.

Removing or invalidating the Production-scoped value fails closed at the next
deployment. Direct PDF delivery does not depend on the provider handoff, Email
1, automation, or subscriber state and is therefore the continuous fallback.

## Next activation task boundary

- Proposed branch: `feat/phase-0-production-lead-capture-activation`.
- Permitted repository files: `BACKLOG.md`, `CHANGELOG.md`, this validation document, and the existing focused provider/legal readiness documents required to record evidence. Source changes require separate explicit authorization.
- External changes permitted only by the next task's explicit authorization: Production-scoped handoff configuration, the one-contact controlled provider test, temporary automation activation, its required deployment, and pre-authorized rollback actions.
- Required validations: baseline provider/Vercel scope inventory without values, lint, build, diff check, sensitive-content scan, configuration matrix, desktop/390 px containment, exact handoff/privacy/no-native-field assertions, `/gracias`/legal/direct-PDF regressions, zero-baseline and post-test provider counts, analytics dashboard, synchronization, and mergeability.
- Merge gate: controlled test PASS; no unexpected contact/send; limitation acceptance recorded; rollback verified; public smoke PASS; direct PDF and legal routes healthy; Preview unchanged; analytics dashboard verified; indexing decision explicitly recorded; owner approval for the 10-subscriber/72-hour rollout. Do not merge or expand rollout when any gate is unresolved.
