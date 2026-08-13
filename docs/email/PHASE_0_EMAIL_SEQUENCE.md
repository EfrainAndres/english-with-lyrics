# Phase 0 Email Sequence

## Status

- Sequence status: Email 1 active only for the controlled rollout; Emails 2–4 remain planned and inactive.
- Content status: approved Email 1 verified in Preview and active only inside the one Production workflow used by the controlled rollout.
- Emails 2–4: Outline only.
- Production Email 1 and workflow: ACTIVE / CONTROLLED ROLLOUT; zero contacts were in progress and three non-personal completed history records were retained at activation. The historical provider-recorded send total remains three, with two inbox-verified deliveries.
- Production activation and delivery: ACTIVE / IN PROGRESS for Email 1 only, up to ten real subscribers over 72 hours.
- Current rollout retry: canonical no-submit smoke PASS; Production-only handoff ACTIVE; opening count ZERO OF TEN; Analytics ENABLED; direct PDF ACTIVE / INDEPENDENT; post-72-hour go/no-go PENDING. No test contact or non-public email was created.
- Historical controlled-test state: PASS FOR THE CONTROLLED TECHNICAL PATH. The original redirect failure, corrected retests, delayed unmatched send, completed cleanup, and earlier rolled-back activation remain historical evidence. Current state is the separate ACTIVE / IN PROGRESS rollout retry above. The owner accepts the known accessibility, direct-reachability, and deliverability risks only for Email 1, up to ten subscribers, and 72 hours under active monitoring and immediate stop thresholds; no limitation is fixed, compliant, unrestricted, or permanently accepted. The approved initial indexing disposition remains `noindex, nofollow` and does not authorize future indexing changes.

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
- Historical rollback-era guidance: after the earlier incomplete activation, the
  Production sequence was not to be reactivated until its then-pending
  configuration, no-submit smoke, and indexing checks passed. That instruction
  is superseded by the current authorized **ACTIVE / IN PROGRESS** rollout.
  During the active 10-subscriber / 72-hour boundary, do not disable the
  rollout absent the operational cap or a stop condition. At ten subscribers or
  for unexpected email, consent/privacy issue, delivery failure, complaint, or
  workflow error, pause the workflow first, remove the Production handoff
  configuration second, redeploy verified merged `main` fail-closed third, and
  then verify routes, legal policies, robots directives, and direct PDF.
  Require a separate post-72-hour go/no-go before any expansion.
