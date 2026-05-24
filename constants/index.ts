export const CONTACT_EMAIL = "hafizsubhan909@gmail.com" as const;

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
  { skill_name: "AI Integrations", image: "react.png", width: 70, height: 70 },
  { skill_name: "Secure Auth Systems", image: "figma.png", width: 50, height: 50 },
] as const;

export const OTHER_SKILL = [{ skill_name: "Deployment & Maintenance", image: "go.png", width: 60, height: 60 }] as const;

export const PROJECTS = [
  {
    title: "Automotive retail storefront",
    description:
      "Catalog, filters, and checkout shaped for enquiry flow. Built to measure which listings pull interest before sales calls.",
    image: "/projects/car.png",
    link: "/contact?project=Automotive%20retail%20storefront",
    featured: true,
    stack: "Next.js · TypeScript · Payments",
    category: "Commerce",
  },
  {
    title: "Operations ERP modules",
    description:
      "User roles, reporting, and daily workflows in one place instead of scattered sheets and inbox threads.",
    image: "/projects/erp.jpg",
    link: "/contact?project=Operations%20ERP%20modules",
    featured: true,
    stack: "Custom software · RBAC · Reporting",
    category: "Operations",
  },
  {
    title: "Secure access product",
    description:
      "Sign in, roles, and session rules designed for a product moving from demo to production handoff.",
    image: "/projects/eye.webp",
    link: "/contact?project=Secure%20access%20product",
    featured: true,
    stack: "Auth · JWT · RBAC",
    category: "Security",
  },
  {
    title: "Vision sorting pipeline",
    description:
      "Camera to classification flow for inventory signals, with a path from training data to live inference.",
    image: "/projects/vegetable.jpg",
    link: "/contact?project=Vision%20sorting%20pipeline",
    featured: true,
    stack: "Python · Vision · API",
    category: "Automation",
  },
  {
    title: "Pet adoption platform",
    description: "Search, applications, and admin moderation for a full adoption journey online.",
    image: "/projects/pet.png",
    link: "/contact?project=Pet%20adoption%20platform",
    featured: false,
    stack: "Next.js · TypeScript",
    category: "Portal",
  },
  {
    title: "Restaurant ordering",
    description: "Menu, cart, and local payment paths for a hospitality brand going digital.",
    image: "/projects/food.webp",
    link: "/contact?project=Restaurant%20ordering",
    featured: false,
    stack: "React · Payments",
    category: "Commerce",
  },
  {
    title: "AI interview practice",
    description: "Structured rounds with feedback for technical and behavioral practice sessions.",
    image: "/projects/ai-interview.png",
    link: "/contact?project=AI%20interview%20practice",
    featured: false,
    stack: "AI integrations · SaaS flow",
    category: "AI product",
  },
  {
    title: "Hospital records module",
    description: "Appointments and patient workflows with backend logic tuned for daily clinic load.",
    image: "/projects/hospital-management.png",
    link: "/contact?project=Hospital%20records%20module",
    featured: false,
    stack: "Backend · Data structures",
    category: "Healthcare",
  },
  {
    title: "Feedback portal",
    description: "Categorized responses and review views for internal quality tracking.",
    image: "/projects/feedback-portal.png",
    link: "/contact?project=Feedback%20portal",
    featured: false,
    stack: "Portal design · Reporting",
    category: "Internal tools",
  },
  {
    title: "Expense and data pipeline",
    description: "Structured capture and cleaning for analytics ready datasets.",
    image: "/projects/expense-tracker.png",
    link: "/contact?project=Expense%20pipeline",
    featured: false,
    stack: "Python · Automation",
    category: "Data",
  },
  {
    title: "Script to video draft",
    description: "Scene based video drafts from text input with timing and structure for review.",
    image: "/projects/script-to-video.png",
    link: "/contact?project=Script%20to%20video",
    featured: false,
    stack: "AI tools · API",
    category: "AI product",
  },
  {
    title: "Streaming layout study",
    description: "Content discovery UI patterns for browse, preview, and watchlist flows.",
    image: "/projects/movie.png",
    link: "/contact?project=Streaming%20layout%20study",
    featured: false,
    stack: "React · Layout systems",
    category: "UI study",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Explore",
    data: [
      { name: "About", link: "/about" },
      { name: "Services", link: "/services" },
      { name: "Work", link: "/work" },
      { name: "Journey", link: "/journey" },
    ],
  },
  {
    title: "Contact",
    data: [
      { name: "Contact", link: "/contact" },
      { name: "Email", link: `mailto:${CONTACT_EMAIL}` },
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
    title: "Kill the repeat clicks",
    description: "Background routines and assistants that handle busywork while people stay on decisions.",
  },
] as const;

export const BUSINESS_SERVICES = [
  {
    icon: "🌐",
    title: "Sites and apps",
    description: "Storefronts, portals, and product screens that load fast and explain the offer in seconds.",
  },
  {
    icon: "⚙️",
    title: "Bespoke software",
    description: "Tools shaped around your process when off the shelf products fight your workflow.",
  },
  {
    icon: "📊",
    title: "Sales records and links",
    description: "Pipeline boards, sign in, payments, and live ties between the apps you already run.",
  },
  {
    icon: "📈",
    title: "Search placement",
    description: "Technical fixes and page structure so Google understands and rewards what you publish.",
  },
  {
    icon: "🤖",
    title: "Smart assistants",
    description: "Bots and background routines scoped to real tasks, with logs and human handoff when needed.",
  },
  {
    icon: "📣",
    title: "Campaigns and advice",
    description: "Channel picks, creative direction, and honest sequencing for the next ninety days.",
  },
] as const;

export const NAV_LINKS = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Work", link: "/work" },
  { title: "Journey", link: "/journey" },
  { title: "Contact", link: "/contact" },
] as const;

export const EDUCATION_HIGHLIGHTS = {
  education:
    "RS Dev is led by Hafiz Subhan (BS Information Engineering Technology). Small crew, senior execution, direct access to the people building your product.",
  technicalSummary:
    "Storefronts, bespoke apps, live data links, search fixes, assistant bots, and campaign releases under one written plan.",
  soloProjects: "10+ solo products delivered end to end.",
  teamProjects: "20+ collaborations with product and engineering teams.",
} as const;

