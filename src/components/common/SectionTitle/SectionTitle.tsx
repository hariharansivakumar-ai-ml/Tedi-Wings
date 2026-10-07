import React from "react";

export interface SectionTitleProps {
  label?: string;
  labelColor?: "blue" | "orange" | "cyan" | "gold";
  titlePrimary: string;
  titleHighlight?: string;
  highlightColor?: "orange" | "blue" | "cyan" | "gold" | "yellow";
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  isHero?: boolean;
  as?: "h1" | "h2" | "h3";
}

export function SectionTitle({
  label,
  labelColor = "blue",
  titlePrimary,
  titleHighlight,
  highlightColor = "cyan",
  description,
  align = "left",
  theme = "light",
  className = "",
  isHero = false,
  as,
}: SectionTitleProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  // Label color
  let labelColorClass = "text-[#075DFF]";
  if (labelColor === "orange") labelColorClass = "text-[#FF5A00]";
  if (labelColor === "cyan") labelColorClass = "text-[#00C8FF]";
  if (labelColor === "gold") labelColorClass = "text-[#FFC928]";

  // Highlight color
  let highlightClass = "text-[#00C8FF]";
  if (highlightColor === "orange") highlightClass = "text-[#FF5A00]";
  if (highlightColor === "gold" || highlightColor === "yellow") highlightClass = "text-[#FFC928]";
  if (highlightColor === "blue") highlightClass = "text-[#075DFF]";
  if (highlightColor === "cyan") highlightClass = "text-[#00C8FF]";

  const primaryHeadingColor = isDark ? "text-white" : "text-[#061A63]";
  const descColor = isDark ? "text-[#D7DCE3]" : "text-[#5B6472]";

  const HeadingTag = as || (isHero ? "h1" : "h2");
  const headingClass = isHero ? "hero-heading" : "section-heading";

  return (
    <div
      className={`flex flex-col gap-3.5 ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      } ${className}`}
    >
      {label && <span className={`small-label ${labelColorClass}`}>{label}</span>}

      <HeadingTag className={`${headingClass} ${primaryHeadingColor}`}>
        <span>{titlePrimary}</span>{" "}
        {titleHighlight && (
          <span className={highlightClass}>{titleHighlight}</span>
        )}
      </HeadingTag>

      {description && (
        <p className={`body-text ${isCenter ? "mx-auto" : ""} ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}

// Alias for backwards compatibility
export const SectionHeader = SectionTitle;
export type SectionHeaderProps = SectionTitleProps;

export default SectionTitle;
