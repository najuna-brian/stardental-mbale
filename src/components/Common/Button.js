import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to, 
  onClick, 
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-300 shadow-lg hover:shadow-xl hover:-translate-y-1',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-300 shadow-lg hover:shadow-xl hover:-translate-y-1',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-300 shadow-lg hover:shadow-xl hover:-translate-y-1',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-300 hover:shadow-lg',
    ghost: 'text-gray-700 hover:bg-gray-100 hover:text-primary-500 focus:ring-gray-300',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-300 shadow-lg hover:shadow-xl hover:-translate-y-1',
    success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-300 shadow-lg hover:shadow-xl hover:-translate-y-1',
  };

  const sizes = {
    xs: 'px-3 py-1.5 text-xs rounded-md',
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-xl',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className={`flex items-center space-x-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
      </div>
    </>
  );

  const MotionComponent = motion.button;

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={to} className={classes} {...props}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <MotionComponent
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </MotionComponent>
  );
};

export default Button;
