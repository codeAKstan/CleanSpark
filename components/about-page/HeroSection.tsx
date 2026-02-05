import { FaPlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <img
          src="/about-hero.jpeg"
          alt="Solar panels hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Powering Africa&apos;s <br />
          <span className="text-[#4ADE80]">Sustainable Future</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Clean energy solutions built for households and businesses across the
          continent. Join the movement towards energy independence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="flex w-fit hover:cursor-pointer items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-all">
            <div className="w-6 h-6 rounded-full border-2 border-green-600 flex items-center justify-center">
              <FaPlay size={10} className="text-green-600 ml-0.5" />
            </div>
            Watch Our Story
          </button>
          <button className="flex w-fit hover:cursor-pointer items-center gap-2 bg-transparent border border-gray-500 hover:border-white text-white font-semibold py-3 px-6 rounded-full transition-all">
            Our Impact Report
          </button>
        </div>
      </div>
    </section>
  );
}
