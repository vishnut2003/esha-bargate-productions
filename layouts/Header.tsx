import Link from "next/link";
import { Logo } from "@/components/Logo";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "DIGITAL & AI FRONTIER", href: "#digital-ai" },
  { label: "CINEMATIC LEGACY", href: "#cinematic-legacy" },
  { label: "VERTICAL DRAMA", href: "#vertical-drama" },
  { label: "PROJECTS", href: "#projects" },
  { label: "COLLABORATIONS", href: "#collaborations" },
  { label: "INVESTORS", href: "#investors" },
  { label: "STREAMING", href: "#streaming" },
  { label: "CAREERS", href: "#careers" },
  { label: "CONTACT", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Logo className="text-sm whitespace-nowrap" />
        <nav className="hidden xl:flex items-center gap-6 font-heading text-[11px] tracking-[0.15em] text-muted">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Open menu"
          className="xl:hidden text-muted hover:text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </div>
    </header>
  );
}
