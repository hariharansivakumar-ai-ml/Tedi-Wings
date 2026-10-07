import React from "react";
import { Button } from "@/components/common/Button";

export function CTASection() {
  return (
    <section className="section-spacing bg-white">
      <div className="site-container">
        <div className="relative rounded-[24px] bg-[#050505] text-white p-8 md:p-16 overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle Background Glows: Electric Blue & Warm Orange */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00C8FF]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#FF5A00]/15 blur-3xl pointer-events-none" />

          {/* Grid pattern accent */}
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-2xl flex flex-col gap-6">
            <span className="text-[11px] font-semibold tracking-[1.8px] uppercase text-[#FF5A00]">
              Get In Touch
            </span>

            <h2 className="section-heading text-white">
              <span>Let&apos;s Build</span>{" "}
              <span className="text-[#00C8FF]">Something Great</span>
            </h2>

            <p className="text-[#D7DCE3] text-base leading-relaxed">
              Have an idea or a project in mind? Tell us about it.
            </p>

            <div className="text-xs font-semibold tracking-wider text-[#D7DCE3] uppercase">
              Together We Build, Together We Fly.
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="orange" showArrow>
                Start a Project
              </Button>
              <Button
                href="/projects"
                variant="secondary"
                className="!text-white !border-white/20 hover:!border-white hover:!bg-white/10"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const CTA = CTASection;
export default CTASection;
