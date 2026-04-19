"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="mx-auto max-w-3xl px-6"
      >
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-zinc-500">
          o que eu faço
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          fundei a{" "}
          <Link
            href="https://www.instagram.com/famoors/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            famoors
          </Link>
          , onde criamos produtos digitais, terapias energéticas e projetos editoriais para promover transformação profunda e crescimento pessoal.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          sou criadora do{" "}
          <Link
            href="https://a.co/d/03oLia9H"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            mindcodex method™
          </Link>
          , um sistema que integra neurociência, hipnose clínica e parapsicologia para reprogramar padrões mentais.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          cofundei o neurovyn e idealizei o institut pathé na europa. escrevo livros publicados na amazon em português e inglês — do desenvolvimento pessoal à ficção científica.
        </motion.p>
      </motion.div>
    </section>
  );
}
