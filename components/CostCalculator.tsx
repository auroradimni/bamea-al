"use client";

import { useMemo, useState } from "react";
import { Calculator, Check } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import {
  BUILD_COSTS,
  calculateCosts,
  DOMAIN_NOTES,
  DOMAIN_PRICES,
  FRONTEND,
  HOSTING_GUIDE,
  PAYMENT_INTEGRATION_COST,
  formatEuro,
  getHostingHint,
  type DomainTld,
  type ProjectType,
} from "@/data/pricing";

const projectTypes: {
  id: ProjectType;
  labelSq: string;
  labelEn: string;
  descSq: string;
  descEn: string;
  includesSq: string[];
  includesEn: string[];
}[] = [
  {
    id: "landing",
    labelSq: "Landing Page",
    labelEn: "Landing Page",
    descSq: "Një faqe e plotë me të gjitha seksionet.",
    descEn: "One full page with all sections.",
    includesSq: [
      "Hero & prezantim",
      "Shërbimet",
      "Projektet / portfolio",
      "Rreth nesh",
      "Vlerësimet",
      "Kontakt",
    ],
    includesEn: [
      "Hero & intro",
      "Services",
      "Projects / portfolio",
      "About us",
      "Testimonials",
      "Contact section",
    ],
  },
  {
    id: "business",
    labelSq: "Business Page",
    labelEn: "Business Page",
    descSq: "Faqe me disa seksione + funksione dinamike.",
    descEn: "Multi-section site + dynamic features.",
    includesSq: [
      "Të gjitha seksionet e landing page",
      "Menu / katalog shërbimesh",
      "Rezervime / booking",
      "Forma kontakti",
      "Hosting & mirëmbajtje",
    ],
    includesEn: [
      "All landing page sections",
      "Menu / service catalog",
      "Reservations / booking",
      "Contact forms",
      "Hosting & maintenance",
    ],
  },
  {
    id: "ecommerce",
    labelSq: "E-commerce",
    labelEn: "E-commerce",
    descSq: "Dyqan online me produkte, pagesa dhe menaxhim porosish.",
    descEn: "Online store with products, checkout, and order management.",
    includesSq: [
      "Katalog produktesh",
      "Shportë & checkout",
      "Panel admin",
      "Hosting & mirëmbajtje",
    ],
    includesEn: [
      "Product catalog",
      "Cart & checkout",
      "Admin panel",
      "Hosting & maintenance",
    ],
  },
];

const domains: { tld: DomainTld; label: string }[] = [
  { tld: ".com", label: ".com" },
  { tld: ".al", label: ".al" },
  { tld: ".net", label: ".net" },
  { tld: ".org", label: ".org" },
  { tld: ".eu", label: ".eu" },
];

function hostingHint(count: number, t: (sq: string, en: string) => string) {
  const h = getHostingHint(count);
  return `${formatEuro(h.year)}/${t("vit", "year")} · ${t(h.noteSq, h.noteEn)}`;
}

