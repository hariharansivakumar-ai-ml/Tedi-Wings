"use client";

import React, { useState } from "react";
import { Button } from "@/components/common/Button";
import { CheckCircle2 } from "lucide-react";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-[22px] border border-[#E5E7EB] shadow-sm">
      <div className="mb-6">
        <span className="small-label text-[#075DFF]">Project Intake</span>
        <h3 className="text-[18px] font-semibold text-[#061A63] mt-1">
          Tell Us About Your Project
        </h3>
        <p className="body-text text-xs text-[#5B6472] mt-1">
          We&apos;ll reply within 1–2 business days with a clear plan.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-xl bg-[#F7F8FA] border border-[#075DFF]/30 text-center flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#FF5A00]/10 text-[#FF5A00] flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-base font-semibold text-[#061A63]">
            Thank you! We&apos;ll be in touch soon.
          </h4>
          <p className="text-xs text-[#5B6472] max-w-sm">
            We have received your project details and will reply within 1–2 business days to schedule a discovery call.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-[#075DFF] hover:text-[#061A63] hover:underline mt-2 cursor-pointer transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-[#061A63]">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-[#061A63] placeholder:text-[#5B6472]/60 focus:outline-none focus:border-[#075DFF] focus:ring-1 focus:ring-[#075DFF] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-[#061A63]">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-[#061A63] placeholder:text-[#5B6472]/60 focus:outline-none focus:border-[#075DFF] focus:ring-1 focus:ring-[#075DFF] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone (optional) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-[#061A63]">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (000) 000-0000"
                className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-[#061A63] placeholder:text-[#5B6472]/60 focus:outline-none focus:border-[#075DFF] focus:ring-1 focus:ring-[#075DFF] transition-colors"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-semibold text-[#061A63]">
                Service *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange as unknown as React.ChangeEventHandler<HTMLSelectElement>}
                className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-[#061A63] bg-white focus:outline-none focus:border-[#075DFF] focus:ring-1 focus:ring-[#075DFF] transition-colors"
              >
                <option value="">Select a service...</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Apps">Mobile Apps</option>
                <option value="Custom Software">Custom Software</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Automation">Automation</option>
                <option value="Support & Care">Support &amp; Care</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-[#061A63]">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, timeline, or goals..."
              className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-[#061A63] placeholder:text-[#5B6472]/60 focus:outline-none focus:border-[#075DFF] focus:ring-1 focus:ring-[#075DFF] transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" variant="orange" showArrow className="w-full sm:w-auto">
              Send Message
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export const ContactForm = ContactFormSection;
export default ContactFormSection;
