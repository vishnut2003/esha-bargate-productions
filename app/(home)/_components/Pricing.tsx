import Link from "next/link";

type PlanCard = {
  tier: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular: boolean;
};

const retainers: PlanCard[] = [
  {
    tier: "TIER 01",
    name: "Spark",
    price: "$800",
    period: "/month",
    description:
      "For solopreneurs, coaches, and emerging brands ready to show up consistently.",
    features: [
      "5 short-form videos (Reels, TikTok, Shorts)",
      "4 static social posts with copy",
      "Monthly 45-minute strategy call",
      "Monthly performance report",
      "7-business-day turnaround",
      "1 round of revisions per asset",
    ],
    cta: "GET STARTED",
    href: "#contact",
    popular: false,
  },
  {
    tier: "TIER 02",
    name: "Signal",
    price: "$2,500",
    period: "/month",
    description:
      "For growing brands, creators, and US–Global crossover clients building real momentum.",
    features: [
      "Everything in Spark, plus:",
      "4 long-form videos (up to 5 min)",
      "Monthly email newsletter",
      "AI thumbnail & asset A/B variants",
      "Bi-weekly strategy calls",
      "Quarterly brand audit",
      "4-business-day priority turnaround",
    ],
    cta: "START GROWING",
    href: "#contact",
    popular: true,
  },
  {
    tier: "TIER 03",
    name: "Studio",
    price: "$6,000",
    period: "/month",
    description:
      "For funded startups, established brands, and agencies that need a full creative partner.",
    features: [
      "Everything in Signal, plus:",
      "1 hero piece monthly (up to 10 min)",
      "Full PR distribution support",
      "Dedicated Slack channel + daily access",
      "Weekly strategy calls",
      "Custom AI workflow for your brand",
      "48-hour turnaround on short-form",
      "Unlimited revisions within scope",
    ],
    cta: "BOOK A CALL",
    href: "#contact",
    popular: false,
  },
];

const partnerships: PlanCard[] = [
  {
    tier: "PARTNERSHIP 01",
    name: "Spotlight",
    price: "$2,500",
    period: "/month",
    description:
      "For emerging brands and challenger labels testing brand integration as a channel.",
    features: [
      "1 placement opportunity per quarter",
      "Background & visibility placements",
      "Access to EBP network productions",
      "Quarterly opportunity briefings",
      "Performance & exposure reporting",
      "Annual contract (12 months)",
    ],
    cta: "APPLY NOW",
    href: "#contact",
    popular: false,
  },
  {
    tier: "PARTNERSHIP 02",
    name: "Integrate",
    price: "$5,000",
    period: "/month",
    description:
      "For established brands expanding US–Global reach through entertainment.",
    features: [
      "Everything in Spotlight, plus:",
      "2 placement opportunities per quarter",
      "Hero product placements included",
      "US–Global crossover opportunities",
      "Vertical drama priority access",
      "Bi-monthly strategy calls",
      "Custom brand brief development",
    ],
    cta: "BECOME A PARTNER",
    href: "#contact",
    popular: true,
  },
  {
    tier: "PARTNERSHIP 03",
    name: "Cinema Partner",
    price: "$10,000",
    period: "/month",
    description:
      "For global brands and investors seeking always-on placement across our production network.",
    features: [
      "Everything in Integrate, plus:",
      "Unlimited placements across EBP network",
      "Storyline & narrative integration",
      "Priority access to upcoming productions",
      "Dedicated brand integration manager",
      "Custom co-production opportunities",
      "AI-powered placement measurement",
    ],
    cta: "BOOK STRATEGY CALL",
    href: "#contact",
    popular: false,
  },
];

type ServiceRow = {
  kind: string;
  name: string;
  description: string;
  meta: string;
  price: string;
  unit: string;
  cta: string;
  href: string;
};

const placementServices: ServiceRow[] = [
  {
    kind: "PROJECT-BASED PLACEMENT",
    name: "Single Placement Deals",
    description:
      "One-off brand integration in a specific film, TV show, or vertical drama project. Ideal for product launches, seasonal campaigns, or testing the channel before committing to an annual partnership.",
    meta: "Background → Hero → Storyline // Pricing scales with production reach & rights",
    price: "$2,500 – $50,000+",
    unit: "/ placement",
    cta: "GET QUOTE",
    href: "#contact",
  },
  {
    kind: "PERFORMANCE-BASED",
    name: "Brokerage & Success Fees",
    description:
      "For brands with existing budgets seeking external placement sourcing. We scout, broker, and execute placements on your behalf — you only pay on successful deals.",
    meta: "15–20% commission // On placements valued at $25,000+ // $5,000 strategy retainer applies",
    price: "15–20%",
    unit: "commission",
    cta: "DISCUSS TERMS",
    href: "#contact",
  },
];

