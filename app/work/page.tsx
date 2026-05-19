import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Projects } from "@/components/main/projects";

export const metadata: Metadata = {
  title: "RS Dev | Work — Selected projects & case studies",
  description:
    "Explore RS Dev selected work: e-commerce, AI, secure systems, ERP, and product UIs delivered with performance and polish.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell className="pb-0">
      <PageHero
        badge="Selected work"
        title="Proof that the full cycle works — build, ship, and compound."
        description="Selected deliveries where product quality, search visibility, and operational systems had to work together — not as isolated one-offs."
        primaryCta={{ label: "Discuss your situation", href: "/contact" }}
        secondaryCta={{ label: "Our services", href: "/services" }}
      />
      <div data-reveal="fade-up" data-reveal-duration="0.92">
        <Projects />
      </div>
      <div className="pb-20">
        <CtaBand secondaryLabel="About RS Dev" secondaryHref="/about" />
      </div>
    </PageShell>
  );
}
