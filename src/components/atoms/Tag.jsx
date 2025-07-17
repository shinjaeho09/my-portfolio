import React from 'react';

const Tag = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center font-semibold rounded-full transition-colors duration-200 border border-gray-300 shadow-md ring-2 ring-current';
  
  const variants = {
    default: 'bg-primary-50 text-primary-600',
    success: 'bg-green-50 text-green-700',
    warning: 'bg-yellow-50 text-yellow-700',
    danger: 'bg-red-50 text-red-700',
    purple: 'bg-primary-100 text-primary-700',
    gray: 'bg-black text-white',
    blue: 'bg-blue-100 text-blue-700', // Frontend용 파란색
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Tag; 