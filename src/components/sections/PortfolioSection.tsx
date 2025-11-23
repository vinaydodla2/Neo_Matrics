"use client";

import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section
      id="work"
      className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-40"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-20"
      >
        <p className="text-white/50 uppercase tracking-[0.25em] text-xs mb-3">
          Recent Work
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
          Brands we’re helping shape through design, strategy, and technology.
        </h2>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 22 }}
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
              h-full
              bg-white/2
              backdrop-blur-2xl
              hover:border-white/15
              hover:bg-white/5
              transition
              cursor-pointer
            "
          >
            {/* Title */}
            <h3 className="text-white text-2xl font-medium mb-3">
              {item.title}
            </h3>

            {/* Industry */}
            <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-4">
              {item.category}
            </p>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Subtle “View Case Study” */}
            <p className="text-white/70 text-xs font-semibold tracking-[0.18em] group-hover:text-white transition">
              View Case Study →
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

const portfolioItems = [
  {
    title: "EduBright Consultancy",
    category: "Educational Consultancy",
    description:
      "A full branding and digital transformation project for an education consultancy connecting students with global opportunities.",
  },
  {
    title: "FinanceEase Loans",
    category: "Loan Agency",
    description:
      "A clean, trustworthy digital presence for a loan agency offering fast, secure, and transparent financial solutions.",
  },
  {
    title: "UrbanNest Realty",
    category: "Real Estate",
    description:
      "A premium real estate digital experience showcasing modern properties with smooth UX and aesthetic visuals.",
  },
];
