import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';
import { SectionHeading } from '../common/SectionHeading';

export const Categories = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 sm:py-20 md:py-24 bg-stone-50 border-t border-b border-stone-200/60" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Product Range"
          title="Our Feed Categories"
          subtitle="Carefully balanced, high-protein formulations designed for specific livestock growth and productivity stages."
        />

        {/* Categories Grid (4 cards rendered via .map) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Image Preview */}
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-emerald-900 text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs">
                  {cat.itemCount}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {cat.shortDescription}
                  </p>

                  {/* Highlights pills */}
                  {cat.highlights && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-stone-100">
                      {cat.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium bg-stone-100 text-stone-700 px-2 py-0.5 rounded"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Arrow Action Button */}
                <div className="pt-5 mt-4 border-t border-stone-100">
                  <a
                    href="#products"
                    onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 group-hover:translate-x-1 transition-all"
                    aria-label={`Explore ${cat.name} products`}
                  >
                    <span>View Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
