"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useT } from "@/contexts/language-context";

const statValues = ["9+", "2", "3", "5+"];

const highlightLinks = [
  [
    { label: "site", href: "https://www.mindcodexmethod.com" },
    { label: "book", href: "https://a.co/d/03oLia9H" },
    { label: "video", href: "https://www.youtube.com/watch?v=dr9qsrd5GQU&t=43s" },
  ],
  [],
  [],
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ResultsSection() {
  const { t } = useT();

  const highlights = [
    { title: "MindCodex Method™", desc: t.results.mindcodexDesc, links: highlightLinks[0] },
    { title: t.results.famoors.title, desc: t.results.famoors.desc, links: highlightLinks[1] },
    ...(t.results.formation.title ? [{ title: t.results.formation.title, desc: t.results.formation.desc, links: [] as typeof highlightLinks[0] }] : []),
  ];

  const mindcodexLinkLabels: Record<string, string> = {
    site: t.results.mindcodexLinks.site,
    book: t.results.mindcodexLinks.book,
    video: t.results.mindcodexLinks.video,
  };

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
          {t.results.title}
        </motion.p>

        {/* Stats grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {statValues.map((val, i) => (
            <motion.div key={i} variants={fadeUp}>
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">{val}</p>
              <p className="mt-2 text-sm text-zinc-500">{t.results.statLabels[i]}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          className={`mt-16 grid gap-6 ${highlights.length === 2 ? 'md:grid-cols-2 max-w-2xl' : 'md:grid-cols-3'}`}
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-lg font-medium">{h.title}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{h.desc}</p>
              {h.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {h.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-white/20 hover:text-white"
                    >
                      {mindcodexLinkLabels[link.label]}
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3">
                        <path d="M2 10L10 2M10 2H5M10 2v5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
