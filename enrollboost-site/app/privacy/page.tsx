import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How EnrollBoost collects, uses, and protects information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        { heading: "Overview", body: ["EnrollBoost (“we,” “us”) helps K-12 schools grow enrollment. This policy explains what information we collect through our website and services and how we use it."] },
        { heading: "Information We Collect", body: ["We collect information you provide directly — such as your name, work email, school, and role — when you request a strategy session or contact us. We also collect standard analytics data such as pages visited and device type."] },
        { heading: "How We Use Information", body: ["We use your information to respond to inquiries, schedule strategy sessions, deliver our services, and improve our website. We do not sell your personal information."] },
        { heading: "Cookies & Analytics", body: ["We use cookies and third-party analytics to understand how visitors use our site. You can control cookies through your browser settings."] },
        { heading: "Data Sharing", body: ["We may share information with service providers (such as CRM and scheduling tools) strictly to operate our services. These providers are bound to protect your information."] },
        { heading: "Your Rights", body: ["You may request access to, correction of, or deletion of your personal information by contacting us at hello@enrollboost.org."] },
        { heading: "Contact", body: ["Questions about this policy? Email hello@enrollboost.org."] },
      ]}
    />
  );
}
