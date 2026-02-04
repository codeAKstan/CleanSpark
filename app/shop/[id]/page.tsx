import React from "react";
import { notFound } from "next/navigation";
import { products } from "@/lib/shop-data";
import { ProductBreadcrumb } from "@/components/product-details/ProductBreadcrumb";
import { ProductGallery } from "@/components/product-details/ProductGallery";
import { ProductInfo } from "@/components/product-details/ProductInfo";
import { HowItWorks } from "@/components/product-details/HowItWorks";
import { TechSpecs } from "@/components/product-details/TechSpecs";
import { CustomerReviews } from "@/components/product-details/CustomerReviews";
import { FAQSection } from "@/components/product-details/FAQSection";

// This is necessary for static site generation with dynamic routes
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductBreadcrumb productTitle={product.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ProductGallery images={product.gallery || [product.image]} />
          <ProductInfo product={product} />
        </div>

        {product.howItWorks && product.howItWorks.length > 0 && (
          <HowItWorks steps={product.howItWorks} />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-1">
             {/* Sticky sidebar for specs if needed, or just normal flow */}
             {product.specs && product.specs.length > 0 && (
                 <TechSpecs specs={product.specs} />
             )}
          </div>
          
          <div className="lg:col-span-2">
             {product.reviews && product.reviews.length > 0 && (
                <CustomerReviews reviews={product.reviews} />
             )}
          </div>
        </div>

        {product.faqs && product.faqs.length > 0 && (
          <FAQSection faqs={product.faqs} />
        )}
      </div>
    </div>
  );
}
