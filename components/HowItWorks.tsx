import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Book a Survey",
    description:
      "Our experts visit your home or business to assess your specific energy needs and local sunlight exposure.",
  },
  {
    id: 2,
    title: "Custom Install",
    description:
      "Get a tailor-made solar system installed by certified professionals in as little as 48 hours after approval.",
  },
  {
    id: 3,
    title: "Live Smarter",
    description:
      "Enjoy uninterrupted power, lower bills, and the satisfaction of a smaller carbon footprint from day one.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Steps */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
            How It Works
          </h2>
          {steps.map((step) => (
            <div key={step.id} className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#047857] text-white flex items-center justify-center font-bold text-sm">
                  {step.id}
                </div>
                {step.id !== 3 && (
                  <div
                    className="w-0.5 h-full bg-gray-200 mx-auto my-2"
                    style={{ minHeight: "40px" }}
                  ></div>
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex-1 w-full relative">
          <div className="relative h-200 w-full max-w-lg mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/solar_panels_closeup_1770199481613.png"
              alt="Solar Panel Installation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
