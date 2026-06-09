import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

const variantClasses = {
  primary: "bg-lagoon text-white hover:bg-[#0f5960]",
  secondary: "border border-ink/15 bg-white text-ink hover:border-lagoon hover:text-lagoon",
  light: "bg-white text-ink hover:bg-sunshine",
};

export function CTAButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: CTAButtonProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
