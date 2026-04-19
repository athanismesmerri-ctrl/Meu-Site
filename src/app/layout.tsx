import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Athanís Mesmerri — Empresária, Escritora & Parapsicóloga",
  description:
    "Fundadora da Famoors, criadora do MindCodex Method™ e autora de múltiplos livros na Amazon. Integrando ciência, comportamento e espiritualidade para transformar mentes e vidas.",
  openGraph: {
    title: "Athanís Mesmerri — Empresária, Escritora & Parapsicóloga",
    description:
      "Fundadora da Famoors, criadora do MindCodex Method™ e autora de múltiplos livros na Amazon. Integrando ciência, comportamento e espiritualidade para transformar mentes e vidas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${unbounded.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
