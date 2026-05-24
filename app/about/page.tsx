import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { DeliverySnapshots } from "@/components/pages/delivery-snapshots";
import { FounderSection } from "@/components/pages/founder-section";
import { ProblemSolution } from "@/components/pages/problem-solution";
import { ValuesStrip } from "@/components/pages/values-strip";

export const metadata: Metadata = {
  title: "RS Dev | About the crew behind the work",
  description:
    "Founder led crew for product build, search placement, enquiry systems, and back office wiring with written plans and plain updates.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        badge="Who we are"
        title="For operators who need results, not another handoff email."
        description="One small senior crew owns the site, the search rank, the enquiry path, and the routines behind daily ops. You talk to the people who build."
        primaryCta={{ label: "Describe your situation", href: "/contact" }}
        secondaryCta={{ label: "See what we ship", href: "/services" }}
      />
      <FounderSection />
      <ProblemSolution />
      <DeliverySnapshots />
      <ValuesStrip />
      <DeliveryCycle />
      <CtaBand
        title="Clarity on paper first. Build second."
        description="Whether the pressure is a new product surface, a rank slide, or office drag, we agree outcomes before code starts."
      />
    </PageShell>
  );
}
