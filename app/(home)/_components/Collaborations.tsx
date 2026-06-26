import Link from "next/link";

type Partner = {
  num: string;
  name: string;
  location: string;
  description: string;
  tags: string[];
  highlightLabel: string;
  highlightValue: string;
  upcomingValue?: string;
  href: string;
  glow: string;
};

const partners: Partner[] = [
  {
    num: "01",
    name: "House On A Hill Entertainment",
    location: "LOS ANGELES, CA",
    description:
      "A Los Angeles-based production powerhouse specializing in script development, script supervision, and production support from script to screen.",
    tags: ["Script Development", "Production Support", "Film"],
    highlightLabel: "STREAMING",
    highlightValue: "",
    href: "#",
    glow: "from-blue-500/20 to-blue-900/20",
  },
  {
    num: "02",
    name: "The Capital Films LLC",
    location: "UNITED STATES",
    description:
      "A premier US-based production company covering feature films, shorts, web series, and digital content with cinematic quality.",
    tags: ["Feature Films", "Video Production", "Post Production"],
    highlightLabel: "JOINT PROJECT",
    highlightValue: "Sarhadain",
    upcomingValue: "Black Morning and Stolen Innocence",
    href: "#",
    glow: "from-amber-500/20 to-amber-900/20",
  },
  {
    num: "03",
    name: "The Mediator",
    location: "INTERNATIONAL",
    description:
      "Esha Bargate Productions LLC partnered on the marketing and distribution of The Mediator, expanding audience reach and industry visibility.",
    tags: ["Short Film", "Drama", "Direction"],
    highlightLabel: "COMPLETED",
    highlightValue: "",
    href: "https://www.imdb.com/title/tt38821662/",
    glow: "from-purple-500/20 to-purple-900/20",
  },
];

export function Collaborations() {
  return (
    <section
      id="collaborations"
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
          / 08 — STRATEGIC ALLIANCES / COLLABORATIONS
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              STRATEGIC ALLIANCES
            </span>
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
              Collaborations
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {partners.map((p) => (
            <PartnerCard key={p.num} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  num,
  name,
  location,
  description,
  tags,
  highlightLabel,
  highlightValue,
  upcomingValue,
  href,
  glow,
}: Partner) {
  return (
    <div className="group relative overflow-hidden bg-surface/40 backdrop-blur-sm border border-border hover:border-brand transition-all duration-500 grid grid-cols-1 md:grid-cols-12">
      <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition z-10" />
      <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand opacity-0 group-hover:opacity-100 transition z-10" />
      <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand opacity-0 group-hover:opacity-100 transition z-10" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition z-10" />

      <div
        className={`md:col-span-3 relative aspect-[16/10] md:aspect-auto md:min-h-[240px] bg-gradient-to-br ${glow} flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-border`}
      >
        <p className="font-heading font-bold text-sm text-foreground text-center leading-tight">
          {name}
        </p>
        <p className="mt-2 font-heading text-[9px] tracking-[0.3em] text-subtle">
          {location}
        </p>
      </div>

      <div className="md:col-span-9 p-7 sm:p-10">
        <div className="flex items-center justify-between mb-4">
          <p className="font-heading text-[10px] tracking-[0.3em] text-brand">
            PARTNER {num}
          </p>
          <p className="font-heading text-[9px] tracking-[0.25em] text-subtle">
            {num}/03
          </p>
        </div>

        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight mb-3">
          {name}
        </h3>
        <p className="text-sm text-muted leading-relaxed max-w-2xl mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((t) => (
            <span
              key={t}
              className="font-heading text-[9px] tracking-[0.2em] text-subtle border border-border px-2.5 py-1.5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-border">
          <div>
            <p className="font-heading text-[9px] tracking-[0.3em] text-subtle">
              {highlightLabel}
            </p>
            {highlightValue && (
              <p className="mt-1 font-heading italic text-brand text-base">
                {highlightValue}
              </p>
            )}
            {upcomingValue && (
              <>
                <p className="mt-3 font-heading text-[9px] tracking-[0.3em] text-subtle">
                  UPCOMING PROJECTS
                </p>
                <p className="mt-1 font-heading italic text-brand text-base">
                  {upcomingValue}
                </p>
              </>
            )}
          </div>

          <Link
            href={href}
            className="group/btn inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.25em] text-foreground hover:text-brand transition"
          >
            VIEW
            <span className="transition-transform group-hover/btn:translate-x-1">
              <Arrow />
            </span>
          </Link>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-brand to-transparent transition-transform duration-700 group-hover:scale-x-100" />
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
