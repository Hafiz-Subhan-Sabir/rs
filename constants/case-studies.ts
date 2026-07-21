/** Anonymized delivery snapshots — honest framing for portfolio and client-style work */

export const DELIVERY_SNAPSHOTS = [
  {
    id: "commerce",
    industry: "Automotive retail",
    headline: "Storefront built to convert browsers into enquiries",
    problem: "Listings looked fine but checkout felt slow and tracking was missing.",
    outcome: "Structured catalog, faster pages, and event tracking so marketing could see what sold interest.",
    metric: "Launch ready in phased sprints",
    tags: ["Next.js", "Payments", "Catalog UX"],
  },
  {
    id: "vision",
    industry: "Food supply",
    headline: "Vision pipeline from camera feed to sorted inventory signals",
    problem: "Manual sorting ate hours and errors slipped into orders.",
    outcome: "Trained detection flow with a path to run inference on live feeds.",
    metric: "Repeat sorting work reduced in testing",
    tags: ["Python", "Computer vision", "API"],
  },
  {
    id: "security",
    industry: "Access control product",
    headline: "Sign in and role rules that match real permission needs",
    problem: "Demo auth was not safe enough for a product moving toward production.",
    outcome: "Token based access, role boundaries, and flows designed for audit friendly handoff.",
    metric: "Production minded auth patterns",
    tags: ["Auth", "RBAC", "API design"],
  },
  {
    id: "operations",
    industry: "Internal operations",
    headline: "ERP style modules that replace spreadsheet chaos",
    problem: "Teams copied data between sheets and lost a single view of work.",
    outcome: "Unified modules for users, reporting, and workflows with clear roles.",
    metric: "One source of truth for daily ops",
    tags: ["Custom software", "Dashboards", "Workflows"],
  },
] as const;

export const PROOF_STATS = [
  { label: "Products shipped solo", value: "10+" },
  { label: "Team deliveries", value: "20+" },
  { label: "Reply window", value: "24h" },
] as const;

export const FOUNDER_NOTE = {
  name: "Hafiz Subhan",
  role: "Founder, RS Dev",
  credentials: "Full Stack Engineer",
  bio: "I run RS Dev as a small, hands-on studio. Clients come to me when a website, tool, or daily workflow is getting in the way — and they want it fixed properly by someone they can actually talk to.",
} as const;
