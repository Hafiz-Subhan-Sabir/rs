export const CONTACT_EMAIL = "intelligence@the-rsdev.com" as const;
export const WHATSAPP_NUMBER = "03221723864" as const;
/** E.164 for wa.me (Pakistan +92) */
export const WHATSAPP_URL = "https://wa.me/923221723864" as const;
export const FOUNDER_FULL_NAME = "Hafiz Subhan Sabir" as const;

export const SITE_TAGLINE =
  "Six specialists. One clear delivery line." as const;

export const SITE_SUBTAGLINE =
  "Websites, software, SEO AI, DevOps & automation, and cloud solutions — scoped clearly, designed at system level, and supported by the same people who ship the work." as const;

export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "TailwindCSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "GSAP", image: "framer.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Python", image: "node.png", width: 80, height: 80 },
  { skill_name: "FastAPI", image: "node.png", width: 80, height: 80 },
  { skill_name: "Git", image: "react.png", width: 80, height: 80 },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "TailwindCSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Python", image: "node.png", width: 80, height: 80 },
  { skill_name: "Django", image: "node.png", width: 80, height: 80 },
  { skill_name: "Flask", image: "node.png", width: 80, height: 80 },
  { skill_name: "FastAPI", image: "node.png", width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "API Integrations", image: "react.png", width: 70, height: 70 },
  { skill_name: "Secure Auth Systems", image: "figma.png", width: 50, height: 50 },
] as const;

export const OTHER_SKILL = [{ skill_name: "Deployment & Maintenance", image: "go.png", width: 60, height: 60 }] as const;

export type ProjectStatus = "live" | "in-development";

export const PROJECTS: ReadonlyArray<{
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  featured: boolean;
  stack: string;
  category: string;
  status: ProjectStatus;
  highlights: readonly string[];
}> = [
  {
    title: "Cloud Enterprise Web App (Confidential Client)",
    description:
      "Cloud-based enterprise system designed as a full web application: AI automations, strong architecture, Cloudflare delivery, segmented course video, AI articles, RBAC, secure login, and IP-aware GBP/USD charging — with a clear roadmap into blockchain-ready membership and value rails. Client name shared on request only.",
    image: "/projects/ai-interview.png",
    liveUrl: "",
    featured: true,
    stack: "Cloud · Enterprise · AI · Cloudflare · Blockchain roadmap",
    category: "Cloud Enterprise",
    status: "live",
    highlights: [
      "Cloud-first enterprise architecture for scale",
      "AI automations across member and content workflows",
      "Cloudflare edge delivery for performance",
      "Segmented course video without heavy reloads",
      "RBAC, secure login, and payment validation",
      "Designed path into blockchain-enabled modules",
    ],
  },
  {
    title: "AI Proctoring Online Quiz Exam App",
    description:
      "Online quiz and exam application with AI-assisted proctoring: teacher and student panels, quiz builder, webcam face checks, tab and fullscreen warnings, results and cheating logs with screenshots — built as a serious MVP product surface.",
    image: "/projects/script-to-video.png",
    liveUrl: "",
    featured: true,
    stack: "AI Proctoring · Online Exams · Webcam AI · RBAC",
    category: "Online Exams",
    status: "live",
    highlights: [
      "Teachers create timed MCQ exams and manage cohorts",
      "Students get one-question flow with auto-submit",
      "Webcam face presence checks with warning + screenshot",
      "Tab-switch and fullscreen-exit detection",
      "Results and cheating logs in one admin surface",
    ],
  },
] as const;

export const FOUNDER = {
  name: "Hafiz Subhan",
  role: "Founder, RS Dev",
  credentials: "Full Stack Engineer",
  photo: "/founder-hafiz-subhan.png",
  linkedin: "https://www.linkedin.com/in/hafiz-subhan-soft/",
  bio: "I lead a six-person crew at RS Dev. Clients come to us when a website, tool, or daily workflow is getting in the way — and they want it fixed properly by specialists they can actually talk to.",
} as const;

