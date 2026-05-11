import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxDownload,
} from "react-icons/rx";

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

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/hafiz-subhan-soft/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Hafiz-Subhan-Sabir/rs",
  },
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
    title: "Profiles",
    data: [
      { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/hafiz-subhan-soft/" },
      { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/Hafiz-Subhan-Sabir/rs" },
    ],
  },
  {
    title: "Explore",
    data: [
      { name: "Who we are", icon: null, link: "/#about-me" },
      { name: "Selected work", icon: null, link: "/#projects" },
      { name: "Snapshot", icon: null, link: "/#resume" },
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

export const NAV_LINKS = [
  { title: "Who we are", link: "#about-me" },
  { title: "Capabilities", link: "#skills" },
  { title: "Journey", link: "#timeline" },
  { title: "Snapshot", link: "#resume" },
  { title: "Proof", link: "#testimonials" },
  { title: "Selected work", link: "#projects" },
  { title: "Book a call", link: "/contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Hafiz-Subhan-Sabir/rs",
};

export const TESTIMONIALS = [
  {
    name: "Founder (placeholder)",
    role: "Product-led business",
    text: "Clear updates, no black box. We shipped on the date we set.",
  },
  {
    name: "Teammate (placeholder)",
    role: "Engineering partner",
    text: "The UI system finally felt consistent; onboarding new devs got easier.",
  },
  {
    name: "Stakeholder (placeholder)",
    role: "Operations lead",
    text: "They pushed back once — and saved us a month of wrong work.",
  },
] as const;

export const EDUCATION_HIGHLIGHTS = {
  education:
    "RS Dev is led by Hafiz Subhan (BS Information Engineering Technology) with full-stack, CRM, SEO, and AI delivery experience.",
  technicalSummary:
    "Delivery spans web apps, custom software, integrations, SEO improvements, AI agents and automation, and marketing-aligned releases.",
  satisfiedClients: "Satisfied Clients: 35+",
  soloProjects: "Delivered 10+ solo projects end-to-end.",
  teamProjects: "Collaborated with teams on 20+ projects.",
} as const;

export const RESUME_DATA = {
  title: "RS Dev — delivery snapshot",
  summary:
    "RS Dev ships websites and web apps, custom software, and CRM-aligned systems. We improve SEO, build practical AI agents and workflow automation, support digital marketing, and provide consultancy so product and growth stay aligned.",
  targetRoles: [
    "Web application & custom software delivery",
    "CRM, SEO, and integration projects",
    "AI automation & digital marketing support",
  ],
  coreSkills:
    "React, Next.js, TypeScript, Tailwind CSS, Python, FastAPI, REST APIs, JWT, RBAC, Git, CRM integrations, technical SEO, AI agents & automation, campaign tracking",
  experience: [
    {
      title: "RS Dev — client & product delivery",
      period: "2024 - Present",
      bullets: [
        "Web apps, dashboards, and e-commerce flows with performance, accessibility, and maintainable architecture.",
        "CRM-related integrations, auth (JWT + RBAC), payments, and third-party APIs with clear handoff docs.",
        "SEO remediation, AI-assisted workflows, and marketing-aligned releases with realistic timelines.",
      ],
    },
    {
      title: "Engineering & project delivery",
      period: "2022 - 2024",
      bullets: [
        "Full-stack and AI projects across academic, freelance, and team settings with strong debugging and optimization habits.",
        "Reusable UI systems, documentation, and collaboration patterns for multi-developer delivery.",
      ],
    },
  ],
  education: "BS Information Engineering Technology (lead: Hafiz Subhan)",
  resumeLink: "/resume/Hafiz_Subhan_Resume.pdf",
  resumeLinkLabel: "Download Resume PDF",
  downloadIcon: RxDownload,
} as const;

