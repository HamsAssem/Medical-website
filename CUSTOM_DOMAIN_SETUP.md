# 🌐 Custom Domain Setup Guide for Vercel

## Overview
This guide will help you connect a custom domain (like `purehealth.com` or `www.purehealth.com`) to your Vercel deployment.

---

## 📋 Prerequisites

1. ✅ Your website is already deployed on Vercel
2. ✅ You have access to your domain registrar (where you bought your domain)
3. ✅ You have access to your Vercel dashboard

---

## 🚀 Step-by-Step Instructions

### **STEP 1: Add Domain in Vercel Dashboard**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project (`hamosa-medical2` or your project name)
3. Go to **Settings** tab
4. Click on **Domains** in the left sidebar
5. Enter your domain name (e.g., `purehealth.com` or `www.purehealth.com`)
6. Click **Add**

---

### **STEP 2: Configure DNS Records**

Vercel will show you the DNS records you need to add. You have two options:

#### **Option A: Using A Record (Recommended for root domain)**
If you want to use `purehealth.com` (without www):

**Add these DNS records at your domain registrar:**

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| A | @ | `76.223.126.88` |

#### **Option B: Using CNAME (Recommended for www subdomain)**
If you want to use `www.purehealth.com`:

**Add this DNS record at your domain registrar:**

| Type | Name | Value |
|------|------|-------|
| CNAME | www | `cname.vercel-dns.com` |

#### **Option C: Using Both (Recommended)**
To support both `purehealth.com` AND `www.purehealth.com`:

**Add these DNS records:**

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| A | @ | `76.223.126.88` |
| CNAME | www | `cname.vercel-dns.com` |

---

### **STEP 3: Add DNS Records at Your Domain Registrar**

The steps vary by registrar. Here are common ones:

#### **For GoDaddy:**
1. Log in to GoDaddy
2. Go to **My Products** → **DNS** (or **Manage DNS**)
3. Scroll to **Records** section
4. Click **Add** to add new records
5. Enter the Type, Name, and Value from Vercel
6. Click **Save**

#### **For Namecheap:**
1. Log in to Namecheap
2. Go to **Domain List** → Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Click **Add New Record**
5. Enter the Type, Host, and Value from Vercel
6. Click the checkmark to save

#### **For Google Domains:**
1. Log in to Google Domains
2. Click on your domain
3. Go to **DNS** section
4. Scroll to **Custom resource records**
5. Click **Add** and enter the records from Vercel
6. Click **Save**

#### **For Cloudflare:**
1. Log in to Cloudflare
2. Select your domain
3. Go to **DNS** → **Records**
4. Click **Add record**
5. Enter the Type, Name, and Content from Vercel
6. Click **Save**

---

### **STEP 4: Wait for DNS Propagation**

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** for most domains
- Vercel will automatically detect when DNS is configured correctly

---

### **STEP 5: Verify Domain in Vercel**

1. Go back to Vercel Dashboard → Your Project → Settings → Domains
2. You'll see the status of your domain:
   - 🟡 **Pending** - DNS is still propagating
   - 🟢 **Valid** - Domain is connected and working!
   - 🔴 **Invalid** - Check your DNS records

---

## ✅ Verification Checklist

Once your domain shows as **Valid** in Vercel:

- [ ] Visit `https://yourdomain.com` - should show your website
- [ ] Visit `https://www.yourdomain.com` (if configured) - should show your website
- [ ] Check that HTTPS is working (lock icon in browser)
- [ ] Test all pages work correctly

---

## 🔒 SSL Certificate (Automatic)

Vercel automatically provides **free SSL certificates** for all domains. Once your domain is connected, HTTPS will be enabled automatically (may take a few minutes).

---

## 🔄 Redirecting www to non-www (or vice versa)

If you want to redirect `www.purehealth.com` → `purehealth.com` (or the reverse):

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Click on the domain you want to redirect
3. Enable **Redirect** option
4. Enter the target domain

---

## 🐛 Troubleshooting

### **Domain shows as "Invalid"**
- Double-check DNS records match exactly what Vercel shows
- Make sure you saved the DNS records at your registrar
- Wait a bit longer (DNS can be slow)
- Use a DNS checker tool: https://dnschecker.org

### **Website not loading**
- Make sure DNS has propagated (check with DNS checker)
- Clear your browser cache
- Try accessing in incognito/private mode
- Check Vercel deployment status

### **HTTPS not working**
- Wait 5-10 minutes after domain is validated
- Vercel automatically provisions SSL certificates
- If still not working after 30 minutes, contact Vercel support

### **Can't find DNS settings**
- Look for "DNS Management", "DNS Settings", "Name Servers", or "Advanced DNS"
- Contact your domain registrar's support if you can't find it

---

## 📞 Need Help?

- **Vercel Support**: https://vercel.com/support
- **Vercel Docs**: https://vercel.com/docs/concepts/projects/domains
- **DNS Checker**: https://dnschecker.org (to verify DNS propagation)

---

## 🎉 Success!

Once your domain is connected and showing as **Valid** in Vercel, your website will be live at your custom domain with automatic HTTPS! 🚀

