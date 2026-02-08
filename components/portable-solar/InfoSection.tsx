"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function InfoSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            What is a Portable
            <br />
            Solar Light?
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Affordable and portable solar lanterns offering lighting and phone
            charging. Ideal for on-the-go use, CleanSpark&apos;s lanterns range from
            basic solar-powered lanterns to advanced models with integrated
            lighting, phone charging, radio, and music features.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 md:py-4 px-8 rounded-full transition-colors"
          >
            Browse our range
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative flex justify-center">
          {/* Decorative Dashed Circle - purely CSS/SVG or similar effect */}
          <div className="relative w-75 h-75 md:w-100 md:h-100">
            
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
              <Image
                src="/portable-info.jpeg"
                alt="Family under solar light"
                fill
                className="object-cover"
              />
            </div>

            {/* Dashed border effect - simulating the sun rays/dashed circle from design */}
            <div
              className="absolute inset-0 rounded-full border-[10px] border-dashed border-orange-200 animate-spin-slow"
              style={{ animationDuration: "60s" }}
            ></div>
            <div className="absolute -inset-4 rounded-full border-[20px] border-orange-100 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
