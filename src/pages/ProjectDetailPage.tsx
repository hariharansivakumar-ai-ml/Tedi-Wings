import React from "react";
import type { Project } from "@/types/project";
import { ProjectDetailHero } from "@/components/project-detail/ProjectDetailHero";
import { ProjectOverviewSection } from "@/components/project-detail/ProjectOverviewSection";
import { ChallengeSection } from "@/components/project-detail/ChallengeSection";
import { SolutionSection } from "@/components/project-detail/SolutionSection";
import { TechnologiesSection } from "@/components/project-detail/TechnologiesSection";
import { ProjectGallerySection } from "@/components/project-detail/ProjectGallerySection";
import { FeaturesSection } from "@/components/project-detail/FeaturesSection";
import { ResultsSection } from "@/components/project-detail/ResultsSection";
import { RelatedProjectsSection } from "@/components/project-detail/RelatedProjectsSection";
import { ProjectDetailCTASection } from "@/components/project-detail/ProjectDetailCTASection";

export interface ProjectDetailPageProps {
  project?: Project;
  slug?: string;
}

export function ProjectDetailPage({ project, slug }: ProjectDetailPageProps) {
  const currentSlug = slug || project?.slug || "";

  return (
    <>
      {/* 01 — Project Detail Hero */}
      <ProjectDetailHero project={project} />

      {/* 02 — Project Overview & Key Metadata */}
      <ProjectOverviewSection project={project} />

      {/* 03 — Technical Challenge */}
      <ChallengeSection project={project} />

      {/* 04 — Architectural Solution */}
      <SolutionSection project={project} />

      {/* 05 — Technology Stack */}
      <TechnologiesSection project={project} />

      {/* 06 — Project Gallery */}
      <ProjectGallerySection project={project} />

      {/* 07 — Key Features */}
      <FeaturesSection project={project} />

      {/* 08 — Results & Performance Benchmarks */}
      <ResultsSection project={project} />

      {/* 09 — Related Projects */}
      <RelatedProjectsSection currentSlug={currentSlug} />

      {/* 10 — Call To Action */}
      <ProjectDetailCTASection />
    </>
  );
}

export default ProjectDetailPage;
