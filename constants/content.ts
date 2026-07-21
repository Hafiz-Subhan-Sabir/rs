/** Site copy — problem → solution framing, workflows, diagram assets */

export const DIAGRAM_SLOTS = {
  growthFunnel: {
    file: "/diagrams/growth-funnel.png",
    title: "Site to signed deal",
  },
  deliveryCycle: {
    file: "/diagrams/delivery-cycle.png",
    title: "Six beats from brief to live",
  },
  maintenanceLoop: {
    file: "/diagrams/maintenance-loop.png",
    title: "Quarterly momentum ring",
  },
  automationFlow: {
    file: "/diagrams/automation-flow.png",
    title: "Manual chaos to wired ops",
  },
  brandExperience: {
    file: "/diagrams/brand-experience.png",
    title: "Stacked presence layers",
  },
} as const;

export const DIAGRAM_GALLERY_ITEMS = [
  {
    id: "growthFunnel",
    file: DIAGRAM_SLOTS.growthFunnel.file,
    title: DIAGRAM_SLOTS.growthFunnel.title,
    caption: "How a live product, search, ads, and care connect into revenue.",
  },
  {
    id: "deliveryCycle",
    file: DIAGRAM_SLOTS.deliveryCycle.file,
    title: DIAGRAM_SLOTS.deliveryCycle.title,
    caption: "Listen, define, sketch, ship slices, go live, then extend.",
  },
  {
    id: "maintenanceLoop",
    file: DIAGRAM_SLOTS.maintenanceLoop.file,
    title: DIAGRAM_SLOTS.maintenanceLoop.title,
    caption: "Watch, guard, refine, wire, and report on a repeating rhythm.",
  },
  {
    id: "automationFlow",
    file: DIAGRAM_SLOTS.automationFlow.file,
    title: DIAGRAM_SLOTS.automationFlow.title,
    caption: "From manual chaos to wired operations your team can trust.",
  },
  {
    id: "brandExperience",
    file: DIAGRAM_SLOTS.brandExperience.file,
    title: DIAGRAM_SLOTS.brandExperience.title,
    caption: "Layers that make your presence online match your offline quality.",
  },
] as const;

export const PROBLEM_SOLUTION_INTRO = {
  headline: "Your team should be doing quality work, not fighting broken digital systems.",
  subhead:
    "We help entrepreneurs and growing companies fix websites, software, search visibility, and messy daily workflows using technology that fits how you operate. You talk to the people who build and support it.",
} as const;

export const PROBLEM_SOLUTION_BLOCKS = [
  {
    problem: "Launch day passes and nothing changes in the market",
    solution:
      "We structure every page for search intent from the first wireframe, then keep tuning titles, speed, and links until your name shows up where buyers actually look.",
  },
  {
    problem: "Enquiries trickle in or miss the mark",
    solution:
      "Forms, landing paths, ad spend, and sales records get aligned to one offer so your calendar fills with people who already fit what you sell.",
  },
  {
    problem: "The week vanishes into admin instead of selling",
    solution:
      "Tailored apps, customer record setups, and background routines connect your tools and strip out repeat tasks so hours return to revenue work.",
  },
] as const;

export const BUSINESS_PATHS = [
  {
    id: "grow",
    label: "Revenue has flatlined online",
    problem:
      "You are ready to expand, yet the site feels small, slow to find, or silent when prospects compare you to rivals.",
    solution:
      "A fast storefront plus search placement, paid reach where it pays back, and steady tune ups so traffic turns into conversations worth your sales time.",
    outcomes: ["Sharp web presence", "Search placement", "Pipeline fill", "Monthly tune ups"],
    diagramKey: "growthFunnel" as const,
    cta: { label: "Map the revenue path", href: "/contact?intent=growth" },
  },
  {
    id: "operations",
    label: "Daily work runs on duct tape",
    problem:
      "Tabs, sheets, and inbox threads hold the business together. Mistakes slip through and nobody trusts a single number.",
    solution:
      "Software shaped around how your people actually sell and support, with roles, reports, and live links between the tools you already pay for.",
    outcomes: ["Sales boards", "Custom portals", "Live data links", "Safe sign in"],
    diagramKey: "automationFlow" as const,
    cta: { label: "Fix the back office", href: "/contact?intent=operations" },
  },
  {
    id: "brand",
    label: "You look better in person than on screen",
    problem:
      "Offline you win trust fast. Online the story feels generic, stiff, or years behind the quality you deliver face to face.",
    solution:
      "Interfaces with scroll motion, crisp type, and flows that feel considered. Built to load fast and read well on every device.",
    outcomes: ["Distinct look online", "Scroll motion", "Speed first build", "Reusable parts"],
    diagramKey: "brandExperience" as const,
    cta: { label: "Raise the online bar", href: "/contact?intent=brand" },
  },
  {
    id: "automate",
    label: "Staff repeat the same clicks every day",
    problem:
      "Data entry, reminders, exports, and sign offs eat the calendar. Big goals keep sliding to next month.",
    solution:
      "Mapped routines that run quietly, alert a person when judgment matters, and leave a trail you can audit.",
    outcomes: ["Process maps", "Background routines", "Alerts", "Live status views"],
    diagramKey: "automationFlow" as const,
    cta: { label: "Remove the repeat work", href: "/contact?intent=automate" },
  },
] as const;

