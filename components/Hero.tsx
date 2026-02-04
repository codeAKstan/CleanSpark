import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto pt-28 md:pt-40 py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative min-h-[500px] md:h-156 w-full rounded-3xl overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero_image.png"
          alt="Modern solar home at dusk"
          fill
          className="w-full object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent"></div>
        {/* Blurry cover */}
        <div className="absolute inset-0 bg-white/2 backdrop-blur-xs"></div>

        {/* Content */}
        <div className="absolute top-16 inset-0 flex flex-col px-8 sm:px-12 lg:px-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
            Clean Energy.
            <br />
            Reliable Power.
            <br />
            Smarter Living.
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 max-w-lg mb-8">
            Powering African homes and businesses with sustainable, affordable,
            and high-performance solar solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-[#047857] hover:bg-[#036c4e] text-white text-base md:text-lg font-bold py-3 px-8 md:py-5 md:px-10 rounded-xl transition-colors"
            >
              Get Solar Now
            </Link>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-base md:text-lg font-bold py-3 px-8 md:py-5 md:px-10 rounded-xl border border-white/30 transition-colors">
              Watch Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
