/**
 * TeDiWings Technologies - Home Page Data
 * Real, concise copy aligned with the Brand Voice & Content Pack.
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface TechItem {
  id: string;
  name: string;
}

export interface ProcessItem {
  number: string;
  step: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  id: string;
  name: string;
}

export const homeServicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Fast, secure websites and web apps built to perform.",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Smooth apps for Android and iOS that people enjoy using.",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Tools built around how your business actually works.",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces that guide users and convert.",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Less manual work. More time for what matters.",
  },
  {
    id: "support-care",
    title: "Support & Care",
    description: "Updates, fixes and improvements after launch.",
  },
];

export const homeTechnologiesData: TechItem[] = [
  { id: "tech-1", name: "Next.js & React" },
  { id: "tech-2", name: "TypeScript" },
  { id: "tech-3", name: "Node.js & Python" },
  { id: "tech-4", name: "React Native & iOS" },
  { id: "tech-5", name: "PostgreSQL & Redis" },
  { id: "tech-6", name: "Cloud & AWS" },
  { id: "tech-7", name: "Docker & CI/CD" },
  { id: "tech-8", name: "REST & GraphQL" },
];

export const homeProcessData: ProcessItem[] = [
  {
    number: "01",
    step: "Discover",
    description: "We learn your goals, users and challenges.",
  },
  {
    number: "02",
    step: "Design",
    description: "We shape the look, flow and experience.",
  },
  {
    number: "03",
    step: "Build",
    description: "We develop with clean, tested code.",
  },
  {
    number: "04",
    step: "Launch",
    description: "We go live, then keep improving.",
  },
];

export const homeWhyUsData: FeatureItem[] = [
  {
    id: "why-1",
    title: "Clear Communication",
    description: "Simple updates. No jargon. No surprises.",
  },
  {
    id: "why-2",
    title: "Clean Engineering",
    description: "Well-structured code that is easy to grow.",
  },
  {
    id: "why-3",
    title: "Design First",
    description: "Every pixel is placed with intent.",
  },
  {
    id: "why-4",
    title: "Built to Scale",
    description: "Ready for your next hundred customers.",
  },
];

export const homeIndustriesData: IndustryItem[] = [
  { id: "ind-1", name: "SaaS & Cloud Platforms" },
  { id: "ind-2", name: "FinTech & Payments" },
  { id: "ind-3", name: "E-Commerce & Retail" },
  { id: "ind-4", name: "Healthcare & Biotech" },
  { id: "ind-5", name: "Logistics & Supply Chain" },
  { id: "ind-6", name: "Enterprise Systems" },
];
