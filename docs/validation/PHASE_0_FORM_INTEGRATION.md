# Phase 0 Form Integration

## Selected Tool

Use Tally for Phase 0 validation forms. It is lightweight, fast to publish, and avoids building custom storage before demand is proven.

Do not add Supabase, auth, payments, email automation, or a custom database for this phase.

## Form URLs

- Ebook / guide form: `https://tally.so/r/q4z8l9`
- Survey form: `https://tally.so/r/eqzgbe`
- First group form: `https://tally.so/r/D4a6NE`
- Waitlist form: currently reuses the ebook form, `https://tally.so/r/q4z8l9`

## Environment Variables

Local developers can copy `.env.example` to `.env.local` and use:

```bash
NEXT_PUBLIC_EBOOK_FORM_URL=https://tally.so/r/q4z8l9
NEXT_PUBLIC_SURVEY_FORM_URL=https://tally.so/r/eqzgbe
NEXT_PUBLIC_WAITLIST_FORM_URL=https://tally.so/r/q4z8l9
NEXT_PUBLIC_FIRST_GROUP_FORM_URL=https://tally.so/r/D4a6NE
```

Do not commit `.env.local`.

If these values are missing, the app falls back to local anchors so the landing page still works during development.

## Recommended Fields

### Ebook / Guide Form

- Name.
- Email.
- Country.
- English level.
- Preferred guide path: Románticas, Rock / pop clásicos, or Principiantes.
- Optional song or artist request.
- Consent to receive updates about the guide and Phase 0 validation.

### Survey Form

- English level.
- Biggest pain point: listening, pronunciation, vocabulary, confidence, speaking, or natural phrases.
- Interest in learning English with songs.
- Preferred song categories.
- Preferred format: PDF, web, email, WhatsApp, short videos, or app later.
- Interest in the first group.
- Willingness-to-pay range in COP.
- Optional follow-up email and consent.

### First Group Form

- Name.
- Email.
- Country.
- English level.
- Main learning goal.
- Preferred song category.
- Price range comfort in COP.
- Preferred schedule or format.
- Consent to receive details when the first group is ready.

## Local Testing

1. Run the app without `.env.local`.
2. Confirm CTA links fall back to same-page anchors:
   - Ebook: `#ebook`
   - Survey: `#survey-placeholder`
   - Waitlist: `#waitlist`
   - First group: `#first-group`
3. Add `.env.local` with the Tally URLs.
4. Restart the dev server.
5. Confirm external form links open in a new tab.
6. Confirm no button implies that data is stored locally in the app.

## Privacy Notes

Collect only what is needed to validate Phase 0 demand and follow up with learners who consent.

Do not collect:

- Passwords.
- Payment details.
- Government ID numbers.
- Home addresses.
- Sensitive personal information unrelated to English learning.

Store form responses inside the selected Tally account and export only when needed for analysis.

## Next Step

After validation links are live and responses begin arriving, evaluate whether to add simple email delivery and follow-up automation with MailerLite or Brevo. Do not add email marketing integration until the ebook flow and form fields are confirmed.
