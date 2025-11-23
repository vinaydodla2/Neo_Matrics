"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20 bg-black/30 backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20">

        {/* Logo */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={70}
            className="opacity-90"
          />
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Column 1 */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/work" className="hover:text-white transition">Work</Link></li>
              <li><Link href="/process" className="hover:text-white transition">Process</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>Brand Identity</li>
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-white/50 text-sm">

              {/* Email */}
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-white/40" />
                <a
                  href="mailto:info@neomatrics.com"
                  className="hover:text-white transition"
                >
                  info@neomatrics.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-white/40" />
                <a
                  href="tel:+917396389901"
                  className="hover:text-white transition"
                >
                  +91 7396 38 9901
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a
                href="https://instagram.com/neo_matrics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-white/50 hover:text-white transition" />
              </a>

              <a
                href="https://facebook.com/neomatrics.banglore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-white/50 hover:text-white transition" />
              </a>

              <a
                href="https://linkedin.com/company/neo-matrics-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-white/50 hover:text-white transition" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 text-center text-white/40 text-xs tracking-wide">
          © {new Date().getFullYear()} Neo Matrics — Dream. Design. Disrupt.
          <br />
          <span className="text-white/30">
            All rights reserved. Designed & Developed by Neo Matrics.
          </span>
        </div>

      </div>
    </footer>
  );
}
