"use client";

import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { useLang, LANG_OPTIONS } from "@/context/LanguageContext";
import Logo from "@/components/Logo";

const EMAIL = "info@bamea.al";
const EMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const INSTAGRAM = "https://instagram.com/bamea.al";

const navLinks = [
  { href: "/", labelSq: "HOME", labelEn: "HOME", menuSq: "Home", menuEn: "Home" },
  { href: "/#projektet", labelSq: "PROJEKTE", labelEn: "PROJECTS", menuSq: "Projektet", menuEn: "Projects" },
  { href: "/#sherbimet", labelSq: "SHËRBIMET", labelEn: "SERVICES", menuSq: "Shërbimet", menuEn: "Services" },
  { href: "/#kalkulatori", labelSq: "ÇMIMET", labelEn: "PRICING", menuSq: "Çmimet", menuEn: "Pricing" },
  { href: "/#rreth-nesh", labelSq: "RRETH NESH", labelEn: "ABOUT US", menuSq: "Rreth nesh", menuEn: "About us" },
];

const socials = [
  {
    label: "Instagram",
    href: INSTAGRAM,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1.8]">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: EMAIL_HREF,
    icon: <Mail size={20} strokeWidth={1.75} />,
  },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[64px] md:h-[72px]">
          <a href="/" className="flex items-center no-underline shrink-0">
            <Logo variant="light" showTagline className="h-[52px] w-auto hidden sm:block" />
            <Logo variant="light" showTagline={false} className="h-10 w-auto sm:hidden" />
          </a>

          <ul className="hidden md:flex gap-8 list-none">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs font-semibold text-[var(--mid)] uppercase tracking-wide hover:text-[var(--teal)] transition-colors no-underline"
                >
                  {t(l.labelSq, l.labelEn)}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex gap-1.5">
              {LANG_OPTIONS.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md border transition-all cursor-pointer ${
                    lang === code
                      ? "bg-[var(--teal)] text-white border-[var(--teal)]"
                      : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <a
              href="/#kontakt"
              className="bg-[var(--teal)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--teal-light)] transition-colors no-underline"
            >
              {t("Na Kontakto", "Contact Us")}
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-[var(--dark)] cursor-pointer"
            onClick={() => setOpen(true)}
            aria-label={t("Hap menunë", "Open menu")}
            aria-expanded={open}
          >
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-[100] md:hidden bg-[var(--dark,#0D1B1E)] flex flex-col animate-[fadeIn_0.2s_ease]"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-5 h-[64px] shrink-0">
            <a href="/" onClick={close} className="no-underline">
              <Logo variant="dark" showTagline={false} className="h-9 w-auto" />
            </a>
            <button
              type="button"
              onClick={close}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white cursor-pointer"
              aria-label={t("Mbyll menunë", "Close menu")}
            >
              <X size={20} strokeWidth={1.75} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-evenly px-8 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-[1.15rem] font-medium text-white/90 hover:text-[var(--teal-light)] active:text-[var(--teal-light)] transition-colors no-underline"
              >
                {t(l.menuSq, l.menuEn)}
              </a>
            ))}
          </nav>

          <div className="px-6 pb-10 pt-6 border-t border-white/10 shrink-0">
            <div className="flex items-center justify-center gap-2 mb-6">
              {LANG_OPTIONS.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    lang === code
                      ? "bg-[var(--teal)] text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  onClick={close}
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-[var(--teal)] hover:text-white transition-colors no-underline"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
