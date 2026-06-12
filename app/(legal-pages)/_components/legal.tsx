import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- page shell ---------- */

export function LegalShell({
  title,
  effectiveDate,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent" />

      <div className="pointer-events-none absolute top-0 left-1/4 w-[700px] h-[500px] bg-brand/10 rounded-full blur-[140px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-20 sm:py-24">
        {/* ---- header ---- */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              LEGAL
            </span>
          </div>

          <h1 className="font-heading font-bold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl text-foreground">
            {title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 font-heading text-[10px] tracking-[0.25em] text-subtle">
            <span>EFFECTIVE: {effectiveDate}</span>
            <span>LAST UPDATED: {lastUpdated}</span>
          </div>

          <div className="mt-8 space-y-4 border-l-2 border-brand/40 pl-5">
            {intro}
          </div>
        </header>

        {/* ---- body ---- */}
        <div className="space-y-12">{children}</div>

        {/* ---- footer nav ---- */}
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] text-muted hover:text-foreground transition"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            BACK TO HOME
          </Link>
          <div className="flex gap-6 font-heading text-[11px] tracking-[0.2em] text-subtle">
            <Link
              href="/privacy-policy"
              className="hover:text-foreground transition"
            >
              PRIVACY
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-foreground transition"
            >
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- content primitives ---------- */

export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted leading-relaxed">{children}</p>;
}

export function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="scroll-mt-24">
      <h2 className="font-heading font-bold tracking-tight text-2xl sm:text-3xl text-foreground mb-5 flex items-baseline gap-3">
        <span className="text-brand text-base sm:text-lg shrink-0">{n}</span>
        <span>{title}</span>
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-heading font-bold text-base text-foreground tracking-tight pt-2">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted leading-relaxed">{children}</p>;
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm text-foreground/90 leading-relaxed bg-surface/50 border border-border px-5 py-4">
      {children}
    </p>
  );
}

export function Legalese({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs text-muted leading-relaxed tracking-wide">{children}</p>
  );
}

export function Bullets({ children }: { children: ReactNode }) {
  return <ul className="space-y-3">{children}</ul>;
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-brand mt-1 shrink-0 text-[10px] leading-none">
        ▸
      </span>
      <span className="text-sm text-muted leading-relaxed">{children}</span>
    </li>
  );
}

export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

export function Mail({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className="text-brand hover:text-brand-light transition break-words"
    >
      {address}
    </a>
  );
}

export function ContactCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-surface/50 border border-border p-6 space-y-3">
      {children}
    </div>
  );
}

export function ContactRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <p className="text-sm text-muted leading-relaxed">
      <span className="font-heading text-[10px] tracking-[0.2em] text-subtle mr-2 uppercase">
        {label}
      </span>
      <span className="text-foreground">{children}</span>
    </p>
  );
}
