import React, { useState } from 'react';
import { MessageCircle, Check, Sparkles } from 'lucide-react';
import { featuredProducts, categories } from '../../data/products';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const Products = ({ selectedCategoryFilter, onEnquireProduct }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sync if parent passes selected category
  const currentFilter = selectedCategoryFilter || activeFilter;

  const filteredProducts = currentFilter === 'all'
    ? featuredProducts
    : featuredProducts.filter((p) => p.categoryId === currentFilter);

  const filterTabs = [
    { id: 'all', label: 'All Feeds' },
    ...categories.map((c) => ({ id: c.id, label: c.name }))
  ];

  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 bg-[#faf9f6]" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Featured Range"
          title="Popular Feed Products"
          subtitle="Direct wholesale and retail supply of lab-formulated cattle, poultry, and goat feed for high growth and daily milk yield."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10 md:mb-12">
          {filterTabs.map((tab) => {
            const isActive = currentFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveFilter(tab.id);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-stone-200/80 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid (6 cards rendered via .map) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame with Badge */}
                <div className="relative aspect-16/11 overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute bottom-3 left-3 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    {product.category}
                  </span>

                  {/* Optional Quality / Popularity Badge */}
                  {product.badge && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      <span>{product.badge}</span>
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Packaging tag */}
                  {product.packaging && (
                    <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded inline-block">
                      Standard Pack: {product.packaging}
                    </p>
                  )}

                  {/* Key Nutritional Specs */}
                  {product.specs && (
                    <div className="pt-2 border-t border-stone-100 space-y-1.5">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Action: Enquire Now */}
              <div className="p-5 sm:p-6 pt-0">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => onEnquireProduct(product)}
                  icon={MessageCircle}
                >
                  Enquire Now
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Bulk Order helper message */}
        <div className="mt-12 text-center p-4 rounded-xl bg-white border border-stone-200/80 max-w-xl mx-auto shadow-xs">
          <p className="text-sm text-gray-700">
            Looking for a specific feed mix or wholesale tonnage pricing?{' '}
            <a href="#contact" className="text-emerald-800 font-bold underline hover:text-emerald-950">
              Request a Bulk Custom Quote →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
