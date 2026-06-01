/** RS Dev company timeline — business growth, not training or skills */

export type CompanyMilestone = {
  title: string;
  description: string;
};

export type CompanyJourneyYear = {
  year: string;
  phase: string;
  items: CompanyMilestone[];
};

export const COMPANY_JOURNEY: CompanyJourneyYear[] = [
  {
    year: "2026",
    phase: "Full service studio",
    items: [
      {
        title: "One crew for build, search, enquiries, and ops",
        description:
          "RS Dev now runs as a focused digital studio: websites and apps, bespoke software, CRM setups, search work, workflow automation, and campaign support under written plans clients can follow.",
      },
    ],
  },
  {
    year: "2025",
    phase: "Client programs at scale",
    items: [
      {
        title: "Repeat delivery across industries",
        description:
          "Longer engagements in retail, food supply, access control, and internal operations. More clients stayed for search tune ups, product slices, and back office wiring after the first launch.",
      },
    ],
  },
  {
    year: "2024",
    phase: "Trusted by growing teams",
    items: [
      {
        title: "From one off builds to ongoing partnerships",
        description:
          "Companies started hiring RS Dev for phased roadmaps instead of single pages. We formalized discovery, scope, design, build, launch, and grow as the standard way we work.",
      },
    ],
  },
  {
    year: "2023",
    phase: "RS Dev founded",
    items: [
      {
        title: "A studio built for entrepreneur problems",
        description:
          "RS Dev launched to help business owners fix digital mess: slow sites, missing search visibility, leaky enquiry flows, and tools that did not match how teams actually sell and support.",
      },
    ],
  },
  {
    year: "2022",
    phase: "Before the studio name",
    items: [
      {
        title: "Early client work shaped the model",
        description:
          "Project work with founders and small teams showed the same pattern: they needed outcomes, clear communication, and one partner who would stay after go live. That became the RS Dev way of working.",
      },
    ],
  },
];

export const COMPANY_JOURNEY_INTRO = {
  title: "How RS Dev became the company clients call when digital work blocks quality work",
  description:
    "This is our business story: who we serve, what we shipped, and how we grew into a studio entrepreneurs trust for practical technology.",
} as const;
