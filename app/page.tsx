import { BookConsultationCta } from "@/components/layout/book-consultation-cta";
import { ClientTestimonials } from "@/components/pages/client-testimonials";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { TechMarquee } from "@/components/pages/brand-marquee";
import { HomeHero } from "@/components/pages/home-hero";
import { ImpactStrip } from "@/components/pages/impact-strip";
import { MeetingScheduler } from "@/components/pages/meeting-scheduler";
import { PackagedOffer } from "@/components/pages/packaged-offer";
import { ServicesCollage } from "@/components/pages/services-collage";
import { WhyChooseUs } from "@/components/pages/why-choose-us";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HomeHero />
      <TechMarquee />
      <div className="cv-auto">
        <ImpactStrip />
      </div>
      <div className="cv-auto">
        <ServicesCollage />
      </div>
      <div className="cv-auto">
        <WhyChooseUs />
      </div>
      <div className="cv-auto">
        <DeliveryCycle />
      </div>
      <div className="cv-auto">
        <PackagedOffer />
      </div>
      <div className="cv-auto">
        <ClientTestimonials />
      </div>

      <div
        id="meeting"
        className="cv-auto scroll-mt-28 mx-auto w-[min(92vw,1100px)] py-[clamp(2rem,6vw,4rem)]"
      >
        <div className="mb-[clamp(1rem,3vw,1.75rem)] text-center max-w-2xl mx-auto">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.65rem)] font-semibold text-stone-900 dark:text-white">
            45 Minute Meeting
          </h2>
          <p className="mt-3 text-[clamp(1rem,2vw,1.15rem)] text-stone-600 dark:text-stone-400">
            Pick a date and time — we confirm details by email.
          </p>
        </div>
        <MeetingScheduler />
      </div>

      <BookConsultationCta />
    </main>
  );
}
