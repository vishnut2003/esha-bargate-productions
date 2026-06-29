import Link from "next/link";
import { BOOKING_URL } from "@/lib/site";

const whyInvest = [
  {
    title: "Three Revenue Verticals",
    description:
      "AI productions, traditional cinema, and vertical drama marketing — diversified income streams across booming markets.",
  },
  {
    title: "Global AI Productions",
    description:
      "Operating across five continents with AI-native production pipelines that scale content for diverse global audiences.",
  },
  {
    title: "AI Innovation",
    description:
      "Early mover in AI-integrated production pipeline, reducing costs while increasing creative output.",
  },
  {
    title: "Proven Distribution",
    description:
      "Already placed on Apple TV and Google TV with established platform relationships.",
  },
];

const opportunities = [
  {
    title: "Production Funding",
    description:
      "Co-finance individual film, TV, or web series projects with structured returns and profit participation.",
  },
  {
    title: "Slate Financing",
    description:
      "Fund a slate of multiple productions for portfolio diversification across genres and platforms.",
  },
  {
    title: "Brand Partnerships",
    description:
      "Sponsor productions, product placement, and branded vertical drama content for your brand.",
  },
];

export function Investors() {
  return (
    <section
      id="investors"
      className="relative overflow-hidden border-b border-border py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[700px] h-[500px] bg-brand/15 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] bg-brand/10 rounded-full blur-[120px]" />
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
          / 09 — GROWTH & OPPORTUNITY / INVESTORS
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              GROWTH & OPPORTUNITY
            </span>
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
              Invest In{" "}
              <span className="text-brand">Stories</span>
            </span>
          </h2>

          <p className="mt-6 text-sm text-muted leading-relaxed">
            We&apos;re building the future of media at the intersection of AI,
            cinematic storytelling, and vertical drama. Join us as an investor
            and be part of a production house redefining entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <Panel
            icon="📈"
            title="Why Invest in EBP"
            items={whyInvest}
          />
          <Panel
            icon="💼"
            title="Investment Opportunities"
            items={opportunities}
          />
        </div>

        <div className="relative border border-border bg-surface/40 backdrop-blur-sm p-10 sm:p-14 text-center">
          <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand" />
          <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand" />
          <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand" />
          <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand" />

          <div className="pointer-events-none absolute inset-0 bg-brand/5 opacity-50" />

          <div className="relative">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to Shape the Future of{" "}
              <span className="text-brand">Entertainment?</span>
            </h3>

            <p className="mt-5 max-w-xl mx-auto text-sm text-muted leading-relaxed">
              Schedule a meeting with our founder to discuss collaboration and
              partnership opportunities.
            </p>

            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 mt-8 bg-brand text-foreground font-heading text-[11px] tracking-[0.2em] px-7 py-4 transition overflow-hidden"
            >
              <span className="absolute inset-0 bg-brand-hover translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative">SCHEDULE A MEETING</span>
              <span className="relative transition-transform group-hover:translate-x-1">
                <Arrow />
              </span>
            </Link>

            <a
              href="mailto:contact@eshabargateproductions.com"
              className="mt-6 block font-heading text-xs sm:text-sm font-semibold tracking-[0.25em] text-muted hover:text-foreground transition"
            >
              contact@eshabargateproductions.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Panel({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: { title: string; description: string }[];
}) {
  return (
    <div className="relative border border-border bg-surface/40 backdrop-blur-sm p-7 sm:p-9">
      <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand" />

      <span className="text-3xl">{icon}</span>
      <h3 className="mt-4 font-heading font-bold text-xl sm:text-2xl text-foreground tracking-tight">
        {title}
      </h3>

      <div className="mt-8 space-y-6">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`${
              i !== items.length - 1 ? "pb-6 border-b border-border" : ""
            }`}
          >
            <p className="font-heading font-bold text-sm text-foreground mb-2">
              {item.title}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
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
