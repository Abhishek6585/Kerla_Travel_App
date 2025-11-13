import { ArrowRight, MapPin, Leaf, BarChart3, Waves } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LandingPageProps {
  onGetStarted: () => void;
  onSignUp: () => void;
}

export function LandingPage({ onGetStarted, onSignUp }: LandingPageProps) {
  const features = [
    {
      icon: <MapPin className="w-5 h-5 text-green-600" />,
      title: "Track Journeys",
      description: "Log trips across Kerala"
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-600" />,
      title: "Carbon Footprint",
      description: "Monitor environmental impact"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-green-600" />,
      title: "Smart Insights",
      description: "Personalized travel patterns"
    },
    {
      icon: <Waves className="w-5 h-5 text-green-600" />,
      title: "Kerala Routes",
      description: "Popular backwater journeys"
    }
  ];

  const stats = [
    { value: "50K+", label: "Travelers" },
    { value: "2M+", label: "Trips" },
    { value: "30%", label: "CO₂ Cut" },
    { value: "4.9★", label: "Rating" }
  ];

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Hero Section - Takes full screen */}
      <div className="flex-1 flex flex-col relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU4Nzc5MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Kerala Backwaters"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-50/90 via-green-50/95 to-white" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col px-6 py-8">
          {/* App Logo */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-3 shadow-sm">
              <span className="text-2xl">🌴</span>
              <span className="font-semibold text-green-800">Kerala Travel Tracker</span>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              God's Own Country • Your Own Journey
            </Badge>
          </div>

          {/* Main Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Track Your Kerala
              <br />
              <span className="text-green-600">Adventures</span>
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-md mx-auto">
              Discover, log, and optimize your travels across Kerala while reducing your carbon footprint
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-2.5 text-center shadow-sm">
                <p className="font-bold text-green-600 text-sm">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 bg-green-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-snug">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 mt-auto">
            <Button 
              onClick={onGetStarted}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-full font-semibold shadow-lg w-full"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="flex gap-3">
              <Button 
                onClick={onGetStarted}
                variant="outline"
                className="flex-1 bg-white/80 backdrop-blur-sm border-green-300 text-green-700 hover:bg-green-50 rounded-full"
              >
                Sign In
              </Button>
              <Button 
                onClick={onSignUp}
                variant="outline"
                className="flex-1 bg-white/80 backdrop-blur-sm border-green-300 text-green-700 hover:bg-green-50 rounded-full"
              >
                Sign Up
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 text-center">Free to use • No credit card required</p>
          </div>
        </div>
      </div>
    </div>
  );
}
