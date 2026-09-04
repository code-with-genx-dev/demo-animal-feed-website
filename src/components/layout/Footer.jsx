import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ExternalLink } from 'lucide-react';
import { businessConfig, getPhoneUrl, getWhatsAppUrl } from '../../data/businessConfig';
import { categories } from '../../data/products';
import { BusinessLogo } from '../common/BusinessLogo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-gray-300 border-t border-stone-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 p-2 rounded-xl inline-block">
              <BusinessLogo className="text-white" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {businessConfig.description}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-stone-400 uppercase tracking-wider font-medium">Verified Local Business</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs text-emerald-400 font-medium">Quality Guaranteed</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">Feed Products</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Get a Quote</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Feed Categories */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Feed Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#products"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact & Hours
            </h3>
            <address className="not-italic space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {businessConfig.address.formatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={getPhoneUrl()} className="hover:text-white font-medium transition-colors">
                  {businessConfig.phoneDisplay || businessConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${businessConfig.email}`} className="hover:text-white transition-colors">
                  {businessConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-stone-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-gray-400">
                  <p className="text-gray-300 font-medium">Mon - Sat: {businessConfig.workingHours.weekdays}</p>
                  <p>Sun: {businessConfig.workingHours.sunday}</p>
                </div>
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* Bottom Bar with Dynamic Copyright */}
      <div className="border-t border-stone-800 bg-stone-950 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} {businessConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-gray-400 transition-colors">Back to Top ↑</a>
            <span className="text-stone-700">|</span>
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-gray-400 transition-colors"
            >
              <span>Locate on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
