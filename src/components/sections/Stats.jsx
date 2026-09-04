import React from 'react';
import { statsData } from '../../data/trustData';

export const Stats = () => {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6" aria-label="Business Statistics">
      <div className="bg-white rounded-2xl shadow-card border border-stone-200/80 p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {statsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? 'pt-4 sm:pt-0' : ''
              }`}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-800 tracking-tight font-sans">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-bold text-gray-800 mt-1.5">
                {stat.label}
              </span>
              {stat.sublabel && (
                <span className="text-xs text-gray-500 mt-0.5 max-w-[180px]">
                  {stat.sublabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
