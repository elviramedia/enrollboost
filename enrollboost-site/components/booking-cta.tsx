"use client";

import { Reveal } from "@/components/motion";
import { GHLBooking } from "@/components/ghl-booking";
import { CalendarCheck } from "lucide-react";

export function BookingCTA({
  title = "Let's Grow Your Enrollment.",
  subtitle = "Book a 30-minute Enrollment Strategy Session. We'll map your awareness gaps and show you exactly where students are being lost — no pitch, no pressure.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id="book" className="container py-24 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl ink-gradient px-8 py-16 text-center shadow-lift md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(50%_60%_at_80%_0%,rgba(245,130,31,0.5),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(45%_55%_at_10%_100%,rgba(44,123,229,0.7),transparent_60%)]" />
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              <CalendarCheck className="h-3.5 w-3.5" />
              Enrollment Strategy Session
            </span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
              {subtitle}
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-3xl">
            <GHLBooking />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
