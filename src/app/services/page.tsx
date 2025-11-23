"use client";

import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="px-6 md:px-8 pt-32 pb-32 max-w-5xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-white/40 uppercase tracking-[0.28em] text-xs mb-4">
            Our Services
          </p>

          <h1 className="text-white font-light text-4xl md:text-6xl leading-tight">
            High-end design, development & digital marketing for modern brands.
          </h1>

          <p className="text-white/60 text-base md:text-lg mt-6 max-w-3xl leading-relaxed">
            Neo Matrics delivers clean, premium, minimal, and high-performance digital
            experiences. We combine creativity with strategy — crafting brands,
            websites, and digital systems that drive real results.
          </p>
        </motion.div>

        {/* FEATURED DIGITAL MARKETING */}
        <Section>
          <Title>Digital Marketing — The Growth Engine</Title>

          <Paragraph>
            Digital Marketing is one of our strongest verticals. We don’t simply
            “post content” — we build long-term growth systems for your brand.
            Everything we create is strategic, aesthetic, and tailored for conversion.
          </Paragraph>

          <div className="space-y-4 text-white/60 mt-8">
            <Bul>• Social Media Management & Growth</Bul>
            <Bul>• Paid Ads (Meta, Google, YouTube, Lead Generation)</Bul>
            <Bul>• Creative Reels, Campaign Videos, Brand Films</Bul>
            <Bul>• Website Traffic & Performance Marketing</Bul>
            <Bul>• Content Calendar & Creative Strategy</Bul>
            <Bul>• Copywriting + brand messaging</Bul>
            <Bul>• Monthly management & reporting</Bul>
          </div>
        </Section>

        {/* WHAT MAKES OUR DIGITAL MARKETING PREMIUM */}
        <Section>
          <Title>Why Our Digital Marketing Is Premium</Title>

          <div className="space-y-6 text-white/60">
            <Item
              title="Strategy-First Approach"
              text="Every month includes a custom strategy, research, analysis, and brand direction
              — not random posting."
            />

            <Item
              title="High-End Visuals"
              text="Clean designs, premium reels, aesthetic content — crafted with a minimal art direction."
            />

            <Item
              title="Conversion-Focused Execution"
              text="Whether it’s lead generation or brand awareness, our goal is impact, not activity."
            />

            <Item
              title="Real Brand Building"
              text="We shape tone, story, visuals, and online perception for long-term brand identity."
            />
          </div>
        </Section>

        {/* DIGITAL MARKETING SUB-SECTIONS */}
        <Section>
          <Title>Complete Digital Marketing Suite</Title>

          <ServiceBlock
            heading="1. Social Media Management"
            details={[
              "Daily posting, reels, stories, and community interaction",
              "Aesthetic branding & content alignment",
              "Growth strategies tailored by industry",
            ]}
          />

          <ServiceBlock
            heading="2. Paid Advertising"
            details={[
              "Lead generation campaigns",
              "Google search + website traffic campaigns",
              "Optimized Meta ads (Facebook/Instagram)",
              "A/B testing + optimization",
            ]}
          />

          <ServiceBlock
            heading="3. Content Creation"
            details={[
              "Reels, product showcases, storytelling videos",
              "High-end static designs & creatives",
              "Brand voice + messaging",
            ]}
          />

          <ServiceBlock
            heading="4. Sales & Lead Funnels"
            details={[
              "Landing pages optimized for conversion",
              "Full lead journey mapping",
              "Retargeting + audience segmentation",
            ]}
          />
        </Section>

        {/* CORE SERVICES (DEEP DETAILS) */}
        <Section>
          <Title>Our Core Services</Title>

          <DeepService
            title="Brand Identity"
            description="We craft modern brand systems — logos, typography, colors, voice, guidelines.
            Everything is built for recognition, clarity, and timeless premium feel."
          />

          <DeepService
            title="UI/UX Design"
            description="Minimal interfaces, structured user flows, accessibility, and aesthetic layouts
            crafted with precision. Designed for clarity and ease."
          />

          <DeepService
            title="Web Development"
            description="Fast, responsive, SEO-optimized websites using Next.js. Modern animation,
            performance, and perfect spacing."
          />

          <DeepService
            title="Graphic Design"
            description="Reels, posters, banners, brochures, social media creatives — designed with
            a premium, minimal, brand-first style."
          />

          <DeepService
            title="Photography & Videography"
            description="Product photography, real estate shoots, brand videos, ads, editing &
            color grading — everything needed for visual storytelling."
          />
        </Section>

        {/* PAIN POINTS + SOLUTIONS */}
        <Section>
          <Title>What Clients Struggle With — And How We Fix It</Title>

          <div className="space-y-8 text-white/60">
            <PainPoint
              issue="Inconsistent brand identity"
              solution="We deliver unified visual systems, typography, colour theory, and guidelines."
            />

            <PainPoint
              issue="Low engagement on social media"
              solution="We implement strategy, storytelling, aesthetics, reels, and content calendars."
            />

            <PainPoint
              issue="Poor website performance"
              solution="We build fast, modern websites with clean UI/UX and optimized funnels."
            />

            <PainPoint
              issue="Low-quality content"
              solution="Our photography, videography, and design team create premium visuals."
            />
          </div>
        </Section>

        {/* CASE STUDIES */}
        <Section>
          <Title>Industry Success Stories</Title>

          <Case
            title="Educational Consultancy"
            text="Built complete branding and a modern website that improved trust and student leads."
          />

          <Case
            title="Loan Agency"
            text="Created a performance-driven marketing system that improved lead quality and conversions."
          />

          <Case
            title="Real Estate"
            text="Designed premium landing pages + property visuals that increased inquiries."
          />
        </Section>

        {/* AGENCY COMPARISON */}
        <Section>
          <Title>Why Neo Matrics Is Different</Title>

          <Comparison />
        </Section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-start mt-20"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 
            text-xs font-semibold uppercase tracking-[0.18em] hover:opacity-90 transition"
          >
            Start a Project
          </a>
        </motion.div>

      </div>
    </MainLayout>
  );
}

