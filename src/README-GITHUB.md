# 🌴 Kerala Travel Tracker

A comprehensive travel tracking application designed specifically for Kerala, "God's Own Country". Track your journeys, monitor carbon footprint, and get smart travel insights.

![Kerala Travel Tracker](https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=400&fit=crop)

## ✨ Features

### 🗺️ Trip Management
- Log trips with detailed information (origin, destination, coordinates, time)
- Multiple transport modes (Train, Metro, Bus, Auto, Car, Bike, Boat, Walk)
- Trip purpose categorization
- Cost tracking and frequency analysis

### 🌱 Environmental Impact
- Real-time carbon footprint calculation
- Eco-friendly travel recommendations
- Environmental impact insights

### 📊 Smart Insights
- Travel pattern analysis
- Route optimization suggestions
- Monthly and yearly statistics
- Data visualization with interactive charts

### 🔐 Authentication
- Email/Password signup & login
- Google OAuth integration
- Facebook OAuth integration
- Secure password reset with OTP

### 🌍 Multi-language Support
- English
- Hindi (हिंदी)
- Malayalam (മലയാളം)
- Tamil (தமிழ்)

### 🎨 Modern UI/UX
- Clean, intuitive mobile-first design
- Dark mode support
- Responsive layouts
- Kerala-themed color scheme

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/kerala-travel-tracker.git

# Navigate to directory
cd kerala-travel-tracker

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your Supabase credentials to .env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Run development server
npm run dev
```

Visit `http://localhost:5173` to see the app.

## 🏗️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions)
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📱 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/kerala-travel-tracker)

Or manually:

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for detailed instructions.

## 🗂️ Project Structure

```
kerala-travel-tracker/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── LandingPage.tsx # Landing page
│   ├── SignUp.tsx      # Signup form
│   ├── AddTripForm.tsx # Trip entry form
│   └── ...
├── contexts/           # React contexts
│   ├── AuthContext.tsx
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── supabase/          # Supabase edge functions
│   └── functions/
│       └── server/
├── utils/             # Utility functions
├── styles/            # Global styles
└── public/            # Static assets
```

## 🔧 Configuration

### Supabase Setup

1. Create a Supabase project
2. Run the SQL in `supabase-setup.sql`
3. Deploy edge functions:
   ```bash
   supabase functions deploy server
   ```

### OAuth Setup (Optional)

For Google/Facebook login:
1. Configure providers in Supabase Dashboard
2. Add redirect URLs
3. Update OAuth credentials

See [Authentication Documentation](./AUTHENTICATION-FIXES.md)

## 📖 Documentation

- [Deployment Guide](./DEPLOYMENT-GUIDE.md)
- [Quick Deploy](./QUICK-DEPLOY.md)
- [Authentication Setup](./AUTHENTICATION-FIXES.md)
- [Android Build Guide](./README-APK-BUILD.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ for Kerala travelers

## 🙏 Acknowledgments

- Kerala Tourism
- Supabase team
- shadcn/ui components
- All contributors

---

**Star ⭐ this repo if you find it helpful!**
