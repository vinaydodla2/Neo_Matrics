"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-40"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-20"
      >
        <p className="text-white/50 uppercase tracking-[0.25em] text-xs mb-3">
          Our Process
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
          A structured, collaborative process that delivers clarity, quality,
          and impact.
        </h2>
      </motion.div>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-12">

        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Step number */}
            <span className="text-white/20 text-6xl font-light absolute -top-8 -left-2">
              {step.num}
            </span>

            {/* Title */}
            <h3 className="text-white text-xl font-medium mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              {step.description}
            </p>

            {/* Arrow */}
            {index < processSteps.length - 1 && (
              <ArrowRight className="text-white/10 absolute right-[-25px] top-1/2 hidden md:block" />
            )}
          </motion.div>
        ))}

      </div>
    </section>
  );
}

const processSteps = [
  {
    num: "01",
    title: "Discover",
    description:
      "We understand your goals, brand story, audience, and challenges to form a strong foundation.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "We craft aesthetic concepts, visuals, and interfaces that align with your vision and identity.",
  },
  {
    num: "03",
    title: "Develop",
    description:
      "We turn designs into modern, fast, scalable digital experiences with clean code and smooth motion.",
  },
  {
    num: "04",
    title: "Deliver",
    description:
      "We refine, optimize, and launch a polished final product that performs beautifully in the real world.",
  },
];
