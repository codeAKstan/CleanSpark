import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="bg-[#117A5E] py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="max-w-4xl mx-auto relative">
        <FaQuoteLeft className="text-[#ffffff20] text-6xl absolute -top-10 left-0 md:-left-16" />

        <h3 className="text-2xl md:text-3xl font-medium italic leading-relaxed mb-12 relative z-10">
          &quot;Before CleanSpark, our local clinic struggled with power
          outages. Now, we provide 24/7 care to our community. This is more than
          electricity; it&apos;s health and hope.&quot;
        </h3>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-green-200 border-2 border-green-300 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
              <Image src="/about-testimony.jpeg" alt="Dr. Sarah Tunde" fill className="object-cover rounded-full" />
            </div>
          </div>
          <div className="text-lg font-bold">Dr. Sarah Tunde</div>
          <div className="text-green-100 text-sm">
            Regional Clinic Director, Lagos
          </div>
        </div>
      </div>
    </section>
  );
}
