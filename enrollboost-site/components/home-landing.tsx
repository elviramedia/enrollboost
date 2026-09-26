"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { BOOKING_URL, cn } from "@/lib/utils";
import {
  Video, Megaphone, LayoutTemplate, Bot, BarChart3, Compass, Search,
  Landmark, CalendarClock, Users, ShieldCheck, Check, X, Minus, Quote,
  Zap, BellRing, MessagesSquare, Clock, Film,
} from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;
const CTA = "Book Your 60-Day Pilot";

const HERO_BADGES = [
  { icon: Film, text: "In-house video team" },
  { icon: Clock, text: "Live in under 5 business days" },
  { icon: Bot, text: "AI text, email & voice follow-up" },
];

const PROBLEMS = [
  { title: "Empty seats are empty budgets.", body: "Every unfilled seat is a full year of per-pupil funding gone — the money that pays for the programs families actually want." },
  { title: "Families never hear your story.", body: "Parents can't choose a school they've never discovered. Most enrollment gaps aren't a quality problem — they're a visibility problem." },
  { title: "Your team is already maxed out.", body: "Your enrollment lead is also the tour guide, the social media manager, and the event planner. Marketing becomes whatever's left at 5pm." },
  { title: "Competitors are already advertising.", body: "Charters and neighboring districts are running ads for the exact families you want. Silence is a decision — and it costs you students." },
  { title: "Your best programs stay hidden.", body: "Award-winning arts, STEM, dual-language, athletics — invisible to the community. The best story in town that no one has heard." },
  { title: "Open houses nobody attends.", body: "You plan the event, print the flyers, and twelve people show up. Without awareness upstream, no event fills the room." },
];

const SERVICES = [
  { icon: Video, title: "In-house video production", solves: "Your school looks great in person but invisible online.", body: "Our in-house team films on your campus and turns it into scroll-stopping short-form video — the creative that makes families fall for your school before they ever visit." },
  { icon: Megaphone, title: "Targeted Meta advertising", solves: "The right families never see you.", body: "Precision Facebook & Instagram campaigns put your school in front of parents inside your enrollment zones — by geography, life stage, and intent." },
  { icon: Search, title: "Nonprofit search ads (Ad Grant)", solves: "Free reach you're leaving on the table.", body: "For eligible nonprofit schools, we set up and manage the Google Ad Grant — up to $10,000/month in free search ads pointed at families already looking for schools like yours." },
  { icon: LayoutTemplate, title: "Enrollment funnels & landing pages", solves: "Interest leaks out before it becomes an inquiry.", body: "Purpose-built pages and funnels turn a first impression into a real inquiry, mapped to your application windows — not a generic contact form." },
  { icon: Bot, title: "AI follow-up agents", solves: "Warm families go cold while your team is teaching.", body: "Text, email, and voice AI agents respond in seconds and keep nurturing every lead — so no interested family is ever forgotten in a spreadsheet." },
  { icon: BarChart3, title: "Analytics & reporting", solves: "You can't tell what's actually driving enrollment.", body: "Weekly reporting on what matters — inquiries, tours, applications, and enrolled students — not likes and impressions." },
  { icon: Compass, title: "Enrollment strategy", solves: "Marketing isn't tied to how families actually choose.", body: "Positioning, timing, and priorities built around school choice, funding, and parent psychology — aligned to your enrollment calendar." },
];

const WHY = [
  { icon: Landmark, title: "We speak funding.", body: "LCFF, per-pupil dollars, and how enrollment drives your budget — we build campaigns around the numbers your board cares about." },
  { icon: CalendarClock, title: "We work your calendar.", body: "Campaigns are timed to your application and open-enrollment windows, not a generic marketing calendar." },
  { icon: Users, title: "We know parent psychology.", body: "Messaging built around how families actually decide where to send their child — not corporate ad copy." },
  { icon: ShieldCheck, title: "Done for you, not another tool.", body: "You don't log into a platform or run campaigns. We build and run the whole system — you approve and enroll." },
];

const COMPARE = {
  cols: ["EnrollBoost", "Enrollment platforms", "Typical agency"],
  rows: [
    { feature: "In-house video production team", vals: ["yes", "no", "partial"] },
    { feature: "Campaigns live in under 5 business days", vals: ["yes", "no", "no"] },
    { feature: "AI follow-up agents (text, email & voice)", vals: ["yes", "no", "no"] },
    { feature: "Google Ad Grant setup for nonprofits", vals: ["yes", "no", "partial"] },
    { feature: "Done for you — we run everything", vals: ["yes", "no", "partial"] },
    { feature: "Measured in enrolled students, not clicks", vals: ["yes", "no", "no"] },
  ],
};

