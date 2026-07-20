import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import {
  dataProcessingPath,
  ebookDownloadFilename,
  ebookDownloadPath,
  ebookFileSizeKB,
  ebookPageCount,
  firstGroupFormUrl,
  privacyPath,
  surveyFormUrl,
} from "@/lib/links";

export const metadata: Metadata = {
  title: "Guía gratis disponible",
  description:
    "Descarga gratis la guía de práctica de Sing Pronunce Repeat / English with Lyrics. 3 canciones, 9 frases, pronunciación con Escríbelo como suena y ejercicios originales.",
  alternates: {
    canonical: "/ebook-gratis",
  },
  openGraph: {
    title: "Guía gratis disponible | Sing Pronunce Repeat",
    description:
      "Descarga gratis la guía de práctica de Sing Pronunce Repeat / English with Lyrics. 3 canciones, 9 frases, pronunciación con Escríbelo como suena y ejercicios originales.",
    url: "/ebook-gratis",
    siteName: "Sing Pronunce Repeat",
    type: "website",
    locale: "es_CO",
  },
};

const contentItems = [
  {
    title: "3 canciones seleccionadas",
    text: "A Thousand Years, Still Loving You y The Reason — fragmentos cortos pensados para practicar sin sobrecargar.",
    accent: "bg-pink",
  },
  {
    title: "9 prácticas de pronunciación",
    text: "Escríbelo como suena para cada fragmento: guías de sonido pensadas para hispanohablantes, sin IPA.",
    accent: "bg-purple",
  },
  {
    title: "Significados naturales y vocabulario",
    text: "Explicaciones en español del significado real, el uso en contexto y las palabras clave de cada frase.",
    accent: "bg-cream",
  },
  {
    title: "Ejercicios y reto de tres días",
    text: "Ejercicios originales por fragmento, un reto de práctica y una escala de confianza para seguir tu progreso.",
    accent: "bg-pink",
  },
];

const howToUse = [
  "Descarga la guía y ábrela en cualquier dispositivo.",
  "Abre los enlaces oficiales de cada canción dentro de la guía.",
  "Escucha el fragmento, lee la guía y repítelo en voz alta.",
  "Completa los ejercicios escritos y el reto de tres días.",
  "Responde la encuesta para ayudar a elegir las próximas canciones.",
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
      alt="Sing Pronunce Repeat / English with Lyrics logo"
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
      {/* ── Navigation ─────────────────────────────────────────────────── */}
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

      {/* ── Hero / Download CTA ─────────────────────────────────────────── */}
      <section className="bg-ink px-5 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="inline-flex rounded-full border border-purple/35 bg-purple/10 px-4 py-2 text-sm font-black text-purple">
              Guía gratuita disponible
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-black leading-[1.02] text-paper sm:text-6xl lg:text-7xl">
              Aprende inglés con 3 canciones
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-soft">
              9 frases cortas, pronunciación con Escríbelo como suena,
              significados naturales, vocabulario útil y ejercicios originales.
              Incluye un reto de tres días y autoevaluación.
            </p>
            <p className="mt-4 max-w-xl text-lg font-black text-cream">
              Con el método Escríbelo como suena.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href={ebookDownloadPath}
                download={ebookDownloadFilename}
                aria-label="Descargar guía gratis en PDF"
              >
                Descargar guía gratis
              </CTAButton>
              <CTAButton
                href={ebookDownloadPath}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                aria-label="Abrir guía en el navegador"
              >
                Abrir en el navegador
              </CTAButton>
            </div>
            <p className="mt-5 text-sm font-bold text-soft">
              PDF · {ebookPageCount} páginas · Español · Formato A5 · {ebookFileSizeKB} KB aprox.
            </p>
          </div>

          <aside className="border border-pink/25 bg-panel p-6 shadow-neon">
            <p className="text-sm font-black uppercase text-pink">
              Incluye
            </p>
            <h2 className="mt-3 font-heading text-4xl font-black">
              Escucha, repite, entiende
            </h2>
            <p className="mt-4 leading-8 text-soft">
              3 canciones seleccionadas, 9 prácticas de pronunciación, vocabulario
              útil y ejercicios para practicar en cualquier momento.
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

      <LeadCaptureForm />

      {/* ── Content breakdown ──────────────────────────────────────────────── */}
      <section className="bg-night px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-pink">
              Contenido de la guía
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
              Qué incluye la guía
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contentItems.map((item) => (
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

      {/* ── How to use ─────────────────────────────────────────────────────── */}
      <section className="bg-panel px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-purple">
              Cómo usarla
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
              Cinco pasos para practicar
            </h2>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {howToUse.map((step, i) => (
              <li
                className="flex gap-4 border border-white/10 bg-white/5 p-5"
                key={i}
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple/20 text-sm font-black text-purple">
                  {i + 1}
                </span>
                <p className="leading-7 text-soft">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Survey and first-group CTAs ────────────────────────────────────── */}
      <section className="bg-midnight px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase text-cream">
              Después de la guía
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
              Ayúdanos a mejorar
            </h2>
            <p className="mt-5 text-lg leading-8 text-soft">
              Puedes responder la encuesta para elegir las próximas canciones,
              pedir información del primer grupo de práctica o volver al inicio.
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

      {/* ── Legal note ─────────────────────────────────────────────────────── */}
      <section className="bg-night px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl border border-white/10 bg-white/5 p-5">
          <h2 className="font-heading text-xl font-black">
            Nota legal y de contenido
          </h2>
          <p className="mt-3 leading-7 text-soft">
            Esta guía usa fragmentos educativos cortos y explicaciones propias.
            No reproduce letras completas ni reemplaza plataformas oficiales de
            música o video. Escucha cada canción a través de las fuentes
            oficiales enlazadas dentro de la guía.
          </p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="bg-ink px-5 py-8 text-paper sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <BrandLogo className="shrink-0" height="4rem" />
            <p className="text-sm text-soft">Método Escríbelo como suena.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-black">
            <Link
              className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href={privacyPath}
            >
              Privacidad
            </Link>
            <Link
              className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href={dataProcessingPath}
            >
              Tratamiento de datos
            </Link>
            <a
              className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href={ebookDownloadPath}
              download={ebookDownloadFilename}
              aria-label="Descargar guía gratis en PDF"
            >
              Descargar guía gratis
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
