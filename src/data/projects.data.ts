import type { Project } from "@/types/project";

/**
 * TeDiWings Technologies - Projects Data Repository
 *
 * NOTE: As per architecture specifications, fake project data is not invented.
 * When real projects are provided, add them to this array and the entire website
 * (Home Featured, Projects Archive, and Dynamic /projects/[slug] pages)
 * will automatically consume and render them.
 */
export const projects: Project[] = [];

export const projectFilterCategories = [
  "All",
  "Web App",
  "Mobile App",
  "Custom Software",
  "UI/UX Design",
  "Automation",
];
