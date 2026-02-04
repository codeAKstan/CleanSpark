import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

const badgeColors = {
  green: "bg-emerald-100 text-emerald-800",
  blue: "bg-blue-100 text-blue-800",
  orange: "bg-orange-100 text-orange-800",
  purple: "bg-purple-100 text-purple-800",
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-slate-100 flex flex-col h-full group">
      {/* Image Container */}
      <Link href={`/shop/${product.id}`} className="block relative h-48 sm:h-56 w-full bg-slate-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badges */}
        {product.badges && (
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.badges.map((badge, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  badgeColors[badge.color]
                }`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <Link href={`/shop/${product.id}`} className="hover:text-emerald-700 transition-colors">
            <h3 className="font-bold text-slate-900 text-lg leading-tight">
              {product.title}
            </h3>
          </Link>
          <span className="text-emerald-700 font-bold whitespace-nowrap text-sm">
            {product.price}
          </span>
        </div>
        
        <p className="text-slate-500 text-sm mb-6 flex-grow">
          {product.description}
        </p>

        <Link 
          href={`/shop/${product.id}`}
          className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors text-sm text-center block"
        >
          {product.ctaText}
        </Link>
      </div>
    </div>
  );
}
