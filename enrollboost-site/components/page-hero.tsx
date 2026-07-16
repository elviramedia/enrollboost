import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/section-heading";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="pointer-events-none absolute inset-0 gradient-mesh" />
      <div className="container relative">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-[3.5rem] md:leading-[1.08]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
              {description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
