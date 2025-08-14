import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { testimonialService } from '../../firebase/firestore';

const TestimonialsPreview = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const allTestimonials = await testimonialService.getAllTestimonials();
        setTestimonials(allTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        // Fallback to sample data
        setTestimonials(sampleTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonialsToShow.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsToShow.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  // Sample testimonials for fallback
  const sampleTestimonials = [
    {
      id: '1',
      name: 'Sarah Namukasa',
      location: 'Mbale',
      rating: 5,
      text: 'Outstanding service! The team at Star Dental made me feel comfortable throughout my treatment. My smile has never looked better!',
      treatment: 'Teeth Whitening',
      image: null
    },
    {
      id: '2',
      name: 'John Wanyama',
      location: 'Pallisa',
      rating: 5,
      text: 'Professional, caring, and modern facilities. I drove from Pallisa specifically for their services and it was worth every mile.',
      treatment: 'Dental Implants',
      image: null
    },
    {
      id: '3',
      name: 'Grace Nakato',
      location: 'Mbale',
      rating: 5,
      text: 'My children love coming here! The staff is so patient and gentle with kids. Highly recommend for families.',
      treatment: 'Pediatric Care',
      image: null
    },
    {
      id: '4',
      name: 'David Mukhwana',
      location: 'Tororo',
      rating: 5,
      text: 'Fast, efficient, and pain-free treatment. The quality of care exceeded my expectations. Thank you Star Dental!',
      treatment: 'Root Canal',
      image: null
    }
  ];

  const testimonialsToShow = testimonials.length > 0 ? testimonials : sampleTestimonials;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-secondary-500' : 'text-gray-300'}`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="loading-spinner mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
            What Our <span className="text-primary-500">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy patients 
            have to say about their experience at Star Dental Clinic.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
            </div>

            <div className="relative z-10">
              {testimonialsToShow.length > 0 && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Quote */}
                  <div className="mb-8">
                    <svg className="w-12 h-12 text-secondary-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8v8c0 2.2-1.8 4-4 4v4c4.4 0 8-3.6 8-8V8h-4zm12 0v8c0 2.2-1.8 4-4 4v4c4.4 0 8-3.6 8-8V8h-4z"/>
                    </svg>
                    <p className="text-xl md:text-2xl leading-relaxed mb-6">
                      "{testimonialsToShow[currentIndex]?.text}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {renderStars(testimonialsToShow[currentIndex]?.rating || 5)}
                  </div>

                  {/* Patient Info */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {testimonialsToShow[currentIndex]?.name?.charAt(0) || 'P'}
                      </span>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-semibold text-lg">
                        {testimonialsToShow[currentIndex]?.name}
                      </p>
                      <p className="text-primary-100">
                        {testimonialsToShow[currentIndex]?.location} • {testimonialsToShow[currentIndex]?.treatment}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation Dots */}
            {testimonialsToShow.length > 1 && (
              <div className="flex justify-center space-x-2 mt-8">
                {testimonialsToShow.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-secondary-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          data-aos="fade-up"
        >
          {testimonialsToShow.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Google Reviews Integration Notice */}
        <motion.div 
          className="bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-xl p-8 text-center mb-12"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            See More Reviews on <span className="text-secondary-600">Google</span>
          </h3>
          <p className="text-gray-600 mb-6">
            Read authentic reviews from our patients and share your own experience
          </p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <span>View Google Reviews</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          data-aos="fade-up"
        >
          <Link 
            to="/testimonials" 
            className="btn-outline inline-flex items-center space-x-2"
          >
            <span>Read All Testimonials</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
