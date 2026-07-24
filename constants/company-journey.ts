/** RS Dev company timeline — business growth story */

export type CompanyMilestone = {
  title: string;
  description: string;
};

export type CompanyJourneyYear = {
  year: string;
  items: CompanyMilestone[];
};

export const COMPANY_JOURNEY: CompanyJourneyYear[] = [
  {
    year: "2026",
    items: [
      {
        title: "One Crew. Full Delivery.",
        description:
          "RS Dev now works as one studio for websites, apps, custom software, CRM, search, automation, and growth support. Clients get a written plan, clear owners, and the same people from first call to go-live — so quality work is not blocked by messy digital tools.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Longer Partnerships. Real Industries.",
        description:
          "More teams stayed with us after the first launch. We helped retail, food supply, access control, and operations teams with search updates, product improvements, and back-office systems that match how people actually work day to day.",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "From One Project To A Plan.",
        description:
          "Companies stopped asking for a single page and started asking for a clear roadmap. We made discovery, scope, design, build, launch, and growth our normal way of working — so everyone knows what happens next and why.",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "RS Dev Opens For Entrepreneurs.",
        description:
          "We started RS Dev to help business owners fix common digital problems: slow websites, weak search visibility, lost enquiries, and tools that do not match how teams sell and support customers. Simple language. Clear outcomes. Hands that stay after launch.",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Early Work Taught Us The Pattern.",
        description:
          "Before the studio name, project work with founders and small teams showed the same need again and again: real results, honest updates, and one partner who stays after go-live. That pattern became the RS Dev way of working.",
      },
    ],
  },
];

export const COMPANY_JOURNEY_INTRO = {
  title: "The Story Of How RS Dev Grew.",
  description:
    "We started by helping founders fix messy digital problems. Year by year we grew into a six-person studio entrepreneurs trust for websites, software, search, and day-to-day tools — with clear plans and the same crew from start to finish.",
} as const;
