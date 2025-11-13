# 📱 Build Kerala Travel Tracker APK - Complete Guide

This guide will walk you through converting your Kerala Travel Tracker web app into an Android APK file.

---

## 🎯 Choose Your Method

### **Method 1: Quick Build (Recommended for Beginners)** ⚡
- Uses automated scripts
- Faster and easier
- Best for testing

### **Method 2: Android Studio (Recommended for Advanced Users)** 🛠️
- More control over build process
- Better for debugging
- Required for production releases

---

## 📋 Prerequisites (One-Time Setup)

### 1. Install Required Software

**Node.js & npm:**
- Download from: https://nodejs.org/
- Version: 18 or later
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

**Java Development Kit (JDK):**
- Download JDK 11 or later: https://adoptium.net/
- Set JAVA_HOME environment variable
- Verify installation:
  ```bash
  java -version
  ```

**Android Studio:**
- Download from: https://developer.android.com/studio
- Install with default settings
- Include Android SDK

### 2. Configure Android SDK

**After installing Android Studio:**

1. Open Android Studio
2. Go to: **Tools → SDK Manager**
3. Install these SDK packages:
   - ✅ Android SDK Platform 34 (Android 14)
   - ✅ Android SDK Build-Tools 34
   - ✅ Android SDK Command-line Tools
   - ✅ Android SDK Platform-Tools
   - ✅ Android Emulator

4. Note your Android SDK location (e.g., `C:\Users\YourName\AppData\Local\Android\Sdk`)

### 3. Set Environment Variables

**Windows:**
1. Search for "Environment Variables" in Start Menu
2. Click "Environment Variables" button
3. Add New System Variables:
   - **ANDROID_HOME**: `C:\Users\YourName\AppData\Local\Android\Sdk`
   - **ANDROID_SDK_ROOT**: `C:\Users\YourName\AppData\Local\Android\Sdk`
4. Add to PATH:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\tools`
   - `%ANDROID_HOME%\cmdline-tools\latest\bin`

**macOS/Linux:**
Add to `~/.bash_profile` or `~/.zshrc`:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
```

Then run:
```bash
source ~/.bash_profile  # or source ~/.zshrc
```

### 4. Accept Android SDK Licenses

**Windows (Command Prompt as Administrator):**
```bash
cd %ANDROID_HOME%\cmdline-tools\latest\bin
sdkmanager --licenses
```

**macOS/Linux:**
```bash
yes | sdkmanager --licenses
```

Press 'y' and Enter for each license agreement.

---

## 🚀 Method 1: Quick Build (Automated Script)

### For Windows Users:

```bash
# 1. Navigate to your project folder
cd path\to\kerala-travel-tracker

# 2. Run the build script
build-apk.bat

# 3. Wait for completion (5-10 minutes)
# APK will be created as: kerala-travel-tracker.apk
```

### For macOS/Linux Users:

```bash
# 1. Navigate to your project folder
cd path/to/kerala-travel-tracker

# 2. Make script executable (first time only)
chmod +x build-apk.sh

# 3. Run the build script
./build-apk.sh

# 4. Wait for completion (5-10 minutes)
# APK will be created as: kerala-travel-tracker.apk
```

### What the Script Does:

1. ✅ Installs npm dependencies
2. ✅ Builds the React web app
3. ✅ Adds Android platform (if not present)
4. ✅ Syncs web assets to Android
5. ✅ Builds the APK using Gradle
6. ✅ Copies APK to root folder for easy access

---

## 🛠️ Method 2: Manual Build with Android Studio

### Step 1: Prepare the Project

```bash
# Navigate to project
cd kerala-travel-tracker

# Install dependencies
npm install

# Build the web app
npm run build
```

### Step 2: Add Android Platform (First Time Only)

```bash
# Add Capacitor Android platform
npx cap add android
```

### Step 3: Sync Web App to Android

```bash
# Sync latest build to Android
npx cap sync android
```

### Step 4: Open in Android Studio

```bash
# Open Android project in Android Studio
npx cap open android
```

Or manually:
1. Open Android Studio
2. Click "Open"
3. Navigate to: `kerala-travel-tracker/android`
4. Click "OK"

### Step 5: Build APK in Android Studio

1. Wait for Gradle sync to complete (bottom right status bar)
2. Click **Build** menu → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. Wait for build to complete (3-5 minutes)
4. Click "locate" link in notification popup

