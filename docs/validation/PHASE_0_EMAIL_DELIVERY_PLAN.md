# Phase 0 Email Delivery Plan

## Objective

Define how learners receive the free ebook and follow-up messages after submitting Phase 0 Tally forms.

The goal is to support validation with a simple, honest delivery flow:

- Confirm that a learner joined the guide/waitlist flow.
- Send the ebook when the download page and PDF are ready.
- Invite learners to answer the survey.
- Invite high-intent learners to signal interest in the first group.
- Ask for feedback after they receive the guide.

Do not integrate an email provider yet. The ebook download page can exist as a waiting page, but do not add a PDF until the guide is ready.

## Recommended Ebook Delivery Approach

Do not send the PDF as an email attachment by default.

Recommended Phase 0 delivery:

- Send a button/link to a web download page.
- Future download route: `/ebook-gratis`
- Future PDF path: `public/downloads/guia-gratis-sing-pronounce-repeat.pdf`
- Until the ebook exists, confirmation emails should say the guide is in progress and users will be notified when ready.

Benefits:

- The ebook can be updated without resending attachments.
- Download and CTA clicks can be tracked more clearly.
- The email is less likely to be flagged because of attachments.
- The experience feels more professional.
- The download page can include survey and first-group CTAs.

## Recommended Tools

### Tally Email Notification / Manual Email

Best for the first validation stage when signup volume is low.

Use this when:

- The ebook is not ready yet.
- The team wants to review responses manually.
- A small number of learners can be contacted directly.

Tradeoff:

- Low setup cost, but manual follow-up becomes slow as signups grow.

### MailerLite

Useful when the ebook is ready and a simple email sequence is needed.

Use this when:

- The list needs tags or groups.
- The download email should be automated.
- A visual email builder is helpful.

Tradeoff:

- Requires sender setup, unsubscribe handling, and provider configuration.

### Brevo

Useful when transactional-style delivery and marketing lists may both matter.

Use this when:

- The project needs flexible contact management.
- Email volume grows.
- SMS or more advanced CRM-style options may matter later.

Tradeoff:

- More configuration decisions than a simple manual flow.

### ConvertKit

Useful for creator-style newsletters and audience nurturing.

Use this when:

- The project leans toward content, sequences, and creator campaigns.
- The list needs simple subscriber tagging.

Tradeoff:

- May be more than Phase 0 needs before the ebook is ready.

### Initial Recommendation

- If signups are low: use Tally plus manual or semi-manual email delivery.
- When the ebook is ready and signups increase: move to MailerLite or Brevo.
- Do not choose a final provider until the ebook, sender email/domain, and unsubscribe/privacy approach are clear.

## Recommended Phase 0 Email Flow

### Email 1 - Confirmation / Welcome

Trigger: user submits the ebook form.

Goal: confirm registration and set expectations.

Important: if the ebook is not ready yet, do not promise immediate download.

Subject examples:

- Tu guía gratis está en camino
- Ya estás en la lista de Sing Pronounce Repeat
- Gracias por unirte a English with Lyrics

### Email 2 - Ebook Delivery

Trigger: ebook page and PDF are ready.

Goal: send users to `/ebook-gratis`.

Subject examples:

- Aquí tienes tu guía gratis de inglés con canciones
- Tu guía de práctica ya está lista
- Empieza con estas 3 canciones

### Email 3 - Survey Reminder

Trigger: 2-3 days after ebook delivery.

Goal: ask the user to answer the survey.

Subject examples:

- Ayúdanos a elegir las próximas canciones
- ¿Qué canciones quieres practicar?
- Tu opinión nos ayuda a construir mejor

### Email 4 - First Group Interest

Trigger: 5-7 days after signup or ebook delivery.

Goal: invite high-intent users to the first group form.

Subject examples:

- ¿Quieres ser parte del primer grupo?
- Estamos preparando el primer grupo de práctica
- 5 canciones, micro-lecciones y práctica guiada

### Email 5 - Feedback Follow-up

Trigger: after the user receives the ebook.

Goal: ask whether the guide was useful.

Subject examples:

- ¿Te ayudó la guía?
- Queremos mejorar la próxima versión
- Cuéntanos qué mejorarías

## Email Copy Drafts

### Email 1 - Confirmation / Welcome

Subject: Tu guía gratis está en camino

Preview text: Ya estás en la lista para recibir la guía de práctica con canciones.

Body:

Hola,

Gracias por unirte a Sing Pronounce Repeat / English with Lyrics.

Estamos preparando una guía gratis para practicar inglés con canciones, pronunciación fácil y traducción natural usando el método Escríbelo como suena.

La guía todavía está en progreso. Cuando esté lista, te enviaremos un enlace para descargarla desde una página segura.

Mientras tanto, puedes ayudarnos respondiendo una encuesta corta para elegir las próximas canciones y entender mejor qué necesitas practicar.

CTA: Responder encuesta

Notes:

- Use this before the ebook exists.
- Do not promise immediate download.
- Link CTA to the survey form: `https://tally.so/r/eqzgbe`

### Email 2 - Ebook Delivery

Subject: Aquí tienes tu guía gratis de inglés con canciones

Preview text: Empieza con frases cortas, pronunciación fácil y explicación natural.

Body:

Hola,

Tu guía gratis ya está lista.

La preparamos para que puedas practicar inglés con canciones de una forma clara: frases cortas, pronunciación escrita como suena y explicaciones simples en español.

Haz clic en el botón para abrir la página de descarga.

Después de verla, también puedes responder la encuesta o decirnos si te interesa recibir información del primer grupo de práctica.

CTA: Abrir mi guía gratis

Notes:

- Future CTA should point to `/ebook-gratis`.
- The email should send a page link, not a PDF attachment.
- Keep the legal-safe note on the download page.

