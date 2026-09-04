import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionHeading } from '../common/SectionHeading';

export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#faf9f6]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Farmer Experiences"
          title="What Local Farmers Say"
          subtitle="Real feedback from regional dairy owners, goat breeders, and poultry farmers who rely on our nutritional feed products."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-subtle flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-stone-200 pointer-events-none" />

              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed mb-6">
                  "{t.message}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-bold text-gray-900">{t.name}</h3>
                    {t.verified && (
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" title="Verified Customer" />
                    )}
                  </div>
                  <p className="text-xs font-semibold text-emerald-800">{t.role}</p>
                  <p className="text-[11px] text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reusability demo notice */}
        <p className="text-center text-xs text-stone-400 mt-10">
          * Demo testimonial showcase. Easily update customer reviews in <code className="bg-stone-200/70 text-stone-700 px-1.5 py-0.5 rounded">src/data/testimonials.js</code>.
        </p>

      </div>
    </section>
  );
};
