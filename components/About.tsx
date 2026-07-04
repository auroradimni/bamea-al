"use client";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLang();
  return (
    <section id="rreth-nesh" className="py-24 px-6 md:px-[5vw] bg-[var(--teal-faint,#F0F8FA)]">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Team photo */}
        <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-2xl shadow-[rgba(27,122,138,0.15)]">
          <Image
            src="/about-team.png"
            alt={t("Ekipi BAMEA në punë", "The BAMEA team at work")}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--teal)] mb-3">
            {t("RRETH NESH", "ABOUT US")}
          </p>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--dark)] mb-4">
            {t("Kush jemi ne", "Who we are")}
          </h2>
          <p className="text-[var(--mid)] text-[0.95rem] leading-relaxed mb-4">
            {t(
              "BAMEA nisi si një pasion për teknologjinë, një dëshirë për të ndërtuar, dizajnuar dhe krijuar online.",
              "BAMEA started as a passion for technology, a drive to build, design, and create online."
            )}
          </p>
          <p className="text-[var(--mid)] text-[0.95rem] leading-relaxed mb-6">
            {t(
              "Me kalimin e kohës, ai pasion u kthye në një ide më të madhe, me besimin se çdo biznes meriton një prezencë online në mënyrën më të mirë të mundshme. Sot jemi pranë teje në çdo hap, nga ideja e parë deri në lançimin e faqes.",
              "Over time, that passion grew into something bigger, with the belief that every business deserves the best possible online presence. Today we're with you every step, from the first idea to launch day."
            )}
          </p>

          <ul className="space-y-3 mb-8">
            {[
              { sq: "Nga pasion teknologjik te partner i biznesit tënd", en: "From tech passion to your business partner" },
              { sq: "Çdo biznes meriton prezencë online profesionale", en: "Every business deserves a professional online presence" },
              { sq: "Pranë teje në çdo hap të procesit", en: "With you at every step of the process" },
            ].map(item => (
              <li key={item.sq} className="flex items-center gap-3 text-[var(--mid)] text-sm">
                <span className="text-[var(--teal)] font-bold text-base">✓</span>
                {t(item.sq, item.en)}
              </li>
            ))}
          </ul>

          <a href="#kontakt" className="bg-[var(--teal)] text-white px-6 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 hover:bg-[var(--teal-light)] transition-all hover:-translate-y-0.5 no-underline">
            {t("Fillo me ne", "Start with us")} →
          </a>
        </div>
      </div>
    </section>
  );
}
