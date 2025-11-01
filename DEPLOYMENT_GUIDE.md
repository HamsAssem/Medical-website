# 🚀 Vercel Deployment Guide for Pure Health Website

## Method 1: Deploy via Vercel Website (Recommended - Easiest)

### Step 1: Push to GitHub
1. Create a GitHub account (if you don't have one) at https://github.com
2. Create a new repository on GitHub
3. Open Git Bash or terminal in your project folder
4. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Pure Health website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Wait 2-3 minutes
8. Your site will be live! 🎉

---

## Method 2: Deploy via Vercel CLI (Command Line)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No**
- Project name? **pure-health** (or your choice)
- Directory? **./** (press Enter)
- Override settings? **No**

### Step 4: Production Deploy
After the first deploy, deploy to production:
```bash
vercel --prod
```

---

## ✅ Your Website Will Be Live At:
`https://your-project-name.vercel.app`

---

## 📝 Important Notes:

1. **Environment Variables**: If you add any API keys later, add them in Vercel Dashboard → Settings → Environment Variables

2. **Custom Domain**: You can add a custom domain in Vercel Dashboard → Settings → Domains

3. **Automatic Deployments**: Every time you push to GitHub, Vercel will automatically deploy updates!

4. **Build Settings**: Already configured in `vercel.json` - no changes needed

---

## 🔧 Troubleshooting:

**Build fails?**
- Check that all dependencies are in `package.json`
- Make sure `npm run build` works locally first

**Images not showing?**
- Make sure images are in `public/images/` folder
- Check file paths in `constants.ts`

**404 errors on routes?**
- The `vercel.json` already has the SPA rewrite rule configured

