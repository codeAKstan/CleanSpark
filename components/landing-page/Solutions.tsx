import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const solutions = [
  {
    id: "1",
    title: "Portable Lanterns",
    tag: "STARTING $40",
    tagColor: "bg-green-100 text-[#047857]",
    description:
      "Bright, reliable lighting that goes wherever you need it. Perfect for off-grid travel or home backup.",
    image: "/lantern_product_1770199426970.png",
    cta: "Details",
  },
  {
    id: "2",
    title: "Home Systems",
    tag: "FROM $500",
    tagColor: "bg-green-100 text-[#047857]",
    description:
      "Full power for your home. Includes panels, batteries, and smart monitoring for total independence.",
    image: "/home_system_mockup_1770199442722.png",
    cta: "Details",
  },
  {
    id: "3",
    title: "Business Continuity",
    tag: "CONTACT US",
    tagColor: "bg-green-100 text-[#047857]",
    description:
      "Scalable energy for commercial operations. Never lose a minute of production to power outages.",
    image: "/business_continuity_1770199467337.png",
    cta: "Details",
  },
];

export default function Solutions() {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className=" max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Solutions
            </h2>
            <p className="text-gray-500 mt-2">
              Tailored energy products for every need
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center text-[#047857] font-semibold hover:underline"
          >
            See All Solutions
            <GoArrowRight />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col group rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-120 transition-transform duration-500 ease-in-out"
                />
              </div>

              <div className="flex justify-between items-center mb-2 px-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full uppercase ${item.tagColor}`}
                >
                  {item.tag}
                </span>
              </div>

              <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6 px-6">
                {item.description}
              </p>

              <Link
                href={`/shop/${item.id}`}
                className="block m-auto mx-6 mb-6 font-bold text-white bg-[#047857] md:bg-gray-100 group-hover:bg-[#047857] group-hover:text-white hover:cursor-pointer md:text-gray-900 py-2 px-6 rounded-lg transition-colors ease-in-out duration-300 text-sm md:text-base text-center"
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
