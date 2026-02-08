"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function SolarHomeSystemsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <InfoSection />
      <ProductsSection />
      <FAQSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[650px] w-full flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/forhome-hero.jpeg"
          alt="Solar Home Systems"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white pt-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
          Solar Home Systems and Appliances
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          Light your home, charge your phones, and power compatible TVs, radios,
          and fans with CleanSpark's ultra-affordable solar home systems.
        </p>
        <Link
          href="/shop"
          className="bg-[#047857] hover:bg-[#036c4e] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
        >
          Explore Our Store
        </Link>
      </div>
    </section>
  );
}

function InfoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What is a Solar Home System?
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Cost-effective rooftop solar systems that power lights, mobile
            phones, and DC-compatible products like televisions and fans.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Designed for customers with no or unreliable electrical grid access
            and offering basic electricity, these systems provide essential
            light and power to homes and businesses across the continent.
          </p>
          <Link
            href="/shop"
            className="text-[#047857] font-bold border border-[#047857] py-3 px-8 rounded-lg hover:bg-[#047857] hover:text-white transition-all inline-block"
          >
            Browse our range
          </Link>
        </div>
        <div className="relative h-[400px] w-full rounded-full overflow-hidden border-8 border-gray-100 shadow-xl">
          <Image
            src="/woman.png"
            alt="Woman using solar panel"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    {
      title: "HomePlus",
      description: "Ultra-affordable solar lighting and basic phone charging.",
      image: "/HomePlus.png",
      link: "/shop/7",
    },
    {
      title: "HomePlus Pro",
      description:
        "Comprehensive lighting and smartphone charging with upgraded capacity.",
      image: "/HomePlus_pro.png",
      link: "/shop/8",
    },
    {
      title: "HomePlus Max",
      description:
        "Powerful solar lighting and laptop charging, battery chargeable by solar or grid power.",
      image: "/HomePlus_max.png",
      link: "/shop/2",
    },
    {
      title: "Solar TV Bundle",
      description:
        "Powerful solar lighting and a solar powered 24'' HD TV bundle.",
      image: "/tv.png",
      link: "/shop/9",
    },
    {
      title: '18" Solar Fan',
      description:
        "Lightweight and portable solar fan with standalone solar panel and robust battery.",
      image: "/Solar_fan.png",
      link: "/shop/10",
    },
    {
      title: 'Max + 32" TV + Fan',
      description:
        "Our complete premium package for ultimate comfort and entertainment.",
      image: "/32tv.png",
      link: "/shop/4",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Range of Solar Home Systems
        </h2>
        <p className="text-gray-500 mb-16">
          Explore high-efficiency solar bundles designed for modern African
          homes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
            >
              <div className="relative w-full h-48 mb-6 bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
                {product.description}
              </p>
              <Link
                href={product.link}
                className="w-full bg-[#047857] text-white font-bold py-3 rounded-lg hover:bg-[#036c4e] transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Safe, Bright, Modern Lighting",
      answer:
        "Our LED bulbs are designed to last for years, providing bright, safe illumination that replaces dangerous kerosene lamps and candles.",
    },
    {
      question: "Robust Battery Performance",
      answer:
        "CleanSpark systems use long-lasting Lithium Iron Phosphate (LiFePO4) batteries that offer thousands of cycles and reliable power storage.",
    },
    {
      question: "Industry-Leading Warranty",
      answer:
        "We stand by our products with comprehensive warranties ranging from 2 to 5 years, ensuring peace of mind for your investment.",
    },
  ];

  return (
    <section className="bg-[#047857] py-20 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get to Know Our Systems
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#059669] rounded-lg overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-bold hover:bg-[#047857] transition-colors"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <p className="text-emerald-50 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
