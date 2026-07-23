/** Anonymized delivery snapshots — honest framing for portfolio and client-style work */

export const DELIVERY_SNAPSHOTS = [
  {
    id: "syndicate",
    industry: "Membership platform",
    headline: "The Syndicate — AI missions, membership, and affiliate scale",
    problem: "Programs, missions, and affiliates lived in disconnected tools with no shared progress loop.",
    outcome: "Unified portal with AI mission agent, streaks, leaderboard, Stripe onboarding, and affiliate tracking.",
    metric: "Enterprise-ready product surface",
    tags: ["Next.js", "Django", "OpenAI", "Stripe"],
  },
  {
    id: "transcript",
    industry: "Media operations",
    headline: "Video Transcript Studio for accurate, registered transcripts",
    problem: "Manual transcription and scattered Google Docs made ops slow and hard to audit.",
    outcome: "Whisper pipeline with translation, Docs export, and a password-protected Sheet registry.",
    metric: "Ops-grade AI automation",
    tags: ["FastAPI", "Whisper", "Google APIs"],
  },
  {
    id: "filtering",
    industry: "Multi-app ops",
    headline: "Filtering from Any App — triage across tools",
    problem: "Teams drowned in records spread across apps with no shared filter rules.",
    outcome: "Cross-app filtering layer that surfaces only actionable items for the right people.",
    metric: "Less noise, faster action",
    tags: ["Integrations", "Rules", "Automation"],
  },
  {
    id: "enterprise",
    industry: "Enterprise systems",
    headline: "Enterprise full system — currently in build",
    problem: "Growing companies need portals, SEO AI, CRM links, and admin roles under one architecture.",
    outcome: "System-designed blueprint and active development of a multi-role enterprise operating layer.",
    metric: "Architecture-first delivery",
    tags: ["System design", "SEO AI", "Full stack"],
  },
] as const;

export const PROOF_STATS = [
  { label: "Products shipped solo", value: "10+", numeric: 10, suffix: "+" },
  { label: "Team deliveries", value: "26+", numeric: 26, suffix: "+" },
  { label: "Reply window", value: "24h", numeric: 24, suffix: "h" },
] as const;

export const FOUNDER_NOTE = {
  name: "Hafiz Subhan",
  role: "Founder, RS Dev",
  credentials: "Full Stack Engineer",
  bio: "I lead a six-person crew at RS Dev. Clients come to us when a website, tool, or daily workflow is getting in the way — and they want it fixed properly by specialists they can actually talk to.",
} as const;
