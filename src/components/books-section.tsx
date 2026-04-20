"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const books = [
  {
    title: "MindCodex Method™",
    category: "Desenvolvimento Pessoal",
    href: "https://a.co/d/03oLia9H",
  },
  {
    title: "Você Acha Que Escolhe. Mas Repete.",
    category: "Desenvolvimento Pessoal",
    href: "https://a.co/d/0g2sZYkV",
  },
  {
    title: "Por Detrás dos Seus Olhos",
    category: "Romance",
    href: "https://a.co/d/0izNoT4w",
  },
  {
    title: "O Estelionatário",
    category: "Romance baseado em fatos reais",
    href: "https://a.co/d/0jcfDYis",
  },
  {
    title: "The Con Artist",
    category: "Romance baseado em fatos reais",
    href: "https://a.co/d/0c2PVxkP",
  },
  {
    title: "A Cartógrafa dos Véus",
    category: "Ficção Científica",
    href: "https://a.co/d/08CWg0VW",
  },
  {
    title: "The Cartographer of Veils",
    category: "Ficção Científica",
    href: "https://a.co/d/08BYjPhP",
  },
  {
    title: "Fragmentos de Eternidade",
    category: "Poemas metafísicos e políticos que atravessam a alma e inquietam a consciência",
    href: "https://a.co/d/08WQ0HnV",
  },
  {
    title: "Fragments of Eternity",
    category: "Metaphysical and political poems that stir the soul and disturb the conscience",
    href: "https://a.co/d/0dKIa5uX",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function BooksSection() {
  return (
    <section id="livros" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-500"
        >
          Livros Publicados
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-xl text-zinc-300 md:text-2xl"
        >
          Disponíveis na Amazon em português e inglês — desenvolvimento pessoal, romance e ficção científica baseada em fatos reais.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
          className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {books.map((book) => (
            <motion.div key={book.title} variants={fadeUp}>
              <Link
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="text-xs uppercase tracking-widest text-zinc-600 group-hover:text-zinc-500">
                  {book.category}
                </span>
                <span className="mt-3 flex-1 text-base font-medium leading-snug text-zinc-200 group-hover:text-white">
                  {book.title}
                </span>
                <span className="mt-4 text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  Ver na Amazon →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
