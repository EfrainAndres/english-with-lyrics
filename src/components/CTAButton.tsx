import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

const variantClasses = {
  primary:
    "bg-teal text-white hover:bg-ink focus:ring-coral focus:ring-offset-paper",
  secondary:
    "border border-ink/15 bg-white text-ink hover:border-coral hover:text-coral focus:ring-coral focus:ring-offset-paper",
  light:
    "bg-cream text-ink hover:bg-beat focus:ring-beat focus:ring-offset-plum",
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
