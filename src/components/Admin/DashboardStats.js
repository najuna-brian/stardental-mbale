import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  UserGroupIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { appointmentService, blogService } from '../../firebase/firestore';

const DashboardStats = () => {
  const [stats, setStats] = useState({
    totalAppointments: 0,
    pendingAppointments: 0,
    totalBlogPosts: 0,
    totalVisitors: 1250 // This would come from Analytics
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [appointments, blogPosts] = await Promise.all([
          appointmentService.getAllAppointments(),
          blogService.getAllPosts()
        ]);

        setStats({
          totalAppointments: appointments.length,
          pendingAppointments: appointments.filter(apt => apt.status === 'pending').length,
          totalBlogPosts: blogPosts.length,
          totalVisitors: 1250 // Mock data - would integrate with Firebase Analytics
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Appointments',
      value: stats.totalAppointments,
      icon: CalendarDaysIcon,
      color: 'primary',
      change: '+12%'
    },
    {
      title: 'Pending Appointments',
      value: stats.pendingAppointments,
      icon: UserGroupIcon,
      color: 'secondary',
      change: '+5%'
    },
    {
      title: 'Blog Posts',
      value: stats.totalBlogPosts,
      icon: DocumentTextIcon,
      color: 'accent',
      change: '+8%'
    },
    {
      title: 'Website Visitors',
      value: stats.totalVisitors,
      icon: EyeIcon,
      color: 'primary',
      change: '+15%'
    }
  ];

  const colorClasses = {
    primary: 'from-primary-500 to-primary-600',
    secondary: 'from-secondary-500 to-secondary-600',
    accent: 'from-accent-500 to-accent-600'
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value.toLocaleString()}
                  </p>
                  <div className="flex items-center text-sm">
                    <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-600 font-medium">{stat.change}</span>
                    <span className="text-gray-500 ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[stat.color]} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Appointments */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Appointments</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Patient {i}</p>
                  <p className="text-sm text-gray-600">General Checkup</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Today, 2:00 PM</p>
                  <span className="inline-block px-2 py-1 text-xs bg-secondary-100 text-secondary-700 rounded-full">
                    Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full btn-primary text-left">
              Add New Blog Post
            </button>
            <button className="w-full btn-outline text-left">
              View All Appointments
            </button>
            <button className="w-full btn-outline text-left">
              Generate Report
            </button>
            <button className="w-full btn-outline text-left">
              Update Settings
            </button>
          </div>
        </motion.div>
      </div>

      {/* Chart Placeholder */}
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">Appointment Trends</h3>
        <div className="h-64 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
          <p className="text-primary-600 font-medium">Chart will be displayed here</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardStats;
