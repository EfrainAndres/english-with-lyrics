# Phase 0 Ebook Soft-Gated Acquisition

## Scope

This feature branch implements the approved visible acquisition journey without
changing the active external rollout. It changes only repository source and
documentation. It does not modify MailerLite, Vercel configuration, the hosted
form URL, Email 1 provider content, sender, workflow, automation, Analytics,
subscribers, deployments, legal-policy text, robots directives, or rollout
limits.

The gate is a conversion gate, not access control. The static PDF remains at its
existing stable public path and may be reachable when that URL is independently
known. No authentication, token, cookie, storage, signed URL, backend, API,
server action, database, app-side submission, tracking parameter, or PDF access
restriction is added.

## Visible journey

Before this branch:

1. Homepage ebook actions routed to `/ebook-gratis`.
2. `/ebook-gratis` presented the provider handoff and a visible direct-PDF
   alternative.
3. The shared footer exposed another direct-PDF link on the homepage, ebook page,
   and thank-you page.
4. `/gracias` provided immediate PDF download/open actions and optional survey
   and first-group actions.

After this branch:

1. Homepage ebook actions still route to `/ebook-gratis` and use receive-oriented
   wording.
2. A configured `/ebook-gratis` presents exactly one visible acquisition action:
   `Recibir mi guía gratis`, which opens the existing provider-hosted handoff with
   safe external-link attributes.
3. The page states that the guide is sent by email and can be downloaded
   immediately after successful registration.
4. The shared footer routes to `/ebook-gratis` instead of the PDF and keeps the
   privacy, data-treatment, and contact links intact.
5. `/gracias` retains both direct PDF actions. It states that the guide is also
   sent by email and that the visitor does not need to wait for Email 1 to
   download from that page.
6. Survey and first-group destinations remain secondary optional actions only on
   `/gracias`.

## Configuration behavior

| Runtime state | `/ebook-gratis` behavior | Direct PDF fallback |
| --- | --- | --- |
| Valid Preview or Production handoff | One external provider CTA, approved consent disclosure, exact privacy route, immediate-post-registration and email-delivery explanation | Not rendered |
| Missing Preview configuration | Concise unavailable/try-later state; no personal-data request | Not rendered |
| Invalid Preview or Production configuration | Concise unavailable/try-later state; no personal-data request | Not rendered |
| Development | Local-disabled and unavailable/try-later state; no personal-data request | Not rendered |

The application continues to render no native form or personal-data field. The
provider remains the only system involved in email/name entry, consent,
validation, subscription state, and delivery.

## Email 1 review

The approved staged/provider Email 1 body does not require a content change. It
is sent after registration, returns to `/gracias?source=email`, and accurately
states that the email is not needed to revisit the guide from that
post-registration experience. Only the canonical email documentation was
clarified to distinguish the visible acquisition journey from the intentionally
unchanged public static file. No provider content or delivery setting was
changed.

## Validation record

Baseline and branch:

- Verified merged `main` after PR #79: `0c8b75f346a548b1860cdc05f87e9a074e4609de`.
- Feature branch: `feat/phase-0-ebook-soft-gated-download`.
- `HEAD` and `origin/main` matched at implementation start.

Local configured Preview-like build:

- `npm run lint`: PASS with zero warnings or errors.
- `VERCEL_ENV=preview NEXT_PUBLIC_MAILERLITE_PREVIEW_FORM_URL=https://example.com/provider-form npm run build`: PASS.
- `/ebook-gratis`: exactly one `Recibir mi guía gratis` link, `target="_blank"`, `rel="noopener noreferrer"`, approved consent disclosure present, exact `/privacidad` link present, zero PDF links, zero native forms, and zero native personal-data fields.
- `/` and `/ebook-gratis`: zero visible PDF links at desktop and exact 390 px.
- `/gracias`: two immediate PDF actions, email-delivery explanation, optional survey action, and optional first-group action present.
- Desktop 1440 px and mobile 390 px: PASS with document width equal to viewport width and no horizontal overflow on `/`, `/ebook-gratis`, and `/gracias`.
- Keyboard focus: PASS; three Tab presses reached the provider handoff and exposed a computed 2 px solid focus outline.
- Robots: `/ebook-gratis`, `/gracias`, `/privacidad`, and `/tratamiento-de-datos` retain `noindex, nofollow`; homepage remains without a route-specific robots directive.

Fail-closed matrix:

- Missing Preview configuration: PASS at exact 390 px; unavailable/try-later copy present, configuration reason present, zero provider links, zero PDF links, zero forms/fields, privacy route retained, and no overflow.
- Invalid HTTP Preview configuration: PASS at exact 390 px; unavailable/try-later copy present, invalid-configuration reason present, zero provider links, zero PDF links, zero forms/fields, and no overflow.

Route and artifact smoke:

- `/`, `/ebook-gratis`, `/gracias`, `/privacidad`, and `/tratamiento-de-datos`: HTTP 200 and `text/html`.
- `/downloads/guia-gratis-sing-pronounce-repeat.pdf`: HTTP 200, `application/pdf`, 1,315,500 bytes.
- Public PDF SHA-256: `45c909c44482d3062126ac7fcf1e214e2433bd8ad542fe038c45bc8ea971fd09`.
- PDF diff against `main`: empty; artifact unchanged.
- `git diff --check`: PASS.
- Changed-path sensitive-content scan: PASS; no private-key, credential, API-key, password, secret, or token pattern found.
- Application scan: PASS; no native form/input, local/session storage, cookie, fetch/XHR/beacon, server action, API route, or tracking-parameter addition found.

Vercel Preview:

- Draft PR: `https://github.com/EfrainAndres/english-with-lyrics/pull/80`.
- GitHub Vercel check and Vercel Preview Comments check: SUCCESS.
- Branch-scoped deployment `dpl_4qkoRJ47c2ynU1UN4AKNSahTbHkQ`: target
  `preview`, status `Ready`.
- Deployment URL:
  `https://english-with-lyrics-13r85t6c3-efrain-vergara-s-projects.vercel.app`.
- Deployment protection redirected unauthenticated command-line requests to the
  Vercel login page. The already authenticated review browser reached the branch
  deployment directly; no protection barrier was bypassed.
- Real configured `/ebook-gratis` at exact 390 px: one provider-hosted MailerLite
  CTA with safe external-link attributes, approved consent copy, exact privacy
  route, zero PDF links, zero native forms/fields, retained `noindex, nofollow`,
  and no horizontal overflow.
- Branch Preview `/` at 390 px: all four ebook links route to `/ebook-gratis`,
  zero PDF links, no horizontal overflow, and no route-specific robots change.
- Branch Preview `/gracias?source=ebook` at 390 px: two PDF actions, Email 1 copy,
  survey and first-group actions, retained `noindex, nofollow`, and no horizontal
  overflow.
- Branch Preview `/privacidad` and `/tratamiento-de-datos` at 390 px: healthy,
  retained `noindex, nofollow`, and no horizontal overflow.
- Branch Preview direct PDF URL: loaded in the browser with title `Aprende inglés
  con 3 canciones — Sing Pronunce Repeat`.
- Branch Preview at 1440 px: `/ebook-gratis` has one provider CTA, zero PDF links,
  no horizontal overflow, and a visible 2 px solid keyboard-focus outline.
- Provider form submissions, subscriber changes, email sends, workflow actions,
  configuration changes, manual deployments, and canonical Production operations:
  ZERO.