export const GROWTH_WORKFLOW_STEPS = [
  {
    id: "build",
    step: "01",
    title: "Lay the product surface",
    problem: "Spend on ads leaks when the page cannot hold attention or explain the offer.",
    solution:
      "Design and code your site or app for speed, clarity, and room to measure what visitors do next.",
    deliverables: ["Screen design", "Production code", "Event tracking", "Go live checklist"],
  },
  {
    id: "seo",
    step: "02",
    title: "Make pages readable to search",
    problem: "Pretty layouts that crawlers cannot parse rarely climb over time.",
    solution:
      "Fix structure, headings, speed scores, and index rules so search engines trust what you publish.",
    deliverables: ["Site audit", "Page hierarchy", "Speed targets", "Index plan"],
  },
  {
    id: "rank",
    step: "03",
    title: "Win the scroll on results pages",
    problem: "Being online is not the same as showing up when money is on the table.",
    solution:
      "Target phrases buyers use, close content gaps, and watch rank movement against real queries.",
    deliverables: ["Phrase map", "Content gaps", "Search console", "Monthly numbers"],
  },
  {
    id: "ads",
    step: "04",
    title: "Buy reach with discipline",
    problem: "Organic alone can take quarters. Sometimes you need volume this month.",
    solution:
      "Set up campaigns on channels that fit your price point, with spend tied to form fills and calls.",
    deliverables: ["Ad structure", "Creative match", "Conversion tags", "Spend review"],
  },
  {
    id: "leads",
    step: "05",
    title: "Hand sales ready conversations",
    problem: "Raw traffic wastes rep hours and skews forecasts.",
    solution:
      "Score interest, route to sales records, and nurture cold names until they ask for a meeting.",
    deliverables: ["Interest scoring", "Sales record hooks", "Pipeline view", "Test cycles"],
  },
  {
    id: "maintain",
    step: "06",
    title: "Keep gains from eroding",
    problem: "Ignore a live property and speed drops, ranks slip, and trust thins.",
    solution:
      "Patch, host, tune, and revisit the roadmap each quarter so earlier wins stack instead of rot.",
    deliverables: ["Hosting care", "Security patches", "Speed passes", "Quarterly review"],
  },
] as const;

export const DELIVERY_CYCLE_STEPS = [
  { step: "01", title: "Listen", detail: "Goals, limits, and what a good ninety days looks like." },
  { step: "02", title: "Define", detail: "Written outputs, dates, and who owns each piece." },
  { step: "03", title: "Sketch", detail: "Screens, motion direction, and brand fit before code." },
  { step: "04", title: "Ship slices", detail: "Working chunks you can click through each sprint." },
  { step: "05", title: "Go live", detail: "Checks, analytics, and notes your team can follow." },
  { step: "06", title: "Extend", detail: "Search, ads, routines, and care as one ongoing program." },
] as const;

export const MAINTENANCE_CYCLE_STEPS = [
  { step: "01", title: "Watch", detail: "Uptime, load time, search health, and enquiry flow." },
  { step: "02", title: "Guard", detail: "Updates, backups, and who can access what." },
  { step: "03", title: "Refine", detail: "Copy, screens, and technical tweaks that lift results." },
  { step: "04", title: "Wire", detail: "New background routines when repeat work shows up." },
  { step: "05", title: "Share", detail: "Plain numbers leaders can act on without a translator." },
] as const;

export const PACKAGED_OFFER = {
  title: "Ninety day digital fix plan",
  description:
    "One clear plan for product, search, enquiries, and back office tech. Built for owners who want problems solved in the real world, not another deck to sit on a shelf.",
  phases: [
    {
      weeks: "Weeks 1 to 4",
      title: "Product surface",
      detail: "Site or app live with analytics, speed targets, and conversion paths that match your offer.",
    },
    {
      weeks: "Weeks 5 to 8",
      title: "Search and traffic",
      detail: "Technical search fixes, page structure, and paid or organic tests tied to real queries.",
    },
    {
      weeks: "Weeks 9 to 12",
      title: "Pipeline and ops",
      detail: "Forms, sales records, and background routines so follow ups and repeat work shrink.",
    },
  ],
  cta: { label: "Ask about the ninety day plan", href: "/contact?intent=growth" },
} as const;

export const COMPANY_VALUES = [
  {
    title: "Write it down first",
    body: "Every job opens with agreed outcomes on paper so nobody guesses what done means.",
  },
  {
    title: "One crew end to end",
    body: "Build, search, ads, and care sit with the same people. You are not herding five vendors for one site.",
  },
  {
    title: "Speed signals respect",
    body: "Fast loads and clean screens tell visitors you treat their time seriously.",
  },
  {
    title: "Automate the boring only",
    body: "We wire repeat steps, not judgment calls, so people stay in control while hours shrink.",
  },
] as const;
