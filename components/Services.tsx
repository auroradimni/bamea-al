"use client";
import { useLang } from "@/context/LanguageContext";

const services = [
  {
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    title: "Web Design",
    sq: "Dizajnojmë faqe moderne, të pastra dhe të fokusuara te përvoja dhe përdoruesit.",
    en: "We design modern, clean websites focused on user experience and conversions.",
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: "Web Development",
    sq: "Programojmë faqe të shpejta, të sigurta dhe të skalueshme me teknologji moderne.",
    en: "We develop fast, secure and scalable websites using modern technologies.",
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
    title: "Branding",
    sq: "Ndërtojmë identitete vizuale që dallohen dhe mbeten të paharrueshme.",
    en: "We build visual identities that stand out and stay memorable in any market.",
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: "SEO & Performance",
    sq: "Optimizojmë faqen tënde për Google dhe për rezultate më të mira organike.",
    en: "We optimize your website for Google rankings and better organic results.",
  },
];

export default function Services() {
  const { t } = useLang();
  return (
    <section id="sherbimet" className="py-24 px-6 md:px-[5vw] bg-[var(--teal-faint,#F0F8FA)]">
      <div className="text-center mb-14">
        <p className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--teal)] mb-3">
          {t("SHËRBIMET", "SERVICES")}
        </p>
        <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--dark)] mb-3">
          {t("Çfarë bëjmë ne", "What we do")}
        </h2>
        <p className="text-[var(--mid)] text-base leading-relaxed max-w-lg mx-auto">
          {t(
            "Zgjidhje dixhitale që ndihmojnë biznesin tënd të ketë prezencë, besueshmëri dhe rritje.",
            "Digital solutions that help your business build presence, trust and sustainable growth."
          )}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title}
            className="bg-white rounded-2xl p-8 border border-[var(--border)] group hover:shadow-xl hover:shadow-[rgba(27,122,138,0.1)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--teal)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"/>
            <div className="w-12 h-12 bg-[var(--teal-pale)] rounded-xl flex items-center justify-center mb-5">
              {s.icon}
            </div>
            <h3 className="font-display font-bold text-base text-[var(--dark)] mb-2">{s.title}</h3>
            <p className="text-sm leading-relaxed text-[var(--mid)]">{t(s.sq, s.en)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
