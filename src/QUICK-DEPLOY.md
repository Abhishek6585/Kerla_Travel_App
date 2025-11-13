# 🚀 Quick Deploy Guide - Kerala Travel Tracker

## Step-by-Step Commands

### 1️⃣ Push to GitHub (First Time)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Kerala Travel Tracker - Initial commit"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/kerala-travel-tracker.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy to Vercel

**Option A: Using Vercel Website (Easiest)**
1. Go to https://vercel.com
2. Click "Sign Up" → Continue with GitHub
3. Click "Add New..." → "Project"
4. Select `kerala-travel-tracker`
5. Add environment variables:
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
6. Click "Deploy"
7. Wait 2-3 minutes ✅

**Option B: Using Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts, then production deploy
vercel --prod
```

### 3️⃣ Deploy Supabase Functions

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link project (get ref from Supabase dashboard)
supabase link --project-ref YOUR_PROJECT_REF

# Deploy functions
supabase functions deploy server
```

---

## 📝 Where to Get Credentials

### Supabase URL & Keys
1. Go to https://app.supabase.com
2. Select your project
3. Settings → API
4. Copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** → `VITE_SUPABASE_ANON_KEY`

### Supabase Project Reference
1. Settings → General
2. Copy **Reference ID**

---

## 🔄 Update Deployed App

```bash
# Make changes to your code
# Then:

git add .
git commit -m "Your update message"
git push

# Vercel auto-deploys on push!
```

---

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Created Vercel account
- [ ] Deployed to Vercel
- [ ] Added environment variables on Vercel
- [ ] Deployed Supabase edge functions
- [ ] Tested live app
- [ ] Configured OAuth redirect URLs (if using Google/Facebook login)

---

## 🆘 Quick Fixes

**Build fails?**
```bash
# Test locally first
npm install
npm run build
```

**Environment variables not working?**
- Make sure they start with `VITE_`
- Redeploy after adding variables on Vercel

**Can't push to GitHub?**
```bash
# Check remote
git remote -v

# If wrong, remove and re-add
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/kerala-travel-tracker.git
```

---

## 📱 Your Live URLs

After deployment, save these:

- **Live App**: `https://your-project.vercel.app`
- **GitHub**: `https://github.com/YOUR_USERNAME/kerala-travel-tracker`
- **Vercel Dashboard**: `https://vercel.com/dashboard`

---

## 🎉 Done!

Your Kerala Travel Tracker is now live!
