import React from "react";
import { HowItWorksStep } from "@/lib/types";
import { Sun, Battery, Zap, BarChart3 } from "lucide-react";

interface HowItWorksProps {
  steps: HowItWorksStep[];
}

const icons = {
  sun: Sun,
  battery: Battery,
  bolt: Zap,
  chart: BarChart3,
};

export function HowItWorks({ steps }: HowItWorksProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">How it Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = icons[step.icon];
          return (
            <div key={index} className="flex flex-col">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
