import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

export function SelectedWorkSection() {
  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <VisualPlaceholder
              label="Selected Project Demonstration"
              sublabel="Interactive Demo / Production Platform"
              minHeight="400px"
              theme="light"
            />
          </div>

          {/* Editorial / Callout Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2">
            <SectionTitle
              label="Selected Work"
              labelColor="orange"
              titlePrimary="Delivering Value"
              titleHighlight="Through Software"
              highlightColor="orange"
              description="We focus on clean code, smooth user experiences, and measurable business growth."
            />

            <div className="flex flex-col gap-3.5 p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold text-[#061A63]">
                <span>System Performance &amp; Speed</span>
                <span className="text-[#FF5A00] font-bold">Optimized</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#F7F8FA] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#075DFF] via-[#00C8FF] to-[#FF5A00] w-4/5 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#061A63] pt-2 border-t border-[#E5E7EB]">
                <span>Code Quality &amp; Structure</span>
                <span className="text-[#075DFF] font-bold">Production Ready</span>
              </div>
            </div>

            <div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#075DFF] hover:text-[#00C8FF] transition-colors group"
              >
                <span>Explore All Projects</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF5A00] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const SelectedWork = SelectedWorkSection;
export default SelectedWorkSection;
