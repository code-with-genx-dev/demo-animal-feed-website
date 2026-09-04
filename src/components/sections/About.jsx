import React from 'react';
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { aboutHighlights } from '../../data/trustData';
import { Button } from '../common/Button';

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#faf9f6]" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Image Showcase with Experience Badge (Spans 6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-4/3 sm:aspect-5/4">
              <img
                src="https://picsum.photos/seed/about-feed-business/1000/800"
                alt={`Inside ${businessConfig.name} feed warehouse with stacked cattle and poultry feed bags`}
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-xs font-medium bg-stone-900/80 backdrop-blur-xs p-2.5 rounded-lg">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Serving Anthiyur, Bhavani, Gobichettipalayam, and Erode agricultural regions</span>
              </div>
            </div>

            {/* Experience Ribbon Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-emerald-800 text-white p-5 rounded-2xl shadow-xl border-4 border-white max-w-[200px]">
              <span className="text-3xl font-extrabold text-amber-300">10+</span>
              <p className="text-xs font-semibold leading-snug mt-1 text-emerald-50">
                Years of Dedicated Agricultural Partnership
              </p>
            </div>
          </div>

          {/* Right Column: Narrative and Feature Checklist (Spans 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100/70 text-emerald-800 mb-3 border border-emerald-200">
                About Our Business
              </span>
              <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                Dedicated to Healthy Livestock & Farmer Prosperity
              </h2>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Founded with the commitment to uplift regional farming productivity,{' '}
              <strong className="text-gray-900 font-semibold">{businessConfig.name}</strong> provides
              scientifically formulated cattle, poultry, and goat feed designed for higher milk yield,
              optimal feed conversion (FCR), and robust animal health.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Whether you are a dairy farmer with five milch cows, a commercial broiler producer, or a retail feed retailer, we maintain extensive warehouse inventory and direct manufacturer pricing to ensure you never run out of quality feed.
            </p>

            {/* Feature points */}
            <div className="space-y-3 pt-2">
              {aboutHighlights.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-medium text-gray-800">{point}</span>
                </div>
              ))}
            </div>

            {/* Learn More / Contact Button */}
            <div className="pt-4 flex items-center gap-4">
              <Button
                href="#products"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                Learn More
              </Button>
              <a
                href="#contact"
                className="text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors underline underline-offset-4"
              >
                Contact Our Specialists
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
