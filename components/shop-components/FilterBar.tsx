import React from "react";
import { filterOptions } from "@/lib/shop-data";
import { MdExpandMore } from "react-icons/md";

export function FilterBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              option.active
                ? "bg-emerald-600 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-600 hover:text-emerald-600"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-slate-500 text-sm">Sort by:</span>
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md text-sm text-slate-700 hover:border-slate-300">
            Featured
            <MdExpandMore className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
