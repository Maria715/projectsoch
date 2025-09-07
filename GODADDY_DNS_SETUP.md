# 🌐 GoDaddy DNS Setup for ProjectSoch.eu

## Step-by-Step Instructions for GoDaddy

### Step 1: Login to GoDaddy
1. Go to **godaddy.com**
2. Click **"Sign In"** (top right)
3. Enter your GoDaddy account credentials

### Step 2: Access DNS Management
1. After logging in, click **"My Products"**
2. Find **"projectsoch.eu"** in your domains list
3. Click **"DNS"** button next to your domain
   - OR click the domain name, then **"Manage DNS"**

### Step 3: Update DNS Records

#### A) Delete Current A Records
Look for existing **A records** that point to your current hosting:
- **Type**: A
- **Name**: @ (or blank)
- **Value**: Some IP address (not GitHub's)

**Click the pencil/edit icon** → **Delete** these records

#### B) Add GitHub Pages A Records
Click **"Add"** and create these 4 A records:

**Record 1:**
- **Type**: A
- **Name**: @ 
- **Value**: `185.199.108.153`
- **TTL**: 1 hour (or default)

**Record 2:**
- **Type**: A
- **Name**: @
- **Value**: `185.199.109.153`
- **TTL**: 1 hour

**Record 3:**
- **Type**: A
- **Name**: @
- **Value**: `185.199.110.153`
- **TTL**: 1 hour

**Record 4:**
- **Type**: A
- **Name**: @
- **Value**: `185.199.111.153`
- **TTL**: 1 hour

#### C) Update/Add CNAME Record
Look for existing **CNAME record** for "www":
- If exists: **Edit** it
- If not exists: **Add** new CNAME

**CNAME Record:**
- **Type**: CNAME
- **Name**: www
- **Value**: `makht.github.io`
- **TTL**: 1 hour

### Step 4: Save Changes
1. Click **"Save"** after adding each record
2. Review all records are correct
3. Click **"Save All Changes"** if there's a final save button

---

## 📋 Final DNS Records Should Look Like:

```
Type    Name    Value                   TTL
A       @       185.199.108.153        1 hour
A       @       185.199.109.153        1 hour  
A       @       185.199.110.153        1 hour
A       @       185.199.111.153        1 hour
CNAME   www     makht.github.io        1 hour
```

---

## ⏰ Timeline & Verification

### DNS Propagation:
- **GoDaddy updates**: Usually within 1-2 hours
- **Global propagation**: Can take up to 48 hours
- **Most users see changes**: Within 4-6 hours

### Check Progress:
1. **GitHub Pages Status**: 
   - Go to: https://github.com/makht/project-soch-website/settings/pages
   - Look for green checkmark next to "projectsoch.eu"
   - Any errors will show here

2. **DNS Propagation Check**:
   - Visit: https://whatsmydns.net
   - Enter: `projectsoch.eu`
   - Should show GitHub IPs: 185.199.108.153, etc.

3. **Test Your Website**:
   - Wait 2-4 hours after DNS changes
   - Visit: https://projectsoch.eu
   - Should show your Project Soch website (not "Coming Soon")

---

## 🔍 Common GoDaddy Issues & Solutions:

### Issue 1: Can't Find DNS Settings
- Try: **"My Products"** → **"All Products and Services"** → Find your domain
- Alternative: Search "DNS" in GoDaddy help/search

### Issue 2: A Records Won't Save
- Make sure **Name field** is exactly: `@` (not blank, not "projectsoch.eu")
- Try refreshing the page and re-entering

### Issue 3: CNAME Record Issues
- **Name**: Must be exactly `www` (not "www.projectsoch.eu")
- **Value**: Must be exactly `makht.github.io` (no https://)

### Issue 4: Old Records Still There
- **Delete all old A records** that point to previous hosting
- **Keep only** the 4 GitHub Pages A records

---

## 🚀 Expected Results:

### After DNS Propagation (2-6 hours):
- ✅ **https://projectsoch.eu** shows your Project Soch website
- ✅ **https://www.projectsoch.eu** redirects to main site
- ✅ **HTTPS certificate** automatically enabled by GitHub
- ✅ **Fast loading** with global CDN

### Your Website Will Show:
- ✅ Project Soch logo and branding
- ✅ Team members (Arslan, Maria, Saqib)
- ✅ WhatsApp donation integration
- ✅ Contact forms with modern design
- ✅ Partnership opportunities for NGOs
- ✅ Social media links (Facebook & Instagram)
- ✅ Mobile responsive design

---

## 🆘 Need Help?

**If you get stuck:**
1. **Screenshot** your GoDaddy DNS settings page
2. **Tell me** any error messages you see
3. **Let me know** if records won't save or update

**I can help troubleshoot** any GoDaddy-specific issues!

---

## ✅ Quick Checklist:

- [ ] Logged into GoDaddy account
- [ ] Found projectsoch.eu in "My Products"
- [ ] Clicked "DNS" or "Manage DNS"
- [ ] Deleted old A records (if any)
- [ ] Added 4 new GitHub Pages A records
- [ ] Updated/added CNAME record for www
- [ ] Saved all changes
- [ ] Waiting for DNS propagation (2-6 hours)

**Once complete, projectsoch.eu will showcase your Project Soch mission to the world! 🌍✨**
