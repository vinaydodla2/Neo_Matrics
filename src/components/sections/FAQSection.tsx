"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQItem({ faq }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        rounded-xl
        
    
        p-6
        transition-all
        hover:bg-white/5
        
      "
    >
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white text-lg">{faq.question}</span>

        <ChevronDown
          className={`text-white/70 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/50 text-sm leading-relaxed mt-4"
          >
            {faq.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pt-32 pb-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-20"
      >
        <p className="text-white/50 uppercase tracking-[0.25em] text-xs mb-3">
          FAQs
        </p>

        <h2 className="text-white font-light text-4xl md:text-5xl leading-tight max-w-3xl">
          Common questions we get from our clients.
        </h2>
      </motion.div>

      <div className="space-y-4">
        {faqList.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </section>
  );
}

const faqList = [
  {
    question: "How long does a full branding or website project take?",
    answer:
      "Most projects take 3–6 weeks depending on scope. Larger systems, dashboards, or custom apps may take 6–12 weeks.",
  },
  {
    question: "Do you work with small businesses or only large brands?",
    answer:
      "We work with startups, small brands, and enterprise clients. What matters most is intention and ambition.",
  },
  {
    question: "What is your design style?",
    answer:
      "Modern, minimal, high-end, and clarity-focused. We blend premium aesthetics with strategy and performance.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer monthly support, maintenance, content updates, and continuous improvements.",
  },
  {
    question: "Can you help with marketing and brand growth?",
    answer:
      "Absolutely. We offer digital marketing, branding, strategy, performance campaigns, and ongoing consulting.",
  },
];
