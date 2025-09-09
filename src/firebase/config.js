// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// Hardcoded Firebase config with correct values from project console
const firebaseConfig = {
  apiKey: "AIzaSyD1ydpMvRPJSAf8cEQSgLcmYBBnMHqmPmc",
  authDomain: "stardental-mbale.firebaseapp.com",
  projectId: "stardental-mbale",
  storageBucket: "stardental-mbale.firebasestorage.app", // Using the value from your Firebase config
  messagingSenderId: "703263552567",
  appId: "1:703263552567:web:31a3b84fe29743dedebbb2"
};

// Debug config values in console
console.log("Firebase config being used:", {
  apiKey: firebaseConfig.apiKey,
  projectId: firebaseConfig.projectId,
  appId: firebaseConfig.appId
});

// Debug config values in console
console.log("Firebase config being used:", {
  apiKey: firebaseConfig.apiKey,
  projectId: firebaseConfig.projectId,
  appId: firebaseConfig.appId
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);

export default app;