**APK Location:**
```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📥 Install APK on Android Device

### Option 1: USB Transfer

1. Connect your Android phone to computer via USB
2. Enable "File Transfer" mode on phone
3. Copy `kerala-travel-tracker.apk` to phone's Downloads folder
4. On phone, open "Files" app
5. Navigate to Downloads
6. Tap the APK file
7. Tap "Install" (may need to enable "Install from Unknown Sources")

### Option 2: Cloud Transfer

1. Upload APK to Google Drive, Dropbox, or cloud service
2. On Android phone, download the APK
3. Tap downloaded file
4. Tap "Install"

### Option 3: Direct Install via ADB

```bash
# Connect phone via USB with USB Debugging enabled
# Install APK directly
adb install kerala-travel-tracker.apk
```

### Enable Installation from Unknown Sources:

**Android 8.0+:**
1. When prompted, tap "Settings"
2. Enable "Allow from this source"

**Android 7.0 and below:**
1. Settings → Security
2. Enable "Unknown Sources"

---

## 🐛 Troubleshooting

### Issue: "ANDROID_HOME is not set"

**Fix:**
```bash
# Verify environment variables
echo %ANDROID_HOME%  # Windows
echo $ANDROID_HOME   # macOS/Linux

# If empty, set it manually (see Prerequisites section)
```

### Issue: "SDK licenses not accepted"

**Fix:**
```bash
sdkmanager --licenses
# Type 'y' for each license
```

### Issue: "Gradle build failed"

**Fix 1 - Update Gradle:**
```bash
cd android
./gradlew wrapper --gradle-version=8.4
```

**Fix 2 - Clean and Rebuild:**
```bash
cd android
./gradlew clean
./gradlew assembleDebug
```

**Fix 3 - Android Studio:**
1. Open project in Android Studio
2. File → Invalidate Caches → Invalidate and Restart
3. Build → Clean Project
4. Build → Rebuild Project

### Issue: "Command not found: gradlew"

**Fix (macOS/Linux):**
```bash
chmod +x android/gradlew
```

### Issue: "Java version mismatch"

**Fix:**
```bash
# Check Java version
java -version

# Should be JDK 11 or later
# Download from: https://adoptium.net/
```

### Issue: Build succeeds but APK not found

**Check these locations:**
- `kerala-travel-tracker.apk` (root folder)
- `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 📊 APK Details

**App Information:**
- **Name:** Kerala Travel Tracker
- **Package:** com.kerala.traveltracker
- **Version:** 1.0.0
- **Min Android:** 5.1 (API 22)
- **Target Android:** 14 (API 34)
- **Size:** ~10-15 MB (debug build)

**Permissions:**
- 📍 Location (GPS tracking)
- 📷 Camera (trip photos)
- 📁 Storage (data export)
- 🌐 Internet (Supabase sync)
- 📳 Vibration (notifications)

---

## 🔒 Production Release (Google Play Store)

### To create a production APK:

**Step 1: Generate Signing Key**
```bash
keytool -genkey -v -keystore kerala-travel.keystore -alias kerala-travel-key -keyalg RSA -keysize 2048 -validity 10000
```

Follow prompts and **SAVE YOUR PASSWORDS!**

**Step 2: Configure build.gradle**

Edit `android/app/build.gradle`:

```gradle
android {
    ...
    signingConfigs {
        release {
            storeFile file('../../kerala-travel.keystore')
            storePassword 'YOUR_STORE_PASSWORD'
            keyAlias 'kerala-travel-key'
            keyPassword 'YOUR_KEY_PASSWORD'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

**Step 3: Build Release APK**
```bash
cd android
./gradlew assembleRelease
```

**Output:**
```
android/app/build/outputs/apk/release/app-release.apk
```

---

## ✅ Success Checklist

- [ ] Prerequisites installed (Node.js, JDK, Android Studio)
- [ ] Environment variables set (ANDROID_HOME)
- [ ] SDK licenses accepted
- [ ] Project dependencies installed (`npm install`)
- [ ] Web app built (`npm run build`)
- [ ] Android platform added (`npx cap add android`)
- [ ] Assets synced (`npx cap sync android`)
- [ ] APK built successfully
- [ ] APK installed on device
- [ ] App launches without errors

---

## 🎯 Quick Command Reference

```bash
# Full build sequence
npm install                    # Install dependencies
npm run build                  # Build web app
npx cap add android           # Add Android (first time only)
npx cap sync android          # Sync to Android
npx cap open android          # Open in Android Studio

# Or use automated scripts
./build-apk.bat               # Windows
./build-apk.sh                # macOS/Linux

# Rebuild after changes
npm run build                 # Rebuild web app
npx cap sync android          # Sync changes
cd android && ./gradlew assembleDebug  # Build APK
```

---

## 📞 Need Help?

**Common Resources:**
- Capacitor Docs: https://capacitorjs.com/docs
- Android Studio: https://developer.android.com/studio
- Troubleshooting: See README-APK-BUILD.md

**Error Logs:**
- Check: `android/app/build/outputs/logs/`
- Run with verbose: `./gradlew assembleDebug --stacktrace`

---

## 🎉 Congratulations!

You now have a working Kerala Travel Tracker Android app!

**Next Steps:**
1. Install on your Android device
2. Test all features (login, add trips, insights)
3. Share with friends and family
4. Consider publishing to Google Play Store

**🌴 Enjoy tracking your Kerala adventures! 🌴**