/* —————————————— COMPONENTS —————————————— */

function Section({ children }: any) {
  return <div className="mb-32">{children}</div>;
}

function Title({ children }: any) {
  return (
    <h2 className="text-white text-3xl font-light mb-8">{children}</h2>
  );
}

function Paragraph({ children }: any) {
  return (
    <p className="text-white/60 text-lg leading-relaxed max-w-3xl">{children}</p>
  );
}

function Bul({ children }: any) {
  return <p className="text-sm leading-relaxed">{children}</p>;
}

function Item({ title, text }: any) {
  return (
    <div>
      <h3 className="text-white text-xl mb-1">{title}</h3>
      <p className="text-white/60">{text}</p>
    </div>
  );
}

function ServiceBlock({ heading, details }: any) {
  return (
    <div className="mb-10">
      <h3 className="text-white text-xl mb-3">{heading}</h3>
      <ul className="space-y-2 text-white/60">
        {details.map((d: string, i: number) => (
          <li key={i}>• {d}</li>
        ))}
      </ul>
    </div>
  );
}

function DeepService({ title, description }: any) {
  return (
    <div className="mb-12">
      <h3 className="text-white text-2xl mb-3">{title}</h3>
      <p className="text-white/60 max-w-3xl leading-relaxed">{description}</p>
    </div>
  );
}

function PainPoint({ issue, solution }: any) {
  return (
    <div>
      <p className="text-white text-xl mb-1">{issue}</p>
      <p className="text-white/60 leading-relaxed">Solution: {solution}</p>
    </div>
  );
}

function Case({ title, text }: any) {
  return (
    <div className="mb-8">
      <h3 className="text-white text-xl mb-2">{title}</h3>
      <p className="text-white/60 max-w-3xl">{text}</p>
    </div>
  );
}

function Comparison() {
  return (
    <div className="text-white/60 leading-relaxed space-y-4">
      <p><strong className="text-white">Other agencies:</strong> Focus only on content posting, no strategy.</p>
      <p><strong className="text-white">Neo Matrics:</strong> Offers strategy, visuals, branding, and growth systems.</p>

      <p><strong className="text-white">Other agencies:</strong> Use templates & generic creatives.</p>
      <p><strong className="text-white">Neo Matrics:</strong> Creates premium, minimal, custom-designed content.</p>

      <p><strong className="text-white">Other agencies:</strong> Don’t track results properly.</p>
      <p><strong className="text-white">Neo Matrics:</strong> Provides reports, analytics, and monthly optimization.</p>
    </div>
  );
}
