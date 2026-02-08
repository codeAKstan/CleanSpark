import { MdCheckCircle, MdEmail, MdPhone } from "react-icons/md";

export default function PromoSection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/expert.jpg")', // Solar installer image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-sm">
            Looking To Slash Your Power Bills <span className="text-emerald-400">By Up To 70%</span> Using Solar Energy? Get In Touch And We’ll Make It Happen!
          </h2>
          
          <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-8">
            Premium Quality Solar Energy System
          </h3>

          <ul className="space-y-4 mb-10">
            {[
              "Slash Your Power Bills",
              "High Quality Products",
              "Top Workmanship",
              "Locally Supplied & Serviced"
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 group">
                <span className="text-emerald-400 text-2xl group-hover:scale-110 transition-transform duration-300">
                  <MdCheckCircle />
                </span>
                <span className="text-white text-lg font-medium tracking-wide shadow-black drop-shadow-md">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-scale hover:cursor-pointer flex items-center justify-center gap-2 bg-[#117a5e] hover:bg-emerald-700 text-white text-lg font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-[#117a5e]/25">
              <MdEmail size={24} />
              Free Quote
            </button>
            
            <button className="btn-scale hover:cursor-pointer flex items-center justify-center gap-2 border-2 border-slate-400 hover:border-white hover:bg-white/10 text-white text-lg font-bold py-3 px-8 rounded-full transition-all">
              <MdPhone size={24} />
              (08) 6288 7154
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
