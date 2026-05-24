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
    title: "E-commerce Car Website",
    description:
      "A full e-commerce car platform with listing discovery, filters, product details, checkout workflow, and responsive conversion-focused UI.",
    image:
      "/projects/car.png",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: true,
    stack: "React, Next.js, TypeScript, Payment Integrations",
  },
  {
    title: "Real-Time Vegetable Detection",
    description:
      "Computer vision project for real-time vegetable detection with dataset preparation, model training, inference flow, and deployment-ready pipeline.",
    image:
      "/projects/vegetable.jpg",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: true,
    stack: "Python, AI, ML, DL, Data Collection & Training",
  },
  {
    title: "Movie Website",
    description:
      "Netflix-like UI/UX with dynamic sections, content previews, watchlist patterns, and high-quality streaming-oriented layout structure.",
    image:
      "/projects/movie.png",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: true,
    stack: "React, TailwindCSS, Proper Layout & Grid Structuring",
  },
  {
    title: "Real-Time Eye Scanning Unlock System",
    description:
      "Biometric-inspired real-time eye scanning flow for unlock and identification use-cases, focused on secure authentication and system design.",
    image:
      "/projects/eye.webp",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: true,
    stack: "Authentication Systems, JWT, RBAC, Secure Password Hashing",
  },
  {
    title: "Pet Adoption Website",
    description:
      "End-to-end adoption platform with searchable pets, profile pages, application workflow, communication flow, and admin moderation.",
    image:
      "/projects/pet.png",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: false,
    stack: "Next.js, TypeScript, ORM, Team Collaboration",
  },
  {
    title: "Food Ordering Restaurant Website",
    description:
      "Restaurant ordering experience with menu browsing, cart, order management, and payment integration for local and bank methods.",
    image:
      "/projects/food.webp",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: false,
    stack: "React, Payment Integrations, Deployment & Maintenance",
  },
  {
    title: "ERP System",
    description:
      "Comprehensive ERP with modules for users, operations, reporting, and business workflow automation with role-based access and maintainability.",
    image:
      "/projects/erp.jpg",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: false,
    stack: "System Design, DFDs, ERDs, Agile & Waterfall",
  },
  {
    title: "AI Interview Simulator",
    description:
      "AI-powered interview practice system that simulates realistic technical and behavioral rounds, evaluates responses, and returns structured feedback.",
    image:
      "/projects/ai-interview.png",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: false,
    stack: "AI Integrations, Prompt Engineering, SaaS-style Workflows",
  },
  {
    title: "Script to AI Video Generator",
    description:
      "A script-to-video pipeline that transforms textual input into scene-based AI video drafts with timing, structure, and workflow automation.",
    image:
      "/projects/script-to-video.png",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: false,
    stack: "AI Tools Usage, API Integrations, System Design",
  },
  {
    title: "Hospital Management System",
    description:
      "Hospital management solution designed with core DSA principles for optimized records, appointments, patient workflows, and operational efficiency.",
    image:
      "/projects/hospital-management.png",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: false,
    stack: "DSA, Backend Logic, Optimization",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A responsive game module featuring clean board UX, score tracking, and optimized interaction flow for quick gameplay sessions.",
    image:
      "/projects/tic-tac-toe.png",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: false,
    stack: "JavaScript, UI Logic, Problem Solving",
  },
  {
    title: "Bubble Game",
    description:
      "Arcade-style bubble game with performance-focused mechanics, scoring logic, and interactive UI behavior for smooth browser gameplay.",
    image:
      "/projects/bubble-game.jpg",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: false,
    stack: "Game Logic, Debugging, Frontend Interactions",
  },
  {
    title: "Feedback Portal Module",
    description:
      "A structured feedback collection module with categorized responses, reporting views, and workflow-friendly review mechanics.",
    image:
      "/projects/feedback-portal.png",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: false,
    stack: "Requirements Gathering, SRS, Portal Design",
  },
  {
    title: "Expense Tracker",
    description:
      "Data extraction workflows for collecting structured web information, with cleaning and processing pipelines for analytics and AI preparation.",
    image:
      "/projects/expense-tracker.png",
    link: "https://github.com/Hafiz-Subhan-Sabir",
    github: "https://github.com/Hafiz-Subhan-Sabir",
    featured: false,
    stack: "Python, Data Collection, Automation",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Explore",
    data: [
      { name: "About", icon: null, link: "/about" },
      { name: "Services", icon: null, link: "/services" },
      { name: "Work", icon: null, link: "/work" },
      { name: "Journey", icon: null, link: "/journey" },
    ],
  },
  {
    title: "Contact",
    data: [
      { name: "Contact", icon: null, link: "/contact" },
      { name: "Email", icon: null, link: `mailto:${CONTACT_EMAIL}` },
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

export const TESTIMONIALS = [
  {
    name: "Founder (placeholder)",
    role: "Product led business",
    text: "Updates were plain English. We hit the date we agreed without drama.",
  },
  {
    name: "Teammate (placeholder)",
    role: "Engineering partner",
    text: "Screens finally matched. New hires stopped asking which button style to use.",
  },
  {
    name: "Stakeholder (placeholder)",
    role: "Operations lead",
    text: "They said no once and saved us a month building the wrong thing.",
  },
] as const;

export const EDUCATION_HIGHLIGHTS = {
  education:
    "RS Dev is led by Hafiz Subhan (BS Information Engineering Technology) with years shipping web products, sales tools, search work, and smart routines.",
  technicalSummary:
    "Work spans storefronts, custom apps, live data links, search fixes, assistant bots, and campaign releases that share one plan.",
  satisfiedClients: "Satisfied Clients: 35+",
  soloProjects: "Delivered 10+ solo projects end-to-end.",
  teamProjects: "Collaborated with teams on 20+ projects.",
} as const;

