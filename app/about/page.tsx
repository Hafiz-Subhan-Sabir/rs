import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { DeliverySnapshots } from "@/components/pages/delivery-snapshots";
import { FounderSection } from "@/components/pages/founder-section";
import { ValuesStrip } from "@/components/pages/values-strip";

export const metadata: Metadata = {
  title: "RS Dev | About the crew behind the work",
  description:
    "We help entrepreneurs solve digital problems with technology so their teams can focus on quality work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        badge="Who we are"
        title="We solve digital problems so companies can focus on what they do best."
        description="RS Dev is a small senior team. Entrepreneurs come to us when websites, software, search, or daily tech drag gets in the way of quality work, and they want it fixed properly."
        primaryCta={{ label: "Describe your problem", href: "/contact" }}
        secondaryCta={{ label: "See our services", href: "/services" }}
      />
      <FounderSection />
      <DeliverySnapshots />
      <ValuesStrip showDiagram={false} />
      <DeliveryCycle showDiagram={false} />
      <CtaBand
        title="Problems first. Technology second."
        description="We agree what needs to change for your business before we write code, so the fix matches how your team actually works."
      />
    </PageShell>
  );
}
