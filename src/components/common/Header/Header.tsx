"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/common/Logo";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E7EB] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation with Underline Active Indicator */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => {
              const currentPath = pathname ?? "/";
              const isActive =
                link.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-[14px] transition-colors duration-200 ${
                    isActive
                      ? "text-[#075DFF] font-semibold"
                      : "text-[#111827] hover:text-[#00C8FF] font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] rounded-full bg-gradient-to-r from-[#075DFF] to-[#00C8FF]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Strategic Orange CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="btn-orange"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#061A63] hover:bg-[#F7F8FA] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-12 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4 mt-6">
              <span className="small-label text-[#075DFF] mb-2">Navigation</span>
              {NAV_LINKS.map((link, idx) => {
                const currentPath = pathname ?? "/";
                const isActive =
                  link.href === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between text-xl py-2.5 border-b border-[#E5E7EB] ${
                        isActive
                          ? "text-[#075DFF] font-semibold"
                          : "text-[#061A63] hover:text-[#00C8FF] font-medium"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5A00]" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-[#5B6472]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 pt-6">
              <Link
                href="/contact"
                className="btn-orange w-full py-3.5 text-center justify-center text-[14px]"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
              <p className="text-center text-xs text-[#5B6472] font-medium tracking-wide">
                Together We Build, Together We Fly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
