import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Projects } from "@/components/main/projects";

export const metadata: Metadata = {
  title: "RS Dev | Flagship products & enterprise builds",
  description:
    "Video Transcript Studio, Filtering from Any App, The Syndicate, enterprise system design, and SEO AI optimization work from the RS Dev crew.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell className="pb-0">
      <PageHero
        badge="Portfolio"
        title="SEO systems, AI automation, and enterprise products."
        description="Flagship work includes Video Transcript Studio, Filtering from Any App, The Syndicate web app, and an enterprise full system in active development — plus earlier live builds."
        primaryCta={{ label: "Describe your situation", href: "/contact" }}
        secondaryCta={{ label: "Our services", href: "/services" }}
      />
      <div data-reveal="fade-up" data-reveal-duration="0.92">
        <Projects />
      </div>
      <div className="pb-20">
        <CtaBand secondaryLabel="Meet the crew" secondaryHref="/about" />
      </div>
    </PageShell>
  );
}
