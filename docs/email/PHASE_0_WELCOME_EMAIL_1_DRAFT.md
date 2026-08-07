# Phase 0 Welcome Email 1 Draft

## Status and boundary

- Content status: DRAFT.
- Activation status: INACTIVE.
- Scope: documentation-only preparation for a future Preview-only send test.
- This draft does not authorize a form, group, automation, delivery, sender, subscriber, provider configuration, or Production activation.
- Direct PDF delivery remains ACTIVE and independent of promotional consent or this email.

This document is a future content reference. It does not change the historical
Preview setup or controlled-QA records elsewhere in the repository.

## Purpose

Welcome a subscriber who has already given provider-hosted affirmative consent,
offer a calm first practice step, and direct them to the existing guide
experience. The guide is already available directly: this email is not required
to receive it.

The future provider-hosted form remains the system of record for consent. This
email draft does not create, store, transmit, or claim to record consent
evidence.

## Subject-line options and preheader

Choose one subject when a separately approved Preview-only send test is
configured:

- `Bienvenido a Sing Pronunce Repeat: empieza con una práctica`
- `Una forma simple de empezar con tu guía`
- `Tu siguiente práctica con canciones`

Preheader:

> Empieza con una práctica corta y vuelve a la guía cuando quieras.

Subject rules:

- Keep the language calm, specific, and free of urgency.
- Do not promise fluency, guaranteed results, certification, or a fixed outcome.
- Do not use misleading reply or forwarding prefixes.
- For a future Preview test, add the project-approved test marker without
  changing the body’s meaning.

## Email body

### HTML-ready copy

```text
Hola,

Gracias por sumarte a Sing Pronunce Repeat.

La guía gratuita ya está disponible directamente en el sitio. Este correo no es
necesario para recibirla: puedes volver a ella cuando quieras.

Si vas a empezar hoy, elige una sola práctica:

1. Escucha primero el fragmento.
2. Lee la pronunciación escrita como suena.
3. Repite en voz alta unas cuantas veces.
4. Crea una frase propia con la idea que entendiste.

[ABRIR LA GUÍA]

No necesitas hacerlo todo de una vez. Una práctica breve y constante puede ser
un buen punto de partida.

Sing Pronunce Repeat
English with Lyrics
```

The button label is `Abrir la guía`. Do not add a claim that the email unlocks,
delivers, or is required for the guide.

### Plain-text fallback

```text
Hola,

Gracias por sumarte a Sing Pronunce Repeat.

La guía gratuita ya está disponible directamente en el sitio. Este correo no es
necesario para recibirla: puedes volver a ella cuando quieras.

Si vas a empezar hoy, elige una sola práctica:

1. Escucha primero el fragmento.
2. Lee la pronunciación escrita como suena.
3. Repite en voz alta unas cuantas veces.
4. Crea una frase propia con la idea que entendiste.

Abrir la guía: [DESTINO_DE_LA_GUIA]

No necesitas hacerlo todo de una vez. Una práctica breve y constante puede ser
un buen punto de partida.

Sing Pronunce Repeat
English with Lyrics
```

`[DESTINO_DE_LA_GUIA]` is a configuration-time placeholder only. Do not put a
provider, Preview, or Production URL in this document.

## CTA destination requirements

- Configure the button and plain-text fallback to the same environment-scoped
  thank-you route, `/gracias?source=email`.
- For a future Preview-only test, use only the approved Preview route; never
  point a Preview email to Production.
- The direct PDF remains independently available through `/ebook-gratis` and
  must not be conditional on consent, clicking the CTA, or receiving this
  email.
- Do not attach the PDF, use a signed or expiring link, or include personal
  data in the authored destination.
- Do not hard-code an environment URL, provider identifier, or tracking value
  in this draft.

## Accessibility and provider footer

When a send is separately approved and configured in MailerLite:

- Use a real text subject and preheader; do not convey essential meaning only
  through an image.
- Keep a clear text CTA with a meaningful label, adequate contrast, visible
  focus, keyboard access, and a readable plain-text fallback.
- Structure the body with short paragraphs and a numbered list that retains its
  meaning without styling.
- Keep the provider’s functional unsubscribe mechanism and required footer
  treatment. Do not replace it with decorative text or a non-functional custom
  link.
- Include the approved privacy-policy destination in the footer treatment when
  the provider configuration supports it, using `/privacidad`.
- Review the rendered provider footer, unsubscribe treatment, and mobile layout
  in the future Preview-only send test before any wider activation.

## Future Preview-only send-test acceptance criteria

This checklist is inactive until separately authorized. A future test passes
only when all of the following are evidenced without using Production resources:

- A controlled Preview-only recipient with an existing provider consent record
  is used; no public website form is submitted for this test.
- The Preview group, form, automation, sender, and delivery path are isolated
  from Production and any unrelated workflow.
- The received message uses one approved subject option and the stated
  preheader, contains the complete approved draft body, and does not claim the
  email is necessary to access the guide.
- The button and plain-text fallback open the approved Preview thank-you route.
- Direct PDF access remains available before and after the test without a
  consent or email requirement.
- The rendered message is understandable with keyboard navigation and retains
  its core meaning in plain text and on a narrow mobile viewport.
- The provider footer includes a functional unsubscribe treatment and is
  reviewed for clarity; it must not claim legal compliance or certification.
- No campaign, Production group, Production form, Production automation, or
  Production delivery is involved.
- The result, including any limitation or failed criterion, is documented
  without personal data, recipient details, provider identifiers, secrets, or
  non-public URLs.

## Gate status retained

| Gate | Status |
| --- | --- |
| Production consent linking | PENDING |
| Production indexing decision | PENDING |
| Production group/form | INACTIVE |
| Production lead capture | INACTIVE |
| Production Email 1 | INACTIVE |
| Production email delivery | INACTIVE |
| Production automation | INACTIVE |
| Controlled rollout | PENDING |
| Direct PDF delivery | ACTIVE |

Provider configuration and every Preview or Production send require separate
owner approval.
