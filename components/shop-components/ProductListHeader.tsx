"use client";

import { ChevronDown } from "lucide-react";

interface ProductListHeaderProps {
  count: number;
}

export function ProductListHeader({ count }: ProductListHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <h2 className="text-2xl font-bold text-gray-900">
        Energy Solutions{" "}
        <span className="text-gray-400 font-normal">({count} Products)</span>
      </h2>

      <div className="relative">
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors">
          Sort by: Popularity
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
}