const CASES = [
  {
    id: "ace", school: "ACE Amandla Charter High School", type: "Public Charter · Chicago, IL",
    challenge: "A STEM-focused charter on Chicago's Southwest Side needed to fill seats in a competitive school-choice market — and every empty seat meant a full year of per-pupil funding left on the table.",
    campaign: "A 60-day Meta campaign reached 83,000+ local households and generated 66 qualified enrollment leads, anchored by a student testimonial video and fast follow-up.",
    stats: [{ value: "6", label: "new students enrolled" }, { value: "$400", label: "all-in cost per enrollment" }, { value: "30×", label: "first-year return" }],
    quote: null as { text: string; role: string } | null,
  },
  {
    id: "elba", school: "Elba Public Schools", type: "Rural Public District · Elba, NE",
    challenge: "A small rural Nebraska district competing across a wide, sparsely populated region, where distance and low awareness kept nearby families from ever considering Elba.",
    campaign: "Geo-targeted Meta campaigns reached tens of thousands of families across central Nebraska and generated 59 enrollment leads, built around small classes and teachers who know every child.",
    stats: [{ value: "8", label: "new students enrolled" }, { value: "$216", label: "cost per enrollment" }, { value: "76×", label: "first-year return" }],
    quote: { text: "If everyone follows through, we will have 8 new students this year because of your ads. So thank you for all the work you did for us!", role: "Superintendent, Elba Public Schools" },
  },
  {
    id: "ctx", school: "A Central Texas District", type: "Public District · reversed a decade of decline",
    challenge: "A public district that hadn't grown enrollment in over ten years, watching students leave for neighboring options season after season.",
    campaign: "A single 60-day pilot — on-site video, targeted ads, and a lead funnel feeding a live CRM — with the new enrollments geo-mapped back to the campaign to confirm the lift.",
    stats: [{ value: "1st", label: "increase in over a decade" }, { value: "180+", label: "new students in target zone" }, { value: "$8.72", label: "cost per qualified lead" }],
    quote: { text: "We had great success with the campaign — enrollment grew in the target area by 180 students.", role: "Enrollment Strategy Partner, Central Texas" },
  },
];

const TESTIMONIALS = [
  { quote: "We've been working together for a week. Got an incredible amount of leads. I've got people here at the Open House today.", role: "Director, private elementary school" },
  { quote: "We are getting new enrollments and tours booked!", role: "Executive Director, arts academy" },
  { quote: "It looks like we have received 8 students from the leads.", role: "Senior Operations Manager, charter high school" },
];

const STEPS = [
  { n: "1", title: "We film & build", body: "On-site video, ads, and your funnel go live — most campaigns in under five business days." },
  { n: "2", title: "Leads flow in", body: "High-intent families land in your CRM, with AI text, email, and voice agents following up instantly." },
  { n: "3", title: "You enroll", body: "Weekly reports and a Monday call list tell your team exactly who to contact." },
];

const FAQS = [
  { q: "Are you an agency or software?", a: "Neither, exactly. We're a done-for-you enrollment growth team. You don't log into a platform or run campaigns — we build and run the whole system, and you get enrolled students and clear reporting." },
  { q: "How is this different from enrollment software?", a: "Enrollment platforms help you process applications and lotteries. We're upstream of that: we generate the families in the first place, then hand your team warm, ready-to-enroll leads." },
  { q: "How fast can you launch?", a: "Most campaigns are live in under five business days — including the on-site video shoot, ads, funnel, and follow-up automation." },
  { q: "Do we need staff or tech to run it?", a: "No. We handle the video, ads, funnels, and AI follow-up agents, and give you clear reporting. The point is to take work off your team." },
  { q: "What does it cost to start?", a: "Most schools start with a 60-day pilot ($1,500–$3,000 + about $20/day in ad spend). It's a pilot, not a contract — see the results, then decide to scale." },
  { q: "Do you help nonprofit schools with Google Ad Grants?", a: "Yes. For eligible nonprofit schools we set up and manage the Google Ad Grant — up to $10,000/month in free search advertising." },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]", light ? "border-white/15 bg-white/10 text-white/80" : "border-ink/10 bg-white/70 text-ink-soft")}>
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

