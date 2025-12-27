# 🔧 Fix "Invalid Configuration" - Update Nameservers

Your domain `pure-health.com` is added to Vercel, but you need to update the nameservers at your domain registrar.

## ✅ What You Need to Do:

Update your domain's nameservers to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

---

## 📋 Step-by-Step Instructions by Registrar:

### **GoDaddy:**
1. Log in to GoDaddy: https://www.godaddy.com
2. Go to **My Products** → Click **DNS** next to `pure-health.com`
3. Scroll down to **Nameservers** section
4. Click **Change** button
5. Select **Custom** (not "Default")
6. Enter:
   - Nameserver 1: `ns1.vercel-dns.com`
   - Nameserver 2: `ns2.vercel-dns.com`
7. Click **Save**
8. Wait 15-30 minutes

### **Namecheap:**
1. Log in to Namecheap: https://www.namecheap.com
2. Go to **Domain List** → Click **Manage** next to `pure-health.com`
3. Go to **Advanced DNS** tab
4. Scroll to **Nameservers** section
5. Select **Custom DNS**
6. Enter:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
7. Click the checkmark to save
8. Wait 15-30 minutes

### **Google Domains:**
1. Log in to Google Domains: https://domains.google.com
2. Click on `pure-health.com`
3. Go to **DNS** section (left sidebar)
4. Scroll to **Name servers** section
5. Click **Use custom name servers**
6. Enter:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
7. Click **Save**
8. Wait 15-30 minutes

### **Cloudflare:**
1. Log in to Cloudflare: https://dash.cloudflare.com
2. Select your domain `pure-health.com`
3. Go to **DNS** → **Records**
4. Look for the **Nameservers** section (usually at the top)
5. Click **Change** next to nameservers
6. Enter:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
7. Click **Save**
8. Wait 15-30 minutes

### **Other Registrars:**
Look for:
- **Nameservers** or **Name Servers** section
- **DNS Management** or **DNS Settings**
- Change from "Default" to "Custom"
- Enter the two Vercel nameservers

---

## ⏱️ After Updating Nameservers:

1. **Wait 15-30 minutes** for DNS to propagate
2. Go back to Vercel Dashboard → Your Project → Settings → Domains
3. Click **Refresh** button on the domain page
4. The status should change from "Invalid Configuration" to "Valid" ✅
5. Your website will be live at `https://pure-health.com`!

---

## 🔍 How to Verify:

After 15-30 minutes, check:
- Vercel Dashboard should show domain as "Valid"
- Visit `https://pure-health.com` - should show your website
- HTTPS will be automatically enabled

---

## ⚠️ Important Notes:

- **Don't delete existing DNS records** - Just change the nameservers
- **It may take up to 48 hours** (but usually 15-30 minutes)
- **Both nameservers must be added** - `ns1.vercel-dns.com` AND `ns2.vercel-dns.com`
- **Vercel will automatically manage DNS** once nameservers are updated

---

## 🐛 Still Not Working?

1. Double-check you entered both nameservers correctly
2. Make sure you saved the changes at your registrar
3. Wait a bit longer (up to 48 hours in rare cases)
4. Check Vercel dashboard and click "Refresh"
5. Clear your browser cache and try again

---

## ✅ Success!

Once the nameservers are updated and Vercel shows "Valid", your website will be live at:
- `https://pure-health.com`
- `https://www.pure-health.com` (if configured)

🎉 **Your domain is now connected!**

