"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useT } from "@/contexts/language-context";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function NewsletterSection() {
  const { t } = useT();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="mx-auto max-w-3xl px-6"
      >
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-zinc-500">
          {t.newsletter.sectionTitle}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mt-6 text-2xl font-medium tracking-tight text-white md:text-3xl"
        >
          {t.newsletter.headline}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          {t.newsletter.desc}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          {submitted ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-10 text-center">
              <p className="text-lg font-medium text-white">{t.newsletter.successTitle}</p>
              <p className="mt-2 text-zinc-400">{t.newsletter.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                required
                placeholder={t.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-white/20 focus:bg-white/[0.06]"
              />
              <button
                type="submit"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 shrink-0"
              >
                {t.newsletter.cta}
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-zinc-600">{t.newsletter.privacy}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function NewsletterFooter() {
  const { t } = useT();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <div className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-3xl px-6">
        {submitted ? (
          <p className="text-center text-sm text-zinc-500">{t.newsletter.footerSuccess}</p>
        ) : (
          <>
            <p className="mb-4 text-center text-sm text-zinc-500">{t.newsletter.footerText}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                required
                placeholder={t.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-white/20 sm:w-64"
              />
              <button
                type="submit"
                className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white"
              >
                {t.newsletter.footerCta}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
