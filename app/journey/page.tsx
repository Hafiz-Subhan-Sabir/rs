import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { ResumeSection } from "@/components/main/resume-section";
import { Timeline } from "@/components/main/timeline";

export const metadata: Metadata = {
  title: "RS Dev | Journey — Timeline & delivery snapshot",
  description:
    "RS Dev journey: milestones from fundamentals to product delivery, plus a resume snapshot for web apps, CRM, SEO, and AI work.",
  alternates: { canonical: "/journey" },
};

export default function JourneyPage() {
  return (
    <PageShell>
      <PageHero
        badge="Our journey"
        title="Capability built over years — now delivered as one team."
        description="The same discipline behind premium interfaces, secure systems, and growth programs — structured so clients get continuity from launch through maintenance."
        primaryCta={{ label: "Download resume", href: "/resume/Hafiz_Subhan_Resume.pdf" }}
        secondaryCta={{ label: "Get in touch", href: "/contact" }}
      />
      <div data-reveal="fade-right" data-reveal-duration="0.9" data-reveal-delay="0.08">
        <Timeline />
      </div>
      <div data-reveal="fade-up" data-reveal-duration="0.92" data-reveal-delay="0.12">
        <ResumeSection />
      </div>
      <CtaBand />
    </PageShell>
  );
}
