"use client";

import React, { useState } from "react";
import { Product } from "@/lib/types";
import { Star, Check, Zap, MessageCircle } from "lucide-react";
import BuyNowModal from "./BuyNowModal";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {/* Badge */}
      {product.badges && product.badges.length > 0 && (
        <div className="mb-4">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.badges[0].text}
          </span>
        </div>
      )}

      {/* Title & Rating */}
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
        {product.title}
      </h1>
      
      <div className="flex items-center gap-2 mb-6">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <span className="text-sm text-slate-500">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="text-3xl font-bold text-emerald-700 mb-6">
        {product.priceLabel || product.price}
      </div>

      {/* Description */}
      <p className="text-slate-600 mb-8 leading-relaxed">
        {product.longDescription || product.description}
      </p>

      {/* What's Included */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
          What's Included:
        </h3>
        <ul className="space-y-3">
          {product.whatsIncluded?.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-600 text-sm">
              <div className="mt-0.5 bg-emerald-100 rounded-full p-0.5">
                <Check className="w-3 h-3 text-emerald-600" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
        <div>
          <span className="block text-xs font-semibold text-slate-500 uppercase mb-1">
            Daily Yield
          </span>
          <span className="text-lg font-bold text-slate-900">
            {product.dailyYield}
          </span>
        </div>
        <div>
          <span className="block text-xs font-semibold text-slate-500 uppercase mb-1">
            Warranty
          </span>
          <span className="text-lg font-bold text-slate-900">
            {product.warranty}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Zap className="w-5 h-5" />
          Buy Now
        </button>
      </div>

      {/* Buy Now Modal */}
      <BuyNowModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={product.title} 
      />

      {/* Trust Signals */}
      <div className="flex items-center gap-6 text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-emerald-500" />
          Free Installation
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-emerald-500" />
          Fast Delivery
        </div>
      </div>
      
      {/* Chat Bubble (floating or absolute based on design, putting here for layout) */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <button className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105">
           <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
