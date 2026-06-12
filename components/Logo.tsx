type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`font-heading font-bold tracking-tight text-foreground ${className}`}
    >
      Esha Bargate Productions, LLC
    </span>
  );
}
