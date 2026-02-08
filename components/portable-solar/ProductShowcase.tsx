"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "pico-plus",
    title: "Pico Plus",
    description:
      "This affordable solar lantern combines bright lighting and a solar panel in one convenient package.",
    image: "/lantern_product_1770199426970.png",
    link: "/shop/pico-plus",
  },
  {
    id: "pro",
    title: "Pro",
    description:
      "Portable, solar-powered lantern with basic phone charging, providing up to 100 hours of light on a single charge.",
    image: "/lantern_product_1770199426970.png", 
    link: "/shop/pro",
  },
  {
    id: "boom",
    title: "Boom",
    description:
      "Versatile solar lantern providing lighting, basic phone charging, music, and radio all in one.",
    image: "/lantern_product_1770199426970.png", 
    link: "/shop/boom",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-none p-0 flex flex-col items-center group" // Removed standard card styling to match image which looks very clean/flat or slight shadow
            >
              <div className="w-full aspect-square bg-gray-100 mb-6 relative flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="text-center px-4 pb-8 flex flex-col flex-grow w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                <Link
                  href={product.link}
                  className="inline-block w-full bg-[#047857] hover:bg-[#036c4e] text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
