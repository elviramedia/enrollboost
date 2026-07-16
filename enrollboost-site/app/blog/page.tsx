import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BookingCTA } from "@/components/booking-cta";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — School Enrollment Marketing Insights",
  description:
    "Ideas on school enrollment marketing, community awareness, Meta ads for schools, and building enrollment systems that fill seats.",
};

const POSTS = [
  { t: "Where Did the Students Go?", d: "Why enrollment decline is almost always an awareness problem in disguise — and how to prove it with your own funnel.", cat: "Strategy", read: "6 min" },
  { t: "Empty Seats, Empty Budgets", d: "The real cost of an under-enrolled school, and how to translate open seats into the funding conversation your board cares about.", cat: "Funding", read: "5 min" },
  { t: "The Wrong Ways Schools Recruit", d: "Flyers, one-off open houses, and boosted posts feel like marketing. Here's why they rarely move enrollment — and what does.", cat: "Playbook", read: "7 min" },
  { t: "What Parents Actually Do Before Choosing a School", d: "A look at the modern parent decision journey, and where your school needs to show up to be considered at all.", cat: "Parent Psychology", read: "6 min" },
  { t: "Meta Ads for Schools, Explained Simply", d: "How targeted advertising reaches the exact families in your attendance area — without the jargon.", cat: "Meta Ads", read: "8 min" },
  { t: "Follow-up Is the Enrollment Superpower", d: "Speed-to-response quietly decides who tours and who disappears. How automation turns interest into applications.", cat: "Automation", read: "5 min" },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Thinking on enrollment growth."
        description="Perspectives for school leaders on awareness, funnels, and building an enrollment system that doesn't depend on word-of-mouth."
      />

      <section className="container py-16 md:py-24">
        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <StaggerItem key={p.t}>
              <article className="group flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div>
                  <div className="flex items-center gap-3 text-xs text-ink-muted">
                    <span className="rounded-full bg-brand-blue/10 px-3 py-1 font-semibold text-brand-blue">{p.cat}</span>
                    <span>{p.read} read</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{p.t}</h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">{p.d}</p>
                </div>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-ink">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <BookingCTA />
    </>
  );
}
