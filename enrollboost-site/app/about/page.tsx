import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BookingCTA } from "@/components/booking-cta";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About — Enrollment Consultants for K-12 Schools",
  description:
    "EnrollBoost is a team of enrollment consultants who happen to use digital marketing. We help K-12 schools become impossible to ignore.",
};

const VALUES = [
  { t: "Enrollment first", d: "We measure success in filled seats and sustained funding — not likes, reach, or vanity metrics." },
  { t: "Consultants, not vendors", d: "We start with your enrollment strategy and calendar, then build the marketing to serve it." },
  { t: "Clarity over jargon", d: "No growth hacks, no secrets, no hype. Just a clear system and honest reporting." },
  { t: "Respect for educators", d: "We take work off overloaded teams and treat your mission with the seriousness it deserves." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EnrollBoost"
        title="We're enrollment consultants that happen to use digital marketing."
        description="Our mission is simple: help K-12 schools increase enrollment by increasing community awareness. We believe great schools shouldn't lose students simply because families never discovered them."
      />

      <section className="container pb-8">
        <div className="grid gap-10 rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:grid-cols-2 md:p-12">
          <Reveal>
            <div>
              <h2 className="text-2xl font-semibold text-ink">Our belief</h2>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Schools don&apos;t have an enrollment problem. They have an
                awareness problem. Parents cannot choose a school they never
                discover — and most enrollment decline traces back to that single
                gap. We exist to close it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-2xl font-semibold text-ink">How we&apos;re different</h2>
              <p className="mt-4 leading-relaxed text-ink-muted">
                We understand school choice, LCFF and funding, application windows,
                open houses, and parent psychology. That context means we don&apos;t
                learn on your dime — we build systems designed for how families
                actually choose a school.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="What We Value"
          title="Principles that keep us honest."
        />
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v) => (
            <StaggerItem key={v.t}>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-ink">{v.t}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{v.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <BookingCTA />
    </>
  );
}
