import Link from "next/link";

const verticals = [
  { num: "01", label: "DIGITAL & AI FRONTIER", href: "#digital-ai" },
  { num: "02", label: "CINEMATIC LEGACY", href: "#cinematic-legacy" },
  { num: "03", label: "VERTICAL DRAMA", href: "#vertical-drama" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[800px] h-[600px] bg-brand/15 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[500px] bg-brand/10 rounded-full blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
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
          EST · 2024 · SF · LA · MUMBAI · GLOBAL
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 min-h-[calc(100vh-120px)] flex items-center py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="font-heading text-[10px] tracking-[0.4em] text-subtle">
                / 01 — EST. 2024
              </span>
              <span className="block w-10 h-px bg-brand" />
              <span className="font-heading text-[10px] tracking-[0.3em] text-brand">
                MEDIA PRODUCTIONS &amp; MARKETING AGENCY
              </span>
            </div>

            <div className="relative pl-5">
              <span className="absolute left-0 top-1 bottom-2 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent" />
              <h1 className="font-heading font-bold leading-[0.88] tracking-tight">
                <span className="block text-foreground text-[clamp(2.5rem,7.5vw,6.5rem)]">
                  Esha
                </span>
                <span className="block text-brand text-[clamp(2.5rem,7.5vw,6.5rem)]">
                  Bargate
                </span>
                <span className="block text-subtle font-light italic text-[clamp(2.5rem,7.5vw,6.5rem)]">
                  Productions
                </span>
              </h1>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
                AI &amp; TRADITIONAL
              </span>
              <span className="block w-10 h-px bg-brand/50" />
            </div>

            <p className="mt-3 max-w-md text-sm text-muted leading-relaxed">
              Where cutting-edge AI meets timeless storytelling meets
              scroll-stopping drama marketing. Three verticals. One vision.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href="#digital-ai"
                className="group relative inline-flex items-center gap-3 bg-brand text-foreground font-heading text-[11px] tracking-[0.2em] px-6 py-3.5 transition overflow-hidden"
              >
                <span className="absolute inset-0 bg-brand-hover translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative">DIGITAL &amp; AI FRONTIER</span>
                <span className="relative transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>
              <Link
                href="#cinematic-legacy"
                className="group inline-flex items-center gap-3 border border-border-strong hover:border-foreground text-foreground font-heading text-[11px] tracking-[0.2em] px-6 py-3.5 transition"
              >
                CINEMATIC LEGACY
                <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  <Arrow />
                </span>
              </Link>
              <Link
                href="#vertical-drama"
                className="group inline-flex items-center gap-3 border border-border-strong hover:border-foreground text-foreground font-heading text-[11px] tracking-[0.2em] px-6 py-3.5 transition"
              >
                VERTICAL DRAMA
                <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  <Arrow />
                </span>
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4 hidden lg:flex flex-col gap-5 justify-center">
            <div className="relative border border-border bg-surface/40 backdrop-blur-sm p-5">
              <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand" />
              <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand" />
              <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand" />
              <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand" />

              <div className="flex items-center gap-2 mb-4">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                <span className="font-heading text-[10px] tracking-[0.3em] text-brand">
                  NOW STREAMING
                </span>
              </div>

              <h3 className="font-heading font-bold italic text-2xl text-foreground">
                Sarhadain
              </h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                A cross-cultural narrative bridging worlds through compelling
                storytelling.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <Badge>APPLE TV</Badge>
                <Badge>GOOGLE TV</Badge>
                <Badge>INDIA</Badge>
              </div>
            </div>

            <div>
              <p className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-2">
                THREE VERTICALS
              </p>
              <div>
                {verticals.map((v) => (
                  <Link
                    key={v.href}
                    href={v.href}
                    className="group flex items-center gap-4 py-2.5 border-b border-border hover:border-brand transition"
                  >
                    <span className="font-heading text-[10px] tracking-[0.25em] text-brand shrink-0">
                      {v.num}
                    </span>
                    <span className="flex-1 font-heading text-[11px] tracking-[0.15em] text-muted group-hover:text-foreground transition">
                      {v.label}
                    </span>
                    <span className="text-brand transition-transform group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 right-6 hidden lg:flex flex-col items-end gap-2">
        <span className="font-heading text-[9px] tracking-[0.3em] text-subtle">
          SCROLL TO EXPLORE
        </span>
        <ScrollIndicator />
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-heading text-[9px] tracking-[0.2em] text-brand border border-brand/30 px-2 py-1">
      {children}
    </span>
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

function ScrollIndicator() {
  return (
    <span className="relative block w-5 h-8 border border-border-strong rounded-full">
      <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-px h-2 bg-brand animate-bounce" />
    </span>
  );
}
