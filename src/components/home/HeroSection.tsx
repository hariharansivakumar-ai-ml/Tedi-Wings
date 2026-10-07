"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Activity, Shield, Cpu } from "lucide-react";
import { ParticleNetworkCanvas } from "./ParticleNetworkCanvas";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden select-none bg-[#050505] border-b border-[#075DFF]/20 shadow-[0_20px_60px_-15px_rgba(7,93,255,0.12)] flex items-center"
      style={{
        height: "calc(100vh - 76px)",
        minHeight: "calc(100vh - 76px)",
        background: `
          radial-gradient(circle at 75% 45%, rgba(7, 93, 255, 0.16), transparent 38%),
          radial-gradient(circle at 90% 80%, rgba(0, 200, 255, 0.10), transparent 30%),
          radial-gradient(circle at 65% 70%, rgba(255, 90, 0, 0.06), transparent 25%),
          #050505
        `,
      }}
    >
      {/* Precision Engineering Matrix: Subtle Architectural Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Atmospheric Ambient Light Glow Accents */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#00C8FF]/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full bg-[#FF5A00]/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#075DFF]/[0.08] blur-[160px] pointer-events-none" />

      {/* Futuristic Laser Accent Horizon Lines */}
      <div className="absolute top-1/4 right-0 w-2/5 h-[1px] bg-gradient-to-r from-transparent via-[#00C8FF]/25 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#FF5A00]/20 to-transparent pointer-events-none" />

      {/* Main Living Digital Particle Network Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleNetworkCanvas interactionTargetRef={sectionRef} />
      </div>

      {/* Left-Side Atmospheric Reading Gradient Mask (Keeps text razor-sharp & legible) */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[60%] pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.78) 50%, rgba(5,5,5,0) 100%)",
        }}
      />

      {/* Foreground Hero Content */}
      <div className="site-container !max-w-[1340px] relative z-10 h-full w-full flex items-center py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          
          {/* Left Column: Heading, Value Proposition & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6 max-w-[660px] lg:-ml-4 xl:-ml-8"
          >
            {/* High-Tech Brand Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.12] backdrop-blur-md w-fit shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C8FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C8FF]" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span className="text-[12px] font-semibold tracking-wider text-slate-200 uppercase">
                TeDiWings Technologies
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#075DFF]/25 text-[#00C8FF] font-mono font-medium">
                ENGINEERING STUDIO
              </span>
            </div>

            {/* Hero Heading: Pure White Dominant + Electric Orange Accent */}
            <h1 className="hero-heading text-white text-[32px] sm:text-[44px] lg:text-[54px] font-extrabold tracking-[-0.02em] leading-[1.12]">
              <span>Building Digital</span>{" "}
              <span className="bg-gradient-to-r from-[#FF5A00] via-[#FF7A00] to-[#FFC928] bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>

            {/* Description Area */}
            <p className="body-text text-slate-300 text-[16px] sm:text-[18px] leading-[1.75] font-normal max-w-[580px]">
              We design and build websites, apps and software that help your business grow.
            </p>

            {/* Tagline Badge with Futuristic Blueprint Marker */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold tracking-wide text-[#00C8FF] uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]" />
              <span>&ldquo;Together We Build, Together We Fly.&rdquo;</span>
            </div>

            {/* Action Buttons: Primary Glowing Electric Blue + Secondary Dark Glass */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#075DFF] hover:bg-[#00C8FF] transition-all duration-300 shadow-[0_0_24px_rgba(7,93,255,0.45)] hover:shadow-[0_0_32px_rgba(0,200,255,0.6)] cursor-pointer"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.14] hover:border-[#00C8FF]/50 backdrop-blur-md transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.25)] cursor-pointer"
              >
                <span>Our Services</span>
              </Link>
            </div>

            {/* Technical Capabilities Badges */}
            <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                <Cpu className="w-3.5 h-3.5 text-[#00C8FF]" />
                <span>Full-Stack Development</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                <Shield className="w-3.5 h-3.5 text-[#075DFF]" />
                <span>Enterprise Architecture</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                <Activity className="w-3.5 h-3.5 text-[#FF5A00]" />
                <span>Modern UX Systems</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Kept completely open and uncluttered for the interactive particle network */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" aria-hidden="true" />
        </div>
      </div>

      {/* Bottom Architectural Ambient Rim Light Accent */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00C8FF]/40 to-transparent pointer-events-none" />
    </section>
  );
}

export const Hero = HeroSection;
export default HeroSection;
