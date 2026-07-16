"use client";

import { motion, StaggerGroup, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { TESTIMONIALS } from "@/lib/content";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="container py-24 md:py-32">
      <SectionHeading
        align="center"
        eyebrow="Testimonials"
        title="Leaders who stopped guessing."
        description="Superintendents, heads of school, and enrollment directors on what changed when awareness became a system."
      />

      <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <StaggerItem key={t.name}>
            <motion.figure
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8 shadow-soft"
            >
              <div>
                <Quote className="h-8 w-8 text-accent/30" />
                <blockquote className="mt-5 text-lg leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-ink/10 pt-5">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-ink-muted">{t.role}</p>
              </figcaption>
            </motion.figure>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
