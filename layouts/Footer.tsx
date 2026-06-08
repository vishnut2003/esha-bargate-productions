import Link from "next/link";
import { Logo } from "@/components/Logo";

const verticals = [
  { num: "01", label: "Digital & AI Frontier", href: "#digital-ai" },
  { num: "02", label: "Cinematic Legacy", href: "#cinematic-legacy" },
  { num: "03", label: "Vertical Drama", href: "#vertical-drama" },
];

const navigate = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Investors", href: "#investors" },
  { label: "Streaming", href: "#streaming" },
  { label: "Pricing", href: "#pricing" },
  { label: "Careers", href: "#careers" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: "#contact" },
];

const social = [
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "YouTube", href: "#", icon: <YouTubeIcon /> },
];

const marqueeWords = [
  "DIGITAL",
  "AI",
  "CINEMA",
  "VERTICAL DRAMA",
  "STORYTELLING",
  "PRODUCTIONS",
  "MARKETING",
  "GLOBAL",
];

const stats = [
  { value: "2+", label: "CONTINENTS" },
  { value: "3+", label: "COLLABORATIONS" },
  { value: "3", label: "VERTICALS" },
  { value: "100%", label: "INCLUSIVE" },
];

const locations = [
  { city: "SAN FRANCISCO", coords: "37.7749° N · 122.4194° W" },
  { city: "LOS ANGELES", coords: "34.0522° N · 118.2437° W" },
  { city: "MUMBAI", coords: "19.0760° N · 72.8777° E" },
];

const platforms = ["Apple TV", "Google TV"];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent" />

      <MarqueeStrip />
      <CtaSection />
      <QuoteSection />
      <MainGrid />
      <LocationsStrip />
      <NewsletterSection />
      <LegalStrip />
    </footer>
  );
}

/* ---------- sections ---------- */

