import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TeDiWings Technologies",
  url: "https://tediwings.com",
  logo: "https://tediwings.com/tediwings-logo.svg",
  slogan: "Together We Build, Together We Fly.",
  description:
    "A technology studio building websites, mobile apps and custom software for growing businesses.",
  sameAs: [
    "https://www.linkedin.com/company/tediwings-technologies",
    "https://github.com/tediwings",
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TeDiWings Technologies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TeDiWings Technologies is a technology studio that designs and builds websites, mobile apps and custom software. We help businesses launch and grow online with clean design, solid engineering and clear communication. Our motto is: Together We Build, Together We Fly.",
      },
    },
    {
      "@type": "Question",
      name: "What services does TeDiWings offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TeDiWings offers web development, mobile app development, custom software, UI/UX design, business automation, and ongoing support. We can take a project from first idea to launch and keep improving it afterwards.",
      },
    },
    {
      "@type": "Question",
      name: "Who does TeDiWings work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with startups, small businesses and growing companies that need reliable digital products. If you have an idea or an existing product that needs a better build, we can help.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on scope. A simple business website usually takes a few weeks, while custom software or apps take longer. After a short discovery call, we share a clear plan with dates.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a project cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project is different, so we quote after understanding your goals, features and timeline. Contact TeDiWings for a free consultation and a clear, no-surprise estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer updates, bug fixes, security checks and improvements after launch, so your product stays fast, safe and up to date.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start a project with TeDiWings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send us a message through the Contact page with a few details about your idea. We reply within 1–2 business days to schedule a short call and plan the next steps.",
      },
    },
  ],
};
