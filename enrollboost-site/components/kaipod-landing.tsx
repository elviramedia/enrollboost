"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Check, X, Shield, Plus, MousePointerClick, FileText, Inbox, CalendarCheck } from "lucide-react";

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

const STACK = [
  { text: "Custom landing page, Newton form built in", tag: "FREE", highlight: true },
  { text: "Meta lead ads, set up and managed for you", tag: "Included" },
  { text: "Leads drop into your existing Newton drip", tag: "Included" },
  { text: "Radius targeting + A/B tested creative", tag: "Included" },
  { text: "Monthly results check-in (leads, calls booked, cost per lead)", tag: "Included" },
  { text: "Open house + virtual coffee chat playbook", tag: "Bonus", bonus: true },
];

const FAQS = [
  { q: "Do I have to leave KaiPod or Newton?", a: "No. Your Newton form and drip stay exactly as they are." },
  { q: "What does “free landing page” mean?", a: "We build it before you pay a cent. If you move forward, it's yours to keep, even if you cancel later." },
  { q: "How much should I spend on ads?", a: "Ad spend is paid directly to Meta, separate from our fee. Most schools start around $15–$20 a day, and you can adjust it anytime." },
  { q: "Is there a contract?", a: "No. It's month-to-month and you can cancel anytime." },
  { q: "Who is this for?", a: "KaiPod network microschools with open seats and a founder who's short on time." },
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

      {/* 5. OFFER STACK */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-3xl rounded-3xl bg-[#F5821F] p-5 sm:p-8">
          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-9">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2C7BE5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#2C7BE5]">
              The offer
            </span>
            <h2 className={`mt-4 text-3xl text-[#14213D] sm:text-4xl ${HEAD}`}>The KaiPod Seat-Filler</h2>

            <ul className="mt-7 divide-y divide-[#14213D]/10">
              {STACK.map((item) => (
                <li key={item.text} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="flex items-start gap-3 text-[15px] font-medium text-[#14213D]">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#F5821F]" />
                    {item.text}
                  </span>
                  <span
                    className={
                      "shrink-0 rounded-full px-3 py-1 text-xs font-bold uppercase " +
                      (item.highlight
                        ? "bg-[#F5821F] text-[#14213D]"
                        : item.bonus
                          ? "bg-[#2C7BE5]/10 text-[#2C7BE5]"
                          : "bg-[#14213D]/5 text-[#14213D]/60")
                    }
                  >
                    {item.tag}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <p className={`text-5xl text-[#14213D] ${HEAD}`}>$297<span className="text-2xl text-[#14213D]/50">/month</span></p>
              <p className="mt-1 text-sm text-[#14213D]/60">Month-to-month. Cancel anytime.</p>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#2C7BE5]/20 bg-[#2C7BE5]/5 p-4">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[#2C7BE5]" />
              <p className="text-sm font-medium text-[#14213D]">
                See your landing page before you pay. Cancel anytime and keep your page.
              </p>
            </div>

            <p className="mt-5 text-center text-sm font-semibold text-[#F5821F]">
              We take on 5 KaiPod schools per month.
            </p>
            <div className="mt-4">
              <CTAButton className="w-full">Claim your spot</CTAButton>
            </div>
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

      {/* 7. WANT MORE LATER */}
      <section className="px-5 py-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#14213D]/10 bg-white p-6 text-center">
          <h3 className={`text-lg text-[#14213D] ${HEAD}`}>Want more later?</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#14213D]/70">
            When seats start filling up, you can upgrade to our full HighLevel system for
            $497/mo: instant text follow-up, AI replies after hours, booking calendars, and email
            marketing in one place. It&apos;s optional and never required.
          </p>
        </div>
      </section>

      {/* 8. FAQ */}
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

      {/* 9. FINAL CTA + BOOKING CALENDAR */}
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

      {/* 10. FOOTER */}
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
