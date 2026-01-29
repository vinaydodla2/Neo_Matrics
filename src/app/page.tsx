import MainLayout from "@/components/layout/MainLayout";
import PremiumParallaxScene from "@/components/scene/PremiumParallaxScene";
import VerticalGlow from "@/components/effects/VerticalGlow";
import FilmGrain from "@/components/effects/FilmGrain";
import GlassDistortion from "@/components/effects/GlassDistortion";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <MainLayout>
      <section className="relative">
        <PremiumParallaxScene />
        <VerticalGlow />
        <GlassDistortion />
        <HeroSection />
        <FilmGrain />
      </section>
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <FAQSection />
      <ContactSection/>
    </MainLayout>
  );
}