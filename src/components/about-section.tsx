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
          Quem sou eu
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Eu sou <strong className="text-white">Athanís Mesmerri</strong>, empresária, empreendedora digital, escritora, parapsicóloga e fundadora/CEO da{" "}
          <Link
            href="https://www.famoors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            Famoors
          </Link>
          .
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Meus negócios são produtos digitais, desenvolvimento pessoal, terapias energéticas e projetos editoriais, incluindo livros e materiais práticos.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Sou criadora do{" "}
          <Link
            href="https://a.co/d/03oLia9H"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            Mindcodex Method
          </Link>{" "}
          e autora de múltiplos livros publicados na Amazon, abrangendo desenvolvimento pessoal, romance e ficção científica baseada em fatos reais.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Tenho experiência em hipnose clínica, neurociência, parapsicologia e diversas abordagens terapêuticas. Sou idealizadora do Institut Pathé na Europa e, em parceria com a Famoors, cofundadora do NeuroVyn.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Minha jornada explora os mistérios da mente humana, integrando ciência, comportamento e espiritualidade para promover bem-estar, transformação profunda e crescimento pessoal e empresarial.
        </motion.p>
      </motion.div>
    </section>
  );
}
