"use client";

import { motion } from "framer-motion";
import { Code, Palette, Camera, Rocket, LayoutGrid, Wand2 } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-40"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-16"
      >
        <p className="text-white/50 uppercase tracking-[0.25em] text-xs mb-3">
          Services
        </p>

        <h2
          className="
            text-white
            font-light
            text-4xl
            md:text-5xl
            leading-tight
            max-w-3xl
          "
        >
          Crafting digital experiences with strategy, design, and innovation.
        </h2>
      </motion.div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            className="
              group
              border border-white/5
              rounded-2xl
              p-8
              bg-white/2
              backdrop-blur-xl
              hover:border-white/15
              transition
            "
          >
            {/* Icon */}
            <service.icon className="w-8 h-8 text-white/70 mb-6 group-hover:text-white transition" />

            {/* Title */}
            <h3 className="text-white text-xl font-medium mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const servicesList = [
  {
    title: "Brand Identity",
    description:
      "Elegant, future-ready visual identities that position your brand with clarity and distinction.",
    icon: Palette,
  },
  {
    title: "UI/UX Design",
    description:
      "Premium, minimal, user-centered designs crafted for performance and engagement.",
    icon: LayoutGrid,
  },
  {
    title: "Web Development",
    description:
      "Fast, modern, scalable websites built with smooth animations and flawless responsiveness.",
    icon: Code,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategies that combine creativity, psychology, and data to help brands grow online.",
    icon: Rocket,
  },
  {
    title: "Graphic Design",
    description:
      "Visually powerful creatives, posters, and brand assets crafted with precision and impact.",
    icon: Wand2,
  },
  {
    title: "Photography & Videography",
    description:
      "High-end commercial photography, video production, and editing for brand storytelling.",
    icon: Camera,
  },
];
