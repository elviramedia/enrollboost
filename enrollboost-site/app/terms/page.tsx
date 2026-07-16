import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the EnrollBoost website and services.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      updated="July 2026"
      sections={[
        { heading: "Acceptance of Terms", body: ["By accessing the EnrollBoost website or engaging our services, you agree to these terms. If you do not agree, please do not use the site."] },
        { heading: "Our Services", body: ["EnrollBoost provides enrollment strategy and digital marketing services for K-12 schools, including advertising, funnels, CRM automation, video, landing pages, and analytics. Specific deliverables are defined in your service agreement."] },
        { heading: "No Guarantee of Results", body: ["While we design systems to grow enrollment, outcomes depend on many factors including market, timing, and school-specific conditions. We do not guarantee specific enrollment numbers."] },
        { heading: "Intellectual Property", body: ["All content on this website is owned by EnrollBoost unless otherwise noted and may not be reproduced without permission."] },
        { heading: "Acceptable Use", body: ["You agree not to misuse the site, attempt to disrupt it, or use it for unlawful purposes."] },
        { heading: "Limitation of Liability", body: ["To the fullest extent permitted by law, EnrollBoost is not liable for indirect or consequential damages arising from use of the site or services."] },
        { heading: "Contact", body: ["Questions about these terms? Email hello@enrollboost.org."] },
      ]}
    />
  );
}
