"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/utils";
import { CalendarCheck, Mail, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk enrollment."
        description="Tell us about your school and where enrollment stands. We'll follow up to schedule your Enrollment Strategy Session."
      />

      <section className="container pb-24 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:p-10">
              {sent ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent" />
                  <h2 className="mt-5 text-2xl font-semibold text-ink">Thank you.</h2>
                  <p className="mt-2 max-w-sm text-ink-muted">
                    We&apos;ve received your details and will be in touch shortly to
                    schedule your strategy session.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" placeholder="Jane Superintendent" required />
                    <Field label="Work email" name="email" type="email" placeholder="jane@school.org" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="School / district" name="school" placeholder="Riverside Charter Academy" required />
                    <Field label="Your role" name="role" placeholder="Enrollment Director" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">
                      Where does enrollment stand?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your current enrollment and goals..."
                      className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-brand-blue"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 font-medium text-white shadow-glow transition-all hover:bg-accent-dark hover:-translate-y-0.5 sm:w-auto"
                  >
                    Request My Strategy Session
                  </button>
                  <p className="text-xs text-ink-muted">
                    This is a booking placeholder. Connect it to Calendly or
                    GoHighLevel to capture and route leads automatically.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-3xl ink-gradient p-8 text-white shadow-lift">
                <CalendarCheck className="h-8 w-8 text-accent-soft" />
                <h3 className="mt-4 text-xl font-semibold">Prefer to book directly?</h3>
                <p className="mt-2 text-white/70">
                  Grab a 30-minute Enrollment Strategy Session on our calendar. No
                  pitch — just a clear read on your awareness gap.
                </p>
                <Button href={BOOKING_URL} variant="primary" className="mt-6">
                  Book a Strategy Session
                </Button>
              </div>
              <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
                <Mail className="h-6 w-6 text-brand-blue" />
                <h3 className="mt-4 font-semibold text-ink">Email us</h3>
                <p className="mt-1 text-ink-muted">hello@enrollboost.org</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-brand-blue"
      />
    </div>
  );
}
