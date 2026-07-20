"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, MessageCircle, Clock, Globe2, ArrowUpRight, Shuffle, Crown } from "lucide-react";
import { boss, agentsWithWhatsApp, whatsappLink, type TeamMember } from "./data";

const ROTATE_INTERVAL_MS = 10_000; // rotate WhatsApp target every 10 seconds

export default function ChinaOffice() {
  // Index into agentsWithWhatsApp - the agent whose WhatsApp link is currently "live".
  // Rotates automatically every 10 seconds so different staff receive the click.
  const [activeAgentIdx, setActiveAgentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAgentIdx((prev) => (prev + 1) % agentsWithWhatsApp.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const activeAgent: TeamMember = agentsWithWhatsApp[activeAgentIdx];

  return (
    <section
      id="china-office"
      className="py-20 sm:py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#5B9BD5]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#C9A35F]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle logo watermark */}
      <div className="absolute left-10 top-1/3 pointer-events-none opacity-[0.04]">
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
            Our Office
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A2B3C] leading-tight">
            China Office
          </h2>
          <p className="text-[#4A5A6B] text-base sm:text-lg mt-4">
            Our China desk serves customers across mainland China with local
            language support, fast settlement, and on-the-ground presence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Office Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Primary office photo */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/office-team.jpg"
                alt="Palm Gift Card China office team at work"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F26]/80 via-[#0E1F26]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-white font-serif font-semibold text-lg sm:text-xl mb-1">
                  Our Team at Work
                </p>
                <p className="text-white/70 text-xs sm:text-sm">
                  Dedicated professionals serving customers globally
                </p>
              </div>
            </div>

            {/* Secondary photo strip */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="/images/office-wall.jpg"
                  alt="Palmcard Trading Limited office signage"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F26]/70 to-transparent" />
                <p className="absolute bottom-2 left-3 right-3 text-white text-xs sm:text-sm font-semibold">
                  Palmcard Trading Ltd.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="/images/office-counter.jpg"
                  alt="Palm Gift Card payment service counter"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F26]/70 to-transparent" />
                <p className="absolute bottom-2 left-3 right-3 text-white text-xs sm:text-sm font-semibold">
                  Service Counter
                </p>
              </div>
            </div>
          </motion.div>

          {/* Office Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 sm:space-y-6"
          >
            {/* Heading card */}
            <div className="bg-[#FBFAF7] border border-[#E5DECF]/60 rounded-3xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#1B5E72]/20 bg-gradient-to-br from-[#1B5E72] to-[#16463F]">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-2xl font-semibold text-[#1A2B3C] mb-1">
                    Palmcard Trading Limited
                  </h3>
                  <p className="text-[#4A5A6B] text-sm">
                    China desk serving mainland customers
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1B5E72] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[#1A2B3C] text-sm font-semibold">
                      Operating Hours
                    </p>
                    <p className="text-[#4A5A6B] text-sm">
                      24/7 on WhatsApp - China desk online 09:00 - 23:00 (GMT+8)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-[#1B5E72] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[#1A2B3C] text-sm font-semibold">
                      Languages Spoken
                    </p>
                    <p className="text-[#4A5A6B] text-sm">
                      Mandarin - Cantonese - English
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Boss card - Sisi (display-only, no direct WhatsApp).
                The WhatsApp button below rotates through all our agents
                so the same click may go to Diana, Lousie, Luna, etc. */}
            <div className="bg-gradient-to-br from-[#1B5E72] to-[#16463F] rounded-3xl p-6 sm:p-8 text-white">
              <div className="flex items-start gap-4">
                <img
                  src={boss.image}
                  alt={`${boss.name} - ${boss.role} at Palm Gift Card`}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-center border-2 border-[#C9A35F]/60 shadow-lg shrink-0"
                />
                <div className="flex-1 min-w-0">
                  {/* Boss badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C9A35F]/20 border border-[#C9A35F]/40 text-[#C9A35F] text-[10px] font-bold tracking-widest uppercase mb-2">
                    <Crown className="w-3 h-3" />
                    Our Boss
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold mb-1">
                    {boss.name}
                  </h4>
                  <p className="text-[#C9A35F] text-sm font-semibold mb-3">
                    {boss.role}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">
                    {boss.blurb}
                  </p>

                  {/* Rotating WhatsApp CTA - cycles through all agents every 10s */}
                  <AnimatePresence mode="wait">
                    <motion.a
                      key={activeAgentIdx}
                      href={whatsappLink(activeAgent)}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-5 py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 group/btn"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat with {activeAgent.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </motion.a>
                  </AnimatePresence>

                  {/* Rotating indicator strip */}
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-white/50 text-[11px]">
                      <Shuffle className="w-3 h-3 text-[#C9A35F]" />
                      <span>Rotates to a new agent every 10s</span>
                    </div>
                    {/* Dots showing position in rotation */}
                    <div className="flex gap-1">
                      {agentsWithWhatsApp.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeAgentIdx
                              ? "w-5 bg-[#C9A35F]"
                              : "w-1.5 bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-white/50 text-xs text-center mt-3">
                    Click now to chat with {activeAgent.name} - {activeAgent.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
