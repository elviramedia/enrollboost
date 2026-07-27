"use client";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem, motion } from "@/components/motion";
import { Smartphone, Languages, BellRing, ShieldCheck } from "lucide-react";

const FORMS_URL = "https://forms.enrollboost.org";

const FEATURES = [
  {
    icon: Smartphone,
    title: "3-minute mobile enrollment",
    body: "Families finish from their phone — info, document photos, and a legal e-signature, all in one sitting.",
  },
  {
    icon: Languages,
    title: "English & Español",
    body: "A bilingual experience built to welcome every family — we never ask about immigration status or SSN.",
  },
  {
    icon: BellRing,
    title: "Automatic follow-up",
    body: "Instant office alerts, reminders for families who stall, and a branded confirmation email when they finish.",
  },
  {
    icon: ShieldCheck,
    title: "Built for student data",
    body: "Encrypted, US-hosted, FERPA/COPPA-aligned, with one-click export to your student information system.",
  },
];

export function FormsPromo() {
  return (
    <section className="container py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 shadow-lift md:p-14">
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="relative">
          <SectionHeading
            eyebrow="The Enrollment Platform"
            title="Your marketing brings families in. Our forms get them enrolled."
            description="EnrollBoost Forms turns the final enrollment step into a 3-minute, mobile, fully-branded experience — in English and Spanish. It's the product that captures the enrollments our marketing creates."
          />

          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex h-full gap-4 rounded-2xl border border-ink/10 bg-paper p-6 shadow-soft"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{f.body}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={FORMS_URL} variant="primary" size="lg" withArrow>
              See the enrollment forms
            </Button>
            <p className="text-sm font-semibold text-accent-dark">
              🎓 Get the forms free with a 60-day pilot — limited spots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
