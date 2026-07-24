"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { MotionIn } from "@/components/motion/MotionIn";
import { HighlightKeywords } from "@/components/ui/highlight-keywords";
import { CLIENT_PARTNERS, type ClientPartner } from "@/constants/brands";
import { CLIENT_TESTIMONIALS, type ClientTestimonial } from "@/constants/testimonials";
import { cn } from "@/lib/utils";

type TestimonialItem = ClientTestimonial & {
  partner: ClientPartner;
};

function TestimonialCard({
  partner,
  quote,
  author,
  role,
}: {
  partner: ClientPartner;
  quote: string;
  author: string;
  role: string;
}) {
  const { name, logo, sector } = partner;
  const [imgOk, setImgOk] = useState(true);

  return (
    <article
      className={cn(
        "testimonial-card relative flex w-[min(88vw,360px)] shrink-0 flex-col rounded-xl border-2 border-stone-200/90 bg-white/95 p-5 sm:w-[400px] sm:p-6 dark:border-white/12 dark:bg-stone-900/95",
      )}
      tabIndex={0}
    >
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border-2 border-stone-200/70 bg-stone-50 p-2 dark:border-white/10 dark:bg-white/5 sm:h-14 sm:w-14">
          {imgOk ? (
            <Image
              src={logo}
              alt=""
              width={48}
              height={48}
              className="h-8 w-8 object-contain sm:h-10 sm:w-10 opacity-80"
              onError={() => setImgOk(false)}
              aria-hidden
            />
          ) : (
            <span className="text-sm font-bold text-accent" aria-hidden>
              {name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-100">{name}</p>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">
            {sector}
          </p>
        </div>
      </div>

      <blockquote className="mt-4 line-clamp-5 text-[0.95rem] leading-relaxed text-stone-700 dark:text-stone-300">
        <span className="text-accent/80" aria-hidden>
          &ldquo;
        </span>
        <HighlightKeywords text={quote} />
        <span className="text-accent/80" aria-hidden>
          &rdquo;
        </span>
      </blockquote>

      <footer className="mt-4 border-t-2 border-stone-200/70 pt-3 dark:border-white/10">
        <p className="text-sm font-semibold text-stone-900 dark:text-white">{author}</p>
        <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">{role}</p>
      </footer>
    </article>
  );
}

function TestimonialMarqueeRow({
  items,
  direction,
}: {
  items: TestimonialItem[];
  direction: "ltr" | "rtl";
}) {
  const loop = [...items, ...items];
  const trackClass =
    direction === "ltr" ? "testimonial-marquee-track-ltr" : "testimonial-marquee-track-rtl";

  return (
    <div className="testimonial-marquee-mask relative">
      <div className={`${trackClass} flex w-max gap-4 sm:gap-5`}>
        {loop.map((item, i) => (
          <TestimonialCard
            key={`${item.partnerName}-${direction}-${i}`}
            partner={item.partner}
            quote={item.quote}
            author={item.author}
            role={item.role}
          />
        ))}
      </div>
    </div>
  );
}

export function ClientTestimonials() {
  const items = useMemo(() => {
    const resolved: TestimonialItem[] = [];
    for (const t of CLIENT_TESTIMONIALS) {
      const partner = CLIENT_PARTNERS.find((p) => p.name === t.partnerName);
      if (partner) resolved.push({ ...t, partner });
    }
    return resolved;
  }, []);

  const midpoint = Math.ceil(items.length / 2);
  const rowLtr = items.slice(0, midpoint);
  const rowRtl = items.slice(midpoint);

  return (
    <section className="relative overflow-hidden border-y-2 border-stone-200/80 bg-white/50 py-16 sm:py-20 dark:border-white/[0.06] dark:bg-white/[0.02]">
      <div className="mx-auto w-[90vw] max-w-[90vw] mb-10">
        <MotionIn>
          <div className="text-center sm:text-left">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-stone-900 dark:text-white">
              Teams We Have Worked With
            </h2>
            <p className="mt-3 max-w-2xl text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              Entrepreneurs and operators who brought{" "}
              <span className="font-semibold text-accent">RS Dev</span> a digital problem — and stayed
              focused on quality work while we shipped the fix.
            </p>
          </div>
        </MotionIn>
      </div>

      <div className="space-y-5 sm:space-y-6">
        <TestimonialMarqueeRow items={rowLtr} direction="ltr" />
        <TestimonialMarqueeRow items={rowRtl} direction="rtl" />
      </div>
    </section>
  );
}
