import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header/Header";
import { Footer } from "@/components/common/Footer/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

import { JsonLd, organizationSchema } from "@/components/common/JsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tediwings.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | TeDiWings Technologies",
    default: "TeDiWings Technologies | Web & Software Development",
  },
  description:
    "TeDiWings builds fast, modern websites, apps and custom software for growing businesses. Together We Build, Together We Fly.",
  keywords: [
    "web development company",
    "software development company",
    "custom software development",
    "mobile app development",
    "website design",
    "UI UX design",
    "business automation",
    "full stack development",
    "web application development",
    "TeDiWings Technologies",
  ],
  authors: [{ name: "TeDiWings Technologies", url: siteUrl }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "TeDiWings Technologies",
    description: "Building digital experiences that help businesses grow.",
    url: siteUrl,
    siteName: "TeDiWings Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/tediwings-logo.svg",
        width: 1200,
        height: 630,
        alt: "TeDiWings Technologies logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeDiWings Technologies",
    description: "Building digital experiences that help businesses grow.",
    images: ["/tediwings-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} font-sans scroll-smooth`}>
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#075DFF]/20 selection:text-[#061A63]">
        <SmoothScroll>
          <Header />
          <main className="flex-1 pt-[76px]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
