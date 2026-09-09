import Link from "next/link";
import { ebookPagePath } from "@/lib/links";

const legalNavigationLinkClasses =
  "inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-semibold text-yellow-300 underline decoration-yellow-300/50 underline-offset-4 transition hover:text-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0911]";

export function LegalPolicyNavigation() {
  return (
    <nav aria-label="Volver a las páginas principales">
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link className={legalNavigationLinkClasses} href="/">
            Volver al inicio
          </Link>
        </li>
        <li>
          <Link className={legalNavigationLinkClasses} href={ebookPagePath}>
            Ver la guía gratuita
          </Link>
        </li>
      </ul>
    </nav>
  );
}
