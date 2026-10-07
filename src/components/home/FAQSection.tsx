"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { JsonLd, faqSchema } from "@/components/common/JsonLd";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is TeDiWings Technologies?",
    answer:
      "TeDiWings Technologies is a technology studio that designs and builds websites, mobile apps and custom software. We help businesses launch and grow online with clean design, solid engineering and clear communication. Our motto is: Together We Build, Together We Fly.",
  },
  {
    question: "What services does TeDiWings offer?",
    answer:
      "TeDiWings offers web development, mobile app development, custom software, UI/UX design, business automation, and ongoing support. We can take a project from first idea to launch and keep improving it afterwards.",
  },
  {
    question: "Who does TeDiWings work with?",
    answer:
      "We work with startups, small businesses and growing companies that need reliable digital products. If you have an idea or an existing product that needs a better build, we can help.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope. A simple business website usually takes a few weeks, while custom software or apps take longer. After a short discovery call, we share a clear plan with dates.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is different, so we quote after understanding your goals, features and timeline. Contact TeDiWings for a free consultation and a clear, no-surprise estimate.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer updates, bug fixes, security checks and improvements after launch, so your product stays fast, safe and up to date.",
  },
  {
    question: "How do I start a project with TeDiWings?",
    answer:
      "Send us a message through the Contact page with a few details about your idea. We reply within 1–2 business days to schedule a short call and plan the next steps.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <JsonLd data={faqSchema} />
      <div className="site-container">
        <div className="mb-12">
          <SectionTitle
            label="Common Questions"
            labelColor="orange"
            titlePrimary="Frequently Asked"
            titleHighlight="Questions"
            highlightColor="orange"
            description="Direct, clear answers to common questions about working with TeDiWings Technologies."
          />
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-[#E5E7EB] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#075DFF]"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-[#061A63]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#FF5A00] text-white rotate-180"
                        : "bg-[#F7F8FA] text-[#061A63]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[14px] leading-relaxed text-[#5B6472] border-t border-[#E5E7EB]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const FAQ = FAQSection;
export default FAQSection;
