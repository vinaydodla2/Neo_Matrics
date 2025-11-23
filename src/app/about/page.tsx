"use client";

import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="px-6 md:px-8 pt-32 pb-32 max-w-5xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-24"
        >
          <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-4">
            About Neo Matrics
          </p>

          <h1 className="text-white font-light text-4xl md:text-6xl leading-tight max-w-3xl">
            A modern digital studio crafting bold identities, immersive
            experiences, and future-ready brands.
          </h1>
        </motion.div>

        {/* STUDIO STORY */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-white text-2xl font-light mb-6">
            Our Story
          </h2>

          <p className="text-white/60 leading-relaxed text-base md:text-lg">
            Neo Matrics was created to bridge the gap between design, technology,
            and modern brand experiences. We believe brands deserve more than just
            a logo or a website — they deserve a presence that communicates
            clearly, moves emotionally, and performs beautifully.
          </p>

          <p className="text-white/60 leading-relaxed text-base md:text-lg mt-6">
            With a minimalist and futuristic design philosophy, we build digital
            identities, interfaces, campaigns, and online ecosystems that help
            startups, businesses, and enterprises stand out in a crowded market.
          </p>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-white text-2xl font-light mb-6">Our Mission</h2>
          <p className="text-white/60 leading-relaxed text-base md:text-lg max-w-3xl">
            To empower brands with design-driven digital experiences that feel
            premium, perform flawlessly, and inspire trust. Our approach blends
            strategy, creativity, and advanced technology into one cohesive
            system.
          </p>
        </motion.div>

        {/* VALUES GRID */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-white text-2xl font-light mb-10">Our Core Values</h2>

          <div className="grid md:grid-cols-2 gap-12 text-white/70">
            <div>
              <h3 className="text-white text-xl mb-3">Clarity & Precision</h3>
              <p className="text-sm leading-relaxed">
                We believe in simple, clear, impactful design that communicates
                instantly without noise.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-3">Minimalism</h3>
              <p className="text-sm leading-relaxed">
                Clean interfaces. Intentional details. Nothing extra. Only what
                matters.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-3">Innovation</h3>
              <p className="text-sm leading-relaxed">
                We combine creative strategy with advanced technology to build
                modern experiences.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-3">Consistency</h3>
              <p className="text-sm leading-relaxed">
                From brand identity to web presence, every element is crafted
                with intention and unity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* WHY CHOOSE US */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-32"
        >
          <h2 className="text-white text-2xl font-light mb-6">Why Choose Neo Matrics?</h2>

          <ul className="space-y-4 text-white/60 text-base md:text-lg leading-relaxed">
            <li>— We deliver premium quality design with modern aesthetics.</li>
            <li>— Fast communication, reliable deadlines, and transparent workflow.</li>
            <li>— End-to-end solutions: branding, design, web development, marketing.</li>
            <li>— Experience across education, real estate, and financial sectors.</li>
            <li>— Every project receives personal attention and custom strategy.</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-start"
        >
          <a
            href="/contact"
            className="
              inline-flex items-center justify-center
              rounded-full bg-white text-black
              px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em]
              hover:opacity-90 transition
            "
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </MainLayout>
  );
}
