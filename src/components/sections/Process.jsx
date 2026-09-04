import React from 'react';
import { Search, MessageSquare, CheckCircle2 } from 'lucide-react';
import { processSteps } from '../../data/trustData';
import { SectionHeading } from '../common/SectionHeading';

const iconMap = {
  Search,
  MessageSquare,
  CheckCircle2
};

export const Process = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-stone-100/70 border-t border-b border-stone-200" aria-label="Order Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Simple Ordering"
          title="How It Works"
          subtitle="Ordering cattle and poultry feed has never been easier. Fast dispatch directly to your farm or store pickup."
        />

        {/* 3 Steps: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Connector line on desktop */}
          <div
            className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-emerald-200/80 -z-0"
            aria-hidden="true"
          />

          {processSteps.map((stepItem, idx) => {
            const IconComponent = iconMap[stepItem.icon] || CheckCircle2;

            return (
              <div
                key={stepItem.step}
                className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-subtle flex flex-col items-center text-center group hover:shadow-card transition-all"
              >
                {/* Step number badge */}
                <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white flex items-center justify-center text-xl font-black mb-5 shadow-sm group-hover:bg-emerald-900 transition-colors">
                  {stepItem.step}
                </div>

                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 mb-3">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {stepItem.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  {stepItem.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
