import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SiteFooter } from "@/components/SiteFooter";
import { getLeadFormConfig } from "@/lib/lead-form-config";
import {
  ebookDownloadFilename,
  ebookDownloadPath,
  ebookFileSizeKB,
  ebookPageCount,
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
  robots: {
    index: false,
    follow: false,
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
  "Vuelve a las prácticas que más te cuesten y compáralas con el audio oficial.",
];

const previewPages = [
  {
    alt: "Portada real de la guía Aprende inglés con 3 canciones",
    caption: "Portada de la guía",
    src: "/images/ebook-preview/portada.webp",
  },
  {
    alt: "Página real que explica qué es el método Escríbelo como suena",
    caption: "El método, con límites claros",
    src: "/images/ebook-preview/metodo.webp",
  },
  {
    alt: "Página real del reto de tres días con una actividad de escucha",
    caption: "Una actividad práctica del reto",
    src: "/images/ebook-preview/reto.webp",
  },
];

const audienceFit = [
  "Hablas español y estás en un nivel básico o intermedio de inglés.",
  "Te motivan las canciones y quieres entender mejor frases cortas.",
  "Buscas apoyo práctico para escuchar, leer y pronunciar con más claridad.",
  "Puedes practicar unos minutos y consultar siempre el audio oficial.",
];

const audienceLimits = [
  "No es un cancionero ni incluye letras completas.",
  "No es un curso completo de inglés ni reemplaza a un docente.",
  "No promete fluidez ni una pronunciación perfecta.",
  "No reemplaza la escucha de las canciones en sus fuentes oficiales.",
];

const faqItems = [
  {
    question: "¿La guía incluye las letras completas?",
    answer:
      "No. Usa únicamente fragmentos educativos cortos, explicaciones originales y enlaces a las fuentes oficiales. No sustituye una plataforma de letras o música.",
  },
  {
    question: "¿Para qué nivel está pensada?",
    answer:
      "Para hispanohablantes de nivel básico a intermedio que quieren practicar escucha, vocabulario y pronunciación con canciones.",
  },
  {
    question: "¿Cómo recibo o descargo la guía?",
    answer:
      "Puedes abrir el formulario externo para recibirla por correo o descargar el PDF directamente desde esta página. El correo no es obligatorio para acceder al PDF.",
  },
  {
    question: "¿Funciona en el celular?",
    answer:
      "Sí. El PDF puede abrirse en el navegador o en una aplicación compatible con PDF en celular, tableta o computador.",
  },
  {
    question: "¿Tiene costo?",
    answer: "No. Esta guía de 32 páginas se ofrece de forma gratuita.",
  },
  {
    question: "¿Qué significa Escríbelo como suena?",
    answer:
      "Es una guía de lectura con letras familiares para hispanohablantes. Sirve como puente hacia el audio real: no usa IPA, no pretende ser exacta o perfecta y siempre debe compararse con la canción oficial.",
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
  const leadFormConfig = getLeadFormConfig();
  const isLeadHandoffEnabled = leadFormConfig.status === "enabled";

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

      {/* ── Hero / CTA hierarchy ───────────────────────────────────────── */}
      <section className="bg-ink px-5 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="inline-flex rounded-full border border-purple/35 bg-purple/10 px-4 py-2 text-sm font-black text-purple">
              Guía gratuita para hispanohablantes
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-black leading-[1.02] text-paper sm:text-6xl lg:text-7xl">
              Aprende a entender y pronunciar inglés con canciones
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-soft">
              Practica 9 frases cortas con significados naturales, vocabulario
              útil y ejercicios originales. Escríbelo como suena usa letras
              familiares para darte un punto de partida y acercarte al audio
              real, sin IPA ni promesas de pronunciación perfecta.
            </p>
            <p className="mt-4 max-w-2xl text-lg font-black text-cream">
              Escucha primero, usa la guía como puente y vuelve siempre a la
              canción oficial.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {isLeadHandoffEnabled ? (
                <CTAButton href="#recibir-guia">
                  Recibir mi guía gratis
                </CTAButton>
              ) : null}
              <CTAButton
                href={ebookDownloadPath}
                download={ebookDownloadFilename}
                variant={isLeadHandoffEnabled ? "secondary" : "primary"}
                aria-label="Descargar la guía directamente en PDF"
              >
                Descargar PDF directamente
              </CTAButton>
            </div>
            <p className="mt-5 max-w-2xl text-sm font-bold leading-6 text-soft">
              El PDF directo es una alternativa independiente: no necesitas
              registrarte ni recibir un correo para descargarlo. PDF ·{" "}
              {ebookPageCount} páginas · Español · Formato A5 ·{" "}
              {ebookFileSizeKB} KB aprox.
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

      {/* ── Real ebook preview ─────────────────────────────────────────── */}
      <section className="bg-midnight px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-cream">
              Vista previa real
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
              Mira cómo es la guía por dentro
            </h2>
            <p className="mt-5 text-lg leading-8 text-soft">
              Estas imágenes provienen de tres páginas de la guía descargable:
              la portada, la explicación del método y una actividad del reto.
            </p>
          </div>
          <div className="mt-10 grid items-start gap-5 sm:grid-cols-3">
            {previewPages.map((page) => (
              <figure
                className="min-w-0 border border-white/10 bg-white/5 p-3 shadow-soft"
                key={page.src}
              >
                <Image
                  alt={page.alt}
                  className="h-auto w-full border border-white/10"
                  height={922}
                  loading="eager"
                  sizes="(max-width: 639px) 100vw, 33vw"
                  src={page.src}
                  width={650}
                />
                <figcaption className="px-2 pb-1 pt-4 text-sm font-bold text-soft">
                  {page.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

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

      {/* ── Audience expectations ─────────────────────────────────────── */}
      <section className="bg-ink px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="border border-pink/30 bg-panel p-6 sm:p-8">
            <p className="text-sm font-bold uppercase text-pink">
              Tu punto de partida
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black">
              Esta guía es para ti si…
            </h2>
            <ul className="mt-6 space-y-4 text-soft">
              {audienceFit.map((item) => (
                <li className="flex gap-3 leading-7" key={item}>
                  <span className="font-black text-cream" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="border border-purple/30 bg-panel p-6 sm:p-8">
            <p className="text-sm font-bold uppercase text-purple">
              Expectativas claras
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black">
              Esta guía no es…
            </h2>
            <ul className="mt-6 space-y-4 text-soft">
              {audienceLimits.map((item) => (
                <li className="flex gap-3 leading-7" key={item}>
                  <span className="font-black text-pink" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
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

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-midnight px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase text-cream">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
            Antes de empezar
          </h2>
          <div className="mt-8 divide-y divide-white/10 border border-white/10 bg-white/5">
            {faqItems.map((item) => (
              <details className="group p-5 sm:p-6" key={item.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-xl font-black focus:outline-none focus-visible:ring-2 focus-visible:ring-cream">
                  {item.question}
                  <span
                    className="shrink-0 text-2xl text-pink transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-8 text-soft">
                  {item.answer}
                </p>
              </details>
            ))}
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

      <SiteFooter />
    </main>
  );
}
