"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-glow hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lift",
  secondary:
    "bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5 hover:shadow-lift",
  ghost:
    "bg-transparent text-ink hover:bg-ink/5 border border-ink/10",
  light:
    "bg-white text-ink border border-ink/10 shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
}: ButtonProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );
  const classes = cn(base, variants[variant], sizes[size], "group", className);

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
