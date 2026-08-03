import type { Metadata } from "next";
import { getLegalRenderState, legalConfiguration } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales de Sing Pronunce Repeat.",
  alternates: {
    canonical: "/privacidad",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const privacyEmail = "privacidad@singpronuncerepeat.com";

function LegalPageShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-[#0b0911] px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
          Sing Pronunce Repeat · Privacidad
        </p>
        {children}
        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-zinc-300">
          Contacto de privacidad:{" "}
          <a
            className="font-semibold text-yellow-300 underline decoration-yellow-300/50 underline-offset-4"
            href={`mailto:${privacyEmail}`}
          >
            {privacyEmail}
          </a>
        </footer>
      </article>
    </main>
  );
}

function PendingPrivacyNotice() {
  return (
    <LegalPageShell>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Información legal en preparación
      </h1>
      <p className="mt-6 leading-7 text-zinc-300">
        Estamos completando la información de la persona responsable antes de
        publicar el borrador de la política de privacidad. En este estado no se
        muestran datos personales de contacto ni se presenta el documento como
        una política definitiva.
      </p>
      <p className="mt-4 leading-7 text-zinc-300">
        La entrega directa del ebook continúa disponible. La captura de leads,
        el Email 1 y la automatización de correo de Producción permanecen
        inactivos.
      </p>
    </LegalPageShell>
  );
}

