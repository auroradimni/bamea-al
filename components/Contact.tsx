"use client";
import { useLang } from "@/context/LanguageContext";

const EMAIL = "bameatech@gmail.com";

export default function Contact() {
  const { t } = useLang();

  const contactItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: t("Email", "Email"),
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: t("Vendndodhja", "Location"),
      value: t("Tiranë, Shqipëri", "Tirana, Albania"),
    },
  ];

  return (
    <section id="kontakt" className="py-24 px-6 md:px-[5vw] bg-[var(--teal-faint,#F0F8FA)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--teal)] mb-3">
            {t("KONTAKT", "CONTACT")}
          </p>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--dark)] mb-3">
            {t("Le të flasim për projektin tënd", "Let's talk about your project")}
          </h2>
          <p className="text-[var(--mid)] text-sm leading-relaxed max-w-lg mx-auto">
            {t(
              "Na shkruaj dhe do të kthehemi tek ti sa më shpejt.",
              "Write to us and we'll get back to you as soon as possible."
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[var(--border)] p-8 md:p-10 shadow-sm shadow-[rgba(27,122,138,0.06)]">
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[var(--teal-pale)] rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-[var(--muted)] uppercase tracking-wider mb-0.5">
                    {item.label}
                  </div>
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      className="font-semibold text-[var(--dark)] text-sm hover:text-[var(--teal)] transition-colors no-underline break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-semibold text-[var(--dark)] text-sm">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2 border-t border-[var(--border)]">
            <a
              href={`mailto:${EMAIL}`}
              className="bg-[var(--teal)] text-white px-8 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 hover:bg-[var(--teal-light)] transition-all hover:-translate-y-0.5 no-underline mt-8"
            >
              {t("Na dërgo email", "Send us an email")} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
