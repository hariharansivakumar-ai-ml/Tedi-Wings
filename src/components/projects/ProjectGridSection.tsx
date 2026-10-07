import React from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects.data";

export function ProjectGridSection() {
  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            slug: "cloud-commerce-platform",
            title: "Cloud Commerce Platform",
            category: "Web App",
            description:
              "High-performance modern e-commerce storefront with lightning fast checkout and inventory synchronization.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL"],
          },
          {
            slug: "field-service-mobile-app",
            title: "Field Service Mobile Suite",
            category: "Mobile App",
            description:
              "Cross-platform iOS and Android application with real-time dispatching and offline-first data sync.",
            technologies: ["React Native", "GraphQL", "Node.js"],
          },
          {
            slug: "enterprise-resource-system",
            title: "Custom Operations Hub",
            category: "Custom Software",
            description:
              "Tailored internal management software designed around actual operational workflows and automated reporting.",
            technologies: ["React", "Python", "Redis"],
          },
          {
            slug: "workflow-automation-engine",
            title: "Data Pipeline Orchestrator",
            category: "Automation",
            description:
              "End-to-end background automation system reducing manual data entry and syncing multi-channel systems.",
            technologies: ["Docker", "AWS", "CI/CD"],
          },
        ];

  return (
    <section className="py-12 bg-white">
      <div className="site-container">
        {projects.length === 0 && (
          <div className="mb-8 p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-center justify-between text-sm text-[#5B6472]">
            <span>New projects are landing soon. Below is a preview of our project showcase template.</span>
            <span className="text-xs font-semibold text-[#FF5A00] uppercase tracking-wider">Coming Soon</span>
          </div>
        )}

        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E7EB]">
          <span className="small-label text-[#075DFF]">Project Index</span>
          <span className="text-xs text-[#5B6472] font-medium">
            Showing {displayProjects.length} Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((p, idx) => (
            <ProjectCard
              key={p.slug || idx}
              project={p}
              layout="grid"
              theme="light"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const ProjectGrid = ProjectGridSection;
export default ProjectGridSection;
