import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline';
import { StaggeredContainer, HoverCard, MouseFollowElement } from '../components/Common/AnimatedSection';

const Services = () => {
  const services = [
    {
      id: 'general-dentistry',
      icon: HeartIcon,
      title: 'General Dentistry',
      shortDesc: 'Comprehensive oral health care for the whole family',
      description: 'Our general dentistry services form the foundation of good oral health. We provide comprehensive care including regular checkups, professional cleanings, cavity fillings, and preventive treatments to keep your smile healthy.',
      treatments: [
        'Regular Checkups & Cleanings',
        'Cavity Fillings',
        'Root Canal Treatment',
        'Tooth Extractions',
        'Gum Disease Treatment',
        'Fluoride Treatments'
      ],
      price: 'From UGX 50,000',
      duration: '30-90 minutes',
      color: 'primary'
    },
    {
      id: 'cosmetic-dentistry',
      icon: SparklesIcon,
      title: 'Cosmetic Dentistry',
      shortDesc: 'Transform your smile with aesthetic dental solutions',
      description: 'Enhance your smile and boost your confidence with our cosmetic dentistry services. From teeth whitening to veneers, we help you achieve the beautiful smile you\'ve always wanted.',
      treatments: [
        'Teeth Whitening',
        'Porcelain Veneers',
        'Dental Bonding',
        'Smile Makeovers',
        'Gum Contouring',
        'Composite Fillings'
      ],
      price: 'From UGX 150,000',
      duration: '60-120 minutes',
      color: 'secondary'
    },
    {
      id: 'orthodontics',
      icon: AdjustmentsHorizontalIcon,
      title: 'Orthodontics',
      shortDesc: 'Straighten teeth and correct bite issues',
      description: 'Achieve properly aligned teeth and a healthy bite with our orthodontic treatments. We offer traditional braces and modern clear aligners to suit your lifestyle and preferences.',
      treatments: [
        'Traditional Metal Braces',
        'Clear Ceramic Braces',
        'Clear Aligners',
        'Retainers',
        'Bite Correction',
        'Early Orthodontic Treatment'
      ],
      price: 'From UGX 800,000',
      duration: '12-24 months',
      color: 'accent'
    },
    {
      id: 'teeth-whitening',
      icon: SunIcon,
      title: 'Professional Teeth Whitening',
      shortDesc: 'Brighten your smile with safe, effective whitening',
      description: 'Remove stains and discoloration with our professional teeth whitening treatments. Achieve a brighter, more confident smile in just one visit or with our take-home whitening systems.',
      treatments: [
        'In-Office Whitening',
        'Take-Home Whitening Kits',
        'Combination Treatment',
        'Maintenance Programs',
        'Stain Removal',
        'Whitening Consultations'
      ],
      price: 'From UGX 200,000',
      duration: '60-90 minutes',
      color: 'primary'
    },
    {
      id: 'pediatric-dentistry',
      icon: FaceSmileIcon,
      title: 'Pediatric Dentistry',
      shortDesc: 'Gentle, specialized dental care for children',
      description: 'We provide gentle, age-appropriate dental care for children in a fun, comfortable environment. Our team specializes in making dental visits positive experiences for young patients.',
      treatments: [
        'Children\'s Checkups',
        'Fluoride Treatments',
        'Dental Sealants',
        'Cavity Fillings',
        'Space Maintainers',
        'Oral Health Education'
      ],
      price: 'From UGX 40,000',
      duration: '30-60 minutes',
      color: 'accent'
    }
  ];

  const colorClasses = {
    primary: {
  bg: 'from-primary-50 to-primary-100',
  text: 'text-primary-700',
  border: 'border-primary-200',
  hover: 'hover:border-primary-300',
  dot: 'bg-primary-400'
    },
    secondary: {
  bg: 'from-secondary-50 to-secondary-100',
  text: 'text-secondary-700',
  border: 'border-secondary-200',
  hover: 'hover:border-secondary-300',
  dot: 'bg-secondary-400'
    },
    accent: {
  bg: 'from-accent-50 to-accent-100',
  text: 'text-accent-700',
  border: 'border-accent-200',
  hover: 'hover:border-accent-300',
  dot: 'bg-accent-400'
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
  <section className="bg-primary-50 text-gray-900 py-20">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-bold font-poppins mb-6">
              Our <span className="text-secondary-400">Dental Services</span>
            </h1>
            <p className="text-xl text-primary-500 leading-relaxed">
              Comprehensive dental care tailored to your unique needs. From routine maintenance 
              to advanced procedures, we're committed to helping you achieve optimal oral health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <StaggeredContainer 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            animation="scaleIn"
            delay={150}
          >
            {services.map((service, index) => (
              <MouseFollowElement key={service.id} strength={0.1}>
                <HoverCard effect="lift" className="h-full">
                  <motion.div
                    id={service.id}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${colorClasses[service.color].border} ${colorClasses[service.color].hover} transition-all duration-500 hover:shadow-2xl h-full`}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Header */}
                    <motion.div 
                      className={`bg-gradient-to-r ${colorClasses[service.color].bg} p-8 text-gray-800 relative overflow-hidden`}
                    >
                      <div className="flex items-center space-x-4 mb-4 relative z-10">
                        <motion.div 
                          className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border border-gray-200"
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 15 }}
                            transition={{ duration: 0.3 }}
                          >
                            <service.icon className="w-8 h-8" />
                          </motion.div>
                        </motion.div>
                        <div>
                          <motion.h2 
                            className="text-2xl font-bold"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                          >
                            {service.title}
                          </motion.h2>
                          <motion.p 
                            className="text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                          >
                            {service.shortDesc}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="p-8">
                      <motion.p 
                        className="text-gray-600 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Treatment List */}
                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      >
                        <h3 className="font-semibold text-gray-800 mb-4">What We Offer:</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {service.treatments.map((treatment, i) => (
                            <motion.div 
                              key={i} 
                              className="flex items-center space-x-3 group"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 + 0.6 + i * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div 
                                className={`w-2 h-2 rounded-full ${colorClasses[service.color].dot}`}
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              />
                              <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                                {treatment}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Price & Duration */}
                      <motion.div 
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6 hover:bg-gray-100 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div>
                          <p className="text-sm text-gray-500">Starting From</p>
                          <motion.p 
                            className={`font-bold text-lg ${colorClasses[service.color].text}`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {service.price}
                          </motion.p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-semibold text-gray-800">{service.duration}</p>
                        </div>
                      </motion.div>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                      >
                        <motion.a 
                          href="/booking" 
                          className="w-full btn-primary text-center block"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          Book This Service
                        </motion.a>
                      </motion.div>
                    </div>
                  </motion.div>
                </HoverCard>
              </MouseFollowElement>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
              Quality <span className="text-primary-500">Treatment Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the positive results our patients have achieved with our dental services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                beforeImage: "/images/equipment/dental-chair-1.jpeg",
                afterImage: "/images/clinic/clinical-room-1.jpeg",
                treatment: "General Dentistry",
                duration: "1 session"
              },
              {
                id: 2,
                beforeImage: "/images/equipment/dental-chair-2.JPG",
                afterImage: "/images/clinic/clinical-room-2.JPG",
                treatment: "Cosmetic Dentistry",
                duration: "2 weeks"
              },
              {
                id: 3,
                beforeImage: "/images/equipment/dental-chair-upper.JPG",
                afterImage: "/images/clinic/clinical-room-3.JPG",
                treatment: "Orthodontics",
                duration: "6 months"
              }
            ].map((item) => (
              <motion.div
                key={item.id}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={item.id * 100}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    Case Study {item.id}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Equipment View</h4>
                      <img 
                        src={item.beforeImage} 
                        alt="Dental Equipment"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Clinical Room</h4>
                      <img 
                        src={item.afterImage} 
                        alt="Clinical Room"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Treatment: {item.treatment}
                    </p>
                    <p className="text-sm text-gray-500">
                      Duration: {item.duration}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-6">
              Emergency <span className="text-red-600">Dental Care</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experiencing a dental emergency? Don't wait - call us immediately for urgent care. 
              We provide emergency services 24/7 to address your dental pain and emergencies.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Dental Emergencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Severe toothache</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Knocked out tooth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Broken or chipped tooth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Lost filling or crown</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Abscess or swelling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Bleeding gums</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Jaw injury</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Orthodontic emergencies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+256779003568" 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Emergency: +256 779 003 568</span>
              </a>
              <a 
                href="/booking" 
                className="btn-outline"
              >
                Schedule Regular Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom">
          <motion.div 
            className="text-center text-white"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins mb-6">
              Ready to Improve Your <span className="text-secondary-400">Oral Health?</span>
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Schedule a consultation today and discover how our expert team can help you 
              achieve the healthy, beautiful smile you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-secondary">
                Book Consultation
              </Link>
              <a 
                href="https://wa.me/256779003568?text=Hello! I'd like to inquire about your dental services." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-500"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.div 
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a 
          href="#" 
          className="bg-primary-500 hover:bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Services;
