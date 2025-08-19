import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/24/solid';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials for demonstration
  const sampleTestimonials = [
    {
      id: '1',
      name: 'Sarah Mukasa',
      location: 'Mbale',
      rating: 5,
      treatment: 'Dental Implants',
      text: 'The team at Star Dental Clinic is absolutely amazing! I was nervous about getting dental implants, but Dr. Nakato and her team made me feel so comfortable. The procedure was painless, and my new teeth look and feel completely natural. I can\'t stop smiling!',
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
    },
    {
      id: '4',
      name: 'Peter Mukhwana',
      location: 'Budaka',
      rating: 5,
      treatment: 'Root Canal Treatment',
      text: 'I was in severe pain and needed an emergency root canal. The staff accommodated me immediately, and the procedure was much more comfortable than I expected. The pain relief was instant, and they saved my tooth. Excellent emergency care!',
      date: new Date('2024-02-10')
    },
    {
      id: '5',
      name: 'Mary Atuhaire',
      location: 'Mbale',
      rating: 5,
      treatment: 'Pediatric Dentistry',
      text: 'Taking my 6-year-old to the dentist used to be a struggle, but Star Dental Clinic has completely changed that. The pediatric team is so gentle and patient. They make dental visits fun for kids, and my son actually asks when his next appointment is!',
      date: new Date('2024-02-15')
    },
    {
      id: '6',
      name: 'David Chelangat',
      location: 'Kapchorwa',
      rating: 5,
      treatment: 'Cosmetic Dentistry',
      text: 'I had several cosmetic dental issues that affected my confidence. The team created a comprehensive treatment plan that addressed all my concerns. The porcelain veneers and gum contouring have given me the smile I\'ve always wanted. Worth every penny!',
      date: new Date('2024-02-20')
    }
  ];

  // Use static testimonials data
  const testimonials = sampleTestimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-bold font-poppins mb-6">
              Patient <span className="text-secondary-400">Success Stories</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Read what our satisfied patients have to say about their experiences 
              at Star Dental Clinic Mbale. Their smiles tell our story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
              What Our Patients <span className="text-primary-500">Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real patients who trust us with their smiles
            </p>
          </motion.div>

          {testimonials.length > 0 && (
            <div className="relative max-w-4xl mx-auto">
              <motion.div 
                className="bg-gray-50 rounded-2xl p-12 relative overflow-hidden"
                data-aos="fade-up"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 opacity-20">
                  <ChatBubbleLeftEllipsisIcon className="w-16 h-16 text-primary-500" />
                </div>

                <div className="relative z-10 text-center">
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Patient Info */}
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 mb-2">
                      {testimonials[currentIndex].location}
                    </p>
                    <p className="text-primary-600 font-medium">
                      Treatment: {testimonials[currentIndex].treatment}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
                >
                  <ChevronRightIcon className="w-6 h-6 text-gray-600" />
                </button>
              </motion.div>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex 
                        ? 'bg-primary-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
              More <span className="text-primary-500">Patient Reviews</span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover why families across Eastern Uganda choose Star Dental Clinic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Treatment */}
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-4">
                  {testimonial.treatment}
                </span>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Patient Info */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    {testimonial.date?.toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom">
          <motion.div 
            className="text-center text-white mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins mb-4">
              Trusted by <span className="text-secondary-400">Thousands</span>
            </h2>
            <p className="text-xl text-primary-100">
              Numbers that speak to our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Happy Patients', icon: '😊' },
              { number: '98%', label: 'Satisfaction Rate', icon: '⭐' },
              { number: '5+', label: 'Years of Excellence', icon: '🏆' },
              { number: '24/7', label: 'Emergency Care', icon: '🚨' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-secondary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Submission CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-6">
              Share Your <span className="text-primary-500">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Had a great experience at Star Dental Clinic? We'd love to hear your story 
              and share it with others who are looking for quality dental care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-primary"
              >
                Write a Review
              </a>
              <a 
                href="/booking" 
                className="btn-outline"
              >
                Book Your Visit
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Follow us on social media for more patient stories:</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://facebook.com/stardentalclinicmbale" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-gray-400 hover:text-primary-500 transition-colors"
                >
                  <FaFacebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://instagram.com/stardentalclinicmbale" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-gray-400 hover:text-primary-500 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://twitter.com/stardentalmbale" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-gray-400 hover:text-primary-500 transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-500">
        <div className="container-custom">
          <motion.div 
            className="text-center text-white"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins mb-6">
              Ready to Join Our <span className="text-secondary-400">Happy Patients?</span>
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Experience the same excellent care that our patients rave about. 
              Schedule your appointment today and discover the Star Dental difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-secondary">
                Book Your Appointment
              </a>
              <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-accent-500">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
