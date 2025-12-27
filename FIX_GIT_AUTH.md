# 🔧 Fix GitHub Authentication Issue

## Problem:
You're authenticated as `Hebahesham123` but trying to push to `HamsAssem`'s repository.

## Solutions:

### Option 1: Remove and Update Remote (If you're HamsAssem)

```bash
# Remove existing remote
git remote remove origin

# Add the correct remote
git remote add origin https://github.com/HamsAssem/Medical-website.git

# Make sure you're logged in as HamsAssem on GitHub
# Then push:
git push -u origin main
```

### Option 2: Use Personal Access Token (Recommended)

1. **Go to GitHub Settings:**
   - https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Give it a name like "Vercel Deployment"
   - Select scope: **repo** (all checkboxes under repo)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

2. **Update your remote URL with token:**
   ```bash
   git remote remove origin
   git remote add origin https://YOUR_TOKEN@github.com/HamsAssem/Medical-website.git
   git push -u origin main
   ```

   **OR use your username:**
   ```bash
   git remote remove origin
   git remote add origin https://HamsAssem:YOUR_TOKEN@github.com/HamsAssem/Medical-website.git
   git push -u origin main
   ```

### Option 3: Create Your Own Repository

1. Go to: https://github.com/new
2. Create a repository under your account (`Hebahesham123`)
3. Then:
   ```bash
   git remote remove origin
   git remote add origin https://github.com/Hebahesham123/YOUR_REPO_NAME.git
   git push -u origin main
   ```

---

## Quick Fix Commands:

```bash
# Remove existing remote
git remote remove origin

# Add correct remote (choose one):
# Option A: If you're HamsAssem
git remote add origin https://github.com/HamsAssem/Medical-website.git

# Option B: If you need to use token
git remote add origin https://HamsAssem:TOKEN@github.com/HamsAssem/Medical-website.git

# Then push
git push -u origin main
```

