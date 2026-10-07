import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";

export function CompanyOverviewSection() {
  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 flex flex-col gap-5">
            <SectionTitle
              label="Brand Overview"
              labelColor="blue"
              titlePrimary="Technology With"
              titleHighlight="Purpose"
              highlightColor="orange"
              description="TeDiWings Technologies is a technology studio that designs and builds websites, mobile apps and custom software for growing businesses. Its motto is &quot;Together We Build, Together We Fly.&quot;"
            />
            <p className="body-text text-sm text-[#5B6472]">
              We believe great technology should feel simple. By pairing modern design with clean engineering, we help growing brands launch fast and scale with confidence.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#075DFF] uppercase tracking-wider">
                &quot;Together We Build, Together We Fly.&quot;
              </span>
            </div>
          </div>

          {/* Quick Facts Block */}
          <div className="lg:col-span-6">
            <div className="p-7 rounded-[18px] bg-[#F7F8FA] border border-[#E5E7EB] shadow-sm">
              <span className="small-label text-[#FF5A00] block mb-4">
                Quick Facts
              </span>
              <div className="divide-y divide-[#E5E7EB] text-sm">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#5B6472] font-medium">Company</span>
                  <span className="font-semibold text-[#061A63]">TeDiWings Technologies</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#5B6472] font-medium">Type</span>
                  <span className="font-semibold text-[#061A63]">Technology / software studio</span>
                </div>
                <div className="py-2.5 flex items-start justify-between gap-4">
                  <span className="text-[#5B6472] font-medium shrink-0">Services</span>
                  <span className="font-semibold text-[#061A63] text-right">
                    Web, mobile apps, software, UI/UX, automation, support
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#5B6472] font-medium">Motto</span>
                  <span className="font-semibold text-[#075DFF]">Together We Build, Together We Fly.</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#5B6472] font-medium">Focus</span>
                  <span className="font-semibold text-[#061A63]">Fast, reliable &amp; beautiful products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Introduction = CompanyOverviewSection;
export default CompanyOverviewSection;
