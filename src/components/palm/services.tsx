"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Bitcoin,
  DollarSign,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  type LucideIcon,
} from "lucide-react";
import { whatsappLinkForService, cryptoTokens, transferCurrencies, firstAgent } from "./data";

type Service = {
  id: "cards" | "crypto" | "transfers";
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: string;
  accentDark: string;
  chips: string[];
  features: { icon: LucideIcon; text: string }[];
};

const services: Service[] = [
  {
    id: "cards",
    icon: CreditCard,
    title: "Gift Card Trading",
    desc:
      "We buy and sell every major gift card worldwide - Apple, Amazon, Steam, Google Play, Xbox, Visa, Walmart, Sephora, Nike, eBay, Macy's, and many more. Best rates guaranteed, with instant verification and instant payout.",
    accent: "#1B5E72",
    accentDark: "#0E3A47",
    chips: [
      "Apple",
      "Amazon",
      "Steam",
      "Google Play",
      "Xbox",
      "Visa",
      "Walmart",
      "Sephora",
    ],
    features: [
      { icon: Zap, text: "Instant payout" },
      { icon: ShieldCheck, text: "Verified cards" },
      { icon: Globe2, text: "All brands" },
    ],
  },
  {
    id: "crypto",
    icon: Bitcoin,
    title: "Cryptocurrency Trading",
    desc:
      "Trade Bitcoin, Ethereum, USDT, and other major cryptocurrencies with confidence. Live rates, instant settlement, and support for both small and large volume trades - available worldwide.",
    accent: "#7A5BB8",
    accentDark: "#4A2F8E",
    chips: ["BTC", "ETH", "USDT", "BNB", "SOL", "XRP", "USDC", "TRX"],
    features: [
      { icon: Zap, text: "Live rates" },
      { icon: ShieldCheck, text: "Secure wallet" },
      { icon: Globe2, text: "Any volume" },
    ],
  },
  {
    id: "transfers",
    icon: DollarSign,
    title: "Global Money Transfers",
    desc:
      "Send money across borders quickly and securely. We handle international remittance with competitive exchange rates and same-day settlement to most destinations worldwide.",
    accent: "#B88438",
    accentDark: "#8A5E1C",
    chips: ["USD", "EUR", "GBP", "CNY", "HKD", "NGN", "CAD", "AUD"],
    features: [
      { icon: Zap, text: "Same-day settle" },
      { icon: ShieldCheck, text: "Tracked transfers" },
      { icon: Globe2, text: "Best FX rates" },
    ],
  },
];

/* ─── Visual panels (premium, less fake) ─── */

