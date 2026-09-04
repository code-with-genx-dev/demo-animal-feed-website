import React, { useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, X, ArrowRight } from 'lucide-react';
import { businessConfig, getPhoneUrl, getWhatsAppUrl } from '../../data/businessConfig';
import { Button } from '../common/Button';
import { BusinessLogo } from '../common/BusinessLogo';

export const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  // Prevent body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between">
          <BusinessLogo size="sm" />
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto p-6 space-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Navigation
          </p>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 text-base font-semibold text-gray-800 rounded-lg hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </a>
          ))}

          {/* Quick Lead Generation CTAs */}
          <div className="pt-6 mt-6 border-t border-gray-100 space-y-3">
            <Button
              href={getWhatsAppUrl("Hi, I would like to enquire about your animal feed products.")}
              target="_blank"
              variant="whatsapp"
              size="lg"
              className="w-full"
              icon={MessageCircle}
            >
              WhatsApp Us
            </Button>

            <Button
              href={getPhoneUrl()}
              variant="outline"
              size="lg"
              className="w-full text-emerald-800 border-emerald-300 hover:bg-emerald-50"
              icon={Phone}
            >
              Call {businessConfig.phoneDisplay || businessConfig.phone}
            </Button>
          </div>

          {/* Business Hours & Location Info */}
          <div className="pt-6 mt-6 border-t border-gray-100 text-xs text-gray-500 space-y-2.5">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-700">Store Hours:</p>
                <p>Mon - Sat: {businessConfig.workingHours.weekdays}</p>
                <p>Sunday: {businessConfig.workingHours.sunday}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-700">Location:</p>
                <p>{businessConfig.address.formatted}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
