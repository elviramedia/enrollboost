import { SITE_URL } from "@/lib/utils";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EnrollBoost",
    url: SITE_URL,
    description:
      "EnrollBoost helps K-12 schools increase enrollment by increasing community awareness through Meta advertising, enrollment funnels, CRM automation, and short-form video.",
    areaServed: "US",
    knowsAbout: [
      "School Enrollment Marketing",
      "Charter School Marketing",
      "Private School Enrollment",
      "Meta Ads for Schools",
      "Education Marketing",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
