import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

interface ProjectCardProps {
  project?: Project;
  layout?: "large" | "grid";
  theme?: "light" | "dark";
  className?: string;
}

export function ProjectCard({
  project,
  layout = "grid",
  theme = "light",
  className = "",
}: ProjectCardProps) {
  const isLarge = layout === "large";
  const isDark = theme === "dark";
  const slug = project?.slug || "project-preview";
  const category = project?.category || "Web App";
  const title = project?.title || "Digital Platform Architecture";
  const description =
    project?.description ||
    "High-performance digital system built with clean engineering and modern web technologies.";
  const technologies = project?.technologies?.length
    ? project.technologies
    : ["Next.js", "TypeScript", "Tailwind CSS"];

  return (
    <Link
      href={`/projects/${slug}`}
      className={`group block rounded-[18px] transition-all duration-300 ease-out overflow-hidden ${
        isDark
          ? "bg-[#050505] text-white border border-white/10 hover:border-[#00C8FF]/50 hover:-translate-y-1 shadow-lg"
          : "bg-white text-[#061A63] border border-[#E5E7EB] hover:border-[#00C8FF] hover:-translate-y-1 shadow-sm hover:shadow-md"
      } ${isLarge ? "p-6 md:p-8" : "p-6"} ${className}`}
    >
      {/* Project Visual Area */}
      <div
        className={`relative w-full rounded-xl overflow-hidden mb-6 ${
          isDark
            ? "bg-[#07112B] border border-white/10"
            : "bg-[#F7F8FA] border border-[#E5E7EB]"
        }`}
      >
        {project?.image ? (
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes={
                isLarge
                  ? "(max-width: 1240px) 100vw, 1200px"
                  : "(max-width: 768px) 100vw, 500px"
              }
            />
          </div>
        ) : (
          <VisualPlaceholder
            label="Project Visual Area"
            sublabel="Application Screenshot / Demo Viewport"
            minHeight={isLarge ? "380px" : "240px"}
            theme={theme}
          />
        )}

        {/* Hover brand micro-accent top strip: Electric Blue to Orange gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#075DFF] via-[#00C8FF] to-[#FF5A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Metadata & Content */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[1.6px] uppercase text-[#075DFF] group-hover:text-[#FF5A00] transition-colors">
            {category}
          </span>
          <span className="text-[11px] text-[#5B6472] font-medium">Production</span>
        </div>

        <h3
          className={`font-semibold transition-colors duration-200 leading-snug ${
            isDark
              ? "text-white group-hover:text-[#00C8FF]"
              : "text-[#061A63] group-hover:text-[#075DFF]"
          } ${isLarge ? "text-lg md:text-xl" : "text-base"}`}
        >
          {title}
        </h3>

        <p
          className={`body-text text-sm line-clamp-2 ${
            isDark ? "!text-[#D7DCE3]" : "!text-[#5B6472]"
          }`}
        >
          {description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`tech-tag ${
                isDark
                  ? "!bg-white/5 !text-[#D7DCE3] !border-white/10 hover:!border-[#00C8FF]/40"
                  : ""
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link Indicator */}
        <div
          className={`pt-3 mt-1 border-t flex items-center justify-between text-[13px] font-semibold transition-colors ${
            isDark
              ? "border-white/10 text-white group-hover:text-[#00C8FF]"
              : "border-[#E5E7EB] text-[#075DFF] group-hover:text-[#00C8FF]"
          }`}
        >
          <span>View Project →</span>
          <ArrowUpRight className="w-4 h-4 text-[#FF5A00] transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
