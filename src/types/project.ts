/**
 * Project Data Architecture
 * Strongly typed interface for projects and showcase items.
 */

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies: string[];
  featured?: boolean;
  year?: string;
  client?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  features?: string[];
  results?: string[];
  gallery?: string[];
  liveUrl?: string;
}

export type ProjectFilterCategory = string;
