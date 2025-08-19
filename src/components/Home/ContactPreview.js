import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const ContactPreview = () => {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. Contact us to verify your coverage."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, mobile money, bank transfers, and major credit cards."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, we provide 24/7 emergency dental care. Call our emergency line for immediate assistance."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend regular checkups every 6 months for optimal oral health."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            data-aos="fade-right"
          >
            <div>
              <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
                Get In <span className="text-primary-500">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Have questions about our services or need to schedule an appointment? 
                We're here to help and would love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Visit Our Clinic</h3>
                  <p className="text-gray-600 mb-2">
                    Star Dental Clinic<br />
                    Mbale City, Eastern Uganda
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-1"
                  >
                    <span>Get Directions</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                  <div className="space-y-1">
                    <a 
                      href="tel:+256-XXX-XXXXXX" 
                      className="block text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      Main: +256-XXX-XXXXXX
                    </a>
                    <a 
                      href="tel:+256-XXX-XXXXXX" 
                      className="block text-red-600 hover:text-red-700 transition-colors font-medium"
                    >
                      Emergency: +256-XXX-XXXXXX
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                  <a 
                    href="mailto:stardentalclinic.mbale@gmail.com" 
                    className="text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    stardentalclinic.mbale@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Opening Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 2:00 PM</p>
                    <p className="text-red-600">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section & Map */}
          <motion.div 
            className="space-y-8"
            data-aos="fade-left"
          >
            {/* Embedded Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <MapPinIcon className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">Click to open in Google Maps</p>
                </div>
              </div>
              <div className="p-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full btn-primary text-center block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Mini FAQ */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <QuestionMarkCircleIcon className="w-8 h-8 text-primary-500" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link 
                  to="/contact" 
                  className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-2"
                >
                  <span>View All FAQs</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Journey to Better Oral Health?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to schedule your consultation. Our friendly team is ready 
            to answer your questions and help you achieve the smile you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/booking" className="btn-primary">
              Book Appointment
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;
