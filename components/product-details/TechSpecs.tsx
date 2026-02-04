import React from "react";
import { ProductSpec } from "@/lib/types";

interface TechSpecsProps {
  specs: ProductSpec[];
}

export function TechSpecs({ specs }: TechSpecsProps) {
  if (!specs || specs.length === 0) return null;

  return (
    <section className="py-12 bg-slate-50 rounded-2xl p-8 mb-12">
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        Technical Specifications
      </h2>
      <div className="grid gap-y-4">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-slate-200 last:border-0"
          >
            <span className="text-slate-500 font-medium">{spec.label}</span>
            <span className="text-slate-900 font-semibold">{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
