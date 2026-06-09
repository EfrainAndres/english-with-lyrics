import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";

const benefits = [
  {
    title: "Pronunciacion sin simbolos raros",
    text: "Tania escribe el sonido de una forma cercana al espanol para que puedas repetir con mas confianza.",
  },
  {
    title: "Frases utiles, no listas eternas",
    text: "Cada practica se enfoca en un fragmento breve para entender sonido, significado y uso real.",
  },
  {
    title: "Aprende con musica, paso a paso",
    text: "Empiezas con canciones conocidas como motivacion, pero con una guia educativa clara.",
  },
];

const lessonSteps = [
  {
    label: "Escucha",
    title: "Una frase corta",
    text: "Primero identificas un fragmento breve y seguro para practicar.",
  },
  {
    label: "Repite",
    title: "Como suena",
    text: "Lees una guia de pronunciacion pensada para hispanohablantes.",
  },
  {
    label: "Entiende",
    title: "Que quiere decir",
    text: "Ves la traduccion natural y una explicacion simple para recordarla.",
  },
];

const guidePaths = [
  {
    name: "Románticas",
    text: "Frases emocionales, lentas y faciles de repetir.",
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
  "No usa IPA ni simbolos tecnicos.",
  "No promete una transcripcion perfecta.",
  "Sí te ayuda a escuchar, repetir y comparar con el audio real.",
];

function AudioBars() {
  return (
    <div className="flex h-10 items-end gap-1" aria-hidden="true">
      {[18, 28, 14, 36, 22, 32, 16, 26, 38, 20, 30, 14].map((height, index) => (
        <span
          className="w-1.5 rounded-full bg-beat"
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

function MicroLessonCard() {
  return (
    <article className="overflow-hidden rounded-lg border border-ink/10 bg-cream shadow-soft">
      <div className="flex items-center justify-between gap-4 border-b border-ink/10 bg-plum px-5 py-4 text-cream">
        <div>
          <p className="text-xs font-bold uppercase">Micro-leccion con Tania</p>
          <h2 className="mt-1 font-heading text-2xl font-black">
            Escríbelo como suena
          </h2>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral">
          <PlayMarker />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
          <div>
            <p className="text-xs font-bold uppercase text-coral">
              Fragmento seguro
            </p>
            <p className="mt-2 font-heading text-4xl font-black text-ink">
              I found you
            </p>
          </div>
          <AudioBars />
        </div>

        <div className="grid gap-0 border-b border-ink/10 sm:grid-cols-2">
          <div className="py-5 sm:border-r sm:border-ink/10 sm:pr-5">
            <p className="text-xs font-bold uppercase text-teal">Como suena</p>
            <p className="mt-2 text-2xl font-black text-coral">ai fáund yu</p>
          </div>
          <div className="py-5 sm:pl-5">
            <p className="text-xs font-bold uppercase text-teal">En espanol</p>
            <p className="mt-2 text-2xl font-black">Te encontré</p>
          </div>
        </div>

        <div className="grid gap-3 pt-5 sm:grid-cols-3">
          {["Escucha", "Repite", "Entiende"].map((item) => (
            <div
              className="border border-ink/10 bg-paper px-4 py-3 text-center text-sm font-black"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs font-black uppercase text-ink/60">
          Escucha · Repite · Entiende
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="sticky top-0 z-20 border-b border-ink/10 bg-paper/95 px-5 py-3 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="#top" className="font-heading text-lg font-black">
            English with Lyrics
          </a>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-5 text-sm font-bold text-ink/75 md:flex">
              <a href="#demo" className="hover:text-teal focus:text-teal">
                Demo
              </a>
              <a href="#ebook" className="hover:text-teal focus:text-teal">
                Ebook
              </a>
              <a href="#metodo" className="hover:text-teal focus:text-teal">
                Metodo
              </a>
            </div>
            <a
              className="inline-flex min-h-10 items-center rounded-md bg-teal px-4 text-sm font-black text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
              href="#ebook"
            >
              Ebook gratis
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="bg-paper px-5 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-coral/25 bg-coral/10 px-4 py-2 text-sm font-black text-coral">
              Aprende con Tania y canciones
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-black leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              Aprende inglés cantando tus canciones favoritas
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink/80">
              Tania te ayuda a entender, pronunciar y usar frases reales en
              inglés con el método Escríbelo como suena.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#ebook">Quiero mi ebook gratis</CTAButton>
              <CTAButton href="#demo" variant="secondary">
                Ver cómo funciona
              </CTAButton>
            </div>
            <p className="mt-5 max-w-xl text-sm font-bold leading-6 text-ink/60">
              Recibe una guía gratis con 3 canciones para practicar
              pronunciación sin símbolos raros.
            </p>
          </div>

          <MicroLessonCard />
        </div>
      </section>

      <Section
        id="demo"
        eyebrow="Micro-leccion demo"
        title="Una frase pequeña puede desbloquear mejor la escucha."
        intro="La experiencia se siente como una guia de escucha: ves la frase, la forma facil de pronunciarla y la traduccion natural antes de practicar."
      >
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-l-4 border-coral bg-coral/10 p-6">
            <p className="font-heading text-3xl font-black">
              Lees una frase. Tania te muestra como suena. Luego entiendes por
              que significa eso.
            </p>
            <p className="mt-4 leading-8 text-ink/70">
              Este formato usa fragmentos breves con valor educativo. No busca
              reemplazar letras completas ni plataformas oficiales de musica.
            </p>
          </div>
          <MicroLessonCard />
        </div>
      </Section>

      <Section
        tone="cream"
        eyebrow="Beneficios"
        title="Para cuando lees una cosa, pero escuchas otra."
        intro="English with Lyrics habla directo al bloqueo real: entender ingles cantado cuando las palabras se unen, cambian de sonido o no se traducen literal."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article className="border border-ink/10 bg-white p-6" key={benefit.title}>
              <div className="mb-5 h-2 w-20 rounded-full bg-beat" />
              <h3 className="font-heading text-2xl font-black">
                {benefit.title}
              </h3>
              <p className="mt-4 leading-8 text-ink/70">{benefit.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Cómo funciona en 3 pasos"
        intro="La primera experiencia sera corta, clara y medible para validar si el metodo realmente ayuda."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {lessonSteps.map((step, index) => (
            <article
              className="relative border border-ink/10 bg-paper p-6"
              key={step.title}
            >
              <p className="flex h-10 w-10 items-center justify-center rounded-full bg-plum text-sm font-black text-white">
                {index + 1}
              </p>
              <p className="mt-6 text-sm font-black uppercase text-coral">
                {step.label}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-black">
                {step.title}
              </h3>
              <p className="mt-4 leading-8 text-ink/70">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="ebook"
        tone="plum"
        eyebrow="Guia gratis"
        title="Descarga tu guía gratis"
        intro="3 canciones para empezar a entender inglés real, con fragmentos educativos cortos, pronunciación escrita por Tania y explicación natural."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-cream/20 bg-cream p-6 text-ink">
            <p className="text-sm font-black uppercase text-coral">
              English with Lyrics
            </p>
            <h3 className="mt-3 font-heading text-4xl font-black">
              Guía de práctica
            </h3>
            <p className="mt-4 leading-8 text-ink/70">
              Elige el tipo de canciones que mas te motivan y ayudanos a
              validar el primer recurso gratuito.
            </p>
            <div className="mt-6 flex items-end gap-1" aria-hidden="true">
              {[24, 34, 18, 44, 28, 38, 20, 32, 26].map((height, index) => (
                <span
                  className="w-2 rounded-full bg-coral"
                  key={`${height}-${index}`}
                  style={{ height }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {guidePaths.map((path) => (
              <article
                className="flex items-start gap-4 border border-cream/20 bg-white/10 p-5 text-cream"
                key={path.name}
              >
                <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-beat" />
                <div>
                  <h3 className="font-heading text-2xl font-black">
                    {path.name}
                  </h3>
                  <p className="mt-2 leading-7 text-cream/80">{path.text}</p>
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
        tone="cream"
        eyebrow="El metodo"
        title="Escríbelo como suena"
        intro="La idea no es memorizar simbolos. Es acercarte al sonido real con una guia practica para escuchar, repetir y ganar confianza."
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-ink/10 bg-white p-6">
            <p className="text-sm font-black uppercase text-teal">
              Ejemplo seguro
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="border border-ink/10 bg-paper p-4">
                <p className="text-xs font-black uppercase text-ink/60">
                  English
                </p>
                <p className="mt-2 text-2xl font-black">I found you</p>
              </div>
              <div className="border border-coral/25 bg-coral/10 p-4">
                <p className="text-xs font-black uppercase text-coral">
                  Como suena
                </p>
                <p className="mt-2 text-2xl font-black text-coral">
                  ai fáund yu
                </p>
              </div>
              <div className="border border-teal/25 bg-sky p-4">
                <p className="text-xs font-black uppercase text-teal">
                  Espanol
                </p>
                <p className="mt-2 text-2xl font-black">Te encontré</p>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            {methodHighlights.map((item) => (
              <div className="border border-ink/10 bg-paper p-5" key={item}>
                <p className="font-bold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Sé parte del primer grupo"
        intro="Si la guia gratis te ayuda, el siguiente paso sera abrir un grupo pequeno para validar 5 canciones convertidas en 25 micro-lecciones."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            "Ayudanos a elegir las primeras canciones.",
            "Recibe acceso temprano cuando abramos cupos.",
            "Comparte tu nivel y tus mayores bloqueos al escuchar.",
          ].map((item) => (
            <article className="border border-ink/10 bg-cream p-6" key={item}>
              <p className="font-heading text-2xl font-black leading-8">
                {item}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm font-bold leading-6 text-ink/60">
          Todavia no hay pagos activos. La oferta fundadora se definira cuando
          el alcance, precio en COP y condiciones esten claros.
        </p>
      </Section>

      <Section
        id="waitlist"
        tone="paper"
        title="Únete a la lista de espera"
        intro="Deja tus datos para recibir la guia gratis cuando este lista y responder la encuesta de canciones, nivel y formato."
      >
        <div className="border border-ink/10 bg-white p-5 shadow-soft sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-l-4 border-teal pl-5">
              <h3 className="font-heading text-3xl font-black">
                Queremos construir esto con estudiantes reales.
              </h3>
              <p className="mt-4 leading-8 text-ink/70">
                El formulario final se conectara cuando elijamos la herramienta
                de captura. Por ahora, esta area define el flujo visual para la
                lista y la encuesta.
              </p>
              <p className="mt-4 text-sm font-bold text-ink/60">
                Sin spam. Sin pagos en esta fase. Solo validacion y aprendizaje.
              </p>
            </div>

            <form className="grid gap-4" aria-label="Formulario de lista de espera">
              <label className="grid gap-2 text-sm font-bold">
                Nombre
                <input
                  className="min-h-12 rounded-md border border-ink/15 bg-paper px-4 text-base font-normal outline-none transition focus:border-teal focus:ring-2 focus:ring-coral/30"
                  placeholder="Tu nombre"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Email
                <input
                  className="min-h-12 rounded-md border border-ink/15 bg-paper px-4 text-base font-normal outline-none transition focus:border-teal focus:ring-2 focus:ring-coral/30"
                  placeholder="tu@email.com"
                  type="email"
                />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  className="min-h-12 rounded-md bg-teal px-5 py-3 text-sm font-black text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                  type="button"
                >
                  Quiero la guia
                </button>
                <button
                  className="min-h-12 rounded-md border border-ink/15 bg-white px-5 py-3 text-sm font-black text-ink transition hover:border-coral hover:text-coral focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                  type="button"
                >
                  Responder encuesta
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <section className="bg-cream px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl border border-ink/10 bg-paper p-5">
          <h2 className="font-heading text-xl font-black">
            Nota legal y de contenido
          </h2>
          <p className="mt-3 leading-7 text-ink/70">
            English with Lyrics ensena con fragmentos educativos cortos,
            pronunciacion original de Tania, traduccion natural y explicaciones
            transformativas. No publica letras completas ni funciona como
            reemplazo de plataformas oficiales de lyrics, musica o video.
          </p>
        </div>
      </section>

      <footer className="bg-ink px-5 py-8 text-cream sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-xl font-black">
              English with Lyrics
            </p>
            <p className="mt-1 text-sm text-cream/70">
              Creado alrededor del metodo de Tania: Escríbelo como suena.
            </p>
          </div>
          <a
            className="text-sm font-black text-beat hover:text-cream focus:outline-none focus:ring-2 focus:ring-beat focus:ring-offset-2 focus:ring-offset-ink"
            href="#ebook"
          >
            Quiero mi ebook gratis
          </a>
        </div>
      </footer>
    </main>
  );
}
