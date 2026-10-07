import React from "react";
import type { Project } from "@/types/project";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Code2, Server, Database, Cloud } from "lucide-react";

export interface TechnologiesSectionProps {
  project?: Project;
}

export function TechnologiesSection({ project }: TechnologiesSectionProps) {
  const techList = project?.technologies?.length
    ? project.technologies
    : ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"];

  const ICONS = [Code2, Server, Database, Cloud];

  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-10">
          <SectionTitle
            label="Tech Stack"
            titlePrimary="Technologies &"
            titleHighlight="Frameworks"
            highlightColor="blue"
            description="Selected tools engineered for performance, maintainability, and scale."
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {techList.map((tech, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-[18px] border border-[#E5E7EB] flex flex-col items-center justify-center text-center gap-2.5 shadow-sm hover:border-[#00C8FF] hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#075DFF]/10 flex items-center justify-center text-[#075DFF]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-[#061A63]">
                  {tech}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#FF5A00] font-semibold">
                  PRODUCTION STACK
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Technologies = TechnologiesSection;
export default TechnologiesSection;
