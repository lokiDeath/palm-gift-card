"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Globe2, Award, MessageCircle, type LucideIcon } from "lucide-react";
import { whatsappLink, firstAgent } from "./data";

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Clock, value: "24/7", label: "Always Online" },
  { icon: Globe2, value: "Worldwide", label: "Global Service" },
  { icon: Award, value: "100+", label: "Card Brands" },
  { icon: ShieldCheck, value: "Trusted", label: "Verified Trades" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background - office photo with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/office-team.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E1F26]/95 via-[#16463F]/90 to-[#1B5E72]/85" />
        <div className="absolute inset-0 watercolor-wash-dark" />
      </div>

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/logo.jpeg"
          alt=""
          aria-hidden="true"
          className="w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] object-cover opacity-[0.08] rounded-full"
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#5B9BD5]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A35F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-[#C9A35F] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            About Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight">
            Who We Are
          </h2>

          <div className="space-y-5 text-white/85 text-base sm:text-lg leading-relaxed font-sans">
            <p>
              Welcome to{" "}
              <strong className="text-[#C9A35F] font-semibold">
                Palm Gift Card
              </strong>{" "}
              - your trusted global partner for gift card trading,
              cryptocurrency exchange, and international money transfers.
              Operated by Palmcard Trading Limited, we connect customers across
              continents with fast, secure, and reliable service, twenty-four
              hours a day.
            </p>
            <p>
              We specialize in buying and selling every kind of gift card from
              major brands including Apple, Amazon, Steam, Google Play, Xbox,
              Visa, Walmart, Sephora, Nike, eBay, and many more. Beyond gift
              cards, we trade cryptocurrencies like Bitcoin, Ethereum, and
              USDT, and we handle cross-border money transfers with competitive
              exchange rates and same-day settlement.
            </p>
            <p>
              Our mission is simple: to give you the fastest, safest, and most
              personal trading experience available online. When you message
              us, you reach a real person - not a chatbot, not a queue. Every
              agent on our team is trained, verified, and ready to walk you
              through your trade from start to finish.
            </p>
          </div>

          <div className="mt-10">
            <a
              href={whatsappLink(firstAgent)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A35F] text-[#0E1F26] px-7 sm:px-8 py-4 rounded-full text-base font-bold hover:bg-[#D9BE86] transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A35F]/30 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Get in Touch Today
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 sm:mt-16"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#C9A35F] mx-auto mb-3" />
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#C9A35F]">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs sm:text-sm mt-1 tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
