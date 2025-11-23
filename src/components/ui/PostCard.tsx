"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PostCard({
  slug,
  title,
  description,
  category,
  date,
  readTime = "4 min read",
}: {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime?: string;
}) {
  return (
    <Link href={`/insights/${slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
          {category}
        </p>

        <h3 className="text-white text-2xl font-light group-hover:opacity-80 transition">
          {title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed max-w-md">
          {description}
        </p>

        <div className="text-white/40 text-xs mt-1">
          {date} — {readTime}
        </div>

        <div className="h-px bg-white/10 mt-6 group-hover:bg-white/20 transition" />
      </motion.div>
    </Link>
  );
}
