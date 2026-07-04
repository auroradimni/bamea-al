"use client";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { lang, t } = useLang();
  return (
    <section className="min-h-[calc(100vh-72px)] grid md:grid-cols-2 gap-16 items-center px-6 md:px-[5vw] py-20 relative overflow-hidden bg-white">
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(27,122,138,0.08) 0%, transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-10 fade-up">
        <div className="inline-flex items-center gap-2 bg-[var(--teal-pale)] text-[var(--teal)] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 bg-[var(--teal)] rounded-full" />
          Web • Brand • Growth
        </div>

        {lang === "sq" ? (
          <h1 className="font-display font-extrabold leading-[1.15] text-[clamp(2rem,4vw,3.2rem)] text-[var(--dark)] mb-6">
            Krijojmë website<br/>që e çojnë biznesin<br/>tënd <span className="text-[var(--teal)]">përpara.</span>
          </h1>
        ) : (
          <h1 className="font-display font-extrabold leading-[1.15] text-[clamp(2rem,4vw,3.2rem)] text-[var(--dark)] mb-6">
            We build websites<br/>that move your<br/>business <span className="text-[var(--teal)]">forward.</span>
          </h1>
        )}

        <p className="text-base leading-relaxed text-[var(--mid)] max-w-md mb-10">
          {t(
            "Ne ndërtojmë faqe moderne, të shpejta dhe të optimizuara që të sjellin rezultate reale për biznesin tënd.",
            "We build modern, fast, and optimized websites that deliver real results for your business."
          )}
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="#projektet" className="bg-[var(--teal)] text-white px-6 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 hover:bg-[var(--teal-light)] transition-all hover:-translate-y-0.5 no-underline">
            {t("Shiko Projektet", "View Projects")} →
          </a>
          <a href="#rreth-nesh" className="border border-[var(--border)] text-[var(--dark)] px-6 py-3.5 rounded-lg font-medium text-sm inline-flex items-center gap-2 hover:border-[var(--teal)] hover:text-[var(--teal)] transition-all no-underline">
            {t("Mëso më Shumë", "Learn More")}
          </a>
        </div>
      </div>

      {/* Hero illustration */}
      <div className="relative z-10 fade-up flex items-center justify-center">
        <Image
          src="/hero-team.png"
          alt={t("Ekipi BAMEA — web design dhe zhvillim", "BAMEA team — web design and development")}
          width={720}
          height={720}
          className="w-full max-w-[580px] h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
