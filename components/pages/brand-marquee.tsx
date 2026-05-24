"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

import { MotionIn } from "@/components/motion/MotionIn";
import { TECH_STACK, type TechStackItem } from "@/constants/brands";

function TechItem({ item }: { item: TechStackItem }) {
  const { name, logo, category, accentRgb, accent } = item;
  const [imgOk, setImgOk] = useState(true);

  const style = {
    "--brand-rgb": accentRgb,
    "--brand-accent": accent,
  } as CSSProperties;

  return (
    <div
      className="brand-marquee-item group relative flex shrink-0 items-center gap-4 overflow-hidden rounded-2xl border border-gray-200/70 bg-white/80 px-6 py-4 dark:border-white/10 dark:bg-white/[0.04]"
      style={style}
      title={`${name}: ${category}`}
    >
      <div className="relative flex h-10 w-[120px] items-center justify-center sm:h-11 sm:w-[140px]">
        {imgOk ? (
          <Image
            src={logo}
            alt={name}
            width={140}
            height={48}
            className="brand-marquee-logo h-8 w-auto max-w-[120px] object-contain"
            onError={() => setImgOk(false)}
          />
        ) : (
          <span className="brand-marquee-fallback text-sm font-bold tracking-tight">{name}</span>
        )}
      </div>
      <span className="brand-marquee-sector hidden sm:block text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500">
        {category}
      </span>
    </div>
  );
}

export function TechMarquee() {
  const items: TechStackItem[] = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="relative border-y border-gray-200/80 bg-gray-50/60 py-14 sm:py-16 dark:border-white/[0.06] dark:bg-white/[0.02] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 mb-10">
        <MotionIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-600 dark:text-cyan-400/90">
                Stack we ship with
              </p>
              <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                Tools behind the revenue loop
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-600 dark:text-gray-400 sm:text-right">
              Modern web, API, and deploy tooling chosen per project, not buzzword bingo.
            </p>
          </div>
        </MotionIn>
      </div>

      <div className="brand-marquee-mask relative">
        <div className="brand-marquee-track-ltr flex w-max gap-4 sm:gap-5">
          {items.map((item, i) => (
            <TechItem key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
