/** Partner / client brands — add logos to public/brands/ (PNG/SVG, ~200×80, transparent) */

export type BrandPartner = {
  name: string;
  logo: string;
  sector: string;
  /** RGB channels for CSS vars, e.g. "220 38 38" */
  accentRgb: string;
  accent: string;
};

export const BRAND_PARTNERS: BrandPartner[] = [
  { name: "Metro Motors", logo: "/brands/metro-motors.png", sector: "E-commerce", accent: "#dc2626", accentRgb: "220 38 38" },
  { name: "FreshCart", logo: "/brands/freshcart.png", sector: "Retail tech", accent: "#16a34a", accentRgb: "22 163 74" },
  { name: "CareLine Health", logo: "/brands/careline.png", sector: "Healthcare", accent: "#0284c7", accentRgb: "2 132 199" },
  { name: "PlateHouse", logo: "/brands/platehouse.png", sector: "Hospitality", accent: "#ea580c", accentRgb: "234 88 12" },
  { name: "LearnSphere", logo: "/brands/learnsphere.png", sector: "EdTech", accent: "#7c3aed", accentRgb: "124 58 237" },
  { name: "OpsFlow ERP", logo: "/brands/opsflow.png", sector: "Enterprise", accent: "#4f46e5", accentRgb: "79 70 229" },
  { name: "AdoptPaws", logo: "/brands/adoptpaws.png", sector: "Non-profit", accent: "#0d9488", accentRgb: "13 148 136" },
  { name: "VisionAI Labs", logo: "/brands/visionai.png", sector: "AI / ML", accent: "#06b6d4", accentRgb: "6 182 212" },
  { name: "RankLocal", logo: "/brands/ranklocal.png", sector: "Local SEO", accent: "#d97706", accentRgb: "217 119 6" },
  { name: "StreamVault", logo: "/brands/streamvault.png", sector: "Media", accent: "#db2777", accentRgb: "219 39 119" },
];
