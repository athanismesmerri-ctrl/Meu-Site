"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "9+", label: "livros publicados na Amazon" },
  { value: "2", label: "canais no YouTube" },
  { value: "3", label: "empreendimentos fundados" },
  { value: "5+", label: "anos em hipnose clínica e parapsicologia" },
];

const highlights = [
  {
    title: "mindcodex method™",
    description:
      "sistema exclusivo que integra neurociência, hipnose clínica e parapsicologia para reprogramar padrões mentais inconscientes e promover transformação duradoura.",
  },
  {
    title: "famoors & neurovyn",
    description:
      "fundadora da famoors e cofundadora do neurovyn — empreendimentos que desenvolvem soluções inovadoras em produtos digitais, desenvolvimento pessoal e terapias energéticas.",
  },
  {
    title: "formação multidisciplinar",
    description:
      "hipnose clínica, neurociência, parapsicologia e diversas abordagens terapêuticas. idealizadora do institut pathé na europa. autora de ficção e não-ficção em dois idiomas.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ResultsSection() {
  return (
    <section id="results" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-500"
        >
          resultados
        </motion.p>

        {/* Stats grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-lg font-medium">{h.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {h.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
