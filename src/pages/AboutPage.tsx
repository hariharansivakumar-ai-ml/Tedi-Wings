import React from "react";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { CompanyOverviewSection } from "@/components/about/CompanyOverviewSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { JourneySection } from "@/components/about/JourneySection";
import { TeamSection } from "@/components/about/TeamSection";
import { CapabilitiesSection } from "@/components/about/CapabilitiesSection";
import { AboutCTASection } from "@/components/about/AboutCTASection";

export function AboutPage() {
  return (
    <>
      {/* 01 — About Hero Section */}
      <AboutHeroSection />

      {/* 02 — Company Overview & Quick Facts */}
      <CompanyOverviewSection />

      {/* 03 — Mission & Vision */}
      <MissionVisionSection />

      {/* 04 — Core Values */}
      <ValuesSection />

      {/* 05 — Evolution Journey */}
      <JourneySection />

      {/* 06 — Leadership & Engineering Team */}
      <TeamSection />

      {/* 07 — Technical Capabilities */}
      <CapabilitiesSection />

      {/* 08 — Call To Action */}
      <AboutCTASection />
    </>
  );
}

export default AboutPage;
