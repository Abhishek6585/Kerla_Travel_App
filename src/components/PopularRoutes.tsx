import { MapPin, Clock, Leaf, Star, Navigation, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";
import { toast } from "sonner";

interface Route {
  id: string;
  name: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  carbonFootprint: string;
  popularity: number;
  description: string;
  imageUrl: string;
  tags: string[];
}

interface PopularRoutesProps {
  onSelectRoute: (route: Route) => void;
}

export function PopularRoutes({ onSelectRoute }: PopularRoutesProps) {
  const { actualTheme } = useTheme();

  // India coordinates for Google Maps
  const indiaLocations: { [key: string]: { lat: number; lng: number } } = {
    'New Delhi': { lat: 28.6139, lng: 77.2090 },
    'Agra': { lat: 27.1767, lng: 78.0081 },
    'Jaipur': { lat: 26.9124, lng: 75.7873 },
    'Mumbai': { lat: 19.0760, lng: 72.8777 },
    'Goa': { lat: 15.2993, lng: 74.1240 },
    'Bangalore': { lat: 12.9716, lng: 77.5946 },
    'Mysore': { lat: 12.2958, lng: 76.6394 },
    'Varanasi': { lat: 25.3176, lng: 82.9739 },
    'Kolkata': { lat: 22.5726, lng: 88.3639 }
  };

  const openGoogleMaps = (route: Route) => {
    const origin = indiaLocations[route.from];
    const destination = indiaLocations[route.to];
    
    if (origin && destination) {
      // Create Google Maps URL for directions
      const mapsUrl = `https://www.google.com/maps/dir/${origin.lat},${origin.lng}/${destination.lat},${destination.lng}/@${(origin.lat + destination.lat) / 2},${(origin.lng + destination.lng) / 2},7z/data=!3m1!4b1!4m2!4m1!3e0`;
      
      // Open in new tab
      window.open(mapsUrl, '_blank');
      toast.success(`Opening ${route.name} route in Google Maps`);
    } else {
      // Fallback to text-based search
      const searchQuery = `${route.from} to ${route.to} India directions`;
      const fallbackUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;
      window.open(fallbackUrl, '_blank');
      toast.success(`Opening route search in Google Maps`);
    }
  };

  const getDirections = (route: Route) => {
    const origin = indiaLocations[route.from];
    const destination = indiaLocations[route.to];
    
    if (origin && destination) {
      // Create Google Maps directions URL
      const directionsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(route.from + ', India')}/${encodeURIComponent(route.to + ', India')}`;
      window.open(directionsUrl, '_blank');
      toast.success(`Getting directions for ${route.name}`);
    }
  };
  const popularRoutes: Route[] = [
    {
      id: '1',
      name: 'Golden Triangle Classic',
      from: 'New Delhi',
      to: 'Agra',
      distance: '233 km',
      duration: '3h 30m',
      carbonFootprint: '12.5 kg CO₂',
      popularity: 98,
      description: 'Experience the Taj Mahal and Mughal heritage',
      imageUrl: 'https://images.unsplash.com/photo-1634837058846-61aebe703780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEZWxoaSUyMEphaXB1ciUyMEluZGlhJTIwaGlnaHdheXxlbnwxfHx8fDE3NjAwMDA5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Heritage', 'Monuments', 'Popular']
    },
    {
      id: '2',
      name: 'Rajasthan Royal Route',
      from: 'Jaipur',
      to: 'Agra',
      distance: '240 km',
      duration: '4h 15m',
      carbonFootprint: '13.8 kg CO₂',
      popularity: 92,
      description: 'From Pink City palaces to the Taj Mahal',
      imageUrl: 'https://images.unsplash.com/photo-1576135872771-b3205260262f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tags: ['Royal', 'Heritage', 'Scenic']
    },
    {
      id: '3',
      name: 'Coastal Paradise',
      from: 'Mumbai',
      to: 'Goa',
      distance: '464 km',
      duration: '8h 30m',
      carbonFootprint: '35.2 kg CO₂',
      popularity: 95,
      description: 'From bustling metropolis to serene beaches',
      imageUrl: 'https://images.unsplash.com/photo-1659874817532-88fd34e6456a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tags: ['Beach', 'Coastal', 'Relaxation']
    },
    {
      id: '4',
      name: 'South India Heritage',
      from: 'Bangalore',
      to: 'Mysore',
      distance: '146 km',
      duration: '2h 45m',
      carbonFootprint: '10.1 kg CO₂',
      popularity: 88,
      description: 'Journey to the City of Palaces and royal heritage',
      imageUrl: 'https://images.unsplash.com/photo-1706517080454-316efb0f0826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tags: ['Palace', 'Culture', 'History']
    }
  ];

  const getPopularityColor = (popularity: number) => {
    if (popularity >= 90) return 'text-green-600';
    if (popularity >= 80) return 'text-blue-600';
    if (popularity >= 70) return 'text-orange-600';
    return 'text-gray-600';
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="text-center py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Popular Routes</h1>
        <p className="text-sm text-gray-600 mt-1">Discover India's most traveled paths</p>
      </div>

      <div className="space-y-4">
        {popularRoutes.map((route) => (
          <Card key={route.id} className="overflow-hidden">
            <div className="relative h-48">
              <ImageWithFallback
                src={route.imageUrl}
                alt={route.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge className={`${getPopularityColor(route.popularity)} bg-white text-current`}>
                  <Star className="w-3 h-3 mr-1" />
                  {route.popularity}%
                </Badge>
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{route.name}</CardTitle>
                  <div className="flex items-center gap-1 text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{route.from} → {route.to}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {route.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-4">{route.description}</p>
              
              <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-muted-foreground">Distance</p>
                    <p className="font-medium">{route.distance}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-muted-foreground">Duration</p>
                    <p className="font-medium">{route.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-muted-foreground">Est. CO₂</p>
                    <p className="font-medium">{route.carbonFootprint}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  onClick={() => onSelectRoute(route)}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Plan This Trip
                </Button>
                <Button 
                  onClick={() => openGoogleMaps(route)}
                  variant="outline"
                  className={`transition-all duration-200 hover:shadow-md ${
                    actualTheme === 'dark' 
                      ? 'bg-blue-900/20 border-blue-700 text-blue-300 hover:bg-blue-800/30 hover:text-blue-200 hover:border-blue-600' 
                      : 'bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100 hover:border-blue-400'
                  }`}
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  View Route
                </Button>
              </div>
              
              {/* Additional Route Actions */}
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <Button 
                    onClick={() => getDirections(route)}
                    variant="ghost"
                    size="sm"
                    className={`flex-1 text-xs transition-all duration-200 ${
                      actualTheme === 'dark' 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Get Directions
                  </Button>
                  <Button 
                    onClick={() => {
                      const shareText = `Check out this India route: ${route.name} (${route.from} → ${route.to}) - ${route.distance}, ${route.duration}`;
                      if (navigator.share) {
                        navigator.share({
                          title: route.name,
                          text: shareText,
                          url: window.location.href
                        }).then(() => {
                          toast.success("Route shared successfully!");
                        }).catch(() => {
                          navigator.clipboard.writeText(shareText);
                          toast.success("Route details copied to clipboard!");
                        });
                      } else {
                        navigator.clipboard.writeText(shareText);
                        toast.success("Route details copied to clipboard!");
                      }
                    }}
                    variant="ghost"
                    size="sm"
                    className={`flex-1 text-xs transition-all duration-200 ${
                      actualTheme === 'dark' 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    📤 Share Route
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tips Section */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-800">Route Planning Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• Check weather conditions before traveling to hill stations</li>
            <li>• Book Indian Railways tickets in advance for long-distance travel</li>
            <li>• Use metro systems for eco-friendly urban commutes</li>
            <li>• Consider overnight trains for long routes to save time and accommodation costs</li>
            <li>• Book heritage site tickets online to avoid long queues</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}