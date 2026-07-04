"use client";
import { useLang } from "@/context/LanguageContext";

const stats = [
  { icon: "🎯", number: "25+", sq: "Projekte të realizuara", en: "Projects completed" },
  { icon: "🤝", number: "15+", sq: "Klientë të kënaqur", en: "Happy clients" },
  { icon: "⚡", number: "2+",  sq: "Vite përvojë",          en: "Years of experience" },
  { icon: "💯", number: "100%",sq: "Përkushtim",            en: "Commitment" },
];

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="py-16 px-6 md:px-[5vw] bg-[var(--teal-faint,#F0F8FA)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.number} className="text-center py-6">
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="font-display font-extrabold text-4xl text-[var(--teal)] leading-none">{s.number}</div>
            <div className="text-xs text-[var(--mid)] mt-2">{t(s.sq, s.en)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
