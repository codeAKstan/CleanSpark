"use client";

import React from "react";
import Hero from "@/components/portable-solar/Hero";
import ProductShowcase from "@/components/portable-solar/ProductShowcase";
import InfoSection from "@/components/portable-solar/InfoSection";
import FeaturesSection from "@/components/portable-solar/FeaturesSection";

export default function PortableSolarPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <InfoSection />
      <FeaturesSection />
    </main>
  );
}
