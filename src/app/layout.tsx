import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { productionOrigin } from "@/lib/links";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(productionOrigin),
  applicationName: "Sing Pronunce Repeat",
  title: {
    default: "Sing Pronunce Repeat | English with Lyrics",
    template: "%s | Sing Pronunce Repeat",
  },
  description:
    "Aprende inglés con canciones, pronunciación fácil, frases útiles y explicaciones naturales con el método Escríbelo como suena.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sing Pronunce Repeat | English with Lyrics",
    description:
      "Aprende inglés con canciones, pronunciación fácil, frases útiles y explicaciones naturales con el método Escríbelo como suena.",
    url: "/",
    siteName: "Sing Pronunce Repeat",
    type: "website",
    locale: "es_CO",
  },
  icons: {
    icon: [
      { url: "/brand/favicon.png", type: "image/png" },
      { url: "/brand/faviconx48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/brand/favicon.png",
    apple: "/brand/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
