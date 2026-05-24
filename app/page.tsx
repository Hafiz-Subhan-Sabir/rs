import { CtaBand } from "@/components/layout/cta-band";
import { BusinessPaths } from "@/components/pages/business-paths";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { FeaturedWork } from "@/components/pages/featured-work";
import { GrowthWorkflow } from "@/components/pages/growth-workflow";
import { BrandMarquee } from "@/components/pages/brand-marquee";
import { HomeHero } from "@/components/pages/home-hero";
import { MaintenanceCycle } from "@/components/pages/maintenance-cycle";
import { ProblemSolution } from "@/components/pages/problem-solution";
import { ProofStrip } from "@/components/pages/proof-strip";
import { ServicesPreview } from "@/components/pages/services-preview";
import { ValuesStrip } from "@/components/pages/values-strip";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HomeHero />
      <BrandMarquee />
      <ProblemSolution />
      <BusinessPaths />
      <GrowthWorkflow />
      <DeliveryCycle />
      <MaintenanceCycle />
      <ServicesPreview />
      <FeaturedWork />
      <ValuesStrip />
      <ProofStrip />
      <CtaBand
        title="If you can name the blocker, we can map the next move."
        description="Tell us whether revenue, operations, or presence online is stuck. We sketch build, search, enquiries, or back office wiring before you commit."
        primaryLabel="Describe your situation"
      />
    </main>
  );
}
