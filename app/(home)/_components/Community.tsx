export function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden border-b border-border py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand/10 rounded-full blur-[160px]" />
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
          / 13 — GIVING BACK / COMMUNITY & KARMA
        </span>
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="block w-10 h-px bg-brand" />
          <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
            GIVING BACK
          </span>
          <span className="block w-10 h-px bg-brand" />
        </div>

        <h2 className="font-heading font-bold tracking-tight leading-[1]">
          <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
            Community &{" "}
            <span className="text-brand">Karma</span>
          </span>
        </h2>

        <figure className="mt-12 max-w-3xl mx-auto">
          <blockquote className="font-heading italic text-2xl sm:text-3xl text-muted leading-snug">
            &ldquo;For every earning I make, I will donate 3% back to community
            support.&rdquo;
          </blockquote>
        </figure>

        <div className="mt-14 flex flex-wrap items-start justify-center gap-12 sm:gap-20">
          <Stat value="3%" label="OF EARNINGS" />
          <Stat value="∞" label="COMMITMENT" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-heading font-bold text-6xl sm:text-7xl text-brand leading-none tracking-tight">
        {value}
      </p>
      <p className="mt-4 font-heading text-[10px] tracking-[0.3em] text-subtle">
        {label}
      </p>
    </div>
  );
}
