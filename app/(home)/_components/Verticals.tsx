import Link from "next/link";

type CardData = {
  num: string;
  index: string;
  title1: string;
  title2: string;
  title2Style: "brand" | "italic";
  description: string;
  services: string[];
  serviceCount: string;
  href: string;
  glyph: "diamond" | "star" | "play";
  iconStyle: "brand" | "outline";
  ctaStyle: "filled" | "outline";
};

const verticals: CardData[] = [
  {
    num: "01",
    index: "01/03",
    title1: "Digital & AI",
    title2: "Frontier",
    title2Style: "brand",
    description:
      "AI-powered productions, virtual reality, generative content & emerging media technology.",
    services: ["AI CONTENT", "AI/VR", "MARKETING", "DISTRIBUTION", "POST"],
    serviceCount: "5 SERVICES",
    href: "#digital-ai",
    glyph: "diamond",
    iconStyle: "brand",
    ctaStyle: "filled",
  },
  {
    num: "02",
    index: "02/03",
    title1: "Cinematic",
    title2: "Legacy",
    title2Style: "italic",
    description:
      "Traditional storytelling, productions, show development, distribution & cultural narratives.",
    services: ["PRODUCTIONS", "SHOW DEV", "DISTRIBUTION", "PITCHING", "INT'L"],
    serviceCount: "6 SERVICES",
    href: "#cinematic-legacy",
    glyph: "star",
    iconStyle: "outline",
    ctaStyle: "outline",
  },
  {
    num: "03",
    index: "03/03",
    title1: "Vertical",
    title2: "Drama",
    title2Style: "brand",
    description:
      "Vertical drama marketing, placement, strategies, campaign architecture & audience marketing.",
    services: ["MARKETING", "STRATEGY", "BRANDING", "SOCIAL", "CAMPAIGNS"],
    serviceCount: "6 SERVICES",
    href: "#vertical-drama",
    glyph: "play",
    iconStyle: "brand",
    ctaStyle: "outline",
  },
];

const marqueeWords = [
  "STRATEGIES",
  "PLACEMENT",
  "VR EXPERIENCES",
  "DIGITAL",
  "AI",
  "CINEMA",
  "PRODUCTIONS",
  "VERTICAL DRAMA",
];

export function Verticals() {
  const marqueeSequence = Array.from({ length: 2 }).flatMap(() => marqueeWords);

  return (
    <section
      id="verticals"
      className="relative overflow-hidden border-b border-border py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden">
        <div className="flex w-max animate-marquee py-4 font-heading font-black tracking-tighter text-foreground/[0.06]">
          {marqueeSequence.map((word, i) => (
            <span
              key={i}
              className="shrink-0 px-10 text-6xl sm:text-7xl whitespace-nowrap"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[140px]" />
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
          / 02 — VERTICALS / EXPLORE THE STUDIO
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 pt-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              CHOOSE YOUR PATH
            </span>
            <span className="block w-10 h-px bg-brand" />
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
              Three Verticals.
            </span>
            <span className="block text-subtle text-5xl sm:text-6xl md:text-7xl font-light italic mt-1">
              One House.
            </span>
          </h2>

          <p className="mt-8 max-w-xl mx-auto text-sm text-muted leading-relaxed">
            A unified studio operating across three distinct verticals —
            engineered to scale storytelling from theatrical features to
            mobile-first vertical drama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verticals.map((v) => (
            <VerticalCard key={v.num} {...v} />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-[10px] tracking-[0.3em] text-subtle">
            01 — 03 / THREE VERTICALS · ONE VISION
          </p>
          <Link
            href="#about"
            className="group inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.25em] text-foreground hover:text-brand transition"
          >
            DISCOVER THE STUDIO
            <span className="transition-transform group-hover:translate-x-1">
              <Arrow />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function VerticalCard({
  num,
  index,
  title1,
  title2,
  title2Style,
  description,
  services,
  serviceCount,
  href,
  glyph,
  iconStyle,
  ctaStyle,
}: CardData) {
  return (
    <div className="group relative overflow-hidden bg-surface/40 backdrop-blur-sm border border-border hover:border-brand transition-all duration-500 hover:-translate-y-1 p-7 sm:p-8 flex flex-col">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 -right-2 font-heading font-black text-[9rem] leading-none tracking-tighter text-foreground/[0.04] group-hover:text-brand/[0.08] transition-colors duration-500"
      >
        {num}
      </span>

      <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition" />

      <div className="relative flex flex-col flex-1">
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2">
            <span className="block w-1.5 h-1.5 rounded-full bg-brand" />
            <p className="font-heading text-[10px] tracking-[0.3em] text-brand">
              VERTICAL {num}
            </p>
          </div>
          <p className="font-heading text-[9px] tracking-[0.25em] text-subtle">
            {index}
          </p>
        </div>

        <div className="relative w-14 h-14 mb-7">
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              iconStyle === "brand" ? "bg-brand/60" : "bg-foreground/30"
            }`}
          />
          <div
            className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${
              iconStyle === "brand"
                ? "bg-brand text-foreground"
                : "bg-transparent border border-border-strong text-foreground"
            }`}
          >
            <Glyph type={glyph} />
          </div>
        </div>

        <h3 className="font-heading font-bold tracking-tight leading-[1.05] text-3xl sm:text-[2.1rem] mb-4">
          <span className="block text-foreground">{title1}</span>
          <span
            className={`block ${
              title2Style === "brand"
                ? "text-brand"
                : "text-subtle font-light italic"
            }`}
          >
            {title2}
          </span>
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {services.map((s) => (
            <span
              key={s}
              className="font-heading text-[8px] tracking-[0.2em] text-subtle group-hover:text-muted border border-border group-hover:border-border-strong px-2 py-1 transition"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        <div className="flex items-center justify-between gap-3">
          <Link
            href={href}
            className={`group/btn relative inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] px-5 py-3 transition overflow-hidden ${
              ctaStyle === "filled"
                ? "bg-brand text-foreground"
                : "border border-border-strong hover:border-foreground text-foreground"
            }`}
          >
            {ctaStyle === "filled" && (
              <span className="absolute inset-0 bg-brand-hover translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500" />
            )}
            <span className="relative">EXPLORE</span>
            <span className="relative transition-transform group-hover/btn:translate-x-1">
              <Arrow />
            </span>
          </Link>

          <span className="font-heading text-[9px] tracking-[0.25em] text-subtle">
            {serviceCount}
          </span>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-brand to-transparent transition-transform duration-700 group-hover:scale-x-100" />
    </div>
  );
}

function Glyph({ type }: { type: "diamond" | "star" | "play" }) {
  if (type === "diamond") {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        <path d="M7 1L13 7L7 13L1 7L7 1Z" />
      </svg>
    );
  }
  if (type === "star") {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        <path d="M7 0.5L8.2 5.5L13.5 7L8.2 8.5L7 13.5L5.8 8.5L0.5 7L5.8 5.5L7 0.5Z" />
      </svg>
    );
  }
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M2.5 1.5v9L10.5 6 2.5 1.5Z" />
    </svg>
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
