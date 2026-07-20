"use client";

import { motion } from "framer-motion";
import { MessageCircle, Crown, Star, Zap, ArrowUpRight } from "lucide-react";
import { team, whatsappLink, type TeamMember } from "./data";

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const isHead = member.specialty === "boss";
  const isSenior = member.senior;

  // Choose accent per specialty
  const accent =
    member.specialty === "crypto"
      ? "#7A5BB8"
      : member.specialty === "transfers"
        ? "#B88438"
        : member.specialty === "boss"
          ? "#C9A35F"
          : "#1B5E72";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className={`group relative bg-white rounded-3xl overflow-hidden hover-lift hover:shadow-2xl border border-[#E5DECF]/60 transition-all duration-500 ${
        isHead
          ? "border-[#C9A35F]/40 hover:shadow-[#C9A35F]/15 lg:col-span-3"
          : "hover:shadow-[#1B5E72]/10"
      }`}
    >
      {/* Special badge */}
      {isHead && (
        <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C9A35F] text-[#0E1F26] text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-lg">
          <Crown className="w-3 h-3" />
          Our Boss
        </div>
      )}
      {isSenior && !isHead && (
        <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1B5E72] text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-lg">
          <Star className="w-3 h-3" />
          Senior
        </div>
      )}

      <div className={`grid ${isHead ? "lg:grid-cols-5" : "grid-cols-1"}`}>
        {/* Photo - using aspect ratio that matches the portrait images so faces aren't cut */}
        <div
          className={`relative overflow-hidden ${
            isHead
              ? "lg:col-span-2 aspect-[4/5] lg:aspect-auto lg:min-h-[20rem]"
              : "aspect-[4/5]"
          }`}
          style={{
            background: `linear-gradient(to bottom, ${accent}15, ${accent}30)`,
          }}
        >
          <img
            src={member.image}
            alt={`${member.name} - ${member.role} at Palm Gift Card`}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          {/* Soft gradient at bottom of photo for legibility - no harsh cut */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E1F26]/60 via-[#0E1F26]/20 to-transparent pointer-events-none" />

          {/* Specialty indicator */}
          {!isHead && (
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#1A2B3C] text-[10px] font-bold tracking-wider uppercase shadow-md">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: accent }}
              />
              {member.specialty}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 sm:p-8 ${isHead ? "lg:col-span-3" : ""}`}>
          <h3
            className={`font-serif font-semibold text-[#1A2B3C] mb-1 ${
              isHead ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {member.name}
          </h3>
          <p
            className="font-semibold mb-4 text-sm"
            style={{ color: accent }}
          >
            {member.role}
          </p>

          <p className="text-[#4A5A6B] text-sm sm:text-base leading-relaxed mb-6">
            {member.blurb}
          </p>

          {member.phoneDigits ? (
            <>
              {/* Single WhatsApp CTA - no phone number visible anywhere */}
              <a
                href={whatsappLink(member)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5 group/btn"
              >
                <MessageCircle className="w-4 h-4" />
                Message {member.name} directly
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              {/* Trust indicator */}
              <div className="mt-3 flex items-center justify-center gap-2 text-[#4A5A6B]/70 text-xs">
                <Zap className="w-3.5 h-3.5 text-[#C9A35F]" />
                <span>Usually replies within minutes</span>
              </div>
            </>
          ) : (
            /* Boss has no WhatsApp - show a tasteful "display only" badge */
            <div className="w-full inline-flex flex-col items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-gradient-to-br from-[#C9A35F]/8 to-[#1B5E72]/8 border border-[#C9A35F]/20">
              <div className="inline-flex items-center gap-2 text-[#C9A35F] text-xs font-bold tracking-widest uppercase">
                <Crown className="w-3.5 h-3.5" />
                Founder · Display Profile
              </div>
              <p className="text-[#4A5A6B] text-xs text-center leading-relaxed">
                To trade with us, pick any of our verified agents below - they
                reply within minutes.
              </p>
              <a
                href="#team"
                className="mt-1 inline-flex items-center gap-1.5 text-[#1B5E72] text-xs font-semibold hover:text-[#C9A35F] transition-colors"
              >
                Browse agents below
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const boss = team[0];
  const others = team.slice(1);

  return (
    <section id="team" className="py-20 sm:py-24 bg-[#FBFAF7] relative overflow-hidden">
      {/* Decorative watercolor blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#5B9BD5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8A4D4]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Logo watermark - bottom right */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.04]">
        <img
          src="/images/logo.jpeg"
          alt=""
          aria-hidden="true"
          className="w-[500px] h-[500px] object-cover rounded-full"
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
            Our Agents
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A2B3C] leading-tight">
            Talk to Someone, Not a Queue
          </h2>
          <p className="text-[#4A5A6B] text-base sm:text-lg mt-4">
            Every agent on our team is real, verified, and ready to help. Tap
            anyone below - your message lands directly on their WhatsApp, and
            they reply within minutes.
          </p>
        </motion.div>

        {/* Boss card - full width feature */}
        <div className="mb-6 sm:mb-8">
          <TeamCard member={boss} index={0} />
        </div>

        {/* Senior agents + agents - grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {others.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i + 1} />
          ))}
        </div>

        {/* Reassurance strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1B5E72]/8 to-[#B8A4D4]/8 border border-[#1B5E72]/15 text-center"
        >
          <p className="text-[#1A2B3C] text-sm sm:text-base">
            <strong className="font-semibold">
              No call centres, no waiting on hold.
            </strong>{" "}
            Message any agent above directly on WhatsApp - they will reply
            personally, usually within a few minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
