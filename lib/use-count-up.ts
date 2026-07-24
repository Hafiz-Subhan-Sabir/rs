"use client";

import { useEffect, useRef, useState } from "react";

type CountUpOptions = {
  /** Target number to count to */
  to: number;
  /** Decimal places in the display (e.g. 1 for 98.2) */
  decimals?: number;
  durationMs?: number;
  /** IntersectionObserver threshold */
  threshold?: number;
};

/**
 * Counts from 0 → `to` every time the element enters the viewport.
 * Resets to 0 when it leaves so the animation can replay.
 */
export function useCountUp({
  to,
  decimals = 0,
  durationMs = 1100,
  threshold = 0.4,
}: CountUpOptions) {
  const ref = useRef<HTMLElement | null>(null);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setDisplay(0);
      const start = performance.now();
      const factor = Math.pow(10, decimals);

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        const raw = eased * to;
        setDisplay(decimals > 0 ? Math.round(raw * factor) / factor : Math.round(raw));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(to);
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
      { threshold },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [to, decimals, durationMs, threshold]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : String(Math.round(display));

  return { ref, display, formatted } as const;
}

/** Parse strings like "98.2%", "126+", "24h", "3" into count parts. */
export function parseStatValue(value: string): {
  numeric: number;
  decimals: number;
  suffix: string;
} {
  const match = value.trim().match(/^([\d.]+)(.*)$/);
  if (!match) return { numeric: 0, decimals: 0, suffix: value };
  const numStr = match[1];
  const suffix = match[2] ?? "";
  const decimals = numStr.includes(".") ? (numStr.split(".")[1]?.length ?? 0) : 0;
  return { numeric: Number(numStr), decimals, suffix };
}
