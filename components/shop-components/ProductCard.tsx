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
      <Link
        href={`/shop/${product.id}`}
        className="block relative h-48 sm:h-56 w-full bg-slate-50 overflow-hidden"
      >
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
        <Link href={`/shop/${product.id}`} className="block mb-2">
          <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1 hover:text-[#047857] transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </Link>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-gray-900 font-bold text-lg">
            {product.price}
          </span>
          <Link
            href={`/shop/${product.id}`}
            className="bg-[#047857] hover:bg-[#036c4e] text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
