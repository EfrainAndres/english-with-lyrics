import { getRuntimeEnvironment } from "@/lib/runtime-environment";

export type LeadFormConfig =
  | {
      status: "enabled";
      environment: "preview" | "production";
      formUrl: string;
    }
  | {
      status: "disabled";
      environment: "development" | "production";
      reason: string;
    }
  | {
      status: "misconfigured";
      environment: "preview" | "production";
      reason: string;
    };

const disabledReasons: Record<"development" | "production", string> = {
  development: "El registro real está desactivado durante el desarrollo local.",
  production:
    "El registro de leads sigue desactivado en Production en esta fase.",
};

const missingPreviewReason =
  "El formulario de pruebas no está configurado en este deployment.";
const invalidPreviewReason =
  "La configuración del formulario de pruebas no es válida.";
const invalidProductionReason =
  "La configuración del formulario de Production no es válida.";

function hasPublicDnsHostname(hostname: string) {
  const normalizedHostname = hostname.toLowerCase();

  if (
    normalizedHostname === "localhost" ||
    normalizedHostname.endsWith(".localhost") ||
    normalizedHostname.endsWith(".local") ||
    normalizedHostname.includes(":") ||
    /^\d{1,3}(?:\.\d{1,3}){3}$/.test(normalizedHostname)
  ) {
    return false;
  }

  const labels = normalizedHostname.split(".");
  const topLevelDomain = labels.at(-1);

  return (
    labels.length >= 2 &&
    labels.every((label) =>
      /^(?!-)[a-z0-9-]{1,63}(?<!-)$/.test(label),
    ) &&
    Boolean(topLevelDomain && /^[a-z]{2,63}$/.test(topLevelDomain))
  );
}

export function isValidProviderFormUrl(
  value: string | undefined,
): value is string {
  if (!value?.trim() || value !== value.trim()) {
    return false;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "https:") {
      return false;
    }

    if (
      url.username ||
      url.password ||
      url.port ||
      url.search ||
      url.hash ||
      url.pathname === "/" ||
      !hasPublicDnsHostname(url.hostname)
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

function isValidPreviewFormUrl(value: string | undefined): value is string {
  if (!value?.trim()) {
    return false;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "https:") {
      return false;
    }

    if (url.username || url.password) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export function getLeadFormConfig(): LeadFormConfig {
  const environment = getRuntimeEnvironment();

  if (environment === "development") {
    return {
      status: "disabled",
      environment,
      reason: disabledReasons[environment],
    };
  }

  const formUrl =
    environment === "preview"
      ? process.env.NEXT_PUBLIC_MAILERLITE_PREVIEW_FORM_URL
      : process.env.NEXT_PUBLIC_MAILERLITE_PRODUCTION_FORM_URL;

  if (!formUrl?.trim()) {
    if (environment === "production") {
      return {
        status: "disabled",
        environment,
        reason: disabledReasons[environment],
      };
    }

    return {
      status: "misconfigured",
      environment,
      reason: missingPreviewReason,
    };
  }

  const isValidFormUrl =
    environment === "preview"
      ? isValidPreviewFormUrl(formUrl)
      : isValidProviderFormUrl(formUrl);

  if (!isValidFormUrl) {
    return {
      status: "misconfigured",
      environment,
      reason:
        environment === "preview"
          ? invalidPreviewReason
          : invalidProductionReason,
    };
  }

  return {
    status: "enabled",
    environment,
    formUrl,
  };
}
