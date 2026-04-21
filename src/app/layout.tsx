import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/contexts/language-context";
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
  title: "Athanís Mesmerri — Autora, Criadora & Empresária",
  description:
    "Escritora, parapsicóloga e fundadora da Famoors. Criadora do Mindcodex Method — obra literária, métodos e projetos entre a mente, a escrita e a transformação humana.",
  openGraph: {
    title: "Athanís Mesmerri — Autora, Criadora & Empresária",
    description:
      "Escritora, parapsicóloga e fundadora da Famoors. Criadora do Mindcodex Method — obra literária, métodos e projetos entre a mente, a escrita e a transformação humana.",
    type: "website",
    siteName: "Athanís Mesmerri",
  },
  keywords: [
    "Athanís Mesmerri",
    "Famoors",
    "Mindcodex Method",
    "escritora",
    "parapsicóloga",
    "desenvolvimento pessoal",
    "hipnose clínica",
    "livros Amazon",
    "transformação humana",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${unbounded.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
