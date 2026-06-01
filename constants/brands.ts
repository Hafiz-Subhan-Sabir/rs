/** Client companies — logo marks + names in the partner marquee */

export type ClientPartner = {
  name: string;
  logo: string;
  /** Short industry label — matches RS Dev delivery work */
  sector: string;
  accent: string;
  accentRgb: string;
};

export const CLIENT_PARTNERS: ClientPartner[] = [
  {
    name: "Metro Motors",
    logo: "/brands/metro-motors.svg",
    sector: "Automotive retail",
    accent: "#475569",
    accentRgb: "71 85 105",
  },
  {
    name: "PlateHouse",
    logo: "/brands/platehouse.svg",
    sector: "Food supply",
    accent: "#b45309",
    accentRgb: "180 83 9",
  },
  {
    name: "OpsFlow",
    logo: "/brands/opsflow.svg",
    sector: "Operations software",
    accent: "#2563eb",
    accentRgb: "37 99 235",
  },
  {
    name: "VisionAI Labs",
    logo: "/brands/visionai.svg",
    sector: "Computer vision",
    accent: "#4f46e5",
    accentRgb: "79 70 229",
  },
  {
    name: "CareLine Health",
    logo: "/brands/careline.svg",
    sector: "Healthcare",
    accent: "#0891b2",
    accentRgb: "8 145 178",
  },
  {
    name: "RankLocal",
    logo: "/brands/ranklocal.svg",
    sector: "Local search",
    accent: "#ca8a04",
    accentRgb: "202 138 4",
  },
  {
    name: "StreamVault",
    logo: "/brands/streamvault.svg",
    sector: "Media platform",
    accent: "#dc2626",
    accentRgb: "220 38 38",
  },
  {
    name: "AdoptPaws",
    logo: "/brands/adoptpaws.svg",
    sector: "Pet adoption",
    accent: "#059669",
    accentRgb: "5 150 105",
  },
  {
    name: "LearnSphere",
    logo: "/brands/learnsphere.svg",
    sector: "EdTech",
    accent: "#7c3aed",
    accentRgb: "124 58 237",
  },
  {
    name: "FreshCart",
    logo: "/brands/freshcart.svg",
    sector: "Grocery commerce",
    accent: "#16a34a",
    accentRgb: "22 163 74",
  },
];

/** @deprecated Use CLIENT_PARTNERS */
export const TECH_STACK = CLIENT_PARTNERS;
export type TechStackItem = ClientPartner;
export const BRAND_PARTNERS = CLIENT_PARTNERS;
export type BrandPartner = ClientPartner;
