import React from "react";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";
import { ServicesGridSection } from "@/components/services/ServicesGridSection";
import { ServiceProcessSection } from "@/components/services/ServiceProcessSection";
import { ServicesTechnologiesSection } from "@/components/services/ServicesTechnologiesSection";
import { ServicesCTASection } from "@/components/services/ServicesCTASection";

export function ServicesPage() {
  return (
    <>
      {/* 01 — Services Hero Section */}
      <ServicesHeroSection />

      {/* 02 — Approach Overview */}
      <ServicesOverviewSection />

      {/* 03 — Detailed Services Grid */}
      <ServicesGridSection />

      {/* 04 — Service Delivery Process */}
      <ServiceProcessSection />

      {/* 05 — Supported Technologies */}
      <ServicesTechnologiesSection />

      {/* 06 — Call To Action */}
      <ServicesCTASection />
    </>
  );
}

export default ServicesPage;
