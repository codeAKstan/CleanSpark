import Image from "next/image";
import { MdChevronLeft, MdChevronRight, MdStar } from "react-icons/md";

const testimonials = [
  {
    rating: 5,
    text: '"CleanSpark changed our business. No more power outages during critical production hours. The flexible payment plan was a life-saver for a growing business like ours."',
    author: "Sarah K.",
    role: "Small Business Owner",
    image: "/sarah.png",
  },
  {
    rating: 5,
    text: "\"The transition was seamless. The engineers were professional, and now we enjoy 24/7 power at home. It's the best investment we've made for our children's future.\"",
    author: "David O.",
    role: "Homeowner",
    image: "/david.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#117a5e]/5 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="text-3xl md:text-4xl font-bold md:font-extrabold text-gray-900 text-center md:text-left">
            What Our Customers Say
          </h2>
          <div className="flex gap-4">
            <button className="btn-scale w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center bg-white hover:border-[#117a5e] transition shadow-sm text-gray-600">
              <MdChevronLeft size={28} />
            </button>
            <button className="btn-scale w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center bg-white hover:border-[#117a5e] transition shadow-sm text-gray-600">
              <MdChevronRight size={28} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl ${
                index === 1
                  ? "opacity-50 scale-95 md:scale-100 md:opacity-100 hover:opacity-100 hover:scale-100"
                  : ""
              }`}
            >
              <div className="flex gap-1 text-amber-400 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <MdStar key={i} size={24} className="fill-current" />
                ))}
              </div>

              <p className="text-xl italic text-slate-700 mb-10 leading-relaxed font-medium">
                {item.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#117a5e]/20">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {item.author}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
