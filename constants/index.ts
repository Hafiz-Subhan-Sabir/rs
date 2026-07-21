export const CONTACT_EMAIL = "rs.dev.soft@gmail.com" as const;

export const SITE_TAGLINE =
  "Your digital problems, fixed by people you can reach." as const;

export const SITE_SUBTAGLINE =
  "Websites, software, search, and day-to-day tools — scoped clearly, built carefully, and supported by the same hands that ship the work." as const;

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
    title: "Interview practice tool",
    description:
      "A live practice app for technical and behavioral rounds, with structured feedback after each session.",
    image: "/projects/ai-interview.png",
    liveUrl: "https://ai-interview-simulator.vercel.app",
    featured: true,
    stack: "React · FastAPI · Live app",
    category: "Product",
  },
  {
    title: "Script to video draft",
    description:
      "Turn a written script into a narrated video draft you can review before a full edit.",
    image: "/projects/script-to-video.png",
    liveUrl: "https://script-to-video.vercel.app",
    featured: true,
    stack: "FastAPI · Media pipeline",
    category: "Product",
  },
  {
    title: "Website chat for businesses",
    description:
      "A custom chat widget for company websites — answers common questions and captures leads without burying the inbox.",
    image: "/projects/feedback-portal.png",
    liveUrl: "https://ai-chatbot-website.vercel.app",
    featured: true,
    stack: "Next.js · Chat widget",
    category: "Website chat",
  },
  {
    title: "Restaurant ordering",
    description:
      "Menu, cart, and ordering flow for a hospitality brand that needed a clean digital path for guests.",
    image: "/projects/food.webp",
    liveUrl: "https://restaurant-ordering.vercel.app",
    featured: true,
    stack: "Next.js · Ordering UX",
    category: "Commerce",
  },
  {
    title: "Automotive storefront",
    description:
      "Vehicle listings with filters and enquiry-minded detail pages so sales can follow up on real interest.",
    image: "/projects/car.png",
    liveUrl: "https://car-platform.vercel.app",
    featured: false,
    stack: "Next.js · Catalog UX",
    category: "Commerce",
  },
  {
    title: "Feedback portal",
    description:
      "Collect and review structured feedback in one place instead of scattered forms and chats.",
    image: "/projects/feedback-portal.png",
    liveUrl: "https://feedback-portal-rho.vercel.app",
    featured: false,
    stack: "Next.js · Reporting",
    category: "Internal tools",
  },
  {
    title: "Expense tracker",
    description:
      "Simple expense capture and overview for day-to-day spending visibility.",
    image: "/projects/expense-tracker.png",
    liveUrl: "https://react-expense-tracker.vercel.app",
    featured: false,
    stack: "React · Dashboard",
    category: "Tools",
  },
  {
    title: "Bubble Crusher game",
    description:
      "A light browser game built to practice interactive UI and timing logic.",
    image: "/projects/bubble-game.jpg",
    liveUrl: "https://bubble-game-eta.vercel.app",
    featured: false,
    stack: "HTML · CSS · JS",
    category: "Games",
  },
] as const;

export const FOUNDER = {
  name: "Hafiz Subhan",
  role: "Founder, RS Dev",
  credentials: "BS Information Engineering Technology",
  photo: "/founder-hafiz-subhan.png",
  linkedin: "https://www.linkedin.com/in/hafiz-subhan-soft/",
  bio: "I run RS Dev as a small, hands-on studio. Clients come to me when a website, tool, or daily workflow is getting in the way — and they want it fixed properly by someone they can actually talk to.",
} as const;

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
    title: "Bespoke software",
    description: "Tools shaped around your process when off-the-shelf products fight your workflow.",
  },
  {
    title: "Sales records and links",
    description: "Pipeline boards, sign in, payments, and live ties between the apps you already run.",
  },
  {
    title: "Search placement",
    description: "Technical fixes and page structure so search engines understand and reward what you publish.",
  },
  {
    title: "Workflows & integrations",
    description: "Connect the tools you already pay for so data stops living in five places.",
  },
  {
    title: "Website chat helpers",
    description: "Custom chat on your site for FAQs, lead capture, and routing people to the right next step.",
  },
  {
    title: "Campaigns and advice",
    description: "Channel picks, creative direction, and honest sequencing for the next ninety days.",
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
    "RS Dev is led by Hafiz Subhan (BS Information Engineering Technology). Small crew, senior execution, direct access to the people building your product.",
  technicalSummary:
    "Live websites, custom tools, search fixes, CRM links, and website chat — built and supported by the same people you talk to.",
  soloProjects: "10+ solo products delivered end to end.",
  teamProjects: "20+ collaborations with product and engineering teams.",
} as const;

