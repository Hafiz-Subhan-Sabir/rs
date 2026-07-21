import { CtaBand } from "@/components/layout/cta-band";
import { ClientTestimonials } from "@/components/pages/client-testimonials";
import { BusinessPaths } from "@/components/pages/business-paths";
import { CapabilitiesGrid } from "@/components/pages/capabilities-grid";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { TechMarquee } from "@/components/pages/brand-marquee";
import { FeaturedWork } from "@/components/pages/featured-work";
import { HomeHero } from "@/components/pages/home-hero";
import { ImpactStrip } from "@/components/pages/impact-strip";
import { PackagedOffer } from "@/components/pages/packaged-offer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HomeHero />
      <TechMarquee />
      <CapabilitiesGrid />
      <ImpactStrip />
      <BusinessPaths />
      <DeliveryCycle />
      <FeaturedWork />
      <PackagedOffer />
      <ClientTestimonials />
      <CtaBand
        title="Tell us the digital problem. We will show you the tech fix."
        description="Whether it is your website, software, search, or daily workflows, share what is slowing the business down. We reply with a plain plan so you can get back to quality work."
        primaryLabel="Describe your problem"
      />
    </main>
  );
}
