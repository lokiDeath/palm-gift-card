"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Crown } from "lucide-react";
import { agentsWithWhatsApp, whatsappLink } from "./data";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Close picker on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPicker(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop on mobile when picker is open */}
      <AnimatePresence>
        {showPicker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPicker(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Agent picker popover */}
      <AnimatePresence>
        {showPicker && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-80 max-w-sm bg-white rounded-3xl shadow-2xl border border-[#E5DECF]/60 overflow-hidden"
          >
            <div className="p-4 sm:p-5 bg-gradient-to-br from-[#1B5E72] to-[#16463F] text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-lg sm:text-xl font-semibold">
                    Pick an Agent
                  </p>
                  <p className="text-white/70 text-xs">
                    Replies usually within 5 minutes
                  </p>
                </div>
                <button
                  onClick={() => setShowPicker(false)}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="max-h-72 overflow-y-auto p-2 palm-no-scrollbar">
              {agentsWithWhatsApp.map((member) => (
                <a
                  key={member.name}
                  href={whatsappLink(member)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowPicker(false)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F3EFE6] transition-colors group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-11 h-11 rounded-full object-cover object-center border-2 border-[#1B5E72]/15"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[#1A2B3C] text-sm font-semibold flex items-center gap-1.5">
                      {member.name}
                      {member.senior && (
                        <Crown className="w-3 h-3 text-[#C9A35F]" />
                      )}
                    </p>
                    <p className="text-[#4A5A6B] text-xs truncate">
                      {member.role}
                    </p>
                  </div>
                  <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setShowPicker(!showPicker)}
        aria-label="Open agent picker"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {showPicker ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        )}
        {/* Pulse ring */}
        {!showPicker && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        )}
        {/* Tooltip - desktop only */}
        {!showPicker && (
          <span className="hidden lg:block absolute right-full mr-3 bg-[#0E1F26] text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Pick an agent to chat
          </span>
        )}
        {/* Notification dot - mobile */}
        {!showPicker && (
          <span className="lg:hidden absolute -top-1 -right-1 w-4 h-4 bg-[#C9A35F] rounded-full border-2 border-white text-[9px] font-bold text-[#0E1F26] flex items-center justify-center">
            !
          </span>
        )}
      </motion.button>
    </>
  );
}
