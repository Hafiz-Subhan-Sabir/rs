"use client";

import { useEffect, useRef, useState } from "react";

import { PROOF_STATS } from "@/constants/case-studies";
import { cn } from "@/lib/utils";

function CountUpStat({
  numeric,
  suffix,
  label,
  brandLabel,
}: {
  numeric: number;
  suffix: string;
  label: string;
  brandLabel?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setDisplay(0);
      const duration = 1100;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(eased * numeric));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(numeric);
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animate();
          } else {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            setDisplay(0);
          }
        }
      },
      { threshold: 0.45 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [numeric]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border-2 border-stone-200/90 bg-white px-4 py-6 text-center shadow-sm dark:border-white/12 dark:bg-stone-950/80"
    >
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 dark:text-white tabular-nums">
        {display}
        {suffix}
      </div>
      <p
        className={cn(
          "mt-2 text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold",
          brandLabel ? "text-accent" : "text-stone-500 dark:text-stone-400"
        )}
      >
        {label}
      </p>
    </div>
  );
}

export function ImpactStrip() {
  return (
    <section className="relative border-y border-stone-200 bg-gradient-to-b from-orange-50/50 via-white to-sky-50/40 py-16 md:py-20 dark:border-white/[0.08] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      <div className="mx-auto w-[90vw] max-w-[90vw]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
          {PROOF_STATS.map((stat) => (
            <CountUpStat
              key={stat.label}
              numeric={stat.numeric}
              suffix={stat.suffix}
              label={stat.label}
              brandLabel={
                stat.label === "Products shipped solo" ||
                stat.label === "Team deliveries" ||
                stat.label === "Reply window"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
