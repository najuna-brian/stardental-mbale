# Star Dental Clinic Website

A modern, responsive website for Star Dental Clinic Mbale built with React, Tailwind CSS, and Firebase.

## Features

- **Modern Design**: Clean, professional layout with responsive design
- **Appointment Booking**: Online appointment scheduling system
- **Learning Hub**: Blog/content management system
- **Admin Dashboard**: Comprehensive admin panel for managing appointments and content
- **Firebase Integration**: Real-time database, authentication, and hosting
- **SEO Optimized**: Search engine friendly with proper meta tags and structured data
- **Performance Optimized**: Fast loading with image optimization and caching

## Tech Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion
- **Backend**: Firebase (Firestore, Authentication, Hosting)
- **Forms**: React Hook Form
- **Icons**: Heroicons
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd stardental
```

2. Install dependencies:

```bash
npm install
```

3. Configure Firebase:

   - Create a new Firebase project at https://console.firebase.google.com
   - Enable Firestore Database, Authentication, and Hosting
   - Copy your Firebase config and update `src/firebase/config.js`

4. Update Firebase configuration in `src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id",
};
```

5. Start the development server:

```bash
npm start
```

## Firebase Setup

### 1. Firestore Database

Create the following collections in Firestore:

- `appointments` - For storing appointment bookings
- `blog` - For storing blog posts
- `testimonials` - For storing patient testimonials
- `users` - For admin users

### 2. Authentication

- Enable Email/Password authentication in Firebase Console
- Create an admin user account for accessing the admin dashboard

### 3. Security Rules

The project includes Firestore security rules in `firestore.rules`. Deploy them using:

```bash
firebase deploy --only firestore:rules
```

## Deployment

### Deploy to Firebase Hosting

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Initialize Firebase (if not already done):

```bash
firebase init
```

4. Build and deploy:

```bash
npm run build
firebase deploy
```

### Environment Variables

For production, make sure to:

1. Update Firebase configuration with production keys
2. Configure proper Firestore security rules
3. Set up Firebase Analytics (optional)
4. Configure domain and SSL certificate

## Admin Access

- Navigate to `/admin/login`
- Use the admin credentials you created in Firebase Authentication
- Access the dashboard to manage appointments and blog posts

## Customization

### Adding Images

Replace placeholder images in the `public/images` directory with actual clinic photos:

- Hero section background
- About us photos
- Team member photos
- Service images
- Blog post featured images

### Updating Content

1. **Clinic Information**: Update details in components and pages
2. **Services**: Modify the services array in `ServicesPreview.js`
3. **Team Members**: Update team information in `About.js`
4. **Contact Details**: Update phone numbers, email, and address throughout the app

### Styling

- Colors can be customized in `tailwind.config.js`
- Component styles are in individual component files
- Global styles are in `src/index.css`

## Features Overview

### Public Pages

- **Home**: Hero section, services preview, testimonials, booking section
- **About**: Clinic mission, team, timeline, achievements
- **Services**: Detailed service information with before/after galleries
- **Learning Hub**: Blog posts with categories and search
- **Testimonials**: Patient reviews and Google Reviews integration
- **Booking**: Comprehensive appointment booking form
- **Contact**: Contact information, map, FAQ

### Admin Features

- **Dashboard**: Overview statistics and quick actions
- **Appointments**: View, manage, and update appointment status
- **Blog Manager**: Create, edit, and delete blog posts
- **Settings**: Update clinic information and settings

### Additional Features

- **WhatsApp Integration**: Floating WhatsApp button for instant communication
- **SEO Optimization**: Meta tags, structured data, sitemap
- **Responsive Design**: Works perfectly on all devices
- **Accessibility**: Keyboard navigation, alt texts, proper contrast
- **Performance**: Optimized images, lazy loading, caching

## Support

For technical support or questions about the website:

1. Check the documentation above
2. Review Firebase console for any errors
3. Check browser console for JavaScript errors
4. Ensure all Firebase services are properly configured

## License

This project is proprietary software for Star Dental Clinic Mbale.

---

**Star Dental Clinic** - "Because Everyone Deserves a Good Smile"
