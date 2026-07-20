"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Agents", href: "#team" },
  { label: "China Office", href: "#china-office" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FBFAF7]/95 backdrop-blur-md shadow-md shadow-[#1B5E72]/5 border-b border-[#E5DECF]/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group"
            aria-label="Palm Gift Card home"
          >
            <div
              className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                scrolled
                  ? "border-[#1B5E72]/30 group-hover:border-[#C9A35F]"
                  : "border-white/40 group-hover:border-[#C9A35F]"
              }`}
            >
              <img
                src="/images/logo.jpeg"
                alt="Palm Gift Card logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-serif text-lg sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-[#1B5E72]" : "text-white"
                }`}
              >
                Palm Gift Card
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 ${
                  scrolled ? "text-[#C9A35F]" : "text-white/70"
                }`}
              >
                Palmcard Trading Ltd.
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C9A35F] ${
                  scrolled ? "text-[#4A5A6B]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#team"
              className="inline-flex items-center gap-2 bg-[#1B5E72] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#16463F] transition-all duration-300 hover:shadow-lg hover:shadow-[#1B5E72]/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Pick an Agent
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1B5E72]" : "text-white"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav - full screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-[#FBFAF7] z-40 overflow-y-auto"
          >
            <div className="watercolor-wash absolute inset-0 pointer-events-none" />
            <nav className="relative flex flex-col p-6 pt-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="flex items-center justify-between text-[#1A2B3C] hover:text-[#1B5E72] px-4 py-4 rounded-2xl text-base font-medium border-b border-[#E5DECF]/40 transition-colors"
                >
                  {link.label}
                  <span className="text-[#C9A35F]">→</span>
                </motion.a>
              ))}
              <a
                href="#team"
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[#1B5E72] text-white px-5 py-4 rounded-full text-base font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Pick an Agent
              </a>

              {/* Mini brand chip in mobile drawer footer */}
              <div className="mt-10 pt-6 border-t border-[#E5DECF]/60 flex items-center gap-3">
                <img
                  src="/images/logo.jpeg"
                  alt="Palm Gift Card logo"
                  className="h-12 w-12 rounded-full border border-[#1B5E72]/20"
                />
                <div>
                  <p className="font-serif text-base font-semibold text-[#1B5E72]">
                    Palm Gift Card
                  </p>
                  <p className="text-[#4A5A6B] text-xs">
                    Trade with confidence · Worldwide
                  </p>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
