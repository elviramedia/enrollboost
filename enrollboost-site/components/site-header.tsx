"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/lib/utils";

const NAV = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
            scrolled ? "glass shadow-soft" : "bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue text-white shadow-soft">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              <span className="text-ink">Enroll</span>
              <span className="text-accent">Boost</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href={BOOKING_URL} variant="primary" size="md">
              Book a Strategy Session
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass p-4 shadow-lift lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[15px] font-medium text-ink-soft hover:bg-ink/5"
                >
                  {item.label}
                </Link>
              ))}
              <Button href={BOOKING_URL} variant="primary" className="mt-2 w-full">
                Book a Strategy Session
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
