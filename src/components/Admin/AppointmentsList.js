import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { appointmentService } from '../../firebase/firestore';
import toast from 'react-hot-toast';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const data = await appointmentService.getAllAppointments();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast.error('Failed to load appointments');
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (id, status) => {
    try {
      await appointmentService.updateAppointmentStatus(id, status);
      toast.success(`Appointment ${status} successfully`);
      fetchAppointments(); // Refresh the list
    } catch (error) {
      console.error('Error updating appointment:', error);
      toast.error('Failed to update appointment');
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'all') return true;
    return appointment.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-20 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Appointments</h2>
            <p className="text-gray-600">Manage patient appointments</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex space-x-2">
            {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === status
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                {status === 'all' && ` (${appointments.length})`}
                {status !== 'all' && ` (${appointments.filter(a => a.status === status).length})`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {filteredAppointments.length === 0 ? (
          <div className="p-12 text-center">
            <ClockIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
            <p className="text-gray-600">
              {filter === 'all' 
                ? 'No appointments have been booked yet.' 
                : `No ${filter} appointments found.`
              }
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredAppointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                className="p-6 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {appointment.fullName}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <p><strong>Service:</strong> {appointment.serviceName}</p>
                        <p><strong>Date:</strong> {formatDate(appointment.date)}</p>
                        <p><strong>Time:</strong> {appointment.time}</p>
                      </div>
                      <div>
                        <p className="flex items-center">
                          <PhoneIcon className="w-4 h-4 mr-1" />
                          {appointment.phone}
                        </p>
                        {appointment.email && (
                          <p className="flex items-center">
                            <EnvelopeIcon className="w-4 h-4 mr-1" />
                            {appointment.email}
                          </p>
                        )}
                        {appointment.age && <p><strong>Age:</strong> {appointment.age}</p>}
                      </div>
                      <div>
                        {appointment.notes && (
                          <p><strong>Notes:</strong> {appointment.notes}</p>
                        )}
                        <p><strong>Booked:</strong> {appointment.createdAt?.toDate?.()?.toLocaleDateString() || 'Unknown'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => setSelectedAppointment(appointment)}
                      className="p-2 text-gray-600 hover:text-primary-500 transition-colors"
                      title="View Details"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    
                    {appointment.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                          className="p-2 text-green-600 hover:text-green-700 transition-colors"
                          title="Confirm Appointment"
                        >
                          <CheckCircleIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                          className="p-2 text-red-600 hover:text-red-700 transition-colors"
                          title="Cancel Appointment"
                        >
                          <XCircleIcon className="w-5 h-5" />
                        </button>
                      </>
                    )}
                    
                    {appointment.status === 'confirmed' && (
                      <button
                        onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors"
                      >
                        Mark Complete
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Appointment Details</h3>
                <button
                  onClick={() => setSelectedAppointment(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircleIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Patient Information</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Name:</strong> {selectedAppointment.fullName}</p>
                      <p><strong>Phone:</strong> {selectedAppointment.phone}</p>
                      {selectedAppointment.email && <p><strong>Email:</strong> {selectedAppointment.email}</p>}
                      {selectedAppointment.age && <p><strong>Age:</strong> {selectedAppointment.age}</p>}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Appointment Details</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Service:</strong> {selectedAppointment.serviceName}</p>
                      <p><strong>Date:</strong> {formatDate(selectedAppointment.date)}</p>
                      <p><strong>Time:</strong> {selectedAppointment.time}</p>
                      <p><strong>Status:</strong> 
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(selectedAppointment.status)}`}>
                          {selectedAppointment.status}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {selectedAppointment.notes && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Notes</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                      {selectedAppointment.notes}
                    </p>
                  </div>
                )}

                {(selectedAppointment.emergencyContactName || selectedAppointment.emergencyContactPhone) && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Emergency Contact</h4>
                    <div className="space-y-2 text-sm">
                      {selectedAppointment.emergencyContactName && (
                        <p><strong>Name:</strong> {selectedAppointment.emergencyContactName}</p>
                      )}
                      {selectedAppointment.emergencyContactPhone && (
                        <p><strong>Phone:</strong> {selectedAppointment.emergencyContactPhone}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
                <button
                  onClick={() => setSelectedAppointment(null)}
                  className="btn-outline"
                >
                  Close
                </button>
                {selectedAppointment.status === 'pending' && (
                  <>
                    <button
                      onClick={() => {
                        updateAppointmentStatus(selectedAppointment.id, 'confirmed');
                        setSelectedAppointment(null);
                      }}
                      className="btn-secondary"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => {
                        updateAppointmentStatus(selectedAppointment.id, 'cancelled');
                        setSelectedAppointment(null);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsList;
