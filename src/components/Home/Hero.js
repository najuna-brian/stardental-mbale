import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/clinic/clinical-room-2.JPG" 
          alt="Star Dental Clinic Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Because Everyone Deserves a{' '}
            <span className="text-secondary-500">Good Smile</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional dental care in Eastern Uganda with a focus on 
            prevention, conservation, and innovative treatments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/booking" 
              className="inline-flex items-center space-x-2 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-opacity-50"
            >
              <CalendarDaysIcon className="w-6 h-6" />
              <span>Book Appointment</span>
            </Link>
            
            <a 
              href="tel:+256-XXX-XXXXXX" 
              className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-4 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <PhoneIcon className="w-6 h-6" />
              <span>Call Now</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
              <span>Modern Equipment</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
              <span>Expert Staff</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
