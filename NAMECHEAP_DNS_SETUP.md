# 🌐 Namecheap DNS Configuration Guide

## Step-by-Step Instructions

### 1. Firebase Console Setup

1. Visit: https://console.firebase.google.com/project/stardental-mbale/hosting/main
2. Click "Add custom domain"
3. Enter: stardentalclinic-mbale.com
4. Copy the DNS records Firebase provides

### 2. Namecheap Configuration

1. Go to: https://namecheap.com
2. Login to your account
3. Go to "Domain List"
4. Find "stardentalclinic-mbale.com"
5. Click "Manage"
6. Click "Advanced DNS" tab

### 3. Add DNS Records

Delete any existing A/CNAME records and add:

**A Records:**

- Type: A Record
- Host: @
- Value: [IP from Firebase - usually 151.101.1.195]
- TTL: Automatic

- Type: A Record
- Host: @
- Value: [Second IP from Firebase - usually 151.101.65.195]
- TTL: Automatic

**CNAME Record:**

- Type: CNAME Record
- Host: www
- Value: stardentalclinic-mbale.web.app
- TTL: Automatic

### 4. Save Changes

- Click "Save All Changes" in Namecheap
- Wait for DNS propagation (1-24 hours)

### 5. Verify Setup

Check DNS propagation:

- Visit: https://dnschecker.org/
- Enter: stardentalclinic-mbale.com
- Verify A records point to Firebase IPs

## Expected Results

- After 1-24 hours: Domain resolves to Firebase
- After 24-48 hours: SSL certificate active
- Full access: https://stardentalclinic-mbale.com

## Troubleshooting

If domain doesn't work after 48 hours:

1. Check DNS records in Namecheap match Firebase exactly
2. Verify no conflicting DNS records exist
3. Contact Firebase support if needed

## Important Notes

- Use EXACT IP addresses Firebase provides
- Delete any conflicting DNS records
- Don't use Namecheap's "URL Redirect" feature
- Firebase handles SSL automatically
