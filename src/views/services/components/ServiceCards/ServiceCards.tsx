import React from "react";
import { servicesData, ServiceDetail } from "@/data/services.data";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ServiceCards() {
  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service: ServiceDetail) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-[18px] border border-[#E5E7EB] hover:border-[#00C8FF] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#FF5A00] uppercase">
                    {service.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#5B6472] group-hover:text-[#075DFF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="text-[16px] font-semibold text-[#061A63] group-hover:text-[#075DFF] transition-colors mb-2.5 leading-snug">
                  {service.title}
                </h3>

                <p className="body-text text-sm text-[#5B6472] mb-5">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="flex flex-col gap-2 pt-4 border-t border-[#E5E7EB]">
                  <span className="text-[11px] font-semibold tracking-wider text-[#5B6472] uppercase">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[12.5px] text-[#061A63] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#075DFF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E7EB]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#075DFF] group-hover:text-[#FF5A00] uppercase tracking-wider transition-colors"
                >
                  <span>REQUEST SERVICE SCOPE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
