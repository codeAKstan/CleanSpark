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
    delay: "animation-delay-none",
  },
  {
    title: "24/7 Support",
    icon: <MdOutlineSupportAgent size={30} />,
    description:
      "Localized help whenever you need it from our expert technicians.",
    delay: "[animation-delay:100ms]",
  },
  {
    title: "Flexible Pay",
    icon: <FaMoneyBills size={30} />,
    description:
      "Installment plans tailored for you, making green energy accessible to all.",
    delay: "[animation-delay:200ms]",
  },
  {
    title: "Eco-Friendly",
    icon: <FaLeaf size={30} />,
    description:
      "Clean energy for a better future, reducing carbon footprint across the continent.",
    delay: "[animation-delay:300ms]",
  },
];

export default function WhyCleanSpark() {
  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold md:font-extrabold text-gray-900 mb-4">
            Why CleanSpark?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We&apos;re more than just a solar company. We are your partner in
            building a sustainable and reliable future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group animate-fade-in ${feature.delay} bg-white p-8 rounded-3xl text-center shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300`}
            >
              <div className="w-16 h-16 bg-emerald-50 text-[#117a5e] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
