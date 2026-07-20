# Phase 0 MailerLite Setup

## Status

- Provider: MailerLite.
- Role: Proposed Phase 0 email processor.
- Environment: Non-production preparation.
- Production activation: Blocked.
- Account creation: Manual.
- Domain authentication: Pending manual configuration unless already verified.
- Legal approval: Pending.
- Public lead capture: Not active.
- Current direct ebook delivery: Active.

This document prepares the provider boundary for the approved soft-gated funnel. It does not activate lead capture, `/gracias`, production automations, or production email sends.

## Official capability verification

Only capabilities verified from current official MailerLite documentation are marked as verified. Unconfirmed details remain `[PENDING_PROVIDER_VERIFICATION]`.

| Capability | Required by project | Verified from official source? | Current status | Notes |
|---|---:|---:|---|---|
| Embedded forms | Yes | Yes | Verified | Official help documents embedded-form creation and website installation. |
| Hosted forms or landing forms | Yes | Yes | Verified | Official help and knowledge-base navigation show landing pages and forms as lead-collection tools. |
| Subscriber groups | Yes | Yes | Verified | Official help defines groups and states forms and landing pages select target groups. |
| Create/update duplicate subscriber | Yes | Yes | Verified | Official API docs support create, update, and duplicate-safe update behavior, with abuse-prevention limits for unsubscribed/bounced/junk statuses. |
| Form-to-group assignment | Yes | Yes | Verified | Embedded-form setup requires selecting the subscriber group(s) subscribers will be added to. |
| Automation triggered by joining a group | Yes | Yes | Verified | Official automation help and API docs document `Joins a group` / `subscriber_joins_group` triggers. |
| Custom fields | Yes | Yes | Verified | Official help and API docs support default fields and custom text/number/date fields. |
| Redirect after submission | Yes | Yes | Verified | Embedded forms support a custom success page to send subscribers to an external URL. |
| Single opt-in | Yes | Yes | Verified | Official help states single opt-in is used when double opt-in is disabled. |
| Double opt-in | No for initial Phase 0 | Yes | Verified | Official help documents double opt-in for forms and API/integrations. |
| Consent timestamp or evidence | Yes | Partial | Partially verified | API subscriber examples expose `opted_in_at` and `optin_ip`, but exact evidence captured by embedded forms for this use case still needs account-level verification. |
| Unsubscribe | Yes | Yes | Verified | Automations support an `Unsubscribe` action; provider-managed unsubscribe remains available in MailerLite email workflows. |
| Suppression | Yes | Partial | Partially verified | API docs state unsubscribed, bounced, and junk subscribers cannot be reactivated via API because of abuse-prevention measures. Full suppression behavior still needs dashboard verification. |
| Export | Yes | Yes | Verified | Official help documents report exports and group export. |
| Correction | Yes | Yes | Verified | Official help and API docs support updating subscriber and field data. |
| Deletion | Yes | Partial | Partially verified | API docs verify field deletion; subscriber deletion capability requires current dashboard/API verification for the intended workflow. |
| API availability | No for initial implementation | Yes | Verified | Official developer docs exist for subscribers, groups, fields, automations, forms, and webhooks. |
| API authentication | No for initial implementation | Yes | Verified | Official developer docs require a bearer token generated in MailerLite. |
| Domain authentication | Yes | Yes | Verified | Official help documents domain authentication and DNS records. |
| Sender verification | Yes | Partial | Partially verified | Official help documents sender/domain steps, but exact sender approval flow for the target mailbox remains a manual task. |
| Automation logs | Yes | Yes | Verified | Official help documents automation history. |
| Delivery/open/click reporting | Yes | Yes | Verified | Official help and automation stats document sent, bounce, open, and click reporting. |
| DPA | Yes | Yes | Verified | Official Data Processing Addendum is publicly available. |
| Sub-processors | Yes | Yes | Verified | Official DPA includes a sub-processor annex. |
| Processing locations | Yes | Yes | Verified | Trust page and DPA identify EU data-center locations; legal interpretation still needs review. |
| Account deletion/termination retention | Yes | Partial | Partially verified | Trust page states data is kept while active and deleted when no longer needed; account-termination specifics still need owner verification against current legal terms. |
| Preview or test-group support | Yes | Partial | Partially verified | Groups and separate forms are supported; formal sandbox/test-account behavior still needs manual verification. |

