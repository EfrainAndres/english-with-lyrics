import type { RuntimeEnvironment } from "@/lib/runtime-environment";

export type LegalConfiguration = {
  responsiblePartyName: string | null;
  responsiblePartyIdentification: string | null;
  responsiblePartyCity: string | null;
  privacyContactEmail: string | null;
  effectiveDate: string | null;
  professionalReviewCompleted: boolean;
};

function readOwnerValue(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

// Server-only values: these render on the server and are intentionally not
// exposed as NEXT_PUBLIC_* so nothing leaks into the client bundle before
// the owner and legal review approve publication.
export const legalConfiguration: LegalConfiguration = {
  responsiblePartyName: readOwnerValue(process.env.LEGAL_RESPONSIBLE_PARTY_NAME),
  responsiblePartyIdentification: readOwnerValue(
    process.env.LEGAL_RESPONSIBLE_PARTY_IDENTIFICATION,
  ),
  responsiblePartyCity: readOwnerValue(process.env.LEGAL_RESPONSIBLE_PARTY_CITY),
  privacyContactEmail: readOwnerValue(process.env.LEGAL_PRIVACY_CONTACT_EMAIL),
  effectiveDate: readOwnerValue(process.env.LEGAL_EFFECTIVE_DATE),
  professionalReviewCompleted: process.env.LEGAL_PROFESSIONAL_REVIEW_COMPLETED === "true",
};

export const isLegalConfigurationComplete = (
  configuration: LegalConfiguration = legalConfiguration,
): boolean => {
  return Boolean(
    configuration.responsiblePartyName &&
      configuration.responsiblePartyIdentification &&
      configuration.responsiblePartyCity &&
      configuration.privacyContactEmail &&
      configuration.effectiveDate &&
      configuration.professionalReviewCompleted,
  );
};

export type LegalRenderState = "draft" | "production-pending" | "approved";

export function getLegalRenderState(
  environment: RuntimeEnvironment,
  configuration: LegalConfiguration = legalConfiguration,
): LegalRenderState {
  const complete = isLegalConfigurationComplete(configuration);

  if (complete) {
    return "approved";
  }

  return environment === "production" ? "production-pending" : "draft";
}
