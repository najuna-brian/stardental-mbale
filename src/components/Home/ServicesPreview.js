import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CubeIcon,
  FaceSmileIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ServicesPreview = () => {
  const services = [
    {
      id: 'general-dentistry',
      icon: HeartIcon,
      title: 'General Dentistry',
      description: 'Comprehensive oral health care including checkups, cleanings, and preventive treatments.',
      color: 'primary'
    },
    {
      id: 'cosmetic-dentistry',
      icon: SparklesIcon,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, bonding, and aesthetic dental solutions.',
      color: 'secondary'
    },
    {
      id: 'orthodontics',
      icon: AdjustmentsHorizontalIcon,
      title: 'Orthodontics',
      description: 'Straighten teeth and correct bite issues with modern orthodontic treatments.',
      color: 'accent'
    },
    {
      id: 'teeth-whitening',
      icon: SunIcon,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile.',
      color: 'primary'
    },
    {
      id: 'dental-implants',
      icon: CubeIcon,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look and feel natural.',
      color: 'secondary'
    },
    {
      id: 'pediatric-dentistry',
      icon: FaceSmileIcon,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a comfortable, friendly environment.',
      color: 'accent'
    }
  ];

  const colorClasses = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    accent: 'bg-accent-100 text-accent-700'
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
            Our <span className="text-primary-500">Dental Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs. From routine checkups 
            to advanced cosmetic procedures, we've got your smile covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group surface hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-8">
                <div className={`w-16 h-16 ${colorClasses[service.color]} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Link 
                  to={`/services#${service.id}`} 
                  className="text-primary-500 hover:text-primary-600 font-medium group flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Preview */}
        <motion.div 
          className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 mb-12"
          data-aos="fade-up"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              See the <span className="text-primary-500">Transformation</span>
            </h3>
            <p className="text-gray-600">
              Real results from our patients who trusted us with their smiles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">Gap Closure</h4>
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img 
                  src="/images/treatments/before.jpeg" 
                  alt="Before dental treatment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">Teeth Whitening</h4>
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img 
                  src="/images/treatments/after.jpeg" 
                  alt="After dental treatment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          data-aos="fade-up"
        >
          <Link 
            to="/services" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
