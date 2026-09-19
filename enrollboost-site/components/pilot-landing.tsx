"use client";

import { Button } from "@/components/ui/button";
import { motion, Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { BOOKING_URL } from "@/lib/utils";
import { Check, Quote, Video, Target, LayoutTemplate, Database, BarChart3, ListChecks, BellRing } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;
const CTA = "Book Your 60-Day Pilot";

const PROOF = [
  { value: "1st", label: "enrollment increase in over a decade" },
  { value: "69", label: "qualified leads in the first 30 days" },
  { value: "$8.72", label: "average cost per lead" },
  { value: "~$10K/yr", label: "in funding per new student" },
];

const STACK = [
  { icon: Video, text: "On-site video shoot, filmed personally by our founder" },
  { icon: Target, text: "A high-intent Meta ad campaign targeted to your enrollment zones" },
  { icon: LayoutTemplate, text: "A custom enrollment landing page and lead funnel" },
  { icon: Database, text: "Your own lead CRM so no family slips through the cracks" },
  { icon: BarChart3, text: "Weekly lead reports" },
  { icon: ListChecks, text: 'A Monday "who to call first" priority list' },
  { icon: BellRing, text: 'Instant "meeting booked" alerts' },
];

const TESTIMONIALS = [
  {
    quote:
      "We've been working together for a week. Got an incredible amount of leads. I've got people here at the Open House today.",
    role: "Director, private elementary school",
  },
  {
    quote: "We are getting new enrollments and tours booked!",
    role: "Executive Director, arts academy",
  },
  {
    quote: "It looks like we have received 8 students from the leads.",
    role: "Senior Operations Manager, charter high school",
  },
];

const STEPS = [
  { n: "1", title: "We film & build", body: "On-site video, ads, and your funnel go live." },
  { n: "2", title: "Leads flow in", body: "High-intent families land in your CRM with instant alerts." },
  { n: "3", title: "You enroll", body: "Weekly reports and a call list tell your team exactly who to contact." },
];

export function PilotLanding() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-24">
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
                The 60-Day Enrollment Pilot for K-12 Districts &amp; Charters
              </span>
            </motion.div>
            <motion.h1
              className="mt-7 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-6xl md:text-[4.25rem] md:leading-[1.05]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
            >
              Fill Your Classrooms in 60 Days.
            </motion.h1>
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}
            >
              A done-for-you enrollment growth system — on-site video, targeted ads, a lead
              funnel, and weekly reporting, all built and run for you. You approve; we handle
              the rest.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.24 }}
            >
              <Button href={BOOKING_URL} variant="primary" size="lg" withArrow>
                {CTA}
              </Button>
              <Button href="#results" variant="light" size="lg">
                See the results
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROOF BAR */}
      <section id="results" className="border-y border-ink/10 bg-white">
        <div className="container">
          <StaggerGroup className="grid grid-cols-2 divide-ink/10 md:grid-cols-4 md:divide-x">
            {PROOF.map((s) => (
              <StaggerItem key={s.label}>
                <div className="px-4 py-10 text-center">
                  <p className="text-3xl font-semibold text-accent sm:text-4xl">{s.value}</p>
                  <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-snug text-ink-muted">
                    {s.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Great schools lose students every year.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-muted">
              Not because the academics are weak, but because families never hear the story —
              and enrollment is funding. Every student who enrolls somewhere else is a budget
              line you never get back.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. THE OFFER */}
      <section id="offer" className="bg-paper-soft py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                The Offer
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                The 60-Day Enrollment Pilot
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
                One flat pilot. Everything done for you. Proof before you scale.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lift">
              <div className="p-8 md:p-12">
                <ul className="space-y-4">
                  {STACK.map((item) => (
                    <li key={item.text} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Check className="h-5 w-5" />
                      </span>
                      <span className="pt-1 text-[15px] font-medium leading-snug text-ink sm:text-base">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ink-gradient px-8 py-10 text-center text-white md:px-12">
                <p className="text-xl font-semibold sm:text-2xl">
                  $1,500 flat + about $20/day in ad spend
                </p>
                <p className="mt-2 text-white/70">
                  Most districts make it back with a single new student.
                </p>
                <p className="mx-auto mt-6 max-w-xl rounded-2xl bg-white/10 px-5 py-4 text-sm leading-relaxed text-white/80">
                  It&apos;s a 60-day pilot, not a contract. See the results, then decide to scale.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button href={BOOKING_URL} variant="primary" size="lg" withArrow>
                    {CTA}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. CASE STUDY */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Case Study
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:leading-[1.1]">
              How one Central Texas district reversed a decade of decline.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-muted">
              A public district that hadn&apos;t grown enrollment in over ten years ran a single
              60-day pilot. We shot video on-site, launched targeted ads, and built a lead
              funnel feeding a live CRM. The result: the district&apos;s first enrollment increase
              in over a decade — with 180+ new students in the campaign&apos;s target zone,
              confirmed by geo-mapping the new enrollments back to the campaign. The first 30
              days alone produced 69 qualified leads at $8.72 each.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <figure className="mt-10 rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:p-10">
              <Quote className="h-8 w-8 text-accent/30" />
              <blockquote className="mt-4 text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                &ldquo;We had great success with the campaign — enrollment grew in the target
                area by 180 students.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-ink-muted">
                Enrollment Strategy Partner, Central Texas
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="bg-paper-soft py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:leading-[1.1]">
                From parent interest to campus visits and new students
              </h2>
            </Reveal>
          </div>
          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.role}>
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
                  <figcaption className="mt-8 border-t border-ink/10 pt-5 text-sm font-semibold text-ink-muted">
                    {t.role}
                  </figcaption>
                </motion.figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 7. SEE IT IN ACTION */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:leading-[1.1]">
                See it in action
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div
              className="relative mt-12 w-full overflow-hidden rounded-3xl border border-ink/10 bg-ink shadow-lift"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/sohQTS1XziQ"
                title="EnrollBoost in action"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <section id="how" className="bg-paper-soft py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:leading-[1.1]">
                How it works
              </h2>
            </Reveal>
          </div>
          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <StaggerItem key={s.n}>
                <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-lg font-semibold text-white shadow-glow">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
