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
        title="If the bottleneck is clear, the next step should be too."
        description="Share where growth, operations, or brand experience is stuck. We will map a practical path — build, visibility, leads, or automation — before any commitment."
        primaryLabel="Discuss your situation"
      />
    </main>
  );
}
