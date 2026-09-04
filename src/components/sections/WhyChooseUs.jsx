import React from 'react';
import { ShieldCheck, Truck, BadgePercent, Users } from 'lucide-react';
import { whyChooseUsData } from '../../data/trustData';
import { SectionHeading } from '../common/SectionHeading';

const iconMap = {
  ShieldCheck,
  Truck,
  BadgePercent,
  Users
};

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-24 bg-stone-50 border-t border-stone-200/60" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Trust & Reliability"
          title="Why Farmers Choose Us"
          subtitle="Built on strong relationships with local livestock owners, delivering trusted animal nutrition day in and day out."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChooseUsData.map((item) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/60 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
