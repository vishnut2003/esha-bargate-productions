import Image from "next/image";
import Link from "next/link";

const values = [
  "Creative Risk-Takers",
  "Cross-Cultural Storytellers",
  "AI & Tech Enthusiasts",
  "Self-Starters",
  "Collaborative Spirits",
  "Diversity Champions",
];

export function Careers() {
  return (
    <section
      id="careers"
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
          / 12 — JOIN OUR TEAM / CAREERS
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-brand" />
              <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
                JOIN OUR TEAM
              </span>
            </div>

            <h2 className="font-heading font-bold tracking-tight leading-[1]">
              <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
                Careers at{" "}
                <span className="text-brand">EBP</span>
              </span>
            </h2>

            <div className="mt-8 space-y-5 max-w-xl">
              <p className="text-sm text-foreground leading-relaxed">
                We&apos;re building a team of visionaries, creators, and
                strategists who thrive at the crossroads of technology and
                storytelling. If you&apos;re passionate about shaping the future
                of media, we want to hear from you.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                We&apos;re a remote-first company based in San Francisco,
                collaborating globally across North America, Latin America,
                Africa, Europe, and South Asia. We value diversity, creativity,
                and the relentless pursuit of exceptional storytelling.
              </p>
            </div>

            <div className="mt-10">
              <p className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-4">
                WHAT WE VALUE
              </p>
              <div className="flex flex-wrap gap-2">
                {values.map((v) => (
                  <span
                    key={v}
                    className="font-heading text-xs text-foreground border border-border bg-surface/40 px-4 py-2.5 hover:border-brand hover:text-brand transition"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative border border-border bg-surface/40 backdrop-blur-sm overflow-hidden">
              <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand z-10" />
              <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand z-10" />
              <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand z-10" />
              <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand z-10" />

              <div className="relative aspect-[4/5] bg-background">
                <Image
                  src="/images/home/careers/careers.jpg"
                  alt="Join our team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="font-heading text-[10px] tracking-[0.3em] text-brand mb-2">
                    REMOTE-FIRST
                  </p>
                  <p className="font-heading font-bold text-2xl text-foreground leading-tight">
                    Build the future of media{" "}
                    <span className="text-subtle font-light italic">
                      with us.
                    </span>
                  </p>
                  <p className="mt-3 font-heading text-[10px] tracking-[0.25em] text-subtle">
                    SF · LA · MUMBAI · GLOBAL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-border text-center">
          <p className="font-heading italic text-lg text-muted mb-6">
            Don&apos;t see your role? We&apos;re always looking for exceptional
            talent.
          </p>
          <Link
            href="mailto:eshabargateproductions@gmail.com?subject=Reel%20%26%20Resume"
            className="group relative inline-flex items-center gap-3 bg-brand text-foreground font-heading text-[11px] tracking-[0.2em] px-7 py-4 transition overflow-hidden"
          >
            <span className="absolute inset-0 bg-brand-hover translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative">SEND YOUR REEL & RESUME</span>
            <span className="relative transition-transform group-hover:translate-x-1">
              <Arrow />
            </span>
          </Link>
          <p className="mt-5 font-heading text-[10px] tracking-[0.25em] text-subtle">
            eshabargateproductions@gmail.com
          </p>
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
