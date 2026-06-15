"use client";

import type { ReactNode } from "react";
import { scrollToSection } from "@/lib/scroll";

type ScrollLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function ScrollLink({
  href,
  className,
  children,
  onClick,
}: ScrollLinkProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        scrollToSection(href);
        onClick?.();
      }}
    >
      {children}
    </button>
  );
}
