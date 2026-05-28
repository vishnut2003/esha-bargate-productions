type Service = {
  glyph: string;
  title: string;
  description: string;
  accent?: boolean;
};

const services: Service[] = [
  {
    glyph: "🎭",
    title: "Vertical Drama Marketing",
    description:
      "Vertical drama series with 2 to 5 minute episodes engineered for Instagram Reels, YouTube Shorts, and TikTok — binge-worthy story arcs built for mobile-first audiences.",
    accent: true,
  },
  {
    glyph: "📋",
    title: "Strategies & Consulting",
    description:
      "Market analysis, audience research, content roadmaps, launch strategies, and go-to-market plans for film, TV, and digital media projects.",
  },
  {
    glyph: "🎨",
    title: "Branding & Identity",
    description:
      "End-to-end brand strategy, visual identity systems, logo design, brand guidelines, and positioning for productions and talent.",
  },
  {
    glyph: "📱",
    title: "Social-First Content",
    description:
      "Native content designed for every platform — from 9:16 vertical stories to carousel narratives, community engagement, and viral format engineering.",
  },
  {
    glyph: "📈",
    title: "Campaign Architecture",
    description:
      "Multi-phase marketing campaigns with audience funnels, retargeting strategies, KPI frameworks, and real-time performance optimization.",
  },
  {
    glyph: "🎯",
    title: "Audience & Placement",
    description:
      "Precision audience targeting, media buying strategy, platform-specific placement, and cross-channel distribution for maximum reach and impact.",
  },
];

const platforms = ["INSTAGRAM REELS", "YOUTUBE SHORTS", "TIKTOK", "STORIES"];

export function VerticalDrama() {
  return (
    <section
      id="vertical-drama"
      className="relative overflow-hidden border-b border-border py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0, transparent 39px, rgba(220,38,38,0.4) 39px, rgba(220,38,38,0.4) 40px)",
        }}
      />
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[700px] h-[500px] bg-brand/12 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] bg-brand/10 rounded-full blur-[120px]" />

      <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 hidden xl:block">
        <span
          className="font-heading text-[9px] tracking-[0.5em] text-subtle"
          style={{ writingMode: "vertical-rl" }}
        >
          / 06 — VERTICAL 03 / DRAMA MARKETING
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="font-heading text-[10px] tracking-[0.4em] text-brand">
              03
            </span>
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[10px] tracking-[0.3em] text-subtle">
              DRAMA MARKETING · PLACEMENT · STRATEGIES · BRANDING
            </span>
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
              Vertical <span className="text-brand">Drama</span>
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm text-muted leading-relaxed">
            Where storytelling meets strategy. We create scroll-stopping
            vertical drama content, build unforgettable brands, engineer
            marketing strategies, and execute precision placement that moves
            audiences from attention to action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <p className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-6">
            FORMATS WE BUILD FOR
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {platforms.map((p) => (
              <div
                key={p}
                className="group relative border border-border bg-surface/40 backdrop-blur-sm aspect-[9/16] flex items-center justify-center overflow-hidden hover:border-brand transition"
              >
                <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition" />
                <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition" />

                <span className="absolute top-4 left-1/2 -translate-x-1/2 inline-flex h-3 w-3 rounded-full bg-brand">
                  <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                </span>

                <span
                  className="font-heading text-[10px] tracking-[0.3em] text-subtle group-hover:text-brand transition"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ glyph, title, description, accent }: Service) {
  return (
    <div className="group relative overflow-hidden bg-surface/40 backdrop-blur-sm border border-border hover:border-brand transition-all duration-500 hover:-translate-y-1 p-7 flex flex-col">
      <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand opacity-0 group-hover:opacity-100 transition" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition" />

      <span className="text-3xl mb-4">{glyph}</span>

      <h3
        className={`font-heading font-bold text-lg mb-3 tracking-tight ${
          accent ? "text-brand" : "text-foreground"
        }`}
      >
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>

      <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-brand to-transparent transition-transform duration-700 group-hover:scale-x-100" />
    </div>
  );
}
