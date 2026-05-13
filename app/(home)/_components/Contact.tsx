import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl text-foreground">
            Get In Touch
          </h2>

          <div className="mt-10 space-y-6 text-sm">
            <div>
              <p className="font-heading text-[10px] tracking-[0.25em] text-subtle">
                PHONE
              </p>
              <p className="mt-1 text-foreground">510-953-2966</p>
            </div>
            <div>
              <p className="font-heading text-[10px] tracking-[0.25em] text-subtle">
                EMAIL
              </p>
              <p className="mt-1 text-foreground">
                contact@eshabargateproductions.com
              </p>
            </div>
            <div>
              <p className="font-heading text-[10px] tracking-[0.25em] text-subtle">
                LOCATION
              </p>
              <p className="mt-1 text-foreground">San Francisco, CA</p>
            </div>
          </div>

          <div className="mt-8 flex gap-6 text-sm text-brand">
            <a href="#" className="hover:text-brand-light transition">
              Instagram
            </a>
            <a href="#" className="hover:text-brand-light transition">
              Facebook
            </a>
            <a href="#" className="hover:text-brand-light transition">
              YouTube
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
