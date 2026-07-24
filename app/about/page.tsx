import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { DeliverySnapshots } from "@/components/pages/delivery-snapshots";
import { CrewSection } from "@/components/pages/crew-section";
import { FounderSection } from "@/components/pages/founder-section";
import { ValuesStrip } from "@/components/pages/values-strip";

export const metadata: Metadata = {
  title: "RS Dev | Meet the six-person crew",
  description:
    "Hafiz Subhan and a six-person RS Dev crew — full stack, system architecture, DevOps & automation, apps, SEO AI, and cloud solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        title="A Six-Expert Crew Helps You Solve Digital Problems."
        description="RS Dev is a six-person specialist team led by Hafiz Subhan. We design, build, and ship the websites, software, SEO, DevOps, and cloud systems that unblock entrepreneurs — so your company can focus on quality work, not tech drag."
        primaryCta={{ label: "Describe Your Problem", href: "/contact" }}
        secondaryCta={{ label: "See Our Services", href: "/services" }}
      />
      <CrewSection />
      <FounderSection />
      <DeliverySnapshots />
      <ValuesStrip />
      <CtaBand
        title="Problems First. Technology Second."
        description="We agree what needs to change for your business before we write code, so the fix matches how your team actually works."
      />
    </PageShell>
  );
}
