import Link from "next/link";
import { Logo } from "@/components/Logo";

const verticals = [
  { label: "Digital & AI Frontier", href: "#digital-ai", accent: true },
  { label: "Cinematic Legacy", href: "#cinematic-legacy", accent: false },
  { label: "Vertical Drama", href: "#vertical-drama", accent: true },
];

const navigate = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Investors", href: "#investors" },
  { label: "Streaming", href: "#streaming" },
  { label: "Careers", href: "#careers" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <Logo className="text-lg" />
          <p className="mt-6 max-w-sm text-sm text-muted leading-relaxed">
            Where cutting-edge AI meets timeless storytelling meets
            scroll-stopping drama marketing. Three verticals. One vision.
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-heading text-[11px] tracking-[0.2em] text-subtle">
            VERTICALS
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {verticals.map((v) => (
              <li key={v.href}>
                <Link
                  href={v.href}
                  className={
                    v.accent
                      ? "text-brand hover:text-brand-light transition"
                      : "text-muted hover:text-foreground transition"
                  }
                >
                  {v.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-heading text-[11px] tracking-[0.2em] text-subtle">
            NAVIGATE
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            {navigate.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-foreground transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-heading text-[10px] tracking-[0.25em] text-subtle">
          <span>© 2026 ESHA BARGATE PRODUCTIONS, LLC.</span>
          <span>SAN FRANCISCO, CA</span>
        </div>
      </div>
    </footer>
  );
}
