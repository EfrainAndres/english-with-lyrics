import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import {
  dataProcessingPath,
  ebookPagePath,
  firstGroupFormUrl,
  getLinkProps,
  privacyPath,
  surveyFormUrl,
} from "@/lib/links";

const benefits = [
  {
    title: "Pronunciación sin símbolos raros",
    text: "Convertimos el sonido en una guía cercana al español para que puedas repetir con más confianza.",
  },
  {
    title: "Frases útiles, no listas eternas",
    text: "Cada práctica se enfoca en una frase breve para entender sonido, significado y uso real.",
  },
  {
    title: "Aprende con música, paso a paso",
    text: "Empiezas con canciones conocidas como motivación, pero con una guía educativa clara.",
  },
];

const lessonSteps = [
  {
    label: "Escucha",
    title: "Una frase corta",
    text: "Primero identificas una frase breve y segura para practicar.",
  },
  {
    label: "Repite",
    title: "Cómo suena",
    text: "Lees una guía de pronunciación pensada para hispanohablantes.",
  },
  {
    label: "Entiende",
    title: "Qué quiere decir",
    text: "Ves la traducción natural y una explicación simple para recordarla.",
  },
];

const guideContents = [
  {
    name: "3 canciones seleccionadas",
    text: "A Thousand Years, Still Loving You y The Reason — fragmentos educativos cortos para practicar sin sobrecargar.",
  },
  {
    name: "9 prácticas de pronunciación",
    text: "Escríbelo como suena para cada fragmento, sin IPA ni símbolos técnicos.",
  },
  {
    name: "Significados naturales y vocabulario útil",
    text: "Traducción natural y palabras clave en contexto para cada frase practicada.",
  },
  {
    name: "Ejercicios originales, reto de tres días y autochequeo",
    text: "Ejercicios por fragmento, un reto de práctica y una escala de confianza para seguir tu avance.",
  },
];

const methodHighlights = [
  "No usa IPA ni símbolos técnicos.",
  "Te da una referencia simple para practicar con claridad.",
  "Sí te ayuda a escuchar, repetir y comparar con el audio real.",
];

const learningModes = ["Inglés", "Pronunciación", "Español"];

const validationActions = [
  {
    title: "Responder la encuesta",
    text: "Abre una encuesta breve sobre tu nivel, tus bloqueos al escuchar y las canciones que te gustaría practicar.",
    href: surveyFormUrl,
    cta: "Responder la encuesta",
    id: "survey-placeholder",
    accent: "border-purple/35 bg-purple/10 text-purple",
  },
  {
    title: "Quiero saber del primer grupo",
    text: "Abre un formulario corto para recibir información cuando preparemos el primer grupo de práctica.",
    href: firstGroupFormUrl,
    cta: "Quiero saber del primer grupo",
    accent: "border-cream/35 bg-cream/10 text-cream",
  },
];

function AudioBars() {
  return (
    <div className="flex h-10 items-end gap-1" aria-hidden="true">
      {[18, 28, 14, 36, 22, 32, 16, 26, 38, 20, 30, 14].map((height, index) => (
        <span
          className="w-1.5 rounded-full bg-cream"
          key={`${height}-${index}`}
          style={{ height }}
        />
      ))}
    </div>
  );
}

function PlayMarker() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-cream"
    />
  );
}

function BrandLogo({
  className = "",
  height = "4rem",
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
    />
  );
}

