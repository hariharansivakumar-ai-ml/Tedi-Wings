import React from "react";
import type { Project } from "@/types/project";
import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";

export interface SolutionSectionProps {
  project?: Project;
}

export function SolutionSection({ project }: SolutionSectionProps) {
  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="max-w-3xl flex flex-col gap-6">
          <SectionTitle
            label="The Solution"
            labelColor="blue"
            titlePrimary="Our Architectural"
            titleHighlight="Approach"
            highlightColor="orange"
            description={
              project?.solution ||
              "We engineered a modular, high-efficiency architecture utilizing modern web standards, optimized caching, and automated testing."
            }
          />

          <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-start gap-4">
            <CheckCircle2 className="w-5 h-5 text-[#075DFF] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#061A63]">
                Implementation Details
              </span>
              <p className="body-text text-xs text-[#5B6472]">
                Delivered clean, maintainable code with edge caching, fast response times, and automated deployment pipelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Solution = SolutionSection;
export default SolutionSection;
