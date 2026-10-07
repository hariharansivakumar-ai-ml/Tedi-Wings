import React from "react";
import type { Project } from "@/types/project";
import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";

export interface FeaturesSectionProps {
  project?: Project;
}

export function FeaturesSection({ project }: FeaturesSectionProps) {
  const featureList = project?.features?.length
    ? project.features
    : [
        "High-Concurrency Performance Architecture",
        "Role-Based Access Control & Audit Trails",
        "Real-Time Data Streaming & Live Updates",
        "Automated Reporting & Data Export Tools",
      ];

  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-10">
          <SectionTitle
            label="System Capabilities"
            labelColor="orange"
            titlePrimary="Key Features &"
            titleHighlight="Deliverables"
            highlightColor="orange"
            description="Core functional components delivered according to precise project requirements."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureList.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[18px] bg-white border border-[#E5E7EB] hover:border-[#00C8FF] transition-colors flex items-start gap-4 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-[#FF5A00] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold text-[#061A63]">{feat}</h4>
                <p className="body-text text-xs text-[#5B6472]">
                  Engineered for high availability, security, and responsive performance across modern desktop and mobile browsers.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Features = FeaturesSection;
export default FeaturesSection;
