export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "web-development",
    title: "Web Development",
    category: "Development",
    description: "Fast, secure websites and web apps built to perform.",
    deliverables: [
      "Business websites",
      "Web applications",
      "E-commerce",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    category: "Mobile",
    description: "Smooth apps for Android and iOS that people enjoy using.",
    deliverables: [
      "Android & iOS",
      "Cross-platform builds",
      "App Store launch",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    category: "Software",
    description: "Tools built around how your business actually works.",
    deliverables: [
      "Internal tools",
      "Custom dashboards",
      "Business systems",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    description: "Clean, intuitive interfaces that guide users and convert.",
    deliverables: [
      "User research & wireframes",
      "High-fidelity prototypes",
      "Design systems",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    category: "Workflows",
    description: "Less manual work. More time for what matters.",
    deliverables: [
      "Workflow automation",
      "API integrations",
      "Data syncing",
    ],
  },
  {
    id: "support-care",
    title: "Support & Care",
    category: "Maintenance",
    description: "Updates, fixes and improvements after launch.",
    deliverables: [
      "Regular updates & fixes",
      "Security monitoring",
      "Performance tuning",
    ],
  },
];
