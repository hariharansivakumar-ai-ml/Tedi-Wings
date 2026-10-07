import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";

export function ProjectsHeroSection() {
  return (
    <section className="pt-20 pb-12 bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="max-w-3xl">
          <SectionTitle
            isHero
            label="Selected Work"
            labelColor="orange"
            titlePrimary="Our"
            titleHighlight="Work"
            highlightColor="orange"
            description="A look at what we have built and the results behind it."
          />
        </div>
      </div>
    </section>
  );
}

export const Hero = ProjectsHeroSection;
export default ProjectsHeroSection;
