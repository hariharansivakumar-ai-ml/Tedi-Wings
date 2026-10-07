import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { valuesData } from "@/data/about.data";
import { ShieldCheck } from "lucide-react";

export function ValuesSection() {
  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-12">
          <SectionTitle
            label="Our Principles"
            labelColor="orange"
            titlePrimary="Core"
            titleHighlight="Values"
            highlightColor="orange"
            description="The fundamental values that guide how we engineer software and partner with clients."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valuesData.map((val) => (
            <div
              key={val.id}
              className="p-7 rounded-[18px] bg-[#F7F8FA] border border-[#E5E7EB] flex items-start gap-4 group hover:border-[#00C8FF] hover:bg-white hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#FF5A00] shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-base font-semibold text-[#061A63] group-hover:text-[#075DFF] transition-colors">
                  {val.title}
                </h4>
                <p className="body-text text-xs text-[#5B6472]">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Values = ValuesSection;
export default ValuesSection;
