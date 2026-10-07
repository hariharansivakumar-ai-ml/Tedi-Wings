import React from "react";
import { Button } from "@/components/common/Button";
import { SectionTitle } from "@/components/common/SectionTitle";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

export function AboutPreviewSection() {
  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 45% Text Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <SectionTitle
              label="Who We Are"
              labelColor="blue"
              titlePrimary="Technology With"
              titleHighlight="Purpose"
              highlightColor="orange"
            />

            <p className="body-text text-[#5B6472]">
              TeDiWings is a technology studio that turns ideas into fast, reliable and beautiful digital products.
            </p>

            <p className="body-text text-[#5B6472]">
              We combine clean design with solid engineering to build websites, apps and custom software that look sharp, run fast and grow with your business.
            </p>

            <div className="pt-2">
              <Button href="/about" variant="secondary" showArrow>
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* 55% Visual Placeholder Column */}
          <div className="lg:col-span-7">
            <VisualPlaceholder
              label="Engineering With Purpose"
              sublabel="Clean Design · Solid Code · Scalable Architecture"
              minHeight="390px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const Introduction = AboutPreviewSection;
export default AboutPreviewSection;
