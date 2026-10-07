import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Check } from "lucide-react";

export function CapabilitiesSection() {
  const caps = [
    "High-Throughput System Architecture",
    "Next.js & React Enterprise Frontends",
    "Cloud Orchestration & Scalable Infra",
    "Database Benchmarking & Schema Design",
    "Strict Type-Safe TypeScript Standards",
    "CI/CD Automation & Quality Assurance",
  ];

  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-10">
          <SectionTitle
            label="INSTITUTIONAL STRENGTHS"
            titlePrimary="OUR TECHNICAL"
            titleHighlight="CAPABILITIES"
            highlightColor="orange"
            description="Structural capability overview: disciplined engineering practices backed by modern toolchains and rigorous testing."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caps.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E5E7EB] flex items-center gap-3.5 shadow-sm hover:border-[#00C8FF] hover:-translate-y-0.5 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FF5A00]/10 text-[#FF5A00] flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-[#061A63]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Capabilities = CapabilitiesSection;
export default CapabilitiesSection;
