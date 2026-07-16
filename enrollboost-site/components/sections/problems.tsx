"use client";

import { motion, StaggerGroup, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { PROBLEMS } from "@/lib/content";

export function Problems() {
  return (
    <section className="container py-24 md:py-32">
      <SectionHeading
        eyebrow="The Problems Schools Face"
        title="You already feel these. Naming them is the first step."
        description="These aren't hypotheticals. They're the quiet, compounding realities inside under-enrolled schools — each one traceable back to awareness."
      />

      <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p) => (
          <StaggerItem key={p.title}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 shadow-soft"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              <div>
                <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </div>
              <div className="mt-8 border-t border-ink/10 pt-5">
                <p className="text-2xl font-semibold text-accent">{p.stat}</p>
                <p className="mt-0.5 text-xs uppercase tracking-wide text-ink-muted">
                  {p.statLabel}
                </p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
