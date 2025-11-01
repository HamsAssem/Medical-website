# 📦 Git Commands to Push to GitHub

## Step 1: Check if Git is Initialized
```bash
git status
```

## Step 2: Initialize Git (if not already initialized)
```bash
git init
```

## Step 3: Add All Files
```bash
git add .
```

## Step 4: Create First Commit
```bash
git commit -m "Initial commit - Pure Health website"
```

## Step 5: Set Main Branch (if needed)
```bash
git branch -M main
```

## Step 6: Add GitHub Repository
**First, create a new repository on GitHub:**
1. Go to https://github.com/new
2. Create a new repository (name it `pure-health` or any name)
3. **DO NOT** initialize with README, .gitignore, or license
4. Copy the repository URL

**Then run this command (replace YOUR_USERNAME and REPO_NAME):**
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

**Example:**
```bash
git remote add origin https://github.com/yourusername/pure-health.git
```

## Step 7: Push to GitHub
```bash
git push -u origin main
```

---

## 📝 Complete Command Sequence (Copy & Paste):

```bash
# Navigate to project folder
cd C:\Users\DELL\Desktop\hamosa-medical2

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Pure Health website"

# Set main branch
git branch -M main

# Add GitHub remote (REPLACE with your actual GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

---

## ✅ After Pushing to GitHub:

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Your site will be live in 2-3 minutes! 🎉

---

## 🔧 Troubleshooting:

**"Not a git repository" error?**
→ Run: `git init` first

**"Authentication failed" error?**
→ You may need to set up GitHub authentication:
  - Use GitHub Desktop, or
  - Set up a Personal Access Token

**"Remote origin already exists" error?**
→ Remove and re-add:
  ```bash
  git remote remove origin
  git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
  ```

