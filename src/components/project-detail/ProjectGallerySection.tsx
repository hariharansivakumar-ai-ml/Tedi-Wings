import React from "react";
import Image from "next/image";
import type { Project } from "@/types/project";
import { SectionTitle } from "@/components/common/SectionTitle";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

export interface ProjectGallerySectionProps {
  project?: Project;
}

export function ProjectGallerySection({ project }: ProjectGallerySectionProps) {
  const images = project?.gallery || [];

  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-10">
          <SectionTitle
            label="VISUAL DOCUMENTATION"
            titlePrimary="PROJECT INTERFACE &"
            titleHighlight="SYSTEM GALLERY"
            highlightColor="orange"
            description="High-resolution production captures, analytics dashboards, workflow diagrams, and responsive interface viewports."
          />
        </div>

        {/* Gallery Grid: 1 Large Top Feature + 2 Side-by-Side Images */}
        <div className="flex flex-col gap-6">
          {/* Main Showcase Image */}
          <div className="w-full rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm">
            {images[0] ? (
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={images[0]}
                  alt="Project Primary View"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            ) : (
              <VisualPlaceholder
                label="FEATURED SYSTEM INTERFACE CAPTURE"
                sublabel="RESERVED FOR DESKTOP DASHBOARD / PRIMARY APPLICATION VIEWPORT"
                minHeight="380px"
              />
            )}
          </div>

          {/* Sub Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm">
              {images[1] ? (
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={images[1]}
                    alt="Project Secondary View"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              ) : (
                <VisualPlaceholder
                  label="SECONDARY WORKFLOW CAPTURE"
                  sublabel="RESERVED FOR ANALYTICS MODULE / SECONDARY USER JOURNEY"
                  minHeight="280px"
                />
              )}
            </div>

            <div className="w-full rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm">
              {images[2] ? (
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={images[2]}
                    alt="Project Detail View"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              ) : (
                <VisualPlaceholder
                  label="MOBILE / COMPONENT INTERACTION CAPTURE"
                  sublabel="RESERVED FOR MOBILE BREAKPOINT / UI COMPONENT DETAILS"
                  minHeight="280px"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Gallery = ProjectGallerySection;
export default ProjectGallerySection;
