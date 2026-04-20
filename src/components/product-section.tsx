"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useT } from "@/contexts/language-context";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ProductSection() {
  const { t } = useT();

  return (
    <section id="produto" className="py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="mx-auto max-w-3xl px-6"
      >
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-zinc-500">
          {t.product.sectionTitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
        >
          <p className="text-xs uppercase tracking-widest text-zinc-600">
            {t.product.badge}
          </p>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-white md:text-3xl">
            {t.product.name}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            {t.product.desc}
          </p>
          <div className="mt-8">
            <Link
              href="https://pay.hotmart.com/V103230211H?bid=1776617870922"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              {t.product.cta}
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
