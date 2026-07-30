/** Site copy — problem → solution framing, workflows, diagram assets */

export const DIAGRAM_SLOTS = {
  growthFunnel: {
    file: "/diagrams/growth-funnel.webp",
    title: "Site to signed deal",
  },
  deliveryCycle: {
    file: "/diagrams/delivery-cycle.webp",
    title: "Six beats from brief to live",
  },
  maintenanceLoop: {
    file: "/diagrams/maintenance-loop.webp",
    title: "Quarterly momentum ring",
  },
  automationFlow: {
    file: "/diagrams/automation-flow.webp",
    title: "Manual chaos to wired ops",
  },
  brandExperience: {
    file: "/diagrams/brand-experience.webp",
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
    label: "Sales from the website are stuck",
    question: "Is Your Website Not Bringing In Sales?",
    answer:
      "RS Dev makes your website faster, helps people find you on Google, and sets up simple ads when they help. We keep checking each month so more visitors become real customers.",
    problem:
      "You want more sales online, but your site is hard to find or does not turn visitors into buyers.",
    solution:
      "A faster website, better search results, smart ads when needed, and monthly check-ins.",
    outcomes: ["Faster website", "Easier to find on Google", "More sales leads", "Monthly check-ins"],
    diagramKey: "growthFunnel" as const,
    cta: { label: "Talk About Sales Growth", href: "/contact?intent=growth" },
  },
  {
    id: "operations",
    label: "Work is messy across many tools",
    question: "Is Daily Work Spread Across Too Many Apps And Sheets?",
    answer:
      "We build one clear system that matches how your team already works. Everyone sees the same numbers, the right people get the right access, and fewer mistakes slip through.",
    problem:
      "Tabs, spreadsheets, and emails hold the business together. Mistakes happen and nobody trusts the numbers.",
    solution:
      "Simple software for sales and support, clear roles, and live links between your tools.",
    outcomes: ["One clear dashboard", "Team logins that fit", "Live numbers", "Fewer mistakes"],
    diagramKey: "automationFlow" as const,
    cta: { label: "Fix My Daily Tools", href: "/contact?intent=operations" },
  },
  {
    id: "brand",
    label: "Offline brand is stronger than the website",
    question: "Do You Look Better In Person Than On Your Website?",
    answer:
      "RS Dev redesigns your site so it looks clean, loads fast, and feels like your real business. Visitors should trust you online the same way they do face to face.",
    problem:
      "In person people trust you quickly. Online your site looks old, plain, or confusing.",
    solution:
      "A fresh, fast website that looks professional on phones and computers.",
    outcomes: ["Clean modern look", "Fast on mobile", "Clear story", "Easy to update"],
    diagramKey: "brandExperience" as const,
    cta: { label: "Improve My Website Look", href: "/contact?intent=brand" },
  },
  {
    id: "automate",
    label: "Team repeats the same manual tasks",
    question: "Does Your Team Do The Same Manual Tasks Every Day?",
    answer:
      "We find the repeat work and set up simple automatic steps. Your team only steps in when a real decision is needed — so they save time without losing control.",
    problem:
      "Copy-paste, reminders, and exports eat the day. Bigger goals keep getting pushed to next month.",
    solution:
      "Simple automations that run in the background and alert people only when needed.",
    outcomes: ["Less copy-paste", "Automatic reminders", "Time back for the team", "Clear task trail"],
    diagramKey: "automationFlow" as const,
    cta: { label: "Save My Team Time", href: "/contact?intent=automate" },
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
  { step: "04", title: "Ship Slices", detail: "Working chunks you can click through each sprint." },
  { step: "05", title: "Go Live", detail: "Checks, analytics, and notes your team can follow." },
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
  title: "Ninety Day Digital Fix Plan",
  description:
    "One clear plan for product, search, enquiries, and back office tech. Built for owners who want problems solved in the real world, not another deck to sit on a shelf.",
  phases: [
    {
      weeks: "Weeks 1 To 4",
      title: "Product Surface",
      detail: "Site or app live with analytics, speed targets, and conversion paths that match your offer.",
    },
    {
      weeks: "Weeks 5 To 8",
      title: "Search And Traffic",
      detail: "Technical search fixes, page structure, and paid or organic tests tied to real queries.",
    },
    {
      weeks: "Weeks 9 To 12",
      title: "Pipeline And Ops",
      detail: "Forms, sales records, and background routines so follow ups and repeat work shrink.",
    },
  ],
  cta: { label: "Ask About The Ninety Day Plan", href: "/contact?intent=growth" },
} as const;

export const COMPANY_VALUES = [
  {
    title: "Write It Down First",
    body: "Every job opens with agreed outcomes on paper so nobody guesses what done means.",
  },
  {
    title: "One Crew End To End",
    body: "Build, search, ads, and care sit with the same people. You are not herding five vendors for one site.",
  },
  {
    title: "Speed Signals Respect",
    body: "Fast loads and clean screens tell visitors you treat their time seriously.",
  },
  {
    title: "Automate The Boring Only",
    body: "We wire repeat steps, not judgment calls, so people stay in control while hours shrink.",
  },
] as const;
