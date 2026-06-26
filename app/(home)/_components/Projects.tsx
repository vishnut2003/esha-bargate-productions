import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  badges: string[];
  status: string;
  meta?: string;
  poster: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Sarhadain",
    eyebrow: "APPLE TV & GOOGLE TV",
    description:
      "Released on Apple TV & Google TV in India. A cross-cultural narrative bridging worlds through compelling storytelling.",
    badges: ["Apple TV", "Google TV", "India Release"],
    status: "STREAMING NOW",
    poster: "/images/home/projects/sarhadein-poster.jpg",
    href: "#streaming",
  },
  {
    title: "The Mediator",
    eyebrow: "2025 · SHORT FILM",
    description:
      "A short drama following Shayna Johnson — Harvard Law trained mediator — navigating a messy family court case. Dir: Mugisha Feruzi & Kathy-Ann Hart.",
    badges: ["Short Film", "Drama", "IMDb: tt38821662"],
    status: "COMPLETED",
    poster: "/images/home/projects/mediator-poster.jpg",
    href: "https://www.imdb.com/title/tt38821662/",
  },
];

const recognition = [
  { glyph: "🏆", label: "Festival Selection" },
  { glyph: "🎬", label: "Official Entry" },
  { glyph: "⭐", label: "Jury Nominated" },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-border py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[700px] h-[500px] bg-brand/12 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] bg-brand/8 rounded-full blur-[120px]" />
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
          / 07 — FEATURED WORK / PROJECTS & RELEASES
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              FEATURED WORK
            </span>
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
              Projects & Releases
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <div className="text-center">
            <p className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-6">
              RECOGNITION
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {recognition.map((r) => (
                <span
                  key={r.label}
                  className="inline-flex items-center gap-3 text-muted"
                >
                  <span className="text-2xl">{r.glyph}</span>
                  <span className="font-heading text-sm">{r.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <figure className="text-center max-w-3xl mx-auto">
            <blockquote className="font-heading italic text-2xl sm:text-3xl text-muted leading-snug">
              &ldquo;Alone we can tell a story. Together, we can start a
              movement.&rdquo;
            </blockquote>
            <figcaption className="mt-6 font-heading text-[10px] tracking-[0.3em] text-brand">
              — ESHA BARGATE
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  eyebrow,
  description,
  badges,
  status,
  meta,
  poster,
  href,
}: Project) {
  return (
    <div className="group relative overflow-hidden bg-surface/40 backdrop-blur-sm border border-border hover:border-brand transition-all duration-500">
      <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition z-10" />
      <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand opacity-0 group-hover:opacity-100 transition z-10" />
      <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand opacity-0 group-hover:opacity-100 transition z-10" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition z-10" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        <div className="md:col-span-5 relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden bg-background">
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/80" />
          <span className="absolute top-4 left-4 inline-flex items-center gap-2 font-heading text-[9px] tracking-[0.3em] text-foreground bg-background/80 backdrop-blur-sm border border-border px-3 py-1.5">
            <span className="block w-1.5 h-1.5 rounded-full bg-brand" />
            {status}
          </span>
        </div>

        <div className="md:col-span-7 p-7 sm:p-10 flex flex-col justify-center">
          <p className="font-heading text-[10px] tracking-[0.3em] text-brand mb-3">
            {eyebrow}
          </p>
          <h3 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight mb-4">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed max-w-lg mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {badges.map((b) => (
              <span
                key={b}
                className="font-heading text-[9px] tracking-[0.2em] text-brand border border-brand/30 px-2.5 py-1.5"
              >
                {b}
              </span>
            ))}
          </div>

          {meta && (
            <p className="font-heading text-[10px] tracking-[0.25em] text-subtle mb-6">
              {meta}
            </p>
          )}

          <Link
            href={href}
            className="group/btn inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.25em] text-foreground hover:text-brand transition w-fit"
          >
            VIEW PROJECT
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
