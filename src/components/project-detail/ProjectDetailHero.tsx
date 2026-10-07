import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/types/project";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

export interface ProjectDetailHeroProps {
  project?: Project;
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const category = project?.category || "Web Application";
  const title = project?.title || "Digital Platform";
  const description =
    project?.description ||
    "A fast, scalable digital solution designed and built to perform.";
  const technologies = project?.technologies?.length
    ? project.technologies
    : ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"];

  return (
    <section className="pt-12 pb-16 bg-white border-b border-[#E5E7EB]">
      <div className="site-container">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#075DFF] hover:text-[#FF5A00] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="max-w-4xl flex flex-col gap-5 mb-10">
          <span className="small-label text-[#FF5A00]">{category}</span>

          <h1 className="hero-heading text-[#061A63]">
            <span>{title}</span>
          </h1>

          <p className="body-text text-base text-[#5B6472]">{description}</p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag text-xs py-1 px-3">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Large Project Visual Area */}
        <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB]">
          {project?.image ? (
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={project.image}
                alt={title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1240px) 100vw, 1200px"
              />
            </div>
          ) : (
            <VisualPlaceholder
              label="Project Preview"
              sublabel="High-resolution interface and demonstration viewport"
              minHeight="480px"
              theme="light"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export const Hero = ProjectDetailHero;
export default ProjectDetailHero;
