"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pt-40 pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl"
      >
        {/* Subheading */}
        <p className="text-white/50 uppercase tracking-[0.25em] text-xs mb-4">About Us</p>

        {/* Main Heading */}
        <h2
          className="
            text-white font-light
            text-4xl md:text-5xl leading-tight">We build modern digital experiences for brands that want to lead, not follow.</h2>

        {/* Paragraph */}
        <p
          className="
            text-white/50
            text-base
            md:text-lg
            leading-relaxed
            mt-6
            max-w-2xl
          "
        >
          Neo Matrics is a digital studio shaping the future of brand presence.
          Through strategy, design, and advanced technology, we craft bold
          visual identities, immersive interfaces, and meaningful digital
          experiences that disrupt the ordinary.
        </p>
      </motion.div>
    </section>
  );
}
