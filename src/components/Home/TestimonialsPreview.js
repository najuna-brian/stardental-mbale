import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const TestimonialsPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials data
  const sampleTestimonials = [
    {
      id: '1',
      name: 'Sarah Mukasa',
      location: 'Mbale',
      rating: 5,
      treatment: 'Teeth Whitening',
      text: 'The team at Star Dental Clinic is absolutely amazing! I was nervous about getting dental treatment, but Dr. Charity and her team made me feel so comfortable. The procedure was painless, and my teeth look fantastic. I can\'t stop smiling!',
      date: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'John Wanyama',
      location: 'Tororo',
      rating: 5,
      treatment: 'Teeth Whitening',
      text: 'I\'ve been self-conscious about my teeth for years due to staining from coffee. The professional whitening treatment here exceeded my expectations. My teeth are now several shades whiter, and the results look completely natural. Highly recommend!',
      date: new Date('2024-01-20')
    },
    {
      id: '3',
      name: 'Grace Namukose',
      location: 'Mbale',
      rating: 5,
      treatment: 'Orthodontics',
      text: 'My teenage daughter needed braces, and we couldn\'t be happier with the results. The orthodontist explained everything clearly, and my daughter actually looked forward to her appointments. Her smile transformation is incredible!',
      date: new Date('2024-02-05')
    }
  ];

  const testimonials = sampleTestimonials;

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-secondary-500' : 'text-gray-300'}`}
      />
    ));
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
              {testimonials.length > 0 && (
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
                      "{testimonials[currentIndex]?.text}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {renderStars(testimonials[currentIndex]?.rating || 5)}
                  </div>

                  {/* Patient Info */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {testimonials[currentIndex]?.name?.charAt(0) || 'P'}
                      </span>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-semibold text-lg">
                        {testimonials[currentIndex]?.name}
                      </p>
                      <p className="text-primary-100">
                        {testimonials[currentIndex]?.location} • {testimonials[currentIndex]?.treatment}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation Dots */}
            {testimonials.length > 1 && (
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
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
          {testimonials.slice(0, 3).map((testimonial, index) => (
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
