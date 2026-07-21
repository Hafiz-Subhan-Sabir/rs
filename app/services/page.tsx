import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { CapabilitiesGrid } from "@/components/pages/capabilities-grid";
import { BusinessPaths } from "@/components/pages/business-paths";
import { PackagedOffer } from "@/components/pages/packaged-offer";
import { SITE_SUBTAGLINE } from "@/constants";

export const metadata: Metadata = {
  title: "RS Dev | Services, digital problems solved with technology",
  description:
    "We help entrepreneurs fix websites, software, search, CRM, and workflows so companies can focus on quality work.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell className="pb-0">
      <PageHero
        badge="Services"
        title="Technology that solves real company problems."
        description={SITE_SUBTAGLINE}
        primaryCta={{ label: "Describe your problem", href: "/contact" }}
        secondaryCta={{ label: "See our work", href: "/work" }}
      />
      <CapabilitiesGrid showCta={false} />
      <BusinessPaths />
      <PackagedOffer />
      <div className="pb-20">
        <CtaBand
          title="Not sure where to start?"
          description="Tell us what is broken digitally and we will recommend the right mix of build, search, and workflow tech for your business."
        />
      </div>
    </PageShell>
  );
}
