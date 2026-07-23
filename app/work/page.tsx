import type { Metadata } from "next";

import { BookConsultationCta } from "@/components/layout/book-consultation-cta";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Projects } from "@/components/main/projects";
import { PageTestimonials } from "@/components/pages/page-testimonials";
import { WhyChooseUs } from "@/components/pages/why-choose-us";

export const metadata: Metadata = {
  title: "RS Dev | The Syndicate, Affiliate Dashboard & InteliQuiz",
  description:
    "Flagship work: The Syndicate membership web app, custom Affiliate Dashboard, and InteliQuiz AI online proctoring — architecture, security, and product depth.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell className="pb-0">
      <PageHero
        badge="Portfolio"
        title="Three products. Real architecture. Clear outcomes."
        description="The Syndicate membership platform, a custom Affiliate Dashboard, and InteliQuiz — an AI-proctored quiz system. Each build shows how we design systems, secure access, and ship usable product surfaces."
        primaryCta={{ label: "Describe your situation", href: "/contact" }}
        secondaryCta={{ label: "Our services", href: "/services" }}
      />
      <div data-reveal="fade-up" data-reveal-duration="0.92">
        <Projects />
      </div>
      <WhyChooseUs />
      <PageTestimonials />
      <BookConsultationCta />
    </PageShell>
  );
}
