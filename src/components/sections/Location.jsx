import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { businessConfig, getPhoneUrl } from '../../data/businessConfig';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const Location = () => {
  return (
    <section id="location" className="py-16 sm:py-20 md:py-24 bg-stone-50 border-t border-stone-200/60" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Store Location"
          title="Visit Our Store & Warehouse"
          subtitle="Conveniently situated in Anthiyur, serving farmers and businesses throughout the Erode district. Walk in for retail bags or wholesale loading."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address and Operational Details (Spans 5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-subtle flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Address card */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Physical Address</h3>
                  <address className="not-italic text-sm text-gray-600 mt-1 leading-relaxed">
                    {businessConfig.address.street} <br />
                    {businessConfig.address.locality}, {businessConfig.address.district} <br />
                    {businessConfig.address.region} - {businessConfig.address.postalCode}, {businessConfig.address.country}
                  </address>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Working Hours</h3>
                  <div className="text-sm text-gray-600 mt-1 space-y-1">
                    <p className="flex justify-between gap-4">
                      <span>Mon - Sat:</span>
                      <strong className="text-gray-800">{businessConfig.workingHours.weekdays}</strong>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>Sunday:</span>
                      <strong className="text-gray-800">{businessConfig.workingHours.sunday}</strong>
                    </p>
                    {businessConfig.workingHours.note && (
                      <p className="text-xs text-emerald-700 pt-1 font-medium">
                        {businessConfig.workingHours.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Direct Phone Assistance */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Phone Assistance</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Direct warehouse dispatch & vehicle loading updates:
                  </p>
                  <a
                    href={getPhoneUrl()}
                    className="inline-block text-base font-bold text-emerald-800 hover:text-emerald-950 mt-1"
                  >
                    {businessConfig.phoneDisplay || businessConfig.phone}
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="pt-6 border-t border-stone-100">
              <Button
                href={businessConfig.googleMapsUrl}
                target="_blank"
                variant="outline"
                size="md"
                className="w-full text-emerald-800 border-emerald-600/40 hover:bg-emerald-50"
                icon={Navigation}
              >
                Get Directions on Google Maps
              </Button>
            </div>

          </div>

          {/* Right Column: Embedded Map / Interactive Visual Area (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-subtle min-h-[350px] relative flex flex-col">
            
            {/* Styled Map Header */}
            <div className="bg-stone-900 text-white p-3.5 px-5 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{businessConfig.shortName || businessConfig.name} - Location Map</span>
              </span>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Responsive Map Frame / Directions Preview */}
            <div className="relative flex-1 bg-stone-100 flex items-center justify-center p-6 text-center">
              <iframe
                title={`Map location for ${businessConfig.name}`}
                className="absolute inset-0 w-full h-full border-0 grayscale-20 contrast-105"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(businessConfig.address.formatted)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                aria-label={`Interactive map of ${businessConfig.name}`}
              />

              {/* Floating Map Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-stone-200 text-left max-w-sm pointer-events-auto">
                <p className="text-xs font-bold text-gray-900">{businessConfig.name}</p>
                <p className="text-[11px] text-gray-600 mt-0.5">{businessConfig.address.locality}, {businessConfig.address.district}</p>
                <div className="mt-2 flex items-center gap-2">
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-800 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Maps App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