function MarqueeStrip() {
  const sequence = Array.from({ length: 2 }).flatMap(() => marqueeWords);
  return (
    <div className="relative border-b border-border overflow-hidden">
      <div className="flex w-max animate-marquee py-7 font-heading font-bold text-2xl sm:text-3xl tracking-tight">
        {sequence.map((word, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0 pr-12">
            <span className="text-foreground/60">{word}</span>
            <span className="text-brand text-base">◆</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="relative border-b border-border">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand/20 rounded-full blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <p className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.3em] text-brand mb-5">
              <span className="block w-8 h-px bg-brand" />
              LET&apos;S CREATE TOGETHER
            </p>
            <h2 className="font-heading font-bold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl">
              <span className="text-foreground">Ready to shape the </span>
              <span className="text-brand">future</span>
              <span className="text-foreground"> of media?</span>
            </h2>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-brand hover:bg-brand-hover text-foreground font-heading text-[11px] tracking-[0.25em] px-7 py-4 transition"
            >
              GET IN TOUCH
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading font-bold text-3xl sm:text-4xl text-brand-light leading-none">
                {s.value}
              </p>
              <p className="mt-2 font-heading text-[10px] tracking-[0.25em] text-subtle">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className="relative border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-20 text-center">
        <span
          aria-hidden
          className="block font-heading font-black text-8xl md:text-9xl text-brand/25 leading-none mb-[-2.5rem]"
        >
          &ldquo;
        </span>
        <blockquote className="relative text-2xl sm:text-3xl md:text-4xl font-heading font-light italic text-foreground/85 leading-tight max-w-3xl mx-auto">
          Alone we can tell a story.{" "}
          <span className="text-brand not-italic font-normal">Together</span>,
          we can start a movement.
        </blockquote>
        <p className="mt-8 flex items-center justify-center gap-3 font-heading text-[11px] tracking-[0.25em] text-subtle">
          <span className="block w-6 h-px bg-subtle" />
          ESHA BARGATE
          <span className="block w-6 h-px bg-subtle" />
        </p>
      </div>
    </div>
  );
}

function MainGrid() {
  return (
    <div className="relative max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12">
      <div className="md:col-span-4">
        <Link href="/" className="inline-block">
          <Logo className="text-lg" />
        </Link>
        <p className="mt-6 max-w-sm text-sm text-muted leading-relaxed">
          Where cutting-edge AI meets timeless storytelling meets
          scroll-stopping drama marketing. Three verticals. One vision.
        </p>

        <div className="mt-8">
          <p className="font-heading text-[9px] tracking-[0.3em] text-subtle mb-3">
            STREAMED ON
          </p>
          <div className="flex flex-wrap gap-2">
            {platforms.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-border text-xs text-foreground font-heading"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center border border-border text-muted hover:border-brand hover:text-brand transition"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="md:col-span-3">
        <h3 className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-6">
          VERTICALS
        </h3>
        <ul className="space-y-4">
          {verticals.map((v) => (
            <li key={v.href}>
              <Link href={v.href} className="group flex items-baseline gap-3">
                <span className="font-heading text-[10px] tracking-[0.2em] text-brand shrink-0">
                  {v.num}
                </span>
                <span className="relative text-sm text-muted group-hover:text-foreground transition">
                  {v.label}
                  <span className="absolute left-0 right-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2">
        <h3 className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-6">
          NAVIGATE
        </h3>
        <ul className="space-y-3">
          {navigate.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative inline-block text-sm text-muted hover:text-foreground transition"
              >
                {item.label}
                <span className="absolute left-0 right-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-3">
        <h3 className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-6">
          CONNECT
        </h3>
        <ul className="space-y-5">
          <li>
            <p className="font-heading text-[9px] tracking-[0.25em] text-subtle mb-1">
              WHATSAPP
            </p>
            <a
              href="https://wa.me/15109532966"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-brand transition"
            >
              +1 510-953-2966
            </a>
          </li>
          <li>
            <p className="font-heading text-[9px] tracking-[0.25em] text-subtle mb-1">
              EMAIL
            </p>
            <a
              href="mailto:contact@eshabargateproductions.com"
              className="text-sm text-foreground hover:text-brand transition break-all"
            >
              contact@eshabargateproductions.com
            </a>
          </li>
          <li>
            <p className="font-heading text-[9px] tracking-[0.25em] text-subtle mb-1">
              LOCATION
            </p>
            <p className="text-sm text-foreground">San Francisco, CA</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function LocationsStrip() {
  return (
    <div className="relative border-y border-border bg-surface/30">
      <div className="max-w-[1400px] mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <div key={loc.city} className="flex items-center gap-3">
            <span className="relative inline-flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <div>
              <p className="font-heading text-[11px] tracking-[0.2em] text-foreground">
                {loc.city}
              </p>
              <p className="font-heading text-[9px] tracking-wide text-subtle mt-0.5">
                {loc.coords}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsletterSection() {
  return (
    <div className="relative border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 right-0 w-[600px] h-[500px] bg-brand/15 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -top-32 left-0 w-[400px] h-[300px] bg-brand/10 rounded-full blur-[100px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <p className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.3em] text-brand mb-5">
            <span className="block w-8 h-px bg-brand" />
            THE EBP DISPATCH
          </p>
          <h2 className="font-heading font-bold tracking-tight leading-[1.05] text-4xl sm:text-5xl">
            <span className="text-foreground">Stay in the </span>
            <span className="text-brand italic">frame.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm text-muted leading-relaxed">
            Behind-the-scenes drops, early premieres, vertical drama releases,
            and investor briefings — straight to your inbox. Monthly.
          </p>
        </div>

        <div className="md:col-span-7">
          <form className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-subtle pointer-events-none">
                <MailIcon />
              </span>
              <input
                type="email"
                name="email"
                placeholder="your.email@studio.com"
                required
                className="w-full bg-surface/40 border border-border-strong text-foreground pl-11 pr-5 py-4 outline-none text-sm placeholder:text-subtle focus:border-brand focus:bg-surface transition"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-foreground font-heading text-[11px] tracking-[0.25em] px-7 py-4 transition shrink-0"
            >
              SUBSCRIBE
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </button>
          </form>

          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-heading text-[10px] tracking-[0.2em] text-subtle">
            <li className="inline-flex items-center gap-2">
              <CheckIcon />
              NO SPAM
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckIcon />
              UNSUBSCRIBE ANYTIME
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckIcon />
              ONE EMAIL / MONTH
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function LegalStrip() {
  return (
    <div className="relative border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-heading text-[10px] tracking-[0.25em] text-subtle">
        <span>© 2026 ESHA BARGATE PRODUCTIONS, LLC.</span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block w-1 h-1 rounded-full bg-brand" />
          EST. 2024 · SF · LA · MUMBAI · GLOBAL
          <span className="inline-block w-1 h-1 rounded-full bg-brand" />
        </span>
        <div className="flex gap-6">
          <Link href="#privacy" className="hover:text-foreground transition">
            PRIVACY
          </Link>
          <Link href="#terms" className="hover:text-foreground transition">
            TERMS
          </Link>
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

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand"
    >
      <path d="M2 6.5 5 9.5 10 3.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    >
      <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3h2v9h3v-9h2.5l.5-3H12V6.8c0-.5.4-.8.9-.8H15V3Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
