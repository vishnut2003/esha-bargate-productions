"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

type ContactFormProps = {
  className?: string;
};

const initialState: ContactFormState = { ok: false };

export function ContactForm({ className = "" }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className={`flex flex-col gap-6 w-full ${className}`}
    >
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
        placeholder="Tell us about your project... (optional)"
        rows={4}
        className="bg-transparent border-b border-border-strong px-1 py-3 outline-none text-sm placeholder:text-muted focus:border-brand transition resize-none"
      />

      <button
        type="submit"
        disabled={pending}
        className="self-start bg-brand hover:bg-brand-hover text-foreground font-heading text-xs tracking-[0.2em] px-8 py-4 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "SENDING…" : "SEND MESSAGE →"}
      </button>

      {state.ok && (
        <p className="text-brand text-sm" role="status">
          Thanks for reaching out — we&apos;ll be in touch soon.
        </p>
      )}

      {!state.ok && state.error && (
        <p className="text-muted text-sm" role="alert">
          {state.error}
        </p>
      )}
    </form>
  );
}
