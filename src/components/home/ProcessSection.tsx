import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { homeProcessData } from "@/data/home.data";

export function ProcessSection() {
  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-14">
          <SectionTitle
            label="How We Work"
            labelColor="blue"
            titlePrimary="Simple"
            titleHighlight="Process"
            highlightColor="orange"
            description="Four straightforward steps to take your project from first idea to launch."
          />
        </div>

        {/* Timeline Sequence with Connecting Line */}
        <div className="relative">
          {/* Connecting Line: Deep Blue via Orange/Gold Accent */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#061A63]/10 via-[#FF7A00]/30 to-[#061A63]/10 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {homeProcessData.map((item) => (
              <div
                key={item.number}
                className="bg-white p-7 rounded-[18px] border border-[#E5E7EB] hover:border-[#00C8FF] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#061A63] text-white flex items-center justify-center font-bold text-lg tracking-tight group-hover:bg-[#FF5A00] transition-colors shadow-sm">
                    {item.number}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-[#FF5A00] uppercase">
                    Step {item.number}
                  </span>
                </div>

                <h3 className="text-[15px] font-semibold text-[#061A63] group-hover:text-[#075DFF] transition-colors mt-2 leading-snug">
                  {item.step}
                </h3>

                <p className="body-text text-[13px] text-[#5B6472] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const Process = ProcessSection;
export default ProcessSection;
