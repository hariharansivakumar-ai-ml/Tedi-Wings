import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "orange";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  showArrow = false,
  type = "button",
}: ButtonProps) {
  let baseClasses = "btn-primary";
  if (variant === "secondary") baseClasses = "btn-secondary";
  if (variant === "orange") baseClasses = "btn-orange";

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 text-current transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${baseClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group ${baseClasses} ${className}`}
    >
      {content}
    </button>
  );
}

export default Button;
