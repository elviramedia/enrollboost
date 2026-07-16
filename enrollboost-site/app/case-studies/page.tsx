import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CaseStudies } from "@/components/sections/case-studies";
import { BookingCTA } from "@/components/booking-cta";

export const metadata: Metadata = {
  title: "Case Studies — Enrollment Results",
  description:
    "How charter, private, and public K-12 schools filled seats by fixing their awareness gap with EnrollBoost.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Different schools. The same missing piece."
        description="Each of these schools was strong on the inside and invisible on the outside. Here's the challenge they faced, the campaign we ran, and what changed."
      />
      <CaseStudies />
      <BookingCTA />
    </>
  );
}
