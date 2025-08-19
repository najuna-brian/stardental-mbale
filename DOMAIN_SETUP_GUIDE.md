# 🌟 Firebase Custom Domain Setup Guide

## stardentalclinic-mbale.com

### 📋 Step-by-Step Domain Configuration

#### Step 1: Purchase Domain

1. **Go to Namecheap.com** (recommended) or Google Domains
2. **Search for**: `stardentalclinic-mbale.com`
3. **Purchase the domain** (~$12-15/year)
4. **Complete domain registration**

#### Step 2: Firebase Hosting Setup

```bash
# Navigate to project directory
cd /home/najuna/stardental

# Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Add custom domain to Firebase Hosting
firebase hosting:sites:create stardentalclinic-mbale

# Deploy to new site
firebase use stardental-mbale
firebase target:apply hosting main stardentalclinic-mbale
```

#### Step 3: Configure firebase.json

Update `firebase.json` to support custom domain:

```json
{
  "hosting": [
    {
      "target": "main",
      "public": "build",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ],
      "headers": [
        {
          "source": "**/*.@(js|css)",
          "headers": [
            {
              "key": "Cache-Control",
              "value": "max-age=31536000"
            }
          ]
        },
        {
          "source": "/sitemap.xml",
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/xml"
            }
          ]
        }
      ]
    }
  ]
}
```

#### Step 4: DNS Configuration at Domain Registrar

Add these DNS records in your domain registrar's control panel:

**A Records (for main domain):**

```
Type: A
Name: @
Value: 151.101.1.195
TTL: 300

Type: A
Name: @
Value: 151.101.65.195
TTL: 300
```

**CNAME Record (for www subdomain):**

```
Type: CNAME
Name: www
Value: stardentalclinic-mbale.web.app
TTL: 300
```

#### Step 5: Firebase Console Setup

1. **Go to**: [Firebase Console](https://console.firebase.google.com)
2. **Select**: stardental-mbale project
3. **Navigate**: Hosting → Connect custom domain
4. **Enter domain**: `stardentalclinic-mbale.com`
5. **Follow verification steps**
6. **Wait for SSL certificate** (24-48 hours)

#### Step 6: Verify Setup

```bash
# Check DNS propagation
nslookup stardentalclinic-mbale.com

# Test website
curl -I https://stardentalclinic-mbale.com

# Deploy latest changes
npm run build
firebase deploy --only hosting:main
```

### 🚀 Domain Redirect Configuration

Create redirects from old URLs to new domain in Firebase:

```json
{
  "hosting": {
    "redirects": [
      {
        "source": "https://stardental-mbale.web.app/**",
        "destination": "https://stardentalclinic-mbale.com/**",
        "type": 301
      }
    ]
  }
}
```

### 📊 SEO Benefits After Setup

#### Immediate Benefits:

- ✅ **Professional domain** builds trust
- ✅ **Keyword-rich URL** boosts SEO
- ✅ **Brand consistency** across marketing
- ✅ **Better social sharing** appearance

#### Search Engine Benefits:

- ✅ **Local SEO boost** from location in domain
- ✅ **Higher click-through rates** from search results
- ✅ **Better brand recognition** in search results
- ✅ **Professional email addresses** possible

### 💡 Marketing Updates Needed

After domain is live, update these:

#### Online Presence:

- [ ] Google My Business listing
- [ ] Facebook page URL
- [ ] Instagram bio link
- [ ] LinkedIn company page
- [ ] Directory listings

#### Print Materials:

- [ ] Business cards
- [ ] Brochures/flyers
- [ ] Clinic signage
- [ ] Prescription pads
- [ ] Referral forms

#### Digital Marketing:

- [ ] Google Ads campaigns
- [ ] Social media posts
- [ ] Email signatures
- [ ] WhatsApp Business profile

### 🔧 Technical Checklist

Before going live:

- [ ] Domain purchased and DNS configured
- [ ] Firebase custom domain verified
- [ ] SSL certificate active (https://)
- [ ] All redirects working properly
- [ ] Sitemap submitted to Google
- [ ] Google Analytics updated
- [ ] Search Console property added

### 📈 Expected Results

**Within 1 Week:**

- Domain resolves properly
- SSL certificate active
- Basic functionality verified

**Within 1 Month:**

- Google indexing new domain
- Search rankings improving
- Increased organic traffic

**Within 3 Months:**

- Significant SEO improvement
- Higher local search rankings
- Increased appointment bookings

---

**Total Setup Time**: 2-4 hours
**DNS Propagation**: 24-48 hours
**SSL Certificate**: Automatic (Let's Encrypt)
**Annual Cost**: ~$15/year

🎯 **Result**: Professional, SEO-optimized website with custom domain that positions Star Dental Clinic Mbale as the premier dental destination in Eastern Uganda!
