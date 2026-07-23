export const CONTACT_EMAIL = "rs.dev.soft@gmail.com" as const;

export const SITE_TAGLINE =
  "Six specialists. One clear delivery line." as const;

export const SITE_SUBTAGLINE =
  "Websites, software, SEO AI, and automation — scoped clearly, designed at system level, and supported by the same people who ship the work." as const;

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

export const PROJECTS = [
  {
    title: "Video Transcript Studio",
    description:
      "Enterprise-ready transcription pipeline: accurate video transcripts, optional translation, Google Docs export, and a protected Sheet registry for ops teams.",
    image: "/projects/script-to-video.png",
    liveUrl: "",
    featured: true,
    stack: "Next.js · FastAPI · Whisper · Google APIs",
    category: "AI Automation",
    status: "live" as const,
  },
  {
    title: "Filtering from Any App",
    description:
      "Cross-app filtering and triage layer — pull records from scattered tools, apply smart rules, and surface only what teams need to act on.",
    image: "/projects/feedback-portal.png",
    liveUrl: "",
    featured: true,
    stack: "Python · Integrations · Rule engine",
    category: "AI Automation",
    status: "live" as const,
  },
  {
    title: "The Syndicate",
    description:
      "Full web app with membership hub, AI mission agent, streaks, leaderboard, affiliate tracking, and Stripe onboarding — system-designed for scale.",
    image: "/projects/ai-interview.png",
    liveUrl: "",
    featured: true,
    stack: "Next.js · Django · OpenAI · Stripe",
    category: "Enterprise Product",
    status: "live" as const,
  },
  {
    title: "Enterprise Full System",
    description:
      "Currently in build: an enterprise-level operating system covering portals, SEO AI optimization, CRM links, automation, and multi-role admin — architected for long-term growth.",
    image: "/projects/car.png",
    liveUrl: "",
    featured: true,
    stack: "System architecture · SEO AI · Full stack",
    category: "Enterprise System",
    status: "in-development" as const,
  },
  {
    title: "Interview practice tool",
    description:
      "A live practice app for technical and behavioral rounds, with structured feedback after each session.",
    image: "/projects/ai-interview.png",
    liveUrl: "https://ai-interview-simulator.vercel.app",
    featured: false,
    stack: "React · FastAPI · Live app",
    category: "Product",
    status: "live" as const,
  },
  {
    title: "Website chat for businesses",
    description:
      "Custom chat widget for company sites — FAQ answers, lead capture, and routing without burying the inbox.",
    image: "/projects/feedback-portal.png",
    liveUrl: "https://ai-chatbot-website.vercel.app",
    featured: false,
    stack: "Next.js · Chat widget",
    category: "Website chat",
    status: "live" as const,
  },
  {
    title: "Restaurant ordering",
    description:
      "Menu, cart, and ordering flow for a hospitality brand that needed a clean digital path for guests.",
    image: "/projects/food.webp",
    liveUrl: "https://restaurant-ordering.vercel.app",
    featured: false,
    stack: "Next.js · Ordering UX",
    category: "Commerce",
    status: "live" as const,
  },
  {
    title: "Automotive storefront",
    description:
      "Vehicle listings with filters and enquiry-minded detail pages so sales can follow up on real interest.",
    image: "/projects/car.png",
    liveUrl: "https://car-platform.vercel.app",
    featured: false,
    stack: "Next.js · Catalog UX · SEO structure",
    category: "Commerce + SEO",
    status: "live" as const,
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
    photo: null,
    linkedin: null,
    bio: "Designs enterprise-level system maps, service boundaries, and data flows before a single screen ships.",
    specialty: "Architecture",
    lane: "Enterprise design",
    strengths: "Map · Bound · Scale",
    color: "#1D4ED8",
  },
  {
    name: "Omar Farooq",
    role: "AI Automation Expert",
    focus: "Workflows · Agents · Integrations",
    gender: "male" as const,
    initials: "OF",
    accent: "copper" as const,
    photo: null,
    linkedin: null,
    bio: "Builds AI-driven automation that cuts repeat work across apps, transcripts, and ops pipelines.",
    specialty: "AI Automation",
    lane: "Workflows & agents",
    strengths: "Wire · Automate · Free",
    color: "#EA580C",
  },
  {
    name: "Maria Hassan",
    role: "App Developer Expert",
    focus: "Mobile & web apps · Product UX",
    gender: "female" as const,
    initials: "MH",
    accent: "ember" as const,
    photo: null,
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
    photo: null,
    linkedin: null,
    bio: "Pairs technical SEO with AI-assisted content systems so pages earn the clicks that matter.",
    specialty: "SEO AI",
    lane: "Search & growth",
    strengths: "Rank · Structure · Compound",
    color: "#15803D",
  },
  {
    name: "Daniyal Sheikh",
    role: "Business Development Expert",
    focus: "Partnerships · Scope · Growth paths",
    gender: "male" as const,
    initials: "DS",
    accent: "ember" as const,
    photo: null,
    linkedin: null,
    bio: "Turns business goals into clear scopes, partnerships, and delivery plans clients can trust.",
    specialty: "Business Development",
    lane: "Partnerships & scope",
    strengths: "Scope · Partner · Win",
    color: "#A16207",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Explore",
    data: [
      { name: "About", link: "/about" },
      { name: "Services", link: "/services" },
      { name: "Work", link: "/work" },
      { name: "Our story", link: "/journey" },
    ],
  },
  {
    title: "Contact",
    data: [
      { name: "Contact", link: "/contact" },
      { name: "Email", link: `mailto:${CONTACT_EMAIL}` },
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
  { title: "Work", link: "/work" },
  { title: "Our story", link: "/journey" },
  { title: "Contact", link: "/contact" },
] as const;

export const EDUCATION_HIGHLIGHTS = {
  education:
    "RS Dev is a six-person crew led by Hafiz Subhan (Founder | Full Stack Engineer). System architecture, AI automation, apps, SEO AI, and business development — senior execution with direct access.",
  technicalSummary:
    "Enterprise system design, SEO AI optimization, AI automation tools, custom apps, and CRM links — built and supported by the same specialists you talk to.",
  soloProjects: "10+ flagship products delivered end to end.",
  teamProjects: "26+ enterprise and team collaborations shipped.",
} as const;

