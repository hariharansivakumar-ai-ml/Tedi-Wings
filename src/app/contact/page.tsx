import type { Metadata } from "next";
import ContactPage from "@/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | TeDiWings Technologies",
  description:
    "Have a project in mind? Contact TeDiWings Technologies for a free consultation and a clear plan.",
};

export default function Page() {
  return <ContactPage />;
}
