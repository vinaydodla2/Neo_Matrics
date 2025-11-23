"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative z-0"                   // ← keeps transitions below overlays
        style={{ pointerEvents: "auto" }}          // ← allows normal clicks
        initial={{ opacity: 0 }}                   // fade effect
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
