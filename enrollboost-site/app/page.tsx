import { Hero } from "@/components/sections/hero";
import { Awareness } from "@/components/sections/awareness";
import { FunnelSection } from "@/components/sections/funnel";
import { Problems } from "@/components/sections/problems";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyUs } from "@/components/sections/why-us";
import { FormsPromo } from "@/components/sections/forms-promo";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { BookingCTA } from "@/components/booking-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awareness />
      <FunnelSection />
      <Problems />
      <HowItWorks />
      <WhyUs />
      <FormsPromo />
      <CaseStudies preview />
      <Testimonials />
      <FAQ />
      <BookingCTA />
    </>
  );
}
