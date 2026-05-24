import { CtaBand } from "@/components/layout/cta-band";
import { BusinessPaths } from "@/components/pages/business-paths";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { DeliverySnapshots } from "@/components/pages/delivery-snapshots";
import { TechMarquee } from "@/components/pages/brand-marquee";
import { HomeHero } from "@/components/pages/home-hero";
import { PackagedOffer } from "@/components/pages/packaged-offer";
import { ProblemSolution } from "@/components/pages/problem-solution";
import { ProofStrip } from "@/components/pages/proof-strip";
import { ValuesStrip } from "@/components/pages/values-strip";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HomeHero />
      <TechMarquee />
      <ProblemSolution />
      <PackagedOffer />
      <BusinessPaths />
      <DeliverySnapshots />
      <DeliveryCycle />
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
