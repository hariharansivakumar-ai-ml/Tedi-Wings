import React from "react";
import { ArrowUpRight, Building2, Briefcase, Activity, Landmark, ShieldCheck, ShoppingCart } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { homeIndustriesData } from "@/data/home.data";

const INDUSTRY_ICONS = [Building2, Briefcase, Activity, Landmark, ShieldCheck, ShoppingCart];

export function IndustriesSection() {
  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-12">
          <SectionTitle
            label="Domains & Sectors"
            labelColor="blue"
            titlePrimary="Industries We"
            titleHighlight="Serve"
            highlightColor="orange"
            description="Tailored digital products and custom software built for high-growth businesses and enterprise teams."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeIndustriesData.map((ind, idx) => {
            const Icon = INDUSTRY_ICONS[idx % INDUSTRY_ICONS.length];

            return (
              <div
                key={ind.id}
                className="p-6 rounded-[18px] bg-[#F7F8FA] border border-[#E5E7EB] hover:border-[#00C8FF] hover:bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#061A63] group-hover:text-[#075DFF] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#061A63] group-hover:text-[#075DFF] transition-colors">
                      {ind.name}
                    </h3>
                    <span className="text-[11px] text-[#5B6472] font-medium uppercase tracking-wider">
                      Domain Solution
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#5B6472] group-hover:text-[#FF5A00] transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Industries = IndustriesSection;
export default IndustriesSection;
