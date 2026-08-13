import Link from "next/link";
import {
  dataProcessingPath,
  ebookDownloadFilename,
  ebookDownloadPath,
  privacyPath,
} from "@/lib/links";

const publicPrivacyContactHref = "mailto:privacidad@singpronuncerepeat.com";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-8 text-paper sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 border-t border-white/10 pt-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div className="min-w-0">
          <p className="font-heading text-xl font-black">
            Sing Pronunce Repeat
          </p>
          <p className="mt-1 text-sm text-soft">
            English with Lyrics · Método Escríbelo como suena.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-soft">
            Recurso educativo con fragmentos cortos: no incluye letras completas.
            El PDF sigue disponible de forma independiente, sin registro.
          </p>
        </div>

        <nav aria-label="Enlaces de confianza y contacto">
          <ul className="flex flex-col gap-3 text-sm font-black sm:items-end">
            <li>
              <Link
                className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
                href={privacyPath}
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link
                className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
                href={dataProcessingPath}
              >
                Tratamiento de datos personales
              </Link>
            </li>
            <li>
              <a
                className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
                href={publicPrivacyContactHref}
              >
                Contacto de privacidad
              </a>
            </li>
            <li>
              <a
                className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
                download={ebookDownloadFilename}
                href={ebookDownloadPath}
              >
                Abrir guía gratuita en PDF
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
