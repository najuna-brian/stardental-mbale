import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  EyeIcon, 
  StarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const team = [
    {
      name: 'Dr. Charity Mutuwa',
      title: 'Licensed Dentist',
      specialization: 'General & Cosmetic Dentistry',
      experience: '4+ years',
      education: 'DDS - Fully Licensed',
      bio: 'Dr. Mutuwa is a fully licensed dentist with extensive experience in general and cosmetic dentistry procedures.',
      image: '/images/staff/staff-demonstration.jpeg'
    },
    {
      name: 'Ms. Lydia Nakayenze',
      title: 'Chair Side Assistant',
      specialization: 'Patient Care & Assistance',
      experience: '3+ years',
      education: 'Certified Dental Assistant',
      bio: 'Ms. Nakayenze provides excellent patient care and assists with all dental procedures, ensuring patient comfort.',
      image: '/images/staff/lady-staff.jpeg'
    },
    {
      name: 'Dr. Avaga Leonard',
      title: 'Senior Dentist',
      specialization: 'Clinical & Community Dentistry',
      experience: '30+ years',
      education: 'DDS, Community Dentistry Specialist',
      bio: 'Dr. Avaga brings over three decades of experience in both clinical dentistry and community dental health programs.',
      image: '/images/staff/staff-operating.jpeg'
    }
  ];

  const achievements = [
    {
      icon: TrophyIcon,
      title: 'Best Dental Clinic Award',
      description: 'Eastern Uganda Healthcare Excellence Awards 2023',
      year: '2023'
    },
    {
      icon: AcademicCapIcon,
      title: 'Certified Training Center',
      description: 'Approved by Uganda Dental Association for continuous education',
      year: '2022'
    },
    {
      icon: UserGroupIcon,
      title: 'Community Service Award',
      description: 'Outstanding contribution to rural dental health outreach',
      year: '2023'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Clinic Established',
      description: 'Star Dental Clinic opened its doors on Plot 32A, North Road, Mbale with a mission to provide quality dental care.'
    },
    {
      year: '2021',
      title: 'Team Building & Equipment',
      description: 'Expanded our team with qualified dentists and invested in modern dental equipment to serve patients better.'
    },
    {
      year: '2022',
      title: 'Service Excellence',
      description: 'Continued to evolve aesthetically and in terms of equipment, enhancing patient experience and care quality.'
    },
    {
      year: '2023',
      title: 'Community Outreach Programs',
      description: 'Launched comprehensive dental outreach programs to serve rural communities and promote oral health awareness.'
    },
    {
      year: '2024',
      title: 'Digital Presence & Growth',
      description: 'Established strong online presence and continued expanding services to meet growing community needs.'
    },
    {
      year: '2025',
      title: 'Modern Web Platform',
      description: 'Launched comprehensive website for better patient access and streamlined appointment booking system.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-bold font-poppins mb-6">
              About <span className="text-secondary-400">Star Dental Clinic</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Transforming smiles and enhancing lives through innovation, education, 
              and community-driven dental care in Eastern Uganda and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="w-10 h-10 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide high quality, accessible, affordable dental care in Eastern Uganda and beyond, 
                focusing on prevention, conservation, and innovative treatments that improve lives.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <EyeIcon className="w-10 h-10 text-secondary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading dental clinic in Eastern Uganda and beyond, known for transforming 
                smiles and enhancing lives through innovation, education, and community-driven care.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <StarIcon className="w-10 h-10 text-accent-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Goal</h3>
              <p className="text-gray-600 leading-relaxed">
                To expand our reach through outreach clinics, foster oral health conservation, 
                and ensure that everyone in our community gets access to a good smile.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
              Our <span className="text-primary-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a leading dental clinic in Eastern Uganda, 
              here's how our story has unfolded over the years.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative flex items-center mb-12 last:mb-0"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-primary-200"></div>
                )}
                
                {/* Year Circle */}
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 z-10">
                  {item.year.slice(-2)}
                </div>
                
                {/* Content */}
                <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    <span className="text-primary-500 font-semibold">{item.year}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
              Meet Our <span className="text-primary-500">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of dental professionals is committed to providing 
              you with the highest quality care in a comfortable environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Photo */}
                <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-primary-500 font-semibold mb-1">{member.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p><strong>Experience:</strong> {member.experience}</p>
                    <p><strong>Education:</strong> {member.education}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins text-white mb-4">
              Awards & <span className="text-secondary-400">Recognition</span>
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by healthcare 
              organizations and our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-primary-100 mb-4">{achievement.description}</p>
                <span className="inline-block bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {achievement.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-6">
              Ready to Experience the <span className="text-primary-500">Star Dental</span> Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of satisfied patients who have trusted us with their smiles. 
              Schedule your consultation today and discover why we're the leading choice 
              for dental care in Eastern Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary">
                Book Your Consultation
              </a>
              <a href="/contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
