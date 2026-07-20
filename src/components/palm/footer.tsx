"use client";

import { MessageCircle, Globe2, ShieldCheck, MessageSquare } from "lucide-react";
import { whatsappLink, firstAgent } from "./data";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Our Agents", href: "#team" },
  { label: "China Office", href: "#china-office" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Gift Card Buying & Selling",
  "Cryptocurrency Trading",
  "Global Money Transfers",
  "All Major Card Brands Accepted",
];

export default function Footer() {
  return (
    <footer className="bg-[#0E1F26] text-white pt-14 sm:pt-16 pb-8 relative overflow-hidden">
      {/* Soft accent line on top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A35F]/60 to-transparent" />

      {/* Logo watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.04]">
        <img
          src="/images/logo.jpeg"
          alt=""
          aria-hidden="true"
          className="w-96 h-96 object-cover rounded-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.jpeg"
                alt="Palm Gift Card logo"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-[#C9A35F]/40 object-cover"
              />
              <div>
                <span className="font-serif text-lg sm:text-xl font-semibold block leading-tight">
                  Palm Gift Card
                </span>
                <span className="text-[#C9A35F] text-[10px] tracking-[0.25em] uppercase">
                  Palmcard Trading Ltd.
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted global partner for gift card trading, cryptocurrency
              exchange, and international money transfers. Reach our agents
              directly - 24/7.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#C9A35F]" />
              <span className="text-white/70 text-xs font-medium">
                Verified · Trusted · Worldwide
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-[#C9A35F]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-[#C9A35F]">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-white/60 text-sm">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="text-[#C9A35F] mt-1.5 w-1 h-1 rounded-full bg-[#C9A35F] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - no phone numbers shown */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-[#C9A35F]">
              Get in Touch
            </h4>
            <div className="space-y-4 text-white/60 text-sm">
              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A35F]" />
                <div>
                  <span className="block text-white/80 text-xs uppercase tracking-wider mb-1">
                    Talk to an agent
                  </span>
                  <a
                    href={whatsappLink(firstAgent)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-[#C9A35F] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    Open WhatsApp chat
                  </a>
                  <span className="block text-white/50 text-xs mt-1">
                    {firstAgent.name} · {firstAgent.role}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Globe2 className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A35F]" />
                <span>Serving customers worldwide, 24/7</span>
              </div>

              <a
                href="#team"
                className="block text-white/60 hover:text-white text-sm transition-colors"
              >
                → Browse all agents
              </a>
            </div>

            <a
              href={whatsappLink(firstAgent)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-white/40 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Palm Gift Card · Palmcard Trading
            Limited. All rights reserved.
          </p>
          <p className="text-white/40 text-[10px] sm:text-xs tracking-wider">
            Trade with confidence · Worldwide · 24/7
          </p>
        </div>
      </div>
    </footer>
  );
}
