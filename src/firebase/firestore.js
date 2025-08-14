import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  orderBy, 
  query, 
  limit,
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './config';

// Blog Posts
export const blogService = {
  // Get all blog posts
  async getAllPosts() {
    const q = query(
      collection(db, 'blog'), 
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  // Get recent blog posts
  async getRecentPosts(limitCount = 3) {
    const q = query(
      collection(db, 'blog'), 
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  // Add new blog post
  async addPost(postData) {
    return await addDoc(collection(db, 'blog'), {
      ...postData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
  },

  // Update blog post
  async updatePost(id, postData) {
    const postRef = doc(db, 'blog', id);
    return await updateDoc(postRef, {
      ...postData,
      updatedAt: serverTimestamp()
    });
  },

  // Delete blog post
  async deletePost(id) {
    return await deleteDoc(doc(db, 'blog', id));
  }
};

// Appointments
export const appointmentService = {
  // Book new appointment
  async bookAppointment(appointmentData) {
    return await addDoc(collection(db, 'appointments'), {
      ...appointmentData,
      status: 'pending',
      createdAt: serverTimestamp()
    });
  },

  // Get all appointments (admin only)
  async getAllAppointments() {
    const q = query(
      collection(db, 'appointments'), 
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  // Update appointment status
  async updateAppointmentStatus(id, status) {
    const appointmentRef = doc(db, 'appointments', id);
    return await updateDoc(appointmentRef, {
      status,
      updatedAt: serverTimestamp()
    });
  }
};

// Testimonials
export const testimonialService = {
  // Get all testimonials
  async getAllTestimonials() {
    const q = query(collection(db, 'testimonials'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  // Add new testimonial
  async addTestimonial(testimonialData) {
    return await addDoc(collection(db, 'testimonials'), {
      ...testimonialData,
      createdAt: serverTimestamp()
    });
  },

  // Update testimonial
  async updateTestimonial(id, testimonialData) {
    const testimonialRef = doc(db, 'testimonials', id);
    return await updateDoc(testimonialRef, {
      ...testimonialData,
      updatedAt: serverTimestamp()
    });
  },

  // Delete testimonial
  async deleteTestimonial(id) {
    return await deleteDoc(doc(db, 'testimonials', id));
  }
};

// Analytics helper
export const analyticsService = {
  // Track page views
  trackPageView: (pageName) => {
    // This would integrate with Firebase Analytics
    console.log(`Page view: ${pageName}`);
  },

  // Track events
  trackEvent: (eventName, parameters) => {
    // This would integrate with Firebase Analytics
    console.log(`Event: ${eventName}`, parameters);
  }
};
