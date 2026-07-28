"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { CASE_STUDIES } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function CaseStudies({ preview = false }: { preview?: boolean }) {
  const [active, setActive] = useState(0);
  const study = CASE_STUDIES[active];

  return (
    <section className="bg-paper-soft py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real schools. Real seats filled."
          description="Different schools, same pattern: awareness was the missing piece. Select a school to see the challenge, the campaign, and the outcome."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="flex flex-col gap-3">
            {CASE_STUDIES.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "rounded-2xl border p-5 text-left transition-all duration-300",
                  i === active
                    ? "border-transparent bg-ink text-white shadow-lift"
                    : "border-ink/10 bg-white text-ink shadow-soft hover:shadow-lift"
                )}
              >
                <p className="text-sm font-semibold">{s.school}</p>
                <p
                  className={cn(
                    "mt-1 text-xs",
                    i === active ? "text-white/60" : "text-ink-muted"
                  )}
                >
                  {s.type}
                </p>
              </button>
            ))}
          </div>

          <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeOut }}
            className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-ink">{study.school}</h3>
                <p className="mt-1 text-sm text-ink-muted">{study.type}</p>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">Challenge</p>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{study.challenge}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">Campaign</p>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{study.campaign}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ink/10 pt-7">
              {study.results.map((r) => (
                <div key={r.label}>
                  <p className="text-2xl font-semibold text-ink sm:text-3xl">{r.value}</p>
                  <p className="mt-1 text-xs leading-tight text-ink-muted">{r.label}</p>
                </div>
              ))}
            </div>

            {preview ? (
              <Link
                href="/case-studies"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-ink"
              >
                See all case studies <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link
                href={`/case-studies/${study.slug}`}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-ink"
              >
                Read the full case study <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
