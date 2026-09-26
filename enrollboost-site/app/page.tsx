import { HomeLanding } from "@/components/home-landing";
import { BookingCTA } from "@/components/booking-cta";

export default function HomePage() {
  return (
    <>
      <HomeLanding />
      <BookingCTA
        title="Ready to fill your classrooms?"
        subtitle="Book your 60-day pilot. One new student can pay for the whole thing — and you'll see exactly what our system does before you scale."
      />
    </>
  );
}
