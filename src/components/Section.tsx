import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "light" | "paper" | "cream" | "plum" | "ink";
};

const toneClasses = {
  light: "bg-white",
  paper: "bg-paper",
  cream: "bg-cream",
  plum: "bg-plum text-cream",
  ink: "bg-ink text-cream",
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "light",
}: SectionProps) {
  return (
    <section id={id} className={`${toneClasses[tone]} px-5 py-14 sm:px-8 lg:py-20`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-bold uppercase text-coral">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 text-lg leading-8 text-inherit opacity-80">{intro}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
