import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  CheckCircleIcon,
  PhoneIcon 
} from '@heroicons/react/24/outline';

const BookingSection = () => {
  const benefits = [
    'Quick online booking process',
    'Choose your preferred time slot',
    'Instant confirmation via email',
    'Easy rescheduling options',
    'Reminder notifications'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div 
            className="text-white"
            data-aos="fade-right"
          >
            <h2 className="text-4xl font-bold font-poppins mb-6">
              Ready to Transform Your <span className="text-secondary-400">Smile?</span>
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Book your appointment today and take the first step towards a healthier, 
              more confident smile. Our friendly team is ready to welcome you.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircleIcon className="w-6 h-6 text-secondary-400 flex-shrink-0" />
                  <span className="text-primary-100">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary-100">
                <PhoneIcon className="w-6 h-6 text-secondary-400" />
                <span>Or call us directly: </span>
                <a 
                  href="tel:+256-XXX-XXXXXX" 
                  className="text-secondary-400 hover:text-secondary-300 font-semibold transition-colors"
                >
                  +256-XXX-XXXXXX
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-primary-100">
                <ClockIcon className="w-6 h-6 text-secondary-400" />
                <span>Available: Mon-Fri 8AM-6PM, Sat 8AM-2PM</span>
              </div>
            </div>
          </motion.div>

          {/* Booking Preview Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl p-8"
            data-aos="fade-left"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDaysIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Book Your Appointment
              </h3>
              <p className="text-gray-600">
                Choose your preferred date and time
              </p>
            </div>

            {/* Sample Booking Form Preview */}
            <div className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service
                </label>
                <div className="relative">
                  <select className="form-input appearance-none pr-10">
                    <option>General Checkup</option>
                    <option>Teeth Cleaning</option>
                    <option>Cosmetic Consultation</option>
                    <option>Emergency Visit</option>
                  </select>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input 
                  type="date" 
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time, index) => (
                    <button
                      key={time}
                      className={`p-2 text-sm rounded-lg border transition-colors ${
                        index === 0 
                          ? 'bg-primary-500 text-white border-primary-500' 
                          : 'border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-500'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link 
                to="/booking" 
                className="w-full btn-primary text-center block"
              >
                Complete Booking
              </Link>

              {/* Emergency Notice */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <p className="text-sm text-red-600">
                  <strong>Emergency?</strong> Call us immediately at{' '}
                  <a href="tel:+256779003568" className="font-semibold underline hover:text-red-800 transition-colors">
                    +256 779 003 568
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-primary-400"
          data-aos="fade-up"
        >
          <div className="text-center text-white">
            <p className="text-4xl font-bold text-secondary-400 mb-2">500+</p>
            <p className="text-primary-100">Happy Patients</p>
          </div>
          <div className="text-center text-white">
            <p className="text-4xl font-bold text-secondary-400 mb-2">98%</p>
            <p className="text-primary-100">Satisfaction Rate</p>
          </div>
          <div className="text-center text-white">
            <p className="text-4xl font-bold text-secondary-400 mb-2">5+</p>
            <p className="text-primary-100">Years of Service</p>
          </div>
          <div className="text-center text-white">
            <p className="text-4xl font-bold text-secondary-400 mb-2">24/7</p>
            <p className="text-primary-100">Emergency Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
