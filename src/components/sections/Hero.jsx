import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '../../data/businessConfig';
import { Button } from '../common/Button';

export const Hero = () => {
  const whatsappUrl = getWhatsAppUrl(
    `Hello ${businessConfig.name}, I would like to enquire about your animal feed products and current pricing.`
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#faf9f6] via-emerald-50/20 to-[#faf9f6]"
      aria-label="Hero Introduction"
    >
      {/* Subtle decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1b4332_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Trust, and Primary CTAs (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Small Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Trusted Animal Feed Supplier</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.12]">
                Quality Feed. <br />
                <span className="text-emerald-800">Healthy Growth.</span> <br />
                Better Results.
              </h1>
            </div>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {businessConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                href="#products"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="shadow-md"
              >
                Explore Products
              </Button>

              <Button
                href={whatsappUrl}
                target="_blank"
                variant="whatsapp"
                size="lg"
                icon={MessageCircle}
                className="shadow-md"
              >
                WhatsApp Us
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 sm:pt-6 border-t border-gray-200/80 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs sm:text-sm text-gray-700 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Quality Products</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Competitive Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Reliable Supply</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (Spans 5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Accent glow */}
              <div
                className="absolute -inset-2 bg-gradient-to-tr from-emerald-600/20 to-amber-500/20 rounded-3xl blur-xl -z-10"
                aria-hidden="true"
              />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-emerald-900/10 shadow-2xl bg-white aspect-4/3 sm:aspect-5/4">
                <img
                  src="https://picsum.photos/seed/animal-feed-hero/1200/900"
                  alt="High quality cattle feed, poultry feed and grain supplies on agricultural farm"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />

                {/* Subtle bottom gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Inset Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Direct From Mill Quality</p>
                      <p className="text-[11px] text-gray-500">Anthiyur, Erode District</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>

              {/* Floating Quality Stamp */}
              <div className="absolute -top-4 -right-3 hidden sm:flex items-center gap-2 bg-amber-500 text-white font-bold text-xs py-1.5 px-3 rounded-full shadow-md border-2 border-white">
                <span>★ High Protein Feeds</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