function CardsVisual({ accent, accentDark }: { accent: string; accentDark: string }) {
  // A refined stack of real-looking gift card mockups using CSS gradients + chip + brand bar
  return (
    <div className="relative h-full w-full min-h-[240px] flex items-center justify-center p-4">
      {/* Back card */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-8, -10, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-52 h-32 rounded-xl shadow-2xl"
        style={{
          background: `linear-gradient(135deg, ${accentDark}, ${accent})`,
          transform: "rotate(-9deg) translate(-30px, 10px)",
        }}
      >
        <CardMockup accent={accent} variant="dark" />
      </motion.div>

      {/* Middle card */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [4, 6, 4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute w-52 h-32 rounded-xl shadow-2xl"
        style={{
          background: `linear-gradient(135deg, #C9A35F, #D9BE86)`,
          transform: "rotate(5deg) translate(20px, -8px)",
        }}
      >
        <CardMockup accent="#0E1F26" variant="gold" />
      </motion.div>

      {/* Front card */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="relative z-10 w-56 h-36 rounded-xl shadow-2xl"
        style={{
          background: `linear-gradient(135deg, #1A2B3C, #2C3E50)`,
        }}
      >
        <CardMockup accent={accent} variant="premium" />
      </motion.div>

      {/* Floating chips around the cards */}
      {["VISA", "MC", "AMEX"].map((label, i) => (
        <motion.div
          key={label}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
          className="absolute w-12 h-8 rounded-md bg-white shadow-lg flex items-center justify-center text-[9px] font-bold"
          style={{
            color: accent,
            top: i === 0 ? "12%" : i === 1 ? "70%" : "30%",
            left: i === 0 ? "8%" : i === 1 ? "5%" : "78%",
          }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}

function CardMockup({
  accent,
  variant,
}: {
  accent: string;
  variant: "dark" | "gold" | "premium";
}) {
  const textColor = variant === "gold" ? "#0E1F26" : "white";
  const chipBg = variant === "gold" ? "#0E1F26" : "#C9A35F";

  return (
    <div className="relative w-full h-full p-3 overflow-hidden">
      {/* Top row - chip + brand mark */}
      <div className="flex items-center justify-between mb-2">
        <div
          className="w-7 h-5 rounded-sm"
          style={{
            background: `linear-gradient(135deg, ${chipBg}, ${chipBg}AA)`,
          }}
        />
        <div className="w-6 h-6 rounded-full border" style={{ borderColor: `${textColor}40` }} />
      </div>
      {/* Brand bar */}
      <div className="w-16 h-2 rounded mb-3" style={{ background: `${textColor}60` }} />
      {/* Card number dots */}
      <div className="flex gap-1 mb-3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-3 h-1.5 rounded"
            style={{ background: `${textColor}40` }}
          />
        ))}
      </div>
      {/* Bottom row */}
      <div className="flex items-end justify-between">
        <div>
          <div className="w-12 h-1.5 rounded mb-1" style={{ background: `${textColor}50` }} />
          <div className="w-16 h-1 rounded" style={{ background: `${textColor}30` }} />
        </div>
        {variant === "premium" && (
          <div
            className="text-[9px] font-bold tracking-wider"
            style={{ color: accent }}
          >
            PALM
          </div>
        )}
      </div>
    </div>
  );
}

function CryptoVisual({ accent, accentDark }: { accent: string; accentDark: string }) {
  return (
    <div className="relative h-full w-full min-h-[240px] flex items-center justify-center p-4">
      {/* Soft glow */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-40"
        style={{ background: accent }}
      />

      {/* Orbiting tokens */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64">
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed"
          style={{ borderColor: `${accent}40` }}
        />
        {/* Inner ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute inset-6 rounded-full border"
          style={{ borderColor: `${accent}25` }}
        />

        {/* Center BTC */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
            boxShadow: `0 20px 40px -15px ${accent}90`,
          }}
        >
          <Bitcoin className="w-7 h-7 sm:w-9 sm:h-9 mb-0.5" />
          <span className="text-[9px] font-bold tracking-wider opacity-80">LIVE</span>
        </motion.div>

        {/* Orbiting tokens */}
        {cryptoTokens.slice(1, 7).map((token, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 105;
          // Round to 2 decimals to avoid SSR/client hydration mismatch from float precision
          const x = Math.round(Math.cos(angle) * radius * 100) / 100;
          const y = Math.round(Math.sin(angle) * radius * 100) / 100;
          return (
            <motion.div
              key={token.symbol}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2"
            >
              <div
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white shadow-lg flex flex-col items-center justify-center"
              >
                <span
                  className="text-[10px] font-bold"
                  style={{ color: accent }}
                >
                  {token.symbol}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function TransfersVisual({ accent, accentDark }: { accent: string; accentDark: string }) {
  return (
    <div className="relative h-full w-full min-h-[240px] flex items-center justify-center p-4">
      {/* Soft glow */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-30"
        style={{ background: accent }}
      />

      {/* Globe with orbiting currencies */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64">
        {/* Globe core */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-white shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
            boxShadow: `0 20px 40px -15px ${accent}90, inset -8px -8px 16px ${accentDark}`,
          }}
        >
          <Globe2 className="w-10 h-10 sm:w-12 sm:h-12" />
        </motion.div>

        {/* Orbit rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: `${accent}30` }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-dashed"
          style={{ borderColor: `${accent}40` }}
        />

        {/* Orbiting currency chips */}
        {transferCurrencies.slice(0, 6).map((cur, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 105;
          // Round to 2 decimals to avoid SSR/client hydration mismatch from float precision
          const x = Math.round(Math.cos(angle) * radius * 100) / 100;
          const y = Math.round(Math.sin(angle) * radius * 100) / 100;
          return (
            <motion.div
              key={cur.code}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2"
            >
              <div
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-lg flex flex-col items-center justify-center"
              >
                <span
                  className="text-[10px] sm:text-xs font-bold"
                  style={{ color: accent }}
                >
                  {cur.code}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-[#FBFAF7] relative overflow-hidden">
      {/* Soft decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#5B9BD5]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#B8A4D4]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-[#C9A35F] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A2B3C] leading-tight">
            Our Services
          </h2>
          <p className="text-[#4A5A6B] text-base sm:text-lg mt-4">
            Three core services, one promise - fast, fair, and friendly trading
            every single time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group relative bg-white rounded-3xl overflow-hidden hover-lift hover:shadow-2xl border border-[#E5DECF]/60"
              >
                {/* Top - visual panel with deep gradient */}
                <div
                  className="relative h-60 sm:h-64 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${s.accentDark}, ${s.accent})`,
                  }}
                >
                  {/* Subtle texture overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, white 0%, transparent 40%), radial-gradient(circle at 75% 75%, white 0%, transparent 40%)`,
                    }}
                  />
                  {/* Floating service tag */}
                  <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#1A2B3C] text-xs font-bold tracking-wider uppercase shadow-lg">
                    <Icon className="w-3.5 h-3.5" style={{ color: s.accent }} />
                    0{i + 1}
                  </div>

                  {/* Visual */}
                  <div className="group relative h-full">
                    {s.id === "cards" && (
                      <CardsVisual accent={s.accent} accentDark={s.accentDark} />
                    )}
                    {s.id === "crypto" && (
                      <CryptoVisual accent={s.accent} accentDark={s.accentDark} />
                    )}
                    {s.id === "transfers" && (
                      <TransfersVisual accent={s.accent} accentDark={s.accentDark} />
                    )}
                  </div>
                </div>

                {/* Bottom - content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A2B3C] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[#4A5A6B] text-sm sm:text-base leading-relaxed mb-5">
                    {s.desc}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.features.map((f) => {
                      const FIcon = f.icon;
                      return (
                        <div
                          key={f.text}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                          style={{
                            color: s.accent,
                            background: `${s.accent}10`,
                          }}
                        >
                          <FIcon className="w-3 h-3" />
                          {f.text}
                        </div>
                      );
                    })}
                  </div>

                  {/* Brand chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {s.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold border bg-white"
                        style={{
                          color: s.accent,
                          borderColor: `${s.accent}30`,
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                    <span
                      className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold"
                      style={{ color: s.accent }}
                    >
                      + more
                    </span>
                  </div>

                  <a
                    href={whatsappLinkForService(s.title, firstAgent)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent}, ${s.accentDark})`,
                      boxShadow: `0 10px 25px -10px ${s.accent}80`,
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Trade Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
