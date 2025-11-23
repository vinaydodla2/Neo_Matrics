"use client";

import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import SubTitle from "@/components/ui/SubTitle";
import Section from "@/components/ui/Section";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function WorkPage() {
  return (
    <MainLayout>
      <div className="px-6 md:px-8 pt-32 pb-32 max-w-6xl mx-auto">

        {/* Hero */}
        <PageHeader
          sub="Our Work"
          title="Projects crafted with clarity, purpose, and modern aesthetics."
          description="We build premium digital experiences for brands across real estate,
          education, finance, and creative industries — focusing on clean design,
          strong visuals, and meaningful results."
        />

        <Section>
          <SubTitle>Case Studies</SubTitle>

          <div className="grid md:grid-cols-2 gap-12 mt-12">

            <CaseStudyCard
              title="Real Estate — Premium Landing Experience"
              subtitle="Branding / Web Design / Marketing"
              image="/portfolio/real-estate.jpg"
              link="/work/real-estate"
            />

            <CaseStudyCard
              title="Educational Consultancy — Clean & Trustworthy Design"
              subtitle="Brand Identity / Website / Communication"
              image="/portfolio/education.jpg"
              link="/work/education"
            />

            <CaseStudyCard
              title="Loan Agency — Lead Generation System"
              subtitle="Digital Marketing / Web / Funnels"
              image="/portfolio/finance.jpg"
              link="/work/finance"
            />
          </div>
        </Section>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h3 className="text-white text-3xl font-light mb-4">
            Want your brand to be our next case study?
          </h3>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-6">
            Let’s build a premium, modern, high-performing digital experience tailored to your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 
            text-xs font-semibold uppercase tracking-[0.18em] hover:opacity-90 transition"
          >
            Start a Project
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
