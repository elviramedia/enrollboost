import Link from "next/link";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import { ArrowLeft, Quote } from "lucide-react";

const FUNNEL_WIDTHS = ["100%", "84%", "68%", "52%"];

export function CaseStudyDetail({ study }: { study: any }) {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-12 md:pt-44 md:pb-14">
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="container relative">
          <Reveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" /> All case studies
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {study.type}
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-[3.25rem] md:leading-[1.08]">
              {study.school}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted">
              <span>{study.period}</span>
              <span className="text-ink/20">·</span>
              <span>{study.channel}</span>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-8 max-w-3xl text-balance text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              {study.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
              {study.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {study.heroStats.map((s: any) => (
            <div
              key={s.label}
              className={cn(
                "rounded-2xl border p-6",
                s.highlight
                  ? "border-transparent bg-accent text-white shadow-lift"
                  : "border-ink/10 bg-white text-ink shadow-soft"
              )}
            >
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</p>
              <p className="mt-3 text-sm font-semibold">{s.label}</p>
              {s.note && (
                <p className={cn("mt-1 text-xs leading-snug", s.highlight ? "text-white/80" : "text-ink-muted")}>
                  {s.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              The enrollment funnel
            </h3>
            <div className="mt-6 space-y-4">
              {study.funnel.map((f: any, i: number) => (
                <div key={f.label}>
                  <Reveal delay={i * 0.05}>
                    <div
                      className="flex items-center justify-between rounded-xl bg-brand-blue px-5 py-3.5 text-white"
                      style={{ width: FUNNEL_WIDTHS[i] ?? "100%" }}
                    >
                      <span className="text-sm font-semibold">{f.label}</span>
                      <span className="text-lg font-bold tabular-nums">{f.value}</span>
                    </div>
                  </Reveal>
                  {f.note && <p className="mt-1.5 pl-1 text-xs text-ink-muted">{f.note}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Campaign metrics
            </h3>
            <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
              {study.metrics.map((m: any, i: number) => (
                <div
                  key={m.label}
                  className={cn(
                    "flex items-center justify-between px-5 py-3 text-sm",
                    i % 2 === 1 && "bg-paper-soft"
                  )}
                >
                  <span className="text-ink-soft">{m.label}</span>
                  <span className="font-semibold tabular-nums text-ink">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 md:pb-20">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl shadow-lift md:grid-cols-[1.6fr_1fr]">
            <div className="ink-gradient p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Return on investment
              </p>
              <p className="mt-5 text-xl font-semibold leading-relaxed text-white">
                {study.roi.formula}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/60">{study.roi.note}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-ink-soft p-8 text-center">
              <p className="text-5xl font-bold tracking-tight text-accent sm:text-6xl">
                {study.roi.multiple}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/70">
                {study.roi.subtitle}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {study.creatives && study.creatives.length > 0 && (
        <section className="container pb-16 md:pb-20">
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            What drove results
          </h3>
          <p className="mt-2 text-sm text-ink-muted">Top-performing creative by leads generated.</p>
          <div className="mt-6 max-w-2xl space-y-2.5">
            {study.creatives.map((c: any) => (
              <div
                key={c.rank}
                className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white px-5 py-3.5 shadow-soft"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper-soft text-xs font-bold text-ink">
                  {c.rank}
                </span>
                <span className="flex-1 text-sm font-medium text-ink">{c.name}</span>
                <span className="text-sm font-semibold text-brand-blue">{c.leads}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {study.quote && (
        <section className="container pb-16 md:pb-20">
          <figure className="mx-auto max-w-3xl rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:p-10">
            <Quote className="h-8 w-8 text-accent/30" />
            <blockquote className="mt-5 text-xl leading-relaxed text-ink md:text-2xl">
              &ldquo;{study.quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-ink-muted">
              {study.quote.role}
            </figcaption>
          </figure>
        </section>
      )}

      {study.disclaimer && (
        <section className="container pb-6">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-ink-muted">
            {study.disclaimer}
          </p>
        </section>
      )}
    </>
  );
}
