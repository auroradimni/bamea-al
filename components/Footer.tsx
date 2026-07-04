"use client";
import { useLang } from "@/context/LanguageContext";
import Logo from "@/components/Logo";

const EMAIL = "bameatech@gmail.com";
const INSTAGRAM = "https://instagram.com/bamea.al";

const socials = [
  { label: "Instagram", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white/70 fill-none stroke-[1.8]"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="fill-white/70 stroke-none"/></svg>, href: INSTAGRAM },
  { label: "Email", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white/70 fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, href: `mailto:${EMAIL}` },
];

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[var(--dark,#0D1B1E)] text-white/60 pt-16 pb-8 px-6 md:px-[5vw]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-12 border-b border-white/8">
        <div className="col-span-2 md:col-span-1">
          <a href="/" className="inline-block mb-4 no-underline">
            <Logo variant="dark" showTagline className="h-[58px] w-auto" />
          </a>
        </div>

        <div>
          <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">{t("LIDHJE", "LINKS")}</h4>
          <ul className="space-y-2.5">
            {[
              { href:"#", sq:"Home", en:"Home" },
              { href:"#projektet", sq:"Projekte", en:"Projects" },
              { href:"#sherbimet", sq:"Shërbime", en:"Services" },
            ].map(l => (
              <li key={l.sq}><a href={l.href} className="text-white/55 text-sm hover:text-white transition-colors no-underline">{t(l.sq,l.en)}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">{t("RRETH NESH","ABOUT")}</h4>
          <ul className="space-y-2.5">
            {[
              { href:"#rreth-nesh", sq:"Rreth nesh", en:"About us" },
              { href:"#reviews", sq:"Vlerësimet", en:"Reviews" },
              { href:"#kontakt", sq:"Kontakt", en:"Contact" },
            ].map(l => (
              <li key={l.sq}><a href={l.href} className="text-white/55 text-sm hover:text-white transition-colors no-underline">{t(l.sq,l.en)}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">{t("LIGJORE", "LEGAL")}</h4>
          <ul className="space-y-2.5">
            {[
              { sq:"Politika e privatësisë", en:"Privacy Policy" },
              { sq:"Kushtet e përdorimit", en:"Terms of Use" },
            ].map(l => (
              <li key={l.sq}><a href="#" className="text-white/55 text-sm hover:text-white transition-colors no-underline">{t(l.sq,l.en)}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-xs">
        <span>{t("© 2024 Bamea. Të gjitha të drejtat e rezervuara.", "© 2024 Bamea. All rights reserved.")}</span>
        <div className="flex gap-3">
          {socials.map(s => (
            <a key={s.label} href={s.href} aria-label={s.label}
              className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center hover:bg-[var(--teal)] transition-colors no-underline">
              {s.icon}
            </a>
          ))}
        </div>
        <a href="https://bamea.al" className="text-white/30 hover:text-white/60 transition-colors no-underline">bamea.al</a>
      </div>
    </footer>
  );
}
