import React from "react";

interface VisualPlaceholderProps {
  label?: string;
  sublabel?: string;
  aspectRatio?: string;
  minHeight?: string;
  className?: string;
  theme?: "light" | "dark";
}

export function VisualPlaceholder({
  label = "Interactive Experience",
  sublabel = "Digital Product Showcase",
  minHeight = "360px",
  className = "",
  theme = "light",
}: VisualPlaceholderProps) {
  const isDark = theme === "dark";

  return (
    <div
      style={{ minHeight }}
      className={`relative w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 text-center group transition-all duration-300 ${
        isDark
          ? "bg-[#07112B] border border-white/10 hover:border-[#00C8FF]/40"
          : "bg-gradient-to-br from-[#FFFFFF] via-[#F7F8FA] to-[#E5E7EB]/50 border border-[#E5E7EB] hover:border-[#075DFF]/40"
      } ${className}`}
    >
      {/* Background Architectural Tech Grid */}
      <div
        className={`absolute inset-0 ${
          isDark ? "tech-grid-pattern-dark opacity-40" : "tech-grid-pattern opacity-60"
        }`}
      />

      {/* Subtle Electric Blue & Orange Ambient Glows */}
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#00C8FF]/10 blur-3xl pointer-events-none group-hover:bg-[#00C8FF]/15 transition-all duration-500" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#FF5A00]/8 blur-3xl pointer-events-none" />

      {/* Modern Technical Corner Reticles: Deep Blue + Orange accents */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#061A63]/30 group-hover:border-[#FF5A00] transition-colors" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#061A63]/30 group-hover:border-[#00C8FF] transition-colors" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#061A63]/30 group-hover:border-[#075DFF] transition-colors" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#061A63]/30 group-hover:border-[#FFC928] transition-colors" />

      {/* Center Technical Blueprint Iconography */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
            isDark
              ? "bg-[#050505] border border-white/10 text-[#00C8FF]"
              : "bg-white shadow-sm border border-[#E5E7EB] text-[#075DFF]"
          }`}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:text-[#FF5A00] transition-colors"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18" />
            <path d="m14 9 3 3-3 3" />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span
            className={`text-[12px] font-semibold tracking-[1.8px] uppercase ${
              isDark ? "text-white" : "text-[#061A63]"
            }`}
          >
            {label}
          </span>
          {sublabel && (
            <span
              className={`text-[10px] font-medium tracking-[1.2px] uppercase ${
                isDark ? "text-[#D7DCE3]" : "text-[#5B6472]"
              }`}
            >
              {sublabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
