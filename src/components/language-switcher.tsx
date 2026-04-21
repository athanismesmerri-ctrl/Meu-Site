"use client";

import { useState, useRef, useEffect } from "react";
import { Language, languageNames } from "@/lib/i18n";
import { useT } from "@/contexts/language-context";

const languages: Language[] = ["pt", "en", "fr", "de"];

export function LanguageSwitcher() {
  const { lang, setLang } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-zinc-400 transition-all hover:border-white/20 hover:text-white"
        aria-label="Select language"
      >
        <span>{languageNames[lang]}</span>
        <svg
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[140px] rounded-xl border border-white/10 bg-black/90 py-1 backdrop-blur-xl shadow-xl">
          {languages.map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={`flex w-full items-center px-4 py-2 text-left text-xs transition-colors hover:bg-white/[0.06] hover:text-white ${
                l === lang ? "text-white" : "text-zinc-400"
              }`}
            >
              {languageNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
