"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-5 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Neo Matrics Logo" width={140} height={100} className="opacity-90" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-white/60 text-xs uppercase tracking-[0.2em]">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/work">Work</NavLink>
            <NavLink href="/process">Process</NavLink>
            <NavLink href="/insights">Insights</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY + MENU ARE NOW OUTSIDE HEADER */}

      <AnimatePresence>
        {open && (
          <>
            {/* BACKGROUND BLUR OVERLAY */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* FLOATING MENU PANEL */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="
                fixed z-[10000]
                top-[72px] left-4 right-4
                rounded-3xl bg-white/5 border border-white/10
                backdrop-blur-2xl shadow-xl
                md:hidden
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col px-6 py-6 space-y-6 text-white/80 text-sm uppercase tracking-[0.2em]">
                <MobileNavLink href="/" onClick={() => setOpen(false)}>Home</MobileNavLink>
                <MobileNavLink href="/about" onClick={() => setOpen(false)}>About</MobileNavLink>
                <MobileNavLink href="/services" onClick={() => setOpen(false)}>Services</MobileNavLink>
                <MobileNavLink href="/work" onClick={() => setOpen(false)}>Work</MobileNavLink>
                <MobileNavLink href="/process" onClick={() => setOpen(false)}>Process</MobileNavLink>
                <MobileNavLink href="/insights" onClick={() => setOpen(false)}>Insights</MobileNavLink>
                <MobileNavLink href="/contact" onClick={() => setOpen(false)}>Contact</MobileNavLink>

                <div className="pt-4 border-t border-white/10">
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: any) {
  return (
    <Link href={href} className="hover:text-white transition">
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="hover:text-white transition text-sm"
    >
      {children}
    </Link>
  );
}
