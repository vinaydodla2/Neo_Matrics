"use client";

import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import SubTitle from "@/components/ui/SubTitle";
import Section from "@/components/ui/Section";
import CTAButton from "@/components/ui/CTAButton";
import Image from "next/image";
import { motion } from "framer-motion";
import BackButton from "@/components/ui/BackButton";


export default function FinanceCaseStudy() {
  return (
    <MainLayout>
      <div className="px-6 md:px-8 pt-32 pb-32 max-w-5xl mx-auto">
        <BackButton url="/work" />


        <PageHeader
          sub="Case Study — Finance"
          title="Lead-Generation System for a Loan Agency"
          description="We built a modern conversion-focused digital system for finance clients to
          capture leads, build trust, and reduce drop-offs."
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
            src="/portfolio/finance.jpg"
            alt="Loan Agency"
            width={1500}
            height={900}
            className="w-full h-auto"
          />
        </motion.div>

        <Section>
          <SubTitle>Project Overview</SubTitle>
          <p className="text-white/60 leading-relaxed">
            Loan agencies rely heavily on leads. We created a modern landing system with
            clean UI, strong messaging, and simplified enquiry forms.
          </p>
        </Section>

        <Section>
          <SubTitle>Challenges</SubTitle>
          <ul className="space-y-3 text-white/60">
            <li>• Finance brands must appear trustworthy and professional instantly.</li>
            <li>• Lead forms need to be simple and high-converting.</li>
            <li>• Messaging must be extremely clear to avoid confusion.</li>
          </ul>
        </Section>

        <Section>
          <SubTitle>Our Solution</SubTitle>
          <p className="text-white/60 leading-relaxed max-w-3xl">
            We built a conversion-first structure with strong call-to-actions, clean UI,
            and controlled spacing. Every element was optimized to reduce friction.
          </p>
        </Section>

        <Section>
          <SubTitle>Deliverables</SubTitle>
          <ul className="text-white/60 space-y-2">
            <li>• Lead generation landing page</li>
            <li>• Clean form flow</li>
            <li>• Clear copywriting</li>
            <li>• Mobile-first UI</li>
          </ul>
        </Section>

        <div className="mt-24">
          <CTAButton link="/contact">Start Your Project</CTAButton>
        </div>
      </div>
    </MainLayout>
  );
}
