"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import { Location } from "./data";

// Fix for default marker icon
const iconUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

interface MapComponentProps {
  locations: Location[];
  selectedLocation: Location | null;
  onSelectLocation: (location: Location) => void;
}

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13, {
      duration: 1.5,
    });
  }, [center, map]);
  return null;
}

export default function MapComponent({ locations, selectedLocation, onSelectLocation }: MapComponentProps) {
  const center: [number, number] = selectedLocation 
    ? selectedLocation.coordinates 
    : [6.5244, 3.3792]; // Default to Lagos center

  return (
    <MapContainer center={center} zoom={11} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapUpdater center={center} />
      {locations.map((location) => (
        <Marker 
          key={location.id} 
          position={location.coordinates}
          eventHandlers={{
            click: () => onSelectLocation(location),
          }}
        >
          <Popup>
            <div className="p-2 min-w-[200px]">
              <h3 className="font-bold text-lg mb-1">{location.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{location.status}</p>
              {location.phone && (
                <p className="text-sm font-medium mb-2 flex items-center gap-1">
                  📞 {location.phone}
                </p>
              )}
              <button className="w-full bg-[#00D930] text-black font-bold py-2 rounded-lg hover:bg-[#00b328] transition-colors flex items-center justify-center gap-2">
                <span>◇</span> Get Directions
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
