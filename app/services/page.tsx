import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { BusinessPaths } from "@/components/pages/business-paths";
import { DiagramGallery } from "@/components/pages/diagram-gallery";
import { GrowthWorkflow } from "@/components/pages/growth-workflow";

export const metadata: Metadata = {
  title: "RS Dev | Services for build, search, enquiries and ops",
  description:
    "Sites, bespoke tools, search placement, sales boards, smart assistants, and campaign advice mapped to the blocker you feel today.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell className="pb-0">
      <PageHero
        badge="What we ship"
        title="Each offer answers one kind of pressure in your week."
        description="Pick the path that matches today: presence online, product build, search rank, pipeline, or repeat office work."
        primaryCta={{ label: "Describe your situation", href: "/contact" }}
        secondaryCta={{ label: "See live work", href: "/work" }}
      />
      <BusinessPaths />
      <GrowthWorkflow />
      <DiagramGallery />
      <div className="pb-20">
        <CtaBand
          title="Unsure which move comes first?"
          description="We sequence build, search, ads, and back office wiring based on where money or time is actually leaking."
        />
      </div>
    </PageShell>
  );
}
