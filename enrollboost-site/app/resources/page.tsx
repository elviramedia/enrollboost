import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BookingCTA } from "@/components/booking-cta";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { FileText, ClipboardCheck, Calculator, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — Enrollment Growth Tools & Guides",
  description:
    "Free guides, checklists, and tools to help K-12 school leaders diagnose their awareness gap and grow enrollment.",
};

const RESOURCES = [
  { icon: ClipboardCheck, t: "The Enrollment Awareness Audit", d: "A self-assessment to find exactly where families are falling out of your funnel.", tag: "Checklist" },
  { icon: FileText, t: "The School Marketing Playbook", d: "How high-performing schools structure awareness, funnels, and follow-up.", tag: "Guide" },
  { icon: Calculator, t: "Enrollment Funding Calculator", d: "Translate open seats into the funding your school is leaving on the table.", tag: "Tool" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Tools to diagnose your awareness gap."
        description="Practical resources for superintendents, heads of school, and enrollment directors who want to understand where students are being lost — before spending a dollar."
      />

      <section className="container py-16 md:py-24">
        <StaggerGroup className="grid gap-5 md:grid-cols-3">
          {RESOURCES.map((r) => (
            <StaggerItem key={r.t}>
              <div className="group flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                      <r.icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-paper-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      {r.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-ink">{r.t}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{r.d}</p>
                </div>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-ink">
                  Request access <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <BookingCTA
        title="Prefer a shortcut?"
        subtitle="Skip the self-audit. Book a 30-minute Enrollment Strategy Session and we'll walk your funnel with you, live."
      />
    </>
  );
}
