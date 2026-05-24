/** Tools we build with — shown in the tech marquee (not client logos) */

export type TechStackItem = {
  name: string;
  logo: string;
  category: string;
  accentRgb: string;
  accent: string;
};

export const TECH_STACK: TechStackItem[] = [
  { name: "Next.js", logo: "/skills/next.png", category: "Frontend", accent: "#111827", accentRgb: "17 24 39" },
  { name: "React", logo: "/skills/react.png", category: "Frontend", accent: "#0ea5e9", accentRgb: "14 165 233" },
  { name: "TypeScript", logo: "/skills/ts.png", category: "Language", accent: "#2563eb", accentRgb: "37 99 235" },
  { name: "Tailwind CSS", logo: "/skills/tailwind.png", category: "UI", accent: "#06b6d4", accentRgb: "6 182 212" },
  { name: "Python", logo: "/skills/node.png", category: "Backend", accent: "#eab308", accentRgb: "234 179 8" },
  { name: "FastAPI", logo: "/skills/node.png", category: "API", accent: "#10b981", accentRgb: "16 185 129" },
  { name: "PostgreSQL", logo: "/skills/go.png", category: "Data", accent: "#6366f1", accentRgb: "99 102 241" },
  { name: "Vercel", logo: "/skills/figma.png", category: "Deploy", accent: "#f8fafc", accentRgb: "248 250 252" },
];

/** @deprecated Use TECH_STACK */
export const BRAND_PARTNERS = TECH_STACK;
export type BrandPartner = TechStackItem;
