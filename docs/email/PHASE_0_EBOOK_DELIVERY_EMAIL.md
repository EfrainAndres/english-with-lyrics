# Phase 0 Ebook Delivery Email

## Status

- Email: Email 1 — ebook delivery.
- Environment: Preview-ready.
- Production status: Inactive.
- Sender-domain status: Pending.
- Legal-review status: Pending.
- MailerLite implementation: Manual.
- PDF attachment: Not used.
- Primary delivery destination: `/gracias?source=email`.

## Internal MailerLite name

Production:

```text
SPR - Phase 0 - Ebook Delivery Email
```

Preview:

```text
SPR - Preview - Ebook Delivery Email TEST
```

## Canonical subject

Primary subject:

```text
Tu guía para practicar inglés con canciones está lista
```

Preview subject:

```text
[TEST] Tu guía para practicar inglés con canciones está lista
```

Alternative subject options:

```text
Aquí tienes tu guía gratuita de Sing Pronounce Repeat
Tu guía gratuita ya está lista
```

Subject rules:

- No all caps.
- No exaggerated urgency.
- No misleading `Re:` or `Fwd:`.
- No guaranteed-result language.

## Preheader

Production-ready direction:

```text
Descarga la guía y comienza con una práctica corta.
```

Preview:

```text
Prueba interna del flujo de entrega del ebook.
```

## Sender display name

Recommended sender display name:

```text
Sing Pronounce Repeat
```

Production sender mailbox:

```text
[PENDING_OWNER_INPUT]
```

Do not treat a temporary free-domain sender as the final Production mailbox.

## Delivery targets

Preview delivery target:

```text
https://<stable-preview-branch-domain>/gracias?source=email
```

Future Production delivery target:

```text
https://english-with-lyrics.vercel.app/gracias?source=email
```

Rules:

- Do not attach the PDF.
- Do not use signed or expiring URLs.
- Do not include subscriber IDs, provider IDs, or email addresses in the URL.
- Do not hardcode ephemeral Vercel deployment URLs or share tokens in repository docs.

## Preview email content

Preview-only notice:

```text
Este es un mensaje de prueba del flujo Preview. No pertenece a la lista de producción.
```

Recommended Preview email body:

```text
Hola,

Este es un mensaje de prueba del flujo Preview. No pertenece a la lista de producción.

Tu guía gratuita ya está lista.

Dentro encontrarás 3 canciones, 9 prácticas, pronunciación escrita como suena, significados naturales, vocabulario y ejercicios sencillos.

Para comenzar:

1. Elige una sola práctica.
2. Escucha primero el fragmento.
3. Lee la pronunciación escrita como suena.
4. Repite en voz alta.
5. Crea una frase propia.

[ABRIR MI GUÍA]

Si el botón no funciona, abre este enlace:
[DELIVERY_PAGE_URL]

No necesitas completar todo en un día. Empieza con unos minutos y vuelve cuando quieras.

Si el correo llegó a spam, puedes marcarlo como “No es spam” para facilitar futuras entregas.

Sing Pronounce Repeat
English with Lyrics
```

## Production-ready email content

Recommended body:

```text
Hola,

Tu guía gratuita ya está lista.

Dentro encontrarás 3 canciones, 9 prácticas, pronunciación escrita como suena, significados naturales, vocabulario y ejercicios sencillos.

Para comenzar:

1. Elige una sola práctica.
2. Escucha primero el fragmento.
3. Lee la pronunciación escrita como suena.
4. Repite en voz alta.
5. Crea una frase propia.

[ABRIR MI GUÍA]

Si el botón no funciona, abre este enlace:
[DELIVERY_PAGE_URL]

No necesitas completar todo en un día. Empieza con unos minutos y vuelve cuando quieras.

Si el correo llegó a spam, puedes marcarlo como “No es spam” para facilitar futuras entregas.

Sing Pronounce Repeat
English with Lyrics
```

Notes:

- Use `Hola,` as the safe default.
- Optional first-name personalization should remain disabled unless the final MailerLite fallback behavior is verified.
- The email must not claim that an advanced ebook already exists.

## Primary CTA

Text:

```text
Abrir mi guía
```

Preview destination:

```text
https://<stable-preview-branch-domain>/gracias?source=email
```

Future Production destination:

```text
https://english-with-lyrics.vercel.app/gracias?source=email
```

## Secondary fallback

Required plain-text fallback:

```text
Si el botón no funciona, abre este enlace:
[DELIVERY_PAGE_URL]
```

The direct PDF URL must not be the primary email destination.

## Support copy

Use:

```text
Si el correo llegó a spam, puedes marcarlo como “No es spam” para facilitar futuras entregas.
```

This does not guarantee inbox placement.

## Unsubscribe and footer

- MailerLite automatic unsubscribe must remain present.
- Do not replace the provider unsubscribe with a fake custom link.
- Automatic footer content must be reviewed before Production.
- Footer language should be reviewed in Spanish.
- Business/footer address must be approved before any Production send.
- MailerLite branding depends on the account plan and must not be removed in ways that violate provider requirements.

## Preview requirements

- Keep `[TEST]` in the subject.
- Clearly identify the message as a Preview test.
- Link only to Preview `/gracias?source=email`.
- Do not link to Production.
- Do not attach the PDF.
- Keep unsubscribe/footer intact.
- Use controlled test addresses only.
- Trigger only from `SPR - Preview - Ebook Leads`.
- Never trigger a Production automation.

## Production requirements

Documented for later activation only:

- No `[TEST]` in the subject.
- Branded sender mailbox.
- Authenticated sending domain.
- SPF, DKIM, and DMARC reviewed.
- Approved footer/business address.
- Approved legal pages published.
- Production `/gracias?source=email` active.
- Production group trigger active only after approval.
- Production unsubscribe test complete.
- Production deliverability QA complete.
- Controlled rollout approved.
