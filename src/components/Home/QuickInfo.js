import React from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const QuickInfo = () => {
  return (
    <section className="bg-white py-8 shadow-lg relative z-10 -mt-8 md:mt-0 lg:mt-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location */}
          <div className="flex items-center justify-center md:justify-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
            <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPinIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Visit Us</h3>
              <p className="text-gray-600">Plot 32A, North Road</p>
              <p className="text-gray-600 text-sm">Opposite North Road P/S, Mbale</p>
              <a 
                href="https://maps.app.goo.gl/g33LHWaaoxNtscvC7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 text-sm font-medium"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center md:justify-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
            <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
              <PhoneIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Call Us</h3>
              <a 
                href="tel:+256779003568" 
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                +256779003568
              </a>
              <p className="text-primary-500 text-sm font-medium">Tap to call</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center justify-center md:justify-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
            <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
              <ClockIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Open Hours</h3>
              <p className="text-gray-600">Mon-Sat: 8:30 AM - 6:00 PM</p>
              <p className="text-gray-600">Sun: Emergency/On Call</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
