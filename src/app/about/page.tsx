import type { Metadata } from "next";
import AboutPage from "@/pages/AboutPage";

export const metadata: Metadata = {
  title: "About TeDiWings Technologies",
  description:
    "Meet the team behind TeDiWings, a technology studio building clean, reliable and beautiful digital products.",
};

export default function Page() {
  return <AboutPage />;
}
