import type { Metadata } from "next";
import HomePage from "@/pages/HomePage";

export const metadata: Metadata = {
  title: "TeDiWings Technologies | Web & Software Development",
  description:
    "TeDiWings builds fast, modern websites, apps and custom software for growing businesses. Together We Build, Together We Fly.",
};

export default function Page() {
  return <HomePage />;
}
