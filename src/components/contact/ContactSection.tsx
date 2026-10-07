import React from "react";
import { ContactInfoSection } from "./ContactInfoSection";
import { ContactFormSection } from "./ContactFormSection";

export function ContactSection() {
  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <ContactInfoSection />
          </div>
          <div className="lg:col-span-7">
            <ContactFormSection />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
