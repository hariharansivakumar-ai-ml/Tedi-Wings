"use client";

import React, { useState } from "react";
import { projectFilterCategories } from "@/data/projects.data";

export interface ProjectFilterSectionProps {
  onSelectCategory?: (category: string) => void;
}

export function ProjectFilterSection({ onSelectCategory }: ProjectFilterSectionProps) {
  const [selected, setSelected] = useState<string>("All");

  const handleSelect = (cat: string) => {
    setSelected(cat);
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
  };

  return (
    <div className="py-8 bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-semibold text-[#061A63] uppercase tracking-wider mr-2 shrink-0">
            Category:
          </span>
          {projectFilterCategories.map((category) => {
            const isActive = selected === category;

            return (
              <button
                key={category}
                onClick={() => handleSelect(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#061A63] text-white shadow-sm"
                    : "bg-white text-[#5B6472] border border-[#E5E7EB] hover:border-[#00C8FF] hover:text-[#061A63]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const ProjectFilters = ProjectFilterSection;
export default ProjectFilterSection;
