import React from "react";
import { Button } from "@/components/common/Button";

export function ProjectDetailCTASection() {
  return (
    <section className="section-spacing bg-white">
      <div className="site-container">
        <div className="p-8 md:p-14 rounded-[22px] bg-[#050505] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl border border-white/10">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-[12px] font-semibold tracking-[2px] uppercase text-[#FF5A00]">
              Start a Conversation
            </span>
            <h2 className="section-heading text-white">
              <span>Let&apos;s Build Something</span>{" "}
              <span className="text-[#00C8FF]">Great</span>
            </h2>
            <p className="text-[#D7DCE3] text-sm leading-relaxed">
              Have an idea or a project in mind? Tell us about it.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Button
              href="/contact"
              variant="orange"
              showArrow
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const CTA = ProjectDetailCTASection;
export default ProjectDetailCTASection;