function Heading({ eyebrow, title, description, align = "center", light = false }: { eyebrow?: string; title: React.ReactNode; description?: React.ReactNode; align?: "center" | "left"; light?: boolean }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Reveal><Eyebrow light={light}>{eyebrow}</Eyebrow></Reveal>}
      <Reveal delay={0.05}>
        <h2 className={cn("mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]", light ? "text-white" : "text-ink")}>{title}</h2>
      </Reveal>
      {description && <Reveal delay={0.1}><p className={cn("mt-5 text-pretty text-lg leading-relaxed", light ? "text-white/70" : "text-ink-muted")}>{description}</p></Reveal>}
    </div>
  );
}

function Cell({ v }: { v: string }) {
  if (v === "yes") return <Check className="mx-auto h-5 w-5 text-accent" />;
  if (v === "partial") return <Minus className="mx-auto h-5 w-5 text-ink-muted/50" />;
  return <X className="mx-auto h-5 w-5 text-ink-muted/40" />;
}

export function HomeLanding() {
  const [active, setActive] = useState(0);
  const study = CASES[active];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)] bg-grid-faint [background-size:44px_44px]" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut }}>
              <Eyebrow>Enrollment growth for K-12 districts &amp; charters</Eyebrow>
            </motion.div>
            <motion.h1 className="mt-7 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-6xl md:text-[4.25rem] md:leading-[1.05]" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}>
              Enrollment growth, done for you.
            </motion.h1>
            <motion.p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}>
              We&apos;re the team that fills K-12 classrooms. On-site video, targeted ads, lead
              funnels, and AI follow-up — built and run for you, and measured in enrolled
              students. You approve; we handle the rest.
            </motion.p>
            <motion.div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut, delay: 0.24 }}>
              <Button href={BOOKING_URL} variant="primary" size="lg" withArrow>{CTA}</Button>
              <Button href="#results" variant="light" size="lg">See our results</Button>
            </motion.div>
            <motion.div className="mt-8 flex flex-wrap items-center justify-center gap-2.5" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut, delay: 0.32 }}>
              {HERO_BADGES.map((b) => (
                <span key={b.text} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm font-medium text-ink-soft shadow-soft">
                  <b.icon className="h-4 w-4 text-brand-blue" />
                  {b.text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-paper-soft py-24 md:py-32">
        <div className="container">
          <Heading eyebrow="The Real Problem" title="Great schools lose students every year." description="Not because the academics are weak, but because families never hear the story — and enrollment is funding. Every student who enrolls somewhere else is a budget line you never get back." />
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
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="py-24 md:py-32">
        <div className="container">
          <Heading eyebrow="What We Do" title="One system that fills your seats." description="Not a menu of services — a connected engine that moves families from never having heard of you to enrolled. Here's what runs under the hood, and the problem each part solves." />
          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-accent">{s.solves}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* VIDEO SUPERPOWER */}
      <section className="relative overflow-hidden ink-gradient py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(40%_50%_at_85%_10%,rgba(245,130,31,0.35),transparent_60%)]" />
        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Heading light align="left" eyebrow="Our Superpower" title="Video is how families fall for your school." description="Parents don't read brochures — they watch. Our in-house video team films on your campus and turns it into scroll-stopping short-form video: the creative that makes families feel your school before they ever visit, and the reason our ads are impossible to scroll past." />
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <Button href={BOOKING_URL} variant="primary" size="lg" withArrow>{CTA}</Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="relative w-full overflow-hidden rounded-3xl border border-white/15 shadow-lift" style={{ paddingBottom: "56.25%" }}>
                <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/sohQTS1XziQ" title="EnrollBoost video in action" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SYSTEMS & AUTOMATION */}
      <section className="bg-paper-soft py-24 md:py-32">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Heading align="left" eyebrow="Systems &amp; AI" title="The engine that never drops a family." description="Video gets families interested. AI agents make sure not one of them slips through. It runs quietly in the background so your team can focus on enrolling — not chasing." />
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:p-10">
                <ul className="space-y-6">
                  {[
                    { icon: Zap, t: "Instant capture", d: "Every lead lands in your own CRM the second it comes in — never a spreadsheet, never lost." },
                    { icon: MessagesSquare, t: "Text, email & voice AI agents", d: "AI agents follow up within seconds across text, email, and phone, then keep nurturing until the family books a tour." },
                    { icon: BellRing, t: "Real-time alerts + call lists", d: "Your team gets instant “meeting booked” alerts and a Monday “who to call first” priority list." },
                  ].map((row) => (
                    <li key={row.t} className="flex gap-4">
                      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent"><row.icon className="h-5 w-5" /></span>
                      <div>
                        <h3 className="font-semibold text-ink">{row.t}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{row.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-24 md:py-32">
        <div className="container">
          <Heading eyebrow="Proof" title="Real districts. Real students. Real funding." description="Different schools, same pattern: a focused system turned awareness into enrolled students. Pick one to see what happened." />
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
            <div className="flex flex-col gap-3">
              {CASES.map((c, i) => (
                <button key={c.id} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} className={cn("rounded-2xl border p-5 text-left transition-all duration-300", i === active ? "border-transparent bg-ink text-white shadow-lift" : "border-ink/10 bg-white text-ink shadow-soft hover:shadow-lift")}>
                  <p className="text-sm font-semibold">{c.school}</p>
                  <p className={cn("mt-1 text-xs", i === active ? "text-white/60" : "text-ink-muted")}>{c.type}</p>
                </button>
              ))}
            </div>
            <motion.div key={study.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: easeOut }} className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:p-10">
              <h3 className="text-2xl font-semibold text-ink">{study.school}</h3>
              <p className="mt-1 text-sm text-ink-muted">{study.type}</p>
              <div className="mt-7 space-y-5">
                <div><p className="text-xs font-semibold uppercase tracking-wider text-accent">Challenge</p><p className="mt-1.5 leading-relaxed text-ink-soft">{study.challenge}</p></div>
                <div><p className="text-xs font-semibold uppercase tracking-wider text-accent">The Pilot</p><p className="mt-1.5 leading-relaxed text-ink-soft">{study.campaign}</p></div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ink/10 pt-7">
                {study.stats.map((r) => (<div key={r.label}><p className="text-2xl font-semibold text-ink sm:text-3xl">{r.value}</p><p className="mt-1 text-xs leading-tight text-ink-muted">{r.label}</p></div>))}
              </div>
              {study.quote && (
                <figure className="mt-8 rounded-2xl bg-paper-soft p-5">
                  <blockquote className="text-[15px] leading-relaxed text-ink">&ldquo;{study.quote.text}&rdquo;</blockquote>
                  <figcaption className="mt-3 text-xs font-semibold text-ink-muted">{study.quote.role}</figcaption>
                </figure>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="compare" className="bg-paper-soft py-24 md:py-32">
        <div className="container">
          <Heading eyebrow="How We Stack Up" title="Why schools pick us over software and agencies." description="Enrollment platforms hand you the work. Traditional agencies run generic campaigns. We do what neither does — end to end." />
          <Reveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-4xl overflow-x-auto">
              <table className="w-full min-w-[640px] border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="w-[40%] p-4 text-left" />
                    {COMPARE.cols.map((c, i) => (
                      <th key={c} className={cn("p-4 text-center text-sm font-semibold", i === 0 ? "rounded-t-2xl bg-ink text-white" : "text-ink-muted")}>
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.rows.map((row, ri) => (
                    <tr key={row.feature}>
                      <td className="border-b border-ink/10 p-4 text-sm font-medium text-ink">{row.feature}</td>
                      {row.vals.map((v, ci) => (
                        <td key={ci} className={cn("border-b border-ink/10 p-4 text-center", ci === 0 && "bg-ink/95", ci === 0 && ri === COMPARE.rows.length - 1 && "rounded-b-2xl")}>
                          {ci === 0 ? (v === "yes" ? <Check className="mx-auto h-5 w-5 text-accent-soft" /> : <Cell v={v} />) : <Cell v={v} />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY ENROLLBOOST */}
      <section className="py-24 md:py-32">
        <div className="container">
          <Heading eyebrow="Why EnrollBoost" title="We speak school — not just marketing." description="Most agencies learn your world on your dime, and most platforms hand you the work. We already understand the funding, the calendar, and the families — and we run it for you." />
          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <StaggerItem key={w.title}>
                <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue"><w.icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 font-semibold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{w.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-paper-soft py-24 md:py-32">
        <div className="container">
          <Heading eyebrow="How It Works" title="Three steps to a fuller classroom." />
          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <StaggerItem key={s.n}>
                <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-lg font-semibold text-white shadow-glow">{s.n}</span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container">
          <Heading title="From parent interest to campus visits and new students" />
          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.role}>
                <motion.figure whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
                  <div><Quote className="h-8 w-8 text-accent/30" /><blockquote className="mt-5 text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote></div>
                  <figcaption className="mt-8 border-t border-ink/10 pt-5 text-sm font-semibold text-ink-muted">{t.role}</figcaption>
                </motion.figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-soft py-24 md:py-32">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Heading align="left" eyebrow="FAQ" title="Questions leaders ask us first." />
            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {FAQS.map((f) => (
                <StaggerItem key={f.q}>
                  <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <h3 className="font-semibold text-ink">{f.q}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>
    </>
  );
}
