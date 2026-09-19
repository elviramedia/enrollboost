"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { BOOKING_URL, cn } from "@/lib/utils";
import { Check, Quote } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;
const CTA = "Book Your 60-Day Pilot";

const PROBLEMS = [
  {
    title: "Empty seats are empty budgets.",
    body: "Every unfilled seat is a full year of per-pupil funding gone — the money that pays for the programs families actually want.",
  },
  {
    title: "Families never hear your story.",
    body: "Parents can't choose a school they've never discovered. Most enrollment gaps aren't a quality problem — they're a visibility problem.",
  },
  {
    title: "Your team is already maxed out.",
    body: "Your enrollment lead is also the tour guide, the social media manager, and the event planner. Marketing becomes whatever's left at 5pm.",
  },
  {
    title: "Competitors are already advertising.",
    body: "Charters and neighboring districts are running ads for the exact families you want. Silence is a decision — and it costs you students.",
  },
  {
    title: "Your best programs stay hidden.",
    body: "Award-winning arts, STEM, dual-language, athletics — invisible to the community. The best story in town that no one has heard.",
  },
  {
    title: "Open houses nobody attends.",
    body: "You plan the event, print the flyers, and twelve people show up. Without awareness upstream, no event fills the room.",
  },
];

const STACK = [
  "On-site video shoot, filmed personally by our founder",
  "A high-intent Meta ad campaign targeted to your enrollment zones",
  "A custom enrollment landing page and lead funnel",
  "Your own lead CRM so no family slips through the cracks",
  "Weekly lead reports",
  'A Monday "who to call first" priority list',
  'Instant "meeting booked" alerts',
];

