import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";

export function ServiceProcessSection() {
  const steps = [
    { num: "01", title: "Scoping & Architecture", desc: "Precise definition of technical criteria, system boundaries, and milestone roadmaps." },
    { num: "02", title: "Iterative Sprint Delivery", desc: "High-velocity weekly releases backed by automated CI/CD pipelines and type safety." },
    { num: "03", title: "Verification & Audit", desc: "Rigorous QA testing, load simulation, security scanning, and code reviews." },
    { num: "04", title: "Go-Live & Evolution", desc: "Zero-downtime deployment sign-off, telemetry setup, and continuous support." },
  ];

  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-12">
          <SectionTitle
            label="EXECUTION METHODOLOGY"
            titlePrimary="OUR SERVICE"
            titleHighlight="DELIVERY PROCESS"
            highlightColor="orange"
            description="Systematic engineering workflows ensuring on-time milestones, architectural transparency, and clean production code."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-6 rounded-[18px] bg-[#F7F8FA] border border-[#E5E7EB] flex flex-col gap-3 group hover:border-[#00C8FF] hover:-translate-y-1 transition-all shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#061A63] text-white flex items-center justify-center font-bold text-base group-hover:bg-[#FF5A00] transition-colors">
                {st.num}
              </div>
              <h4 className="text-base font-semibold text-[#061A63] mt-1">{st.title}</h4>
              <p className="body-text text-xs text-[#5B6472]">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Process = ServiceProcessSection;
export default ServiceProcessSection;
