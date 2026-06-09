import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sing Pronounce Repeat | English with Lyrics",
  description:
    "Aprende inglés con canciones, pronunciación fácil, frases útiles y explicaciones naturales con el método Escríbelo como suena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
