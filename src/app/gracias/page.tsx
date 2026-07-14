import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import {
  ebookDownloadFilename,
  ebookDownloadPath,
  firstGroupFormUrl,
  surveyFormUrl,
} from "@/lib/links";
import { getRuntimeEnvironment } from "@/lib/runtime-environment";

export const metadata: Metadata = {
  title: "Tu guía está lista | Sing Pronounce Repeat",
  description:
    "Descarga la guía gratuita de Sing Pronounce Repeat para practicar inglés con canciones, pronunciación escrita como suena y ejercicios sencillos.",
  robots: {
    index: false,
    follow: false,
  },
};

type SearchParams = {
  source?: string | string[];
};

const allowedSources = new Set(["ebook", "preview", "email"]);

function getAllowedSource(
  source: string | string[] | undefined,
): "ebook" | "preview" | "email" | null {
  const value = Array.isArray(source) ? source[0] : source;

  if (!value || !allowedSources.has(value)) {
    return null;
  }

  return value as "ebook" | "preview" | "email";
}

function BrandLogo({
  className = "",
  height = "4.5rem",
}: {
  className?: string;
  height?: string;
}) {
  return (
    <Image
      alt="Sing Pronounce Repeat / English with Lyrics logo"
      className={className}
      height={515}
      src="/brand/logo-claro.svg"
      style={{ height, width: "auto" }}
      width={401}
      priority
    />
  );
}

function getPageCopy(
  environment: ReturnType<typeof getRuntimeEnvironment>,
  hasKnownSource: boolean,
) {
  if (environment === "preview") {
    return {
      heading: "Tu guía de prueba está lista",
      description: hasKnownSource
        ? "El registro de prueba se completó correctamente. Puedes descargar la guía ahora y también podrías recibir el correo de prueba configurado en MailerLite."
        : "Puedes descargar la guía de prueba ahora. Esta página también quedará lista para validar la redirección controlada desde MailerLite Preview.",
      notice:
        "Ambiente de pruebas: esta página es pública pero no promocionada y solo sirve para validar el flujo Preview.",
      emailNotice:
        "También puedes recibir un correo de prueba. Revisa la bandeja principal y spam mientras validamos la entregabilidad.",
    };
  }

  if (environment === "development") {
    return {
      heading: "Tu guía está lista",
      description:
        "Esta página está disponible para desarrollo y QA. No se realizó ningún registro real.",
      notice: "Desarrollo local: el envío de correo está desactivado.",
      emailNotice: "El envío de correo está desactivado en desarrollo local.",
    };
  }

  return {
    heading: "Tu guía está lista",
    description:
      "Puedes descargar la guía gratuita y comenzar con una práctica corta.",
    notice:
      "Acceso directo disponible: esta página sigue siendo pública pero no promocionada mientras el funnel de registro en Production permanece inactivo.",
    emailNotice: null,
  };
}

export default async function GraciasPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const source = getAllowedSource(resolvedSearchParams?.source);
  const environment = getRuntimeEnvironment();
  const copy = getPageCopy(environment, source !== null);

  return (
    <main className="min-h-screen bg-ink text-paper">
      <nav className="border-b border-white/15 bg-ink px-5 py-3 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
            href="/"
          >
            <BrandLogo
              className="shrink-0"
              height="clamp(3.25rem, 6vw, 5rem)"
            />
          </Link>
          <div className="flex items-center gap-4 text-sm font-black">
            <Link
              className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href="/ebook-gratis"
            >
              Ver qué incluye la guía
            </Link>
            <Link
              className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href="/"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-ink px-5 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="border border-purple/20 bg-panel p-6 shadow-neon sm:p-8">
            <p className="inline-flex rounded-full border border-purple/35 bg-purple/10 px-4 py-2 text-sm font-black text-purple">
              Guía gratuita
            </p>
            <h1 className="mt-5 font-heading text-4xl font-black leading-[1.05] text-paper sm:text-5xl">
              {copy.heading}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-soft">
              {copy.description}
            </p>

            <p
              className="mt-5 border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-soft"
              role="status"
            >
              {copy.notice}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href={ebookDownloadPath}
                download={ebookDownloadFilename}
                aria-label="Descargar mi guía en PDF"
              >
                Descargar mi guía
              </CTAButton>
              <CTAButton
                href={ebookDownloadPath}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                aria-label="Abrir la guía en el navegador"
              >
                Abrir en el navegador
              </CTAButton>
            </div>

            {copy.emailNotice ? (
              <p className="mt-5 text-sm leading-7 text-soft">
                {copy.emailNotice}
              </p>
            ) : null}

            <p className="mt-4 text-sm leading-7 text-soft">
              Si el correo no llega, puedes descargar la guía directamente desde
              esta página.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-night px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-bold uppercase text-pink">
              Ayúdame a mejorar la próxima versión
            </p>
            <p className="mt-4 leading-8 text-soft">
              Responde una encuesta corta para contarme qué canciones,
              prácticas y recursos te gustaría encontrar después.
            </p>
            <CTAButton className="mt-6" href={surveyFormUrl} variant="secondary">
              Responder encuesta
            </CTAButton>
          </article>

          <article className="border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-bold uppercase text-cream">
              ¿Te interesa practicar con acompañamiento?
            </p>
            <p className="mt-4 leading-8 text-soft">
              Puedes registrarte de forma opcional para conocer el primer grupo
              de práctica y ayudarnos a validar el siguiente paso del proyecto.
            </p>
            <CTAButton
              className="mt-6"
              href={firstGroupFormUrl}
              variant="light"
            >
              Conocer el primer grupo
            </CTAButton>
            <p className="mt-4 text-sm leading-7 text-soft">
              Más adelante podrás conocer nuevas prácticas y materiales
              avanzados.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
