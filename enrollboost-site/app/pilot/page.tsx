import type { Metadata } from "next";
import { PilotLanding } from "@/components/pilot-landing";
import { BookingCTA } from "@/components/booking-cta";

export const metadata: Metadata = {
  title: "The 60-Day Enrollment Pilot",
  description:
    "A done-for-you enrollment growth pilot for K-12 districts and charters: on-site video, targeted ads, a lead funnel, CRM, and weekly reporting — built and run for you in 60 days.",
};

export default function PilotPage() {
  return (
    <>
      <PilotLanding />
      <BookingCTA
        title="Ready to fill your classrooms?"
        subtitle="Start with a 60-day pilot. One new student can pay for the whole thing."
      />
    </>
  );
}
