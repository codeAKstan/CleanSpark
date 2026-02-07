"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Search, Map as MapIcon, List, Navigation, Zap, BatteryCharging, Clock } from "lucide-react";
import { locations, Location } from "./data";

const Map = dynamic(() => import("./MapComponent"), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">Loading Map...</div>
});

export default function StoreLocator() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(locations[1]); // Default to Ikeja Solar Hub as in screenshot
  const [viewMode, setViewMode] = useState<"map" | "list">("map"); // For mobile toggle if needed, but desktop shows both
  const [searchQuery, setSearchQuery] = useState("");
  const [radius, setRadius] = useState(25);

  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    loc.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] lg:flex-row bg-[#0A1A0F] text-white overflow-hidden">
      {/* Sidebar */}
      <div className={`w-full lg:w-[400px] flex flex-col border-r border-white/10 bg-[#0F2215] z-10 ${viewMode === 'map' ? 'hidden lg:flex' : 'flex'}`}>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Store Locator</h1>
            <p className="text-white/60 text-sm">Find your nearest solar experience center</p>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input 
              type="text" 
              placeholder="Enter city, state or zip" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00D930] transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="w-full bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl py-3 flex items-center justify-center gap-2 transition-colors font-medium">
            <Navigation className="w-4 h-4 text-[#00D930]" />
            Use My Location
          </button>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Distance Radius</span>
              <span className="text-[#00D930] font-bold">{radius} km</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="100" 
              value={radius} 
              onChange={(e) => setRadius(parseInt(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00D930]"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3 custom-scrollbar">
          {filteredLocations.map((location) => (
            <div 
              key={location.id}
              onClick={() => {
                setSelectedLocation(location);
                if (window.innerWidth < 1024) setViewMode('map');
              }}
              className={`p-4 rounded-xl cursor-pointer border transition-all ${
                selectedLocation?.id === location.id 
                  ? 'bg-white/10 border-[#00D930] ring-1 ring-[#00D930]/20' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{location.name}</h3>
                <span className="text-sm text-white/40">{location.distance}</span>
              </div>
              <p className="text-white/60 text-sm mb-3 line-clamp-2">{location.address}</p>
              
              <div className="flex flex-wrap gap-2">
                <span className={`text-xs font-bold px-2 py-1 rounded-md uppercase ${
                  location.status === "Open Now" || location.status.startsWith("Open") 
                    ? "bg-[#00D930]/20 text-[#00D930]" 
                    : "bg-red-500/20 text-red-400"
                }`}>
                  {location.status}
                </span>
                
                {location.features.includes("EV Charging") && (
                  <span className="text-xs font-bold px-2 py-1 rounded-md bg-blue-500/20 text-blue-400 flex items-center gap-1">
                    <BatteryCharging className="w-3 h-3" /> EV CHARGING
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Area */}
      <div className={`flex-1 relative bg-gray-900 ${viewMode === 'list' ? 'hidden lg:block' : 'block'}`}>
        <Map 
          locations={filteredLocations} 
          selectedLocation={selectedLocation} 
          onSelectLocation={setSelectedLocation} 
        />
        
        {/* Mobile Toggle */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-[1000]">
          <div className="bg-[#0F2215] border border-white/20 rounded-full p-1 flex shadow-lg shadow-black/50">
            <button 
              onClick={() => setViewMode('map')}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                viewMode === 'map' ? 'bg-[#00D930] text-black' : 'text-white'
              }`}
            >
              <MapIcon className="w-4 h-4" /> Map View
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                viewMode === 'list' ? 'bg-[#00D930] text-black' : 'text-white'
              }`}
            >
              <List className="w-4 h-4" /> List View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
