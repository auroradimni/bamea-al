"use client";
import { useLang } from "@/context/LanguageContext";

const stats = [
  {
    icon: "⚡",
    headline: "Fast",
    sq: "Delivery i shpejtë",
    en: "Fast delivery",
  },
  {
    icon: "🔍",
    headline: "SEO",
    sq: "Optimizim SEO",
    en: "SEO optimization",
  },
  {
    icon: "📱",
    headline: "Mobile",
    sq: "Mobile-first",
    en: "Mobile-first",
  },
  {
    icon: "💯",
    headline: "100%",
    sq: "Përkushtim total",
    en: "Full commitment",
  },
];

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="py-16 px-6 md:px-[5vw] bg-[var(--teal-faint,#F0F8FA)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.en} className="text-center py-6">
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--teal)] leading-none">
              {s.headline}
            </div>
            <div className="text-xs text-[var(--mid)] mt-2">{t(s.sq, s.en)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
