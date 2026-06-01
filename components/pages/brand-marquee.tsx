"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

import { MotionIn } from "@/components/motion/MotionIn";
import { CLIENT_PARTNERS, type ClientPartner } from "@/constants/brands";
import { neonVariant } from "@/lib/neon-card";
import { cn } from "@/lib/utils";

function ClientLogo({ partner, colorIndex }: { partner: ClientPartner; colorIndex: number }) {
  const { name, logo, sector, accentRgb, accent } = partner;
  const [imgOk, setImgOk] = useState(true);

  const style = {
    "--brand-rgb": accentRgb,
    "--brand-accent": accent,
  } as CSSProperties;

  return (
    <div
      className={cn(
        "neon-card",
        neonVariant(colorIndex),
        "brand-marquee-item group relative flex shrink-0 items-center gap-4 overflow-hidden rounded-2xl border border-gray-200/70 bg-white/90 px-5 py-4 sm:px-6 sm:py-5 dark:border-white/10 dark:bg-[#0f0e18]/90",
      )}
      style={style}
      title={`${name} · ${sector}`}
    >
      <div
        className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-gray-200/60 p-2 sm:h-16 sm:w-16 sm:p-2.5 dark:border-white/10"
        style={{ backgroundColor: `rgba(${accentRgb}, 0.14)` }}
      >
        {imgOk ? (
          <Image
            src={logo}
            alt=""
            width={56}
            height={56}
            className="brand-marquee-mark h-10 w-10 object-contain sm:h-12 sm:w-12"
            onError={() => setImgOk(false)}
            aria-hidden
          />
        ) : (
          <span
            className="text-sm font-bold sm:text-base"
            style={{ color: accent }}
            aria-hidden
          >
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      <div className="min-w-0 pr-1">
        <p className="brand-marquee-name whitespace-nowrap text-sm font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {name}
        </p>
        <p className="brand-marquee-sector mt-0.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
          {sector}
        </p>
      </div>
    </div>
  );
}

export function TechMarquee() {
  const items: ClientPartner[] = [...CLIENT_PARTNERS, ...CLIENT_PARTNERS];

  return (
    <section className="relative border-y border-gray-200/80 bg-gray-50/60 py-14 sm:py-16 dark:border-white/[0.06] dark:bg-white/[0.02] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 mb-10">
        <MotionIn>
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Companies we work with
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
              Entrepreneurs and teams who trusted RS Dev to solve digital problems so they could stay focused on
              quality work.
            </p>
          </div>
        </MotionIn>
      </div>

      <div className="brand-marquee-mask relative">
        <div className="brand-marquee-track-ltr flex w-max gap-4 sm:gap-5">
          {items.map((partner, i) => (
            <ClientLogo key={`${partner.name}-${i}`} partner={partner} colorIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
