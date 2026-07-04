"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "sq" | "en";
interface LangCtx { lang: Lang; setLang: (l: Lang) => void; t: (sq: string, en: string) => string; }

const LangContext = createContext<LangCtx>({ lang: "en", setLang: () => {}, t: (_, en) => en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (sq: string, en: string) => lang === "sq" ? sq : en;
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

export const LANG_OPTIONS = [
  { code: "en" as const, label: "EN" },
  { code: "sq" as const, label: "AL" },
];
