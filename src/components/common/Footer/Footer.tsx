import React from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-[#D7DCE3] pt-16 pb-12 border-t border-white/10">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Logo theme="dark" variant="stacked" width={180} />
            <p className="text-[#D7DCE3] text-[15px] max-w-sm leading-relaxed mt-2 font-normal">
              We build digital experiences that help businesses grow.
            </p>
            <div className="text-[12px] font-semibold text-[#00C8FF] tracking-wider uppercase mt-1">
              Together We Build, Together We Fly.
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="small-label text-[#00C8FF]">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 text-[14px] text-white">
              <li>
                <Link href="/" className="text-white hover:text-[#00C8FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white hover:text-[#00C8FF] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-[#00C8FF] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[#00C8FF] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#00C8FF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="small-label text-[#00C8FF]">
              Services
            </span>
            <ul className="flex flex-col gap-2.5 text-[14px] text-white">
              <li>
                <Link href="/services" className="text-white hover:text-[#00C8FF] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-[#00C8FF] transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-[#00C8FF] transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-[#00C8FF] transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-[#00C8FF] transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-[#00C8FF] transition-colors">
                  Support &amp; Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="small-label text-[#FF5A00]">
              Contact
            </span>
            <p className="text-[#D7DCE3] text-[14px] leading-relaxed">
              Have a project in mind? We&apos;ll reply within 1–2 business days.
            </p>
            <div className="flex flex-col gap-1 text-[13px] text-[#D7DCE3]">
              <span className="text-xs text-[#D7DCE3]/70">[email address]</span>
              <span className="text-xs text-[#D7DCE3]/70">[phone number]</span>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6A00] hover:bg-[#FFC928] text-white hover:text-[#050505] text-[13px] font-semibold transition-all shadow-md"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pt-2 flex items-center gap-4 text-xs text-[#D7DCE3]/70">
              <span className="hover:text-[#00C8FF] transition-colors cursor-pointer">
                [LinkedIn]
              </span>
              <span className="hover:text-[#00C8FF] transition-colors cursor-pointer">
                [GitHub]
              </span>
              <span className="hover:text-[#00C8FF] transition-colors cursor-pointer">
                [Instagram]
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7DCE3]/60">
          <div>
            &copy; 2026 TeDiWings Technologies. Together We Build, Together We Fly.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
