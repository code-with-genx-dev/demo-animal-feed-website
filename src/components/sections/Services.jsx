import React from 'react';
import { Truck, Store, PackageCheck, MapPin, Award, Handshake } from 'lucide-react';
import { services } from '../../data/services';
import { SectionHeading } from '../common/SectionHeading';

const iconMap = {
  Truck,
  Store,
  PackageCheck,
  MapPin,
  Award,
  Handshake
};

export const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-[#faf9f6]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Our Solutions"
          title="What We Provide"
          subtitle="Comprehensive animal feed retail, wholesale distribution, and logistics services designed to serve dairy cooperatives, commercial farms, and individual farmers."
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv) => {
            const IconComponent = iconMap[srv.icon] || Store;

            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-subtle hover:border-emerald-700/30 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {srv.tag && (
                      <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-full">
                        {srv.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100">
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1 group"
                  >
                    <span>Enquire About This Service</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
