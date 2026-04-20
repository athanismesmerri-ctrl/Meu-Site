"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Language, T, translations } from "@/lib/i18n";

type LanguageContextType = { lang: Language; setLang: (l: Language) => void; t: T };

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  setLang: () => {},
  t: translations["pt"],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language;
    if (saved && translations[saved]) setLangState(saved);
  }, []);

  function setLang(l: Language) {
    setLangState(l);
    localStorage.setItem("lang", l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useT = () => useContext(LanguageContext);
