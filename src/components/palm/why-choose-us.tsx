"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, HeartHandshake, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: string;
};

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Secure Trading",
    desc: "Every transaction is verified and protected end-to-end. Your cards, your crypto, and your funds are always safe - no surprises, no shortcuts.",
    accent: "#1B5E72",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    desc: "Most trades settle within five minutes. Send your card or crypto, agree the rate, and get paid before you finish your coffee.",
    accent: "#C9A35F",
  },
  {
    icon: Globe,
    title: "Worldwide Service",
    desc: "We serve customers across every continent. No matter where you are, our agents are online 24/7 and ready to help you trade.",
    accent: "#8E7CC3",
  },
  {
    icon: HeartHandshake,
    title: "Real People, Real Replies",
    desc: "No bots, no call centres. Message any agent and you reach a real person who knows your trade from start to finish.",
    accent: "#5B9BD5",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-[#FBFAF7] relative overflow-hidden">
      <div className="absolute inset-0 watercolor-wash pointer-events-none" />

      {/* Soft logo watermark - bottom right */}
      <div className="absolute -right-10 -bottom-10 pointer-events-none opacity-[0.05]">
        <img
          src="/images/logo.jpeg"
          alt=""
          aria-hidden="true"
          className="w-72 h-72 object-cover rounded-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-[#C9A35F] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A2B3C] leading-tight">
            Built on Trust, Speed, and Care
          </h2>
          <p className="text-[#4A5A6B] text-base sm:text-lg mt-4">
            Thousands of customers around the world trade with Palm Gift Card
            every week. Here is what keeps them coming back.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 hover-lift hover:shadow-2xl border border-[#E5DECF]/60 overflow-hidden"
              >
                {/* Accent corner wash */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ background: f.accent }}
                />

                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${f.accent}, ${f.accent}CC)`,
                    boxShadow: `0 10px 25px -10px ${f.accent}80`,
                  }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="relative font-serif text-xl sm:text-2xl font-semibold text-[#1A2B3C] mb-3">
                  {f.title}
                </h3>
                <p className="relative text-[#4A5A6B] text-sm sm:text-base leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
