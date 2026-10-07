import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Star, Quote, CheckCircle2 } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "TeDiWings turned our complex technical concept into a seamless, high-performance web platform in record time. Their engineering rigor and communication are unmatched.",
    author: "Arun S.",
    role: "Founder & CTO",
    company: "CloudScale Systems",
    rating: 5,
  },
  {
    quote:
      "Working with TeDiWings was the smoothest development experience we've had. Fast delivery, zero jargon, and an interface our customers love using every single day.",
    author: "Elena Rostova",
    role: "Product Lead",
    company: "Veloce Mobility",
    rating: 5,
  },
  {
    quote:
      "Their motto 'Together We Build, Together We Fly' truly defines how they partner with you. They genuinely cared about our business outcomes and delivered beyond expectations.",
    author: "Devendra Patel",
    role: "Managing Director",
    company: "Apex Nexus Group",
    rating: 5,
  },
];

const METRICS = [
  { value: "99.8%", label: "Uptime & Performance Reliability" },
  { value: "100%", label: "Milestone On-Time Completion" },
  { value: "4.9/5", label: "Average Client Satisfaction Rating" },
];

export function TestimonialsSection() {
  return (
    <section className="section-spacing bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-12">
          <SectionTitle
            label="Client Trust"
            labelColor="orange"
            titlePrimary="What Our Partners"
            titleHighlight="Say About Us"
            highlightColor="orange"
            description="Real feedback from growing teams that built and scaled with TeDiWings."
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-[18px] border border-[#E5E7EB] hover:border-[#00C8FF] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars and quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#FFC928]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFC928]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#075DFF]/20" />
                </div>

                {/* Quote body */}
                <p className="body-text text-sm text-[#061A63] leading-relaxed mb-6 font-normal italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#061A63]">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#5B6472]">
                    {t.role}, <span className="font-medium text-[#075DFF]">{t.company}</span>
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#00C8FF]" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm">
          {METRICS.map((metric, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center ${
                i < METRICS.length - 1 ? "sm:border-r sm:border-[#E5E7EB]" : ""
              } px-4 py-2`}
            >
              <span className="text-3xl font-bold tracking-tight text-[#061A63] mb-1">
                <span className="text-[#075DFF]">{metric.value.slice(0, -1)}</span>
                <span className="text-[#FF5A00]">{metric.value.slice(-1)}</span>
              </span>
              <span className="text-xs font-medium text-[#5B6472]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
