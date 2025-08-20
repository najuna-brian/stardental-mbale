# 🌐 Custom Domain Setup Guide for Star Dental Clinic

## 📋 **Current Status**

- ✅ **Primary Site**: https://stardental-mbale.web.app (Latest version deployed)
- ✅ **Project**: `stardental-mbale`
- 🎯 **Target Domain**: `stardentalclinic-mbale.com`

## 🚀 **Step-by-Step Custom Domain Setup**

### **Phase 1: Firebase Console Setup**

1. **Go to Firebase Console**

   - Visit: https://console.firebase.google.com/project/stardental-mbale/hosting
   - Navigate to **Hosting** section

2. **Add Custom Domain**

   - Click **"Add custom domain"**
   - Enter: `stardentalclinic-mbale.com`
   - Click **"Continue"**

3. **Verify Domain Ownership**
   Firebase will provide you with:
   - **TXT record** for domain verification
   - **A records** for domain pointing

### **Phase 2: Domain Provider Setup (Namecheap/Your Provider)**

#### **DNS Records to Add:**

**1. Domain Verification (TXT Record)**

```
Type: TXT
Host: @
Value: [Firebase will provide this]
TTL: Automatic/300
```

**2. Domain Pointing (A Records)**

```
Type: A
Host: @
Value: 199.36.158.100
TTL: Automatic/300

Type: A
Host: www
Value: 199.36.158.100
TTL: Automatic/300
```

**3. Alternative CNAME Setup (if A records don't work)**

```
Type: CNAME
Host: www
Value: stardentalclinic-mbale-com.web.app
TTL: Automatic/300

Type: A
Host: @
Value: 199.36.158.100
TTL: Automatic/300
```

### **Phase 3: SSL Certificate**

- Firebase automatically provisions SSL certificates
- This process takes 24-48 hours after DNS propagation
- Your site will be available at `https://stardentalclinic-mbale.com`

## 🔧 **Alternative: CLI Method (if you prefer)**

### **Option A: Using Firebase CLI**

```bash
# Add custom domain
firebase hosting:channel:deploy live stardentalclinic-mbale.com

# Check domain status
firebase hosting:domains:list
```

### **Option B: Update firebase.json**

```json
{
  "hosting": {
    "site": "stardental-mbale",
    "public": "build",
    "customDomain": "stardentalclinic-mbale.com",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## 📊 **Expected Timeline**

- **Domain Verification**: 5-15 minutes
- **DNS Propagation**: 1-24 hours
- **SSL Certificate**: 24-48 hours
- **Full Setup**: 1-2 days maximum

## 🎯 **Final URLs After Setup**

- ✅ **Primary**: https://stardentalclinic-mbale.com
- ✅ **WWW**: https://www.stardentalclinic-mbale.com
- 🔄 **Backup**: https://stardental-mbale.web.app (Firebase subdomain)

## 🛠 **Cleanup: Remove Secondary Site**

After custom domain is working:

```bash
# Delete the unused secondary site
firebase hosting:sites:delete stardentalclinic-mbale
```

## 📝 **DNS Configuration Example (Namecheap)**

| Type | Host | Value                        | TTL |
| ---- | ---- | ---------------------------- | --- |
| A    | @    | 199.36.158.100               | 300 |
| A    | www  | 199.36.158.100               | 300 |
| TXT  | @    | [Firebase verification code] | 300 |

## 🔍 **Verification Commands**

```bash
# Check DNS propagation
nslookup stardentalclinic-mbale.com
dig stardentalclinic-mbale.com

# Check Firebase hosting status
firebase hosting:sites:list
```

## 📞 **Next Steps**

1. **Start with Firebase Console** (recommended): https://console.firebase.google.com/project/stardental-mbale/hosting
2. **Add the custom domain** `stardentalclinic-mbale.com`
3. **Configure DNS records** in your domain provider
4. **Wait for propagation** (1-2 days)
5. **Verify SSL certificate** activation

---

**🎉 Once complete, your dental clinic will be live at: `https://stardentalclinic-mbale.com`**
