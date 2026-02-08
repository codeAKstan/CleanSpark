import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Book a Survey",
    description:
      "Our experts visit your home or business to assess your specific energy needs and local sunlight exposure.",
    active: true,
  },
  {
    id: 2,
    title: "Custom Install",
    description:
      "Get a tailor-made solar system installed by certified professionals in as little as 48 hours after approval.",
    active: true,
  },
  {
    id: 3,
    title: "Live Smarter",
    description:
      "Enjoy uninterrupted power, lower bills, and the satisfaction of a smaller carbon footprint from day one.",
    active: true,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="space-y-12 relative">
            {/* Vertical Line */}
            <div className="absolute top-6 left-6 bottom-6 w-0.5 bg-slate-200">
              <div className="w-full h-3/3 bg-[#117a5e] step-line-glow"></div>
            </div>

            {steps.map((step) => (
              <div key={step.id} className="flex gap-8 relative group">
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 transition-all ${
                    step.active
                      ? "bg-[#117a5e] text-white shadow-lg shadow-[#117a5e]/30 group-hover:scale-110"
                      : "bg-slate-200 text-slate-500 hover:bg-[#117a5e] group-hover:text-white"
                  }`}
                >
                  {step.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-0 rotate-2">
            <Image
              src="/solar_panels_closeup_1770199481613.png"
              alt="Solar installation process"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
