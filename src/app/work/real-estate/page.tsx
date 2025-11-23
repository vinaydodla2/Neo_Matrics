"use client";

import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import SubTitle from "@/components/ui/SubTitle";
import Section from "@/components/ui/Section";
import CTAButton from "@/components/ui/CTAButton";
import Image from "next/image";
import { motion } from "framer-motion";
import BackButton from "@/components/ui/BackButton";


export default function RealEstateCaseStudy() {
  return (
    <MainLayout>
      <div className="px-6 md:px-8 pt-32 pb-32 max-w-5xl mx-auto">
      <BackButton url="/work" />

        <PageHeader
          sub="Case Study — Real Estate"
          title="Premium Landing Experience for a Real Estate Brand"
          description="Creating a clean, modern, and highly visual landing experience that helps clients
          explore properties effortlessly and builds trust instantly."
        />

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden mb-24"
        >
          <Image
            src="/portfolio/real-estate.jpg"
            alt="Real Estate Project"
            width={1500}
            height={900}
            className="w-full h-auto"
          />
        </motion.div>

        {/* OVERVIEW */}
        <Section>
          <SubTitle>Project Overview</SubTitle>
          <p className="text-white/60 leading-relaxed">
            The client needed a premium landing page to showcase high-value properties with
            clarity, trust, and modern visual flow. We focused on structure, layout spacing,
            visual hierarchy, and a luxury-first aesthetic.
          </p>
        </Section>

        {/* CHALLENGES */}
        <Section>
          <SubTitle>Challenges</SubTitle>
          <ul className="space-y-3 text-white/60">
            <li>• Modern real estate brands require a premium look to gain trust quickly.</li>
            <li>• Property details must be clean, easy to understand, and well-structured.</li>
            <li>• High-quality visuals must be presented without clutter.</li>
          </ul>
        </Section>

        {/* SOLUTION */}
        <Section>
          <SubTitle>Our Solution</SubTitle>
          <p className="text-white/60 leading-relaxed max-w-3xl">
            We designed a minimal, high-impact landing experience using a dark theme, bold
            typography, and controlled spacing. Clear visual hierarchy kept the user focused,
            while subtle animations made the experience feel premium.
          </p>
        </Section>

        {/* DELIVERABLES */}
        <Section>
          <SubTitle>Deliverables</SubTitle>
          <ul className="text-white/60 space-y-2">
            <li>• Premium landing page design</li>
            <li>• Mobile-first responsive layout</li>
            <li>• Property gallery & quick info sections</li>
            <li>• Modern typography system</li>
            <li>• Conversion-focused CTA layout</li>
          </ul>
        </Section>

        {/* CTA */}
        <div className="mt-24">
          <CTAButton link="/contact">Start Your Project</CTAButton>
        </div>
      </div>
    </MainLayout>
  );
}
