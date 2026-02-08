import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Ready to join the green movement?
        </h2>
        <p className="text-gray-500 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
          Partner with us to accelerate Africa&apos;s transition to renewable
          energy. Whether you&apos;re a homeowner, business owner, or installer,
          we&apos;re here to help.
        </p>
        <button className="bg-[#047857] hover:cursor-pointer hover:bg-[#036c4e] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 mx-auto">
          Get in Touch
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