export default function CostCalculator() {
  const { t } = useLang();
  const [projectType, setProjectType] = useState<ProjectType>("landing");
  const [domain, setDomain] = useState<DomainTld>(".com");
  const [productCount, setProductCount] = useState(30);
  const [paymentIntegration, setPaymentIntegration] = useState(false);

  const costs = useMemo(
    () => calculateCosts({ projectType, domain, productCount, paymentIntegration }),
    [projectType, domain, productCount, paymentIntegration]
  );

  const selectedProject = projectTypes.find((p) => p.id === projectType)!;
  const domainNote = DOMAIN_NOTES[domain];

  const cardClass = (active: boolean) =>
    `rounded-xl p-5 border text-left cursor-pointer transition-all ${
      active
        ? "border-[var(--teal)] bg-white shadow-md shadow-[rgba(27,122,138,0.12)]"
        : "border-[var(--border)] bg-white hover:border-[var(--teal-light)]"
    }`;

  const breakdown = [
    {
      show: true,
      labelSq: "Ndërtimi i faqes (një herë)",
      labelEn: "Website build (one time)",
      value: costs.build,
    },
    {
      show: true,
      labelSq: `Domain ${domain} (1 vit)`,
      labelEn: `Domain ${domain} (1 year)`,
      value: costs.domain,
    },
    {
      show: true,
      labelSq: FRONTEND.nameSq,
      labelEn: FRONTEND.nameEn,
      value: costs.frontend,
      free: true,
      subSq: FRONTEND.noteSq,
      subEn: FRONTEND.noteEn,
    },
    {
      show: costs.backend > 0,
      labelSq: costs.hostingLabelSq || "Hosting (1 vit)",
      labelEn: costs.hostingLabelEn || "Hosting (1 year)",
      value: costs.backend,
      subSq: costs.hostingNoteSq,
      subEn: costs.hostingNoteEn,
    },
    {
      show: costs.payment > 0,
      labelSq: "Pagesa me kartë, një herë",
      labelEn: "Card payment setup, one time",
      value: costs.payment,
    },
  ];

  return (
    <section id="kalkulatori" className="py-24 px-6 md:px-[5vw] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--teal)] mb-3">
            {t("KALKULATORI", "CALCULATOR")}
          </p>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--dark)] mb-3">
            {t("Llogarit koston e projektit tënd", "Estimate your project cost")}
          </h2>
          <p className="text-[var(--mid)] text-sm leading-relaxed max-w-lg mx-auto">
            {t(
              "Vlerësim transparent i kostos për vitin e parë. Pa surpriza.",
              "Transparent first-year cost estimate. No surprises."
            )}
          </p>
        </div>

        <div className="mb-10 bg-[var(--dark,#0D1B1E)] rounded-2xl p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--teal-light)] mb-4">
            {t("Hosting vjetor (vlerësim)", "Yearly hosting (estimate)")}
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {HOSTING_GUIDE.sq.map((_, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                <span className="text-[var(--teal-light)] mt-0.5">•</span>
                {t(HOSTING_GUIDE.sq[i], HOSTING_GUIDE.en[i])}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--teal)] mb-4">
                {t("Lloji i faqes", "Site type")}
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {projectTypes.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setProjectType(p.id)}
                    className={cardClass(projectType === p.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-bold text-sm text-[var(--dark)]">
                        {t(p.labelSq, p.labelEn)}
                      </span>
                      {projectType === p.id && (
                        <span className="w-5 h-5 bg-[var(--teal)] rounded-full flex items-center justify-center">
                          <Check size={12} className="text-white" />
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[var(--mid)] leading-relaxed mb-3">
                      {t(p.descSq, p.descEn)}
                    </p>
                    <p className="text-[var(--teal)] font-bold text-sm">
                      {p.id === "ecommerce"
                        ? t(`nga ${formatEuro(BUILD_COSTS[p.id])}`, `from ${formatEuro(BUILD_COSTS[p.id])}`)
                        : formatEuro(BUILD_COSTS[p.id])}
                    </p>
                  </button>
                ))}
              </div>

              {/* Included features */}
              <div className="mt-4 bg-[var(--teal-faint,#F0F8FA)] rounded-xl p-4 border border-[var(--teal-pale)]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--teal)] mb-2">
                  {t("Çfarë përfshin", "What's included")}
                </p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {selectedProject.includesSq.map((_, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[var(--mid)]">
                      <Check size={12} className="text-[var(--teal)] shrink-0" />
                      {t(selectedProject.includesSq[i], selectedProject.includesEn[i])}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--teal)] mb-4">
                {t("Domain (1 vit)", "Domain (1 year)")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {domains.map((d) => (
                  <button
                    key={d.tld}
                    type="button"
                    onClick={() => setDomain(d.tld)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all cursor-pointer ${
                      domain === d.tld
                        ? "bg-[var(--teal)] text-white border-[var(--teal)]"
                        : "bg-white text-[var(--mid)] border-[var(--border)] hover:border-[var(--teal)]"
                    }`}
                  >
                    {d.label}{" "}
                    <span className={domain === d.tld ? "text-white/80" : "text-[var(--muted)]"}>
                      {formatEuro(DOMAIN_PRICES[d.tld])}
                    </span>
                  </button>
                ))}
              </div>
              {domainNote && (
                <p className="text-xs text-[var(--mid)] mt-3">{t(domainNote.sq, domainNote.en)}</p>
              )}
            </div>

            {projectType === "ecommerce" && (
              <div className="space-y-6 bg-[var(--teal-faint,#F0F8FA)] rounded-2xl p-6 border border-[var(--teal-pale)]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--teal)]">
                      {t("Numri i produkteve", "Number of products")}
                    </h3>
                    <span className="font-display font-bold text-[var(--dark)]">{productCount}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={1500}
                    step={1}
                    value={productCount}
                    onChange={(e) => setProductCount(Number(e.target.value))}
                    className="w-full accent-[var(--teal)]"
                  />
                  <div className="flex justify-between text-[10px] text-[var(--muted)] mt-1">
                    <span>1</span>
                    <span>400</span>
                    <span>1.000+</span>
                  </div>
                  <p className="text-xs text-[var(--mid)] mt-3 leading-relaxed">
                    {hostingHint(productCount, t)}
                  </p>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={paymentIntegration}
                    onChange={(e) => setPaymentIntegration(e.target.checked)}
                    className="mt-1 accent-[var(--teal)]"
                  />
                  <div>
                    <p className="font-semibold text-sm text-[var(--dark)]">
                      {t("Pagesa me kartë", "Card payment")}
                    </p>
                    <p className="text-xs text-[var(--mid)] mt-0.5">
                      {t(
                        "Konfigurim i pagesave me kartë (debit/kredit), kosto shtesë një herë.",
                        "Debit and credit card checkout setup, one time extra cost."
                      )}{" "}
                      <span className="text-[var(--teal)] font-semibold">+{formatEuro(PAYMENT_INTEGRATION_COST)}</span>
                    </p>
                  </div>
                </label>
              </div>
            )}

            {projectType === "landing" && (
              <p className="text-xs text-[var(--mid)] bg-[var(--teal-faint,#F0F8FA)] rounded-xl p-4 border border-[var(--teal-pale)] leading-relaxed">
                {t(
                  "Hosting falas vitin e parë. Pa kosto shtesë mujore.",
                  "Free hosting the first year. No monthly fees."
                )}
              </p>
            )}

            {projectType === "business" && (
              <p className="text-xs text-[var(--mid)] bg-[var(--teal-faint,#F0F8FA)] rounded-xl p-4 border border-[var(--teal-pale)] leading-relaxed">
                {t(
                  "Përfshin menu, rezervime dhe forma kontakti. Hosting ~€60/vit.",
                  "Includes menu, reservations and contact forms. Hosting ~€60/year."
                )}
              </p>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 bg-[var(--dark,#0D1B1E)] rounded-2xl p-7 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Calculator size={20} className="text-[var(--teal-light)]" />
                <h3 className="font-display font-bold text-lg">
                  {t("Vlerësimi yt", "Your estimate")}
                </h3>
              </div>

              <ul className="space-y-3 mb-6 pb-6 border-b border-white/10">
                {breakdown
                  .filter((item) => item.show)
                  .map((item) => (
                    <li key={item.labelEn} className="text-sm">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-white/60 leading-snug">{t(item.labelSq, item.labelEn)}</span>
                        <span className="font-semibold shrink-0">
                          {"free" in item && item.free
                            ? t("Falas", "Free")
                            : formatEuro(item.value)}
                        </span>
                      </div>
                      {"subSq" in item && item.subSq && (
                        <p className="text-white/35 text-[10px] mt-0.5 leading-snug">
                          {t(item.subSq, item.subEn!)}
                        </p>
                      )}
                    </li>
                  ))}
              </ul>

              <div className="mb-4">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  {t("Totali viti i parë", "First year total")}
                </p>
                <p className="font-display font-extrabold text-4xl text-[var(--teal-light)]">
                  {formatEuro(costs.firstYear)}
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  {t("Çdo vit pasues", "Each year after")}
                </p>
                <p className="font-display font-bold text-xl text-white">
                  {formatEuro(costs.yearlyAfter)}
                  <span className="text-white/40 text-sm font-normal"> / {t("vit", "year")}</span>
                </p>
                <p className="text-white/40 text-[11px] mt-2 leading-relaxed">
                  {t(
                    "Domain + hosting (pa koston e ndërtimit)",
                    "Domain + hosting only (build cost excluded)"
                  )}
                </p>
              </div>

              <a
                href="/#kontakt"
                className="block w-full text-center bg-[var(--teal)] text-white px-5 py-3.5 rounded-lg font-semibold text-sm hover:bg-[var(--teal-light)] transition-colors no-underline"
              >
                {t("Kërko ofertë të personalizuar", "Get a custom quote")} →
              </a>

              <p className="text-white/30 text-[10px] mt-4 leading-relaxed text-center">
                {t(
                  "* Vlerësim orientues. Çmimet finale mund të ndryshojnë sipas kompleksitetit.",
                  "* Indicative estimate. Final pricing may vary based on complexity."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
