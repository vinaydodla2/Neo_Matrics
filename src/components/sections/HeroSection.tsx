"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="absolute inset-0 z-10 flex items-center justify-center px-4 select-none">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-2xl"
      >
        {/* Main Title */}
        <h1 className="
          text-white
          font-light
          leading-[1.15]
          tracking-tight
          text-[42px]
          md:text-[64px]
        ">
          Dream. Design. Disrupt.
        </h1>

        {/* Subtitle */}
        <p className="
          mt-4
          text-white/60
          text-sm md:text-base
          leading-relaxed
          max-w-md
        ">
          A premium digital studio blending design, technology, and strategy to build
          modern experiences for future-focused brands.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.03, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full bg-white text-black
              text-xs font-semibold uppercase tracking-[0.18em]"><a href="/contact">Contact </a>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full
              border border-white/20 bg-white/5 text-white text-xs font-semibold uppercase tracking-[0.18em]">
            <a href="/work">Explore Work</a>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
