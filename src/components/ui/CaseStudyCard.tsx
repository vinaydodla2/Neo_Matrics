"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseStudyCard({
  title,
  subtitle,
  image,
  link = "#",
}: {
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}) {
  return (
    <a href={link} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl"
      >
        <div className="w-full h-[380px] relative rounded-3xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover scale-105 group-hover:scale-110 transition-all duration-700 ease-out"
          />
        </div>

        {/* Overlay */}
        <div className="
          absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
          opacity-0 group-hover:opacity-100 transition-all duration-500
          rounded-3xl
        " />

        {/* Titles */}
        <div className="absolute bottom-6 left-6">
          <h3 className="text-white text-2xl font-light">
            {title}
          </h3>
          <p className="text-white/60 text-sm">{subtitle}</p>
        </div>
      </motion.div>
    </a>
  );
}
