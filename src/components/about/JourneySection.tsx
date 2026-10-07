import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { journeyMilestones } from "@/data/about.data";

export function JourneySection() {
  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-12">
          <SectionTitle
            label="Our Path"
            labelColor="blue"
            titlePrimary="How We"
            titleHighlight="Evolve"
            highlightColor="orange"
            description="The progressive stages that guide our engineering excellence and technical growth."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {journeyMilestones.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[18px] bg-white border border-[#E5E7EB] flex flex-col gap-3 shadow-sm hover:border-[#00C8FF] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-xs font-bold text-[#FF5A00] tracking-wider uppercase">
                {item.year}
              </span>
              <h4 className="text-base font-semibold text-[#061A63]">
                {item.title}
              </h4>
              <p className="body-text text-xs text-[#5B6472]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Journey = JourneySection;
export default JourneySection;
