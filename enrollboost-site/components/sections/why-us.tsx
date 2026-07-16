"use client";

import { motion, StaggerGroup, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { WHY_US } from "@/lib/content";
import { Check } from "lucide-react";

export function WhyUs() {
  return (
    <section className="container py-24 md:py-32">
      <SectionHeading
        eyebrow="Why Schools Choose EnrollBoost"
        title="We speak school — not just marketing."
        description="Most agencies learn about your world on your dime. We already understand the systems, funding, and psychology that drive K-12 enrollment."
      />

      <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_US.map((item) => (
          <StaggerItem key={item.title}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-soft"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