/** Six-person RS Dev crew — founder + specialists */
export const CREW = [
  {
    name: "Hafiz Subhan",
    role: "Full Stack Engineer",
    focus: "Founder · End-to-end product delivery",
    gender: "male" as const,
    initials: "HS",
    accent: "copper" as const,
    photo: "/founder-hafiz-subhan.png",
    linkedin: "https://www.linkedin.com/in/hafiz-subhan-soft/",
    bio: "Leads architecture decisions and ships full-stack products from scope to production.",
    specialty: "Full Stack",
    lane: "Product delivery",
    strengths: "Ship · Scale · Support",
    color: "#C2410C",
  },
  {
    name: "Ayesha Rahman",
    role: "System Architect Designing Expert",
    focus: "Enterprise systems · Scalable blueprints",
    gender: "female" as const,
    initials: "AR",
    accent: "ember" as const,
    photo: "/crew/ayesha-rahman.png",
    linkedin: null,
    bio: "Designs enterprise-level system maps, service boundaries, and data flows before a single screen ships.",
    specialty: "Architecture",
    lane: "Enterprise design",
    strengths: "Map · Bound · Scale",
    color: "#1D4ED8",
  },
  {
    name: "Omar Farooq",
    role: "DevOps & Automation Expert",
    focus: "Pipelines · Cloud ops · Workflow automation",
    gender: "male" as const,
    initials: "OF",
    accent: "copper" as const,
    photo: "/crew/omar-farooq-v2.png",
    linkedin: null,
    bio: "Owns DevOps and automation — CI/CD, environments, and workflow systems that keep delivery reliable and teams unblocked.",
    specialty: "DevOps & Automation",
    lane: "Ops & pipelines",
    strengths: "Ship · Automate · Stabilize",
    color: "#EA580C",
  },
  {
    name: "Maria Hassan",
    role: "App Developer Expert",
    focus: "Mobile & web apps · Product UX",
    gender: "female" as const,
    initials: "MH",
    accent: "ember" as const,
    photo: "/crew/maria-hassan.png",
    linkedin: null,
    bio: "Ships polished app experiences — dashboards, portals, and member flows that feel fast and clear.",
    specialty: "App Development",
    lane: "Product UX",
    strengths: "Build · Polish · Launch",
    color: "#BE185D",
  },
  {
    name: "Bilal Siddiqui",
    role: "SEO AI Optimization Expert",
    focus: "Search · Structure · AI content systems",
    gender: "male" as const,
    initials: "BS",
    accent: "copper" as const,
    photo: "/crew/bilal-siddiqui-v2.png",
    linkedin: null,
    bio: "Pairs technical SEO with AI-assisted content systems so pages earn the clicks that matter.",
    specialty: "SEO AI",
    lane: "Search & growth",
    strengths: "Rank · Structure · Compound",
    color: "#15803D",
  },
  {
    name: "Daniyal Sheikh",
    role: "Cloud Solution Expert",
    focus: "Cloud architecture · Hosting · Scale paths",
    gender: "male" as const,
    initials: "DS",
    accent: "ember" as const,
    photo: "/crew/daniyal-sheikh.png",
    linkedin: null,
    bio: "Designs cloud solutions — hosting, environments, and scale paths so products stay fast, secure, and ready to grow.",
    specialty: "Cloud Solutions",
    lane: "Cloud & scale",
    strengths: "Host · Secure · Scale",
    color: "#A16207",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Explore",
    data: [
      { name: "About", link: "/about" },
      { name: "Services", link: "/services" },
      { name: "Our story", link: "/journey" },
    ],
  },
  {
    title: "Contact",
    data: [
      { name: "Contact", link: "/contact" },
      { name: "Email", link: `mailto:${CONTACT_EMAIL}` },
      { name: "WhatsApp", link: WHATSAPP_URL },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/hafiz-subhan-soft/" },
    ],
  },
] as const;

export const HERO_SOLUTIONS = [
  {
    id: "build",
    title: "Ship the product",
    description: "Sites, apps, and sales boards coded for speed, clarity, and room to measure visitor action.",
  },
  {
    id: "rank",
    title: "Earn the click",
    description: "Structure, speed, and phrase work so your pages climb where buyers actually search.",
  },
  {
    id: "maintain",
    title: "Guard what went live",
    description: "Hosting, patches, and tune ups so yesterday’s launch still performs next quarter.",
  },
  {
    id: "leads",
    title: "Fill the calendar",
    description: "Landing paths, tags, and ad sets tied to enquiries sales wants to take.",
  },
  {
    id: "automate",
    title: "Cut the repeat clicks",
    description: "Background routines that handle busywork so people stay on decisions.",
  },
] as const;

export const BUSINESS_SERVICES = [
  {
    title: "Sites and apps",
    description: "Storefronts, portals, and product screens that load fast and explain the offer in seconds.",
  },
  {
    title: "Enterprise system design",
    description: "Architecture blueprints for multi-role portals, data flows, and long-term full systems — not just screens.",
  },
  {
    title: "AI automation",
    description: "Agents, transcript pipelines, cross-app filtering, and workflows that cut repeat clicks.",
  },
  {
    title: "SEO AI optimization",
    description: "Technical structure plus AI-assisted content systems so search engines reward what you publish.",
  },
  {
    title: "Sales records and links",
    description: "Pipeline boards, sign in, payments, and live ties between the apps you already run.",
  },
  {
    title: "Website chat helpers",
    description: "Custom chat on your site — including RS Bot-style assistants — for FAQs, leads, and routing.",
  },
  {
    title: "Business development support",
    description: "Clear scopes, partnership paths, and ninety-day plans tied to revenue outcomes.",
  },
] as const;

export const NAV_LINKS = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Our story", link: "/journey" },
  { title: "Contact", link: "/contact" },
] as const;

export const EDUCATION_HIGHLIGHTS = {
  education:
    "RS Dev is a six-person crew led by Hafiz Subhan (Founder | Full Stack Engineer). System architecture, DevOps & automation, apps, SEO AI, and cloud solutions — senior execution with direct access.",
  technicalSummary:
    "Enterprise system design, SEO AI optimization, AI automation tools, custom apps, and CRM links — built and supported by the same specialists you talk to.",
  soloProjects: "10+ flagship products delivered end to end.",
  teamProjects: "26+ enterprise and team collaborations shipped.",
} as const;

