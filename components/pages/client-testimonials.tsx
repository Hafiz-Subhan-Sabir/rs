"use client";

import Image from "next/image";
import { useMemo, useState, type CSSProperties } from "react";

import { MotionIn } from "@/components/motion/MotionIn";
import { CLIENT_PARTNERS, type ClientPartner } from "@/constants/brands";
import { CLIENT_TESTIMONIALS, type ClientTestimonial } from "@/constants/testimonials";
import { neonVariant } from "@/lib/neon-card";
import { cn } from "@/lib/utils";

type TestimonialItem = ClientTestimonial & {
  partner: ClientPartner;
};

function TestimonialCard({
  partner,
  quote,
  author,
  role,
  colorIndex,
}: {
  partner: ClientPartner;
  quote: string;
  author: string;
  role: string;
  colorIndex: number;
}) {
  const { name, logo, sector, accentRgb, accent } = partner;
  const [imgOk, setImgOk] = useState(true);

  const style = {
    "--brand-rgb": accentRgb,
    "--brand-accent": accent,
  } as CSSProperties;

  return (
    <article
      className={cn(
        "testimonial-card",
        neonVariant(colorIndex),
        "relative flex w-[min(88vw,340px)] shrink-0 flex-col rounded-2xl border bg-white/95 p-5 sm:w-[380px] sm:p-6 dark:bg-[#0f0e18]/95",
      )}
      tabIndex={0}
      style={style}
    >
      <div className="flex items-center gap-4">
        <div
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gray-200/60 p-2 dark:border-white/10 sm:h-14 sm:w-14"
          style={{ backgroundColor: `rgba(${accentRgb}, 0.14)` }}
        >
          {imgOk ? (
            <Image
              src={logo}
              alt=""
              width={48}
              height={48}
              className="brand-marquee-mark h-8 w-8 object-contain sm:h-10 sm:w-10"
              onError={() => setImgOk(false)}
              aria-hidden
            />
          ) : (
            <span className="text-sm font-bold" style={{ color: accent }} aria-hidden>
              {name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <p className="brand-marquee-name text-sm font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {name}
          </p>
          <p className="brand-marquee-sector mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
            {sector}
          </p>
        </div>
      </div>

      <blockquote className="mt-4 line-clamp-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <span className="text-emerald-600/80 dark:text-cyan-400/80" aria-hidden>
          &ldquo;
        </span>
        {quote}
        <span className="text-emerald-600/80 dark:text-cyan-400/80" aria-hidden>
          &rdquo;
        </span>
      </blockquote>

      <footer className="mt-4 border-t border-gray-200/70 pt-3 dark:border-white/10">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">{author}</p>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{role}</p>
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
            colorIndex={i}
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
    <section className="relative overflow-hidden border-y border-gray-200/80 bg-gray-50/60 py-16 sm:py-20 dark:border-white/[0.06] dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 mb-10">
        <MotionIn>
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Teams we have worked with
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
              Entrepreneurs and operators who brought us a digital problem and stayed focused on quality work while we
              shipped the fix.
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
