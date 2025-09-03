# 🔄 Switch ProjectSoch.eu to GoDaddy DNS Management

## 🚨 Current Status:
Your domain **projectsoch.eu** is still using **Cloudflare nameservers**, which is why you can't manage DNS in GoDaddy.

**Current nameservers:**
- `roxy.ns.cloudflare.com`
- `harlan.ns.cloudflare.com`

---

## 🔧 Step 1: Switch to GoDaddy Nameservers

### In GoDaddy Domain Management:
1. **Login to GoDaddy**: https://godaddy.com
2. **Go to**: "My Products" → Find "projectsoch.eu"
3. **Click**: Domain name (not DNS button)
4. **Find**: "Nameservers" section
5. **Click**: "Change" or "Manage"

### Choose GoDaddy Nameservers:
**Select**: "Use GoDaddy nameservers" or "Default"

**GoDaddy nameservers typically are:**
- `ns01.domaincontrol.com`
- `ns02.domaincontrol.com`

### Save Changes:
- **Click**: "Save" or "Update"
- **Wait**: 2-24 hours for nameserver propagation

---

## 🔧 Step 2: After Nameserver Change (Wait 2-24 Hours)

### Once nameservers propagate, add these DNS records in GoDaddy:

#### GitHub Pages A Records:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 1 hour

Type: A  
Name: @
Value: 185.199.109.153
TTL: 1 hour

Type: A
Name: @
Value: 185.199.110.153
TTL: 1 hour

Type: A
Name: @  
Value: 185.199.111.153
TTL: 1 hour
```

#### CNAME Record:
```
Type: CNAME
Name: www
Value: Maria715.github.io
TTL: 1 hour
```

---

## ⏰ Timeline:

### Phase 1: Nameserver Change (2-24 hours)
- **GoDaddy nameserver update**: 2-6 hours typically
- **Global propagation**: Up to 24 hours
- **You can then manage DNS in GoDaddy**

### Phase 2: DNS Records (1-6 hours)
- **Add GitHub Pages records in GoDaddy**
- **DNS propagation**: 1-6 hours
- **Website goes live**: After DNS propagates

### Total Time: 3-30 hours (usually 4-8 hours)

---

## 🔍 How to Check Progress:

### Check Nameservers:
```bash
nslookup -type=ns projectsoch.eu
```
**Should eventually show**: `ns01.domaincontrol.com`, `ns02.domaincontrol.com`

### Check DNS Records:
```bash
nslookup projectsoch.eu
```
**Should eventually show**: 185.199.x.x IPs

---

## 🚨 Alternative: Keep Cloudflare (Faster)

### If you want your website live sooner:
**Option**: Keep Cloudflare nameservers and update DNS there instead

#### Cloudflare DNS Update (5 minutes):
1. **Login to Cloudflare**
2. **projectsoch.eu** → **DNS**
3. **Delete old A records**
4. **Add GitHub A records** (DNS only mode)
5. **Website live in 30 minutes**

#### GoDaddy Nameserver Switch (24 hours):
1. **Switch to GoDaddy nameservers**
2. **Wait up to 24 hours**
3. **Then add DNS records in GoDaddy**
4. **Website live after propagation**

---

## 🎯 My Recommendation:

### For Fastest Results:
**Keep Cloudflare nameservers** and update DNS there:
- ✅ **Website live**: In 30 minutes
- ✅ **Cloudflare benefits**: Fast CDN, DDoS protection
- ✅ **Free SSL**: Automatic HTTPS

### For GoDaddy Management:
**Switch nameservers** to GoDaddy:
- ⏰ **Timeline**: 2-24 hours for nameserver change
- ⏰ **Then**: 1-6 hours for DNS records
- ✅ **All in GoDaddy**: Easier management in one place

---

## 🆘 What Do You Prefer?

**Tell me:**
1. **Fast (30 min)**: Update DNS in Cloudflare (keep current nameservers)
2. **GoDaddy (24h)**: Switch nameservers to GoDaddy, then update DNS

**Either way, your Project Soch website will be live at projectsoch.eu! 🌟**

Which option do you prefer? 🚀
