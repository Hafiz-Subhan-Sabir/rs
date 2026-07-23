import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { DeliverySnapshots } from "@/components/pages/delivery-snapshots";
import { CrewSection } from "@/components/pages/crew-section";
import { FounderSection } from "@/components/pages/founder-section";
import { ValuesStrip } from "@/components/pages/values-strip";

export const metadata: Metadata = {
  title: "RS Dev | Meet the six-person crew",
  description:
    "Hafiz Subhan and a six-person RS Dev crew — full stack, system architecture, AI automation, apps, SEO AI, and business development.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        badge="About RS Dev"
        title="A six-person crew built for clear delivery."
        description="Entrepreneurs come to us when websites, software, SEO, or daily tech drag gets in the way — and they want specialists who design, automate, and ship properly."
        primaryCta={{ label: "Describe your problem", href: "/contact" }}
        secondaryCta={{ label: "See our services", href: "/services" }}
      />
      <CrewSection />
      <FounderSection />
      <DeliverySnapshots />
      <ValuesStrip />
      <DeliveryCycle />
      <CtaBand
        title="Problems first. Technology second."
        description="We agree what needs to change for your business before we write code, so the fix matches how your team actually works."
      />
    </PageShell>
  );
}
