import type { Metadata } from "next";
import { getLegalRenderState, legalConfiguration } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos",
  description:
    "Borrador operativo sobre el tratamiento de datos personales de Sing Pronunce Repeat.",
  alternates: {
    canonical: "/tratamiento-de-datos",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const privacyEmail = "privacidad@singpronuncerepeat.com";

function PolicyShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-[#0b0911] px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
          Sing Pronunce Repeat · Tratamiento de datos
        </p>
        {children}
        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-zinc-300">
          Canal de solicitudes:{" "}
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

function PendingPolicyNotice() {
  return (
    <PolicyShell>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Información legal en preparación
      </h1>
      <p className="mt-6 leading-7 text-zinc-300">
        Estamos completando la configuración de la persona responsable antes de
        mostrar el borrador de la política de tratamiento de datos. En este estado
        no se publican datos personales de contacto.
      </p>
      <p className="mt-4 leading-7 text-zinc-300">
        La captura de leads, el Email 1 y la automatización de correo de
        Producción permanecen inactivos.
      </p>
    </PolicyShell>
  );
}

export default function TratamientoDeDatosPage() {
  const renderState = getLegalRenderState();

  if (renderState === "pending") {
    return <PendingPolicyNotice />;
  }

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
    <PolicyShell>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Política de tratamiento de datos personales
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
        Este documento define un flujo operativo preliminar para Sing Pronunce
        Repeat, también identificado públicamente como English with Lyrics. Sus
        compromisos están sujetos a revisión jurídica profesional y no activan la
        captura de leads ni el correo de Producción.
      </p>

      <div className="mt-10 space-y-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:leading-7 [&_p]:mt-3 [&_p]:leading-7 [&_p]:text-zinc-300 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-zinc-300">
        <section aria-labelledby="processing-scope">
          <h2 id="processing-scope">1. Alcance y propósito</h2>
          <p>
            La política cubre los datos tratados para entregar recursos
            educativos, administrar consentimientos y suscripciones, atender
            solicitudes de privacidad y, cuando exista aprobación, enviar
            comunicaciones relacionadas con Sing Pronunce Repeat y el método
            Escríbelo como suena.
          </p>
        </section>

        <section aria-labelledby="processing-definitions">
          <h2 id="processing-definitions">2. Definiciones esenciales</h2>
          <p>
            <strong>Dato personal</strong> es información asociada o asociable a
            una persona. <strong>Titular</strong> es la persona a quien pertenece.
            {" "}<strong>Tratamiento</strong> comprende acciones como recopilar,
            organizar, consultar, usar, actualizar o eliminar datos.{" "}
            <strong>Autorización</strong> es el consentimiento previo, expreso e
            informado cuando resulte aplicable.
          </p>
        </section>

        <section aria-labelledby="processing-principles">
          <h2 id="processing-principles">3. Principios orientadores</h2>
          <ul>
            <li><strong>Legalidad:</strong> tratar datos dentro del marco aplicable.</li>
            <li><strong>Finalidad:</strong> usarlos solo para propósitos informados.</li>
            <li><strong>Libertad:</strong> obtener consentimiento libre e informado.</li>
            <li><strong>Veracidad:</strong> procurar información exacta y actualizada.</li>
            <li><strong>Transparencia:</strong> facilitar información sobre el tratamiento.</li>
            <li><strong>Acceso restringido:</strong> limitar el acceso a quien lo necesite.</li>
            <li><strong>Seguridad:</strong> aplicar medidas razonables de protección.</li>
            <li><strong>Confidencialidad:</strong> proteger la información no pública.</li>
          </ul>
        </section>

        <section aria-labelledby="processing-owner">
          <h2 id="processing-owner">4. Responsable y canales de contacto</h2>
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
            <dt className="font-semibold text-zinc-200">Correo</dt>
            <dd>
              <a
                className="text-yellow-300 underline underline-offset-4"
                href={`mailto:${configuredPrivacyEmail}`}
              >
                {configuredPrivacyEmail}
              </a>
            </dd>
          </dl>
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
        </section>

        <section aria-labelledby="processing-categories">
          <h2 id="processing-categories">5. Categorías de datos</h2>
          <p>
            Podrán tratarse correo electrónico; nombre suministrado
            voluntariamente; evidencias de consentimiento y registro; estado de
            suscripción o grupo; aperturas, clics y bajas cuando estén habilitados;
            registros técnicos de entrega y seguridad; e información enviada
            voluntariamente mediante Tally.
          </p>
        </section>

        <section aria-labelledby="processing-channels">
          <h2 id="processing-channels">6. Canales de recolección</h2>
          <p>
            Los canales previstos son formularios externos de Tally, futuros
            formularios de suscripción operados con MailerLite, comunicaciones
            recibidas en el buzón profesional y registros técnicos generados por
            la aplicación y los proveedores. La captura de Producción permanece
            inactiva.
          </p>
        </section>

        <section aria-labelledby="processing-purposes">
          <h2 id="processing-purposes">7. Finalidades del tratamiento</h2>
          <p>
            Entregar el recurso solicitado; gestionar autorizaciones,
            suscripciones, bajas y solicitudes; mantener seguridad y continuidad
            operativa; y, con autorización específica, enviar contenido
            educativo, ejercicios, noticias, encuestas e invitaciones relacionadas
            con Sing Pronunce Repeat.
          </p>
        </section>

        <section aria-labelledby="processing-rights">
          <h2 id="processing-rights">8. Derechos de las personas titulares</h2>
          <ul>
            <li>Conocer, actualizar y rectificar sus datos personales.</li>
            <li>Conocer el uso dado a sus datos personales.</li>
            <li>Acceder gratuitamente a los datos personales tratados.</li>
            <li>
              Solicitar prueba de la autorización, salvo cuando legalmente no sea
              necesaria.
            </li>
            <li>
              Ser informado, previa solicitud, respecto del uso dado a sus datos.
            </li>
            <li>
              Solicitar la revocación de la autorización o la supresión cuando
              resulte aplicable y no exista un deber legal o contractual que
              exija conservar la información.
            </li>
            <li>
              Presentar quejas ante la Superintendencia de Industria y Comercio
              después de agotar el procedimiento de consulta o reclamo ante la
              responsable.
            </li>
          </ul>
        </section>

        <section aria-labelledby="processing-duties">
          <h2 id="processing-duties">9. Deberes de la responsable</h2>
          <p>
            Se prevé informar las finalidades, solicitar autorización cuando sea
            necesaria, conservar evidencia mínima, atender derechos, procurar
            exactitud y seguridad, limitar accesos y exigir a los proveedores las
            salvaguardas que correspondan. La definición jurídica final permanece
            pendiente de revisión profesional.
          </p>
        </section>

        <section aria-labelledby="processing-consent">
          <h2 id="processing-consent">10. Autorización y evidencia</h2>
          <p>
            La autorización deberá ser previa, expresa e informada cuando resulte
            aplicable. El sistema deberá conservar evidencia mínima de la versión
            del texto aceptado, la fecha, el canal y el estado de suscripción. La
            vinculación final del consentimiento de Producción está pendiente.
          </p>
        </section>

        <section aria-labelledby="processing-consultations">
          <h2 id="processing-consultations">11. Consultas y reclamos</h2>
          <p>
            Las consultas se atenderán en un término máximo de diez (10) días
            hábiles contados desde su recepción. Cuando no sea posible responder
            dentro de ese término, se informarán los motivos de la demora y la
            nueva fecha de respuesta, que no podrá superar los cinco (5) días
            hábiles siguientes al vencimiento del término inicial.
          </p>
          <p>
            Los reclamos se atenderán en un término máximo de quince (15) días
            hábiles contados a partir del día siguiente a su recepción. Cuando no
            sea posible responder dentro de ese término, se informarán los
            motivos de la demora y la nueva fecha de respuesta, que no podrá
            superar los ocho (8) días hábiles siguientes al vencimiento del
            término inicial.
          </p>
          <p>
            Como procedimiento operativo preliminar, si un reclamo está
            incompleto se solicitará su corrección o complementación dentro de
            los cinco (5) días hábiles siguientes a su recepción. Si la persona no
            responde dentro de los dos (2) meses siguientes al requerimiento, el
            reclamo podrá entenderse desistido.
          </p>
          <p>
            Si el reclamo es recibido por una persona que no sea competente para
            resolverlo, se trasladará a quien corresponda en un término máximo de
            dos (2) días hábiles y se informará a la persona solicitante.
          </p>
          <p>
            Cuando el reclamo esté completo, se incorporará la leyenda “reclamo
            en trámite” al registro aplicable en un término máximo de dos (2) días
            hábiles y se mantendrá hasta que el reclamo sea resuelto.
          </p>
          <p>
            Estas reglas son un borrador operativo pendiente de revisión jurídica
            profesional.
          </p>
        </section>

        <section aria-labelledby="processing-changes">
          <h2 id="processing-changes">12. Corrección, revocación y supresión</h2>
          <p>
            La persona podrá escribir a{" "}
            <a
              className="text-yellow-300 underline underline-offset-4"
              href={`mailto:${configuredPrivacyEmail}`}
            >
              {configuredPrivacyEmail}
            </a>{" "}
            indicando el tipo de solicitud y la información necesaria para ubicar
            el registro. La identidad se validará de forma proporcional, sin pedir
            por defecto una copia del documento. Según corresponda, se corregirá,
            restringirá, dará de baja o eliminará la información, respetando las
            excepciones legales aplicables.
          </p>
        </section>

        <section aria-labelledby="processing-providers">
          <h2 id="processing-providers">13. Proveedores y procesamiento internacional</h2>
          <ul>
            <li><strong>Vercel:</strong> alojamiento, páginas, PDF y registros técnicos.</li>
            <li><strong>Hostinger:</strong> dominio, DNS, buzones y comunicaciones de privacidad.</li>
            <li><strong>Tally:</strong> encuestas y formularios externos voluntarios.</li>
            <li><strong>MailerLite:</strong> suscriptores, consentimiento, grupos, automatización, entrega, aperturas, clics y bajas cuando Producción sea activada.</li>
          </ul>
          <p>
            Algunos servicios pueden implicar procesamiento fuera de Colombia.
            La clasificación contractual y de transferencia o transmisión para
            cada proveedor está pendiente de revisión profesional. MailerLite no
            captura leads ni envía correos de Producción en esta fase.
          </p>
        </section>

        <section aria-labelledby="processing-security">
          <h2 id="processing-security">14. Seguridad y minimización</h2>
          <p>
            Se procurará recopilar solo la información necesaria, limitar accesos,
            usar canales y proveedores con controles razonables, mantener
            autenticación de correo y evitar almacenar evidencia privada en el
            repositorio. Ninguna medida permite prometer seguridad absoluta.
          </p>
        </section>

        <section aria-labelledby="processing-retention">
          <h2 id="processing-retention">15. Conservación y eliminación</h2>
          <p>
            Los datos personales se conservarán mientras la suscripción permanezca
            activa y sean necesarios para las finalidades autorizadas. Cuando el
            titular cancele la suscripción, revoque la autorización o solicite la
            supresión, dejarán de utilizarse para comunicaciones.
          </p>
          <p>
            Podrá conservarse únicamente la información mínima necesaria para
            acreditar la autorización, atender obligaciones legales, gestionar
            reclamaciones y evitar nuevos envíos a quienes hayan solicitado la
            baja. Cuando ya no exista una finalidad válida ni una obligación de
            conservación, la información será eliminada o anonimizada de forma
            segura.
          </p>
        </section>

        <section aria-labelledby="processing-minors">
          <h2 id="processing-minors">16. Menores de edad</h2>
          <p>
            Los formularios, la lista de correo y las comunicaciones de Sing
            Pronunce Repeat no están dirigidos intencionalmente a menores de edad.
            La responsable no busca recolectar conscientemente sus datos. Si se
            detecta un registro de esta naturaleza, será revisado y, cuando
            corresponda, eliminado, salvo que exista autorización y una base
            jurídica válida.
          </p>
        </section>

        <section aria-labelledby="processing-modifications">
          <h2 id="processing-modifications">17. Modificaciones de la política</h2>
          <p>
            Los cambios materiales se comunicarán por un canal apropiado antes de
            aplicarse cuando así corresponda. Una nueva finalidad incompatible
            requerirá la revisión y autorización que resulte aplicable.
          </p>
        </section>

        <section aria-labelledby="processing-duration">
          <h2 id="processing-duration">18. Vigencia y duración de las bases</h2>
          <p>
            Fecha prevista de vigencia: <time dateTime={effectiveDate ?? undefined}>{effectiveDate}</time>.
            Última actualización prevista:{" "}
            <time dateTime={lastUpdatedDate ?? undefined}>{lastUpdatedDate}</time>.
            Las bases o registros se mantendrán únicamente mientras exista una
            finalidad válida o una obligación aplicable, sin fijar un plazo
            general no sustentado.
          </p>
        </section>

        <section aria-labelledby="processing-review">
          <h2 id="processing-review">19. Estado de revisión</h2>
          <p>
            El contenido está pendiente de aprobación final de la responsable,
            revisión interna estructurada y revisión jurídica profesional en
            Colombia. No se presenta como política final ni como certificación de
            cumplimiento, y permanece excluido de indexación.
          </p>
        </section>
      </div>
    </PolicyShell>
  );
}
