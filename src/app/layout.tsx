import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sing Pronounce Repeat | English with Lyrics",
  description:
    "Aprende ingles con canciones, pronunciacion facil, frases utiles y explicaciones naturales con el metodo Escríbelo como suena.",
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
