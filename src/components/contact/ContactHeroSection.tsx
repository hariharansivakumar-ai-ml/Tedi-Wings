import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";

export function ContactHeroSection() {
  return (
    <section className="pt-20 pb-12 bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="max-w-3xl">
          <SectionTitle
            isHero
            label="Contact Us"
            titlePrimary="Get In"
            titleHighlight="Touch"
            highlightColor="orange"
            description="Tell us about your project. We'll reply within 1–2 business days."
          />
        </div>
      </div>
    </section>
  );
}

export const Hero = ContactHeroSection;
export default ContactHeroSection;
