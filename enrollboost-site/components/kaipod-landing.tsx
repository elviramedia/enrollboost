"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Check, X, Shield, Plus, MousePointerClick, FileText, Inbox, CalendarCheck, Star } from "lucide-react";

const HEAD = "font-[family-name:var(--font-bricolage)] font-extrabold tracking-tight";
const BOOKING_SRC = "https://api.leadconnectorhq.com/widget/booking/MQ4CFV4X4PLE1Wbk4pvu";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2C7BE5] text-white">
        <GraduationCap className="h-5 w-5" />
      </span>
      <span className={`text-lg font-bold ${HEAD}`}>
        <span className={light ? "text-white" : "text-[#14213D]"}>Enroll</span>
        <span className="text-[#F5821F]">Boost</span>
      </span>
    </div>
  );
}

function CTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href="#claim"
      className={`inline-flex h-14 items-center justify-center rounded-full bg-[#F5821F] px-8 text-base font-bold text-[#14213D] shadow-lg shadow-[#F5821F]/25 transition-transform active:scale-[0.98] hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

const PROBLEMS = [
  { title: "About one inquiry a month.", body: "Your Newton form works. Parents just aren't finding it." },
  { title: "Boosted posts, zero calls.", body: "The Boost button runs a Traffic campaign. It gets clicks, not families." },
  { title: "You wear every hat.", body: "You teach, run admissions, and post in homeschool groups. Marketing gets whatever time is left." },
];

const STEPS = [
  { icon: FileText, text: "We build your custom landing page, with your Newton form embedded." },
  { icon: MousePointerClick, text: "We run Meta lead ads to parents within driving distance." },
  { icon: Inbox, text: "Every inquiry lands in your existing Newton pipeline and email drip." },
  { icon: CalendarCheck, text: "Families book discovery calls with you." },
];

type Feature = { text: string; free?: boolean; strong?: boolean };
type Plan = { name: string; price: string; tagline: string; highlight: boolean; badge?: string; features: Feature[]; cta: string };

const PLANS: Plan[] = [
  {
    name: "Seat-Filler",
    price: "$297",
    tagline: "Get found. Fill your Newton form.",
    highlight: false,
    features: [
      { text: "Custom landing page with your Newton form built in", free: true },
      { text: "Meta lead ads — set up & managed for you" },
      { text: "Leads drop into your existing Newton drip" },
      { text: "Radius targeting + A/B tested creative" },
      { text: "Monthly results check-in (leads, calls, cost per lead)" },
      { text: "Bonus: Open house + virtual coffee chat playbook" },
    ],
    cta: "Start with Seat-Filler",
  },
  {
    name: "Seat-Filler Pro",
    price: "$497",
    tagline: "Everything in Seat-Filler — plus the whole system that follows up for you.",
    highlight: true,
    badge: "Most popular",
    features: [
      { text: "Everything in Seat-Filler", strong: true },
      { text: "Full HighLevel CRM & automation — built and run for you" },
      { text: "Instant SMS text-back the moment a parent inquires" },
      { text: "AI agent that replies after hours — text & email" },
      { text: "Booking calendars so families self-schedule tours" },
      { text: "Email marketing + automated nurture sequences" },
      { text: "Missed-call text-back — never lose a caller" },
      { text: "One unified inbox: text, email & social DMs" },
      { text: "Live dashboard: leads, calls booked, cost per lead" },
    ],
    cta: "Get the full system",
  },
];

const FAQS = [
  { q: "Do I have to leave KaiPod or Newton?", a: "No. Your Newton form and drip stay exactly as they are." },
  { q: "What's the difference between the two plans?", a: "Seat-Filler ($297) fills your existing Newton form with fresh leads. Pro ($497) adds our full HighLevel system on top — instant text-back, an AI agent that answers after hours, booking calendars, and email marketing — so every lead gets followed up without you lifting a finger." },
  { q: "What does “free landing page” mean?", a: "We build it before you pay a cent. If you move forward, it's yours to keep, even if you cancel later." },
  { q: "How much should I spend on ads?", a: "Ad spend is paid directly to Meta, separate from our fee. Most schools start around $15–$20 a day, and you can adjust it anytime." },
  { q: "Is there a contract?", a: "No. Both plans are month-to-month and you can cancel anytime." },
  { q: "What if my school isn't a KaiPod school?", a: "We work with microschools and private schools too. Book a call and we'll tell you honestly if it's a fit." },
];

function SeatGrid() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <div className="grid grid-cols-5 gap-2.5">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={
              i < 11
                ? "aspect-square rounded-lg bg-[#F5821F]"
                : "aspect-square rounded-lg border-2 border-dashed border-[#14213D]/25"
            }
          />
        ))}
      </div>
      <p className="mt-4 text-center text-sm font-semibold text-[#14213D]/70">
        Room for 25. Enrolled 11?
      </p>
    </div>
  );
}

export function KaiPodLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const id = "ghl-form-embed";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-[family-name:var(--font-dm)] text-[#14213D] antialiased">
      {/* minimal top bar */}
      <header className="border-b border-[#14213D]/5 bg-[#F8FAFC]/80 px-5 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Logo />
          <a href="#claim" className="hidden text-sm font-bold text-[#F5821F] sm:block">Book a call →</a>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="px-5 pt-12 pb-14 md:pt-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2C7BE5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#2C7BE5]">
              For KaiPod microschools
            </span>
            <h1 className={`mt-5 text-4xl leading-[1.05] text-[#14213D] sm:text-5xl md:text-[3.5rem] ${HEAD}`}>
              You already pay for Newton. Let&apos;s fill it.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[#14213D]/70">
              We build you a free landing page with your Newton inquiry form built in, then run
              Meta lead ads that send local parents to it. No new CRM. No new subscription.
            </p>
            <div className="mt-7">
              <CTAButton className="w-full sm:w-auto">Claim your free landing page</CTAButton>
              <p className="mt-3 text-sm text-[#14213D]/50">Month-to-month · Cancel anytime · Keep your page</p>
            </div>
          </div>
          <div className="rounded-3xl border border-[#14213D]/10 bg-white p-8 shadow-xl shadow-[#14213D]/5">
            <SeatGrid />
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className={`text-center text-3xl text-[#14213D] sm:text-4xl ${HEAD}`}>Sound familiar?</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[#14213D]/10 bg-white p-6 shadow-sm">
                <div className="mb-3 h-1 w-10 rounded-full bg-[#F5821F]" />
                <h3 className={`text-lg text-[#14213D] ${HEAD}`}>{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#14213D]/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY BOOSTING DOESN'T WORK */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className={`text-center text-3xl text-[#14213D] sm:text-4xl ${HEAD}`}>Why boosting doesn&apos;t work</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#14213D]/10 bg-[#EEF1F5] p-7">
              <p className="text-sm font-bold uppercase tracking-wide text-[#14213D]/50">The Boost button → Traffic campaign</p>
              <ul className="mt-5 space-y-3">
                {["Clicks to your site", "Parents bounce", "Newton stays empty"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[#14213D]/60">
                    <X className="h-5 w-5 shrink-0 text-[#14213D]/40" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[#14213D] p-7 text-white shadow-xl">
              <p className="text-sm font-bold uppercase tracking-wide text-[#F5821F]">What we run → Lead campaign</p>
              <ul className="mt-5 space-y-3">
                {["Parents fill out a form", "Flows into Newton", "Discovery calls booked"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/90">
                    <Check className="h-5 w-5 shrink-0 text-[#F5821F]" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className={`text-center text-3xl text-[#14213D] sm:text-4xl ${HEAD}`}>Keep Newton. Add the leads.</h2>
          <ol className="mt-10 space-y-4">
            {STEPS.map((s, i) => (
              <li key={i} className="flex items-start gap-4 rounded-2xl border border-[#14213D]/10 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5821F] text-lg font-extrabold text-[#14213D]">
                  {i + 1}
                </span>
                <div className="flex items-center gap-3 pt-1.5">
                  <s.icon className="hidden h-5 w-5 shrink-0 text-[#2C7BE5] sm:block" />
                  <p className="text-[15px] font-medium leading-relaxed text-[#14213D]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. PRICING — TWO PLANS */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2C7BE5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#2C7BE5]">
              Pick your plan
            </span>
            <h2 className={`mt-4 text-3xl text-[#14213D] sm:text-4xl ${HEAD}`}>Two ways to fill your seats.</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#14213D]/70">
              Start lean and fill your Newton form — or run the whole follow-up system on autopilot.
              Both are month-to-month, and every plan starts with a free landing page.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={
                  "relative flex h-full flex-col rounded-3xl p-6 sm:p-8 " +
                  (plan.highlight
                    ? "bg-[#14213D] text-white shadow-2xl ring-2 ring-[#F5821F]"
                    : "border border-[#14213D]/10 bg-white shadow-sm")
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#F5821F] px-4 py-1 text-xs font-bold uppercase tracking-wide text-[#14213D]">
                    <Star className="h-3.5 w-3.5 fill-[#14213D]" /> {plan.badge}
                  </span>
                )}
                <h3 className={`text-2xl ${HEAD} ${plan.highlight ? "text-white" : "text-[#14213D]"}`}>{plan.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className={`text-5xl ${HEAD} ${plan.highlight ? "text-white" : "text-[#14213D]"}`}>{plan.price}</span>
                  <span className={plan.highlight ? "pb-1.5 text-white/50" : "pb-1.5 text-[#14213D]/50"}>/month</span>
                </div>
                <p className={"mt-3 text-[15px] leading-relaxed " + (plan.highlight ? "text-white/70" : "text-[#14213D]/70")}>
                  {plan.tagline}
                </p>

                <ul className="mt-6 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      <Check className={"mt-0.5 h-5 w-5 shrink-0 " + (plan.highlight ? "text-[#F5821F]" : "text-[#F5821F]")} />
                      <span
                        className={
                          "text-[15px] leading-snug " +
                          (f.free ? "font-semibold " : "") +
                          (f.strong ? "font-bold " : "") +
                          (plan.highlight ? "text-white/90" : "text-[#14213D]")
                        }
                      >
                        {f.text}
                        {f.free && (
                          <span className="ml-2 rounded-full bg-[#F5821F] px-2 py-0.5 text-[11px] font-bold uppercase text-[#14213D]">Free</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.highlight && (
                  <p className="mt-6 rounded-xl bg-white/5 p-4 text-sm leading-relaxed text-white/70">
                    Text automation, an after-hours AI agent, booking calendars, and email marketing —
                    the tools most schools juggle separately — in one system we build and run for you.
                  </p>
                )}

                <a
                  href="#claim"
                  className={
                    "mt-6 flex h-14 w-full items-center justify-center rounded-full text-base font-bold transition-transform active:scale-[0.98] hover:-translate-y-0.5 " +
                    (plan.highlight
                      ? "bg-[#F5821F] text-[#14213D] shadow-lg shadow-[#F5821F]/30"
                      : "border-2 border-[#F5821F] text-[#F5821F] hover:bg-[#F5821F]/5")
                  }
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex items-start gap-3 rounded-xl border border-[#2C7BE5]/20 bg-[#2C7BE5]/5 p-4">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[#2C7BE5]" />
              <p className="text-sm font-medium text-[#14213D]">
                See your landing page before you pay. Cancel anytime and keep your page.
              </p>
            </div>
            <p className="mt-5 text-center text-sm font-semibold text-[#F5821F]">
              We take on 5 KaiPod schools per month.
            </p>
            <p className="mt-1 text-center text-sm text-[#14213D]/50">
              Not sure which plan? Book a call and we&apos;ll help you pick.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OBJECTION HANDLER */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-2xl space-y-4">
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-[#14213D]/10 bg-white p-5 shadow-sm">
            <p className="text-[15px] text-[#14213D]/80">
              &ldquo;I&apos;d love better marketing, but I&apos;m locked into KaiPod&apos;s CRM.&rdquo;
            </p>
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#14213D] p-5 text-white shadow-md">
            <p className="text-[15px] leading-relaxed">
              Good. We built it for that. Your Newton form stays exactly where it is. We just send
              more parents to it.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-2xl">
          <h2 className={`text-center text-3xl text-[#14213D] sm:text-4xl ${HEAD}`}>Questions?</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="overflow-hidden rounded-2xl border border-[#14213D]/10 bg-white">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-[15px] font-bold text-[#14213D]">{f.q}</span>
                    <Plus className={`h-5 w-5 shrink-0 text-[#F5821F] transition-transform ${open ? "rotate-45" : ""}`} />
                  </button>
                  {open && <p className="px-5 pb-5 text-[15px] leading-relaxed text-[#14213D]/70">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA + BOOKING CALENDAR */}
      <section id="claim" className="scroll-mt-6 px-5 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-[#14213D]/10 bg-white p-6 shadow-xl sm:p-10">
            <h2 className={`text-3xl text-[#14213D] sm:text-4xl ${HEAD}`}>Let&apos;s build your landing page.</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#14213D]/70">
              Grab a time for a 20-minute call. Tell us about your school and we&apos;ll send your
              page before you pay anything.
            </p>
            <div className="mt-7 overflow-hidden rounded-2xl border border-[#14213D]/10">
              <iframe
                src={BOOKING_SRC}
                title="Book your 20-minute call"
                id="MQ4CFV4X4PLE1Wbk4pvu_kaipod"
                className="h-[720px] w-full border-0"
                scrolling="yes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-[#14213D]/10 bg-white px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <Logo />
            <div className="flex items-center gap-4 text-sm text-[#14213D]/60">
              <span>enrollboost.org</span>
              <a href="/privacy" className="hover:text-[#14213D]">Privacy Policy</a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-[#14213D]/40 sm:text-left">
            EnrollBoost is an independent marketing agency and is not affiliated with or endorsed
            by KaiPod Learning. Newton is a product of its respective owner.
          </p>
        </div>
      </footer>
    </div>
  );
}
