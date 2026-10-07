import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Terminal, Database, Server, Smartphone, Layers, ShieldCheck } from "lucide-react";

export function ServicesTechnologiesSection() {
  const tools = [
    { icon: Terminal, name: "Enterprise Runtimes" },
    { icon: Database, name: "Distributed Data" },
    { icon: Server, name: "Cloud Infrastructure" },
    { icon: Smartphone, name: "Cross-Platform" },
    { icon: Layers, name: "API Protocols" },
    { icon: ShieldCheck, name: "Security & QA" },
  ];

  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-10">
          <SectionTitle
            label="TOOLING & ECOSYSTEM"
            titlePrimary="SUPPORTED"
            titleHighlight="TECHNOLOGIES"
            highlightColor="blue"
            description="We employ modern, battle-tested, and secure technologies engineered for high-scale enterprise operations."
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-[18px] border border-[#E5E7EB] flex flex-col items-center justify-center text-center gap-2.5 shadow-sm group hover:border-[#00C8FF] hover:-translate-y-1 transition-all"
              >
                <Icon className="w-5 h-5 text-[#075DFF] group-hover:text-[#FF5A00] transition-colors" />
                <span className="text-xs font-semibold text-[#061A63]">{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Technologies = ServicesTechnologiesSection;
export default ServicesTechnologiesSection;
