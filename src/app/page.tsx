import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";

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

const guidePaths = [
  {
    name: "Románticas",
    text: "Frases emocionales, lentas y fáciles de repetir.",
  },
  {
    name: "Rock / pop clásicos",
    text: "Canciones conocidas con expresiones que aparecen mucho.",
  },
  {
    name: "Principiantes",
    text: "Fragmentos cortos para empezar sin sentirse perdido.",
  },
];

const methodHighlights = [
  "No usa IPA ni símbolos técnicos.",
  "No promete una transcripción perfecta.",
  "Sí te ayuda a escuchar, repetir y comparar con el audio real.",
];

const learningModes = ["Inglés", "Pronunciación", "Español"];

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

function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-pink/50 bg-ink shadow-neon"
    >
      <span className="absolute h-8 w-8 rounded-full border-2 border-blue" />
      <span className="h-6 w-3 rounded-full bg-pink" />
      <span className="absolute bottom-2 h-1.5 w-5 rounded-full bg-cream" />
    </span>
  );
}

function MicroLessonCard() {
  return (
    <article className="overflow-hidden rounded-lg border border-pink/30 bg-panel shadow-soft">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-ink px-5 py-4 text-paper">
        <div>
          <p className="text-xs font-bold uppercase text-blue">
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
          <div className="border border-blue/35 bg-blue/10 p-4">
            <p className="text-xs font-bold uppercase text-blue">Inglés</p>
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
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-ink/88 px-5 py-3 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="#top">
            <LogoMark />
            <span>
              <span className="block font-heading text-lg font-black leading-5 text-paper">
                Sing Pronounce Repeat
              </span>
              <span className="block text-xs font-bold text-soft">
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
              className="inline-flex min-h-10 items-center rounded-md bg-pink px-4 text-sm font-black text-white transition hover:bg-cream hover:text-ink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href="#ebook"
            >
              Ebook gratis
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="bg-ink px-5 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-blue/35 bg-blue/10 px-4 py-2 text-sm font-black text-blue">
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
              <CTAButton href="#ebook">Quiero mi ebook gratis</CTAButton>
              <CTAButton href="#demo" variant="secondary">
                Ver cómo funciona
              </CTAButton>
            </div>
            <p className="mt-5 max-w-xl text-sm font-bold leading-6 text-soft">
              Recibe una guía gratis con 3 canciones para practicar
              pronunciación sin símbolos raros.
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
              <div className="mb-5 h-2 w-20 rounded-full bg-blue" />
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
              <p className="flex h-10 w-10 items-center justify-center rounded-full bg-purple text-sm font-black text-white">
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
        eyebrow="Guía gratis"
        title="Descarga tu guía gratis"
        intro="3 canciones para empezar a entender inglés real, con fragmentos educativos cortos, pronunciación sencilla y explicación natural."
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
              Elige el tipo de canciones que más te motivan y ayúdanos a
              validar el primer recurso gratuito.
            </p>
            <div className="mt-6 flex items-end gap-1" aria-hidden="true">
              {[24, 34, 18, 44, 28, 38, 20, 32, 26].map((height, index) => (
                <span
                  className="w-2 rounded-full bg-blue"
                  key={`${height}-${index}`}
                  style={{ height }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {guidePaths.map((path) => (
              <article
                className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 text-paper"
                key={path.name}
              >
                <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-cream" />
                <div>
                  <h3 className="font-heading text-2xl font-black">
                    {path.name}
                  </h3>
                  <p className="mt-2 leading-7 text-soft">{path.text}</p>
                </div>
              </article>
            ))}
            <CTAButton className="mt-2 w-full sm:w-fit" href="#waitlist" variant="light">
              Elegir mi guía gratis
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
            <p className="text-sm font-black uppercase text-blue">
              Frase de práctica
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="border border-blue/35 bg-blue/10 p-4">
                <p className="text-xs font-black uppercase text-blue">
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
        title="Únete al primer grupo"
        intro="Cuando la guía gratis esté lista, abriremos un grupo pequeño para practicar con canciones seleccionadas y avanzar con acompañamiento paso a paso."
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
          Todavía no hay pagos activos. La oferta fundadora se definirá cuando
          el alcance, precio en COP y condiciones estén claros.
        </p>
      </Section>

      <Section
        id="waitlist"
        tone="paper"
        title="Únete a la lista de espera"
        intro="Deja tus datos para recibir la guía gratis cuando esté lista y responder la encuesta de canciones, nivel y formato."
      >
        <div className="border border-white/10 bg-panel p-5 shadow-soft sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-l-4 border-blue pl-5">
              <h3 className="font-heading text-3xl font-black">
                Queremos construir esto con estudiantes reales.
              </h3>
              <p className="mt-4 leading-8 text-soft">
                El formulario final se conectará cuando elijamos la herramienta
                de captura. Por ahora, esta área define el flujo visual para la
                lista y la encuesta.
              </p>
              <p className="mt-4 text-sm font-bold text-cream">
                Sin spam. Sin pagos en esta fase. Solo validación y aprendizaje.
              </p>
            </div>

            <form className="grid gap-4" aria-label="Formulario de lista de espera">
              <label className="grid gap-2 text-sm font-bold">
                Nombre
                <input
                  className="min-h-12 rounded-md border border-white/15 bg-ink px-4 text-base font-normal text-paper outline-none transition placeholder:text-soft/60 focus:border-blue focus:ring-2 focus:ring-pink/40"
                  placeholder="Tu nombre"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Email
                <input
                  className="min-h-12 rounded-md border border-white/15 bg-ink px-4 text-base font-normal text-paper outline-none transition placeholder:text-soft/60 focus:border-blue focus:ring-2 focus:ring-pink/40"
                  placeholder="tu@email.com"
                  type="email"
                />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  className="min-h-12 rounded-md bg-pink px-5 py-3 text-sm font-black text-white transition hover:bg-cream hover:text-ink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-panel"
                  type="button"
                >
                  Quiero la guía
                </button>
                <button
                  className="min-h-12 rounded-md border border-blue/40 bg-white/5 px-5 py-3 text-sm font-black text-paper transition hover:border-pink hover:text-cream focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-panel"
                  type="button"
                >
                  Responder encuesta
                </button>
              </div>
            </form>
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
          <div>
            <p className="font-heading text-xl font-black">
              Sing Pronounce Repeat
            </p>
            <p className="mt-1 text-sm text-soft">
              English with Lyrics · Método Escríbelo como suena.
            </p>
          </div>
          <a
            className="text-sm font-black text-cream hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
            href="#ebook"
          >
            Quiero mi ebook gratis
          </a>
        </div>
      </footer>
    </main>
  );
}
