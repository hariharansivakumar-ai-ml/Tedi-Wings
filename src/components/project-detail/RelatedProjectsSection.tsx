import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects.data";

export interface RelatedProjectsSectionProps {
  currentSlug?: string;
}

export function RelatedProjectsSection({ currentSlug }: RelatedProjectsSectionProps) {
  const otherProjects = projects.filter((p) => p.slug !== currentSlug).slice(0, 2);

  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-10">
          <SectionTitle
            label="Selected Work"
            titlePrimary="Explore Related"
            titleHighlight="Projects"
            highlightColor="blue"
            description="Discover how TeDiWings Technologies builds digital products and custom software across different industries."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects[0] && <ProjectCard project={otherProjects[0]} layout="grid" />}
          {otherProjects[1] && <ProjectCard project={otherProjects[1]} layout="grid" />}
        </div>
      </div>
    </section>
  );
}

export const RelatedProjects = RelatedProjectsSection;
export default RelatedProjectsSection;
