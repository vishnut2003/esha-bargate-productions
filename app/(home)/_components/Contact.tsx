import { ContactForm } from "@/components/ContactForm";

const emails = [
  { label: "GENERAL", value: "contact@eshabargateproductions.com" },
  { label: "INVESTORS", value: "investors@eshabargateproductions.com" },
  { label: "DISTRIBUTION", value: "distribution@eshabargateproductions.com" },
  { label: "CAREERS", value: "careers@eshabargateproductions.com" },
];

const social = [
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "YouTube", href: "#", icon: <YouTubeIcon /> },
];

const stats = [
  { value: "< 24h", label: "RESPONSE TIME" },
  { value: "PT / IST", label: "TIMEZONES" },
  { value: "OPEN", label: "FOR PROJECTS" },
  { value: "EN / HI", label: "LANGUAGES" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-24 sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent" />

      <div className="pointer-events-none absolute top-0 left-1/4 w-[700px] h-[500px] bg-brand/12 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] bg-brand/10 rounded-full blur-[120px]" />
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
          / 06 — LET&apos;S CONNECT / START A STORY
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-brand" />
            <span className="font-heading text-[11px] tracking-[0.3em] text-brand">
              LET&apos;S CREATE TOGETHER
            </span>
            <span className="block w-10 h-px bg-brand" />
          </div>

          <h2 className="font-heading font-bold tracking-tight leading-[1]">
            <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl">
              Get in Touch.
            </span>
            <span className="block text-brand text-5xl sm:text-6xl md:text-7xl italic font-light mt-1">
              Start a Story.
            </span>
          </h2>

          <p className="mt-8 max-w-xl mx-auto text-sm text-muted leading-relaxed">
            Whether you&apos;re an investor, distributor, or collaborator —
            let&apos;s build something extraordinary together. We typically
            respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative border border-border bg-surface/40 backdrop-blur-sm p-6">
              <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand" />
              <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand" />

              <div className="flex items-center gap-3 mb-2">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                <p className="font-heading text-[10px] tracking-[0.3em] text-brand">
                  AVAILABLE NOW
                </p>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Open for projects, collaborations, and partnerships across SF ·
                LA · MUMBAI · GLOBAL.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3 text-subtle">
                <PhoneIcon />
                <p className="font-heading text-[10px] tracking-[0.3em]">
                  PHONE
                </p>
              </div>
              <a
                href="tel:+15109532966"
                className="font-heading font-bold text-2xl sm:text-3xl text-foreground hover:text-brand transition tracking-tight"
              >
                510-953-2966
              </a>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4 text-subtle">
                <MailIcon />
                <p className="font-heading text-[10px] tracking-[0.3em]">
                  EMAIL
                </p>
              </div>
              <div>
                {emails.map((e) => (
                  <a
                    key={e.label}
                    href={`mailto:${e.value}`}
                    className="group flex items-center gap-4 py-3 border-b border-border hover:border-brand transition"
                  >
                    <span className="font-heading text-[10px] tracking-[0.25em] text-brand shrink-0 w-24">
                      {e.label}
                    </span>
                    <span className="flex-1 text-sm text-muted group-hover:text-foreground transition truncate">
                      {e.value}
                    </span>
                    <span className="text-brand transition-transform group-hover:translate-x-1 shrink-0">
                      <Arrow />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3 text-subtle">
                <LocationIcon />
                <p className="font-heading text-[10px] tracking-[0.3em]">
                  LOCATION
                </p>
              </div>
              <p className="text-base text-foreground">
                San Francisco, CA · United States
              </p>
              <p className="font-heading text-[10px] tracking-[0.2em] text-subtle mt-1">
                37.7749° N · 122.4194° W
              </p>
            </div>

            <div>
              <p className="font-heading text-[10px] tracking-[0.3em] text-subtle mb-3">
                FOLLOW
              </p>
              <div className="flex gap-2">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-11 h-11 flex items-center justify-center border border-border text-muted hover:border-brand hover:text-brand transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative border border-border bg-surface/40 backdrop-blur-sm p-7 sm:p-10">
              <span className="pointer-events-none absolute -top-px -left-px w-3 h-3 border-t border-l border-brand" />
              <span className="pointer-events-none absolute -top-px -right-px w-3 h-3 border-t border-r border-brand" />
              <span className="pointer-events-none absolute -bottom-px -left-px w-3 h-3 border-b border-l border-brand" />
              <span className="pointer-events-none absolute -bottom-px -right-px w-3 h-3 border-b border-r border-brand" />

              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <p className="font-heading text-[11px] tracking-[0.3em] text-brand mb-3">
                    ▸ SEND A MESSAGE
                  </p>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight leading-tight">
                    Tell us about <span className="text-brand">your project</span>.
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed max-w-md">
                    Drop your details below and we&apos;ll get back within 24
                    hours.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-2 font-heading text-[9px] tracking-[0.25em] text-subtle shrink-0 mt-2">
                  <span className="w-1 h-1 rounded-full bg-brand" />
                  ALL FIELDS REQUIRED
                </span>
              </div>

              <ContactForm />

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="font-heading text-[9px] tracking-[0.2em] text-subtle">
                  BY SUBMITTING YOU AGREE TO OUR PRIVACY POLICY
                </p>
                <p className="inline-flex items-center gap-2 font-heading text-[9px] tracking-[0.25em] text-subtle">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                  </span>
                  SECURE FORM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading font-bold text-2xl sm:text-3xl text-foreground leading-none tracking-tight">
                {s.value}
                <span className="text-brand">.</span>
              </p>
              <p className="mt-2 font-heading text-[9px] tracking-[0.25em] text-subtle">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
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
