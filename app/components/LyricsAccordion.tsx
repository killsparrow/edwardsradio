"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LyricsAccordion({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-center py-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative rounded-full p-[2px] cursor-pointer group overflow-hidden"
        >
          {/* Rotating gradient border — oversized square so spin stays smooth on a pill shape */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_3s_linear_infinite] motion-reduce:animate-none"
            style={{
              background: 'conic-gradient(from 0deg, #bfb689, #494a5d, #bfb689, #494a5d, #bfb689)',
            }}
          />

          {/* Inner glassmorphism fill */}
          <span className="relative block rounded-full px-8 py-2.5 bg-[#24252d]/90 backdrop-blur-sm group-hover:bg-[#24252d]/70 transition-colors">
            <span className="text-sm font-semibold tracking-wide uppercase text-[#bfb689] group-hover:text-[#e1d59b] transition-colors">
              {isOpen ? 'Hide Lyrics' : 'View Lyrics'}
            </span>
          </span>

          {/* Hover glow */}
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: '0 0 20px 2px rgba(191, 182, 137, 0.3)',
            }}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
