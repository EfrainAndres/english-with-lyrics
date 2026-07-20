# Phase 0 Lead Funnel Architecture

## 1. Architecture Status

| Field | Value |
|---|---|
| Status | Proposed architecture |
| Implementation status | Not started |
| Current production flow | Direct ebook delivery |
| Target flow | Lead capture before primary download |
| Public PDF technical protection | None |
| Authentication | Out of scope |
| Database | Out of scope |
| Payments | Out of scope |
| Email provider | MailerLite recommended |
| Final legal review | Required before collecting production leads |

## 2. Purpose

Define the canonical Phase 0 lead-capture funnel that evolves the current ebook flow from:

```text
/
→ /ebook-gratis
→ public PDF download
```

to:

```text
Traffic source
→ landing
→ short registration form
→ /gracias
→ ebook download
→ delivery email
→ optional survey
→ optional first-group or advanced-ebook interest
→ educational email sequence
```

This document is architecture only. It does not authorize implementation in this branch.

## 3. Current-State Assessment

### Reusable existing assets

- Home landing sections on `/` already communicate the brand, method, and ebook value.
- `/ebook-gratis` already exists as a guide-focused destination with strong content framing.
- The public PDF already exists at `/downloads/guia-gratis-sing-pronounce-repeat.pdf`.
- The survey form already exists at `https://tally.so/r/eqzgbe`.
- The first-group form already exists at `https://tally.so/r/D4a6NE`.
- Vercel page-view analytics already exists via `@vercel/analytics`.
- Existing link constants already centralize route and external-form URLs in `src/lib/links.ts`.
- The current visual system and brand treatment are already aligned with Sing Pronunce Repeat / English with Lyrics.
- Existing delivery, readiness, analytics, form, and QA documentation already covers the PDF and current funnel behavior.

### Why the site should not be rebuilt from zero

The project already has the right Phase 0 assets: a live landing page, a live ebook page, a public PDF, working external research forms, brand-consistent UI, and baseline analytics. Rebuilding from zero would add engineering churn without solving the actual business gap.

### Current-flow limitation

The current direct-delivery flow allows visitors to download the guide and leave without creating a reusable contact relationship. That is a funnel limitation, not a technical defect.

## 4. Target User Journey

### Main success journey

```text
1. User arrives from YouTube, TikTok, Instagram, Google, direct link, or referral.
2. User understands the benefit and previews the method.
3. User enters email and optionally name.
4. User provides required consent.
5. Form submission is validated.
6. Contact is created or updated in the email provider.
7. Contact receives the correct tag or group.
8. User is redirected to /gracias.
9. /gracias provides immediate ebook access.
10. Delivery email is sent.
11. Survey is offered as optional.
12. First-group or advanced-product interest is offered later.
```

### Alternate and edge journeys

| Scenario | Canonical behavior |
|---|---|
| Returning registered user | Submission is treated idempotently; provider updates or confirms the contact, then redirects to `/gracias?source=ebook`. |
| Duplicate email | Treat as success if the provider reports existing contact or update success. |
| Provider unavailable | Do not redirect; show retry state and generic error message. |
| Invalid email | Block submission and show inline validation. |
| Consent not accepted | Block submission and show explicit consent requirement. |
| User closes page before redirect | Contact may still exist in provider; delivery email remains the recovery path. |
| Email delayed or sent to spam | `/gracias` still provides immediate access; page advises waiting a few minutes and checking spam. |
| User reaches `/gracias` directly | Page remains usable, public, and unpromoted; it can still provide the guide and a short explanation. |
| User accesses the public PDF directly | File still works; direct access is acceptable because the funnel is soft-gated, not DRM-protected. |

## 5. Funnel-Page Responsibilities

### Home `/`

- Benefit-led hero.
- Lead form above the fold or in the primary conversion zone.
- Method preview.
- Trust and ebook preview.
- One primary conversion.
- Secondary example anchor.
- No direct PDF CTA in the primary journey.

### `/ebook-gratis`

**Recommended role: Option B — Product-detail page plus embedded form**

Reason:

- The page already exists and already explains the guide well.
- It is a natural destination for users who want more detail before giving an email.
- Reusing the same lead form on `/` and `/ebook-gratis` preserves consistency without rebuilding the site.
- It avoids turning the home page into the only entry point.
- It keeps the current guide-specific content investment useful.

In the target funnel, `/ebook-gratis` should no longer promote the direct PDF as the primary pre-submission action. It should explain the guide and include the same reusable lead form used on `/`.

