import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export function HomePage() {
  return (
    <>
      {/* 01 — Hero Section */}
      <HeroSection />

      {/* 02 — About Preview Section */}
      <AboutPreviewSection />

      {/* 03 — Services Section */}
      <ServicesSection />

      {/* 04 — Featured Projects Section */}
      <ProjectsSection />

      {/* 05 — Technology Stack */}
      <TechnologiesSection />

      {/* 06 — Why Work With Us */}
      <WhyUsSection />

      {/* 07 — Project Process */}
      <ProcessSection />

      {/* 08 — Industries / Domains */}
      <IndustriesSection />

      {/* 09 — Selected Work Deep-Dive */}
      <SelectedWorkSection />

      {/* 10 — Client Testimonials */}
      <TestimonialsSection />

      {/* 11 — FAQ (AEO & Search Optimised) */}
      <FAQSection />

      {/* 12 — Call To Action */}
      <CTASection />
    </>
  );
}

export default HomePage;