function MicroLessonCard() {
  return (
    <article className="overflow-hidden rounded-lg border border-pink/30 bg-panel shadow-soft">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-ink px-5 py-4 text-paper">
        <div>
          <p className="text-xs font-bold uppercase text-purple">
            Tarjeta de práctica musical
          </p>
          <h2 className="mt-1 font-heading text-2xl font-black">
            Escríbelo como suena
          </h2>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink">
          <PlayMarker />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-bold uppercase text-cream">
              Frase de práctica
            </p>
            <p className="mt-2 font-heading text-4xl font-black text-paper">
              I found you
            </p>
          </div>
          <AudioBars />
        </div>

        <div className="grid gap-3 border-b border-white/10 py-5 sm:grid-cols-3">
          <div className="border border-purple/35 bg-purple/10 p-4">
            <p className="text-xs font-bold uppercase text-purple">Inglés</p>
            <p className="mt-2 text-xl font-black text-paper">I found you</p>
          </div>
          <div className="border border-pink/35 bg-pink/10 p-4">
            <p className="text-xs font-bold uppercase text-pink">
              Pronunciación
            </p>
            <p className="mt-2 text-xl font-black text-pink">ai fáund yu</p>
          </div>
          <div className="border border-cream/35 bg-cream/10 p-4">
            <p className="text-xs font-bold uppercase text-cream">Español</p>
            <p className="mt-2 text-xl font-black text-paper">Te encontré</p>
          </div>
        </div>

        <div className="grid gap-3 pt-5 sm:grid-cols-3">
          {learningModes.map((item) => (
            <div
              className="border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-black text-soft"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs font-black uppercase text-soft">
          Escucha · Repite · Entiende
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="sticky top-0 z-20 border-b border-white/15 bg-ink px-5 py-2 shadow-[0_1px_0_rgba(255,255,255,0.04)] sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a
            className="flex shrink-0 items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
            href="#top"
          >
            <BrandLogo
              className="shrink-0"
              height="clamp(3.5rem, 7vw, 5.5rem)"
            />
            <span className="hidden lg:block">
              <span className="block font-heading text-xl font-black leading-5 text-paper">
                Sing Pronounce Repeat
              </span>
              <span className="mt-1 block text-xs font-bold uppercase text-soft">
                English with Lyrics
              </span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-5 text-sm font-bold text-soft md:flex">
              <a href="#demo" className="hover:text-cream focus:text-cream">
                Demo
              </a>
              <a href="#ebook" className="hover:text-cream focus:text-cream">
                Ebook
              </a>
              <a href="#metodo" className="hover:text-cream focus:text-cream">
                Método
              </a>
            </div>
            <a
              className="inline-flex min-h-10 items-center rounded-md bg-pink px-4 text-sm font-black text-ink transition hover:bg-cream hover:text-ink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href={ebookPagePath}
            >
              Descargar guía gratis
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="bg-ink px-5 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-purple/35 bg-purple/10 px-4 py-2 text-sm font-black text-purple">
              English with Lyrics
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-black leading-[1.02] text-paper sm:text-6xl lg:text-7xl">
              Sing. Pronounce. Repeat.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-soft">
              Aprende inglés con tus canciones favoritas, pronunciación fácil y
              traducción natural.
            </p>
            <p className="mt-4 max-w-xl text-lg font-black text-cream">
              Con el método Escríbelo como suena.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {learningModes.map((mode) => (
                <span
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-black text-paper"
                  key={mode}
                >
                  {mode}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={ebookPagePath}>Descargar guía gratis</CTAButton>
              <CTAButton href="#demo" variant="secondary">
                Ver cómo funciona
              </CTAButton>
            </div>
            <p className="mt-5 max-w-xl text-sm font-bold leading-6 text-soft">
              Guía gratuita disponible — 3 canciones, 9 prácticas de
              pronunciación, ejercicios originales y reto de tres días.
            </p>
          </div>

          <MicroLessonCard />
        </div>
      </section>

      <Section
        id="demo"
        eyebrow="Microlección demo"
        title="Una frase pequeña puede desbloquear mejor la escucha."
        intro="La experiencia se siente como una guía de escucha: ves la frase, la forma fácil de pronunciarla y la traducción natural antes de practicar."
      >
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-l-4 border-pink bg-white/5 p-6">
            <p className="font-heading text-3xl font-black">
              Lees una frase. Convertimos el sonido en una guía simple. Luego
              entiendes por qué significa eso.
            </p>
            <p className="mt-4 leading-8 text-soft">
              Este formato usa fragmentos breves con valor educativo. No busca
              reemplazar letras completas ni plataformas oficiales de música.
            </p>
          </div>
          <MicroLessonCard />
        </div>
      </Section>

      <Section
        tone="panel"
        eyebrow="Beneficios"
        title="Para cuando lees una cosa, pero escuchas otra."
        intro="Sing Pronounce Repeat habla directo al bloqueo real: entender inglés cantado cuando las palabras se unen, cambian de sonido o no se traducen literal."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article className="border border-white/10 bg-white/5 p-6" key={benefit.title}>
              <div className="mb-5 h-2 w-20 rounded-full bg-purple" />
              <h3 className="font-heading text-2xl font-black">
                {benefit.title}
              </h3>
              <p className="mt-4 leading-8 text-soft">{benefit.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Cómo funciona en 3 pasos"
        intro="La primera experiencia será corta, clara y medible para validar si el método realmente ayuda."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {lessonSteps.map((step, index) => (
            <article
              className="relative border border-white/10 bg-white/5 p-6"
              key={step.title}
            >
              <p className="flex h-10 w-10 items-center justify-center rounded-full bg-purple text-sm font-black text-ink">
                {index + 1}
              </p>
              <p className="mt-6 text-sm font-black uppercase text-pink">
                {step.label}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-black">
                {step.title}
              </h3>
              <p className="mt-4 leading-8 text-soft">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="ebook"
        tone="ink"
        eyebrow="Guía gratuita disponible"
        title="Aprende inglés con 3 canciones"
        intro="9 frases cortas, pronunciación con Escríbelo como suena, significados naturales, vocabulario útil y ejercicios originales. Incluye reto de tres días y autochequeo."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-pink/25 bg-panel p-6 text-paper shadow-neon">
            <p className="text-sm font-black uppercase text-pink">
              Sing Pronounce Repeat
            </p>
            <h3 className="mt-3 font-heading text-4xl font-black">
              Guía de práctica
            </h3>
            <p className="mt-4 leading-8 text-soft">
              Escucha, repite y entiende inglés real con canciones
              seleccionadas y una guía pensada para hispanohablantes.
            </p>
            <div className="mt-6 flex items-end gap-1" aria-hidden="true">
              {[24, 34, 18, 44, 28, 38, 20, 32, 26].map((height, index) => (
                <span
                  className="w-2 rounded-full bg-purple"
                  key={`${height}-${index}`}
                  style={{ height }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {guideContents.map((item) => (
              <article
                className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 text-paper"
                key={item.name}
              >
                <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-cream" />
                <div>
                  <h3 className="font-heading text-2xl font-black">
                    {item.name}
                  </h3>
                  <p className="mt-2 leading-7 text-soft">{item.text}</p>
                </div>
              </article>
            ))}
            <CTAButton
              className="mt-2 w-full sm:w-fit"
              href={ebookPagePath}
              variant="light"
            >
              Descargar guía gratis
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section
        id="metodo"
        tone="panel"
        eyebrow="El método"
        title="Escríbelo como suena"
        intro="La idea no es memorizar símbolos. Es acercarte al sonido real con una guía práctica para escuchar, repetir y ganar confianza."
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-black uppercase text-purple">
              Frase de práctica
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="border border-purple/35 bg-purple/10 p-4">
                <p className="text-xs font-black uppercase text-purple">
                  Inglés
                </p>
                <p className="mt-2 text-2xl font-black">I found you</p>
              </div>
              <div className="border border-pink/35 bg-pink/10 p-4">
                <p className="text-xs font-black uppercase text-pink">
                  Pronunciación
                </p>
                <p className="mt-2 text-2xl font-black text-pink">
                  ai fáund yu
                </p>
              </div>
              <div className="border border-cream/35 bg-cream/10 p-4">
                <p className="text-xs font-black uppercase text-cream">
                  Español
                </p>
                <p className="mt-2 text-2xl font-black">Te encontré</p>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            {methodHighlights.map((item) => (
              <div className="border border-white/10 bg-white/5 p-5" key={item}>
                <p className="font-bold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="first-group"
        title="Únete al primer grupo"
        intro="La guía gratis ya está disponible. Ahora preparamos un grupo pequeño para practicar con canciones seleccionadas y avanzar con acompañamiento paso a paso."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            "Elige canciones que te motiven a practicar.",
            "Recibe acceso temprano cuando abramos cupos.",
            "Comparte tu nivel y tus mayores bloqueos al escuchar.",
          ].map((item) => (
            <article className="border border-white/10 bg-white/5 p-6" key={item}>
              <p className="font-heading text-2xl font-black leading-8">
                {item}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm font-bold leading-6 text-soft">
          Estamos validando interés antes de abrir cupos. Cuando el formato,
          precio en COP y condiciones estén claros, compartiremos todos los
          detalles.
        </p>
      </Section>

      <Section
        id="waitlist"
        tone="paper"
        title="Sigue aprendiendo con nosotros"
        intro="La guía gratuita ya está disponible. Puedes responder la encuesta para ayudar a elegir las próximas canciones o pedir información sobre el primer grupo de práctica."
      >
        <div className="border border-white/10 bg-panel p-5 shadow-soft sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-l-4 border-purple pl-5">
              <h3 className="font-heading text-3xl font-black">
                Construido con estudiantes reales.
              </h3>
              <p className="mt-4 leading-8 text-soft">
                Usamos formularios externos para medir interés sin crear una
                cuenta ni guardar datos dentro de esta página.
              </p>
              <p className="mt-4 text-sm font-bold text-cream">
                Encuesta y primer grupo se registran por formularios cortos de Tally.
              </p>
            </div>

            <div className="grid gap-3">
              {validationActions.map((action) => (
                <article
                  className="border border-white/10 bg-white/5 p-4"
                  id={action.id}
                  key={action.title}
                >
                  <div
                    className={`mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase ${action.accent}`}
                  >
                    Validación
                  </div>
                  <h3 className="font-heading text-2xl font-black">
                    {action.title}
                  </h3>
                  <p className="mt-2 leading-7 text-soft">{action.text}</p>
                  <a
                    className="mt-4 inline-flex min-h-11 items-center rounded-md border border-cream bg-cream px-4 text-sm font-black text-ink transition hover:border-pink hover:bg-pink hover:text-ink focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2 focus:ring-offset-panel"
                    {...getLinkProps(action.href)}
                  >
                    {action.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-night px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl border border-white/10 bg-white/5 p-5">
          <h2 className="font-heading text-xl font-black">
            Nota legal y de contenido
          </h2>
          <p className="mt-3 leading-7 text-soft">
            Sing Pronounce Repeat enseña con fragmentos educativos cortos,
            pronunciación original del método, traducción natural y explicaciones
            transformativas. No publica letras completas ni funciona como
            reemplazo de plataformas oficiales de lyrics, música o video.
          </p>
        </div>
      </section>

      <footer className="bg-ink px-5 py-8 text-paper sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <BrandLogo className="shrink-0" />
            <p className="mt-1 text-sm text-soft">
              Método Escríbelo como suena.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-black">
            <a
              className="text-cream hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href={privacyPath}
            >
              Privacidad
            </a>
            <a
              className="text-cream hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href={dataProcessingPath}
            >
              Tratamiento de datos
            </a>
            <a
              className="text-cream hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href={ebookPagePath}
            >
              Descargar guía gratis
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