### `/gracias`

Responsibilities:

- Confirm registration.
- Provide immediate download.
- Provide open-in-browser action.
- Explain that the guide will also arrive by email.
- Offer the optional survey.
- Offer optional first-group or advanced-guide interest lower on the page.
- Provide support/contact guidance.
- Prefer `noindex`.

### Public PDF

- May remain publicly addressable.
- Should not be the primary promoted route.
- Must not contain secrets or user-specific data.
- Must remain downloadable when analytics or email tools fail.

## 6. Provider Decision Framework

Provider features and pricing are time-sensitive. When a claim below depends on plan limits or pricing, it must be treated as temporary and verified against the provider's current official plan before implementation.

### Comparison

| Criterion | Why it matters | MailerLite | Brevo |
|---|---|---|---|
| Free-plan contact allowance | Early validation budget | Requires current official-plan verification | Requires current official-plan verification |
| Monthly email allowance | Four-email sequence and future song sends | Requires current official-plan verification | Requires current official-plan verification |
| Embedded forms | Lead capture | Supported | Supported |
| API availability | Next.js integration | Supported | Supported |
| Automation sequences | Delivery and nurture | Supported | Supported |
| Tags/groups/segments | Ebook, survey, first group, advanced interest | Supported | Supported |
| Redirect support | `/gracias` | Supported at feature level; exact setup requires implementation verification | Supported at feature level; exact setup requires implementation verification |
| Double opt-in | Consent model choice | Supported | Supported |
| Unsubscribe handling | Required email practice | Supported | Supported |
| Sender-domain support | Future professionalism | Supported | Supported |
| Webhooks | Later analytics or synchronization | Supported | Supported |
| Email editor | Non-technical campaign work | Strong fit | Strong fit |
| Data export/deletion | Privacy operations | Supported | Supported |
| Colombian/Latin American usability | Operational practicality | Likely workable; current operational fit requires owner verification | Likely workable; current operational fit requires owner verification |
| Pricing after validation | Future growth | Requires current official-plan verification | Requires current official-plan verification |
| Setup complexity | Phase 0 speed | Lower | Moderate |

### Notes

- Repository evidence already favors a lightweight email-marketing provider over a CRM-heavy tool.
- Official provider pages currently show that both providers support forms, automations, and API-based integrations.
- Current numerical plan limits and pricing must be verified at implementation time because they can change independently of this repository.

## 7. Provider Recommendation

**Decision: MailerLite recommended**

### Why

MailerLite fits the current Phase 0 shape better:

- Small list and low initial cost sensitivity.
- One short form.
- Immediate delivery email plus a four-email follow-up sequence.
- Groups/tags for ebook, survey, and future interest states.
- Built for simple landing/form and nurture flows.
- Lower configuration overhead than a broader CRM-style platform.
- Good match for a brand-led educational list, not a sales-heavy contact operation.

### Fallback provider

**Brevo**

Use Brevo if:

- Transactional and marketing delivery need to converge sooner than expected.
- The team wants deeper multi-channel or event-driven automation earlier.
- Current official plan verification shows a materially better fit on allowance or pricing.

### Required verification before implementation

- Current plan limits.
- Current pricing.
- Current sender-domain requirements.
- Current automation availability on the intended plan.

## 8. Integration Architecture Options

### Option 1 — Provider-hosted or embedded form

```text
Browser
→ provider form
→ provider contact
→ provider automation
→ /gracias
```

Advantages:

- Faster.
- Lower engineering load.
- Provider handles duplicate contacts and unsubscribe state.
- Easier to keep Phase 0 lightweight.

Risks:

- Less UI control.
- Provider script or embed dependency.
- Styling constraints.
- Weaker internal analytics.
- Preview and production form separation must be explicit.

### Option 2 — Next.js server-side submission

```text
Browser
→ Next.js route/server action
→ provider API
→ contact/tag creation
→ success response
→ /gracias
```

Advantages:

- Full UI control.
- Better validation and inline error states.
- Easier internal event instrumentation later.
- API key stays server-side.

Risks:

- More implementation and security responsibility.
- Rate limiting and abuse controls become an app concern.
- Provider API failure handling becomes an app concern.
- More secret and runtime complexity.

### Option 3 — Tally-first temporary lead form

Tally remains useful for survey and first-group research, but it is not sufficient as the canonical lead-funnel architecture because:

