import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { LegalStatusNotice } from "@/components/legal/legal-status-notice";
import { getLegalRenderState, legalConfiguration } from "@/lib/legal-config";
import { getPrivacyPolicySections } from "@/lib/legal-content";
import { getRuntimeEnvironment } from "@/lib/runtime-environment";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo Sing Pronunce Repeat / English with Lyrics trata los datos del futuro embudo de registro mientras la información legal está en preparación.",
  alternates: {
    canonical: "/privacidad",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacidadPage() {
  const environment = getRuntimeEnvironment();
  const renderState = getLegalRenderState(environment);

  if (renderState === "production-pending") {
    return (
      <LegalPageLayout
        description="Estamos completando la información necesaria antes de publicar una política de privacidad definitiva para producción."
        eyebrow="Privacidad"
        notice={<LegalStatusNotice variant="production-pending" />}
        sections={[]}
        title="Información legal en preparación"
      />
    );
  }

  return (
    <LegalPageLayout
      description="Este documento describe, de forma clara y en español, cómo Sing Pronunce Repeat / English with Lyrics trataría los datos relacionados con el futuro embudo de registro."
      eyebrow="Privacidad"
      notice={renderState === "draft" ? <LegalStatusNotice variant="draft" /> : null}
      sections={getPrivacyPolicySections(legalConfiguration)}
      title="Política de privacidad"
    />
  );
}
