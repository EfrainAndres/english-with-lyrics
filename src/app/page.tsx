import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";

const steps = [
  {
    title: "Escucha un fragmento corto",
    text: "La practica empieza con una parte breve y educativa de una cancion, no con la letra completa.",
  },
  {
    title: "Pronuncia con guia clara",
    text: "Tania lo escribe como suena para una persona hispanohablante, sin simbolos IPA.",
  },
  {
    title: "Entiende la frase",
    text: "Aprendes una traduccion natural, el sentido real y una idea util para reconocerla despues.",
  },
  {
    title: "Practica en micro-lecciones",
    text: "Cada leccion termina con una pregunta corta para validar comprension y confianza.",
  },
];

const methodPoints = [
  "Pronunciacion escrita de forma familiar para hispanohablantes.",
  "Explicaciones naturales en espanol, sin convertirlo en clase pesada.",
  "Practica de escucha con frases utiles y faciles de repetir.",
];

const validationStats = [
  { value: "3", label: "canciones para el ebook gratis" },
  { value: "5", label: "canciones para validar el MVP" },
  { value: "25", label: "micro-lecciones propuestas" },
];

export default function Home() {
  return (
    <main>
      <nav className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 px-5 py-3 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="#top" className="text-base font-black">
            English with Lyrics
          </a>
          <div className="hidden items-center gap-5 text-sm font-semibold text-ink/75 sm:flex">
            <a href="#metodo" className="hover:text-lagoon">
              Metodo
            </a>
            <a href="#ebook" className="hover:text-lagoon">
              Ebook
            </a>
            <a href="#waitlist" className="hover:text-lagoon">
              Waitlist
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase text-coral">
              Aprende con Tania
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black text-ink sm:text-6xl lg:text-7xl">
              English with Lyrics
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink/78">
              Aprende ingles con canciones, pronunciacion facil, frases utiles
              y explicaciones naturales en espanol.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#waitlist">Unirme a la lista</CTAButton>
              <CTAButton href="#ebook" variant="secondary">
                Quiero el ebook gratis
              </CTAButton>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-ink/65">
              Fase 0: estamos validando el interes antes de construir la
              plataforma completa.
            </p>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white shadow-soft">
            <div className="bg-lagoon px-5 py-4 text-white">
              <p className="text-sm font-bold uppercase text-white/75">
                Micro-leccion
              </p>
              <h2 className="mt-2 text-2xl font-black">
                Escríbelo como suena
              </h2>
            </div>
            <div className="divide-y divide-ink/10 bg-paper">
              <div className="p-5">
                <p className="text-xs font-bold uppercase text-coral">
                  Fragmento educativo
                </p>
                <p className="mt-2 text-lg font-black">
                  Frase corta seleccionada por Tania
                </p>
              </div>
              <div className="grid sm:grid-cols-2">
                <div className="p-5 sm:border-r sm:border-ink/10">
                  <p className="text-sm font-bold text-lagoon">Como suena</p>
                  <p className="mt-2 text-ink/75">
                    Guia simple, sin IPA, pensada para hispanohablantes.
                  </p>
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold text-coral">
                    Que significa
                  </p>
                  <p className="mt-2 text-ink/75">
                    Traduccion natural y explicacion del uso real.
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-bold">Pregunta rapida</p>
                <p className="mt-2 text-ink/72">
                  Escoge el sentido correcto de la frase y refuerza lo que
                  acabas de escuchar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Por que importa"
        title="La musica motiva, pero escuchar ingles real puede sentirse imposible."
        intro="Muchas personas hispanohablantes reconocen palabras sueltas, pero se pierden cuando la pronunciacion cambia, las frases se conectan o la traduccion literal no funciona."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "La pronunciacion escrita en cursos tradicionales suele ser demasiado tecnica.",
            "Las letras por si solas no explican sonido, intencion ni uso natural.",
            "Los estudiantes necesitan practica corta, clara y repetible para ganar confianza.",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-ink/10 bg-paper p-6">
              <p className="text-lg font-bold leading-7">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="metodo"
        tone="paper"
        eyebrow="El metodo"
        title="Escríbelo como suena"
        intro="Tania convierte sonidos dificiles del ingles en una guia simple para leer, repetir y comparar con el audio oficial."
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-ink p-6 text-white">
            <p className="text-sm font-bold uppercase text-sunshine">
              Sin IPA
            </p>
            <p className="mt-4 text-2xl font-black leading-9">
              No buscamos una transcripcion perfecta. Buscamos que el
              estudiante se atreva a escuchar, repetir y entender mejor.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {methodPoints.map((point) => (
              <div key={point} className="rounded-lg bg-white p-5">
                <p className="text-base font-bold leading-7">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Como funciona"
        intro="La primera version esta pensada para validar el aprendizaje con una experiencia corta, medible y facil de mejorar."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-ink/10 p-6">
              <p className="flex h-10 w-10 items-center justify-center rounded-full bg-sunshine text-sm font-black">
                {index + 1}
              </p>
              <h3 className="mt-5 text-xl font-black">{step.title}</h3>
              <p className="mt-3 leading-7 text-ink/72">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="ebook"
        tone="ink"
        eyebrow="Lead magnet"
        title="Ebook gratis con 3 canciones"
        intro="Antes del MVP completo, validaremos un recurso gratuito con tres canciones seleccionadas y fragmentos educativos breves."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {validationStats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white/10 p-6">
              <p className="text-5xl font-black text-sunshine">{stat.value}</p>
              <p className="mt-3 text-lg font-bold text-white/86">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CTAButton href="#waitlist" variant="light">
            Avisarme cuando salga
          </CTAButton>
        </div>
      </Section>

      <Section
        title="Founder access"
        intro="La oferta fundadora servira para medir si las personas quieren pagar por una primera version guiada antes de construir una plataforma grande."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-lg border border-ink/10 bg-paper p-6">
            <h3 className="text-2xl font-black">Primera propuesta</h3>
            <p className="mt-4 leading-8 text-ink/72">
              Acceso temprano a 5 canciones convertidas en 25 micro-lecciones,
              con practica de pronunciacion, explicaciones naturales, quizzes
              cortos y progreso simple.
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-6">
            <h3 className="text-2xl font-black">Todavia no hay pagos</h3>
            <p className="mt-4 leading-8 text-ink/72">
              En esta fase solo validamos interes. Los pagos reales en COP se
              agregaran mas adelante, cuando el alcance, precio y condiciones
              esten definidos.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="waitlist"
        tone="paper"
        title="Unete a la validacion"
        intro="Deja tu interes en la lista o responde la encuesta cuando este disponible. Tus respuestas ayudaran a elegir canciones, nivel, precio y formato."
      >
        <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h3 className="text-2xl font-black">Waitlist y encuesta</h3>
              <p className="mt-4 leading-8 text-ink/72">
                La integracion final del formulario se agregara cuando se elija
                la herramienta de captura para Phase 0. Por ahora, esta pagina
                establece el mensaje y las llamadas a la accion.
              </p>
            </div>
            <form className="grid gap-4" aria-label="Formulario de interes">
              <label className="grid gap-2 text-sm font-bold">
                Nombre
                <input
                  className="min-h-12 rounded-md border border-ink/15 px-4 text-base font-normal outline-none focus:border-lagoon"
                  placeholder="Tu nombre"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Email
                <input
                  className="min-h-12 rounded-md border border-ink/15 px-4 text-base font-normal outline-none focus:border-lagoon"
                  placeholder="tu@email.com"
                  type="email"
                />
              </label>
              <button
                className="min-h-12 rounded-md bg-lagoon px-5 py-3 text-sm font-bold text-white opacity-80"
                type="button"
              >
                Quiero entrar a la lista
              </button>
            </form>
          </div>
        </div>
      </Section>

      <section className="bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-lg border border-coral/25 bg-coral/5 p-6">
          <h2 className="text-xl font-black">Nota legal y de contenido</h2>
          <p className="mt-3 leading-8 text-ink/75">
            English with Lyrics ensena con fragmentos educativos cortos,
            pronunciacion original de Tania, traduccion natural y explicaciones
            transformativas. No publica letras completas ni funciona como
            reemplazo de plataformas oficiales de lyrics, musica o video.
          </p>
        </div>
      </section>

      <footer className="bg-ink px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black">English with Lyrics</p>
          <p className="text-sm text-white/68">
            Creado alrededor del metodo de Tania: Escríbelo como suena.
          </p>
        </div>
      </footer>
    </main>
  );
}
