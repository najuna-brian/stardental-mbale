import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftEllipsisIcon,
  PaperAirplaneIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (in a real app, you'd send to a backend API)
      console.log('Contact form submission:', {
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'unread'
      });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Visit Our Clinic',
      details: [
        'Star Dental Clinic Mbale',
        'Plot 32A, North Road, opposite North Road P/S, Mbale',
        'Eastern Uganda'
      ],
      color: 'primary'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: [
        'Main: +256 779 003 568',
        'Emergency: +256 779 003 568',
        'Available 24/7 for emergencies'
      ],
      color: 'secondary'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: [
        'stardentalclinic.mbale@gmail.com',
        'General inquiries & appointments',
        'We respond within 24 hours'
      ],
      color: 'accent'
    },
    {
      icon: ClockIcon,
      title: 'Opening Hours',
      details: [
        'Mon - Sat: 8:30 AM - 6:00 PM',
        'Sunday: Emergency Only',
        'Public holidays: Call for availability'
      ],
      color: 'primary'
    }
  ];

  const colorClasses = {
    primary: 'from-primary-500 to-primary-600',
    secondary: 'from-secondary-500 to-secondary-600',
    accent: 'from-accent-500 to-accent-600'
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
              Get in <span className="text-secondary-400">Touch</span>
            </h1>
            <p className="text-xl text-primary-500 leading-relaxed">
              We're here to help with all your dental needs. Contact us today to schedule 
              your appointment or ask any questions about our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="surface p-8 text-center hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[info.color]} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div data-aos="fade-right">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold font-poppins text-gray-800 mb-4">
                    Send Us a <span className="text-primary-500">Message</span>
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <p className="text-gray-600 mb-4">Prefer to book an appointment directly?</p>
                  <a href="/booking" className="btn-secondary inline-flex items-center space-x-2">
                    <CalendarIcon className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div 
              className="space-y-8"
              data-aos="fade-left"
            >
              {/* Google Maps Embed */}
              <div className="bg-gray-200 rounded-2xl overflow-hidden">
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1169519820232!2d34.17596997410492!3d1.074336962401298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1778b70dd71e818f%3A0x242a615a9b9e3af9!2sStar%20Dental%20Clinic!5e0!3m2!1sen!2sug!4v1756057807606!5m2!1sen!2sug"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Star Dental Clinic Mbale Location"
                    className="w-full h-64"
                  ></iframe>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="p-6 text-white">
                      <MapPinIcon className="w-8 h-8 mb-2" />
                      <p className="font-medium">Star Dental Clinic Mbale</p>
                      <p className="text-sm text-gray-200">
                        Plot 32A, North Road, opposite North Road P/S, Mbale
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+256779003568"
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Call Now</p>
                      <p className="text-sm text-gray-600">Speak with our team</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/256779003568?text=Hello! I'd like to contact Star Dental Clinic."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <p className="text-sm text-gray-600">Chat with us instantly</p>
                    </div>
                  </a>

                  <a 
                    href="/booking"
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                      <CalendarIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Book Online</p>
                      <p className="text-sm text-gray-600">Schedule your appointment</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Emergency Contact</h3>
                <p className="text-red-700 mb-4">
                  Experiencing a dental emergency? Don't wait - contact us immediately.
                </p>
                <a 
                  href="tel:+256779003568"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center space-x-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Emergency: +256 779 003 568</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
