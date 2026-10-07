export interface ValueItem {
  id: string;
  title: string;
  description: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export interface TeamPlaceholder {
  id: string;
  role: string;
  department: string;
}

export const valuesData: ValueItem[] = [
  {
    id: "val-1",
    title: "Quality",
    description: "We sweat the details.",
  },
  {
    id: "val-2",
    title: "Honesty",
    description: "We say what we can deliver, and deliver it.",
  },
  {
    id: "val-3",
    title: "Teamwork",
    description: "Your success is our shared goal.",
  },
  {
    id: "val-4",
    title: "Growth",
    description: "We keep learning, so you keep winning.",
  },
];

export const journeyMilestones: MilestoneItem[] = [
  {
    year: "01",
    title: "Discover & Architect",
    description: "Learning client challenges and shaping high-impact technical strategy.",
  },
  {
    year: "02",
    title: "Core Engineering",
    description: "Developing robust backends, modern web applications, and scalable infrastructure.",
  },
  {
    year: "03",
    title: "Precision QA & Verification",
    description: "Rigorous automated testing, security reviews, and performance tuning.",
  },
  {
    year: "04",
    title: "Launch & Flight",
    description: "Going live smoothly and supporting long-term business growth.",
  },
];

export const teamPlaceholders: TeamPlaceholder[] = [
  {
    id: "team-1",
    role: "Lead Solutions Architect",
    department: "System Architecture",
  },
  {
    id: "team-2",
    role: "Senior Full-Stack Engineer",
    department: "Web & API Engineering",
  },
  {
    id: "team-3",
    role: "Mobile Systems Engineer",
    department: "Android & iOS Apps",
  },
  {
    id: "team-4",
    role: "UI/UX Design Lead",
    department: "Product Design",
  },
];
