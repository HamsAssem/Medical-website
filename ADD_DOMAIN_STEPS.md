# 🚀 Quick Steps to Add Domain to Vercel

## Step 1: Go to Your Project Settings
1. Open: https://vercel.com/dashboard
2. Click on your project: **hamosa-medical2**
3. Click **Settings** tab (top navigation)
4. Click **Domains** (left sidebar)

## Step 2: Add Your Domain
1. In the "Domains" section, you'll see an input field
2. Enter your domain name (e.g., `purehealth.com` or `www.purehealth.com`)
3. Click **Add** button
4. Vercel will show you the DNS records you need to add

## Step 3: Configure DNS (at your domain registrar)
Vercel will display something like this:

**For root domain (purehealth.com):**
- Type: **A**
- Name: **@**
- Value: **76.76.21.21** (and another A record with **76.223.126.88**)

**For www subdomain (www.purehealth.com):**
- Type: **CNAME**
- Name: **www**
- Value: **cname.vercel-dns.com**

## Step 4: Add DNS Records
Go to your domain registrar (where you bought the domain) and add these DNS records.

**Common Registrars:**
- **GoDaddy**: My Products → DNS → Add Record
- **Namecheap**: Domain List → Manage → Advanced DNS → Add New Record
- **Google Domains**: DNS → Custom resource records → Add
- **Cloudflare**: DNS → Records → Add record

## Step 5: Wait & Verify
- Wait 15-30 minutes for DNS to propagate
- Go back to Vercel → Settings → Domains
- Status will change from "Pending" to "Valid" ✅
- Your site will be live at your custom domain!

---

## ⚠️ Important Notes:

1. **You need to own a domain first** - If you don't have one, buy it from:
   - GoDaddy.com
   - Namecheap.com
   - Google Domains
   - Cloudflare

2. **I cannot access your Vercel account** - You need to do this yourself

3. **Free domains don't work** - You need a paid domain (usually $10-15/year)

---

## 🎯 Quick Checklist:
- [ ] Go to Vercel Dashboard → Your Project → Settings → Domains
- [ ] Enter your domain name
- [ ] Copy the DNS records Vercel shows you
- [ ] Add those DNS records at your domain registrar
- [ ] Wait 15-30 minutes
- [ ] Check Vercel - domain should show as "Valid"
- [ ] Visit your custom domain - it should work! 🎉

