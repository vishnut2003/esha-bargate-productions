"use client";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className = "" }: ContactFormProps) {
  return (
    <form className={`flex flex-col gap-6 w-full ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="bg-transparent border-b border-border-strong px-1 py-3 outline-none text-sm placeholder:text-muted focus:border-brand transition"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="bg-transparent border-b border-border-strong px-1 py-3 outline-none text-sm placeholder:text-muted focus:border-brand transition"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="bg-transparent border-b border-border-strong px-1 py-3 outline-none text-sm placeholder:text-muted focus:border-brand transition"
      />

      <textarea
        name="message"
        placeholder="Tell us about your project..."
        rows={4}
        required
        className="bg-transparent border-b border-border-strong px-1 py-3 outline-none text-sm placeholder:text-muted focus:border-brand transition resize-none"
      />

      <button
        type="submit"
        className="self-start bg-brand hover:bg-brand-hover text-foreground font-heading text-xs tracking-[0.2em] px-8 py-4 transition"
      >
        SEND MESSAGE →
      </button>
    </form>
  );
}
