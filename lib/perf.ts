"use client";

import { useEffect, useState } from "react";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Phones / small tablets — prefer native scroll & lighter effects */
export function isCompactViewport(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(max-width: 1023px)").matches;
}

export function prefersSaveData(): boolean {
  if (typeof navigator === "undefined") return false;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return Boolean(conn?.saveData);
}

/** True when continuous decorative motion is OK (desktop, no reduce, no save-data) */
export function canUseHeavyMotion(): boolean {
  return !prefersReducedMotion() && !isCompactViewport() && !prefersSaveData();
}

export function useCanUseHeavyMotion() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    setOk(canUseHeavyMotion());
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqCompact = window.matchMedia("(max-width: 1023px)");
    const sync = () => setOk(canUseHeavyMotion());
    mqReduce.addEventListener("change", sync);
    mqCompact.addEventListener("change", sync);
    return () => {
      mqReduce.removeEventListener("change", sync);
      mqCompact.removeEventListener("change", sync);
    };
  }, []);
  return ok;
}
