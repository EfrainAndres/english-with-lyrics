type LegalStatusNoticeProps = {
  variant: "draft" | "production-pending";
};

export function LegalStatusNotice({ variant }: LegalStatusNoticeProps) {
  if (variant === "production-pending") {
    return (
      <p
        className="border border-cream/35 bg-cream/10 px-4 py-3 text-sm font-bold leading-6 text-cream"
        role="status"
      >
        Información legal en preparación. Estamos terminando la información
        legal y los canales necesarios para la futura captura de registros.
        Mientras este proceso continúa, la entrega directa de la guía
        permanece disponible y la captura de datos en producción continúa
        desactivada.
      </p>
    );
  }

  return (
    <p
      className="border border-purple/35 bg-purple/10 px-4 py-3 text-sm font-bold leading-6 text-purple"
      role="status"
    >
      Documento en preparación. Esta versión se encuentra en revisión y
      todavía no representa una política legal definitiva para producción.
    </p>
  );
}
