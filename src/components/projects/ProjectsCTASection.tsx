import React from "react";
import { Button } from "@/components/common/Button";

export function ProjectsCTASection() {
  return (
    <section className="section-spacing bg-white">
      <div className="site-container">
        <div className="p-8 md:p-14 rounded-[22px] bg-[#07112B] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-white/10">
          <div className="flex flex-col gap-3 max-w-xl text-center md:text-left">
            <span className="small-label text-[#FF5A00]">Launch Your Solution</span>
            <h3 className="section-heading text-white">
              Have a product or custom platform in mind?
            </h3>
            <p className="text-sm text-[#D7DCE3]">
              Let&apos;s talk through your goals, scope, and technical roadmap.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact" variant="orange" showArrow>
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const CTA = ProjectsCTASection;
export default ProjectsCTASection;
