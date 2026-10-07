import React from "react";
import type { Project } from "@/types/project";
import { TrendingUp, Zap, Clock, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";

export interface ResultsSectionProps {
  project?: Project;
}

export function ResultsSection({ project }: ResultsSectionProps) {
  const defaultMetrics = [
    { icon: Zap, label: "Latency Reduction", value: "-65%", color: "text-[#FF5A00]" },
    { icon: TrendingUp, label: "Throughput Boost", value: "10x", color: "text-[#075DFF]" },
    { icon: Clock, label: "Deployment Frequency", value: "Daily", color: "text-[#FF7A00]" },
    { icon: ShieldCheck, label: "Uptime Reliability", value: "99.99%", color: "text-[#00C8FF]" },
  ];

  return (
    <section className="section-spacing bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="mb-10">
          <SectionTitle
            label="Performance Benchmarks"
            labelColor="blue"
            titlePrimary="Project Impact &"
            titleHighlight="Key Results"
            highlightColor="orange"
            description="Verifiable performance improvements and real business outcomes achieved post-launch."
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {defaultMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-[18px] bg-[#F7F8FA] border border-[#E5E7EB] flex flex-col items-center justify-center text-center gap-2 group hover:border-[#00C8FF] hover:-translate-y-1 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center ${metric.color} mb-1 shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-[#061A63]">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-[#5B6472] tracking-wider uppercase">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Results = ResultsSection;
export default ResultsSection;
