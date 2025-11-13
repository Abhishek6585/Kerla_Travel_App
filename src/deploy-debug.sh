#!/bin/bash

echo "🚀 Kerala Travel Tracker - Debug Build Process"
echo "================================================"

# Check Node version
echo "📍 Node version:"
node --version

# Check npm version  
echo "📍 NPM version:"
npm --version

# Clean install dependencies
echo "📦 Installing dependencies..."
npm ci --force --silent

# Check if dependencies installed correctly
echo "📍 Checking critical dependencies:"
npm list react react-dom @supabase/supabase-js vite typescript --depth=0

# Attempt build
echo "🔨 Building application..."
npm run build

# Check if dist directory was created
if [ -d "dist" ]; then
    echo "✅ Build successful! dist directory created."
    echo "📍 Contents of dist directory:"
    ls -la dist/
    echo "📍 Size of dist directory:"
    du -sh dist/
else
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

echo "🎉 Build process completed successfully!"