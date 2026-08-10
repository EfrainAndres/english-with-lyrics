# Phase 0 Email Sequence

## Status

- Sequence status: Email 1 staged; Emails 2–4 remain planned only.
- Content status: approved Email 1 verified in Preview and staged in exactly one inactive Production workflow.
- Emails 2–4: Outline only.
- Production Email 1 and workflow: STAGED / INACTIVE after one authorized automated controlled delivery; zero contacts are in progress and one non-personal completed history record is retained.
- Production activation and delivery: INACTIVE.
- Controlled Production funnel state: FAIL / NO-GO. The original test delivered one Email 1 but failed redirect. The corrected redirect now passes, including with a fresh contact that had no prior history, but the active workflow created zero new entries and zero new Email 1 deliveries after the intended group assignment. Provider-level trigger diagnosis and new owner authorization are required before any further retest or public linking.

## Sequence overview

The Phase 0 sequence remains group-triggered in MailerLite:

```text
Subscriber joins group
→ Email 1 immediately
→ Delay
→ Email 2
→ Delay
→ Email 3
→ Delay
→ Email 4
```

Delivery uses a stable page link, not a PDF attachment.

## Email 1 — Immediate delivery

Purpose:

- Deliver the guide.
- Explain one simple first step.
- Link to `/gracias?source=email`.

Suggested timing:

```text
Immediately after successful subscription
```

Content direction:

- Short welcome.
- Clear CTA to open the guide.
- One practical instruction for getting started.
- Unsubscribe/footer kept intact.

## Email 2 — Method reminder

Purpose:

- Reinforce `Escríbelo como suena`.
- Give one pronunciation tip.
- Invite the learner to the survey softly.

Suggested timing:

```text
2 days after Email 1
```

Content direction:

- One short method reminder.
- One common pronunciation obstacle for Spanish-speaking learners.
- Soft survey invitation only.

## Email 3 — Progress question

Purpose:

- Ask which phrase was harder.
- Encourage another short practice.
- Introduce the advanced ebook as research only.

Suggested timing:

```text
3 days after Email 2
```

Content direction:

- Light progress check-in.
- One example of a short repeated practice.
- Non-transactional mention of future advanced material.

## Email 4 — Product research

Purpose:

- Ask what content the learner wants.
- Distinguish the one-time ebook from a future subscription.
- Invite the learner to a survey or waitlist when a verified destination exists.

Suggested timing:

```text
4 days after Email 3
```

Content direction:

- Ask what songs, practices, or resources would help most.
- Clarify that the free guide and future subscription are different things.
- Keep the ask research-oriented, not sales-heavy.

## Sequence rules

- Do not attach the PDF.
- Do not use hidden personal-data tracking in links.
- Keep consent scope aligned with the approved Phase 0 model.
- Keep Preview and Production automations separate.
- The published legal routes, completed professional/provider reviews, verified sender, and available `/gracias` route are readiness evidence; they do not activate the sequence.
- Do not activate the Production sequence until a separately authorized corrective controlled retest passes the form redirect, provider accessibility/direct-reachability acceptance is recorded, the analytics dashboard is verified, the indexing decision is made, and the 10-subscriber/72-hour rollout gate is approved.
