import type { Metadata } from "next";
import { projects } from "@/data/projects.data";
import ProjectDetailPage from "@/pages/ProjectDetailPage";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const title =
    project?.title ||
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return {
    title: `${title} | TeDiWings Technologies`,
    description:
      project?.description ||
      "Technical project documentation, architectural overview, and delivery details by TeDiWings Technologies.",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) || {
    slug,
    title: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    category: "Web Application",
    description:
      "A fast, modern digital solution engineered to perform and scale.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  };

  return <ProjectDetailPage project={project} slug={slug} />;
}
