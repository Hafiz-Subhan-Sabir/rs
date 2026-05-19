import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { ProblemSolution } from "@/components/pages/problem-solution";
import { ValuesStrip } from "@/components/pages/values-strip";
import { TestimonialsEducation } from "@/components/main/testimonials-education";

export const metadata: Metadata = {
  title: "RS Dev | About — Delivery team for web, SEO & automation",
  description:
    "RS Dev is a delivery team focused on measurable outcomes: build, rank, maintain, convert, and automate — with clear scope and accountable execution.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        badge="Who we are"
        title="Built for operators who need results — not another vendor handoff."
        description="RS Dev combines product engineering, search visibility, lead systems, and workflow automation under one team. That means fewer gaps between launch, growth, and day-to-day operations."
        primaryCta={{ label: "Discuss your situation", href: "/contact" }}
        secondaryCta={{ label: "See capabilities", href: "/services" }}
      />
      <ProblemSolution />
      <ValuesStrip />
      <DeliveryCycle />
      <div data-reveal="fade-up" data-reveal-duration="0.9">
        <TestimonialsEducation />
      </div>
      <CtaBand
        title="Clarity first. Execution second."
        description="Whether the priority is a new product surface, ranking pressure, or operational drag — we align on outcomes before build begins."
      />
    </PageShell>
  );
}
