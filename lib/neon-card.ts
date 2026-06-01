import { cn } from "@/lib/utils";

/** Six neon rim colors — one solid hue per card (border + shadow) */
export const NEON_VARIANTS = [
  "neon-green",
  "neon-blue",
  "neon-pink",
  "neon-orange",
  "neon-purple",
  "neon-brown",
] as const;

export type NeonVariant = (typeof NEON_VARIANTS)[number];

const PATH_NEON: Record<string, NeonVariant> = {
  grow: "neon-green",
  operations: "neon-blue",
  brand: "neon-purple",
  automate: "neon-orange",
};

export function neonVariant(index: number): NeonVariant {
  return NEON_VARIANTS[((index % NEON_VARIANTS.length) + NEON_VARIANTS.length) % NEON_VARIANTS.length];
}

export function neonForPath(pathId: string): NeonVariant {
  return PATH_NEON[pathId] ?? "neon-green";
}

/** `neon-card` + one color variant + optional extra classes */
export function neonCardClass(indexOrVariant?: number | NeonVariant | string, extra?: string) {
  const variant =
    typeof indexOrVariant === "number"
      ? neonVariant(indexOrVariant)
      : typeof indexOrVariant === "string" && indexOrVariant.startsWith("neon-")
        ? (indexOrVariant as NeonVariant)
        : indexOrVariant
          ? neonForPath(indexOrVariant)
          : "neon-green";

  return cn("neon-card", variant, extra);
}
