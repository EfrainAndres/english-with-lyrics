import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

const variantClasses = {
  primary:
    "bg-pink text-white shadow-neon hover:bg-cream hover:text-ink focus:ring-cream focus:ring-offset-ink",
  secondary:
    "border border-blue/45 bg-white/5 text-paper hover:border-pink hover:text-cream focus:ring-blue focus:ring-offset-ink",
  light:
    "bg-cream text-ink hover:bg-blue hover:text-ink focus:ring-pink focus:ring-offset-midnight",
};

export function CTAButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: CTAButtonProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
