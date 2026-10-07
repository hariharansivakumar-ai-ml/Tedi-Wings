import type { Metadata } from "next";
import ProjectsPage from "@/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Our Projects | TeDiWings Technologies",
  description:
    "Explore websites, apps and software built by TeDiWings Technologies. See how we turn ideas into results.",
};

export default function Page() {
  return <ProjectsPage />;
}
