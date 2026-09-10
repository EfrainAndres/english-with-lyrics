import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import {
  dataProcessingPath,
  ebookPagePath,
  privacyPath,
} from "@/lib/links";

const publicPrivacyContactHref = "mailto:privacidad@singpronuncerepeat.com";
const footerLinkClasses =
  "inline-flex min-h-11 items-center py-2 text-cream transition hover:text-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export function SiteFooter({
  context = "default",
}: {
  context?: "default" | "guide-ready";
}) {
  const guideIsReady = context === "guide-ready";

  return (
    <footer className="bg-ink px-5 py-8 text-paper sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 border-t border-white/10 pt-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div className="min-w-0">
          <BrandLogo />
          <p className="mt-1 text-sm text-soft">
            English with Lyrics es el nombre complementario de esta propuesta
            educativa. Método: Escríbelo como suena.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-soft">
            {guideIsReady
              ? "Tu guía ya está disponible. Puedes volver a consultar qué incluye y usar estos enlaces para privacidad o derechos sobre tus datos."
              : "Recurso educativo con fragmentos cortos: no incluye letras completas. Conoce la guía gratuita y el método antes de registrarte."}
          </p>
        </div>

        <nav aria-label="Privacidad, derechos y guía">
          <ul className="flex flex-col gap-3 text-sm font-black sm:items-end">
            <li>
              <Link
                className={footerLinkClasses}
                href={privacyPath}
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link
                className={footerLinkClasses}
                href={dataProcessingPath}
              >
                Tratamiento de datos personales
              </Link>
            </li>
            <li>
              <a
                className={footerLinkClasses}
                href={publicPrivacyContactHref}
              >
                Canal para privacidad y derechos
              </a>
            </li>
            <li>
              <Link
                className={footerLinkClasses}
                href={ebookPagePath}
              >
                {guideIsReady
                  ? "Ver qué incluye la guía"
                  : "Conocer la guía gratuita"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
