"use client";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-12 mb-20">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600 transition-colors bg-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MdChevronLeft className="w-5 h-5" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-md font-medium hover:cursor-pointer transition-colors ${
            currentPage === page
              ? "bg-[#047857] text-white"
              : "border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 bg-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600 transition-colors bg-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MdChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
