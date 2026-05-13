import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className = "", href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={`font-heading font-bold tracking-tight text-foreground ${className}`}
    >
      Esha <span className="text-brand">Bargate</span> Productions
    </Link>
  );
}
