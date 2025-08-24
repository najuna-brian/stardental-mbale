import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  EyeIcon, 
  StarIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const AboutSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative"
            data-aos="fade-right"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Real clinic image */}
              <img 
                src="/images/staff/team-smiling.jpeg" 
                alt="Star Dental Clinic Team"
                className="w-full h-96 object-cover"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
                    <StarIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-800">5.0</p>
                    <p className="text-sm text-gray-600">Patient Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="space-y-8"
            data-aos="fade-left"
          >
            <div>
              <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
                Quality Dental Care in <span className="text-primary-500">Eastern Uganda</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Star Dental Clinic, we are committed to providing quality oral healthcare 
                through professional care, community service, and patient education. Our focus is on 
                accessible and affordable dental care for everyone in our community.
              </p>
            </div>

            {/* Mission, Vision, Goals */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HeartIcon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    Provide high quality, accessible, affordable dental care in Eastern Uganda and beyond, 
                    focusing on prevention, conservation, and innovative treatments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EyeIcon className="w-6 h-6 text-secondary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be recognized as a trusted dental clinic in Eastern Uganda, known for 
                    quality patient care, professional service, and community health improvement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <StarIcon className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Our Goal</h3>
                  <p className="text-gray-600">
                    Expand reach through outreach clinics, promote oral health education, 
                    and ensure everyone has access to quality dental care.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-500">500+</p>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-500">5+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-500">100%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>

            <div>
              <Link 
                to="/about" 
                className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 font-medium group"
              >
                <span>Learn More About Us</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
