"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const verticals = [
  {
    num: "01",
    label: "Digital & AI Frontier",
    href: "#digital-ai",
    desc: "AI · VR · Generative Media",
    glyph: "◆",
  },
  {
    num: "02",
    label: "Cinematic Legacy",
    href: "#cinematic-legacy",
    desc: "Productions · Distribution · Story",
    glyph: "✦",
  },
  {
    num: "03",
    label: "Vertical Drama",
    href: "#vertical-drama",
    desc: "Mobile-First · 9:16 · Bingeable",
    glyph: "▶",
  },
];

const primaryNav = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "COLLABORATIONS", href: "#collaborations" },
  { label: "INVESTORS", href: "#investors" },
  { label: "STREAMING", href: "#streaming" },
  { label: "CAREERS", href: "#careers" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const SHRINK_AT = 80;
    const EXPAND_AT = 20;
    const onScroll = () => {
      const y = window.scrollY;
      setShrunk((prev) => {
        if (!prev && y > SHRINK_AT) return true;
        if (prev && y < EXPAND_AT) return false;
        return prev;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <UtilityBar />

      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent" />

        <div
          className={`transition-[height] duration-300 ease-out ${
            shrunk ? "h-14" : "h-20"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between gap-6">
            <LogoCluster shrunk={shrunk} />

            <nav className="hidden xl:flex items-center font-heading text-[11px] tracking-[0.18em]">
              <VerticalsMegaMenu />
              <span className="block h-4 w-px bg-border mx-3" />
              {primaryNav.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="#reel"
                className="group hidden md:inline-flex items-center gap-2 border border-border-strong hover:border-foreground text-muted hover:text-foreground font-heading text-[10px] tracking-[0.25em] px-4 py-2.5 transition"
              >
                <span className="text-brand transition-transform group-hover:scale-110">
                  <PlayIcon />
                </span>
                REEL
              </Link>

              <Link
                href="#contact"
                className="group relative hidden md:inline-flex items-center gap-2 bg-brand text-foreground font-heading text-[10px] tracking-[0.25em] px-5 py-2.5 transition overflow-hidden"
              >
                <span className="absolute inset-0 bg-brand-hover translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative">GET IN TOUCH</span>
                <span className="relative transition-transform group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="xl:hidden p-2 -mr-2 text-muted hover:text-foreground transition"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}

/* ---------- pieces ---------- */

function UtilityBar() {
  return (
    <div className="border-b border-border bg-surface/40">
      <div className="max-w-[1400px] mx-auto px-6 h-10 flex items-center justify-between gap-6 font-heading text-[10px] tracking-[0.25em]">
          <div className="flex items-center gap-3 min-w-0">
            <span className="relative inline-flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <span className="text-brand whitespace-nowrap">NOW STREAMING</span>
            <span className="hidden sm:inline text-border-strong">/</span>
            <span className="hidden sm:inline text-muted truncate">
              SARHADAIN on APPLE TV &amp; GOOGLE TV
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-subtle shrink-0">
            <span className="inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand" />
              OPEN FOR PROJECTS
            </span>
            <span className="text-border-strong">·</span>
            <span>SF · LA · MUMBAI</span>
          </div>
        </div>
    </div>
  );
}

function LogoCluster({ shrunk }: { shrunk: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3 shrink-0">
      <span
        className={`relative flex items-center justify-center border border-border-strong group-hover:border-brand transition-all duration-300 ${
          shrunk ? "w-7 h-7" : "w-9 h-9"
        }`}
      >
        <span className="pointer-events-none absolute -top-px -left-px w-1.5 h-1.5 border-t border-l border-brand opacity-0 group-hover:opacity-100 transition" />
        <span className="pointer-events-none absolute -top-px -right-px w-1.5 h-1.5 border-t border-r border-brand opacity-0 group-hover:opacity-100 transition" />
        <span className="pointer-events-none absolute -bottom-px -left-px w-1.5 h-1.5 border-b border-l border-brand opacity-0 group-hover:opacity-100 transition" />
        <span className="pointer-events-none absolute -bottom-px -right-px w-1.5 h-1.5 border-b border-r border-brand opacity-0 group-hover:opacity-100 transition" />
        <span className="font-heading font-bold text-[10px] tracking-tighter text-foreground">
          EB
        </span>
      </span>
      <div className="flex flex-col leading-none">
        <Logo className="text-sm whitespace-nowrap" />
        <span
          className={`hidden sm:block overflow-hidden font-heading text-[8px] tracking-[0.3em] text-subtle transition-all duration-300 ${
            shrunk ? "max-h-0 mt-0 opacity-0" : "max-h-4 mt-1.5 opacity-100"
          }`}
        >
          AI · CINEMA · DRAMA
        </span>
      </div>
    </Link>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative px-3 py-2 text-muted hover:text-foreground transition"
    >
      {label}
      <span className="absolute left-3 right-3 -bottom-px h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

function VerticalsMegaMenu() {
  return (
    <div className="group static">
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 py-2 text-muted hover:text-foreground transition"
      >
        VERTICALS
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className="opacity-60 transition duration-300 group-hover:rotate-180"
        >
          <path
            d="M2 4L5 7L8 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="invisible absolute inset-x-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative bg-surface border border-border shadow-2xl shadow-black/60 p-6">
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/10 rounded-full blur-[100px]" />

            <p className="relative font-heading text-[10px] tracking-[0.3em] text-subtle mb-5">
              EXPLORE OUR THREE VERTICALS
            </p>

            <div className="relative grid grid-cols-3 gap-4">
              {verticals.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  className="group/card relative bg-background/60 border border-border hover:border-brand p-5 transition"
                >
                  <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand opacity-0 group-hover/card:opacity-100 transition" />
                  <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand opacity-0 group-hover/card:opacity-100 transition" />

                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-heading text-[10px] tracking-[0.25em] text-brand">
                      {v.num}
                    </span>
                    <span className="block flex-1 h-px bg-border-strong" />
                    <span className="text-brand text-base leading-none">
                      {v.glyph}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-foreground transition group-hover/card:text-brand normal-case tracking-tight">
                    {v.label}
                  </h4>

                  <p className="mt-2 text-xs text-muted leading-relaxed normal-case tracking-normal">
                    {v.desc}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-[10px] tracking-[0.25em] text-brand transition-all opacity-60 group-hover/card:opacity-100">
                    EXPLORE
                    <span className="transition-transform group-hover/card:translate-x-1">
                      <ArrowRight />
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="relative mt-5 pt-5 border-t border-border flex items-center justify-between gap-4">
              <p className="font-heading text-[10px] tracking-[0.3em] text-subtle">
                THREE VERTICALS · ONE VISION
              </p>
              <Link
                href="#about"
                className="group/all inline-flex items-center gap-2 font-heading text-[10px] tracking-[0.25em] text-foreground hover:text-brand transition"
              >
                DISCOVER THE STUDIO
                <span className="transition-transform group-hover/all:translate-x-1">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl overflow-y-auto">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <Logo className="text-sm" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 -mr-2 text-muted hover:text-foreground transition"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="py-10 space-y-12">
          <div>
            <p className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-5">
              VERTICALS
            </p>
            <div className="grid gap-3">
              {verticals.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  onClick={onClose}
                  className="group flex items-start gap-4 p-4 border border-border hover:border-brand transition"
                >
                  <span className="font-heading text-xs tracking-[0.25em] text-brand">
                    {v.num}
                  </span>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="font-heading text-base text-foreground transition group-hover:text-brand">
                      {v.label}
                    </span>
                    <span className="text-xs text-muted">{v.desc}</span>
                  </div>
                  <span className="text-brand">{v.glyph}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-5">
              EXPLORE
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="font-heading text-2xl tracking-tight text-foreground hover:text-brand transition py-3 border-b border-border"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-foreground font-heading text-[11px] tracking-[0.25em] px-7 py-4 transition"
            >
              GET IN TOUCH
              <ArrowRight />
            </Link>
            <Link
              href="#reel"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 border border-border-strong hover:border-foreground text-foreground font-heading text-[11px] tracking-[0.25em] px-7 py-4 transition"
            >
              <span className="text-brand">
                <PlayIcon />
              </span>
              WATCH REEL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- icons ---------- */

function ArrowRight() {
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

function PlayIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <path d="M2 1.2v7.6L8.5 5 2 1.2Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <line x1="4" y1="8" x2="20" y2="8" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
      <line x1="4" y1="16" x2="14" y2="16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
      <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
    </svg>
  );
}
