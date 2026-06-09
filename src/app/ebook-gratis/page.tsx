import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import {
  ebookFormUrl,
  firstGroupFormUrl,
  getLinkProps,
  surveyFormUrl,
} from "@/lib/links";

export const metadata: Metadata = {
  title: "Guía gratis en preparación | Sing Pronounce Repeat",
  description:
    "La guía gratis de Sing Pronounce Repeat / English with Lyrics está en preparación. Regístrate para recibirla y ayudar a elegir las próximas canciones.",
};

const guideItems = [
  {
    title: "3 canciones seleccionadas",
    text: "Una entrada corta para practicar sin sentir que estás tomando un curso pesado.",
    accent: "bg-pink",
  },
  {
    title: "Pronunciación fácil con Escríbelo como suena",
    text: "Guías de sonido pensadas para hispanohablantes, sin símbolos raros ni IPA.",
    accent: "bg-purple",
  },
  {
    title: "Traducción natural y frases útiles",
    text: "Explicaciones en español para entender significado, uso y contexto.",
    accent: "bg-cream",
  },
  {
    title: "Mini ejercicios para practicar",
    text: "Pequeñas acciones para escuchar, repetir y recordar cada frase.",
    accent: "bg-pink",
  },
];

const paths = [
  {
    title: "Románticas",
    text: "Frases emocionales, ritmo más fácil de seguir y práctica para conectar sonido con significado.",
    className: "border-pink/35 bg-pink/10",
    labelClassName: "text-pink",
  },
  {
    title: "Rock / pop clásicos",
    text: "Canciones conocidas, expresiones frecuentes y práctica con palabras que cambian al cantarse.",
    className: "border-purple/35 bg-purple/10",
    labelClassName: "text-purple",
  },
  {
    title: "Principiantes",
    text: "Fragmentos muy cortos, pronunciación guiada y pasos simples para ganar confianza.",
    className: "border-cream/35 bg-cream/10",
    labelClassName: "text-cream",
  },
];

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

function AudioBars() {
  return (
    <div className="flex h-12 items-end gap-1" aria-hidden="true">
      {[24, 40, 18, 48, 28, 36, 22, 44, 30, 20, 34].map((height, index) => (
        <span
          className="w-2 rounded-full bg-cream"
          key={`${height}-${index}`}
          style={{ height }}
        />
      ))}
    </div>
  );
}

export default function EbookGratisPage() {
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
          <Link
            className="text-sm font-black text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
            href="/"
          >
            Volver al inicio
          </Link>
        </div>
      </nav>

      <section className="bg-ink px-5 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="inline-flex rounded-full border border-purple/35 bg-purple/10 px-4 py-2 text-sm font-black text-purple">
              Guía gratis
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-black leading-[1.02] text-paper sm:text-6xl lg:text-7xl">
              Tu guía gratis está en preparación
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-soft">
              Estamos preparando una guía con 3 canciones para practicar inglés
              con pronunciación fácil, frases útiles y traducción natural.
            </p>
            <p className="mt-4 max-w-xl text-lg font-black text-cream">
              Con el método Escríbelo como suena.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={ebookFormUrl}>
                Avisarme cuando esté lista
              </CTAButton>
              <CTAButton href={surveyFormUrl} variant="secondary">
                Responder encuesta
              </CTAButton>
            </div>
            <p className="mt-5 max-w-xl text-sm font-bold leading-6 text-soft">
              No hay PDF disponible todavía. Si dejas tus datos, te avisaremos
              cuando la guía esté lista.
            </p>
          </div>

          <aside className="border border-pink/25 bg-panel p-6 shadow-neon">
            <p className="text-sm font-black uppercase text-pink">
              Próxima entrega
            </p>
            <h2 className="mt-3 font-heading text-4xl font-black">
              Escucha, repite, entiende
            </h2>
            <p className="mt-4 leading-8 text-soft">
              La guía será una puerta de entrada a prácticas cortas, claras y
              enfocadas en inglés real.
            </p>
            <div className="mt-6">
              <AudioBars />
            </div>
            <div className="mt-6 grid gap-3">
              {["Inglés", "Pronunciación", "Español"].map((item) => (
                <div
                  className="border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-soft"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-night px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-pink">
              Contenido previsto
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
              Qué incluirá la guía
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {guideItems.map((item) => (
              <article
                className="border border-white/10 bg-white/5 p-5"
                key={item.title}
              >
                <span
                  className={`mb-5 block h-2 w-20 rounded-full ${item.accent}`}
                />
                <h3 className="font-heading text-2xl font-black">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-soft">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-panel px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-purple">
              Elige tu camino
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
              Ayúdanos a decidir por dónde empezar
            </h2>
            <p className="mt-5 text-lg leading-8 text-soft">
              La guía puede organizarse por estilos y niveles. Tu respuesta nos
              ayuda a elegir el camino más útil para la primera versión.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {paths.map((path) => (
              <article
                className={`border p-6 ${path.className}`}
                key={path.title}
              >
                <p
                  className={`text-sm font-black uppercase ${path.labelClassName}`}
                >
                  Camino
                </p>
                <h3 className="mt-3 font-heading text-3xl font-black">
                  {path.title}
                </h3>
                <p className="mt-4 leading-8 text-soft">{path.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase text-cream">
              Mientras la guía está lista
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
              Participa en la validación
            </h2>
            <p className="mt-5 text-lg leading-8 text-soft">
              Puedes responder la encuesta, pedir información del primer grupo
              o volver al inicio para ver el método completo.
            </p>
          </div>

          <div className="grid gap-4">
            <CTAButton href={surveyFormUrl} variant="secondary">
              Responder encuesta
            </CTAButton>
            <CTAButton href={firstGroupFormUrl} variant="light">
              Quiero saber del primer grupo
            </CTAButton>
            <CTAButton href="/" variant="secondary">
              Volver al inicio
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-night px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl border border-white/10 bg-white/5 p-5">
          <h2 className="font-heading text-xl font-black">
            Nota legal y de contenido
          </h2>
          <p className="mt-3 leading-7 text-soft">
            Esta guía usará fragmentos educativos cortos y explicaciones
            propias. No reemplaza letras completas ni plataformas oficiales de
            música o video.
          </p>
        </div>
      </section>

      <footer className="bg-ink px-5 py-8 text-paper sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <BrandLogo className="shrink-0" height="4rem" />
            <p className="text-sm text-soft">Método Escríbelo como suena.</p>
          </div>
          <a
            className="text-sm font-black text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
            {...getLinkProps(ebookFormUrl)}
          >
            Avisarme cuando esté lista
          </a>
        </div>
      </footer>
    </main>
  );
}
