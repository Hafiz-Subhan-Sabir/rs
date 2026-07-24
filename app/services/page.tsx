import type { Metadata } from "next";

import { BookConsultationCta } from "@/components/layout/book-consultation-cta";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { CapabilitiesGrid } from "@/components/pages/capabilities-grid";
import { BusinessPaths } from "@/components/pages/business-paths";
import { PackagedOffer } from "@/components/pages/packaged-offer";
import { WhyChooseUs } from "@/components/pages/why-choose-us";
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
        title="Technology That Solves Real Company Problems."
        description={SITE_SUBTAGLINE}
        primaryCta={{ label: "Describe Your Problem", href: "/contact" }}
        secondaryCta={{ label: "Meet The Crew", href: "/about" }}
      />
      <CapabilitiesGrid showCta={false} />
      <WhyChooseUs />
      <BusinessPaths />
      <PackagedOffer />
      <BookConsultationCta note="Cloud guidance from Daniyal Sheikh when you need scale." />
    </PageShell>
  );
}