const consultingServices: ServiceRow[] = [
  {
    kind: "PROJECT-BASED",
    name: "AI Commercials & Media Productions",
    description:
      "Custom AI-generated commercials, brand films, and short-form media productions. Ideal for product launches, ad campaigns, and one-off creative projects.",
    meta: "15 sec – 1 min // Pricing varies by complexity & usage rights",
    price: "$700 – $2,000",
    unit: "/ project",
    cta: "REQUEST QUOTE",
    href: "#contact",
  },
  {
    kind: "BY THE HOUR",
    name: "Strategy Consulting",
    description:
      "One-off advisory sessions for pitch feedback, AI workflow setup, brand strategy, or show development. No retainer required.",
    meta: "Prepaid // Booked via calendar",
    price: "$80",
    unit: "/ hour",
    cta: "BOOK SESSION",
    href: "#contact",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-border py-24 sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent" />

      <div className="pointer-events-none absolute top-0 left-1/4 w-[700px] h-[500px] bg-brand/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[400px] bg-brand/8 rounded-full blur-[140px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 hidden xl:block">
        <span
          className="font-heading text-[9px] tracking-[0.5em] text-subtle"
          style={{ writingMode: "vertical-rl" }}
        >
          / 14 — PRICING &amp; PACKAGES / WORK WITH EBP
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        {/* ---------- Section intro ---------- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              PRICING &amp; PACKAGES
            </span>
            <span className="block w-10 h-px bg-brand" />
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="text-foreground text-5xl sm:text-6xl md:text-7xl">
              Work With{" "}
            </span>
            <span className="text-brand text-5xl sm:text-6xl md:text-7xl">
              EBP
            </span>
          </h2>

          <p className="mt-8 max-w-xl mx-auto text-sm text-muted leading-relaxed">
            Monthly retainers, strategy consulting, and AI-powered productions.
            Where cutting-edge AI meets timeless storytelling — engineered for
            global brands.
          </p>
        </div>

        {/* ---------- Productions & Consulting ---------- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              ADDITIONAL SERVICES
            </span>
            <span className="block w-10 h-px bg-brand" />
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1] text-4xl sm:text-5xl md:text-6xl text-foreground">
            Productions &amp; Consulting
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {consultingServices.map((s) => (
            <ServiceRowView key={s.name} {...s} />
          ))}
        </div>

        {/* ---------- Placement partnerships ---------- */}
        <div className="text-center mt-28 mb-16">
          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="text-foreground text-4xl sm:text-5xl md:text-6xl">
              Place Your Brand{" "}
            </span>
            <span className="text-brand text-4xl sm:text-5xl md:text-6xl">
              On Screen
            </span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-sm text-muted leading-relaxed">
            For brands and investors placing products in film, TV, and vertical
            drama content. Specializing in vertical drama, US–Global crossover,
            and AI-enhanced placement strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {partnerships.map((p) => (
            <PartnershipCardView key={p.name} {...p} />
          ))}
        </div>

        {/* ---------- Project-based placement services ---------- */}
        <div className="mt-20 grid grid-cols-1 gap-6">
          {placementServices.map((s) => (
            <ServiceRowView key={s.name} {...s} />
          ))}
        </div>

        {/* ---------- Retainers ---------- */}
        <div className="text-center mt-28 mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              BRAND INTEGRATION &amp; PLACEMENT
            </span>
            <span className="block w-10 h-px bg-brand" />
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1] text-4xl sm:text-5xl md:text-6xl text-foreground">
            Monthly Retainers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {retainers.map((p) => (
            <PlanCardView key={p.name} {...p} />
          ))}
        </div>

        {/* ---------- Terms footnote ---------- */}
        <div className="mt-16 pt-8 border-t border-border text-center space-y-2">
          <p className="font-heading text-[10px] tracking-[0.3em] text-muted">
            All Retainer Plans · 3-Month Minimum · Invoiced Monthly Net 7
          </p>
          <p className="font-heading text-[10px] tracking-[0.3em] text-subtle">
            Add-Ons Available · Launch Sprints · Paid Ads · Localization · AI
            Avatars
          </p>
        </div>
      </div>
    </section>
  );
}