### Email 3 - Survey Reminder

Subject: Ayúdanos a elegir las próximas canciones

Preview text: Tu respuesta ayuda a definir las primeras prácticas de Sing Pronounce Repeat.

Body:

Hola,

Queremos crear prácticas que realmente ayuden a estudiantes de inglés.

¿Nos cuentas qué canciones te gustaría practicar y qué se te hace más difícil al escuchar inglés?

La encuesta es corta y nos ayuda a decidir los próximos estilos, niveles y ejemplos.

CTA: Responder la encuesta

Notes:

- Send 2-3 days after ebook delivery.
- Keep it optional and friendly.
- Link CTA to the survey form: `https://tally.so/r/eqzgbe`

### Email 4 - First Group Interest

Subject: ¿Quieres ser parte del primer grupo?

Preview text: Estamos validando un grupo pequeño con canciones, micro-lecciones y práctica guiada.

Body:

Hola,

Estamos explorando un primer grupo de práctica para aprender inglés con canciones paso a paso.

La idea inicial es trabajar con canciones seleccionadas, micro-lecciones, pronunciación con Escríbelo como suena, traducción natural y ejercicios cortos.

Todavía estamos validando formato, precio en COP y condiciones. Si te interesa recibir información cuando abramos cupos, puedes dejar tus datos aquí.

CTA: Quiero información del primer grupo

Notes:

- This is an interest signal, not a payment request.
- Link CTA to the first group form: `https://tally.so/r/D4a6NE`
- Do not imply that access is already open.

### Email 5 - Feedback Follow-up

Subject: ¿Te ayudó la guía?

Preview text: Tu opinión nos ayuda a mejorar las próximas prácticas con canciones.

Body:

Hola,

Queremos saber si la guía te ayudó a practicar inglés con canciones de una forma más clara.

Puedes responder este email con una frase breve:

- Qué parte te sirvió más.
- Qué fue confuso.
- Qué canción te gustaría practicar después.

Con tus respuestas vamos a mejorar la próxima versión y decidir si abrimos el primer grupo.

CTA: Enviar mi opinión

Notes:

- If the provider supports reply-to, encourage direct replies.
- If not, use a short feedback form later.
- Do not ask for sensitive personal data.

## Download Page Future Plan

Future branch: `feat/phase-0-ebook-download-page`

The future page should include:

- Route: `/ebook-gratis`
- Title: `Tu guía gratis está lista`
- Short explanation of what the guide includes.
- Button: `Descargar PDF`
- Button: `Responder encuesta`
- Button: `Quiero saber del primer grupo`
- Legal-safe note:

```text
Esta guía usa fragmentos educativos cortos y explicaciones propias. No reemplaza letras completas ni plataformas oficiales de música.
```

The page can exist as a waiting page before the PDF is ready. Do not add a download button until the ebook PDF is ready or close to ready.

## Segmentation Plan

Keep segmentation simple during Phase 0.

Suggested segments:

- Ebook path: Románticas / Rock-pop clásicos / Principiantes.
- Main pain point: listening / pronunciation / vocabulary / confidence.
- First group interest: yes / maybe / no.
- Survey completed / not completed.

Use these segments to prioritize:

- Which ebook path to produce first.
- Which songs to shortlist.
- Who should receive first-group information first.
- Which learners may need beginner-friendly explanations.

## Manual Workflow For Now

Low-cost process:

1. Tally collects ebook, survey, and first-group responses.
2. Responses are reviewed weekly.
3. Responses are exported if needed.
4. Emails are sent manually or through a provider import.
5. A simple spreadsheet tracks follow-up status.

Recommended spreadsheet fields:

- Email.
- Name.
- Ebook path.
- Main difficulty.
- First group interest.
- Survey status.
- Email sent status.
- Feedback status.

Keep the spreadsheet limited to validation data. Do not add sensitive personal information.

## Automation Workflow Later

Later, after the ebook and provider decision are ready:

1. Tally submission sends the contact to a MailerLite or Brevo list.
2. Contact receives tags based on selected guide path.
3. Automatic welcome email confirms registration.
4. Automatic ebook delivery email sends the `/ebook-gratis` link.
5. Survey reminder is sent 2-3 days later.
6. First-group invitation is sent to high-intent users.
7. Feedback follow-up is sent after ebook delivery.

Do not automate before consent fields, unsubscribe handling, sender identity, and privacy language are clear.

## Privacy And Consent

Rules:

- Only email people who consented.
- Do not collect sensitive personal data.
- Do not share data with third parties except the selected form/email tools needed for delivery.
- Allow unsubscribe in future provider emails.
- Keep messages limited to the guide, new songs, survey, first group, and learning updates.

Before provider setup, confirm:

- Which sender email/domain will be used.
- Whether domain authentication is needed.
- How unsubscribe links will work.
- Where contact exports will be stored.

## Metrics To Track

Track:

- Ebook form submissions.
- Email delivery rate.
- Open rate.
- Click rate to ebook page.
- PDF download clicks.
- Click rate to survey.
- Click rate to first group.
- Replies or feedback.
- Unsubscribes when a provider is active.

## GO / NO GO Signals

### GO

- People submit forms.
- People open and click emails.
- People answer the survey.
- People ask for first-group information.
- People reply with song suggestions.

### Iterate

- People submit but do not open or click.
- People want the free ebook but not the first group.
- People do not understand the offer.
- People request app, WhatsApp, or videos instead.

## Next Implementation Steps

Recommended next branches:

- `feat/phase-0-ebook-download-page`
- `feat/phase-0-email-provider-setup`

Email provider setup should happen only after:

- The ebook PDF or delivery page exists.
- A provider is selected.
- Sender email/domain is decided.
- Privacy and unsubscribe approach is defined.
