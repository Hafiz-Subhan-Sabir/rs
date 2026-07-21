import { cn } from "@/lib/utils";

/** Soft surface card — replaces neon glow system */
export function neonCardClass(_indexOrVariant?: number | string, extra?: string) {
  return cn("surface-card", extra);
}

export function neonVariant(_index: number) {
  return "surface-card";
}

export function neonForPath(_pathId: string) {
  return "surface-card";
}

export const NEON_VARIANTS = ["surface-card"] as const;
export type NeonVariant = (typeof NEON_VARIANTS)[number];
