# 🚀 Build APK - Quick Start Guide

## ⚡ Super Fast Build (3 Steps)

### For Windows Users:

```bash
# Step 1: Open Command Prompt in project folder
cd C:\path\to\kerala-travel-tracker

# Step 2: Run the build script
build-apk.bat

# Step 3: Get your APK
# Find: kerala-travel-tracker.apk
```

### For macOS/Linux Users:

```bash
# Step 1: Open Terminal in project folder
cd /path/to/kerala-travel-tracker

# Step 2: Run the build script
chmod +x build-apk.sh
./build-apk.sh

# Step 3: Get your APK
# Find: kerala-travel-tracker.apk
```

---

## 📋 Before You Start (First Time Only)

### Install These:

1. **Node.js** → https://nodejs.org/ (v18+)
2. **Java JDK** → https://adoptium.net/ (v11+)
3. **Android Studio** → https://developer.android.com/studio

### Setup Android:

1. Open **Android Studio**
2. Go to: **Tools** → **SDK Manager**
3. Install:
   - ✅ Android SDK Platform 34
   - ✅ Android SDK Build-Tools 34
   - ✅ Android SDK Command-line Tools

4. Set Environment Variable:
   - **Windows**: Add `ANDROID_HOME` = `C:\Users\YourName\AppData\Local\Android\Sdk`
   - **Mac/Linux**: Add to `~/.bash_profile`: `export ANDROID_HOME=$HOME/Library/Android/sdk`

5. Accept Licenses:
```bash
sdkmanager --licenses
# Type 'y' for each license
```

---

## 🎯 What You Get

After building, you'll have:

- ✅ **kerala-travel-tracker.apk** (in project root folder)
- ✅ Ready to install on any Android device
- ✅ Size: ~10-15 MB
- ✅ Works on Android 5.1+

---

## 📱 Install on Your Phone

### Method 1: USB Cable
1. Connect phone to computer
2. Copy `kerala-travel-tracker.apk` to phone
3. On phone: Open Files → Tap APK → Install

### Method 2: Cloud
1. Upload APK to Google Drive/Dropbox
2. Download on phone
3. Tap APK → Install

### Enable Installation:
- Go to: **Settings** → **Security** → Enable **"Unknown Sources"**
- Or when prompted, tap **"Settings"** and enable

---

## ❓ Troubleshooting

### "ANDROID_HOME not set"
```bash
# Windows: Add to System Environment Variables
ANDROID_HOME = C:\Users\YourName\AppData\Local\Android\Sdk

# Mac/Linux: Add to ~/.bash_profile
export ANDROID_HOME=$HOME/Library/Android/sdk
```

### "Build failed"
```bash
# Clean and rebuild
npm install
npm run build
npx cap sync android
cd android
./gradlew clean assembleDebug
```

### "Java not found"
- Install JDK 11+ from https://adoptium.net/
- Restart terminal after installation

---

## 📚 Need More Help?

- **Detailed Guide**: See `APK-BUILD-STEPS.md`
- **Full Documentation**: See `README-APK-BUILD.md`
- **Android Issues**: See troubleshooting section in full guide

---

## ✅ Quick Checklist

- [ ] Node.js installed
- [ ] Java JDK installed
- [ ] Android Studio installed
- [ ] ANDROID_HOME set
- [ ] Licenses accepted
- [ ] Ran build script
- [ ] APK created successfully
- [ ] APK installed on phone
- [ ] App works!

---

## 🎉 Success!

Your **Kerala Travel Tracker** Android app is ready!

**📱 App Info:**
- **Name**: Kerala Travel Tracker
- **Package**: com.kerala.traveltracker
- **Features**: Trip tracking, Carbon footprint, Multi-language, Dark mode

**🌴 Enjoy tracking your Kerala journeys! 🌴**
