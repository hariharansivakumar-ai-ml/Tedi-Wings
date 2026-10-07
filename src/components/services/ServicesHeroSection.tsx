import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";

export function ServicesHeroSection() {
  return (
    <section className="pt-20 pb-12 bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="max-w-3xl">
          <SectionTitle
            isHero
            label="What We Do"
            labelColor="orange"
            titlePrimary="Our"
            titleHighlight="Services"
            highlightColor="orange"
            description="From first idea to final launch, we build it all."
          />
        </div>
      </div>
    </section>
  );
}

export const Hero = ServicesHeroSection;
export default ServicesHeroSection;
