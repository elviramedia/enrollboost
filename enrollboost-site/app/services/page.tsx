import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BookingCTA } from "@/components/booking-cta";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import {
  Megaphone, Filter, Bot, MessagesSquare, Video, LayoutTemplate, BarChart3, Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — School Enrollment Marketing",
  description:
    "Meta advertising, enrollment funnels, CRM automation, parent follow-up, short-form video, landing pages, analytics, and enrollment strategy for K-12 schools.",
};

const SERVICES = [
  { id: "awareness", icon: Megaphone, t: "Meta Advertising", d: "Precision-targeted campaigns that put your school in front of the right families across your attendance area — by geography, life stage, and intent." },
  { id: "funnels", icon: Filter, t: "Enrollment Funnels", d: "Purpose-built journeys that turn a first impression into an inquiry, a tour, and an application — mapped to your enrollment calendar." },
  { id: "crm", icon: Bot, t: "CRM Automation", d: "Every lead captured and nurtured automatically, so no interested family is ever forgotten in a spreadsheet." },
  { id: "followup", icon: MessagesSquare, t: "Parent Follow-up", d: "Instant, multi-channel response — text, email, reminders — because speed to follow-up is the difference between a tour and a lost family." },
  { id: "video", icon: Video, t: "Short-form Video", d: "Scroll-stopping video that showcases your programs, culture, and outcomes in the format parents actually watch." },
  { id: "landing", icon: LayoutTemplate, t: "Landing Pages", d: "Fast, focused pages built to convert — one clear story, one clear action, tuned for real enrollment intent." },
  { id: "analytics", icon: BarChart3, t: "Analytics", d: "Clear reporting on what matters: inquiries, tours, applications, and enrollments — not vanity metrics." },
  { id: "strategy", icon: Target, t: "Enrollment Strategy", d: "The thinking that ties it together — positioning, timing, and priorities aligned to your funding and goals." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One connected system. Not a menu of tactics."
        description="Everything below works together toward a single outcome: more families discovering your school, and more of them enrolling. Sold as enrollment growth — delivered through marketing."
      />

      <section className="container py-16 md:py-24">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <StaggerItem key={s.id}>
              <div id={s.id} className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-paper-soft py-20 md:py-28">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="The Outcome"
            title="You don't buy marketing. You buy enrollment growth."
            description="Every service exists to move a family one step further down the funnel — from never having heard of you, to enrolled."
          />
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
