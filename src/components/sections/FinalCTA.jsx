import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { businessConfig, getPhoneUrl, getWhatsAppUrl } from '../../data/businessConfig';
import { Button } from '../common/Button';

export const FinalCTA = () => {
  const whatsappUrl = getWhatsAppUrl(
    `Hello ${businessConfig.name}, I am looking for quality animal feed and would like to discuss my requirements.`
  );

  return (
    <section className="py-16 sm:py-20 bg-emerald-900 text-white relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Decorative subtle texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-semibold uppercase tracking-wider border border-emerald-700/60">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Direct Farm & Retail Supply</span>
        </div>

        <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Looking for quality animal feed?
        </h2>

        <p className="text-base sm:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Talk to <strong className="text-white font-bold">{businessConfig.name}</strong> today about your cattle, poultry, or livestock feed requirements. Get competitive wholesale rates and dependable delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            href={whatsappUrl}
            target="_blank"
            variant="whatsapp"
            size="lg"
            icon={MessageCircle}
            className="w-full sm:w-auto shadow-lg"
          >
            WhatsApp Us
          </Button>

          <Button
            href={getPhoneUrl()}
            variant="outline"
            size="lg"
            icon={Phone}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white shadow-lg"
          >
            Call {businessConfig.phoneDisplay || businessConfig.phone}
          </Button>
        </div>

        <div className="pt-4 text-xs text-emerald-300">
          <span>Working hours: Mon - Sat: {businessConfig.workingHours.weekdays} | Sunday: {businessConfig.workingHours.sunday}</span>
        </div>

      </div>
    </section>
  );
};
