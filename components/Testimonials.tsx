import Image from "next/image";

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
    text: "\"The installation was seamless. The engineers were professional, and now we enjoy 24/7 power at home. It's the best investment we've made for our children's future.\"",
    author: "David O.",
    role: "Homeowner",
    image: "/david.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-green-50/70 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 italic mb-6 leading-relaxed">
                {item.text}
              </p>

              <div className="flex rounded-full items-center gap-3">
                <Image
                  width={48}
                  height={48}
                  src={item.image}
                  alt={item.author}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {item.author}
                  </p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
