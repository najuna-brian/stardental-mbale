import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaTiktok, 
  FaWhatsapp 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/stardentalclinicmbale', icon: FaFacebook },
    { name: 'Instagram', href: 'https://instagram.com/stardentalclinicmbale', icon: FaInstagram },
    { name: 'Twitter', href: 'https://twitter.com/stardentalmbale', icon: FaTwitter },
    { name: 'TikTok', href: 'https://tiktok.com/@stardentalclinicmbale', icon: FaTiktok },
    { name: 'WhatsApp', href: 'https://wa.me/256779003568', icon: FaWhatsapp }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Learning Hub', path: '/blog' },
    { name: 'Book Appointment', path: '/booking' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Orthodontics',
    'Teeth Whitening',
    'Pediatric Dentistry',
    'Oral Surgery'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-500 py-12">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated on Oral Health Tips
            </h3>
            <p className="mb-6 text-primary-50">
              Subscribe to our newsletter for expert dental advice and clinic updates
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Star Dental Clinic</h3>
                <p className="text-secondary-500 font-medium">
                  "Because Everyone Deserves a Good Smile"
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Providing high quality, accessible, affordable dental care in Eastern Uganda and beyond, 
                focusing on prevention, conservation, and innovative treatments.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    Plot 32A, North Road, opposite North Road P/S, Mbale
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <a href="tel:+256779003568" className="text-gray-300 hover:text-white transition-colors">
                    +256 779 003 568
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <a href="mailto:stardentalclinic.mbale@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    stardentalclinic.mbale@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-300">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Opening Hours</h4>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <ClockIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <div className="text-gray-300">
                    <div>Mon - Sat: 8:30 AM - 6:00 PM</div>
                    <div>Sunday: Emergency Only</div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Star Dental Clinic Mbale. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-400">License: DL-123456-UG</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
