/** Site copy — problem → solution framing, workflows, diagram slots */

export const DIAGRAM_SLOTS = {
  growthFunnel: {
    file: "/diagrams/growth-funnel.png",
    title: "Growth funnel",
    hint: "Visual: Website → SEO → Google visibility → Ads → Qualified leads. Export as wide PNG or SVG (~1200×600).",
  },
  deliveryCycle: {
    file: "/diagrams/delivery-cycle.png",
    title: "Project delivery cycle",
    hint: "Circular or linear flow: Discover → Scope → Build → Launch → Measure → Iterate.",
  },
  maintenanceLoop: {
    file: "/diagrams/maintenance-loop.png",
    title: "Maintenance loop",
    hint: "Ongoing loop: Monitor → Update → Secure → Optimize → Report.",
  },
  automationFlow: {
    file: "/diagrams/automation-flow.png",
    title: "Automation workflow",
    hint: "Before/after: manual repetitive tasks → automated pipelines + integrations.",
  },
  brandExperience: {
    file: "/diagrams/brand-experience.png",
    title: "Brand experience layer",
    hint: "Motion, visuals, and UI system for premium brand presence.",
  },
} as const;

export const PROBLEM_SOLUTION_INTRO = {
  eyebrow: "The gap we close",
  headline: "Most businesses don't fail on ideas — they stall on execution.",
  subhead:
    "Traffic without conversion. A site that launched but never ranks. Tools that don't talk to each other. Teams buried in the same tasks every morning. RS Dev exists to remove those bottlenecks with one accountable delivery team.",
} as const;

export const PROBLEM_SOLUTION_BLOCKS = [
  {
    problem: "Visibility stays flat after launch",
    solution:
      "We engineer for search from day one, then run structured SEO so your brand earns placement — not just a live URL.",
  },
  {
    problem: "Leads are inconsistent or low quality",
    solution:
      "Conversion paths, tracking, and paid campaigns are aligned to your offer so pipeline fills with prospects that match your criteria.",
  },
  {
    problem: "Operations eat the week",
    solution:
      "Custom software, CRM, and workflow automation connect your stack and remove repetitive work — so capacity goes back to growth.",
  },
] as const;

export const BUSINESS_PATHS = [
  {
    id: "grow",
    label: "Want to grow your business",
    problem:
      "You're ready to scale, but your digital presence doesn't reflect your ambition — or it isn't bringing in the right conversations.",
    solution:
      "A growth-ready website and funnel: built for performance, ranked in search, maintained over time, and supported with campaigns that deliver qualified leads.",
    outcomes: ["Premium web experience", "SEO & visibility", "Lead generation", "Ongoing optimization"],
    diagramKey: "growthFunnel" as const,
    cta: { label: "Explore growth path", href: "/contact?intent=growth" },
  },
  {
    id: "operations",
    label: "Need a system for daily operations",
    problem:
      "Spreadsheets, disconnected tools, and manual handoffs create errors, delays, and no single view of the business.",
    solution:
      "Custom software and CRM implementations designed around how your team actually works — with integrations, roles, and reporting built in.",
    outcomes: ["CRM & dashboards", "Custom portals", "API integrations", "Secure access & data"],
    diagramKey: "automationFlow" as const,
    cta: { label: "Discuss operations", href: "/contact?intent=operations" },
  },
  {
    id: "brand",
    label: "Want a modern, premium brand presence",
    problem:
      "Your brand feels dated online. Competitors look sharper, motion feels flat, and the experience doesn't match the quality you deliver offline.",
    solution:
      "Award-level UI direction: refined visuals, scroll-driven motion, and smooth flows that feel intentional — not template-built.",
    outcomes: ["Visual identity online", "Motion & interaction", "Performance-first build", "Design systems"],
    diagramKey: "brandExperience" as const,
    cta: { label: "Elevate your brand", href: "/contact?intent=brand" },
  },
  {
    id: "automate",
    label: "Stuck in repetitive daily work",
    problem:
      "Your team repeats the same steps — data entry, follow-ups, reports, approvals — and growth goals keep getting pushed to next week.",
    solution:
      "Practical automation and AI-assisted workflows that run reliably in the background, so your people focus on decisions and relationships.",
    outcomes: ["Process mapping", "Workflow automation", "AI agents & bots", "Monitoring & handoff"],
    diagramKey: "automationFlow" as const,
    cta: { label: "Automate operations", href: "/contact?intent=automate" },
  },
] as const;

