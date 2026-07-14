import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LegalSection } from "@/lib/legal-content";
import { ebookPagePath } from "@/lib/links";

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
    />
  );
}

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  notice: ReactNode;
  sections: LegalSection[];
};

export function LegalPageLayout({
  eyebrow,
  title,
  description,
  notice,
  sections,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <nav className="border-b border-white/15 bg-ink px-5 py-3 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
            href="/"
          >
            <BrandLogo className="shrink-0" height="clamp(3.25rem, 6vw, 5rem)" />
          </Link>
          <Link
            className="text-sm font-black text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
            href="/"
          >
            Volver al inicio
          </Link>
        </div>
      </nav>

      <section className="bg-ink px-5 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-purple/35 bg-purple/10 px-4 py-2 text-sm font-black text-purple">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-4xl font-black leading-[1.05] text-paper sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-soft">{description}</p>
          {notice ? <div className="mt-6">{notice}</div> : null}
        </div>
      </section>

      {sections.length > 0 ? (
        <section className="bg-night px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="font-heading text-2xl font-black text-paper">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p className="mt-3 leading-8 text-soft" key={index}>
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-soft">
                    {section.list.map((item, index) => (
                      <li className="leading-7" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="bg-night px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <Link
              className="text-sm font-black text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href={ebookPagePath}
            >
              Descargar la guía gratis mientras tanto
            </Link>
          </div>
        </section>
      )}

      <footer className="bg-ink px-5 py-8 text-paper sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <BrandLogo className="shrink-0" height="4rem" />
            <p className="text-sm text-soft">Método Escríbelo como suena.</p>
          </div>
          <div className="flex items-center gap-4 text-sm font-black">
            <Link
              className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href="/privacidad"
            >
              Privacidad
            </Link>
            <Link
              className="text-cream transition hover:text-pink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
              href="/tratamiento-de-datos"
            >
              Tratamiento de datos
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
