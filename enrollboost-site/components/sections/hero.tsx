"use client";

import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion";
import { BOOKING_URL } from "@/lib/utils";
import { TrendingUp, Users, Building2 } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 gradient-mesh" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)] bg-grid-faint [background-size:44px_44px]" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Enrollment Growth for K-12 Schools
            </span>
          </motion.div>

          <motion.h1
            className="mt-7 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-6xl md:text-[4.25rem] md:leading-[1.05]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
          >
            Great Schools Still Lose Students.
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}
          >
            Not because they&apos;re bad schools. Because families never discover
            them. EnrollBoost makes your school impossible to ignore.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.24 }}
          >
            <Button href={BOOKING_URL} variant="primary" size="lg" withArrow>
              Book an Enrollment Strategy Session
            </Button>
            <Button href="/#how-it-works" variant="light" size="lg">
              See How It Works
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.35 }}
        >
          {[
            { icon: Users, stat: "Awareness", label: "The real bottleneck in enrollment" },
            { icon: TrendingUp, stat: "Full Funnel", label: "From first impression to enrolled" },
            { icon: Building2, stat: "Every Seat", label: "Protects programs and funding" },
          ].map((item) => (
            <div
              key={item.stat}
              className="glass rounded-2xl p-6 text-left shadow-soft"
            >
              <item.icon className="h-6 w-6 text-brand-blue" />
              <p className="mt-4 text-lg font-semibold text-ink">{item.stat}</p>
              <p className="mt-1 text-sm text-ink-muted">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
