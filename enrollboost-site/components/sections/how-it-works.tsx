"use client";

import { motion } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { HOW_IT_WORKS } from "@/lib/content";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden ink-gradient py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(40%_50%_at_85%_10%,rgba(245,130,31,0.35),transparent_60%)]" />
      <div className="container relative">
        <SectionHeading
          light
          eyebrow="How EnrollBoost Works"
          title="One system, built to fill seats."
          description="Not a pile of tactics — a connected engine that moves families from never having heard of you to enrolled, with nothing left to chance."
        />

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-4 bottom-4 hidden w-px bg-white/15 md:block" />
          <div className="space-y-5">
            {HOW_IT_WORKS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: easeOut, delay: i * 0.08 }}
                className="relative flex gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-7"
              >
                <span className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-lg font-semibold text-white shadow-glow">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-white/70">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
