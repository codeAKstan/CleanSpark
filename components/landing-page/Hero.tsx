import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto pt-28 md:pt-40 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative min-h-[600px] w-full rounded-3xl overflow-hidden flex items-center shadow-2xl bg-slate-900">
        {/* Background Image */}
        <Image
          src="/house.png"
          alt="Modern solar home at dusk"
          fill
          className="w-full h-full object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-20 max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Clean Energy.
            <br />
            Reliable Power.
            <br />
            Smarter Living.
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-xl opacity-90">
            Powering African homes and businesses with sustainable, affordable,
            and high-performance solar solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="btn-scale bg-[#117a5e] hover:bg-emerald-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg shadow-[#117a5e]/25 transition-all text-center"
            >
              Get Solar Now
            </Link>
            <button className="btn-scale bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-lg font-bold py-4 px-10 rounded-xl transition-all">
              Watch Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
