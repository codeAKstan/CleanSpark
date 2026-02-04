import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductBreadcrumbProps {
  productTitle: string;
}

export function ProductBreadcrumb({ productTitle }: ProductBreadcrumbProps) {
  return (
    <nav className="flex items-center text-sm text-slate-500 mb-8">
      <Link href="/shop" className="hover:text-emerald-600 transition-colors">
        Store
      </Link>
      <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
      <span className="truncate text-slate-400">Residential Systems</span>
      <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
      <span className="font-medium text-slate-900 truncate">{productTitle}</span>
    </nav>
  );
}
