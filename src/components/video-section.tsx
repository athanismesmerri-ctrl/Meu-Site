"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const VIDEO_URL = "https://www.youtube.com/watch?v=ZyYAmmCXbPo";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function VideoSection() {
  return (
    <section id="watch" className="py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="mx-auto max-w-4xl px-6"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-500"
        >
          Assista
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl text-zinc-300 md:text-2xl"
        >
          Compartilho conteúdo sobre mente, transformação e espiritualidade no{" "}
          <Link
            href="https://www.youtube.com/@athanismesmerri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            YouTube
          </Link>
          .
        </motion.p>

        {/* Vídeo com overlay de hover (desktop) */}
        <motion.div variants={fadeUp} className="mt-10">
          <Link
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
            >
              <source src="/video de apresentação athanis e famoors.mp4" type="video/mp4" />
            </video>

            {/* Overlay desktop — visível apenas no hover */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 transition-all duration-500 group-hover:bg-black/50">
              <span className="flex items-center gap-3 rounded-2xl border border-white/20 bg-black/60 px-6 py-3 text-lg font-medium tracking-tight opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 md:text-xl">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-red-500">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Assista no YouTube
              </span>
            </div>
          </Link>

          {/* Botão visível em mobile (sem hover) */}
          <div className="mt-4 flex justify-center md:hidden">
            <Link
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-red-500">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Assista no YouTube
            </Link>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-center text-zinc-500"
        >
          Inscreva-se para conteúdo semanal sobre mente, hipnose, espiritualidade e transformação.
        </motion.p>
      </motion.div>
    </section>
  );
}
