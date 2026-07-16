import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";

export function Awareness() {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <SectionHeading
          eyebrow="The Core Insight"
          title={
            <>
              Schools don&apos;t have an enrollment problem.
              <br className="hidden md:block" />
              <span className="text-accent"> They have an awareness problem.</span>
            </>
          }
          description="Parents cannot choose a school they never discover. When enrollment slips, leaders reach for open houses and flyers — but those only convert families who already know you exist. The gap is upstream: in the community that has never heard your name."
        />

        <Reveal delay={0.1}>
          <div className="relative rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:p-10">
            <div className="space-y-6">
              {[
                {
                  n: "01",
                  t: "Awareness drives everything downstream",
                  d: "No awareness, no interest. No interest, no inquiries. The funnel starts long before the tour.",
                },
                {
                  n: "02",
                  t: "Quality doesn't market itself",
                  d: "The best programs in town stay hidden without a system to put them in front of families.",
                },
                {
                  n: "03",
                  t: "Word-of-mouth isn't a strategy",
                  d: "It's unpredictable and uncontrollable. Growth requires a repeatable engine you own.",
                },
              ].map((row) => (
                <div key={row.n} className="flex gap-5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-paper-soft text-sm font-semibold text-brand-blue">
                    {row.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{row.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{row.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
