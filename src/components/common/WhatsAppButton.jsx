import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '../../data/businessConfig';

/**
 * Floating WhatsApp Action Button
 * Fixed at bottom-right with subtle pulse and accessible tooltip
 */
export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = `Hello ${businessConfig.shortName || businessConfig.name}, I would like to enquire about your animal feed products.`;
  const whatsappHref = getWhatsAppUrl(defaultMessage);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2.5 print:hidden">
      {/* Subtle dismissal tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs font-medium py-2 px-3.5 rounded-xl shadow-lg border border-gray-100 transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
          <span>Chat on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 ml-1 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Link Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-13 h-13 p-3.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa52] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
        aria-label={`Chat with ${businessConfig.name} on WhatsApp`}
        title={`Chat with ${businessConfig.name} on WhatsApp`}
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        
        {/* Subtle status ping */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
};
