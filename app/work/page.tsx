import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Projects } from "@/components/main/projects";

export const metadata: Metadata = {
  title: "RS Dev | Work that left the repo",
  description:
    "Live builds: retail, vision, streaming UI, secure sign in, ERP, and assistant products with stack notes and links.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell className="pb-0">
      <PageHero
        badge="Built and live"
        title="Proof the full arc works: idea, ship, keep improving."
        description="Selected jobs where product quality, search, and back office tools had to work together, not as separate one offs."
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
