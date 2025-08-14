import React from 'react';
import { motion } from 'framer-motion';

const ClinicShowcase = () => {
  const showcaseImages = [
    {
      src: '/images/clinic/clinical-room-1.jpeg',
      title: 'Modern Clinical Rooms',
      description: 'State-of-the-art facilities for your comfort'
    },
    {
      src: '/images/staff/staff-sterilizing.jpeg',
      title: 'Sterilization Process',
      description: 'Maintaining the highest hygiene standards'
    },
    {
      src: '/images/equipment/dental-chair-upper.JPG',
      title: 'Advanced Equipment',
      description: 'Latest dental technology for better care'
    },
    {
      src: '/images/exterior/signpost-view.jpeg',
      title: 'Easy to Find',
      description: 'Conveniently located on Naboa Road, Mbale'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
            Inside <span className="text-primary-500">Star Dental Clinic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our modern facilities and see why patients 
            trust us with their dental care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {showcaseImages.map((image, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          data-aos="fade-up"
        >
          <a href="/about" className="btn-primary">
            Learn More About Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClinicShowcase;
