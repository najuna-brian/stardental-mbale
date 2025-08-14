import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  CogIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

// Components
import DashboardStats from '../../components/Admin/DashboardStats';
import AppointmentsList from '../../components/Admin/AppointmentsList';
import BlogManager from '../../components/Admin/BlogManager';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: ChartBarIcon },
    { id: 'appointments', name: 'Appointments', icon: CalendarDaysIcon },
    { id: 'blog', name: 'Blog Posts', icon: DocumentTextIcon },
    { id: 'settings', name: 'Settings', icon: CogIcon },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardStats />;
      case 'appointments':
        return <AppointmentsList />;
      case 'blog':
        return <BlogManager />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <DashboardStats />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {user?.email}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-lg p-6">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderTabContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings Panel Component
const SettingsPanel = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Clinic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Clinic Name
              </label>
              <input
                type="text"
                className="form-input"
                defaultValue="Star Dental Clinic"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-input"
                defaultValue="+256-XXX-XXXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="form-input"
                defaultValue="info@stardentalmbale.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Emergency Phone
              </label>
              <input
                type="tel"
                className="form-input"
                defaultValue="+256-XXX-XXXXXX"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Operating Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weekdays (Mon-Fri)
              </label>
              <input
                type="text"
                className="form-input"
                defaultValue="8:00 AM - 6:00 PM"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Saturday
              </label>
              <input
                type="text"
                className="form-input"
                defaultValue="8:00 AM - 2:00 PM"
              />
            </div>
          </div>
        </div>

        <div>
          <button className="btn-primary">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
