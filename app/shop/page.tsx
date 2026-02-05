"use client";

import React, { useState, useMemo, useEffect } from "react";
import { ShopSidebar } from "@/components/shop-components/ShopSidebar";
import { ProductListHeader } from "@/components/shop-components/ProductListHeader";
import { ProductCard } from "@/components/shop-components/ProductCard";
import { Pagination } from "@/components/shop-components/Pagination";
import { products as allProducts } from "@/lib/shop-data";

const PRODUCTS_PER_PAGE = 6;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [powerCapacity, setPowerCapacity] = useState(10); // Default to low (10W)
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Category Filter
      if (
        activeCategory !== "All Products" &&
        product.category !== activeCategory
      ) {
        return false;
      }

      // Power Filter - Show items with approximate power greater than or equal to slider
      // Using 0 as fallback
      if ((product.powerWatts || 0) < powerCapacity) {
        return false;
      }
      return true;
    });
  }, [activeCategory, powerCapacity]);

  // Pagination Logic
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, powerCapacity]);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 relative items-start">
        {/* Sidebar */}
        <ShopSidebar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          powerCapacity={powerCapacity}
          onPowerChange={setPowerCapacity}
        />

        {/* Main Content */}
        <div className="flex-grow">
          <ProductListHeader count={filteredProducts.length} />

          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedProducts.map((product) => (
                <div key={product.id} className="h-full">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-lg">
                No products found matching your filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All Products");
                  setPowerCapacity(10);
                }}
                className="mt-4 text-[#047857] font-bold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </main>
  );
}
// OLD CODE OMITTED (Assuming prior complete overwrite, or user wants clean file now. I'll just write the working code)
