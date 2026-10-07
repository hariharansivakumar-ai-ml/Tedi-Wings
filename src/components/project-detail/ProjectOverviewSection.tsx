import React from "react";
import type { Project } from "@/types/project";
import { SectionTitle } from "@/components/common/SectionTitle";

export interface ProjectOverviewSectionProps {
  project?: Project;
}

export function ProjectOverviewSection({ project }: ProjectOverviewSectionProps) {
  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <SectionTitle
              label="Overview"
              labelColor="blue"
              titlePrimary="Project Summary &"
              titleHighlight="Objectives"
              highlightColor="orange"
              description={
                project?.overview ||
                "A comprehensive breakdown of project requirements, technical architecture, and measurable delivery milestones."
              }
            />

            <p className="body-text text-[#5B6472]">
              Engineered with clean code practices, strict TypeScript standards, and high-performance design principles tailored to client goals.
            </p>
          </div>

          {/* Right Column: Project Metadata Panel */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] flex flex-col gap-5">
            <span className="small-label text-[#075DFF]">Project Details</span>

            <div className="flex flex-col gap-4 text-sm divide-y divide-[#E5E7EB]">
              <div className="pt-2 flex justify-between">
                <span className="text-[#5B6472] font-medium">Client</span>
                <span className="text-[#061A63] font-semibold">{project?.client || "Commercial Partner"}</span>
              </div>
              <div className="pt-3 flex justify-between">
                <span className="text-[#5B6472] font-medium">Timeline</span>
                <span className="text-[#061A63] font-semibold">{project?.year || "Delivered"}</span>
              </div>
              <div className="pt-3 flex justify-between">
                <span className="text-[#5B6472] font-medium">Category</span>
                <span className="text-[#061A63] font-semibold">{project?.category || "Web Application"}</span>
              </div>
              <div className="pt-3 flex justify-between">
                <span className="text-[#FF5A00] font-semibold">Status</span>
                <span className="text-[#FF5A00] font-semibold">Delivered & Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Overview = ProjectOverviewSection;
export default ProjectOverviewSection;
