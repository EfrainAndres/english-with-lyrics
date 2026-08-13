import { getLeadFormConfig } from "@/lib/lead-form-config";
import { privacyPath } from "@/lib/links";

const approvedConsentCopy =
  "Acepto recibir por correo la guía gratuita y contenido educativo relacionado con Sing Pronunce Repeat / English with Lyrics. Puedo cancelar la suscripción en cualquier momento.";
const previewProviderCopy =
  "Este acceso controlado abre el formulario verificado de MailerLite para Preview. MailerLite mantiene el correo, el nombre opcional, el consentimiento, la validación y la automatización de prueba.";
const productionProviderCopy =
  "Este acceso abre el formulario verificado alojado por MailerLite. MailerLite mantiene el correo, el nombre opcional, el consentimiento, la validación y el flujo de bienvenida.";

export function LeadCaptureForm() {
  const config = getLeadFormConfig();

  if (
    config.environment === "production" &&
    config.status !== "enabled"
  ) {
    return null;
  }

  const isHandoffEnabled = config.status === "enabled";
  const isPreview = config.environment === "preview";

  return (
    <section
      aria-labelledby="lead-capture-title"
      className="bg-panel px-5 py-14 sm:px-8 lg:py-20"
      id="recibir-guia"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid min-w-0 gap-8 overflow-hidden border border-white/10 bg-white/5 p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          <div className="min-w-0">
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

            {isPreview ? (
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

          <div className="min-w-0 border border-white/10 bg-ink/70 p-5">
            {isHandoffEnabled ? (
              <>
                <p className="text-sm font-bold uppercase text-purple">
                  {isPreview
                    ? "Formulario de pruebas"
                    : "Formulario para recibir la guía"}
                </p>
                <p className="mt-3 leading-7 text-soft">
                  {isPreview ? previewProviderCopy : productionProviderCopy}
                </p>
                <a
                  aria-describedby="provider-hosted-consent-details"
                  className="mt-6 inline-flex min-h-12 max-w-full items-center justify-center rounded-md bg-pink px-5 py-3 text-center text-sm font-black text-ink transition hover:bg-cream hover:text-ink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
                  href={config.formUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Recibir mi guía gratis
                </a>
                <div
                  className="mt-4 space-y-3 break-words text-sm leading-7 text-soft"
                  id="provider-hosted-consent-details"
                >
                  <p>
                    MailerLite mostrará una casilla obligatoria y desmarcada por
                    defecto con este texto aprobado:
                  </p>
                  <blockquote className="border-l-2 border-purple pl-4 text-paper">
                    {approvedConsentCopy}
                  </blockquote>
                  <p>
                    Usaremos tu correo para enviarte la guía, prácticas educativas
                    y novedades relacionadas con el proyecto. No vendemos tus datos
                    ni los compartimos con anunciantes. {" "}
                    <a
                      className="font-bold text-cream underline decoration-cream/50 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
                      href={privacyPath}
                    >
                      Consulta nuestra Política de privacidad.
                    </a>
                  </p>
                  <p>
                    Este sitio no recopila ni registra el consentimiento. El
                    formulario alojado por MailerLite conserva la validación, la
                    versión y fuente del consentimiento, su fecha y hora, el estado
                    de la suscripción y el estado de supresión.
                  </p>
                  <p>
                    La descarga directa del PDF permanece disponible por separado
                    y nunca depende de aceptar comunicaciones promocionales.
                  </p>
                </div>
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
            {!isHandoffEnabled ? (
              <p className="mt-4 break-words text-sm leading-7 text-soft">
                El consentimiento explícito se gestionará únicamente dentro del
                formulario alojado por MailerLite; este sitio no lo recopila ni lo
                registra. {" "}
                <a
                  className="font-bold text-cream underline decoration-cream/50 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
                  href={privacyPath}
                >
                  Consulta nuestra Política de privacidad.
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
