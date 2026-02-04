import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import WhyCleanSpark from "@/components/WhyCleanSpark";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
        <Hero />
        <Solutions />
        <WhyCleanSpark />
        <HowItWorks />
        <Testimonials />
        <CTA />
    </main>
  );
}
