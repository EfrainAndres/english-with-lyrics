import { getRuntimeEnvironment } from "@/lib/runtime-environment";

export type LeadFormConfig =
  | {
      status: "enabled";
      environment: "preview";
      formUrl: string;
    }
  | {
      status: "disabled";
      environment: "development" | "production";
      reason: string;
    }
  | {
      status: "misconfigured";
      environment: "preview";
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

  if (environment === "development" || environment === "production") {
    return {
      status: "disabled",
      environment,
      reason: disabledReasons[environment],
    };
  }

  const previewFormUrl = process.env.NEXT_PUBLIC_MAILERLITE_PREVIEW_FORM_URL;

  if (!previewFormUrl?.trim()) {
    return {
      status: "misconfigured",
      environment,
      reason: missingPreviewReason,
    };
  }

  if (!isValidPreviewFormUrl(previewFormUrl)) {
    return {
      status: "misconfigured",
      environment,
      reason: invalidPreviewReason,
    };
  }

  return {
    status: "enabled",
    environment,
    formUrl: previewFormUrl,
  };
}
