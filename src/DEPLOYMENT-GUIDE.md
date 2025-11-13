# Kerala Travel Tracker - Deployment Guide

## 📋 Prerequisites
- Git installed on your computer
- GitHub account
- Vercel account (free tier is fine)
- Your Supabase credentials ready

---

## 🚀 Step 1: Push to GitHub

### 1.1 Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Kerala Travel Tracker"
```

### 1.2 Create GitHub Repository
1. Go to https://github.com
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `kerala-travel-tracker`
5. Make it **Public** or **Private** (your choice)
6. **DO NOT** initialize with README (you already have one)
7. Click "Create repository"

### 1.3 Connect Local Repository to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/kerala-travel-tracker.git
git branch -M main
git push -u origin main
```

---

## 🌐 Step 2: Deploy to Vercel

### 2.1 Sign Up/Login to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" (or "Login" if you have an account)
3. Choose "Continue with GitHub" for easiest integration

### 2.2 Import Your Repository
1. Click "Add New..." → "Project"
2. Click "Import Git Repository"
3. Find and select your `kerala-travel-tracker` repository
4. Click "Import"

### 2.3 Configure Build Settings
Vercel should auto-detect these settings, but verify:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 2.4 Add Environment Variables
Click on "Environment Variables" and add these:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**To get these values:**
1. Go to your Supabase project dashboard
2. Click on "Settings" → "API"
3. Copy "Project URL" → paste as `VITE_SUPABASE_URL`
4. Copy "anon public" key → paste as `VITE_SUPABASE_ANON_KEY`

### 2.5 Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Once done, you'll see "Congratulations!"
4. Click "Visit" to see your live app

---

## 🔧 Step 3: Deploy Supabase Edge Functions

### 3.1 Install Supabase CLI
```bash
# On macOS/Linux
brew install supabase/tap/supabase

# On Windows (use npm)
npm install -g supabase
```

### 3.2 Login to Supabase
```bash
supabase login
```

### 3.3 Link Your Project
```bash
# Replace YOUR_PROJECT_REF with your project reference
# Find it in Supabase Dashboard → Settings → General → Reference ID
supabase link --project-ref YOUR_PROJECT_REF
```

### 3.4 Deploy Edge Functions
```bash
supabase functions deploy server
```

---

## ✅ Step 4: Verify Deployment

### 4.1 Test Your App
1. Visit your Vercel URL (e.g., `kerala-travel-tracker.vercel.app`)
2. Test the landing page loads
3. Try signing up with test credentials
4. Try logging in
5. Add a test trip
6. Check insights page

### 4.2 Common Issues & Fixes

**Issue: "Failed to fetch" errors**
- Check that environment variables are set correctly on Vercel
- Verify Supabase edge function is deployed
- Check Supabase function logs: Dashboard → Edge Functions → Logs

**Issue: OAuth not working (Google/Facebook)**
- Go to Supabase Dashboard → Authentication → Providers
- Add your Vercel domain to "Site URL" and "Redirect URLs"
- Add: `https://your-app.vercel.app/auth/callback`

**Issue: Build fails on Vercel**
- Check build logs on Vercel
- Make sure all dependencies are in package.json
- Try running `npm run build` locally first

---

## 🔄 Step 5: Future Updates

### To deploy updates:
```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push

# Vercel will automatically deploy on push!
```

---

## 📝 Important URLs to Save

1. **GitHub Repo**: `https://github.com/YOUR_USERNAME/kerala-travel-tracker`
2. **Vercel Dashboard**: `https://vercel.com/dashboard`
3. **Live App**: `https://your-app.vercel.app`
4. **Supabase Dashboard**: `https://app.supabase.com`

---

## 🛡️ Security Checklist

- ✅ Never commit `.env` files to GitHub
- ✅ Use environment variables for all secrets
- ✅ Enable Row Level Security (RLS) in Supabase
- ✅ Set up proper CORS in Supabase edge functions
- ✅ Use HTTPS only (Vercel does this automatically)

---

## 🆘 Getting Help

If you encounter issues:
1. Check Vercel deployment logs
2. Check Supabase function logs
3. Check browser console for errors
4. Verify all environment variables are set

---

## 🎉 Success!

Your Kerala Travel Tracker is now live and accessible to users worldwide!

**Next Steps:**
- Share your app URL with users
- Monitor usage in Supabase dashboard
- Set up analytics (optional)
- Configure custom domain (optional)
