# 🚀 Complete Deployment Walkthrough - Web + APK

Follow this guide to deploy your Kerala Travel Tracker to both **Web (Vercel)** and **Android APK**.

---

## 📅 Timeline

- **Part 1: Web Deployment** → 10-15 minutes
- **Part 2: APK Build** → 30-45 minutes (first time)
- **Total Time** → ~1 hour

---

# PART 1: WEB DEPLOYMENT (GITHUB + VERCEL) 🌐

## Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

Open terminal/command prompt in your project folder:

```bash
# Check if git is initialized
git status

# If you see "not a git repository", initialize it:
git init
```

### 1.2 Add All Files

```bash
# Add all files to git
git add .

# Commit
git commit -m "Kerala Travel Tracker - Ready for deployment"
```

**✅ Checkpoint**: Files are now ready to push to GitHub

---

## Step 2: Create GitHub Repository

### 2.1 Go to GitHub
- Open: https://github.com
- Click the **"+"** icon (top right)
- Select **"New repository"**

### 2.2 Configure Repository
- **Repository name**: `kerala-travel-tracker`
- **Description**: "Kerala Travel Tracker - Track trips and carbon footprint"
- **Visibility**: Choose **Public** or **Private** (your choice)
- **DO NOT** check "Initialize with README" (you already have files)
- Click **"Create repository"**

### 2.3 Push Your Code

GitHub will show you commands. Copy and run them:

```bash
# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/kerala-travel-tracker.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**✅ Checkpoint**: Your code is now on GitHub! Refresh the GitHub page to see your files.

---

## Step 3: Get Supabase Credentials

You'll need these for Vercel environment variables.

### 3.1 Open Supabase Dashboard
- Go to: https://app.supabase.com
- Select your project
- Click **"Settings"** (bottom left)
- Click **"API"**

### 3.2 Copy These Values:
- **Project URL** → Save this (starts with `https://...supabase.co`)
- **anon public key** → Save this (long string starting with `eyJ...`)

**Keep these handy** - you'll paste them into Vercel in a moment.

**✅ Checkpoint**: You have your Supabase credentials ready

---

## Step 4: Deploy to Vercel

### 4.1 Sign Up for Vercel
- Go to: https://vercel.com
- Click **"Sign Up"**
- Choose **"Continue with GitHub"** (easiest option)
- Authorize Vercel to access your GitHub

### 4.2 Import Your Repository
1. Click **"Add New..."** button (top right)
2. Select **"Project"**
3. You'll see your GitHub repositories
4. Find **`kerala-travel-tracker`**
5. Click **"Import"**

### 4.3 Configure Project
Vercel will auto-detect settings. Verify these:

- **Framework Preset**: Vite ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

### 4.4 Add Environment Variables

Click **"Environment Variables"** section and add:

**Variable 1:**
- **Name**: `VITE_SUPABASE_URL`
- **Value**: [Paste your Supabase Project URL]
- Click **"Add"**

**Variable 2:**
- **Name**: `VITE_SUPABASE_ANON_KEY`
- **Value**: [Paste your Supabase anon public key]
- Click **"Add"**

### 4.5 Deploy!

1. Click **"Deploy"** button
2. Wait 2-3 minutes while Vercel builds your app
3. You'll see build logs scrolling
4. When done, you'll see **"Congratulations! 🎉"**

### 4.6 Visit Your Live App

1. Click the **"Visit"** button or the screenshot
2. Your app is now live at: `https://kerala-travel-tracker.vercel.app` (or similar)
3. **Test it**: Try signing up, logging in, adding a trip

**✅ Checkpoint**: Your web app is LIVE! 🎉

### 4.7 Update Supabase Redirect URLs

Important for OAuth (Google/Facebook login):

1. Go back to Supabase Dashboard
2. **Authentication** → **URL Configuration**
3. Add your Vercel URL to:
   - **Site URL**: `https://your-app.vercel.app`
   - **Redirect URLs**: `https://your-app.vercel.app/**`
4. Click **"Save"**

---

## 🎉 PART 1 COMPLETE!

Your Kerala Travel Tracker is now live on the web!

**Your Live URL**: `https://your-project.vercel.app`
**Share this URL** with anyone - it works on all devices!

---

# PART 2: ANDROID APK BUILD 📱

Now let's build the Android APK for offline use and better performance.

---

