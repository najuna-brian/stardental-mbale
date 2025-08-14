# Deployment Guide for Star Dental Clinic Website

This guide will walk you through deploying the Star Dental Clinic website to Firebase Hosting.

## Prerequisites

1. Node.js (v16 or higher) installed
2. Firebase CLI installed globally: `npm install -g firebase-tools`
3. A Firebase account with the `stardental-mbale` project

## Step 1: Prepare the Project

1. Navigate to the project directory:

```bash
cd /home/najuna/stardental
```

2. Install dependencies:

```bash
npm install
```

## Step 2: Configure Firebase

1. Login to Firebase:

```bash
firebase login
```

2. Verify the project is correctly linked:

```bash
firebase projects:list
```

3. Make sure you're using the correct project:

```bash
firebase use stardental-mbale
```

## Step 3: Update Firebase Configuration

1. Go to Firebase Console: https://console.firebase.google.com
2. Select your `stardental-mbale` project
3. Go to Project Settings > General > Your apps
4. If no web app exists, click "Add app" and select Web
5. Copy the Firebase configuration object
6. Update `src/firebase/config.js` with your actual configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "stardental-mbale.firebaseapp.com",
  projectId: "stardental-mbale",
  storageBucket: "stardental-mbale.appspot.com",
  messagingSenderId: "703263552567",
  appId: "your-actual-app-id",
  measurementId: "your-measurement-id",
};
```

## Step 4: Set Up Firebase Services

### Enable Firestore Database

1. Go to Firestore Database in Firebase Console
2. Click "Create database"
3. Choose "Start in test mode" for now
4. Select a location close to your users (preferably in Africa)

### Enable Authentication

1. Go to Authentication in Firebase Console
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password"

### Create Admin User

1. Go to Authentication > Users
2. Click "Add user"
3. Email: `admin@stardentalmbale.com`
4. Password: Create a secure password
5. This will be used to access the admin dashboard

## Step 5: Deploy Firestore Rules

1. Deploy the security rules:

```bash
firebase deploy --only firestore:rules
```

## Step 6: Build and Deploy

1. Build the React application:

```bash
npm run build
```

2. Deploy to Firebase Hosting:

```bash
firebase deploy
```

3. If successful, you'll see output like:

```
✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/stardental-mbale
Hosting URL: https://stardental-mbale.web.app
```

## Step 7: Post-Deployment Setup

### 1. Add Sample Data

Visit your deployed site's admin dashboard:

1. Go to `https://stardental-mbale.web.app/admin/login`
2. Login with the admin credentials you created
3. Add some sample blog posts in the Blog Manager
4. Test the appointment booking system

### 2. Configure Domain (Optional)

If you have a custom domain:

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the instructions to connect your domain

### 3. Set Up Analytics (Optional)

1. Go to Firebase Console > Analytics
2. Click "Enable Analytics"
3. Follow the setup instructions

## Step 8: Test the Website

### Public Features to Test:

- [ ] Homepage loads correctly
- [ ] Navigation works on all devices
- [ ] Appointment booking form submits successfully
- [ ] Contact form works
- [ ] All pages are responsive
- [ ] WhatsApp button works

### Admin Features to Test:

- [ ] Admin login works
- [ ] Dashboard shows statistics
- [ ] Can create/edit blog posts
- [ ] Can view/manage appointments
- [ ] Can update settings

## Troubleshooting

### Common Issues:

1. **Build Errors**:

   - Make sure all dependencies are installed: `npm install`
   - Check for TypeScript errors: `npm run build`

2. **Firebase Configuration Errors**:

   - Verify the config object in `src/firebase/config.js`
   - Ensure all Firebase services are enabled

3. **Deployment Fails**:

   - Check you're logged into the correct Firebase account
   - Verify project permissions
   - Try `firebase login --reauth`

4. **App Not Loading**:
   - Check browser console for errors
   - Verify Firebase services are configured correctly
   - Check Firestore rules are deployed

### Getting Help:

1. Check Firebase Console for error messages
2. Review browser developer tools console
3. Check Network tab for failed requests
4. Verify Firestore security rules allow necessary operations

## Security Considerations

### Before Going Live:

1. **Update Firestore Rules**: Change from test mode to production rules
2. **Environment Variables**: Consider using environment variables for sensitive config
3. **HTTPS**: Firebase Hosting automatically provides HTTPS
4. **Backup**: Set up regular Firestore backups

### Recommended Firestore Rules for Production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /blog/{document} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'admin@stardentalmbale.com';
    }

    match /appointments/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null && request.auth.token.email == 'admin@stardentalmbale.com';
    }

    match /testimonials/{document} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'admin@stardentalmbale.com';
    }
  }
}
```

## Maintenance

### Regular Tasks:

1. **Update Dependencies**: Run `npm update` monthly
2. **Monitor Analytics**: Check Firebase Analytics for site performance
3. **Backup Data**: Export Firestore data regularly
4. **Security Updates**: Keep Firebase and React dependencies updated

### Content Updates:

1. **Blog Posts**: Use the admin dashboard to add new content
2. **Appointments**: Monitor and manage through admin panel
3. **Images**: Replace placeholder images with actual clinic photos

Your Star Dental Clinic website is now live! 🎉

Visit: https://stardental-mbale.web.app
Admin: https://stardental-mbale.web.app/admin/login