export default function PrivacidadPage() {
  const renderState = getLegalRenderState();

  if (renderState === "pending") {
    return <PendingPrivacyNotice />;
  }

  const isApproved = renderState === "approved";

  const {
    ownerType,
    ownerName,
    ownerRole,
    ownerDomicile,
    contactAddress,
    contactPhone,
    contactPhoneHref,
    privacyEmail: configuredPrivacyEmail,
    effectiveDate,
    lastUpdatedDate,
  } = legalConfiguration;

  return (
    <LegalPageShell>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Política de privacidad
      </h1>
      {renderState === "draft" ? (
        <aside
          aria-label="Estado de revisión"
          className="mt-6 rounded-2xl border border-yellow-300/30 bg-yellow-300/10 p-4 text-sm leading-6 text-yellow-100"
        >
          Borrador para revisión. La información se encuentra pendiente de
          aprobación final de la responsable y de revisión jurídica profesional.
        </aside>
      ) : null}
      <p className="mt-6 leading-7 text-zinc-300">
        {isApproved ? "Esta política explica" : "Este borrador explica"} cómo se
        prevé tratar los datos personales
        relacionados con Sing Pronunce Repeat, también identificado públicamente
        como English with Lyrics, y con el método Escríbelo como suena. No
        constituye una certificación de cumplimiento ni activa la captura de
        datos o el envío de correos en Producción.
      </p>

      <div className="mt-10 space-y-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:leading-7 [&_p]:mt-3 [&_p]:leading-7 [&_p]:text-zinc-300 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-zinc-300">
        <section aria-labelledby="privacy-responsible">
          <h2 id="privacy-responsible">1. Persona responsable y contacto</h2>
          <dl className="mt-4 grid gap-3 rounded-2xl bg-black/20 p-5 sm:grid-cols-[12rem_1fr]">
            <dt className="font-semibold text-zinc-200">Tipo de responsable</dt>
            <dd className="text-zinc-300">
              {ownerType === "natural_person" ? "Persona natural" : null}
            </dd>
            <dt className="font-semibold text-zinc-200">Responsable</dt>
            <dd className="text-zinc-300">{ownerName}</dd>
            <dt className="font-semibold text-zinc-200">Relación</dt>
            <dd className="text-zinc-300">{ownerRole}</dd>
            <dt className="font-semibold text-zinc-200">Domicilio</dt>
            <dd className="text-zinc-300">{ownerDomicile}</dd>
            <dt className="font-semibold text-zinc-200">Correspondencia</dt>
            <dd className="text-zinc-300">{contactAddress}</dd>
            <dt className="font-semibold text-zinc-200">Teléfono</dt>
            <dd className="text-zinc-300">
              {contactPhoneHref ? (
                <a
                  className="text-yellow-300 underline underline-offset-4"
                  href={contactPhoneHref}
                >
                  {contactPhone}
                </a>
              ) : (
                contactPhone
              )}
            </dd>
            <dt className="font-semibold text-zinc-200">Correo de privacidad</dt>
            <dd>
              <a
                className="text-yellow-300 underline underline-offset-4"
                href={`mailto:${configuredPrivacyEmail}`}
              >
                {configuredPrivacyEmail}
              </a>
            </dd>
          </dl>
        </section>

        <section aria-labelledby="privacy-data">
          <h2 id="privacy-data">2. Datos que podrían recopilarse</h2>
          <ul>
            <li>Dirección de correo electrónico.</li>
            <li>Nombre, cuando la persona lo suministre voluntariamente.</li>
            <li>Evidencia de consentimiento y registro.</li>
            <li>Estado de suscripción y pertenencia a grupos.</li>
            <li>Eventos de apertura, clic y baja, cuando estén habilitados.</li>
            <li>Registros técnicos necesarios para entrega y seguridad.</li>
            <li>Información enviada voluntariamente mediante formularios de Tally.</li>
          </ul>
        </section>

        <section aria-labelledby="privacy-purposes">
          <h2 id="privacy-purposes">3. Finalidades</h2>
          <p>
            La finalidad inmediata es entregar el recurso educativo solicitado.
            Cuando exista una autorización separada, también podrán enviarse
            contenidos educativos, ejercicios, novedades, encuestas e
            invitaciones relacionadas con Sing Pronunce Repeat.
          </p>
          <p>
            La captura de leads, el Email 1 y la automatización de correo de
            Producción no están activos en esta fase.
          </p>
        </section>

        <section aria-labelledby="privacy-rights">
          <h2 id="privacy-rights">4. Derechos de las personas titulares</h2>
          <ul>
            <li>Conocer, actualizar y corregir sus datos personales.</li>
            <li>Conocer el uso dado a sus datos personales.</li>
            <li>Acceder gratuitamente a los datos tratados.</li>
            <li>Solicitar evidencia de la autorización cuando corresponda.</li>
            <li>Solicitar la revocación, baja o supresión cuando resulte aplicable.</li>
            <li>
              Presentar una queja ante la Superintendencia de Industria y
              Comercio después de agotar el procedimiento de consulta o reclamo
              ante la responsable.
            </li>
          </ul>
        </section>

        <section aria-labelledby="privacy-requests">
          <h2 id="privacy-requests">5. Cómo presentar una solicitud</h2>
          <p>
            Las solicitudes pueden enviarse a{" "}
            <a
              className="text-yellow-300 underline underline-offset-4"
              href={`mailto:${configuredPrivacyEmail}`}
            >
              {configuredPrivacyEmail}
            </a>
            . Deben indicar de forma clara el tipo de solicitud y la información
            suficiente para localizar el registro. La validación de identidad
            será proporcional; no se exigirá por defecto una copia del documento
            de identidad. {isApproved ? (
              <>
                El procedimiento operativo y sus plazos formaron parte de la
                revisión jurídica profesional completada. La prueba operativa de
                los derechos permanece pendiente antes de activar la captura de
                leads en Producción.
              </>
            ) : (
              <>
                El procedimiento operativo y sus plazos permanecen sujetos a
                revisión jurídica profesional.
              </>
            )}
          </p>
          <p>
            Persona responsable de la atención de peticiones, consultas y
            reclamos: la responsable del proyecto Sing Pronunce Repeat. Canal:{" "}
            <a
              className="text-yellow-300 underline underline-offset-4"
              href={`mailto:${configuredPrivacyEmail}`}
            >
              {configuredPrivacyEmail}
            </a>
            .
          </p>
          <p>
            <a
              className="font-semibold text-yellow-300 underline underline-offset-4"
              href="/tratamiento-de-datos"
            >
              Consulta aquí la Política de tratamiento de datos personales
              completa.
            </a>
          </p>
        </section>

        <section aria-labelledby="privacy-retention">
          <h2 id="privacy-retention">6. Conservación y eliminación</h2>
          <p>
            Los datos personales se conservarán mientras la suscripción
            permanezca activa y sean necesarios para las finalidades autorizadas.
          </p>
          <p>
            Cuando el titular cancele la suscripción, revoque la autorización o
            solicite la supresión, sus datos dejarán de utilizarse para el envío
            de comunicaciones.
          </p>
          <p>
            Podrá conservarse únicamente la información mínima necesaria para
            acreditar la autorización, atender obligaciones legales, gestionar
            reclamaciones y evitar nuevos envíos a quienes hayan solicitado la
            baja.
          </p>
          <p>
            Cuando ya no exista una finalidad válida ni una obligación de
            conservación, la información será eliminada o anonimizada de forma
            segura.
          </p>
        </section>

        <section aria-labelledby="privacy-minors">
          <h2 id="privacy-minors">7. Información de menores de edad</h2>
          <p>
            Los formularios, la lista de correo y las comunicaciones de Sing
            Pronunce Repeat no están dirigidos intencionalmente a menores de
            edad.
          </p>
          <p>
            La responsable no busca recolectar conscientemente datos personales
            de menores. Cuando se detecte un registro de esta naturaleza, será
            revisado y, cuando corresponda, eliminado, salvo que exista una
            autorización y una base jurídica válida.
          </p>
        </section>

        <section aria-labelledby="privacy-providers">
          <h2 id="privacy-providers">8. Proveedores</h2>
          <ul>
            <li>
              <strong>Vercel:</strong> alojamiento de la aplicación, entrega de
              páginas y PDF, procesamiento técnico de solicitudes y registros de
              seguridad y operación.
            </li>
            <li>
              <strong>Hostinger:</strong> dominio y DNS, buzones profesionales,
              y recepción y almacenamiento de comunicaciones de privacidad.
            </li>
            <li>
              <strong>Tally:</strong> encuestas y formularios externos que las
              personas deciden abrir o completar.
            </li>
            <li>
              <strong>MailerLite:</strong> gestión de suscriptores,
              consentimiento, grupos, automatización, entrega, aperturas, clics y
              bajas cuando el flujo de Producción sea aprobado y activado.
            </li>
          </ul>
          <p>
            {isApproved
              ? "La revisión jurídica, contractual y de DPA de las relaciones con proveedores está completa y no solicitó cambios. La validación operativa de los proveedores permanece pendiente antes de activar el flujo de Producción."
              : "La clasificación jurídica y contractual definitiva de cada relación con proveedores continúa pendiente de revisión profesional."}
          </p>
        </section>

        <section aria-labelledby="privacy-dates">
          <h2 id="privacy-dates">9. Vigencia y estado</h2>
          <p>
            {isApproved ? "Fecha de vigencia" : "Fecha prevista de vigencia"}:{" "}
            <time dateTime={effectiveDate ?? undefined}>{effectiveDate}</time>.
            {" "}{isApproved ? "Última actualización" : "Última actualización prevista"}:{" "}
            <time dateTime={lastUpdatedDate ?? undefined}>{lastUpdatedDate}</time>.
          </p>
          <p>
            {isApproved
              ? "La revisión de la responsable, la revisión interna estructurada, la revisión jurídica profesional en Colombia y la revisión contractual y de DPA de proveedores están completas; no se solicitaron cambios sustantivos. La publicación no constituye una certificación ni una garantía de cumplimiento. La captura de leads, el Email 1 y la automatización de Producción permanecen inactivos. La página continúa excluida de indexación."
              : "Este texto permanece pendiente de aprobación final de la responsable, revisión interna estructurada y revisión jurídica profesional en Colombia. La página continúa excluida de indexación."}
          </p>
        </section>
      </div>
    </LegalPageShell>
  );
}
