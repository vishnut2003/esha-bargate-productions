import Link from "next/link";

const partnerships = [
  {
    glyph: "🌊",
    title: "OTT Platforms",
    description:
      "Netflix, Amazon Prime, Hulu, Disney+, Peacock, Paramount+, and regional OTT services across Asia.",
  },
  {
    glyph: "📡",
    title: "Broadcast Networks",
    description:
      "Major broadcast and cable networks for episodic series, specials, and limited series placement.",
  },
  {
    glyph: "🌍",
    title: "International Distributors",
    description:
      "Territory-specific distribution partners for theatrical, digital, and broadcast rights across global markets.",
  },
  {
    glyph: "📱",
    title: "Mobile-First Platforms",
    description:
      "YouTube, Instagram, TikTok, and emerging short-form platforms for vertical drama content distribution.",
  },
  {
    glyph: "🎪",
    title: "Festival & Market",
    description:
      "Film markets (AFM, EFM, Cannes Marché) and festival circuit partnerships for premieres and sales.",
  },
  {
    glyph: "✈️",
    title: "Airline & Hospitality",
    description:
      "In-flight entertainment, hotel streaming, and cruise line content licensing opportunities.",
  },
];

const titles = [
  {
    name: "Sarhadain",
    format: "FEATURE FILM",
    status: "Available",
    territory: "Global excl. India",
  },
  {
    name: "The Mediator",
    format: "SHORT FILM",
    status: "Available",
    territory: "Worldwide",
  },
];

export function Streaming() {
  return (
    <section
      id="streaming"
      className="relative overflow-hidden border-b border-border py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -top-32 right-1/4 w-[700px] h-[500px] bg-brand/12 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[400px] bg-brand/8 rounded-full blur-[120px]" />
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
          / 10 — DISTRIBUTION & LICENSING / STREAMING
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              DISTRIBUTION & LICENSING
            </span>
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
              Streaming{" "}
              <span className="text-subtle font-light italic">&</span>{" "}
              Distributors
            </span>
          </h2>

          <p className="mt-6 text-sm text-muted leading-relaxed">
            We&apos;re actively seeking partnerships with streaming platforms,
            broadcast networks, and international distributors. Our content
            spans AI-driven innovation, cross-cultural cinema, and trend-setting
            vertical drama — ready for global audiences.
          </p>
        </div>

        <div className="mb-16">
          <p className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-4">
            STREAMED AT
          </p>
          <div className="flex flex-wrap gap-3">
            <PlatformChip>Apple TV</PlatformChip>
            <PlatformChip>Google TV</PlatformChip>
          </div>
        </div>

        <div className="mb-16">
          <p className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-6">
            SEEKING PARTNERSHIPS WITH
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((p) => (
              <PartnerCard key={p.title} {...p} />
            ))}
          </div>
        </div>

        <div className="relative border border-border bg-surface/40 backdrop-blur-sm p-7 sm:p-10">
          <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand" />
          <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand" />
          <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand" />
          <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand" />

          <p className="font-heading text-[11px] tracking-[0.3em] text-brand mb-6">
            ▸ CONTENT AVAILABLE FOR LICENSING
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {titles.map((t) => (
              <div
                key={t.name}
                className="relative border border-border p-5 hover:border-brand transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-foreground">
                      {t.name}
                    </h4>
                    <p className="mt-1 inline-flex items-center gap-2 text-xs">
                      <span className="block w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-foreground">{t.status}</span>
                      <span className="text-subtle">· {t.territory}</span>
                    </p>
                  </div>
                  <span className="font-heading text-[9px] tracking-[0.2em] text-brand border border-brand/30 px-2 py-1 shrink-0">
                    {t.format}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="mailto:distribution@eshabargateproductions.com?subject=Request%20Screening"
              className="group relative inline-flex items-center gap-3 bg-brand text-foreground font-heading text-[11px] tracking-[0.2em] px-6 py-3.5 transition overflow-hidden"
            >
              <span className="absolute inset-0 bg-brand-hover translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative">REQUEST SCREENING</span>
              <span className="relative transition-transform group-hover:translate-x-1">
                <Arrow />
              </span>
            </Link>
            <Link
              href="mailto:distribution@eshabargateproductions.com?subject=Download%20Catalog"
              className="group inline-flex items-center gap-3 border border-border-strong hover:border-foreground text-foreground font-heading text-[11px] tracking-[0.2em] px-6 py-3.5 transition"
            >
              DOWNLOAD CATALOG
              <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                <Arrow />
              </span>
            </Link>
          </div>

          <p className="mt-6 font-heading text-[10px] tracking-[0.25em] text-subtle">
            distribution@eshabargateproductions.com
          </p>
        </div>
      </div>
    </section>
  );
}

function PlatformChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-border-strong bg-surface/60 px-5 py-3 font-heading text-sm text-foreground hover:border-brand transition">
      <span className="block w-1.5 h-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

function PartnerCard({
  glyph,
  title,
  description,
}: {
  glyph: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative bg-surface/40 backdrop-blur-sm border border-border hover:border-brand transition-all duration-500 p-6">
      <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition" />

      <span className="text-2xl">{glyph}</span>
      <h3 className="mt-3 font-heading font-bold text-base text-foreground tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
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
