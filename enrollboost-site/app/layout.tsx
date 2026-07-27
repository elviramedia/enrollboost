import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationJsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EnrollBoost — School Enrollment Marketing for K-12 Schools",
    template: "%s · EnrollBoost",
  },
  description:
    "EnrollBoost helps K-12 schools increase enrollment by increasing community awareness. Enrollment consultants that happen to use Meta advertising, funnels, and CRM automation.",
  keywords: [
    "School Enrollment Marketing",
    "School Marketing",
    "Charter School Marketing",
    "Private School Enrollment",
    "Education Marketing",
    "Meta Ads for Schools",
  ],
  openGraph: {
    title: "EnrollBoost — School Enrollment Marketing",
    description:
      "Great schools still lose students — because families never discover them. EnrollBoost makes schools impossible to ignore.",
    url: SITE_URL,
    siteName: "EnrollBoost",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EnrollBoost — School Enrollment Marketing",
    description:
      "Great schools still lose students — because families never discover them.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-paper font-sans antialiased">
        <OrganizationJsonLd />
        <AnnouncementBanner />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