## Manual account setup

Owner-performed steps:

1. Create or access the MailerLite account.
2. Use the approved brand-led project name.
3. Enable MFA when available.
4. Add only required administrators.
5. Complete account-verification and sender-verification steps required by MailerLite.
6. Add the sender mailbox intended for Phase 0 testing.
7. Authenticate the sending domain when available.
8. Review current official terms of service.
9. Review the current official privacy policy.
10. Review the current official DPA.
11. Review the current sub-processor list.
12. Review the current processing-location disclosures.
13. Review current export, correction, deletion, unsubscribe, and suppression behavior.
14. Record approval and review evidence outside Git.
15. Do not upload existing personal contacts without authorization.

No owner account details, mailbox values, or group IDs belong in the repository.

## Group taxonomy

### Proposed groups

```text
SPR - Preview - Ebook Leads
SPR - Production - Ebook Leads
SPR - Production - Survey Completed
SPR - Production - First Group Interest
SPR - Production - Advanced Ebook Interest
```

### Recommendation

- Use groups for explicit funnel membership and automation triggers.
- Use segments later for dynamic filtering when needed.

### Rules

- Preview submissions enter only `SPR - Preview - Ebook Leads`.
- Production submissions eventually enter only `SPR - Production - Ebook Leads`.
- Production groups must not receive test contacts.
- Survey and interest groups may stay manual or future integration targets until those steps exist.
- Group IDs must stay out of Git.
- Do not create speculative groups that have no Phase 0 use.
- Do not embed subscriber names or emails in group names.

Reasoning: groups are the clean MailerLite primitive for explicit membership and for the approved `subscriber joins group` automation trigger. Segments are useful later for reporting or rule-based filtering, but they are not the primary control surface for the initial funnel.

## Field taxonomy

### Proposed minimum fields

| Field | Required? | Source | Purpose | Max length | Production status |
|---|---:|---|---|---:|---|
| `email` | Yes | User input | Delivery and subscriber identity | 254 | Planned |
| `name` | No | User input | Optional light personalization | 80 | Planned |
| `consent_source` | Yes | Hidden/static form value | Identify consent origin | 100 | Planned |
| `landing_path` | No | Hidden form value | Conversion-path attribution | 120 | Planned |
| `source_category` | No | Hidden form value | Channel attribution | 50 | Planned |
| `utm_source` | No | Hidden form value | Campaign attribution | 100 | Planned |
| `utm_medium` | No | Hidden form value | Campaign attribution | 100 | Planned |
| `utm_campaign` | No | Hidden form value | Campaign attribution | 150 | Planned |
| `form_version` | Yes | Hidden/static form value | Consent-copy and setup versioning | 40 | Planned |
| `subscription_status` | Provider-managed | MailerLite | Contact lifecycle state | `[PENDING_PROVIDER_VERIFICATION]` | Provider-managed |
| `created_at` | Provider-managed | MailerLite | Audit and troubleshooting | `[PENDING_PROVIDER_VERIFICATION]` | Provider-managed |
| `updated_at` | Provider-managed | MailerLite | Audit and troubleshooting | `[PENDING_PROVIDER_VERIFICATION]` | Provider-managed |
| `opted_in_at` | Provider-managed | MailerLite | Consent timing evidence | `[PENDING_PROVIDER_VERIFICATION]` | Provider-managed |
| `optin_ip` | Provider-managed | MailerLite | Technical consent metadata if retained and legally approved | `[PENDING_PROVIDER_VERIFICATION]` | Provider-managed and blocked pending review |

### Exclusions

Do not add:

- Exact age.
- School.
- Address.
- Phone.
- English level.
- Song preferences.
- Sensitive data.
- Free-text survey answers.

