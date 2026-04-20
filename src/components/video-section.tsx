"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useT } from "@/contexts/language-context";

const VIDEO_URL = "https://www.youtube.com/watch?v=ZyYAmmCXbPo";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function VideoSection() {
  const { t } = useT();

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
          {t.video.title}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl text-zinc-300 md:text-2xl"
        >
          {t.video.textBefore}
          <Link
            href="https://www.youtube.com/@athanismesmerri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            YouTube
          </Link>
          {t.video.textAfter}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
            <video
              controls
              playsInline
              className="w-full"
            >
              <source src="/video de apresentação athanis e famoors.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="mt-5 flex justify-center">
            <Link
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-red-500">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              {t.video.watchBtn}
            </Link>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-center text-zinc-500"
        >
          {t.video.subscribe}
        </motion.p>
      </motion.div>
    </section>
  );
}
