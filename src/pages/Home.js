import React from 'react';
import Hero from '../components/Home/Hero';
import QuickInfo from '../components/Home/QuickInfo';
import AboutSection from '../components/Home/AboutSection';
import ClinicShowcase from '../components/Home/ClinicShowcase';
import ServicesPreview from '../components/Home/ServicesPreview';
import BlogPreview from '../components/Home/BlogPreview';
import TestimonialsPreview from '../components/Home/TestimonialsPreview';
import BookingSection from '../components/Home/BookingSection';
import ContactPreview from '../components/Home/ContactPreview';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickInfo />
      <AboutSection />
      <ClinicShowcase />
      <ServicesPreview />
      <BlogPreview />
      <TestimonialsPreview />
      <BookingSection />
      <ContactPreview />
    </div>
  );
};

export default Home;
