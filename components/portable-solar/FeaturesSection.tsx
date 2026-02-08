"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const features = [
  {
    title: "Versatile and Intuitive",
    content:
      "Designed for ease of use in any situation, our portable solar lights adapt to your needs whether you're at home, camping, or dealing with a power outage.",
  },
  {
    title: "Built to Last",
    content:
      "Constructed with durable materials to withstand daily use and harsh environmental conditions, ensuring reliable light for years to come.",
  },
  {
    title: "Device Charging",
    content:
      "Keep your essential devices powered up with integrated USB ports, perfect for charging mobile phones when you're off the grid.",
  },
];

export default function FeaturesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#2E3E32] py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {features.map((feature, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full border-b border-white/40 pb-10 flex justify-between items-center py-4 text-left focus:outline-none group"
              >
                <span className="w-full hover:text-[#047857] text-xl md:text-2xl font-bold">
                  {feature.title}
                </span>
                <Plus
                  className={` hover:cursor-pointer w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-gray-300 leading-relaxed">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
