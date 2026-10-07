import React from "react";
import { Terminal, Box, Cloud, Shield, Cpu, Code2, Server, Smartphone } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { homeTechnologiesData } from "@/data/home.data";

const TECH_ICONS = [Terminal, Box, Cloud, Shield, Cpu, Code2, Server, Smartphone];

export function TechnologiesSection() {
  return (
    <section className="section-spacing bg-[#07112B] text-white relative overflow-hidden border-b border-white/10">
      {/* Dark Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern-dark opacity-30 pointer-events-none" />

      {/* Ambient Electric Blue & Amber Glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00C8FF]/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#FF5A00]/8 blur-[100px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="mb-12">
          <SectionTitle
            label="Tooling & Stack"
            labelColor="blue"
            titlePrimary="Modern Technology"
            titleHighlight="Stack"
            highlightColor="blue"
            theme="dark"
            description="Proven, modern frameworks and cloud tools chosen for performance, speed, and long-term reliability."
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {homeTechnologiesData.map((tech, idx) => {
            const Icon = TECH_ICONS[idx % TECH_ICONS.length];

            return (
              <div
                key={tech.id}
                className="bg-[#050505] p-6 rounded-[18px] border border-white/10 hover:border-[#00C8FF]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00C8FF] group-hover:text-[#FF5A00] group-hover:bg-[#FF5A00]/10 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[13px] font-semibold text-white tracking-wide">
                  {tech.name}
                </span>
                <span className="text-[10px] font-medium text-[#D7DCE3] tracking-wider uppercase">
                  Production Stack
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Technologies = TechnologiesSection;
export default TechnologiesSection;
