import React from 'react';

/**
 * Reusable accessible Button component with multiple variants
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  target,
  rel,
  ariaLabel,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold'
  };

  const variantStyles = {
    primary:
      'bg-emerald-800 text-white hover:bg-emerald-900 active:bg-emerald-950 focus-visible:ring-emerald-700 shadow-sm hover:shadow',
    secondary:
      'bg-emerald-100 text-emerald-900 hover:bg-emerald-200 active:bg-emerald-300 focus-visible:ring-emerald-600',
    outline:
      'border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 focus-visible:ring-emerald-700 shadow-sm',
    accent:
      'bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800 focus-visible:ring-amber-500 shadow-sm hover:shadow',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20ba59] active:bg-[#1caa52] focus-visible:ring-emerald-500 shadow-sm hover:shadow',
    ghost:
      'text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 focus-visible:ring-emerald-700'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
};
