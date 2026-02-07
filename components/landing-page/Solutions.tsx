import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const solutions = [
  {
    id: "1",
    title: "Portable Lanterns",
    tag: "From $49",
    tagColor: "bg-emerald-100 text-emerald-700",
    description:
      "Bright, reliable lighting that goes wherever you need it. Perfect for off-grid travel or home backup.",
    image: "/lantern_product_1770199426970.png",
    cta: "View Details",
  },
  {
    id: "2",
    title: "Home Systems",
    tag: "From $599",
    tagColor: "bg-emerald-100 text-emerald-700",
    description:
      "Full power for your home. Includes panels, batteries, and smart monitoring for total independence.",
    image: "/home_system_mockup_1770199442722.png",
    cta: "View Details",
  },
  {
    id: "3",
    title: "Business Systems",
    tag: "Contact Us",
    tagColor: "bg-emerald-100 text-emerald-700",
    description:
      "Scalable energy for commercial operations. Never lose a minute of production to power outages.",
    image: "/business_continuity_1770199467337.png",
    cta: "View Details",
  },
];

export default function Solutions() {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Solutions
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            Tailored energy products for every need
          </p>
        </div>
        <a
          href="#"
          className="group text-[#117a5e] font-bold hover:underline flex items-center gap-1"
        >
          See All Solutions{" "}
          <GoArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item, index) => (
          <div
            key={index}
            className={`group hover-lift bg-white border border-slate-200 rounded-b-3xl overflow-hidden shadow-sm ${
              index === 2
                ? "lg:col-span-1 md:col-span-2 lg:md:col-span-1"
                : ""
            }`}
          >
            <div className="h-72 overflow-hidden relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <span
                  className={`${item.tagColor} text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider`}
                >
                  {item.tag}
                </span>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed">
                {item.description}
              </p>

              <Link
                href={`/shop/${item.id}`}
                className="btn-scale block w-full bg-slate-100 hover:bg-[#117a5e] hover:text-white font-bold py-4 rounded-xl transition-colors text-center text-gray-900"
              >
                {item.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
