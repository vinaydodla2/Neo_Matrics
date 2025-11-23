"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          rounded-3xl
          bg-white/3
          backdrop-blur-2xl
          border border-white/10
          px-8 py-10 md:px-12 md:py-12
          flex flex-col md:flex-row items-start md:items-center justify-between gap-8
        "
      >
        <div className="max-w-xl">
          <p className="text-white/50 uppercase tracking-[0.25em] text-xs mb-3">
            Contact
          </p>

          <h2 className="text-white font-light text-3xl md:text-4xl leading-tight mb-3">
            Ready to start a project with Neo Matrics?
          </h2>

          <p className="text-white/60 text-sm md:text-base">
            Share your idea, and we’ll help you turn it into a clean, modern,
            premium digital experience that stands out.
          </p>
        </div>

        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-white text-black
              px-8 py-3
              text-xs font-semibold uppercase tracking-[0.18em]
              hover:opacity-90
              transition
            "
          >
            Go to Contact Page
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
