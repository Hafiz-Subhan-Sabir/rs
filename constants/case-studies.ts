/** Delivery snapshots for About / proof sections */

export const DELIVERY_SNAPSHOTS = [
  {
    id: "syndicate",
    industry: "Membership platform",
    headline: "The Syndicate — AI, architecture, Cloudflare & payments",
    problem:
      "Memberships, course video, content, roles, and payments needed one secure product surface — not a pile of disconnected tools.",
    outcome:
      "Web app with AI automations, strong architecture, Cloudflare delivery, segmented course video, AI articles, RBAC, secure login, and IP-aware GBP/USD charging.",
    metric: "Enterprise membership product",
    tags: ["AI", "Cloudflare", "RBAC", "Payments"],
  },
  {
    id: "affiliate",
    industry: "Growth operations",
    headline: "Affiliate Dashboard — custom ops on strong architecture",
    problem: "Affiliate tracking and commissions were hard to run without a dedicated, designed control system.",
    outcome:
      "Custom affiliate dashboard with complex architected services for partners, performance, and secure ops access.",
    metric: "Affiliate control surface",
    tags: ["Architecture", "Dashboard", "Full stack"],
  },
  {
    id: "inteliquiz",
    industry: "EdTech / FYP",
    headline: "InteliQuiz — AI proctoring for online MCQ exams",
    problem: "Remote quizzes needed basic anti-cheat without a heavy hosted stack — local demo for FYP.",
    outcome:
      "Teacher/student panels, quiz builder, webcam face checks, tab & fullscreen warnings, results and cheating logs with screenshots.",
    metric: "Local AI proctoring demo",
    tags: ["Webcam AI", "RBAC", "Quizzes"],
  },
] as const;

export const PROOF_STATS = [
  { label: "Flagship products", value: "3", numeric: 3, suffix: "" },
  { label: "Team deliveries", value: "26+", numeric: 26, suffix: "+" },
  { label: "Reply window", value: "24h", numeric: 24, suffix: "h" },
] as const;

export const FOUNDER_NOTE = {
  name: "Hafiz Subhan",
  role: "Founder, RS Dev",
  credentials: "Full Stack Engineer",
  bio: "I lead a six-person crew at RS Dev. Clients come to us when a website, tool, or daily workflow is getting in the way — and they want it fixed properly by specialists they can actually talk to.",
} as const;
