import React from "react";
import type { Project } from "@/types/project";
import { AlertCircle } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";

export interface ChallengeSectionProps {
  project?: Project;
}

export function ChallengeSection({ project }: ChallengeSectionProps) {
  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="max-w-3xl flex flex-col gap-6">
          <SectionTitle
            label="The Challenge"
            labelColor="orange"
            titlePrimary="Key Constraints &"
            titleHighlight="Technical Hurdles"
            highlightColor="orange"
            description={
              project?.challenge ||
              "Addressing scalability, high concurrency, and data security requirements while keeping the user experience seamless."
            }
          />

          <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] flex items-start gap-4 shadow-sm">
            <AlertCircle className="w-5 h-5 text-[#FF5A00] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#061A63]">
                Core Architecture Requirement
              </span>
              <p className="body-text text-xs text-[#5B6472]">
                The application needed to deliver sub-second response times, rock-solid security, and an intuitive user flow without downtime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Challenge = ChallengeSection;
export default ChallengeSection;
