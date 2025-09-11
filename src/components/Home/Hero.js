import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { TypingText, CountUp, FloatingElement, MouseFollowElement } from '../Common/AnimatedSection';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Background Image with Parallax Effect and Blur */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative w-full h-full">
          <img 
            src="/images/clinic/clinical-room-2.JPG" 
            alt="Star Dental Clinic Interior"
            className="w-full h-full object-cover filter blur-[4px]"
            style={{ transform: 'scale(1.05)' }}
          />
          <motion.div 
            className="absolute inset-0 bg-primary-900/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          ></motion.div>
        </div>
      </motion.div>
      
      {/* Floating Background Elements */}
      <FloatingElement>
        <div className="absolute top-32 left-10 w-20 h-20 bg-secondary-500/20 rounded-full blur-xl"></div>
      </FloatingElement>
      <FloatingElement>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-300/20 rounded-full blur-xl" style={{ animationDelay: '1s' }}></div>
      </FloatingElement>
      
      {/* Content */}
  <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto mt-16 md:mt-20 lg:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Headline with Typing Effect */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Because Everyone Deserves a{' '}
            <motion.span 
              className="text-secondary-500 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.5,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              <TypingText 
                text="Good Smile" 
                speed={150} 
                delay={2000}
                cursor={false}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypingText 
              text="Quality dental care in Mbale, Uganda. Professional teeth cleaning, dental treatment, and emergency dental services since 2020."
              speed={30}
              delay={3500}
              cursor={false}
            />
          </motion.p>

          {/* CTA Buttons with Enhanced Animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MouseFollowElement strength={0.15}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(255, 193, 7, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Link 
                  to="/booking" 
                  className="relative overflow-hidden inline-flex items-center space-x-2 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-secondary-300 focus:ring-opacity-50"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                  >
                    <CalendarDaysIcon className="w-6 h-6" />
                  </motion.div>
                  <span className="relative z-10">Book Appointment</span>
                </Link>
              </motion.div>
            </MouseFollowElement>
            
            <MouseFollowElement strength={0.15}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#0891b2"
                }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <a 
                  href="tel:+256779003568" 
                  className="relative overflow-hidden inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-4 px-8 rounded-lg transition-all duration-500 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PhoneIcon className="w-6 h-6" />
                  </motion.div>
                  <span>Call Now</span>
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </a>
              </motion.div>
            </MouseFollowElement>
          </motion.div>

          {/* Trust Indicators with Staggered Animation */}
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { text: "Licensed & Certified", delay: 0.9 },
              { text: "Modern Equipment", delay: 1.1 },
              { text: "Expert Staff", delay: 1.3 }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <motion.div 
                  className="w-3 h-3 bg-secondary-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Statistics Section */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {[
              { number: 1500, suffix: "+", label: "Happy Patients" },
              { number: 5, suffix: "+", label: "Years Experience" },
              { number: 24, suffix: "/7", label: "Emergency Care" },
              { number: 100, suffix: "%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-secondary-400">
                  <CountUp 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2000}
                    delay={2000 + index * 200}
                  />
                </div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center group-hover:border-secondary-400 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2 group-hover:bg-secondary-400"
              animate={{ 
                y: [0, 10, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