Provider-native field names beyond `email` and `name` should be verified in the target account before implementation.

## Form setup design

### Preview form

- Internal name: `SPR - Preview - Ebook Lead Form`
- Status: Planned, manual dashboard setup pending.

Requirements:

- Assigned only to `SPR - Preview - Ebook Leads`.
- Clearly marked `TEST` in the internal name and visible form treatment.
- Uses test branding or a visible Preview warning.
- Does not enter Production automation.
- Uses Preview `/gracias` only after that route exists.
- Until `/gracias` exists, uses a provider confirmation or another approved safe placeholder.
- Must not use Production group IDs.
- Must not be promoted publicly.
- Accepts only controlled test addresses during QA.
- Test contacts should be periodically deleted.

### Production form

- Internal proposed name: `SPR - Production - Ebook Lead Form`
- Status: `Not active`

Requirements:

- Assigned to `SPR - Production - Ebook Leads`.
- Uses approved consent copy.
- Redirects to `https://singpronuncerepeat.com/gracias?source=ebook` only after `/gracias` exists and passes QA.
- Uses the approved public privacy-policy URL.
- Triggers Email 1 only after complete Preview and production-readiness QA.
- Remains unpublished or inactive until all production blockers are cleared.

## Consent mapping

### Approved checkbox copy

```text
Acepto recibir por correo la guía gratuita y contenido educativo relacionado con Sing Pronunce Repeat / English with Lyrics. Puedo cancelar la suscripción en cualquier momento.
```

### Supporting copy

```text
Usaremos tu correo para enviarte la guía, prácticas educativas y novedades relacionadas con el proyecto. No vendemos tus datos ni los compartimos con anunciantes.
```

### Consent evidence to preserve when supported

- Form identity.
- Form version.
- Subscription timestamp.
- Consent field/value when supported.
- Source group.
- Opt-in method.
- Provider subscriber status.

### Rules

- Checkbox required.
- Checkbox unchecked by default.
- Consent explicit and specific.
- Privacy-policy link visible beside or below the checkbox.
- Do not bundle this with generic acceptance of terms.
- Do not claim MailerLite stores every desired evidence field until verified in the actual account.

## Opt-in setup

### Phase 0 default

`Single opt-in`

Expected behavior:

1. User submits valid email and consent.
2. MailerLite creates or updates the subscriber.
3. Subscriber enters the correct group.
4. Email 1 automation begins.
5. User is redirected to `/gracias`.

### Double opt-in

Keep disabled initially unless:

- MailerLite requires it for the selected setup.
- Legal review recommends it.
- Fake submissions become a problem.
- Deliverability deteriorates.
- Campaign volume grows materially.
- New jurisdictions require reassessment.

If double opt-in is later enabled, the journey, consent docs, and automation assumptions must be updated together.

## Automation setup design

- Internal name: `SPR - Phase 0 - Ebook Delivery and Nurture`
- Trigger: `Subscriber joins SPR - Production - Ebook Leads`
- Preview equivalent: `SPR - Preview - Ebook Delivery TEST`

Intended structure:

```text
Trigger: subscriber joins group
→ Email 1 immediately
→ Delay
→ Email 2
→ Delay
→ Email 3
→ Delay
→ Email 4
```

This branch documents the automation only. It must not activate the Production automation.

### Email 1 requirements

- Immediate guide-delivery message.
- Link to `/gracias`, not a PDF attachment.
- Clear usage recommendation.
- Support guidance.
- Unsubscribe link.
- No claim that the advanced ebook already exists.

### Email 1 content package

- Canonical content source: `docs/email/PHASE_0_EBOOK_DELIVERY_EMAIL.md`
- Canonical Preview CTA target: `https://<stable-preview-branch-domain>/gracias?source=email`
- Future Production CTA target: `https://singpronuncerepeat.com/gracias?source=email`
- Preview subject must keep `[TEST]`.
- Delivery continues to use a stable page link, not a PDF attachment.
- Four-email timing outline is documented in `docs/email/PHASE_0_EMAIL_SEQUENCE.md`.
- Manual MailerLite dashboard configuration remains pending.

