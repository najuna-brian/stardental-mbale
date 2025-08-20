import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useFocusManagement, useKeyboardNavigation } from '../Common/AccessibilityHelpers';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = React.useRef(null);

  // Accessibility hooks
  useFocusManagement(isOpen, mobileMenuRef);
  useKeyboardNavigation(isOpen, () => setIsOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Learning Hub', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm lg:bg-transparent lg:shadow-none'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4 px-2 sm:px-0">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.img 
                src="/images/star-dental-logo.jpeg" 
                alt="Star Dental Clinic Logo"
                className="w-12 h-12 lg:w-10 lg:h-10 rounded-full object-cover shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div>
                <motion.h1 
                  className={`font-poppins font-bold text-xl lg:text-xl transition-colors ${
                    isScrolled 
                      ? 'text-gray-800' 
                      : 'text-gray-800 lg:text-white'
                  } group-hover:text-primary-500`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Star Dental
                </motion.h1>
                <p className={`text-xs transition-colors ${
                  isScrolled 
                    ? 'text-gray-600' 
                    : 'text-gray-600 lg:text-gray-300'
                }`}>
                  Clinic Mbale
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden lg:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`relative font-medium transition-all duration-300 group ${
                    location.pathname === link.path
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary-500"
                    initial={{ width: location.pathname === link.path ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a 
              href="tel:+256779003568" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <PhoneIcon className="w-5 h-5" />
              </motion.div>
              <span className="font-medium">Call Now</span>
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/booking" className="btn-primary">
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 flex-shrink-0 ${
              isScrolled 
                ? 'text-gray-700 hover:text-primary-500 hover:bg-primary-50' 
                : 'text-gray-800 hover:text-primary-500 bg-white/80 hover:bg-white shadow-md'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ minWidth: '48px', minHeight: '48px' }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Full Screen Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="lg:hidden fixed inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-600 z-50"
              style={{ zIndex: 9999 }}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Floating circles */}
                <motion.div
                  className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute top-1/4 -right-20 w-60 h-60 bg-secondary-400/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-1/4 w-32 h-32 bg-white/15 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Menu Content */}
              <motion.div
                className="relative z-10 h-full flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Header with Logo and Close Button */}
                <motion.div 
                  className="flex justify-between items-center p-6 pt-8"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.img 
                      src="/images/star-dental-logo.jpeg" 
                      alt="Star Dental Clinic"
                      className="w-12 h-12 rounded-full object-cover shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <div>
                      <h2 className="text-white font-bold text-xl">Star Dental</h2>
                      <p className="text-white/80 text-sm">Clinic Mbale</p>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </motion.button>
                </motion.div>

                {/* Navigation Links */}
                <div className="flex-1 flex flex-col justify-center px-6">
                  <motion.nav className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.4 + index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        <Link
                          to={link.path}
                          className={`block group relative overflow-hidden`}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.div
                            className="flex items-center justify-between py-4 px-6 rounded-2xl transition-all duration-300"
                            whileHover={{ 
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              scale: 1.02
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center space-x-4">
                              <motion.div
                                className="w-2 h-2 bg-white rounded-full opacity-60"
                                whileHover={{ 
                                  scale: 1.5,
                                  backgroundColor: "#ffc107"
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                              />
                              <span className={`text-2xl font-semibold transition-all duration-300 ${
                                location.pathname === link.path
                                  ? 'text-secondary-400'
                                  : 'text-white group-hover:text-secondary-400'
                              }`}>
                                {link.name}
                              </span>
                            </div>
                            
                            <motion.div
                              className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                              initial={{ x: -20 }}
                              whileHover={{ x: 0 }}
                            >
                              <svg 
                                className="w-6 h-6 text-secondary-400" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </motion.div>
                          </motion.div>
                          
                          {/* Active indicator */}
                          {location.pathname === link.path && (
                            <motion.div
                              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-secondary-400 rounded-full"
                              layoutId="activeIndicator"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>
                </div>

                {/* Contact Info & CTA */}
                <motion.div 
                  className="p-6 space-y-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {/* Contact Info */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                    <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
                    
                    <motion.a 
                      href="tel:+256779003568"
                      className="flex items-center space-x-3 text-white/90 hover:text-secondary-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <PhoneIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Call Now</p>
                        <p className="text-sm opacity-80">+256 779 003 568</p>
                      </div>
                    </motion.a>
                    
                    <motion.div 
                      className="flex items-center space-x-3 text-white/90"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Visit Us</p>
                        <p className="text-sm opacity-80">Plot 32A, North Road, Mbale</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        to="/booking" 
                        className="block w-full bg-secondary-500 hover:bg-secondary-600 text-white text-center py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        Book Appointment
                      </Link>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a 
                        href="https://wa.me/256779003568"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full border-2 border-white/30 text-white text-center py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                      >
                        WhatsApp Us
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
