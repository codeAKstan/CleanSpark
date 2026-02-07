import Hero from "@/components/landing-page/Hero";
import PromoSection from "@/components/landing-page/PromoSection";
import Solutions from "@/components/landing-page/Solutions";
import WhyCleanSpark from "@/components/landing-page/WhyCleanSpark";
import HowItWorks from "@/components/landing-page/HowItWorks";
import Testimonials from "@/components/landing-page/Testimonials";
import CTA from "@/components/landing-page/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Hero />
      <PromoSection />
      <Solutions />
      <WhyCleanSpark />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </main>
  );
}
