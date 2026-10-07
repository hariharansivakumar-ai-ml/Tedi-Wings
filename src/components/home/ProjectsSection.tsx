import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects.data";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const largeProject = featured[0] || projects[0];
  const secondaryProjects = featured.slice(1, 3);

  return (
    <section className="section-spacing-feature bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            label="Selected Work"
            labelColor="orange"
            titlePrimary="Our"
            titleHighlight="Projects"
            highlightColor="orange"
            description="Built with care. Delivered with pride."
          />

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#075DFF] hover:text-[#00C8FF] transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {projects.length === 0 && (
          <div className="mb-8 p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-center justify-between text-sm text-[#5B6472]">
            <span>New projects are landing soon. Below is a preview of our project showcase template.</span>
            <span className="text-xs font-semibold text-[#FF5A00] uppercase tracking-wider">Coming Soon</span>
          </div>
        )}

        {/* Layout System: 1 Large Flagship Project + 2 Secondary Projects */}
        <div className="flex flex-col gap-8">
          <div>
            <ProjectCard
              project={largeProject}
              layout="large"
              theme="light"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              project={secondaryProjects[0]}
              layout="grid"
              theme="light"
            />
            <ProjectCard
              project={secondaryProjects[1]}
              layout="grid"
              theme="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const FeaturedProjects = ProjectsSection;
export default ProjectsSection;
