import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export function Pagination() {
  return (
    <div className="flex justify-center items-center gap-2 mb-20">
      <button className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600 transition-colors bg-white hover:cursor-pointer">
        <MdChevronLeft className="w-5 h-5" />
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[#047857] text-white font-medium hover:cursor-pointer">
        1
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors bg-white hover:cursor-pointer">
        2
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors bg-white hover:cursor-pointer">
        3
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600 transition-colors bg-white hover:cursor-pointer">
        <MdChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
