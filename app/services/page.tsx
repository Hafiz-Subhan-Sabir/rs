import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { BusinessPaths } from "@/components/pages/business-paths";
import { GrowthWorkflow } from "@/components/pages/growth-workflow";
import { SkillsPinned } from "@/components/main/skills-pinned";

export const metadata: Metadata = {
  title: "RS Dev | Services — Build, SEO, leads & automation",
  description:
    "End-to-end services: websites and apps, SEO and rankings, qualified lead generation, CRM, custom software, and workflow automation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell className="pb-0">
      <PageHero
        badge="Capabilities"
        title="Each service solves a specific constraint in your growth stack."
        description="Select the path that matches your situation — from brand experience and product build to search visibility, pipeline, and operational automation."
        primaryCta={{ label: "Discuss your situation", href: "/contact" }}
        secondaryCta={{ label: "View selected work", href: "/work" }}
      />
      <BusinessPaths />
      <GrowthWorkflow />
      <SkillsPinned />
      <div className="pb-20">
        <CtaBand
          title="Not sure which capability comes first?"
          description="We will help sequence build, SEO, campaigns, and automation based on where revenue or operations is actually stuck."
        />
      </div>
    </PageShell>
  );
}
