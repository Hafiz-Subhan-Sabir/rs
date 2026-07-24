"use client";

import { cn } from "@/lib/utils";
import { parseStatValue, useCountUp } from "@/lib/use-count-up";

type CountUpTextProps = {
  value: string;
  className?: string;
  durationMs?: number;
};

/** Renders a stat string (e.g. "98.2%", "126+") that counts up whenever visible. */
export function CountUpText({ value, className, durationMs = 1100 }: CountUpTextProps) {
  const { numeric, decimals, suffix } = parseStatValue(value);
  const { ref, formatted } = useCountUp({
    to: numeric,
    decimals,
    durationMs,
  });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {formatted}
      {suffix}
    </span>
  );
}