- Consent can be collected, but lifecycle ownership becomes fragmented.
- Redirect is possible, but automation and tagging become weaker or indirect.
- Email sequence setup is not the natural center of gravity.
- Provider synchronization becomes another moving part.
- Reliable delivery ownership becomes split across tools.

### Recommended Phase 0 architecture

**Use Option 1 first: provider-hosted or embedded MailerLite form, with provider-managed automation and redirect to `/gracias`.**

Reason:

- It is the simplest path that still supports contact capture, consent, `/gracias`, immediate email, tagging, and unsubscribe.
- It avoids introducing a custom server surface before the simple architecture has failed.
- It keeps the door open to a later Next.js server-side form if branded UI control, analytics, or abuse handling becomes a real constraint.

## 9. Form Data Contract

### Required fields

- `email`
- `consent`

### Optional fields

- `firstName`
- `source`
- `utmSource`
- `utmMedium`
- `utmCampaign`
- `referrer`
- `landingPath`

### Explicitly do not collect on the first conversion form

- Age unless legally required.
- Phone number.
- Address.
- English level.
- Song preferences.
- Sensitive personal information.

Those belong in the optional survey, not the first conversion step.

### Validation rules

- Trim email.
- Normalize email casing where appropriate.
- Validate basic format client-side and provider-side.
- Consent must be explicitly `true`.
- Name remains optional and length-limited.
- Hidden attribution values must be length-limited and sanitized.
- Do not accept an arbitrary metadata object from the browser.

## 10. Consent Model

### Recommended consent copy

`Acepto recibir por correo la guía gratuita y contenido educativo relacionado con Sing Pronunce Repeat / English with Lyrics. Puedo cancelar la suscripción en cualquier momento.`

Supporting text:

`Usaremos tu correo para enviarte la guía, prácticas educativas y novedades relacionadas con el proyecto. No vendemos tus datos ni los compartimos con anunciantes.`

### Requirements

- Checkbox not preselected.
- Link to privacy policy.
- Clear delivery and marketing purpose.
- Unsubscribe available.
- Consent timestamp retained by the provider when supported.
- Consent source or form identity retained.
- Do not bundle unrelated permissions.
- Do not claim formal legal certification.

### Single vs double opt-in

**Recommendation: Single opt-in for initial Phase 0**

Why:

- The guide is an immediate-value lead magnet.
- Users will expect instant access after form submission.
- A second confirmation email adds friction before the first product experience.
- The PDF is already public, so strict gating value is low.

Trade-offs:

- Single opt-in increases the chance of fake or mistyped emails.
- Double opt-in provides stronger consent evidence and can improve list quality.

Phase 0 mitigation:

- Keep explicit consent copy.
- Keep `/gracias` as the immediate access path.
- Monitor bounce, complaint, and unsubscribe patterns once a provider is live.
- Revisit double opt-in if spam, invalid-email rate, or deliverability becomes material.

## 11. Contact Groups And Segmentation

### Minimal taxonomy

- `lead_ebook_gratis`
- `lead_survey_completed`
- `lead_first_group_interest`
- `lead_advanced_ebook_interest`
- `source_youtube`
- `source_instagram`
- `source_tiktok`
- `source_google`
- `source_direct`
- `language_es`

### Assignment rules

| Tag or group | Assignment model |
|---|---|
| `lead_ebook_gratis` | Added automatically on the lead form submission |
| `language_es` | Added automatically on the lead form submission |
| `source_*` | Added automatically when a trusted source value is present and mapped to an allowed set |
| `lead_survey_completed` | Added after survey completion through provider integration or manual import until integrated |
| `lead_first_group_interest` | Added after first-group Tally action through provider integration or manual import until integrated |
| `lead_advanced_ebook_interest` | Documentation-only for now; added later if advanced-guide validation is introduced |

Do not create speculative segmentation beyond this minimum set.

Do not store respondent data in Git.

## 12. Exact Post-Registration Behavior

### Canonical success path

1. Provider or integration confirms contact creation or update.
2. User is redirected to `/gracias?source=ebook`.
3. `/gracias` displays:
   - `Tu guía está lista`
   - direct download button
   - open-in-browser action
   - email-delivery message
4. Email 1 is triggered.
5. Survey appears below the primary download.
6. First-group or advanced-guide interest remains tertiary.

### Query parameter policy

- `source=ebook` is acceptable as a non-sensitive routing or analytics hint.
- Query parameters are optional, not identity-bearing.
- Do not expose email addresses, provider IDs, or internal record identifiers in the URL.

### Client storage policy

