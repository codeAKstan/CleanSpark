import React from "react";
import { ShopHero } from "@/components/shop-components/ShopHero";
import { FilterBar } from "@/components/shop-components/FilterBar";
import { ProductGrid } from "@/components/shop-components/ProductGrid";
import { Pagination } from "@/components/shop-components/Pagination";
import { ConsultationCTA } from "@/components/shop-components/ConsultationCTA";
import { products } from "@/lib/shop-data";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShopHero />
        <FilterBar />
        <ProductGrid products={products} />
        <Pagination />
        <ConsultationCTA />
      </div>
    </div>
  );
}
