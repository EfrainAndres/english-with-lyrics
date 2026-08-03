import { getLeadFormConfig } from "@/lib/lead-form-config";

export function LeadCaptureForm() {
  const config = getLeadFormConfig();

  if (
    config.status === "disabled" &&
    config.environment === "production"
  ) {
    return null;
  }

  const isPreviewEnabled = config.status === "enabled";

  return (
    <section
      aria-labelledby="lead-capture-title"
      className="bg-panel px-5 py-14 sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 border border-white/10 bg-white/5 p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          <div>
            <p className="text-sm font-bold uppercase text-pink">
              Guía gratuita para hispanohablantes
            </p>
            <h2
              id="lead-capture-title"
              className="mt-3 font-heading text-3xl font-black sm:text-4xl"
            >
              Recibe la guía para practicar inglés con canciones
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-soft">
              Aprende con pronunciación escrita como suena, traducción natural,
              vocabulario y ejercicios sencillos.
            </p>
            <p className="mt-4 text-sm font-bold text-cream">
              PDF de 32 páginas · 3 canciones · 9 prácticas
            </p>

            {config.environment === "preview" ? (
              <p
                className="mt-5 border border-purple/35 bg-purple/10 px-4 py-3 text-sm font-bold text-purple"
                role="status"
              >
                Ambiente de pruebas: los registros se enviarán únicamente a la
                lista Preview de MailerLite.
              </p>
            ) : null}

            {config.environment === "development" ? (
              <p
                className="mt-5 border border-cream/35 bg-cream/10 px-4 py-3 text-sm font-bold text-cream"
                role="status"
              >
                Formulario desactivado en desarrollo local.
              </p>
            ) : null}
          </div>

          <div className="border border-white/10 bg-ink/70 p-5">
            {isPreviewEnabled ? (
              <>
                <p className="text-sm font-bold uppercase text-purple">
                  Formulario de pruebas
                </p>
                <p className="mt-3 leading-7 text-soft">
                  Este acceso controlado abre el formulario verificado de
                  MailerLite para Preview. MailerLite mantiene el correo, el
                  nombre opcional, el consentimiento, la validación y la
                  automatización de prueba.
                </p>
                <a
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-pink px-5 py-3 text-sm font-black text-ink transition hover:bg-cream hover:text-ink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
                  href={config.formUrl}
                >
                  Recibir mi guía gratis
                </a>
                <p className="mt-4 text-sm leading-7 text-soft">
                  La descarga actual del PDF permanece disponible en esta página
                  solo como fallback secundario para QA mientras Production
                  sigue en entrega directa.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-bold uppercase text-cream">
                  Estado del formulario
                </p>
                <p className="mt-3 leading-7 text-soft">{config.reason}</p>
                <p className="mt-4 text-sm leading-7 text-soft">
                  El flujo con MailerLite se mantiene aislado hasta que exista
                  un deployment Preview válido y, más adelante, rutas públicas
                  de privacidad y el flujo `/gracias`.
                </p>
              </>
            )}
            <p className="mt-4 text-sm leading-7 text-soft">
              El consentimiento explícito se gestiona dentro del formulario de
              MailerLite; este enlace de la aplicación no registra
              consentimiento. {" "}
              <a
                className="font-bold text-cream underline decoration-cream/50 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
                href="/privacidad"
              >
                Consulta nuestra Política de privacidad.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
