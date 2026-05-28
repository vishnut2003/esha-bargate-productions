import Image from "next/image";

type Service = {
  glyph: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    glyph: "🎥",
    title: "Productions",
    description:
      "Full-service film and TV production across genres and formats.",
    image: "/images/home/cinematic-legacy/productions.jpg",
  },
  {
    glyph: "📝",
    title: "Show Development",
    description: "Original concepts, pilot scripts, bible creation for pitches.",
    image: "/images/home/cinematic-legacy/show-development.jpg",
  },
  {
    glyph: "📡",
    title: "Distribution & Placement",
    description:
      "Strategic placement on Apple TV, Google TV, OTT platforms, and global streaming networks.",
    image: "/images/home/cinematic-legacy/pr.jpg",
  },
  {
    glyph: "🎤",
    title: "Show Pitching & PR",
    description: "Pitch decks, media relations, press campaigns, networking.",
    image: "/images/home/cinematic-legacy/show-pitch.jpg",
  },
  {
    glyph: "✂️",
    title: "Pre & Post Production",
    description: "Casting, location scouting, editing, sound, color grading.",
    image: "/images/home/cinematic-legacy/pre-post.jpg",
  },
  {
    glyph: "🌍",
    title: "International Collab",
    description:
      "Cross-cultural co-productions spanning North America, Latin America, Africa, Europe, and South Asia.",
    image: "/images/home/cinematic-legacy/pr-1.jpg",
  },
];

export function CinematicLegacy() {
  return (
    <section
      id="cinematic-legacy"
      className="relative overflow-hidden border-b border-border py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -top-32 right-1/4 w-[700px] h-[500px] bg-foreground/5 rounded-full blur-[140px]" />
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
          / 05 — VERTICAL 02 / CINEMATIC LEGACY
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="font-heading text-[10px] tracking-[0.4em] text-brand">
              02
            </span>
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[10px] tracking-[0.3em] text-subtle">
              TRADITIONAL STORYTELLING & PRODUCTIONS
            </span>
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
              Cinematic{" "}
              <span className="text-subtle font-light italic">Legacy</span>
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm text-muted leading-relaxed">
            Rooted in the timeless art of cinema — from development to
            distribution, with a global perspective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ glyph, title, description, image }: Service) {
  return (
    <div className="group relative overflow-hidden bg-surface/40 backdrop-blur-sm border border-border hover:border-brand transition-all duration-500 hover:-translate-y-1 flex flex-col">
      <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition z-10" />
      <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand opacity-0 group-hover:opacity-100 transition z-10" />
      <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand opacity-0 group-hover:opacity-100 transition z-10" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition z-10" />

      <div className="relative aspect-[16/10] overflow-hidden bg-background">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        <span className="absolute top-4 left-4 text-2xl">{glyph}</span>
      </div>

      <div className="relative p-6 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-lg text-foreground mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-brand to-transparent transition-transform duration-700 group-hover:scale-x-100" />
    </div>
  );
}
