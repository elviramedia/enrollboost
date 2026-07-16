"use client";

import { useState } from "react";
import { motion } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { FUNNEL } from "@/lib/content";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function FunnelSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-paper-soft py-24 md:py-32">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="The Enrollment Awareness Funnel"
          title="Every enrolled student starts as a stranger."
          description="Enrollment isn't a single moment — it's a journey. When schools only invest at the bottom, the top stays empty. Hover each stage to see where families move, and where they're lost."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-3">
            {FUNNEL.map((stage, i) => {
              const isActive = i === active;
              const width = 100 - i * 12;
              return (
                <motion.button
                  key={stage.label}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group block w-full text-left"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: easeOut, delay: i * 0.06 }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300",
                        isActive
                          ? "bg-ink text-white shadow-lift"
                          : "bg-white text-ink shadow-soft hover:shadow-lift"
                      )}
                      style={{ width: `${width}%` }}
                    >
                      <span className="text-sm font-semibold sm:text-base">{stage.label}</span>
                      <span
                        className={cn(
                          "ml-4 text-xs font-medium tabular-nums",
                          isActive ? "text-accent-soft" : "text-ink-muted"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {i < FUNNEL.length - 1 && (
                      <ArrowDown
                        className={cn(
                          "my-1 h-4 w-4 transition-colors",
                          i < active ? "text-accent" : "text-ink/30"
                        )}
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:p-10"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Stage {String(active + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-ink">{FUNNEL[active].label}</h3>
            <p className="mt-3 text-lg leading-relaxed text-ink-muted">{FUNNEL[active].note}</p>
            <div className="mt-8 rounded-2xl bg-paper-soft p-5 text-sm text-ink-soft">
              EnrollBoost builds and measures every stage — so you can see exactly
              where families enter, where they stall, and where they convert.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
