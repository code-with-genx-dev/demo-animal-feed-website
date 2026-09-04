import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X, MessageSquareQuote } from 'lucide-react';
import { businessConfig, getPhoneUrl } from '../../data/businessConfig';
import { BusinessLogo } from '../common/BusinessLogo';
import { Button } from '../common/Button';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-200">
        {/* Top Info Bar (Desktop/Tablet) */}
        <div className="bg-emerald-900 text-emerald-100 text-xs py-2 px-4 sm:px-6 border-b border-emerald-800/60 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Mon - Sat: {businessConfig.workingHours.weekdays} | Sun: {businessConfig.workingHours.sunday}</span>
              </span>
              <span className="text-emerald-300">|</span>
              <span className="text-emerald-200">
                {businessConfig.address.locality}, {businessConfig.address.district}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-emerald-200/80">Need immediate bulk feed?</span>
              <a
                href={getPhoneUrl()}
                className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-amber-300 transition-colors"
                aria-label={`Call ${businessConfig.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {businessConfig.phoneDisplay || businessConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Sticky Navigation Bar */}
        <nav
          className={`w-full transition-all duration-200 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
              : 'bg-white/90 backdrop-blur-sm shadow-xs py-4'
          }`}
          aria-label="Main Navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
            {/* Business Logo */}
            <BusinessLogo />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-emerald-800 transition-colors py-1 relative group focus:outline-none focus-visible:text-emerald-800"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-800 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Right Action CTA & Mobile Trigger */}
            <div className="flex items-center gap-3">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="hidden sm:inline-flex"
                icon={MessageSquareQuote}
              >
                Get Quote
              </Button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
