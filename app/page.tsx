import { BookConsultationCta } from "@/components/layout/book-consultation-cta";
import { ClientTestimonials } from "@/components/pages/client-testimonials";
import { DeliveryCycle } from "@/components/pages/delivery-cycle";
import { TechMarquee } from "@/components/pages/brand-marquee";
import { HomeHero } from "@/components/pages/home-hero";
import { ImpactStrip } from "@/components/pages/impact-strip";
import { MeetingScheduler } from "@/components/pages/meeting-scheduler";
import { PackagedOffer } from "@/components/pages/packaged-offer";
import { PageTestimonials } from "@/components/pages/page-testimonials";
import { ServicesCollage } from "@/components/pages/services-collage";
import { WhyChooseUs } from "@/components/pages/why-choose-us";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HomeHero />
      <TechMarquee />
      <ImpactStrip />
      <ServicesCollage />
      <WhyChooseUs />
      <DeliveryCycle />
      <PackagedOffer />
      <PageTestimonials />
      <ClientTestimonials />

      <div
        id="meeting"
        className="scroll-mt-28 mx-auto w-[min(90vw,1100px)] py-[clamp(2rem,6vw,4rem)]"
      >
        <div className="mb-[clamp(1rem,3vw,1.75rem)] text-center max-w-2xl mx-auto">
          <p className="text-[clamp(0.7rem,1.5vw,0.8rem)] font-bold uppercase tracking-[0.24em] text-accent">
            Book time
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.6rem,4vw,2.5rem)] font-semibold text-stone-900 dark:text-white">
            45 minute meeting
          </h2>
          <p className="mt-2 text-[clamp(0.95rem,2vw,1.1rem)] text-stone-600 dark:text-stone-400">
            Pick a date and time — we confirm details by email.
          </p>
        </div>
        <MeetingScheduler />
      </div>

      <BookConsultationCta />
    </main>
  );
}
