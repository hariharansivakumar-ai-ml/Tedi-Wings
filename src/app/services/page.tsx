import type { Metadata } from "next";
import ServicesPage from "@/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Web, App & Software Services | TeDiWings",
  description:
    "Web development, mobile apps, custom software, UI/UX design and automation from TeDiWings Technologies.",
};

export default function Page() {
  return <ServicesPage />;
}
