"use client";

import { useActionState, useEffect, useRef } from "react";
import { subscribe, type SubscribeFormState } from "@/app/actions/subscribe";

const initialState: SubscribeFormState = { ok: false };

export function SubscribeForm() {
  const [state, formAction, pending] = useActionState(subscribe, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  return (
    <>
      <form
        ref={formRef}
        action={formAction}
        className="flex flex-col sm:flex-row gap-3"
      >
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
          disabled={pending}
          className="group inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-foreground font-heading text-[11px] tracking-[0.25em] px-7 py-4 transition shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? "SUBSCRIBING…" : "SUBSCRIBE"}
          <span className="transition-transform group-hover:translate-x-1">
            <ArrowRight />
          </span>
        </button>
      </form>

      {state.ok && (
        <p className="mt-4 text-brand text-sm" role="status">
          You&apos;re on the list — welcome to the dispatch.
        </p>
      )}

      {!state.ok && state.error && (
        <p className="mt-4 text-muted text-sm" role="alert">
          {state.error}
        </p>
      )}
    </>
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
