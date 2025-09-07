# ☁️ Cloudflare DNS Setup for ProjectSoch.eu

## ✅ Issue Identified:
Your domain **projectsoch.eu** uses **Cloudflare nameservers**:
- `roxy.ns.cloudflare.com`
- `harlan.ns.cloudflare.com`

This is why you can't manage DNS in GoDaddy - you need to manage it in **Cloudflare**!

---

## 🚀 Cloudflare DNS Configuration

### Step 1: Login to Cloudflare
1. **Go to**: https://cloudflare.com
2. **Click "Log in"** (top right)
3. **Enter your credentials** (the account that manages projectsoch.eu)

### Step 2: Select Your Domain
1. **Find "projectsoch.eu"** in your dashboard
2. **Click on the domain** to enter its management panel

### Step 3: Update DNS Records
1. **Click "DNS"** in the left sidebar (or "DNS Records" tab)
2. **Delete existing A records** that point to your current hosting
3. **Add GitHub Pages A records**

#### Add These 4 A Records:
**Record 1:**
- **Type**: A
- **Name**: @
- **IPv4 address**: `185.199.108.153`
- **Proxy status**: 🔴 DNS only (click the cloud to turn it gray)

**Record 2:**
- **Type**: A  
- **Name**: @
- **IPv4 address**: `185.199.109.153`
- **Proxy status**: 🔴 DNS only

**Record 3:**
- **Type**: A
- **Name**: @
- **IPv4 address**: `185.199.110.153`  
- **Proxy status**: 🔴 DNS only

**Record 4:**
- **Type**: A
- **Name**: @
- **IPv4 address**: `185.199.111.153`
- **Proxy status**: 🔴 DNS only

#### Update/Add CNAME Record:
- **Type**: CNAME
- **Name**: www
- **Target**: `Maria715.github.io`
- **Proxy status**: 🔴 DNS only

### Step 4: Important Cloudflare Settings
**⚠️ CRITICAL**: Make sure **Proxy status is "DNS only"** (gray cloud, not orange cloud) for all GitHub Pages records. Orange cloud will break GitHub Pages.

---

## 📋 Final DNS Records Should Look Like:

```
Type    Name    Content               Proxy Status
A       @       185.199.108.153      DNS only (gray)
A       @       185.199.109.153      DNS only (gray)
A       @       185.199.110.153      DNS only (gray)  
A       @       185.199.111.153      DNS only (gray)
CNAME   www     Maria715.github.io   DNS only (gray)
```

---

## ⚠️ Common Cloudflare Mistakes:

### 1. Orange Cloud (Proxy) Enabled
- **Problem**: GitHub Pages won't work with Cloudflare proxy
- **Solution**: Click orange cloud to make it gray (DNS only)

### 2. Wrong GitHub Username
- **Use**: `Maria715.github.io` (your actual GitHub username)
- **Not**: `makht.github.io`

### 3. DNSSEC Form
- **Skip**: The DNSSEC form you saw (mark, protocol, etc.)
- **Not needed**: For basic GitHub Pages setup

---

## ⏰ Timeline:

### Cloudflare Updates:
- **Changes apply**: Immediately to 5 minutes
- **Global propagation**: 2-6 hours
- **GitHub verification**: 10-30 minutes after DNS propagates

### Check Progress:
1. **Cloudflare**: Should show your new A records immediately
2. **GitHub Pages**: https://github.com/Maria715/projectsoch/settings/pages
3. **Domain check**: https://whatsmydns.net (enter projectsoch.eu)

---

## 🚨 IMPORTANT: Repository Issue

I notice your GitHub URL is **Maria715/projectsoch** but we've been working on a project called **project-soch-website**. 

### You need to either:

#### Option A: Push to Maria715/projectsoch (Recommended)
1. **Add remote** to your current project:
   ```bash
   git remote add origin https://github.com/Maria715/projectsoch.git
   git branch -M main
   git push -u origin main
   ```

#### Option B: Update GitHub Pages URL
If you want to use the **makht** account, update the repository name to match.

---

## 🎯 Summary - What You Need to Do:

### 1. **Cloudflare DNS** (Primary Task):
- Login to cloudflare.com
- Find projectsoch.eu
- Add the 4 GitHub A records (DNS only mode)
- Add CNAME for www → Maria715.github.io

### 2. **GitHub Repository** (Secondary):
- Make sure your code is in the Maria715/projectsoch repository
- Set custom domain to projectsoch.eu in GitHub Pages settings

### 3. **Skip DNSSEC**:
- Cancel that form with "mark", "protocol", etc.
- Not needed for basic setup

**Once you update Cloudflare DNS, projectsoch.eu will show your beautiful Project Soch website! 🌟**

Need help with any of these steps? Let me know! 🚀
