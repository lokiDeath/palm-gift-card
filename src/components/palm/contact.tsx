"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Clock, ShieldCheck, Globe2 } from "lucide-react";
import { whatsappLink, firstAgent } from "./data";

const reassurances = [
  { icon: Clock, label: "Available 24/7 - Most replies within 5 minutes" },
  { icon: ShieldCheck, label: "Verified agents, secure transactions, instant payouts" },
  { icon: Globe2, label: "Serving customers worldwide - gift cards, crypto, transfers" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E72] via-[#16463F] to-[#0E1F26]" />
      <div className="absolute inset-0 watercolor-wash-dark" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A35F]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/logo.jpeg"
          alt=""
          aria-hidden="true"
          className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] object-cover opacity-[0.08] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[#C9A35F] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            Ready to Trade?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            Start Trading with Palm Today
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you want to buy or sell gift cards, trade cryptocurrency, or
            send money across borders - we are one message away. Pick an agent,
            send a hello, and they will reply within minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a
              href={whatsappLink(firstAgent)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-7 sm:px-8 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/30 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Chat on WhatsApp
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/40 text-white px-7 sm:px-8 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Browse All Agents
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Reassurances */}
          <div className="mt-10 sm:mt-12 space-y-3 max-w-xl mx-auto">
            {reassurances.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.label}
                  className="flex items-center justify-center gap-3 text-white/70 text-sm sm:text-base"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A35F] shrink-0" />
                  <span>{r.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
