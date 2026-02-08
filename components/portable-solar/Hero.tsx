"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[650px]">
      <div className="relative w-full h-full overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/portable-hero.jpeg" 
            alt="Person holding a portable solar lantern"
            fill
            className="w-full h-full object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Portable Solar <br />
              & Lanterns
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              Budget-friendly solar lanterns for portable lighting, phone
              charging, music, and radio – perfect for on-the-go use and reliable
              home light.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
