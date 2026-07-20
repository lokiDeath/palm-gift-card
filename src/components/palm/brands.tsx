"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Search, ChevronLeft, ChevronRight, Pause, Play, ArrowUpRight, ChevronDown, Grid3x3 } from "lucide-react";
import {
  brands,
  cardSlides,
  whatsappLinkForBrand,
  brandCategories,
  type BrandCategory,
} from "./data";

export default function Brands() {
  const [category, setCategory] = useState<BrandCategory>("All");
  const [search, setSearch] = useState("");
  const [showAllBrands, setShowAllBrands] = useState(false);

  // Slideshow state
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const total = cardSlides.length;

  const go = useCallback(
    (idx: number) => setCurrent(((idx % total) + total) % total),
    [total]
  );

  // Auto-advance slideshow
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [autoPlay, total]);

  const filtered = useMemo(() => {
    let list = brands;
    if (category !== "All") {
      list = list.filter((b) => b.category === category);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((b) => b.name.toLowerCase().includes(q));
    }
    return list;
  }, [category, search]);

  const activeCard = cardSlides[current];

  return (
    <section id="brands" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Soft watercolor blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8A4D4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5B9BD5]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle logo watermark */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04]">
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
          className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto"
        >
          <span className="inline-block text-[#C9A35F] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            Brands We Trade
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A2B3C] leading-tight">
            Cards From Every Brand You Know
          </h2>
          <p className="text-[#4A5A6B] text-base sm:text-lg mt-4">
            Tap any card below to start a trade on WhatsApp with one of our
            agents. Don&apos;t see your card? Just ask - we trade almost every
            brand available worldwide.
          </p>
        </motion.div>

        {/* ─── Gift Card Slideshow ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative max-w-5xl mx-auto mb-16"
        >
          {/* Main stage */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0E1F26] via-[#16463F] to-[#1B5E72] shadow-2xl">
            {/* Watercolor overlay */}
            <div className="absolute inset-0 watercolor-wash-dark pointer-events-none" />

            {/* Floating blobs */}
            <div className="absolute top-10 left-10 w-48 h-48 bg-[#5B9BD5]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#C9A35F]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-6 p-6 sm:p-10 lg:p-12 items-center min-h-[400px] sm:min-h-[440px]">
              {/* Left - Big featured card */}
              <div className="relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
                {/* Glow ring behind */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#C9A35F]/10 blur-3xl" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.button
                    key={current}
                    initial={{ opacity: 0, scale: 0.85, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.85, rotateY: 30 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setAutoPlay(false)}
                    className="relative z-10 group cursor-pointer"
                    aria-label={`View ${activeCard.brand} card details`}
                  >
                    <a
                      href={whatsappLinkForBrand(activeCard.brand)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src={activeCard.image}
                        alt={`${activeCard.brand} gift card - trade with Palm Gift Card`}
                        className="w-56 sm:w-64 lg:w-72 h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Floating WhatsApp badge on hover */}
                      <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                    </a>
                  </motion.button>
                </AnimatePresence>
              </div>

              {/* Right - Card info + controls */}
              <div className="text-center lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A35F]/15 border border-[#C9A35F]/30 text-[#C9A35F] text-[10px] font-bold tracking-widest uppercase mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35F] palm-pulse-soft" />
                      Now Showing
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-2">
                      {activeCard.brand}
                    </h3>
                    <p className="text-[#C9A35F] text-sm font-semibold mb-4 tracking-wide">
                      {activeCard.tag} · {activeCard.category}
                    </p>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                      We buy and sell {activeCard.brand} gift cards at the best
                      rates. Instant verification, instant payout - tap the card
                      to start a trade.
                    </p>

                    <a
                      href={whatsappLinkForBrand(activeCard.brand)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Trade {activeCard.brand}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mt-8">
                  <button
                    onClick={() => {
                      go(current - 1);
                      setAutoPlay(false);
                    }}
                    aria-label="Previous card"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Dots */}
                  <div className="flex gap-1.5">
                    {cardSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          go(i);
                          setAutoPlay(false);
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === current
                            ? "w-8 bg-[#C9A35F]"
                            : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      go(current + 1);
                      setAutoPlay(false);
                    }}
                    aria-label="Next card"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setAutoPlay(!autoPlay)}
                    aria-label={autoPlay ? "Pause" : "Play"}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors ml-1"
                  >
                    {autoPlay ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <p className="text-white/40 text-xs mt-3 text-center lg:text-left">
                  {current + 1} of {total} cards · Tap card to trade
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-6 relative">
            <div className="flex gap-3 overflow-x-auto palm-no-scrollbar pb-2 snap-x snap-mandatory">
              {cardSlides.map((slide, i) => (
                <button
                  key={slide.brand}
                  onClick={() => {
                    go(i);
                    setAutoPlay(false);
                  }}
                  className={`relative shrink-0 snap-center rounded-xl overflow-hidden transition-all duration-300 ${
                    i === current
                      ? "ring-2 ring-[#C9A35F] ring-offset-2 ring-offset-white scale-105 shadow-lg"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                  aria-label={`View ${slide.brand} card`}
                >
                  <img
                    src={slide.image}
                    alt={`${slide.brand} gift card thumbnail`}
                    className="w-20 h-28 sm:w-24 sm:h-32 object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${
                      i === current
                        ? "bg-transparent"
                        : "bg-black/20 hover:bg-transparent"
                    } transition-colors`}
                  />
                  <span className="absolute bottom-1 left-1 right-1 text-white text-[9px] sm:text-[10px] font-semibold text-center drop-shadow-md truncate">
                    {slide.brand}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── Collapsible "Browse all brands" panel ─── */}
        <div className="mt-2 max-w-5xl mx-auto">
          {/* Toggle button */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowAllBrands(!showAllBrands)}
              aria-expanded={showAllBrands}
              aria-controls="all-brands-panel"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border-2 border-[#1B5E72]/20 text-[#1B5E72] hover:bg-[#1B5E72] hover:text-white hover:border-[#1B5E72] transition-all duration-300 hover:shadow-lg hover:shadow-[#1B5E72]/20 text-sm font-semibold"
            >
              <Grid3x3 className="w-4 h-4" />
              {showAllBrands ? "Hide all brands" : `Browse all ${brands.length} brands`}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAllBrands ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Collapsible content */}
          <AnimatePresence initial={false}>
            {showAllBrands && (
              <motion.div
                id="all-brands-panel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-8">
                  {/* Filter + Search bar */}
                  <div className="flex flex-col lg:flex-row gap-4 mb-8 max-w-3xl mx-auto">
                    {/* Category pills */}
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {brandCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setCategory(cat)}
                          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                            category === cat
                              ? "bg-[#1B5E72] text-white shadow-lg shadow-[#1B5E72]/20"
                              : "bg-[#F3EFE6] text-[#4A5A6B] hover:bg-[#1B5E72]/10 hover:text-[#1B5E72]"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Search */}
                    <div className="relative lg:ml-auto lg:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5A6B]/50" />
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search brand..."
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F3EFE6] border border-[#E5DECF] text-sm text-[#1A2B3C] placeholder:text-[#4A5A6B]/50 focus:outline-none focus:border-[#1B5E72] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Brand chips grid */}
                  <motion.div
                    layout
                    className="flex flex-wrap gap-2.5 sm:gap-3 justify-center"
                  >
                    <AnimatePresence mode="popLayout">
                      {filtered.map((brand, i) => (
                        <motion.a
                          key={brand.name}
                          href={whatsappLinkForBrand(brand.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.4) }}
                          className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#FBFAF7] border border-[#E5DECF] hover:border-[#1B5E72] hover:bg-white hover:shadow-lg hover:shadow-[#1B5E72]/10 hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <span className="font-serif text-sm sm:text-base font-medium text-[#1A2B3C] group-hover:text-[#1B5E72]">
                            {brand.name}
                          </span>
                          <span className="text-[10px] tracking-wider uppercase text-[#4A5A6B]/50 hidden sm:inline">
                            {brand.category}
                          </span>
                          <MessageCircle className="w-3.5 h-3.5 text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* Empty state */}
                  {filtered.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-[#4A5A6B] text-base mb-2">
                        No brands found for &ldquo;{search}&ldquo;
                      </p>
                      <button
                        onClick={() => {
                          setSearch("");
                          setCategory("All");
                        }}
                        className="text-[#1B5E72] font-semibold text-sm hover:text-[#C9A35F] transition-colors"
                      >
                        Clear filters
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1B5E72]/8 to-[#B8A4D4]/8 border border-[#1B5E72]/15 max-w-3xl mx-auto"
        >
          <p className="font-serif text-xl sm:text-2xl font-semibold text-[#1A2B3C] mb-2">
            Don&apos;t see your card?
          </p>
          <p className="text-[#4A5A6B] text-sm sm:text-base mb-4">
            We trade over 100 brands worldwide. Message any agent with your
            card details and get a quote in minutes.
          </p>
          <a
            href="#team"
            className="inline-flex items-center gap-2 bg-[#1B5E72] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#16463F] transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            Talk to an Agent
          </a>
        </motion.div>
      </div>
    </section>
  );
}
