import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { homeWhyUsData } from "@/data/home.data";

export function WhyUsSection() {
  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Editorial Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <SectionTitle
              label="Why TeDiWings"
              labelColor="orange"
              titlePrimary="Built"
              titleHighlight="Different"
              highlightColor="orange"
              description="Simple updates, well-structured code, and intentional design. We build digital products that scale smoothly with your business."
            />
            <p className="body-text text-sm text-[#5B6472]">
              We work in close collaboration with you from day one, embodying our core promise: <strong className="text-[#061A63] font-semibold">Together We Build, Together We Fly.</strong>
            </p>
          </div>

          {/* Right Column: 4 Feature Items */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {homeWhyUsData.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-[18px] bg-[#F7F8FA] border border-[#E5E7EB] hover:border-[#00C8FF] hover:bg-white transition-all duration-300 flex flex-col gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF5A00]" />
                  <h3 className="text-[15px] font-semibold text-[#061A63] group-hover:text-[#075DFF] transition-colors">
                    {item.title}
                  </h3>
                </div>
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

export const WhyUs = WhyUsSection;
export default WhyUsSection;
