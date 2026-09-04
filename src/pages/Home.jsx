import React, { useState, useEffect } from 'react';
import { businessConfig, getLocalBusinessSchema } from '../data/businessConfig';
import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { About } from '../components/sections/About';
import { Categories } from '../components/sections/Categories';
import { Products } from '../components/sections/Products';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Services } from '../components/sections/Services';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { Location } from '../components/sections/Location';
import { Contact } from '../components/sections/Contact';
import { FinalCTA } from '../components/sections/FinalCTA';
import { EnquiryModal } from '../components/common/EnquiryModal';

export const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Dynamic SEO & Structured Data Injection from businessConfig
  useEffect(() => {
    // 1. Update document title
    document.title = `${businessConfig.name} | ${businessConfig.tagline}`;

    // 2. Inject or update LocalBusiness JSON-LD schema
    const schemaScriptId = 'business-ld-json';
    let scriptTag = document.getElementById(schemaScriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaScriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(getLocalBusinessSchema(), null, 2);

    // 3. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', businessConfig.seo.description || businessConfig.description);
    }
  }, []);

  const handleCategorySelect = (categoryId) => {
    setCategoryFilter(categoryId);
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProductEnquiry = (product) => {
    setSelectedProduct(product);
  };

  return (
    <main className="flex-1">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Stats Counter */}
      <Stats />

      {/* 3. About Section */}
      <About />

      {/* 4. Product Categories */}
      <Categories onSelectCategory={handleCategorySelect} />

      {/* 5. Popular Products Grid */}
      <Products
        selectedCategoryFilter={categoryFilter}
        onEnquireProduct={handleOpenProductEnquiry}
      />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Services & Solutions */}
      <Services />

      {/* 8. 3-Step Process (How It Works) */}
      <Process />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Store Location & Directions */}
      <Location />

      {/* 11. Lead Generation Contact Form */}
      <Contact />

      {/* 12. Final High-Converting CTA Banner */}
      <FinalCTA />

      {/* Quick Enquiry Modal for specific products */}
      <EnquiryModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
};
