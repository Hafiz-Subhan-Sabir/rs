import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Timeline } from "@/components/main/timeline";
import { COMPANY_JOURNEY_INTRO } from "@/constants/company-journey";

export const metadata: Metadata = {
  title: "RS Dev | Our Story",
  description:
    "How RS Dev grew from early client work into a six-person studio that helps entrepreneurs solve digital problems with clear plans and practical technology.",
  alternates: { canonical: "/journey" },
};

export default function JourneyPage() {
  return (
    <PageShell>
      <PageHero
        title={COMPANY_JOURNEY_INTRO.title}
        description={COMPANY_JOURNEY_INTRO.description}
        primaryCta={{ label: "Work With Us", href: "/contact" }}
        secondaryCta={{ label: "See Our Services", href: "/services" }}
      />
      <Timeline />
      <CtaBand
        title="Ready To Start Your Next Chapter?"
        description="Tell us what is slowing your team down — a website, a tool, search, or daily busywork. We reply within a day with a plain plan and an honest yes or no on fit."
        primaryLabel="Describe Your Problem"
      />
    </PageShell>
  );
}
