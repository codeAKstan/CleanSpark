"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Entrance Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Trigger when top of hero hits 80% of viewport
          toggleActions: "play none restart none", // Replays when scrolling back up
        },
      });

      // Animate title lines
      tl.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      })
        // Animate description
        .from(
          descRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        // Animate buttons
        .from(
          buttonsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.7"
        );

      // Scroll Parallax Effect
      if (textRef.current) {
        gsap.to(textRef.current, {
          y: -150, // Move up
          opacity: 0, // Fade out
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen"
    >
      <div className="relative w-full h-full overflow-hidden flex items-center bg-slate-900 pt-20">
        {/* Background Image */}
        <Image
          src="/Hero2.png"
          alt="Modern solar home at dusk"
          fill
          className="w-full h-full object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/30 to-transparent"></div>

        {/* Content */}
        <div
          ref={textRef}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8 md:p-20"
        >
          <div className="max-w-3xl">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 flex flex-col"
            >
              <span className="hero-title-line block">Clean Energy.</span>
              <span className="hero-title-line block">Reliable Power.</span>
              <span className="hero-title-line block">Smarter Living.</span>
            </h1>
            <p
              ref={descRef}
              className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-xl opacity-90"
            >
              Powering African homes and businesses with sustainable, affordable,
              and high-performance solar solutions.
            </p>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="btn-scale bg-[#117a5e] hover:bg-emerald-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg shadow-[#117a5e]/25 transition-all text-center"
              >
                Get Solar Now
              </Link>
              <Link href="/locate-us">
                <button className="btn-scale bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-lg font-bold py-4 px-10 rounded-xl transition-all cursor-pointer">
                  Locate Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
