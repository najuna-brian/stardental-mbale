import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword 
} from 'firebase/auth';
import { auth } from './config';

export const authService = {
  // Sign in
  async signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { user: userCredential.user, error: null };
    } catch (error) {
      return { user: null, error: error.message };
    }
  },

  // Sign out
  async signOut() {
    try {
      await signOut(auth);
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  },

  // Create new admin user (for initial setup)
  async createUser(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return { user: userCredential.user, error: null };
    } catch (error) {
      return { user: null, error: error.message };
    }
  },

  // Listen to auth state changes
  onAuthStateChanged(callback) {
    return onAuthStateChanged(auth, callback);
  },

  // Get current user
  getCurrentUser() {
    return auth.currentUser;
  }
};
