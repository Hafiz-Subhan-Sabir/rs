/** Delivery snapshots for About / proof sections — two MVP flagships */

export const DELIVERY_SNAPSHOTS = [
  {
    id: "cloud-enterprise",
    industry: "Enterprise cloud product",
    headline: "Cloud Enterprise Web App (Confidential Client)",
    summary:
      "A cloud-based enterprise system designed as a full web application — currently expanding toward blockchain-ready membership and value rails. Client name shared on request only.",
    problem:
      "Memberships, course video, content, roles, and payments needed one secure cloud product surface — not a pile of disconnected tools.",
    outcome:
      "Enterprise web app with AI automations, strong system architecture, Cloudflare delivery, segmented course video, AI articles, RBAC, secure login, IP-aware GBP/USD charging, and a roadmap into blockchain-enabled flows.",
    details: [
      "Cloud-first architecture with clear service boundaries for scale",
      "AI automations across member missions and content workflows",
      "Cloudflare edge delivery for speed and reliability",
      "Segmented course video without heavy full-page reloads",
      "Role-based access, secure login, and payment validation",
      "Designed path from today’s cloud product into blockchain modules",
    ],
    metric: "Cloud enterprise webapp",
    tags: ["Cloud", "Enterprise", "AI", "Architecture", "Blockchain Roadmap", "Payments"],
  },
  {
    id: "quiz-exam",
    industry: "Online exams",
    headline: "AI Proctoring Online Quiz Exam App",
    summary:
      "A production-minded online quiz and exam application with AI-assisted proctoring — teacher and student flows in one clear product.",
    problem:
      "Remote quizzes needed trustworthy anti-cheat and calm exam UX without a heavy, confusing stack.",
    outcome:
      "Online quiz exam app with teacher/student panels, quiz builder, webcam face checks, tab and fullscreen warnings, results, and cheating logs with screenshots.",
    details: [
      "Teachers create timed MCQ exams and manage student cohorts",
      "Students get one-question flow with auto-submit and clear timers",
      "Webcam face presence checks with warning + screenshot capture",
      "Tab-switch and fullscreen-exit detection with warning counts",
      "Results and cheating logs in one admin-readable surface",
      "Built as a serious MVP product — not a classroom demo label",
    ],
    metric: "Online quiz exam MVP",
    tags: ["AI Proctoring", "Online Exams", "Webcam AI", "RBAC", "Quizzes"],
  },
] as const;

export const PROOF_STATS = [
  { label: "Projects Delivered", value: "126+" },
  { label: "Satisfaction Rate", value: "98.2%" },
  { label: "Reply In 24 Hours", value: "24" },
] as const;

export const FOUNDER_NOTE = {
  name: "Hafiz Subhan",
  role: "Founder, RS Dev",
  credentials: "Full Stack Engineer",
  bio: "I lead a six-person crew at RS Dev. Clients come to us when a website, tool, or daily workflow is getting in the way — and they want it fixed properly by specialists they can actually talk to.",
} as const;