## Step 5: Install Prerequisites (One-Time Setup)

### 5.1 Install Node.js
- **Download**: https://nodejs.org/
- Choose: **LTS version** (v18 or later)
- Run installer with default settings
- **Verify**: Open new terminal and run:
  ```bash
  node --version
  npm --version
  ```

### 5.2 Install Java JDK
- **Download**: https://adoptium.net/
- Choose: **JDK 11 or later**
- Run installer with default settings
- **Verify**: Open new terminal and run:
  ```bash
  java -version
  ```

### 5.3 Install Android Studio
- **Download**: https://developer.android.com/studio
- Run installer
- Choose: **Standard** installation
- Let it download Android SDK

**This takes 15-20 minutes** - good time for a coffee break! ☕

**✅ Checkpoint**: Node.js, Java, and Android Studio are installed

---

## Step 6: Configure Android SDK

### 6.1 Open Android Studio
- Launch Android Studio
- If you see "Welcome" screen, click **"More Actions"** → **"SDK Manager"**
- If you have a project open: **Tools** → **SDK Manager**

### 6.2 Install Required SDK Packages

In the **"SDK Platforms"** tab:
- ✅ Check **"Android 14.0 (API 34)"**
- Click **"Apply"** → **"OK"**

In the **"SDK Tools"** tab:
- ✅ Check **"Android SDK Build-Tools 34"**
- ✅ Check **"Android SDK Command-line Tools"**
- ✅ Check **"Android SDK Platform-Tools"**
- ✅ Check **"Android Emulator"**
- Click **"Apply"** → **"OK"**

Wait for downloads to complete.

### 6.3 Note Your SDK Location

At the top of SDK Manager, you'll see:
**Android SDK Location**: Copy this path (e.g., `C:\Users\YourName\AppData\Local\Android\Sdk`)

**✅ Checkpoint**: Android SDK is installed and configured

---

## Step 7: Set Environment Variables

### For Windows:

1. Press **Windows + R**
2. Type: `sysdm.cpl` and press Enter
3. Click **"Advanced"** tab
4. Click **"Environment Variables"**
5. Under **"System variables"**, click **"New"**
6. Add these two variables:

**Variable 1:**
- **Name**: `ANDROID_HOME`
- **Value**: `C:\Users\YourName\AppData\Local\Android\Sdk` (your SDK path)

**Variable 2:**
- **Name**: `ANDROID_SDK_ROOT`
- **Value**: `C:\Users\YourName\AppData\Local\Android\Sdk` (same path)

7. Find **"Path"** in System variables → **"Edit"**
8. Click **"New"** and add these three entries:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\tools`
   - `%ANDROID_HOME%\cmdline-tools\latest\bin`

9. Click **"OK"** on all windows
10. **IMPORTANT**: Close and reopen all terminals/command prompts

### For macOS/Linux:

1. Open Terminal
2. Edit your profile file:
   ```bash
   nano ~/.bash_profile
   # or if using zsh:
   nano ~/.zshrc
   ```

3. Add these lines:
   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
   ```

4. Save: **Ctrl+O**, **Enter**, **Ctrl+X**

5. Reload:
   ```bash
   source ~/.bash_profile
   # or
   source ~/.zshrc
   ```

### Verify Environment Variables:

**Windows:**
```bash
echo %ANDROID_HOME%
```

**macOS/Linux:**
```bash
echo $ANDROID_HOME
```

You should see your SDK path. If not, repeat the steps above.

**✅ Checkpoint**: Environment variables are set correctly

---

## Step 8: Accept Android SDK Licenses

This is **required** or the build will fail.

**Windows (Run Command Prompt as Administrator):**
```bash
cd %ANDROID_HOME%\cmdline-tools\latest\bin
sdkmanager --licenses
```

**macOS/Linux:**
```bash
sdkmanager --licenses
```

- Type **`y`** and press **Enter** for each license (there are about 5-6)
- Keep pressing **`y`** and **Enter** until it says "All SDK package licenses accepted"

**✅ Checkpoint**: All licenses accepted

---

## Step 9: Build the APK!

Now the fun part - building your APK!

### 9.1 Open Terminal in Project Folder

Navigate to your project:
```bash
cd path/to/kerala-travel-tracker
```

### 9.2 Run the Build Script

**For Windows:**
```bash
build-apk.bat
```

