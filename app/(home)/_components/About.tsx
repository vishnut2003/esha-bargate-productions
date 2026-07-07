import Image from "next/image";
import { ScrollLink } from "@/components/ScrollLink";

const stats = [
  { value: "3+", label: "COLLABORATIONS" },
  { value: "3", label: "VERTICALS" },
  { value: "100%", label: "INCLUSIVE" },
];

export function About() {
  return (
    <section
      id="about"
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
          / 03 — ABOUT / GLOBAL MEDIA POWERHOUSE
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-3 gap-6 mb-20 pb-12 border-b border-border">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading font-bold text-5xl sm:text-6xl text-brand/80 leading-none tracking-tight">
                {s.value}
              </p>
              <p className="mt-3 font-heading text-[10px] tracking-[0.3em] text-subtle">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-brand" />
              <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
                GLOBAL MEDIA POWERHOUSE
              </span>
            </div>

            <h2 className="font-heading font-bold tracking-tight leading-[1]">
              <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
                Built for the
              </span>
              <span className="block text-brand text-5xl sm:text-6xl md:text-7xl mt-1">
                Global Stage
              </span>
            </h2>

            <div className="mt-8 space-y-5 max-w-xl">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold">
                  We don&apos;t just create content — we engineer global media
                  ecosystems.
                </span>{" "}
                <span className="text-muted">
                  In a $325 billion entertainment landscape being reshaped by AI,
                  vertical-first consumption, and cross-border storytelling, Esha
                  Bargate Productions operates at the exact intersection where
                  the future of media is being built.
                </span>
              </p>

              <p className="text-sm text-muted leading-relaxed">
                Founded by Esha Bargate — Showrunner, TV Show Creator, and
                Global Media Strategist — EBP is a three-vertical powerhouse
                spanning AI-driven productions, traditional cinema, and the
                explosive vertical drama format. With content already streaming
                on Apple TV and Google TV, and collaborations spanning five
                continents, we&apos;re building a global entertainment ecosystem
                powered by AI innovation.
              </p>

              <p className="text-sm text-muted leading-relaxed">
                Our reach spans North America, Latin America, Africa, Europe,
                and South Asia. By deploying AI innovation across every stage of
                production, distribution, and marketing, we deliver content that
                scales across cultures, platforms, and formats — from theatrical
                features to 2–5 minute vertical drama episodes that captivate
                mobile-first audiences worldwide.
              </p>
            </div>

            <div className="mt-8">
              <ScrollLink
                href="#streaming"
                className="group inline-flex items-center gap-3 border border-border-strong hover:border-foreground text-foreground font-heading text-[11px] tracking-[0.2em] px-6 py-3.5 transition"
              >
                EXPLORE OUR GLOBAL REACH
                <span className="transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </ScrollLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative border border-border bg-surface/40 backdrop-blur-sm p-8 sm:p-10">
              <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand" />
              <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand" />
              <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand" />
              <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand" />

              <div className="relative aspect-square w-full max-w-[360px] mx-auto bg-foreground/[0.02] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/home/about/aboutnew.png"
                  alt="Esha Bargate Productions"
                  width={360}
                  height={360}
                  className="object-contain w-full h-full p-6"
                />
              </div>

              <p className="mt-6 text-center font-heading text-[10px] tracking-[0.4em] text-subtle">
                EST · 2024 · SF · LA · MUMBAI · GLOBAL
              </p>
            </div>
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
