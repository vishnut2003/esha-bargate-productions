import Image from "next/image";
import Link from "next/link";

export function Press() {
  return (
    <section
      id="press"
      className="relative overflow-hidden border-b border-border py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[700px] h-[500px] bg-brand/10 rounded-full blur-[140px]" />
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
          / 11 — IN THE NEWS / PRESS & MEDIA
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              IN THE NEWS
            </span>
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
              Press & Media
            </span>
          </h2>
        </div>

        <div className="group relative overflow-hidden bg-surface/40 backdrop-blur-sm border border-border hover:border-brand transition-all duration-500 grid grid-cols-1 md:grid-cols-12">
          <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition z-10" />
          <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand opacity-0 group-hover:opacity-100 transition z-10" />
          <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand opacity-0 group-hover:opacity-100 transition z-10" />
          <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition z-10" />

          <div className="md:col-span-7 relative aspect-[16/9] md:aspect-auto md:min-h-[360px] overflow-hidden bg-background border-b md:border-b-0 md:border-r border-border">
            <Image
              src="/images/home/press/deadline.jpg"
              alt="EBP featured in Deadline Hollywood"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </div>

          <div className="md:col-span-5 p-7 sm:p-10 flex flex-col justify-center">
            <p className="font-heading text-[10px] tracking-[0.3em] text-brand mb-4">
              DEADLINE HOLLYWOOD
            </p>
            <h3 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight mb-4 leading-tight">
              Featured in <span className="text-brand">Deadline</span>
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-8">
              EBP featured in Deadline for the company&apos;s innovative
              approach bridging Hollywood and India.
            </p>

            <Link
              href="https://deadline.com/2024/03/esha-bargate-production-company-hollywood-india-1235844587/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-3 border border-border-strong hover:border-foreground text-foreground font-heading text-[11px] tracking-[0.2em] px-6 py-3.5 transition w-fit"
            >
              READ ARTICLE
              <span className="transition-transform group-hover/btn:translate-x-1">
                <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
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
