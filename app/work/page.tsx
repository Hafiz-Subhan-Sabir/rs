import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Projects } from "@/components/main/projects";

export const metadata: Metadata = {
  title: "RS Dev | Portfolio and delivery snapshots",
  description:
    "Outcome focused builds across commerce, operations, security, and automation. Ask about a similar project for your sector.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell className="pb-0">
      <PageHero
        badge="Portfolio"
        title="Builds framed by the business outcome, not the repo link."
        description="Live deployed sites — stores, tools, and website chat helpers. Open any build in a new tab, or contact us for something similar."
        primaryCta={{ label: "Describe your situation", href: "/contact" }}
        secondaryCta={{ label: "Our services", href: "/services" }}
      />
      <div data-reveal="fade-up" data-reveal-duration="0.92">
        <Projects />
      </div>
      <div className="pb-20">
        <CtaBand secondaryLabel="About the crew" secondaryHref="/about" />
      </div>
    </PageShell>
  );
}
