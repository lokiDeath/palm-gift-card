"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ChevronDown,
  Sparkles,
  CreditCard,
  Bitcoin,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";
import { whatsappLinkForService, firstAgent } from "./data";

type QuickService = {
  id: "cards" | "crypto" | "transfers";
  label: string;
  icon: LucideIcon;
  short: string;
  detail: string;
  accent: string;
  accentDark: string;
};

const services: QuickService[] = [
  {
    id: "cards",
    label: "Gift Cards",
    icon: CreditCard,
    short: "Apple · Amazon · Steam · Visa",
    detail:
      "Sell any major brand gift card at the best rate. Instant verification, instant payout.",
    accent: "#1B5E72",
    accentDark: "#0E3A47",
  },
  {
    id: "crypto",
    label: "Crypto",
    icon: Bitcoin,
    short: "BTC · ETH · USDT",
    detail:
      "Trade Bitcoin, Ethereum, USDT and more. Live rates and instant settlement worldwide.",
    accent: "#7A5BB8",
    accentDark: "#4A2F8E",
  },
  {
    id: "transfers",
    label: "Money Transfer",
    icon: DollarSign,
    short: "USD · CNY · NGN · EUR",
    detail:
      "Send money across borders fast. Competitive rates and same-day settlement.",
    accent: "#B88438",
    accentDark: "#8A5E1C",
  },
];

export default function Hero() {
  const [activeService, setActiveService] = useState<QuickService>(services[0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background - deep gradient with watercolor wash + logo watermark */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E1F26] via-[#16463F] to-[#1B5E72]" />
      <div className="absolute inset-0 watercolor-wash-dark" />

      {/* Floating watercolor blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#5B9BD5]/25 rounded-full blur-3xl palm-float pointer-events-none" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#B8A4D4]/20 rounded-full blur-3xl palm-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#C9A35F]/15 rounded-full blur-3xl palm-float pointer-events-none"
        style={{ animationDelay: "4s" }}
      />

      {/* Big logo watermark - circular, soft */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <img
            src="/images/logo.jpeg"
            alt=""
            aria-hidden="true"
            className="w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] lg:w-[700px] lg:h-[700px] object-cover opacity-[0.08] rounded-full select-none"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-white/5" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Eyebrow chip */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 backdrop-blur-sm border border-white/15 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A35F]" />
              <span className="text-white/90 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold">
                Trade with Confidence · Worldwide
              </span>
            </div>

            {/* Logo + brand name */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              <img
                src="/images/logo.jpeg"
                alt="Palm Gift Card logo"
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-[#C9A35F]/50 shadow-xl shadow-[#C9A35F]/15 object-cover"
              />
              <div className="text-left">
                <span className="block font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Palm Gift Card
                </span>
                <span className="block text-[#C9A35F] text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
                  Palmcard Trading Limited
                </span>
              </div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] mb-6">
              Your Trusted{" "}
              <span className="italic text-[#C9A35F]">Global</span>
              <br className="hidden sm:block" /> Gift Card Partner
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-sans">
              Buy and sell every kind of gift card, trade cryptocurrency, and
              send money across borders - fast, secure, and always one message
              away. Real agents, real replies, twenty-four hours a day.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md lg:max-w-none mx-auto lg:mx-0">
              <a
                href="#team"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A35F] text-[#0E1F26] px-7 py-4 rounded-full text-base font-bold hover:bg-[#D9BE86] transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A35F]/30 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to an Agent
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-white/60 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C9A35F]" />
                Verified trades
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] palm-pulse-soft" />
                Agents online 24/7
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C9A35F]" />
                100+ card brands
              </span>
            </div>
          </motion.div>

          {/* Right - Premium Quick Trade panel (redesigned, less fake) */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Premium glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A35F]/30 via-[#5B9BD5]/20 to-[#B8A4D4]/20 rounded-3xl blur-2xl" />

              {/* Premium glass card with refined frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-[#0E1F26]/95 via-[#16463F]/95 to-[#1B5E72]/95 backdrop-blur-xl">
                {/* Top accent bar */}
                <div
                  className="h-1"
                  style={{
                    background: `linear-gradient(90deg, ${activeService.accent}, ${activeService.accentDark})`,
                  }}
                />

                {/* Card header */}
                <div className="px-5 sm:px-7 pt-6 pb-4 border-b border-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {/* Live indicator */}
                      <div className="flex flex-col items-center pt-1">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]" />
                        </span>
                      </div>
                      <div>
                        <p className="font-serif text-xl sm:text-2xl font-semibold text-white leading-tight">
                          Quick Trade
                        </p>
                        <p className="text-white/50 text-xs mt-0.5">
                          Pick a service - we route you to a specialist agent
                        </p>
                      </div>
                    </div>
                    {/* Rating badge */}
                    <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full bg-[#C9A35F]/15 border border-[#C9A35F]/25">
                      <Star className="w-3 h-3 text-[#C9A35F] fill-[#C9A35F]" />
                      <span className="text-[10px] font-semibold text-[#C9A35F]">
                        4.9
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service options - premium pill design */}
                <div className="p-4 sm:p-5 space-y-2">
                  {services.map((s) => {
                    const Icon = s.icon;
                    const isActive = activeService.id === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setActiveService(s)}
                        className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center gap-3 sm:gap-4 relative overflow-hidden ${
                          isActive
                            ? "bg-white/12 border border-white/25 shadow-lg backdrop-blur-md"
                            : "bg-white/5 border border-transparent hover:bg-white/10 hover:border-white/15"
                        }`}
                      >
                        {/* Active accent glow */}
                        {isActive && (
                          <motion.div
                            layoutId="active-glow"
                            className="absolute inset-0 opacity-20"
                            style={{
                              background: `linear-gradient(135deg, ${s.accent}, ${s.accentDark})`,
                            }}
                          />
                        )}

                        <div
                          className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all shadow-lg"
                          style={{
                            background: isActive
                              ? `linear-gradient(135deg, ${s.accent}, ${s.accentDark})`
                              : `linear-gradient(135deg, ${s.accent}30, ${s.accentDark}30)`,
                            color: isActive ? "#FFFFFF" : s.accent,
                            boxShadow: isActive
                              ? `0 8px 20px -8px ${s.accent}90`
                              : "none",
                          }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>

                        <div className="relative flex-1 min-w-0">
                          <p
                            className={`font-semibold text-sm sm:text-base ${
                              isActive ? "text-white" : "text-white/90"
                            }`}
                          >
                            {s.label}
                          </p>
                          <p className="text-white/55 text-xs truncate mt-0.5">
                            {s.short}
                          </p>
                        </div>

                        {/* Active indicator */}
                        <div
                          className={`relative w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${
                            isActive
                              ? "border-[#C9A35F] bg-[#C9A35F]"
                              : "border-white/30"
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-white"
                            />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active service detail + CTA */}
                <div className="p-5 sm:p-7 border-t border-white/10 bg-black/20">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-2 mb-3">
                      <Sparkles
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: activeService.accent }}
                      />
                      <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                        {activeService.detail}
                      </p>
                    </div>

                    <a
                      href={whatsappLinkForService(activeService.label, firstAgent)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/40 group/btn"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Start a {activeService.label} Trade
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>

                    <div className="flex items-center justify-center gap-1.5 mt-3 text-white/40 text-[11px]">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Secure · Verified · Instant payout</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
