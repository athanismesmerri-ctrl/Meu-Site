"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useT } from "@/contexts/language-context";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function AboutSection() {
  const { t } = useT();

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
          {t.about.title}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          {t.about.p1}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          {t.about.p2Pre}
          <Link
            href="https://www.famoors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            Famoors
          </Link>
          {t.about.p2Post}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          {t.about.p3}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          {t.about.p4Pre}
          <Link
            href="https://www.mindcodexmethod.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            Mindcodex Method
          </Link>
          {t.about.p4Post}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          {t.about.p5}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          {t.about.p6}
        </motion.p>
      </motion.div>
    </section>
  );
}
