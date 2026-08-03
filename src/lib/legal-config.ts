import "server-only";

export type LegalPublicationStatus = "pending" | "draft" | "approved";
export type LegalOwnerType = "natural_person";

export type LegalConfiguration = {
  publicationStatus: LegalPublicationStatus;
  ownerType: LegalOwnerType | null;
  ownerName: string | null;
  ownerRole: string | null;
  ownerDomicile: string | null;
  contactAddress: string | null;
  contactPhone: string | null;
  contactPhoneHref: string | null;
  privacyEmail: string | null;
  effectiveDate: string | null;
  lastUpdatedDate: string | null;
  isComplete: boolean;
  missingFields: readonly string[];
  /** @deprecated Compatibility alias for the previous legal-content API. */
  responsiblePartyName: string | null;
  /** @deprecated Identification is not configured or rendered in this phase. */
  responsiblePartyIdentification: null;
  /** @deprecated Compatibility alias for the previous legal-content API. */
  responsiblePartyCity: string | null;
  /** @deprecated Compatibility alias for the previous legal-content API. */
  privacyContactEmail: string | null;
  /** @deprecated Compatibility flag; publication remains status-controlled. */
  professionalReviewCompleted: true;
};

type LegalEnvironment = Readonly<Record<string, string | undefined>>;

const requiredFieldNames = [
  "LEGAL_OWNER_TYPE",
  "LEGAL_OWNER_NAME",
  "LEGAL_OWNER_ROLE",
  "LEGAL_OWNER_DOMICILE",
  "LEGAL_CONTACT_ADDRESS",
  "LEGAL_CONTACT_PHONE",
  "LEGAL_PRIVACY_EMAIL",
  "LEGAL_EFFECTIVE_DATE",
  "LEGAL_LAST_UPDATED_DATE",
] as const;

function normalize(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function parsePublicationStatus(value: string | null): LegalPublicationStatus | null {
  if (value === "pending" || value === "draft" || value === "approved") {
    return value;
  }

  return null;
}

function parseOwnerType(value: string | null): LegalOwnerType | null {
  return value === "natural_person" ? value : null;
}

function parseIsoDate(value: string | null): string | null {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return value;
}

function parseEmail(value: string | null): string | null {
  if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return null;
  }

  return value;
}

export function normalizeLegalTelephone(value: string | null): {
  displayValue: string | null;
  href: string | null;
} {
  const trimmedValue = value?.trim() || null;

  if (!trimmedValue) {
    return { displayValue: null, href: null };
  }

  if (!/^\+?[\d\s().-]+$/.test(trimmedValue)) {
    return { displayValue: trimmedValue, href: null };
  }

  const digits = trimmedValue.replace(/\D/g, "");
  const localNumber =
    digits.length === 12 && digits.startsWith("57")
      ? digits.slice(2)
      : digits.length === 10
        ? digits
        : null;

  if (!localNumber || !/^3\d{9}$/.test(localNumber)) {
    return { displayValue: trimmedValue, href: null };
  }

  return {
    displayValue: `+57 ${localNumber.slice(0, 3)} ${localNumber.slice(3, 6)} ${localNumber.slice(6)}`,
    href: `tel:+57${localNumber}`,
  };
}

export function readLegalConfiguration(
  environment: LegalEnvironment = process.env,
): LegalConfiguration {
  const configuredStatus = normalize(environment.LEGAL_PUBLICATION_STATUS);
  const parsedStatus = parsePublicationStatus(configuredStatus);
  const ownerType = parseOwnerType(normalize(environment.LEGAL_OWNER_TYPE));
  const ownerName = normalize(environment.LEGAL_OWNER_NAME);
  const ownerRole = normalize(environment.LEGAL_OWNER_ROLE);
  const ownerDomicile = normalize(environment.LEGAL_OWNER_DOMICILE);
  const contactAddress = normalize(environment.LEGAL_CONTACT_ADDRESS);
  const contactPhone = normalizeLegalTelephone(
    normalize(environment.LEGAL_CONTACT_PHONE),
  );
  const privacyEmail = parseEmail(normalize(environment.LEGAL_PRIVACY_EMAIL));
  const effectiveDate = parseIsoDate(normalize(environment.LEGAL_EFFECTIVE_DATE));
  const lastUpdatedDate = parseIsoDate(
    normalize(environment.LEGAL_LAST_UPDATED_DATE),
  );

  const parsedValues: Record<(typeof requiredFieldNames)[number], unknown> = {
    LEGAL_OWNER_TYPE: ownerType,
    LEGAL_OWNER_NAME: ownerName,
    LEGAL_OWNER_ROLE: ownerRole,
    LEGAL_OWNER_DOMICILE: ownerDomicile,
    LEGAL_CONTACT_ADDRESS: contactAddress,
    LEGAL_CONTACT_PHONE: contactPhone.displayValue,
    LEGAL_PRIVACY_EMAIL: privacyEmail,
    LEGAL_EFFECTIVE_DATE: effectiveDate,
    LEGAL_LAST_UPDATED_DATE: lastUpdatedDate,
  };

  const missingFields: string[] = requiredFieldNames.filter(
    (fieldName) => !parsedValues[fieldName],
  );

  if (configuredStatus && !parsedStatus) {
    missingFields.unshift("LEGAL_PUBLICATION_STATUS");
  }

  const isComplete = missingFields.length === 0;
  const requestedStatus = parsedStatus ?? "pending";
  const mayRenderPersonalValues = isComplete && requestedStatus !== "pending";

  return {
    publicationStatus: mayRenderPersonalValues ? requestedStatus : "pending",
    ownerType: mayRenderPersonalValues ? ownerType : null,
    ownerName: mayRenderPersonalValues ? ownerName : null,
    ownerRole: mayRenderPersonalValues ? ownerRole : null,
    ownerDomicile: mayRenderPersonalValues ? ownerDomicile : null,
    contactAddress: mayRenderPersonalValues ? contactAddress : null,
    contactPhone: mayRenderPersonalValues ? contactPhone.displayValue : null,
    contactPhoneHref: mayRenderPersonalValues ? contactPhone.href : null,
    privacyEmail: mayRenderPersonalValues ? privacyEmail : null,
    effectiveDate: mayRenderPersonalValues ? effectiveDate : null,
    lastUpdatedDate: mayRenderPersonalValues ? lastUpdatedDate : null,
    isComplete,
    missingFields,
    responsiblePartyName: mayRenderPersonalValues ? ownerName : null,
    responsiblePartyIdentification: null,
    responsiblePartyCity: mayRenderPersonalValues ? ownerDomicile : null,
    privacyContactEmail: mayRenderPersonalValues ? privacyEmail : null,
    professionalReviewCompleted: true,
  };
}

export const legalConfiguration = readLegalConfiguration();

export function isLegalConfigurationComplete(
  configuration: LegalConfiguration = legalConfiguration,
): boolean {
  return configuration.isComplete;
}

export function getLegalRenderState(
  configuration: LegalConfiguration = legalConfiguration,
): LegalPublicationStatus {
  return configuration.publicationStatus;
}
