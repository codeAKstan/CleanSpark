import HeroSection from "@/components/about-page/HeroSection";
import StatsSection from "@/components/about-page/StatsSection";
import TeamSection from "@/components/about-page/TeamSection";
import TestimonialSection from "@/components/about-page/TestimonialSection";
import CTA from "@/components/about-page/CTA";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white pt-[70px]">
      {/* pt-[70px] to account for fixed header */}
      <HeroSection />
      <StatsSection />
      <TeamSection />
      <TestimonialSection />
      <CTA />
    </main>
  );
}
