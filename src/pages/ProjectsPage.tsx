"use client";

import React, { useState } from "react";
import { ProjectsHeroSection } from "@/components/projects/ProjectsHeroSection";
import { ProjectFilterSection } from "@/components/projects/ProjectFilterSection";
import { FeaturedProjectSection } from "@/components/projects/FeaturedProjectSection";
import { ProjectGridSection } from "@/components/projects/ProjectGridSection";
import { ProjectsCTASection } from "@/components/projects/ProjectsCTASection";

export function ProjectsPage() {
  const [, setSelectedCategory] = useState<string>("All");

  return (
    <>
      {/* 01 — Projects Hero Section */}
      <ProjectsHeroSection />

      {/* 02 — Project Filter Section */}
      <ProjectFilterSection onSelectCategory={setSelectedCategory} />

      {/* 03 — Featured Flagship Project */}
      <FeaturedProjectSection />

      {/* 04 — Project Grid Section */}
      <ProjectGridSection />

      {/* 05 — Call To Action */}
      <ProjectsCTASection />
    </>
  );
}

export default ProjectsPage;
