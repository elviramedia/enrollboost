import Link from "next/link";
import { GraduationCap } from "lucide-react";

const COLS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Awareness Campaigns", href: "/services#awareness" },
      { label: "Enrollment Funnels", href: "/services#funnels" },
      { label: "CRM Automation", href: "/services#crm" },
      { label: "Short-form Video", href: "/services#video" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-paper-soft">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                <span className="text-ink">Enroll</span>
                <span className="text-accent">Boost</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Enrollment consultants that happen to use digital marketing. We help
              K-12 schools become impossible to ignore.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 text-sm text-ink-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} EnrollBoost. All rights reserved.</p>
          <p>Enrollment growth for K-12 schools.</p>
        </div>
      </div>
    </footer>
  );
}
