import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-32 min-h-[calc(100vh-72px)] flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-10 h-px bg-brand" />
          <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
            MEDIA PRODUCTIONS &amp; MARKETING AGENCY
          </span>
        </div>

        <h1 className="font-heading font-bold leading-[0.95] tracking-tight text-7xl sm:text-8xl md:text-9xl">
          <span className="block text-foreground">Esha</span>
          <span className="block text-brand">Bargate</span>
          <span className="block text-subtle font-normal">Productions</span>
        </h1>

        <p className="mt-10 font-heading text-[11px] tracking-[0.3em] text-brand">
          AI &amp; TRADITIONAL
        </p>

        <p className="mt-4 max-w-md text-sm text-muted leading-relaxed">
          Where cutting-edge AI meets timeless storytelling meets scroll-stopping
          drama marketing. Three verticals. One vision.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#digital-ai"
            className="bg-brand hover:bg-brand-hover text-foreground font-heading text-[11px] tracking-[0.2em] px-7 py-4 transition"
          >
            DIGITAL &amp; AI FRONTIER →
          </Link>
          <Link
            href="#cinematic-legacy"
            className="border border-border-strong hover:border-foreground text-foreground font-heading text-[11px] tracking-[0.2em] px-7 py-4 transition"
          >
            CINEMATIC LEGACY
          </Link>
          <Link
            href="#vertical-drama"
            className="border border-border-strong hover:border-foreground text-foreground font-heading text-[11px] tracking-[0.2em] px-7 py-4 transition"
          >
            VERTICAL DRAMA
          </Link>
        </div>
      </div>
    </section>
  );
}
