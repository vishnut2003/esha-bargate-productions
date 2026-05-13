type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`font-heading font-bold tracking-tight text-foreground ${className}`}
    >
      Esha <span className="text-brand">Bargate</span> Productions
    </span>
  );
}
