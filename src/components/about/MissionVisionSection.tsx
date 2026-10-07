import React from "react";
import { Compass, Target } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 rounded-[20px] bg-white border border-[#E5E7EB] shadow-sm flex flex-col gap-4 hover:border-[#00C8FF] hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#075DFF]/10 flex items-center justify-center text-[#075DFF]">
              <Target className="w-6 h-6" />
            </div>
            <span className="small-label text-[#075DFF]">Our Mission</span>
            <h3 className="text-[18px] font-semibold text-[#061A63] leading-snug">
              Growth Through Thoughtful Technology
            </h3>
            <p className="body-text text-sm text-[#5B6472]">
              To help businesses grow through thoughtful technology. We design and build fast, reliable and modern software that solves real operational challenges.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-[20px] bg-white border border-[#E5E7EB] shadow-sm flex flex-col gap-4 hover:border-[#FF5A00]/40 hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00]">
              <Compass className="w-6 h-6" />
            </div>
            <span className="small-label text-[#FF5A00]">Our Vision</span>
            <h3 className="text-[18px] font-semibold text-[#061A63] leading-snug">
              A Trusted Partner For Ambitious Brands
            </h3>
            <p className="body-text text-sm text-[#5B6472]">
              To be a trusted technology partner for ambitious brands: <strong className="text-[#061A63] font-semibold">Together We Build, Together We Fly.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export const MissionVision = MissionVisionSection;
export default MissionVisionSection;
