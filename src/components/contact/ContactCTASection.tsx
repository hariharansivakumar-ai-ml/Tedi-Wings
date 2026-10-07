import React from "react";
import { Button } from "@/components/common/Button";

export function ContactCTASection() {
  return (
    <section className="section-spacing bg-white">
      <div className="site-container">
        <div className="p-8 md:p-14 rounded-[22px] bg-[#07112B] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-white/10">
          <div className="flex flex-col gap-3 max-w-xl text-center md:text-left">
            <span className="small-label text-[#FF5A00]">Direct Collaboration</span>
            <h3 className="section-heading text-white">
              Prefer an architectural or discovery call?
            </h3>
            <p className="text-sm text-[#D7DCE3]">
              Schedule a 20-minute scoping discussion directly with an engineering lead.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact" variant="orange" showArrow>
              Schedule Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const CTA = ContactCTASection;
export default ContactCTASection;
