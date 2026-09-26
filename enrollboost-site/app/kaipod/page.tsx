import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { KaiPodLanding } from "@/components/kaipod-landing";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm", display: "swap" });

export const metadata: Metadata = {
  title: "KaiPod Seat-Filler — Fill Your Newton Seats | EnrollBoost",
  description:
    "A free landing page with your Newton inquiry form built in, plus Meta lead ads that send local parents to it. Month-to-month, cancel anytime. For KaiPod microschools.",
};

export default function KaiPodPage() {
  return (
    <div className={`${bricolage.variable} ${dmSans.variable}`}>
      <KaiPodLanding />
    </div>
  );
}
