import React from "react";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

export function MapSection() {
  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="small-label text-[#075DFF]">PHYSICAL PRESENCE</span>
            <h3 className="section-heading text-[#061A63]">
              <span>STUDIO LAB &amp;</span>{" "}
              <span className="text-[#00C8FF]">HEADQUARTERS LOCATION</span>
            </h3>
            <p className="body-text text-sm text-[#5B6472]">
              Engineering studio coordinates and regional client consultation offices.
            </p>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-[#E5E7EB]">
            <VisualPlaceholder
              label="STUDIO MAP &amp; COORDINATES"
              sublabel="RESERVED FOR VECTOR MAP EMBED"
              minHeight="320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const LocationMap = MapSection;
export default MapSection;
