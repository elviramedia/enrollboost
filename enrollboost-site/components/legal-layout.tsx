import { PageHero } from "@/components/page-hero";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={`Last updated: ${updated}`} />
      <section className="container pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-semibold text-ink">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-ink-muted">{p}</p>
              ))}
            </div>
          ))}
          <p className="border-t border-ink/10 pt-8 text-sm text-ink-muted">
            This page is a template for general informational purposes and is not
            legal advice. Have your policies reviewed by qualified counsel before
            publishing.
          </p>
        </div>
      </section>
    </>
  );
}
