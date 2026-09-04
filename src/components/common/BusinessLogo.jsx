import React from 'react';
import { businessConfig } from '../../data/businessConfig';

/**
 * Reusable Business Logo Component
 * - Supports image logo if provided in businessConfig.logo
 * - Elegant text fallback with agricultural leaf/grain motif
 * - Dynamically adapts to company name changes
 */
export const BusinessLogo = ({ size = 'md', className = '', showTagline = false }) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-lg p-1 ${className}`}
      aria-label={`${businessConfig.name} - Home`}
    >
      {businessConfig.logo ? (
        <img
          src={businessConfig.logo}
          alt={businessConfig.name}
          className={`${
            isLarge ? 'h-12' : isSmall ? 'h-8' : 'h-10'
          } w-auto object-contain`}
        />
      ) : (
        <div
          className={`flex items-center justify-center rounded-xl bg-emerald-800 text-amber-400 shadow-sm border border-emerald-700/50 transition-transform group-hover:scale-105 ${
            isLarge ? 'w-12 h-12 text-2xl' : isSmall ? 'w-8 h-8 text-base' : 'w-10 h-10 text-xl'
          }`}
          aria-hidden="true"
        >
          {/* Clean agricultural grain icon */}
          <svg
            className={isLarge ? 'w-7 h-7' : isSmall ? 'w-5 h-5' : 'w-6 h-6'}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22V8" />
            <path d="M5 10c0 4.5 7 8 7 8s7-3.5 7-8c0-2-1.5-4-3.5-4C13.5 6 12 7.5 12 8c0-.5-1.5-2-3.5-2C6.5 6 5 8 5 10z" />
          </svg>
        </div>
      )}

      <div className="flex flex-col text-left">
        <span
          className={`font-extrabold tracking-tight text-gray-900 leading-tight font-sans ${
            isLarge ? 'text-2xl' : isSmall ? 'text-base' : 'text-lg sm:text-xl'
          }`}
        >
          {businessConfig.name}
        </span>
        {showTagline && (
          <span className="text-xs font-medium text-emerald-800/80 tracking-wide mt-0.5">
            {businessConfig.tagline}
          </span>
        )}
      </div>
    </a>
  );
};
