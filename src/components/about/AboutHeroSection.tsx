import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";

export function AboutHeroSection() {
  return (
    <section className="pt-20 pb-12 bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="max-w-3xl">
          <SectionTitle
            isHero
            label="About Us"
            labelColor="orange"
            titlePrimary="Together We Build,"
            titleHighlight="Together We Fly"
            highlightColor="orange"
            description="TeDiWings Technologies is a team of developers and designers who believe great technology should feel simple. We combine clean design with solid engineering to build digital products that look sharp, run fast and grow with your business."
          />
        </div>
      </div>
    </section>
  );
}

export const Hero = AboutHeroSection;
export default AboutHeroSection;
