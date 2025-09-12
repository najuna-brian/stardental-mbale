import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { appointmentService } from '../firebase/firestore';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const services = [
    { id: 'general-checkup', name: 'General Checkup', duration: '30 min', price: ' ' },
    { id: 'teeth-cleaning', name: 'Teeth Cleaning', duration: '45 min', price: ' ' },
    { id: 'teeth-whitening', name: 'Teeth Whitening', duration: '60 min', price: ' ' },
    { id: 'filling', name: 'Dental Filling', duration: '45 min', price: ' ' },
    { id: 'root-canal', name: 'Root Canal Treatment', duration: '90 min', price: ' ' },
    { id: 'extraction', name: 'Tooth Extraction', duration: '30 min', price: ' ' },
    { id: 'cosmetic-consultation', name: 'Cosmetic Consultation', duration: '30 min', price: ' ' },
    { id: 'orthodontic-consultation', name: 'Orthodontic Consultation', duration: '45 min', price: ' ' },
    { id: 'emergency', name: 'Emergency Visit', duration: '30 min', price: ' ' }
  ];

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Helper removed (unused): available dates are derived directly in UI components when needed.

  const onSubmit = async (data) => {
    if (!selectedService || !selectedDate || !selectedTime) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const appointmentData = {
        ...data,
        service: selectedService,
        serviceName: services.find(s => s.id === selectedService)?.name,
        date: selectedDate,
        time: selectedTime,
        status: 'pending'
      };

      await appointmentService.bookAppointment(appointmentData);
      
      toast.success('Appointment booked successfully! We will contact you to confirm.');
      
      // Reset form
      reset();
      setSelectedService('');
      setSelectedDate('');
      setSelectedTime('');
      
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast.error('Failed to book appointment. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
  <section className="bg-primary-50 text-gray-900 py-16">
        <div className="container-custom">
          <motion.div 
            className="text-center"
            data-aos="fade-up"
          >
            <h1 className="text-4xl font-bold font-poppins mb-4">
              Book Your <span className="text-secondary-400">Appointment</span>
            </h1>
            <p className="text-xl text-primary-500 max-w-2xl mx-auto">
              Schedule your visit to Star Dental Clinic. Choose your preferred service, 
              date, and time, and we'll take care of the rest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Service Selection */}
              <motion.div 
                className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6"
                data-aos="fade-up"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CalendarDaysIcon className="w-6 h-6 text-primary-500 mr-3" />
                  Select Service
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                        selectedService === service.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-800">{service.name}</h3>
                        {selectedService === service.id && (
                          <CheckCircleIcon className="w-5 h-5 text-primary-500" />
                        )}
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Duration: {service.duration}</p>
                        <p className="font-medium text-primary-600">{service.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Summary Card */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Appointment Summary</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Selected Service</p>
                    <p className="font-semibold">
                      {selectedService ? services.find(s => s.id === selectedService)?.name : 'None selected'}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold">
                      {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      }) : 'Not selected'}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-semibold">{selectedTime || 'Not selected'}</p>
                  </div>
                </div>

                {selectedService && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Estimated Cost:</span>
                      <span className="font-bold text-primary-600">
                        {services.find(s => s.id === selectedService)?.price}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Date & Time Selection */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <ClockIcon className="w-6 h-6 text-primary-500 mr-3" />
                Select Date & Time
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose Date
                  </label>
                  <input
                    type="date"
                    className="form-input w-full"
                    min={today}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedService === 'emergency' ? 'Available 7 days a week' : 'Available Monday - Saturday'}
                  </p>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`p-2 text-sm rounded-lg border transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-primary-500 text-white border-primary-500'
                            : 'border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-500'
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Information */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <UserIcon className="w-6 h-6 text-primary-500 mr-3" />
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    {...register('fullName', { required: 'Full name is required' })}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+256 XXX XXX XXX"
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    {...register('email', {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-input"
                    min="1"
                    max="120"
                    {...register('age')}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes / Concerns
                  </label>
                  <textarea
                    className="form-textarea h-24"
                    placeholder="Please describe any specific concerns or requirements..."
                    {...register('notes')}
                  ></textarea>
                </div>
              </div>
            </motion.div>

            {/* Emergency Contact & Submit */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    {...register('emergencyContactName')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Phone
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    {...register('emergencyContactPhone')}
                  />
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-3 mb-6">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  {...register('agreeToTerms', { required: 'You must agree to the terms' })}
                />
                <label className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="/privacy-policy" className="text-primary-500 hover:text-primary-600">
                    terms and conditions
                  </a>{' '}
                  and confirm that the information provided is accurate.
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="mb-4 text-sm text-red-600">{errors.agreeToTerms.message}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner w-5 h-5"></div>
                    <span>Booking Appointment...</span>
                  </>
                ) : (
                  <>
                    <CalendarDaysIcon className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </>
                )}
              </button>
            </motion.div>
          </form>

          {/* Contact Information */}
          <motion.div 
            className="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Need Help or Have Questions?
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href="tel:+256779003568" 
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Call: +256 779 003 568</span>
              </a>
              <a 
                href="mailto:appointments@stardentalmbale.com" 
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>Email: appointments@stardentalmbale.com</span>
              </a>
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              For emergencies outside business hours, call our emergency line: +256 779 003 568
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
