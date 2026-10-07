import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "stacked" | "image";
  theme?: "light" | "dark";
  width?: number;
  height?: number;
}

export function Logo({
  className = "",
  variant = "full",
  theme = "light",
  width,
  height,
}: LogoProps) {
  const isDark = theme === "dark";
  const primaryText = isDark ? "#FFFFFF" : "#061A63";
  const subText = isDark ? "#D7DCE3" : "#5B6472";

  // If stacked or image variant, render the official full logo image
  if (variant === "stacked" || variant === "image") {
    const imgWidth = width || (variant === "stacked" ? 180 : 160);
    const imgHeight = height || Math.round((imgWidth * 422) / 591);

    return (
      <Link
        href="/"
        className={`inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] rounded-lg transition-transform duration-300 group-hover:scale-[1.02] ${className}`}
        aria-label="TeDiWings Technologies Home"
      >
        <Image
          src="/assets/logos/tedi-wings-logo.png"
          alt="TeDiWings Technologies"
          width={imgWidth}
          height={imgHeight}
          className="h-auto object-contain shrink-0"
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] rounded-md ${className}`}
      aria-label="TeDiWings Technologies Home"
    >
      {/* Official Origami Flight Bird Symbol: Electric Blue + Amber/Gold Facets */}
      <div className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/assets/logos/tedi-wings-mark.png"
          alt="TeDiWings Symbol"
          width={width || 72}
          height={height || 42}
          className="h-10 sm:h-11 w-auto object-contain"
          priority
        />
      </div>

      {variant !== "icon" && (
        <div className="flex flex-col select-none font-montserrat">
          <div className="flex items-baseline gap-1.5 text-[21px] sm:text-[22px] font-extrabold tracking-[-0.01em] leading-none">
            <span style={{ color: isDark ? "#FFFFFF" : "#071B54" }}>TeDi</span>
            <span style={{ color: "#FF5A00" }}>Wings</span>
          </div>
          <div
            className="w-full flex justify-between text-[9px] sm:text-[9.5px] font-bold uppercase leading-none mt-1.5"
            style={{ color: isDark ? "#D7DCE3" : "#5A6578" }}
            aria-label="Technologies"
          >
            <span>T</span>
            <span>E</span>
            <span>C</span>
            <span>H</span>
            <span>N</span>
            <span>O</span>
            <span>L</span>
            <span>O</span>
            <span>G</span>
            <span>I</span>
            <span>E</span>
            <span>S</span>
          </div>
        </div>
      )}
    </Link>
  );
}
