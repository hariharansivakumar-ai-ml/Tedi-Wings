import React from "react";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { MapSection } from "@/components/contact/MapSection";
import { ContactCTASection } from "@/components/contact/ContactCTASection";

export function ContactPage() {
  return (
    <>
      {/* 01 — Contact Hero Section */}
      <ContactHeroSection />

      {/* 02 — Contact Info & Contact Form Section */}
      <ContactSection />

      {/* 03 — Location Map Section */}
      <MapSection />

      {/* 04 — Call To Action */}
      <ContactCTASection />
    </>
  );
}

export default ContactPage;
