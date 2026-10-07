import React from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects.data";

export function FeaturedProjectSection() {
  const featured = projects.find((p) => p.featured) || projects[0];

  return (
    <section className="py-12 bg-white">
      <div className="site-container">
        <div className="flex items-center justify-between mb-6">
          <span className="small-label text-[#075DFF]">Featured Project</span>
          <span className="text-xs text-[#5B6472] font-medium tracking-wide">
            Architectural Showcase
          </span>
        </div>

        <ProjectCard project={featured} layout="large" theme="light" />
      </div>
    </section>
  );
}

export const FeaturedProject = FeaturedProjectSection;
export default FeaturedProjectSection;