const CASES = [
  {
    id: "ace",
    school: "ACE Amandla Charter High School",
    type: "Public Charter · Chicago, IL",
    challenge:
      "A STEM-focused charter on Chicago's Southwest Side needed to fill seats in a competitive school-choice market — and every empty seat meant a full year of per-pupil funding left on the table.",
    campaign:
      "A 60-day Meta campaign reached 83,000+ local households and generated 66 qualified enrollment leads, anchored by a student testimonial video and fast follow-up.",
    stats: [
      { value: "6", label: "new students enrolled" },
      { value: "$400", label: "all-in cost per enrollment" },
      { value: "30×", label: "first-year return" },
    ],
    quote: null as { text: string; role: string } | null,
  },
  {
    id: "elba",
    school: "Elba Public Schools",
    type: "Rural Public District · Elba, NE",
    challenge:
      "A small rural Nebraska district competing across a wide, sparsely populated region, where distance and low awareness kept nearby families from ever considering Elba.",
    campaign:
      "Geo-targeted Meta campaigns reached tens of thousands of families across central Nebraska and generated 59 enrollment leads, built around small classes and teachers who know every child.",
    stats: [
      { value: "8", label: "new students enrolled" },
      { value: "$216", label: "cost per enrollment" },
      { value: "76×", label: "first-year return" },
    ],
    quote: {
      text: "If everyone follows through, we will have 8 new students this year because of your ads. So thank you for all the work you did for us!",
      role: "Superintendent, Elba Public Schools",
    },
  },
  {
    id: "ctx",
    school: "A Central Texas District",
    type: "Public District · reversed a decade of decline",
    challenge:
      "A public district that hadn't grown enrollment in over ten years, watching students leave for neighboring options season after season.",
    campaign:
      "A single 60-day pilot — on-site video, targeted ads, and a lead funnel feeding a live CRM — with the new enrollments geo-mapped back to the campaign to confirm the lift.",
    stats: [
      { value: "1st", label: "increase in over a decade" },
      { value: "180+", label: "new students in target zone" },
      { value: "$8.72", label: "cost per qualified lead" },
    ],
    quote: {
      text: "We had great success with the campaign — enrollment grew in the target area by 180 students.",
      role: "Enrollment Strategy Partner, Central Texas",
    },
  },
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

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
        light ? "border-white/15 bg-white/10 text-white/80" : "border-ink/10 bg-white/70 text-ink-soft"
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

export function PilotLanding() {
  const [active, setActive] = useState(0);
  const study = CASES[active];

  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)] bg-grid-faint [background-size:44px_44px]" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <Eyebrow>The 60-Day Enrollment Pilot for K-12 Districts &amp; Charters</Eyebrow>
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

      {/* 2. THE PROBLEM */}
      <section className="bg-paper-soft py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>The Real Problem</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                Great schools lose students every year.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
                Not because the academics are weak, but because families never hear the story —
                and enrollment is funding. Every student who enrolls somewhere else is a budget
                line you never get back.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p) => (
              <StaggerItem key={p.title}>
                <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 shadow-soft">
                  <span className="mb-4 h-1 w-10 rounded-full bg-accent" />
                  <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-14 max-w-2xl text-center text-pretty text-lg font-medium leading-relaxed text-ink">
              The fix isn&apos;t a bigger marketing budget. It&apos;s a proven system — run for
              you, and measured in enrolled students.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. THE OFFER */}
      <section id="offer" className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>The Offer</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                The 60-Day Enrollment Pilot
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
                One pilot. Everything done for you. Proof before you scale.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lift">
              <div className="p-8 md:p-12">
                <ul className="space-y-4">
                  {STACK.map((text) => (
                    <li key={text} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Check className="h-5 w-5" />
                      </span>
                      <span className="pt-1 text-[15px] font-medium leading-snug text-ink sm:text-base">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ink-gradient px-8 py-10 text-center text-white md:px-12">
                <p className="text-xl font-semibold sm:text-2xl">
                  $1,500&ndash;$3,000 + about $20/day in ad spend
                </p>
                <p className="mt-2 text-white/70">
                  Scoped to your district &mdash; and most make it back with a single new student.
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

      {/* 4. CASE STUDIES */}
      <section id="results" className="bg-paper-soft py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>Proof</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:leading-[1.1]">
                Real districts. Real students. Real funding.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
                Different schools, same pattern: a focused pilot turned awareness into enrolled
                students. Pick one to see what happened.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
            <div className="flex flex-col gap-3">
              {CASES.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition-all duration-300",
                    i === active
                      ? "border-transparent bg-ink text-white shadow-lift"
                      : "border-ink/10 bg-white text-ink shadow-soft hover:shadow-lift"
                  )}
                >
                  <p className="text-sm font-semibold">{c.school}</p>
                  <p className={cn("mt-1 text-xs", i === active ? "text-white/60" : "text-ink-muted")}>
                    {c.type}
                  </p>
                </button>
              ))}
            </div>

            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: easeOut }}
              className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:p-10"
            >
              <h3 className="text-2xl font-semibold text-ink">{study.school}</h3>
              <p className="mt-1 text-sm text-ink-muted">{study.type}</p>

              <div className="mt-7 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">Challenge</p>
                  <p className="mt-1.5 leading-relaxed text-ink-soft">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">The Pilot</p>
                  <p className="mt-1.5 leading-relaxed text-ink-soft">{study.campaign}</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ink/10 pt-7">
                {study.stats.map((r) => (
                  <div key={r.label}>
                    <p className="text-2xl font-semibold text-ink sm:text-3xl">{r.value}</p>
                    <p className="mt-1 text-xs leading-tight text-ink-muted">{r.label}</p>
                  </div>
                ))}
              </div>

              {study.quote && (
                <figure className="mt-8 rounded-2xl bg-paper-soft p-5">
                  <blockquote className="text-[15px] leading-relaxed text-ink">
                    &ldquo;{study.quote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-xs font-semibold text-ink-muted">
                    {study.quote.role}
                  </figcaption>
                </figure>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 md:py-32">
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

      {/* 6. SEE IT IN ACTION */}
      <section className="bg-paper-soft py-24 md:py-32">
        <div className="container">
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
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section id="how" className="py-24 md:py-32">
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