**For macOS/Linux:**
```bash
chmod +x build-apk.sh
./build-apk.sh
```

### 9.3 Wait for Build

The script will:
1. ✅ Install dependencies (1-2 min)
2. ✅ Build web app (1-2 min)
3. ✅ Add Android platform (first time: 2-3 min)
4. ✅ Sync assets (30 sec)
5. ✅ Build APK with Gradle (2-5 min)

**Total time**: 5-10 minutes (first time may be longer)

You'll see lots of output - this is normal! ✅

### 9.4 Success!

When done, you'll see:
```
🌴 Kerala Travel Tracker APK Build Complete! 🌴
✅ APK copied to: kerala-travel-tracker.apk
```

**✅ Checkpoint**: APK file created successfully! 🎉

---

## Step 10: Install APK on Your Android Phone

### 10.1 Transfer APK to Phone

**Method 1: USB Cable**
1. Connect your phone to computer via USB
2. Enable "File Transfer" mode on phone
3. Copy `kerala-travel-tracker.apk` to phone's **Downloads** folder

**Method 2: Google Drive/Dropbox**
1. Upload `kerala-travel-tracker.apk` to cloud
2. Download on phone

**Method 3: Email**
1. Email the APK to yourself
2. Download on phone

### 10.2 Install on Phone

1. On your phone, open **Files** app
2. Navigate to **Downloads**
3. Tap **kerala-travel-tracker.apk**
4. If prompted: **"Install unknown apps"**
   - Tap **"Settings"**
   - Enable **"Allow from this source"**
   - Go back and tap the APK again
5. Tap **"Install"**
6. Wait 10-20 seconds
7. Tap **"Open"**

### 10.3 Grant Permissions

When the app asks:
- ✅ **Location** → Allow (for GPS tracking)
- ✅ **Storage** → Allow (for data export)
- ✅ **Camera** → Allow (for trip photos)

**✅ Checkpoint**: App installed and running on your phone! 🎉

---

## 🎉 CONGRATULATIONS! 

You now have BOTH:

1. **✅ Web App**: `https://your-app.vercel.app`
   - Works on all devices
   - Share the URL with anyone
   - Automatic updates

2. **✅ Android APK**: `kerala-travel-tracker.apk`
   - Native Android app
   - Full offline support
   - Better performance
   - Share APK file with Android users

---

## 📊 What You've Accomplished

- ✅ Set up Git and GitHub
- ✅ Deployed to Vercel
- ✅ App live on web
- ✅ Installed Android development tools
- ✅ Built Android APK
- ✅ Installed app on phone

---

## 🔄 Making Updates

### Update Web App:
```bash
# Make your changes to code
git add .
git commit -m "Description of changes"
git push

# Vercel automatically deploys! ✨
```

### Update APK:
```bash
# Make your changes to code
npm run build

# Rebuild APK
build-apk.bat    # Windows
./build-apk.sh   # Mac/Linux

# Reinstall APK on phone
```

---

## 🆘 Troubleshooting

### Web App Issues:

**Build fails on Vercel:**
- Check environment variables are correct
- Test build locally: `npm run build`
- Check build logs on Vercel dashboard

**OAuth not working:**
- Verify redirect URLs in Supabase match Vercel URL

### APK Issues:

**"ANDROID_HOME not set":**
- Recheck environment variables
- Close and reopen terminal
- Verify with: `echo %ANDROID_HOME%` (Windows) or `echo $ANDROID_HOME` (Mac)

**"Licenses not accepted":**
- Run: `sdkmanager --licenses`
- Type 'y' for each license

**Build fails:**
```bash
# Clean and retry
npm install
npm run build
npx cap sync android
cd android
./gradlew clean assembleDebug
```

---

## 📞 Need Help?

- **Web Deployment**: See `DEPLOYMENT-GUIDE.md`
- **APK Build**: See `APK-BUILD-STEPS.md`
- **Quick Reference**: See `HOW-TO-BUILD-APK.txt`

---

## 🌴 Next Steps

1. **Test everything** on both web and mobile
2. **Share** your web URL with users
3. **Share** APK file with Android users
4. **Gather feedback** and iterate
5. **Monitor usage** in Supabase dashboard
6. **Plan features** for v2.0!

---

**🎉 Your Kerala Travel Tracker is now live on both web and mobile! 🎉**

**Happy tracking! 🌴**