- Do not put sensitive data in local storage.
- No email persistence in the browser beyond the immediate form session.

## 13. `/gracias` Access Model

**Recommendation: Public but unpromoted**

Why:

- This is a soft-gated lead magnet.
- The PDF is already public.
- Strict access protection adds complexity without enough business value.

Requirements:

- No email in query string.
- No user-specific content.
- No authentication.
- Add `noindex`.
- Direct visits should still provide the guide or a short safe explanation.

## 14. Email-Delivery Model

### Email 1 — Immediate delivery

- Purpose: deliver the guide and confirm the relationship.
- Subject direction: the guide is ready now.
- Must include:
  - stable page link
  - one-sentence usage recommendation
  - support/contact path
  - unsubscribe

### Email 2 — Method reminder

- Delay: short delay after delivery.
- Include:
  - one pronunciation tip
  - optional survey invitation

### Email 3 — Progress question

- Ask which phrase was difficult.
- Reinforce one example of the method.
- Introduce advanced-guide validation softly.

### Email 4 — Product research

- Ask what content the learner wants next.
- Link to advanced-product survey or waitlist.
- Clearly separate the one-time ebook from future subscription-like communication.

Do not promise bonuses or content that does not exist.

## 15. Email Link Strategy

**Recommendation: Use `/gracias` as the primary delivery link, not a PDF attachment.**

Why:

- Stable page rather than a static file attachment.
- Easier to update the PDF without changing email copy.
- Better support surface if users have trouble.
- Better analytics potential than a raw attachment.
- Lower attachment-related deliverability risk.
- Keeps survey and future-interest CTAs in the delivery surface.

Direct PDF links may still appear as a secondary fallback, but the primary email CTA should go to `/gracias`.

## 16. Analytics Architecture

Exact custom-event tracking is not currently available on the existing Vercel Hobby setup. The architecture below defines the intended future event contract, not a claim that all events exist today.

### Event contract

| Event | Trigger | Allowed properties | Prohibited properties |
|---|---|---|---|
| `landing_view` | User views the lead-capture landing state on `/` | `page`, `campaign`, `sourceCategory`, `environment` | `email`, `name`, provider IDs, free text |
| `hero_cta_click` | User clicks the primary CTA in the hero | `page`, `ctaLocation`, `campaign`, `environment` | `email`, `name`, provider IDs, free text |
| `lead_form_view` | Lead form enters viewport or becomes visible | `page`, `ctaLocation`, `environment` | `email`, `name`, provider IDs, free text |
| `lead_form_start` | User begins typing or focuses the first field | `page`, `ctaLocation`, `environment` | `email`, `name`, provider IDs, free text |
| `lead_form_submit_success` | Provider or server confirms success | `page`, `ctaLocation`, `campaign`, `sourceCategory`, `environment` | `email`, `name`, provider IDs, free text |
| `lead_form_submit_error` | Submit fails after attempted send | `page`, `ctaLocation`, `errorCategory`, `environment` | `email`, `name`, provider raw response, free text |
| `thank_you_view` | User loads `/gracias` | `page`, `sourceCategory`, `environment` | `email`, `name`, provider IDs, free text |
| `pdf_download_click` | User clicks primary download button | `page`, `ctaLocation`, `environment` | `email`, `name`, provider IDs, free text |
| `pdf_open_click` | User clicks open-in-browser action | `page`, `ctaLocation`, `environment` | `email`, `name`, provider IDs, free text |
| `survey_click` | User clicks the survey CTA | `page`, `ctaLocation`, `environment` | `email`, `name`, provider IDs, free text |
| `first_group_click` | User clicks first-group CTA | `page`, `ctaLocation`, `environment` | `email`, `name`, provider IDs, free text |
| `advanced_ebook_waitlist_submit` | User submits a later advanced-guide interest form | `page`, `campaign`, `environment` | `email`, `name`, provider IDs, answers, free text |

### Current limitations

- Vercel page-view analytics exists today.
- Exact custom events are not available on the current Hobby setup.
- PDF download clicks are not currently exact-event measurable in production with the present stack.
- Preview testing must not contaminate production reporting.

### Future tracking recommendation

**Preferred next evaluation path: either Vercel paid custom events or a privacy-conscious analytics provider.**

Reason:

- A first-party event endpoint is more flexible but adds engineering and privacy surface too early.
- Phase 0 should prefer the smallest additional instrumentation that can measure the funnel honestly.

## 17. Preview And Production Isolation

### Production

