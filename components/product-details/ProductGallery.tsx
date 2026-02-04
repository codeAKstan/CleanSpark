"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square md:aspect-[4/3] w-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
        <Image
          src={images[selectedImage]}
          alt="Product View"
          fill
          className="object-contain p-8"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? "border-emerald-500 ring-2 ring-emerald-500/20"
                : "border-transparent hover:border-slate-300"
            }`}
          >
            <div className="absolute inset-0 bg-slate-50">
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-contain p-2"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
