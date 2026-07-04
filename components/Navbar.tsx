"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang, LANG_OPTIONS } from "@/context/LanguageContext";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", labelSq: "HOME",       labelEn: "HOME" },
  { href: "/#projektet", labelSq: "PROJEKTE",  labelEn: "PROJECTS" },
  { href: "/#sherbimet", labelSq: "SHËRBIMET", labelEn: "SERVICES" },
  { href: "/#kalkulatori", labelSq: "ÇMIMET", labelEn: "PRICING" },
  { href: "/#rreth-nesh",labelSq: "RRETH NESH",labelEn: "ABOUT US" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="/" className="flex items-center no-underline shrink-0">
          <Logo variant="light" showTagline className="h-[52px] w-auto hidden sm:block" />
          <Logo variant="light" showTagline={false} className="h-10 w-auto sm:hidden" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-xs font-semibold text-[var(--mid)] uppercase tracking-wide hover:text-[var(--teal)] transition-colors no-underline">
                {t(l.labelSq, l.labelEn)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-1.5">
            {LANG_OPTIONS.map(({ code, label }) => (
              <button key={code} onClick={() => setLang(code)}
                className={`px-2.5 py-1 text-xs font-bold rounded-md border transition-all cursor-pointer ${
                  lang === code ? "bg-[var(--teal)] text-white border-[var(--teal)]" : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
                }`}>
                {label}
              </button>
            ))}
          </div>
          <a href="/#kontakt" className="bg-[var(--teal)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--teal-light)] transition-colors no-underline">
            {t("Na Kontakto", "Contact Us")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-semibold text-[var(--mid)] uppercase tracking-wide hover:text-[var(--teal)] no-underline">
              {t(l.labelSq, l.labelEn)}
            </a>
          ))}
          <div className="flex gap-2 pt-2 border-t border-[var(--border)]">
            {LANG_OPTIONS.map(({ code, label }) => (
              <button key={code} onClick={() => setLang(code)}
                className={`px-3 py-1.5 text-xs font-bold rounded-md border cursor-pointer transition-all ${
                  lang === code ? "bg-[var(--teal)] text-white border-[var(--teal)]" : "border-[var(--border)] text-[var(--muted)]"
                }`}>
                {label}
              </button>
            ))}
          </div>
          <a href="/#kontakt" onClick={() => setOpen(false)}
            className="bg-[var(--teal)] text-white text-center px-5 py-2.5 rounded-lg text-sm font-semibold no-underline">
            {t("Na Kontakto", "Contact Us")}
          </a>
        </div>
      )}
    </nav>
  );
}