export const GROWTH_WORKFLOW_STEPS = [
  {
    id: "build",
    step: "01",
    title: "Build the foundation",
    problem: "Without a solid product surface, every marketing dollar leaks.",
    solution:
      "We design and develop your website or web app — fast, accessible, and structured for conversion and search.",
    deliverables: ["UX & UI", "Development", "Analytics setup", "Launch checklist"],
  },
  {
    id: "seo",
    step: "02",
    title: "Engineer for visibility",
    problem: "Beautiful sites that Google can't read rarely compound over time.",
    solution:
      "Technical SEO, content structure, and on-page foundations so search engines understand and trust your pages.",
    deliverables: ["Technical audit", "Site architecture", "Core Web Vitals", "Indexing strategy"],
  },
  {
    id: "rank",
    step: "03",
    title: "Earn rankings",
    problem: "Being online isn't the same as being found when buyers are searching.",
    solution:
      "Ongoing SEO execution — keywords, content alignment, authority signals — tracked against real ranking movement.",
    deliverables: ["Keyword roadmap", "Content gaps", "Search Console", "Monthly reporting"],
  },
  {
    id: "ads",
    step: "04",
    title: "Amplify with paid reach",
    problem: "Organic alone can be slow; you need predictable top-of-funnel when timing matters.",
    solution:
      "Campaign setup and optimization across the channels that fit your offer — with tracking tied to outcomes.",
    deliverables: ["Campaign structure", "Creative alignment", "Conversion tracking", "Budget efficiency"],
  },
  {
    id: "leads",
    step: "05",
    title: "Convert to qualified leads",
    problem: "Traffic without qualification wastes sales time and skews forecasts.",
    solution:
      "Funnels, forms, CRM hooks, and nurture flows so marketing hands off conversations that are ready for a call.",
    deliverables: ["Lead scoring", "CRM integration", "Pipeline reporting", "Iteration cycles"],
  },
  {
    id: "maintain",
    step: "06",
    title: "Maintain & compound",
    problem: "Set-and-forget sites decay — speed drops, rankings slip, trust erodes.",
    solution:
      "Continuous care: updates, security, performance, and iterative improvements so results compound quarter over quarter.",
    deliverables: ["Hosting & updates", "Security patches", "Performance tuning", "Roadmap reviews"],
  },
] as const;

export const DELIVERY_CYCLE_STEPS = [
  { step: "01", title: "Discover", detail: "Goals, constraints, and what success looks like in 90 days." },
  { step: "02", title: "Scope", detail: "Clear deliverables, timeline, and ownership — no ambiguity." },
  { step: "03", title: "Design", detail: "UX, visuals, and motion direction aligned to your brand." },
  { step: "04", title: "Build", detail: "Development in structured sprints with visible progress." },
  { step: "05", title: "Launch", detail: "Go-live, QA, analytics, and handoff documentation." },
  { step: "06", title: "Grow", detail: "SEO, campaigns, automation, and maintenance as one program." },
] as const;

export const MAINTENANCE_CYCLE_STEPS = [
  { step: "01", title: "Monitor", detail: "Uptime, speed, search health, and lead flow." },
  { step: "02", title: "Protect", detail: "Security updates, backups, and access hygiene." },
  { step: "03", title: "Improve", detail: "Content, UX, and technical refinements." },
  { step: "04", title: "Automate", detail: "New workflows as repetitive work appears." },
  { step: "05", title: "Report", detail: "Clear metrics your leadership can act on." },
] as const;

export const COMPANY_VALUES = [
  {
    title: "Clarity over noise",
    body: "Every engagement starts with a written scope and measurable outcomes — so expectations stay aligned.",
  },
  {
    title: "Ownership, not handoffs",
    body: "One team carries build, growth, and maintenance. You are not juggling five vendors for one product.",
  },
  {
    title: "Performance is brand",
    body: "Speed, accessibility, and polish are not extras. They signal how seriously you take your market.",
  },
  {
    title: "Automation with intent",
    body: "We automate what repeats — not what requires judgment — so your team moves faster without losing control.",
  },
] as const;