function PlanCardView({
  tier,
  name,
  price,
  period,
  description,
  features,
  cta,
  href,
  popular,
}: PlanCard) {
  return (
    <div
      className={`group relative backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 p-7 sm:p-8 flex flex-col ${
        popular
          ? "mt-4 bg-surface/70 border border-brand"
          : "overflow-hidden bg-surface/40 border border-border hover:border-brand"
      }`}
    >
      {popular && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-foreground font-heading text-[9px] tracking-[0.3em] px-4 py-1.5">
          MOST POPULAR
        </span>
      )}

      <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition" />

      <div className="relative flex flex-col flex-1">
        <p
          className={`font-heading text-[10px] tracking-[0.3em] mb-4 ${
            popular ? "text-brand" : "text-subtle"
          }`}
        >
          {tier}
        </p>

        <h3 className="font-heading font-bold tracking-tight text-3xl sm:text-[2.1rem] text-foreground mb-5">
          {name}
        </h3>

        <p className="font-heading font-bold tracking-tighter leading-none text-foreground mb-5">
          <span className="text-5xl sm:text-6xl">{price}</span>
          <span className="text-sm font-normal tracking-normal text-muted">
            {period}
          </span>
        </p>

        <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>

        <div className="h-px bg-border mb-6" />

        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className="text-brand mt-0.5 shrink-0" aria-hidden>
                ▸
              </span>
              <span className="text-sm text-muted leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        <Link
          href={href}
          className={`group/btn relative inline-flex items-center justify-center gap-2 font-heading text-[11px] tracking-[0.2em] px-5 py-4 transition overflow-hidden ${
            popular
              ? "bg-brand text-foreground"
              : "border border-border-strong hover:border-foreground text-foreground"
          }`}
        >
          {popular && (
            <span className="absolute inset-0 bg-brand-hover translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500" />
          )}
          <span className="relative">{cta}</span>
          <span className="relative transition-transform group-hover/btn:translate-x-1">
            <Arrow />
          </span>
        </Link>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-brand to-transparent transition-transform duration-700 group-hover:scale-x-100" />
    </div>
  );
}

function PartnershipCardView({
  tier,
  name,
  description,
  popular,
}: PlanCard) {
  return (
    <div
      className={`group relative backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 p-7 sm:p-8 flex flex-col ${
        popular
          ? "mt-4 bg-surface/70 border border-brand"
          : "overflow-hidden bg-surface/40 border border-border hover:border-brand"
      }`}
    >
      {popular && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-foreground font-heading text-[9px] tracking-[0.3em] px-4 py-1.5">
          MOST POPULAR
        </span>
      )}

      <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition" />

      <div className="relative flex flex-col flex-1">
        <p
          className={`font-heading text-[10px] tracking-[0.3em] mb-4 ${
            popular ? "text-brand" : "text-subtle"
          }`}
        >
          {tier}
        </p>

        <h3 className="font-heading font-bold tracking-tight text-3xl sm:text-[2.1rem] text-foreground mb-5">
          {name}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>

        <div className="flex-1" />

        <div className="h-px bg-border mb-6" />

        <Link
          href="#contact"
          className={`group/btn relative inline-flex items-center justify-center gap-2 font-heading text-[11px] tracking-[0.2em] px-5 py-4 transition overflow-hidden ${
            popular
              ? "bg-brand text-foreground"
              : "border border-border-strong hover:border-foreground text-foreground"
          }`}
        >
          {popular && (
            <span className="absolute inset-0 bg-brand-hover translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500" />
          )}
          <span className="relative">BOOK A CALL</span>
          <span className="relative transition-transform group-hover/btn:translate-x-1">
            <Arrow />
          </span>
        </Link>

        <a
          href="mailto:contact@eshabargateproductions.com"
          className="mt-4 block text-center font-heading text-[10px] tracking-[0.2em] text-subtle hover:text-foreground transition break-all"
        >
          contact@eshabargateproductions.com
        </a>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-brand to-transparent transition-transform duration-700 group-hover:scale-x-100" />
    </div>
  );
}

function ServiceRowView({
  kind,
  name,
  description,
  meta,
  price,
  unit,
  cta,
  href,
}: ServiceRow) {
  return (
    <div className="group relative overflow-hidden bg-surface/40 backdrop-blur-sm border border-border hover:border-brand transition-all duration-500 p-7 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:items-center">
      <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition" />

      <div className="lg:col-span-6">
        <p className="font-heading text-[10px] tracking-[0.3em] text-brand mb-3">
          {kind}
        </p>
        <h3 className="font-heading font-bold tracking-tight text-2xl sm:text-3xl text-foreground mb-4">
          {name}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 max-w-xl">
          {description}
        </p>
        <p className="font-heading text-[10px] tracking-[0.15em] text-subtle leading-relaxed">
          {meta}
        </p>
      </div>

      <div className="lg:col-span-3 lg:text-center">
        <p className="font-heading font-bold tracking-tighter leading-tight text-foreground">
          <span className="block text-3xl sm:text-4xl text-balance">{price}</span>
          <span className="mt-1 block text-sm font-normal tracking-normal text-muted">
            {unit}
          </span>
        </p>
      </div>

      <div className="lg:col-span-3 lg:flex lg:justify-end">
        <Link
          href={href}
          className="group/btn inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] px-5 py-3 border border-border-strong hover:border-foreground text-foreground transition"
        >
          {cta}
          <span className="transition-transform group-hover/btn:translate-x-1">
            <Arrow />
          </span>
        </Link>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path
        d="M1 5H11M11 5L7 1M11 5L7 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