### Emails 2-4

- Remain documented placeholders in this branch.
- No Production schedule or activation yet.

## Domain and sender readiness

### Checklist

- Sender display name approved.
- Sender mailbox created and accessible.
- Domain ownership confirmed.
- SPF configured.
- DKIM configured.
- DMARC reviewed and configured as approved.
- Domain alignment reviewed.
- Reply-to address defined.
- Bounce handling reviewed.
- Sender verification completed.
- Test delivery to Gmail passed.
- Test delivery to Outlook passed.
- Mobile rendering checked.
- Spam-folder placement checked.
- Unsubscribe rendering checked.

### Blocking rules

- Do not modify DNS automatically from this repository.
- Do not claim sender verification or authentication is complete unless the owner confirms it.
- If no branded mailbox or custom domain exists, keep production activation blocked.
- Temporary account-level testing may exist, but a free personal mailbox is not an acceptable final production sender setup.

## Environment isolation

| Environment | Form | Group | Automation | Analytics | Real contacts |
|---|---|---|---|---|---|
| Local | Mock or disabled | None | None | Off | No |
| Preview | Preview TEST form | Preview group | Preview TEST automation | Non-production only or off | Controlled test addresses only |
| Production | Production form | Production group | Production automation | Production only | Yes, after approval |

Rules:

- Separate form IDs or form URLs per environment.
- Separate group IDs per environment.
- Separate automation IDs per environment.
- Separate API tokens if an API integration is introduced later.
- Production identifiers never used in Preview.
- Preview contacts never copied to Production.
- No Production automation triggered by Preview.
- Local defaults to no real submission.
- Test email subjects must include `[TEST]` when supported.
- Test contacts must be visibly identifiable and controlled.

## Environment-variable contract

### Repository placeholders

```text
NEXT_PUBLIC_MAILERLITE_PREVIEW_FORM_URL=
NEXT_PUBLIC_MAILERLITE_PRODUCTION_FORM_URL=
NEXT_PUBLIC_PRIVACY_POLICY_URL=
```

### Variable notes

- `NEXT_PUBLIC_MAILERLITE_PREVIEW_FORM_URL`
  Preview-safe provider form URL for QA only. Must never point to a Production form.
- `NEXT_PUBLIC_MAILERLITE_PRODUCTION_FORM_URL`
  Future Production form URL. Keep empty until all blockers are cleared.
- `NEXT_PUBLIC_PRIVACY_POLICY_URL`
  Future public privacy-policy route required before any production collection.

### Deliberate exclusions in this branch

- No `MAILERLITE_API_KEY`.
- No committed group IDs.
- No committed automation IDs.
- No server-side provider secrets.

Reasoning: the approved initial architecture is provider-hosted or embedded forms, so the smallest useful contract is public form URLs plus the public privacy-policy route. API credentials stay out of scope unless a later branch formally revisits the integration architecture.

## Local-development behavior

- No real MailerLite submission by default.
- Local continues using the current direct-download and Tally flows until the lead form exists.
- Preview-only MailerLite variables must not be copied into Local as active defaults.
- No MailerLite API calls exist in this branch.

## Provider operations to test before production

- Account access and MFA.
- Sender verification.
- Domain authentication and alignment.
- Preview group creation.
- Preview form creation.
- Preview automation creation.
- Preview redirect behavior.
- Duplicate subscriber handling.
- Single opt-in behavior.
- Unsubscribe behavior.
- Suppression behavior.
- Export behavior.
- Correction behavior.
- Deletion behavior.
- Delivery to Gmail and Outlook.
- Spam-folder placement.
- Preview/Production isolation.
- Production identifiers created but inactive.

## Fallback provider record

Brevo remains fallback only and inactive.

- No simultaneous synchronization with MailerLite.
- Revisit Brevo only if MailerLite fails a blocking operational, legal, or deliverability requirement.
- A migration would require a new DPA review, new groups/lists, new forms, new automations, new sender/domain authentication, new Preview isolation, new deletion/export QA, and privacy-policy updates.
