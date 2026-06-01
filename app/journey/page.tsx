import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Timeline } from "@/components/main/timeline";
import { COMPANY_JOURNEY_INTRO } from "@/constants/company-journey";

export const metadata: Metadata = {
  title: "RS Dev | Company journey",
  description:
    "How RS Dev grew from early client work into a digital studio that helps entrepreneurs solve business problems with technology.",
  alternates: { canonical: "/journey" },
};

export default function JourneyPage() {
  return (
    <PageShell>
      <PageHero
        badge="RS Dev"
        title={COMPANY_JOURNEY_INTRO.title}
        description={COMPANY_JOURNEY_INTRO.description}
        primaryCta={{ label: "Work with us", href: "/contact" }}
        secondaryCta={{ label: "See our services", href: "/services" }}
      />
      <div data-reveal="fade-right" data-reveal-duration="0.9" data-reveal-delay="0.08">
        <Timeline />
      </div>
      <CtaBand
        title="Ready to add your company to the next chapter?"
        description="Tell us the digital problem slowing your team down. We reply with a plain plan and honest fit."
        primaryLabel="Describe your problem"
      />
    </PageShell>
  );
}
