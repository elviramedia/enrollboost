import { PilotLanding } from "@/components/pilot-landing";
import { BookingCTA } from "@/components/booking-cta";

export default function HomePage() {
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
