import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Learning Hub', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/star-dental-logo.jpeg" 
              alt="Star Dental Clinic Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="font-poppins font-bold text-xl text-gray-800">
                Star Dental
              </h1>
              <p className="text-xs text-gray-600">Clinic Mbale</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+256-XXX-XXXXXX" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="font-medium">Call Now</span>
            </a>
            <Link to="/booking" className="btn-primary">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-2 font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-3">
                <a 
                  href="tel:+256-XXX-XXXXXX" 
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span className="font-medium">Call Now</span>
                </a>
                <Link to="/booking" className="block w-full text-center btn-primary">
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
