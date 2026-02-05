"use client";

import { useState } from "react";
import Link from "next/link";
import { MdCategory, MdFilterList, MdClose } from "react-icons/md";
import { MoveRight, ChevronUp, ChevronDown } from "lucide-react";

interface ShopSidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  powerCapacity: number;
  onPowerChange: (power: number) => void;
}

export function ShopSidebar({
  activeCategory,
  onCategoryChange,
  powerCapacity,
  onPowerChange,
}: ShopSidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const categories = [
    "All Products",
    "Portable Lanterns",
    "Home Solar Systems",
    "Business Continuity",
    "Industrial Storage",
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden w-full">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm text-gray-700 font-bold"
        >
          <span className="flex items-center gap-2">
            <MdFilterList className="text-[#047857] text-xl" />
            Product Filters
          </span>
          {isMobileOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Sidebar Content (Drawer on Mobile) */}
      <aside
        className={`w-full md:w-64 flex-shrink-0 space-y-10 
        ${isMobileOpen ? "block" : "hidden md:block"} 
        md:sticky md:top-24 md:h-fit md:max-h-[calc(100vh-6rem)] md:overflow-y-auto pb-4`}
      >
        {/* Categories */}
        <div className="bg-white md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none border md:border-0 border-gray-100 mb-4 md:mb-0">
          <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
            <span className="text-emerald-600 text-lg">
              <MdCategory />
            </span>{" "}
            Categories
          </h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    onCategoryChange(category);
                    setIsMobileOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg hover:cursor-pointer text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-[#047857] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Power Capacity */}
        <div className="bg-white md:bg-transparent mt-6 p-4 md:p-0 rounded-lg md:rounded-none border md:border-0 border-gray-100 mb-4 md:mb-0">
          <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-6">
            <span className="text-emerald-600">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <line x1="16" y1="21" x2="16" y2="8" />
                <line x1="12" y1="21" x2="12" y2="8" />
                <line x1="8" y1="21" x2="8" y2="8" />
              </svg>
            </span>
            Power Capacity
          </h3>
          <div className="px-2">
            <input
              title="Power Capacity"
              type="range"
              min="10"
              max="10000"
              value={powerCapacity}
              onChange={(e) => onPowerChange(Number(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#047857]"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
              <span>10W</span>
              <span>
                {powerCapacity >= 10000 ? "10kW+" : `${powerCapacity}W`}
              </span>
            </div>
          </div>
        </div>

        {/* Need Advice Card */}
        <div className="bg-green-50 rounded-xl p-6 mt-6 mr-0 md:mr-4 border border-green-200">
          <h4 className="font-bold text-[#047857] mb-2">Need advice?</h4>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Our experts can help you choose the right system for your home.
          </p>
          <Link
            href="/support"
            className="flex items-center text-[#047857] text-sm font-bold hover:underline gap-1 group"
          >
            Book a Survey
            <MoveRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </aside>
    </>
  );
}
