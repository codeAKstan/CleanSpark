export interface Location {
  id: string;
  name: string;
  address: string;
  status: "Open Now" | "Closed" | string;
  distance: string;
  features: string[];
  coordinates: [number, number]; // [lat, lng]
  phone?: string;
}

export const locations: Location[] = [
  {
    id: "1",
    name: "Lagos Experience Center",
    address: "12 Adeola Odeku St, Victoria Island, Lagos",
    status: "Open Now",
    distance: "2.4 km",
    features: ["EV Charging"],
    coordinates: [6.4281, 3.4219], // Approximate coordinates for Victoria Island
  },
  {
    id: "2",
    name: "Ikeja Solar Hub",
    address: "Plot 45, Isaac John St, GRA Ikeja, Lagos",
    status: "Open until 7:00 PM",
    distance: "5.1 km",
    features: ["EV Charging"],
    coordinates: [6.5760, 3.3650], // Approximate coordinates for Ikeja GRA
    phone: "+234 800 CLEANSPARK",
  },
  {
    id: "3",
    name: "Lekki Power Point",
    address: "Lekki Phase 1, Near Admiralty Way",
    status: "Closed",
    distance: "8.7 km",
    features: ["EV Charging"],
    coordinates: [6.4500, 3.4800], // Approximate coordinates for Lekki Phase 1
  },
  {
    id: "4",
    name: "Surulere Energy Lab",
    address: "National Stadium Access Rd, Surulere",
    status: "Open Now",
    distance: "11.2 km",
    features: [],
    coordinates: [6.4975, 3.3650], // Approximate coordinates for Surulere
  },
];
