import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

export function ServicesOverviewSection() {
  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-5">
            <SectionTitle
              label="Our Approach"
              labelColor="blue"
              titlePrimary="Technology With"
              titleHighlight="Purpose"
              highlightColor="orange"
              description="TeDiWings is a technology studio that turns ideas into fast, reliable and beautiful digital products."
            />
            <p className="body-text text-sm text-[#5B6472]">
              Every system we deliver is backed by well-structured code, scalable architecture, and proactive support. <strong className="text-[#061A63] font-semibold">Together We Build, Together We Fly.</strong>
            </p>
          </div>

          <div className="lg:col-span-6">
            <VisualPlaceholder
              label="Full-Cycle Engineering"
              sublabel="From first idea to final launch, we build it all"
              minHeight="340px"
              theme="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const ServicesOverview = ServicesOverviewSection;
export default ServicesOverviewSection;
