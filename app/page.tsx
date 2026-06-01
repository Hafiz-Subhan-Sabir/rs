import { CtaBand } from "@/components/layout/cta-band";
import { ClientTestimonials } from "@/components/pages/client-testimonials";
import { BusinessPaths } from "@/components/pages/business-paths";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { DeliverySnapshots } from "@/components/pages/delivery-snapshots";
import { TechMarquee } from "@/components/pages/brand-marquee";
import { HomeHero } from "@/components/pages/home-hero";
import { MaintenanceCycle } from "@/components/pages/maintenance-cycle";
import { PackagedOffer } from "@/components/pages/packaged-offer";
import { ValuesStrip } from "@/components/pages/values-strip";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HomeHero />
      <TechMarquee />
      <BusinessPaths />
      <PackagedOffer showDiagram={false} />
      <DeliveryCycle />
      <DeliverySnapshots />
      <MaintenanceCycle />
      <ValuesStrip />
      <ClientTestimonials />
      <CtaBand
        title="Tell us the digital problem. We will show you the tech fix."
        description="Whether it is your website, software, search, or daily workflows, share what is slowing the business down. We reply with a plain plan so you can get back to quality work."
        primaryLabel="Describe your problem"
      />
    </main>
  );
}
