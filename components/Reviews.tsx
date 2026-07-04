"use client";
import { Check } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const reviews = [
  {
    quoteSq: "Faqja u dorëzua brenda afatit të premtuar, pa vonesa dhe pa surpriza. Ekipi respektoi çdo datë dhe detaj me të cilat ranë dakord.",
    quoteEn: "The site was delivered within the promised deadline — no delays, no surprises. The team met every date and detail we agreed on.",
  },
  {
    quoteSq: "Shpejtësia e faqes na befasoi — ngarkon menjëherë, edhe në telefon. Klientët tanë e vërejnë ndryshimin që nga dita e parë.",
    quoteEn: "The website speed surprised us — it loads instantly, even on mobile. Our clients noticed the difference from day one.",
  },
  {
    quoteSq: "Komunikimi ishte i qartë në çdo hap dhe na ndihmuan pa hezitim, nga ideja deri në lançim. Ndihemi të mbështetur gjithmonë.",
    quoteEn: "Communication was clear at every step and they helped us without hesitation, from idea to launch. We always felt supported.",
  },
];

export default function Reviews() {
  const { t } = useLang();
  return (
    <section id="reviews" className="py-24 px-6 md:px-[5vw] bg-[var(--dark,#0D1B1E)]">
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--teal-light,#2A9BAC)] mb-3">
          {t("VLERËSIMET", "TESTIMONIALS")}
        </p>
        <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-white mb-3">
          {t("Çfarë thonë klientët tanë", "What our clients say")}
        </h2>
        <p className="text-white/40 text-sm max-w-md mx-auto">
          {t(
            "Besimi dhe kënaqësia e klientëve tanë është suksesi ynë më i madh.",
            "Our clients' trust and satisfaction is our greatest achievement."
          )}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-[rgba(27,122,138,0.4)] transition-all duration-300"
          >
            <div className="flex gap-1 mb-4">
              {Array(5).fill(0).map((_, j) => (
                <span key={j} className="text-amber-400 text-base">★</span>
              ))}
            </div>
            <p className="text-white/75 text-sm leading-relaxed italic mb-6">
              &ldquo;{t(r.quoteSq, r.quoteEn)}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--teal)] flex items-center justify-center shrink-0">
                <Check size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  {t("Klient i verifikuar", "Verified Client")}
                </div>
                <div className="text-white/40 text-xs">⭐ Google Reviews</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
