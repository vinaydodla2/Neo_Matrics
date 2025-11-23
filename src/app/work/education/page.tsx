"use client";

import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import SubTitle from "@/components/ui/SubTitle";
import Section from "@/components/ui/Section";
import CTAButton from "@/components/ui/CTAButton";
import Image from "next/image";
import { motion } from "framer-motion";
import BackButton from "@/components/ui/BackButton";


export default function EducationCaseStudy() {
  return (
    <MainLayout>
      <div className="px-6 md:px-8 pt-32 pb-32 max-w-5xl mx-auto">
       <BackButton url="/work" />

        <PageHeader
          sub="Case Study — Education"
          title="A Clean, Trust-Centered Digital Identity for an Educational Consultancy"
          description="We created a reliable, student-friendly digital presence for better guidance,
          clarity, and admission support."
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
            src="/portfolio/education.jpg"
            alt="Educational Consultancy"
            width={1500}
            height={900}
            className="w-full h-auto"
          />
        </motion.div>

        <Section>
          <SubTitle>Project Overview</SubTitle>
          <p className="text-white/60 leading-relaxed">
            The educational consultancy needed a modern website that builds trust with
            students and parents. We focused on clarity, credibility, and a clean UI.
          </p>
        </Section>

        <Section>
          <SubTitle>Challenges</SubTitle>
          <ul className="space-y-3 text-white/60">
            <li>• Most consultancy sites look outdated and cluttered.</li>
            <li>• Students prefer clean, modern layouts with easy navigation.</li>
            <li>• Clear communication is essential for converting inquiries.</li>
          </ul>
        </Section>

        <Section>
          <SubTitle>Our Solution</SubTitle>
          <p className="text-white/60 max-w-3xl leading-relaxed">
            We created a system with clean typography, structured sections, and modern
            visuals. The result: trust-building digital presence and higher inquiry rates.
          </p>
        </Section>

        <Section>
          <SubTitle>Deliverables</SubTitle>
          <ul className="text-white/60 space-y-2">
            <li>• UI/UX for website</li>
            <li>• Student-friendly layout</li>
            <li>• Service & course highlighting</li>
            <li>• Enquiry-focused design</li>
          </ul>
        </Section>

        <div className="mt-24">
          <CTAButton link="/contact">Start Your Project</CTAButton>
        </div>
      </div>
    </MainLayout>
  );
}
