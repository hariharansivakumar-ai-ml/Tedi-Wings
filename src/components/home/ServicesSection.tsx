import React from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Code, Globe, Shield, Database } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { homeServicesData } from "@/data/home.data";

const ICONS = [Cpu, Layers, Code, Globe, Shield, Database];

export function ServicesSection() {
  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-12">
          <SectionTitle
            label="What We Do"
            labelColor="blue"
            titlePrimary="Our"
            titleHighlight="Services"
            highlightColor="orange"
            description="Everything you need to launch and grow online."
          />
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServicesData.map((service, index) => {
            const IconComponent = ICONS[index % ICONS.length];

            return (
              <div
                key={service.id}
                className="group relative bg-white p-7 rounded-[18px] border border-[#E5E7EB] hover:border-[#00C8FF] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Row: Icon & Arrow Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-center justify-center text-[#061A63] group-hover:text-[#075DFF] group-hover:border-[#00C8FF]/40 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#5B6472] group-hover:text-[#FF5A00] transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[16px] font-semibold text-[#061A63] group-hover:text-[#075DFF] transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="body-text text-sm text-[#5B6472] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-5 mt-4 border-t border-[#E5E7EB]">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#075DFF] group-hover:text-[#00C8FF] uppercase transition-colors"
                  >
                    <span>View Service →</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Services = ServicesSection;
export default ServicesSection;
