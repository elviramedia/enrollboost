import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDY_DETAILS } from "@/lib/content";
import { CaseStudyDetail } from "@/components/sections/case-study-detail";
import { BookingCTA } from "@/components/booking-cta";

type Params = { slug: string };

const DETAILS = CASE_STUDY_DETAILS as Record<string, any>;

export function generateStaticParams() {
  return Object.keys(CASE_STUDY_DETAILS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const study = DETAILS[params.slug];
  if (!study) return { title: "Case Study — EnrollBoost" };
  return {
    title: `${study.school} — Case Study`,
    description: study.headline,
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const study = DETAILS[params.slug];
  if (!study) notFound();
  return (
    <>
      <CaseStudyDetail study={study} />
      <BookingCTA />
    </>
  );
}
