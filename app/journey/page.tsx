import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Timeline } from "@/components/main/timeline";

export const metadata: Metadata = {
  title: "RS Dev | Journey",
  description:
    "Years from fundamentals to product delivery: sites, sales tools, search, assistants, and campaign releases as one story.",
  alternates: { canonical: "/journey" },
};

export default function JourneyPage() {
  return (
    <PageShell>
      <PageHero
        badge="Our path"
        title="Skill stacked over years, offered today as one crew."
        description="The same discipline behind sharp interfaces, safe sign in, and revenue programs, structured so clients get continuity from launch through care."
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "See what we ship", href: "/services" }}
      />
      <div data-reveal="fade-right" data-reveal-duration="0.9" data-reveal-delay="0.08">
        <Timeline />
      </div>
      <CtaBand />
    </PageShell>
  );
}
