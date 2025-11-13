import { useState } from "react";
import { MapPin, Calendar, Car, Plus, Users, DollarSign, Clock, Target, Hash } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { ScrollArea } from "./ui/scroll-area";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface AddTripFormProps {
  onAddTrip: (trip: any) => void;
  onClose: () => void;
}

export function AddTripForm({ onAddTrip, onClose }: AddTripFormProps) {
  const { t } = useLanguage();
  const { actualTheme } = useTheme();
  const [formData, setFormData] = useState({
    tripNumber: "",
    origin: "",
    originLat: "",
    originLong: "",
    startTime: "",
    destination: "",
    destinationLat: "",
    destinationLong: "",
    endTime: "",
    date: "",
    mode: "",
    distance: "",
    purpose: "",
    companions: "0",
    frequency: "",
    cost: "",
    notes: ""
  });

  const transportModes = [
    { value: "train", label: t.train, emoji: "🚄" },
    { value: "metro", label: t.metro, emoji: "🚇" },
    { value: "flight", label: t.flight, emoji: "✈️" },
    { value: "bus", label: t.bus, emoji: "🚌" },
    { value: "auto", label: t.auto, emoji: "🛺" },
    { value: "car", label: t.car, emoji: "🚗" },
    { value: "bike", label: t.bike, emoji: "🏍️" },
    { value: "boat", label: t.boat, emoji: "⛵" },
    { value: "walk", label: t.walk, emoji: "🚶" },
  ];

  const tripPurposes = [
    { value: "work", label: "Work/Business", emoji: "💼" },
    { value: "education", label: "Education", emoji: "🎓" },
    { value: "leisure", label: "Leisure/Tourism", emoji: "🏖️" },
    { value: "family", label: "Family Visit", emoji: "👨‍👩‍👧‍👦" },
    { value: "medical", label: "Medical", emoji: "🏥" },
    { value: "shopping", label: "Shopping", emoji: "🛍️" },
    { value: "religious", label: "Religious/Pilgrimage", emoji: "🙏" },
    { value: "other", label: "Other", emoji: "📍" },
  ];

  const frequencyOptions = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "occasional", label: "Occasional" },
    { value: "one-time", label: "One-time" },
  ];

  const popularRoutes = [
    "Kochi → Alleppey",
    "Thiruvananthapuram → Kovalam",
    "Munnar → Thekkady",
    "Kozhikode → Wayanad"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate estimated carbon footprint based on mode and distance
    const carbonPerKm = {
      train: 0.04,
      metro: 0.03,
      flight: 0.25,
      bus: 0.08,
      auto: 0.12,
      car: 0.18,
      bike: 0.09,
      boat: 0.15,
      walk: 0
    };
    
    const distance = parseFloat(formData.distance) || 0;
    const carbonFootprint = (distance * (carbonPerKm[formData.mode as keyof typeof carbonPerKm] || 0.15)).toFixed(2);
    
    const newTrip = {
      id: Date.now(),
      ...formData,
      carbonFootprint: `${carbonFootprint} kg`,
      distance: `${formData.distance} km`,
      cost: formData.cost ? `₹${formData.cost}` : "Not specified",
      status: "completed" as const,
      date: new Date(formData.date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };
    
    onAddTrip(newTrip);
    onClose();
  };

  const handleRouteSelect = (route: string) => {
    const [origin, destination] = route.split(' → ');
    setFormData(prev => ({ ...prev, origin, destination }));
  };

  return (
    <Card className={`w-full max-w-2xl mx-auto max-h-[90vh] flex flex-col ${
      actualTheme === 'dark' 
        ? 'bg-gray-800/50 border-gray-700/50' 
        : 'bg-white border-gray-200'
    }`}>
      <CardHeader className="shrink-0">
        <CardTitle className={`flex items-center gap-2 ${
          actualTheme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          <Plus className={`w-5 h-5 ${
            actualTheme === 'dark' ? 'text-green-400' : 'text-green-600'
          }`} />
          {t.addNewTrip}
        </CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {popularRoutes.map((route) => (
            <Badge 
              key={route}
              variant="outline" 
              className={`cursor-pointer transition-colors ${
                actualTheme === 'dark'
                  ? 'border-gray-600 text-gray-300 hover:bg-green-900/30 hover:border-green-600 hover:text-green-300'
                  : 'hover:bg-green-50 hover:border-green-300'
              }`}
              onClick={() => handleRouteSelect(route)}
            >
              {route}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <ScrollArea className="flex-1 px-6">
        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Trip Number */}
            <div className="p-4 rounded-lg border border-dashed border-gray-300 dark:border-gray-600">
              <Label htmlFor="tripNumber" className={`flex items-center gap-2 mb-2 ${
                actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                <Hash className={`w-4 h-4 ${
                  actualTheme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                }`} />
                Trip Number (Optional)
              </Label>
              <Input
                id="tripNumber"
                type="text"
                placeholder="e.g., TRIP-001"
                value={formData.tripNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, tripNumber: e.target.value }))}
                className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
              />
            </div>

            {/* Origin Section */}
            <div className={`p-4 rounded-lg ${
              actualTheme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'
            }`}>
              <h3 className={`flex items-center gap-2 mb-3 ${
                actualTheme === 'dark' ? 'text-green-300' : 'text-green-800'
              }`}>
                <MapPin className="w-4 h-4" />
                Origin Details
              </h3>
              
              <div className="space-y-3">
                <div>
                  <Label htmlFor="origin" className={actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                    Origin Location *
                  </Label>
                  <Input
                    id="origin"
                    placeholder="e.g., New Delhi"
                    value={formData.origin}
                    onChange={(e) => setFormData(prev => ({ ...prev, origin: e.target.value }))}
                    required
                    className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="originLat" className={actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                      Latitude
                    </Label>
                    <Input
                      id="originLat"
                      type="number"
                      step="any"
                      placeholder="28.6139"
                      value={formData.originLat}
                      onChange={(e) => setFormData(prev => ({ ...prev, originLat: e.target.value }))}
                      className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
                    />
                  </div>
                  <div>
                    <Label htmlFor="originLong" className={actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                      Longitude
                    </Label>
                    <Input
                      id="originLong"
                      type="number"
                      step="any"
                      placeholder="77.2090"
                      value={formData.originLong}
                      onChange={(e) => setFormData(prev => ({ ...prev, originLong: e.target.value }))}
                      className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="startTime" className={`flex items-center gap-2 ${
                    actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    <Clock className="w-4 h-4" />
                    Start Time
                  </Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, startTime: e.target.value }))}
                    className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white' : ''}
                  />
                </div>
              </div>
            </div>

            {/* Destination Section */}
            <div className={`p-4 rounded-lg ${
              actualTheme === 'dark' ? 'bg-red-900/20' : 'bg-red-50'
            }`}>
              <h3 className={`flex items-center gap-2 mb-3 ${
                actualTheme === 'dark' ? 'text-red-300' : 'text-red-800'
              }`}>
                <MapPin className="w-4 h-4" />
                Destination Details
              </h3>
              
              <div className="space-y-3">
                <div>
                  <Label htmlFor="destination" className={actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                    Destination Location *
                  </Label>
                  <Input
                    id="destination"
                    placeholder="e.g., Agra"
                    value={formData.destination}
                    onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                    required
                    className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="destinationLat" className={actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                      Latitude
                    </Label>
                    <Input
                      id="destinationLat"
                      type="number"
                      step="any"
                      placeholder="27.1767"
                      value={formData.destinationLat}
                      onChange={(e) => setFormData(prev => ({ ...prev, destinationLat: e.target.value }))}
                      className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
                    />
                  </div>
                  <div>
                    <Label htmlFor="destinationLong" className={actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                      Longitude
                    </Label>
                    <Input
                      id="destinationLong"
                      type="number"
                      step="any"
                      placeholder="78.0081"
                      value={formData.destinationLong}
                      onChange={(e) => setFormData(prev => ({ ...prev, destinationLong: e.target.value }))}
                      className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="endTime" className={`flex items-center gap-2 ${
                    actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    <Clock className="w-4 h-4" />
                    End Time
                  </Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, endTime: e.target.value }))}
                    className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white' : ''}
                  />
                </div>
              </div>
            </div>

            {/* Trip Details */}
            <div className={`p-4 rounded-lg ${
              actualTheme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50'
            }`}>
              <h3 className={`flex items-center gap-2 mb-3 ${
                actualTheme === 'dark' ? 'text-blue-300' : 'text-blue-800'
              }`}>
                <Calendar className="w-4 h-4" />
                Trip Information
              </h3>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="date" className={actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                      Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      required
                      className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white' : ''}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="distance" className={actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                      Distance (km) *
                    </Label>
                    <Input
                      id="distance"
                      type="number"
                      step="0.1"
                      placeholder="0"
                      value={formData.distance}
                      onChange={(e) => setFormData(prev => ({ ...prev, distance: e.target.value }))}
                      required
                      className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
                    />
                  </div>
                </div>

                <div>
                  <Label className={`flex items-center gap-2 ${
                    actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    <Car className="w-4 h-4" />
                    Transport Mode *
                  </Label>
                  <Select value={formData.mode} onValueChange={(value) => setFormData(prev => ({ ...prev, mode: value }))} required>
                    <SelectTrigger className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white' : ''}>
                      <SelectValue placeholder="Select transport mode" />
                    </SelectTrigger>
                    <SelectContent className={actualTheme === 'dark' ? 'bg-gray-800 border-gray-600' : ''}>
                      {transportModes.map((mode) => (
                        <SelectItem 
                          key={mode.value} 
                          value={mode.value}
                          className={actualTheme === 'dark' ? 'text-white hover:bg-gray-700' : ''}
                        >
                          <span className="flex items-center gap-2">
                            <span>{mode.emoji}</span>
                            {mode.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className={`flex items-center gap-2 ${
                    actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    <Target className="w-4 h-4" />
                    Purpose
                  </Label>
                  <Select value={formData.purpose} onValueChange={(value) => setFormData(prev => ({ ...prev, purpose: value }))}>
                    <SelectTrigger className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white' : ''}>
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent className={actualTheme === 'dark' ? 'bg-gray-800 border-gray-600' : ''}>
                      {tripPurposes.map((purpose) => (
                        <SelectItem 
                          key={purpose.value} 
                          value={purpose.value}
                          className={actualTheme === 'dark' ? 'text-white hover:bg-gray-700' : ''}
                        >
                          <span className="flex items-center gap-2">
                            <span>{purpose.emoji}</span>
                            {purpose.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="companions" className={`flex items-center gap-2 ${
                      actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      <Users className="w-4 h-4" />
                      Companions
                    </Label>
                    <Input
                      id="companions"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={formData.companions}
                      onChange={(e) => setFormData(prev => ({ ...prev, companions: e.target.value }))}
                      className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
                    />
                  </div>

                  <div>
                    <Label htmlFor="cost" className={`flex items-center gap-2 ${
                      actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      <DollarSign className="w-4 h-4" />
                      Cost (₹)
                    </Label>
                    <Input
                      id="cost"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0"
                      value={formData.cost}
                      onChange={(e) => setFormData(prev => ({ ...prev, cost: e.target.value }))}
                      className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
                    />
                  </div>
                </div>

                <div>
                  <Label className={`flex items-center gap-2 ${
                    actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    <Clock className="w-4 h-4" />
                    Frequency
                  </Label>
                  <Select value={formData.frequency} onValueChange={(value) => setFormData(prev => ({ ...prev, frequency: value }))}>
                    <SelectTrigger className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white' : ''}>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent className={actualTheme === 'dark' ? 'bg-gray-800 border-gray-600' : ''}>
                      {frequencyOptions.map((frequency) => (
                        <SelectItem 
                          key={frequency.value} 
                          value={frequency.value}
                          className={actualTheme === 'dark' ? 'text-white hover:bg-gray-700' : ''}
                        >
                          {frequency.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes" className={actualTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                    Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Add any additional notes about this trip..."
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    rows={3}
                    className={actualTheme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400' : ''}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 sticky bottom-0 bg-white dark:bg-gray-800 pb-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose} 
                className={`flex-1 ${
                  actualTheme === 'dark' 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : ''
                }`}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className={`flex-1 ${
                  actualTheme === 'dark'
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                Add Trip
              </Button>
            </div>
          </form>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}