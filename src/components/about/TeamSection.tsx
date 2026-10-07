import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { teamPlaceholders } from "@/data/about.data";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

export function TeamSection() {
  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-12">
          <SectionTitle
            label="Our Team"
            titlePrimary="Engineering"
            titleHighlight="Leadership"
            highlightColor="blue"
            description="Developers and designers dedicated to building simple, reliable, and beautiful digital products."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamPlaceholders.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-[18px] bg-[#F7F8FA] border border-[#E5E7EB] flex flex-col gap-4 text-center items-center group hover:border-[#00C8FF] hover:-translate-y-1 transition-all"
            >
              <div className="w-full">
                <VisualPlaceholder
                  label="PHOTO RESERVED"
                  sublabel="PROFILE"
                  minHeight="180px"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-semibold text-[#061A63]">{member.role}</h4>
                <span className="text-[11px] font-semibold text-[#075DFF] tracking-wider uppercase">
                  {member.department}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Team = TeamSection;
export default TeamSection;
