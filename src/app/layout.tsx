import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English with Lyrics",
  description:
    "Aprende ingles con canciones, pronunciacion facil, frases utiles y explicaciones naturales de Tania.",
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
