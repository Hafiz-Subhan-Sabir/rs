import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { ProblemSolution } from "@/components/pages/problem-solution";
import { ValuesStrip } from "@/components/pages/values-strip";
import { TestimonialsEducation } from "@/components/main/testimonials-education";

export const metadata: Metadata = {
  title: "RS Dev | About the crew behind the work",
  description:
    "RS Dev combines product build, search placement, enquiry systems, and back office wiring under one crew with written plans and plain updates.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        badge="Who we are"
        title="For operators who need results, not another handoff email."
        description="One crew owns the site, the search rank, the enquiry path, and the routines behind daily ops. Fewer gaps between launch, revenue, and Monday morning."
        primaryCta={{ label: "Describe your situation", href: "/contact" }}
        secondaryCta={{ label: "See what we ship", href: "/services" }}
      />
      <ProblemSolution />
      <ValuesStrip />
      <DeliveryCycle />
      <div data-reveal="fade-up" data-reveal-duration="0.9">
        <TestimonialsEducation />
      </div>
      <CtaBand
        title="Clarity on paper first. Build second."
        description="Whether the pressure is a new product surface, a rank slide, or office drag, we agree outcomes before code starts."
      />
    </PageShell>
  );
}