- Real email provider list or group.
- Real automation.
- Vercel production analytics.
- Real Tally forms where still applicable.
- Approved domain.

### Preview

**Recommendation: Use a separate test provider group or list.**

Why:

- It supports true end-to-end QA.
- It prevents production contacts from being created during Preview testing.
- It keeps preview secrets distinct from production.

Requirements:

- Production contacts must never be created from Preview.
- Preview analytics must not contaminate production analytics.
- Test emails must be clearly identifiable, for example with a preview label in the subject or sender naming.
- No production API key may be exposed to the client.

### Local

- Mock success mode or disabled submission by default.
- No real contact creation by default.
- Clear developer banner or log output when mocked.
- No production analytics.

## 18. Environment Variables

Expected categories for the implementation branch:

```text
NEXT_PUBLIC_APP_ENV
NEXT_PUBLIC_SITE_URL
EMAIL_PROVIDER
EMAIL_PROVIDER_API_KEY
EMAIL_PROVIDER_GROUP_ID
EMAIL_PROVIDER_FORM_ID
EMAIL_PROVIDER_DELIVERY_AUTOMATION_ID
NEXT_PUBLIC_PRIVACY_POLICY_URL
```

Rules:

- Secrets must not use `NEXT_PUBLIC_`.
- Production, Preview, and Development values must be separate.
- Do not commit real secrets.
- `.env.example` should only be updated in the implementation branch.
- Keep the variable set minimal for the chosen architecture.

## 19. API And Security Boundaries

These boundaries apply only if the project later chooses a server-side integration.

- API key server-side only.
- Input validation on every request.
- Rate limiting or provider-side abuse controls.
- Explicit bot-protection decision.
- Generic error messages.
- No provider error bodies exposed to the client.
- Request timeouts.
- Idempotent duplicate-email behavior.
- Logging without emails.
- Secret rotation plan.
- Provider-outage fallback.
- No open redirect.
- Allowed redirect path fixed to `/gracias`.

Do not build a larger security platform than the funnel needs.

## 20. Failure And Fallback Behavior

| Scenario | UX behavior |
|---|---|
| Invalid email | `Revisa el correo e inténtalo nuevamente.` |
| Consent missing | `Necesitamos tu autorización para enviarte la guía por correo.` |
| Duplicate contact | Treat as success if the provider confirms the contact already exists or was updated. |
| Provider timeout | Preserve entered non-sensitive values when practical, show retry action, do not redirect, optionally provide support link. |
| Email delayed | On `/gracias`: `La guía también llegará por correo. Puede tardar unos minutos y conviene revisar la carpeta de spam.` |
| Email never arrives | `/gracias` still offers direct download plus support/contact guidance; resend only if later implemented safely. |
| Analytics blocked | Lead capture and download still work. |

Direct PDF fallback should not be shown automatically on submission failure unless the product owner explicitly approves that trade-off.

## 21. Rollback Strategy

Rollback restores the current direct-download flow without deleting the current PDF or editorial assets.

### Rollback actions

1. Restore `/ebook-gratis` direct-download CTA.
2. Keep the PDF public.
3. Remove or disable lead-form submission.
4. Preserve survey and first-group links.
5. Disable email automation.
6. Retain captured contacts and consent records according to policy.
7. Avoid deleting editorial or PDF source files.

### Rollback triggers

- Provider outage.
- High submission-error rate.
- Delivery-email failure.
- Consent issue.
- Broken redirect.
- Spam or abuse.
- Production privacy concern.

## 22. Funnel Implementation Phases

### Recommended branch sequence

