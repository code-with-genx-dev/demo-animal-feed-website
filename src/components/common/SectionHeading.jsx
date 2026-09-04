import React from 'react';

/**
 * Standardized Section Heading with agricultural aesthetic and clear hierarchy
 */
export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${
        isCentered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 border ${
            light
              ? 'bg-emerald-900/60 text-emerald-200 border-emerald-700/50'
              : 'bg-emerald-50 text-emerald-800 border-emerald-200/60'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
          {badge}
        </div>
      )}

      {title && (
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 ${
            light ? 'text-white' : 'text-gray-900'
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-emerald-100/80' : 'text-gray-600'
          } ${isCentered ? 'max-w-2xl mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
