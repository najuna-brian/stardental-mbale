import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, EyeSlashIcon, ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  success,
  required = false,
  disabled = false,
  icon: Icon,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;
  
  const hasError = error && error.length > 0;
  const hasSuccess = success && !hasError;
  
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className={`w-5 h-5 ${
              hasError ? 'text-red-400' : 
              hasSuccess ? 'text-green-400' : 
              isFocused ? 'text-primary-500' : 'text-gray-400'
            }`} />
          </div>
        )}
        
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50
            ${Icon ? 'pl-11' : ''}
            ${isPassword ? 'pr-11' : ''}
            ${hasError 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
              : hasSuccess 
              ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
            }
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
          `}
          {...props}
        />
        
        {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <EyeIcon className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        )}
        
        {(hasError || hasSuccess) && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {hasError ? (
              <ExclamationCircleIcon className="w-5 h-5 text-red-400" />
            ) : (
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
            )}
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {(hasError || hasSuccess) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-sm ${hasError ? 'text-red-600' : 'text-green-600'}`}
          >
            {hasError ? error : success}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TextArea = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  success,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const hasError = error && error.length > 0;
  const hasSuccess = success && !hasError;
  
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          className={`
            w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none
            ${hasError 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
              : hasSuccess 
              ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
            }
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
          `}
          {...props}
        />
        
        {(hasError || hasSuccess) && (
          <div className="absolute top-3 right-3">
            {hasError ? (
              <ExclamationCircleIcon className="w-5 h-5 text-red-400" />
            ) : (
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
            )}
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {(hasError || hasSuccess) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-sm ${hasError ? 'text-red-600' : 'text-green-600'}`}
          >
            {hasError ? error : success}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Select = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options = [],
  placeholder = 'Select an option',
  error,
  success,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const hasError = error && error.length > 0;
  const hasSuccess = success && !hasError;
  
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          disabled={disabled}
          className={`
            w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 appearance-none
            ${hasError 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
              : hasSuccess 
              ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
            }
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
          `}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        
        {(hasError || hasSuccess) && (
          <div className="absolute top-3 right-8">
            {hasError ? (
              <ExclamationCircleIcon className="w-5 h-5 text-red-400" />
            ) : (
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
            )}
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {(hasError || hasSuccess) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-sm ${hasError ? 'text-red-600' : 'text-green-600'}`}
          >
            {hasError ? error : success}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Input, TextArea, Select };