| Branch | Goal | Main files likely involved | Dependencies | Exit criteria |
|---|---|---|---|---|
| `docs/phase-0-privacy-and-consent` | Define privacy policy, consent copy, and contact/support surfaces | privacy and legal docs, consent docs | Architecture approval | Copy approved, legal-review inputs identified, no implementation yet |
| `feat/phase-0-email-provider-setup` | Configure selected provider, groups, sender identity, and preview isolation | env docs, provider config docs, minimal app config as needed | Privacy and consent direction approved | Provider workspace ready, production and preview isolated, no public funnel switch yet |
| `feat/phase-0-lead-capture-form` | Add reusable lead form to `/` and `/ebook-gratis` | lead-form UI files, links/config, possible embed wrapper | Provider selected and form contract approved | Form submits successfully in preview-safe mode and keeps direct delivery active until full QA |
| `feat/phase-0-thank-you-page` | Create `/gracias` and immediate post-submit delivery surface | new thank-you route, metadata, CTA copy | Form success flow defined | `/gracias` works with download and survey actions, marked `noindex` as appropriate |
| `feat/phase-0-ebook-email-delivery` | Trigger Email 1 and connect the delivery automation | provider automation docs/config, funnel docs | Provider ready and `/gracias` ready | Delivery email sent reliably to test list and preview-safe route |
| `fix/phase-0-landing-cro-restructure` | Refine conversion hierarchy and copy around the new form | landing page copy/layout files | Form and `/gracias` available | Hero and supporting sections make email capture the primary action without breaking clarity |
| `feat/phase-0-funnel-event-analytics` | Add exact funnel events using approved tooling | analytics integration files, metrics docs | Funnel surfaces stable | Event contract implemented within chosen analytics limits and preview isolation verified |
| `review/phase-0-lead-funnel-qa` | Verify consent, redirect, delivery, analytics, and rollback | QA docs, validation docs, smoke-test notes | All previous branches | Production rollout checklist passed and rollback documented |

## 23. Definition Of Done

The future funnel is complete only when:

- Benefit-led hero is active.
- Lead form works on mobile and desktop.
- Email is required.
- Name is optional.
- Consent is explicit and unselected by default.
- Production contact is created or updated.
- Correct group or tag is assigned.
- `/gracias` loads after confirmed submission.
- Immediate download works.
- Email 1 is delivered.
- Unsubscribe works.
- Survey and first-group actions remain optional.
- Production and Preview data are isolated.
- Funnel events are measured according to available tooling.
- Privacy and contact pages exist.
- Error and rollback flows are tested.
- No personal data appears in logs, analytics, Git, or URLs.
- Existing PDF remains accessible.
- Existing landing components are reused where practical.

## 24. Non-Goals

- Authentication.
- User accounts.
- Database.
- Signed PDF URLs.
- Expiring download tokens.
- Payments.
- Subscription billing.
- Advanced ebook production.
- Full learning platform.
- CRM implementation beyond provider tags or groups.
- Complex lead scoring.
- SMS or WhatsApp automation.
- AI personalization.
- Multiple PDF versions.
- Rebuilding the website from zero.

## 25. Open Decisions

| Decision | Options | Recommendation | Owner | Required evidence | Blocking status | Target branch |
|---|---|---|---|---|---|---|
| Email provider | MailerLite, Brevo | MailerLite | Project owner | Current official-plan verification, sender-domain readiness | Not blocking architecture; blocks implementation | `feat/phase-0-email-provider-setup` |
| Consent model | Single opt-in, double opt-in | Single opt-in for Phase 0 | Project owner with legal input | Privacy copy review, provider capability check, final legal review | Blocks production lead collection | `docs/phase-0-privacy-and-consent` |
| Post-registration behavior | Redirect to `/gracias`, redirect to direct PDF, redirect to `/ebook-gratis` | Redirect to `/gracias?source=ebook` | Project owner | UX approval, thank-you-page copy approval | Not blocking architecture; blocks implementation | `feat/phase-0-thank-you-page` |
| Privacy policy surface | New privacy page, external hosted doc | Add a project privacy page before production capture | Project owner with legal input | Final policy text and contact method | Blocks production lead collection | `docs/phase-0-privacy-and-consent` |
| Sender identity | Shared mailbox, branded sender domain | Use a branded sender identity tied to the approved domain | Project owner | Domain control, DNS access, provider verification | Blocks production email delivery | `feat/phase-0-email-provider-setup` |
| Analytics upgrade path | Vercel Pro custom events, privacy-conscious analytics provider, first-party endpoint | Start with the smallest non-invasive exact-event path after the funnel works | Project owner | Cost tolerance, implementation effort, privacy review | Does not block initial funnel launch if page-view-only analytics is accepted | `feat/phase-0-funnel-event-analytics` |

## 26. Final Recommendations Summary

- **Provider:** MailerLite recommended, Brevo as fallback.
- **Consent model:** Explicit single opt-in with unchecked checkbox and privacy link.
- **Post-registration behavior:** Redirect to `/gracias?source=ebook`, show immediate download, trigger Email 1.
- **`/gracias` access model:** Public but unpromoted.
- **Integration architecture:** Provider-hosted or embedded form first; Next.js server-side only if later needed.
- **Primary email link:** `/gracias`, not a PDF attachment.
- **Preview isolation:** Separate preview list or group with separate secrets.
- **Current public flow:** Remains active until the replacement funnel passes QA.
