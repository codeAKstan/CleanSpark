import { HiCheckBadge } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";

const features = [
  {
    title: "Reliable Power",
    icon: <HiCheckBadge size={30} />,
    description:
      "99.9% uptime for your peace of mind and constant productivity.",
  },
  {
    title: "24/7 Support",
    icon: <MdOutlineSupportAgent size={30} />,
    description:
      "Local and key advisors whenever you need it from our expert technicians.",
  },
  {
    title: "Flexible Pay",
    icon: <FaMoneyBills size={30} />,
    description:
      "Investment plans tailored for you, making green energy accessible to all.",
  },
  {
    title: "Eco-Friendly",
    icon: <FaLeaf size={30} />,
    description:
      "Green energy for a better future, reducing carbon footprint across the continent.",
  },
];

export default function WhyCleanSpark() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why CleanSpark?
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We&apos;re more than just a solar company. We are your partner in
          building a sustainable and reliable future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 pb-2 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-200 hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-[#047857]/10 text-[#047857] rounded-full flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
