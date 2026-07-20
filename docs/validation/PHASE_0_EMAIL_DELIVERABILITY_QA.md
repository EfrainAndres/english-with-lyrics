# Phase 0 Email Deliverability QA

## Current status

| Area | Status |
|---|---|
| Brand | Sing Pronunce Repeat |
| Canonical domain | `https://singpronuncerepeat.com` |
| Authenticated sending domain | `singpronuncerepeat.com` |
| Content sender | `Sing Pronunce Repeat <hola@singpronuncerepeat.com>` |
| Privacy contact | `privacidad@singpronuncerepeat.com` |
| MailerLite authentication | VERIFIED |
| Gmail placement | PRIMARY |
| Hotmail placement | INBOX — OTHER TAB |
| Organization-managed Outlook placement | JUNK |
| Consumer deliverability decision | PASS FOR CURRENT CONTROLLED TESTS |
| Corporate Outlook decision | FAIL FOR CURRENT TENANT TEST |
| Controlled Preview deliverability | PASS |
| Broad Production deliverability | NO-GO |
| Production Email 1 | INACTIVE |
| Production automation | INACTIVE |
| Production email delivery | INACTIVE |
| Production lead capture | INACTIVE |

## Current controlled test matrix

| Provider | Recipient type       | Technical delivery | Placement     | Current decision        |
| -------- | -------------------- | -----------------: | ------------- | ----------------------- |
| Gmail    | Consumer             |               PASS | Primary       | PASS                    |
| Hotmail  | Consumer             |               PASS | Inbox — Other | PASS                    |
| Outlook  | Organization-managed |               PASS | Junk          | FAIL for current tenant |

## Authentication evidence preserved

The previously documented authentication checks remain passed:

- SPF: PASS
- DKIM for `singpronuncerepeat.com`: PASS
- DKIM for MailerLite: PASS
- DMARC: PASS
- Composite authentication: PASS

Earlier Microsoft messages were assigned spam filtering and Junk placement despite successful authentication.

## Interpretation

- Consumer email delivery is functioning for the current controlled tests.
- Gmail achieved Primary placement.
- Consumer Hotmail achieved inbox placement in the `Other` tab.
- Hotmail did not achieve Focused placement.
- Hotmail Junk placement was not observed in the current test.
- The current Hotmail result is a significant improvement over the earlier Hotmail Junk result.
- The organization-managed Outlook account still filtered the message to Junk.
- Organization-specific policies may influence corporate delivery, but the evidence does not prove that this is the only cause.
- A single organization-managed account is not sufficient to generalize behavior across all corporate Microsoft tenants.
- No bounce was observed.
- Authentication and the technical workflow remain passed.
- No new DNS or sender-address change is recommended at this stage.
- Production Email 1, Production automation, Production lead capture, and Production email delivery remain inactive.

## Decision

Controlled Preview technical-delivery decision: PASS

Consumer inbox-placement decision: PASS FOR CURRENT CONTROLLED TESTS

Organization-managed Outlook decision: FAIL FOR CURRENT TENANT TEST

Broad Production email decision: NO-GO

## Evidence note

Deliverability QA was completed manually using controlled consumer and organization-managed recipients. No recipient addresses, complete headers, message contents, screenshots, provider IDs, DNS tokens, passwords, or private account information are stored in the repository.
