import { MdHome, MdBolt, MdPeople, MdEco } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const stats = [
  {
    icon: <MdHome size={24} />,
    value: "50k+",
    label: "Homes Powered",
  },
  {
    icon: <MdBolt size={24} />,
    value: "120MW",
    label: "Total Capacity",
  },
  {
    icon: <MdPeople size={24} />,
    value: "2.4M",
    label: "Lives Impacted",
  },
  {
    icon: <MdEco size={24} />,
    value: "850k",
    label: "Tons CO2 Saved",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[#047857] font-bold text-sm tracking-wider uppercase">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Empowering a continent with reliable, affordable power.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              CleanSpark was founded with a single goal: to solve Africa&apos;s
              energy challenges through innovative, decentralized solar
              technology. We believe access to clean power is a fundamental
              right that unlocks economic growth and community development.
            </p>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-full text-[#047857]">
                <FaCheckCircle />
              </div>
              <span className="font-semibold text-gray-800">
                Certified Sustainable Solutions
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#F0FDF4] p-8 rounded-2xl border border-green-100/50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#047857] mb-6 shadow-sm">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
