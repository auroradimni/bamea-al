export type ProjectType = "landing" | "business" | "ecommerce";

export type ProductTier = "small" | "medium" | "large";

export type DomainTld = ".com" | ".al" | ".net" | ".org" | ".eu";

export const BUILD_COSTS: Record<ProjectType, number> = {
  landing: 119,
  business: 149,
  ecommerce: 249,
};

/** Annual domain registration (1st year estimate) */
export const DOMAIN_PRICES: Record<DomainTld, number> = {
  ".com": 18,
  ".al": 16,
  ".net": 16,
  ".org": 16,
  ".eu": 12,
};

export const DOMAIN_NOTES: Partial<Record<DomainTld, { sq: string; en: string }>> = {
  ".com": {
    sq: "Zakonisht më shtrenjtë se .al. Rinovimi rreth €18/vit.",
    en: "Usually pricier than .al. Renewal around €18/yr.",
  },
  ".al": {
    sq: "Domain shqiptar, ~€16/vit.",
    en: "Albanian domain, ~€16/year.",
  },
};

export const FRONTEND = {
  year: 0,
  nameSq: "Hosting i faqes (1 vit)",
  nameEn: "Site hosting (1 year)",
  noteSq: "Pa pagesë shtesë",
  noteEn: "No extra charge",
};

export const FRONTEND_HOSTING_YEAR = FRONTEND.year;

export const BACKEND_BUSINESS = {
  year: 60,
  monthly: 5,
  nameSq: "Hosting & mirëmbajtje (1 vit)",
  nameEn: "Hosting & maintenance (1 year)",
  noteSq: "Rreth €5/muaj",
  noteEn: "About €5/month",
};

export const BACKEND_BUSINESS_YEAR = BACKEND_BUSINESS.year;

export const BACKEND_ECOMMERCE: Record<
  ProductTier,
  { year: number; monthly: number; nameSq: string; nameEn: string; noteSq: string; noteEn: string }
> = {
  small: {
    year: 60,
    monthly: 5,
    nameSq: "Hosting dyqani, deri 100 produkte (1 vit)",
    nameEn: "Store hosting, up to 100 products (1 year)",
    noteSq: "Rreth €5/muaj",
    noteEn: "About €5/month",
  },
  medium: {
    year: 120,
    monthly: 10,
    nameSq: "Hosting dyqani, 101–200 produkte (1 vit)",
    nameEn: "Store hosting, 101–200 products (1 year)",
    noteSq: "Rreth €10/muaj",
    noteEn: "About €10/month",
  },
  large: {
    year: 240,
    monthly: 20,
    nameSq: "Hosting dyqani, 200+ produkte (1 vit)",
    nameEn: "Store hosting, 200+ products (1 year)",
    noteSq: "Rreth €20/muaj",
    noteEn: "About €20/month",
  },
};

export const PAYMENT_INTEGRATION_COST = 50;

/** Client-facing hosting price guide (no vendor names) */
export const HOSTING_GUIDE = {
  sq: [
    "Landing page: hosting falas",
    "Business page: ~€60/vit",
    "Dyqan deri 100 produkte: ~€60/vit",
    "101–200 produkte: ~€120/vit · 200+: ~€240/vit",
  ],
  en: [
    "Landing page: free hosting",
    "Business page: ~€60/year",
    "Store up to 100 products: ~€60/year",
    "101–200 products: ~€120/year · 200+: ~€240/year",
  ],
};

export function getProductTier(count: number): ProductTier {
  if (count > 200) return "large";
  if (count > 100) return "medium";
  return "small";
}

export function getHostingInfo(count: number) {
  const tier = getProductTier(count);
  return { tier, ...BACKEND_ECOMMERCE[tier] };
}

export function calculateCosts(options: {
  projectType: ProjectType;
  domain: DomainTld;
  productCount: number;
  paymentIntegration: boolean;
}) {
  const { projectType, domain, productCount, paymentIntegration } = options;

  const build = BUILD_COSTS[projectType];
  const domainCost = DOMAIN_PRICES[domain];
  const frontend = FRONTEND.year;

  let backend = 0;
  let hostingLabelSq = "";
  let hostingLabelEn = "";
  let hostingNoteSq = "";
  let hostingNoteEn = "";

  if (projectType === "business") {
    backend = BACKEND_BUSINESS.year;
    hostingLabelSq = BACKEND_BUSINESS.nameSq;
    hostingLabelEn = BACKEND_BUSINESS.nameEn;
    hostingNoteSq = BACKEND_BUSINESS.noteSq;
    hostingNoteEn = BACKEND_BUSINESS.noteEn;
  } else if (projectType === "ecommerce") {
    const hosting = getHostingInfo(productCount);
    backend = hosting.year;
    hostingLabelSq = hosting.nameSq;
    hostingLabelEn = hosting.nameEn;
    hostingNoteSq = hosting.noteSq;
    hostingNoteEn = hosting.noteEn;
  }

  const payment =
    projectType === "ecommerce" && paymentIntegration ? PAYMENT_INTEGRATION_COST : 0;

  const firstYear = build + domainCost + frontend + backend + payment;
  const yearlyAfter = domainCost + frontend + backend;

  return {
    build,
    domain: domainCost,
    frontend,
    backend,
    payment,
    firstYear,
    yearlyAfter,
    hostingLabelSq,
    hostingLabelEn,
    hostingNoteSq,
    hostingNoteEn,
    productTier: projectType === "ecommerce" ? getProductTier(productCount) : null,
  };
}

export function formatEuro(amount: number) {
  return `€${amount.toLocaleString("de-DE")}`;
}

export function getHostingHint(count: number) {
  if (count > 200) return BACKEND_ECOMMERCE.large;
  if (count > 100) return BACKEND_ECOMMERCE.medium;
  return BACKEND_ECOMMERCE.small;
}
