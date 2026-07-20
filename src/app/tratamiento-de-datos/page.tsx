import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { LegalStatusNotice } from "@/components/legal/legal-status-notice";
import { getLegalRenderState, legalConfiguration } from "@/lib/legal-config";
import { getDataProcessingPolicySections } from "@/lib/legal-content";
import { getRuntimeEnvironment } from "@/lib/runtime-environment";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos",
  description:
    "Procedimiento operativo previsto para el tratamiento de datos de Sing Pronunce Repeat / English with Lyrics mientras la información legal está en preparación.",
  alternates: {
    canonical: "/tratamiento-de-datos",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TratamientoDeDatosPage() {
  const environment = getRuntimeEnvironment();
  const renderState = getLegalRenderState(environment);

  if (renderState === "production-pending") {
    return (
      <LegalPageLayout
        description="Estamos completando la información necesaria antes de publicar una política de tratamiento de datos definitiva para producción."
        eyebrow="Tratamiento de datos"
        notice={<LegalStatusNotice variant="production-pending" />}
        sections={[]}
        title="Información legal en preparación"
      />
    );
  }

  return (
    <LegalPageLayout
      description="Este documento describe, de forma más procedimental que la política de privacidad, cómo operaría el tratamiento de datos del futuro embudo de Sing Pronunce Repeat / English with Lyrics."
      eyebrow="Tratamiento de datos"
      notice={renderState === "draft" ? <LegalStatusNotice variant="draft" /> : null}
      sections={getDataProcessingPolicySections(legalConfiguration)}
      title="Política de tratamiento de datos"
    />
  );
}
