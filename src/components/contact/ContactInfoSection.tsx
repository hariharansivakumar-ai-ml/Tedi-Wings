import React from "react";
import { contactChannels } from "@/data/contact.data";
import { Mail, Phone, MapPin } from "lucide-react";

const ICONS = [Mail, Phone, MapPin];

export function ContactInfoSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="small-label text-[#075DFF]">COMMUNICATION CHANNELS</span>
        <h3 className="text-[18px] font-semibold text-[#061A63] leading-snug">
          DIRECT STUDIO ACCESS
        </h3>
        <p className="body-text text-sm text-[#5B6472]">
          We respond to technical briefs, architectural inquiries, and project RFPs within 24 business hours.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {contactChannels.map((channel, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <div
              key={channel.id}
              className="p-5 rounded-[18px] bg-[#F7F8FA] border border-[#E5E7EB] flex items-start gap-4 hover:border-[#00C8FF] hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#075DFF] shrink-0 border border-[#E5E7EB] shadow-sm">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-semibold text-[#FF5A00] uppercase tracking-wider">
                  {channel.label}
                </span>
                <span className="text-sm font-semibold text-[#061A63]">
                  {channel.placeholder}
                </span>
                <span className="text-xs text-[#5B6472]">
                  {channel.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const ContactInfo = ContactInfoSection;
export default ContactInfoSection;
