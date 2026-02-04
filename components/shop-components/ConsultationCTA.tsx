import React from "react";

export function ConsultationCTA() {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-slate-50 p-8 md:p-12 border border-slate-100 border-dashed border-emerald-200/50">
      <div className="absolute inset-0 pointer-events-none border-2 border-dashed border-emerald-100 rounded-3xl m-1"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Need a custom energy plan?
          </h2>
          <p className="text-slate-600">
            Our engineers can design a tailored system for your specific needs.
          </p>
        </div>
        
        <button className="bg-[#047857] hover:bg-[#036c4e] text-white font-bold py-3 px-8 rounded-md transition-colors shadow-sm whitespace-nowrap w-full md:w-auto">
          Schedule a Free Consultation
        </button>
      </div>
    </div>
  );
}
