import { Product, FilterOption } from "./types";

export const products: Product[] = [
  {
    id: "1",
    title: "SparkLite Lantern",
    price: "From $49",
    description: "Reliable, bright solar-powered lighting for off-grid travel, night study, or emergency backup. 12-hour battery life.",
    image: "/SparkLite-Lantern.png",
    badges: [{ text: "BEST SELLER", color: "green" }],
    ctaText: "View Details",
    rating: 4.9,
    reviewCount: 320,
    dailyYield: "N/A",
    warranty: "2 Years",
    longDescription: "The SparkLite Lantern is your reliable companion for off-grid living. Whether you need light for studying at night, navigating dark paths, or keeping your business open after sunset, this durable lantern delivers.",
    whatsIncluded: [
      "1x SparkLite Lantern",
      "1x USB Charging Cable",
      "1x User Manual"
    ],
    specs: [
      { label: "Battery Life", value: "12 Hours (Low Mode)" },
      { label: "Charging Time", value: "6 Hours (Solar)" },
      { label: "Brightness", value: "150 Lumens" },
      { label: "Water Resistance", value: "IP65" }
    ],
    gallery: [
      "/SparkLite-Lantern.png",
    ],
    reviews: [],
    faqs: [],
    howItWorks: [
       { icon: "sun", title: "Charge by Day", description: "Place in direct sunlight to charge the integrated battery." },
       { icon: "battery", title: "Store Power", description: "Efficient battery holds charge for up to 12 hours." },
       { icon: "bolt", title: "Light Up", description: "3 brightness modes for reading, working, or ambient light." },
       { icon: "chart", title: "Save Money", description: "Zero running costs. Free light from the sun." }
    ]
  },
  {
    id: "2",
    title: "EcoHome Starter Kit",
    price: "From $899",
    priceLabel: "$899.00",
    description: "Complete solar setup for small homes. Includes 2 panels, inverter, and storage to power lights, TV, and fans.",
    image: "/EcoHome.png",
    badges: [{ text: "POPULAR CHOICE", color: "blue" }],
    ctaText: "View Details",
    rating: 4.8,
    reviewCount: 124,
    dailyYield: "2.5 - 3.0 kWh",
    warranty: "10 Years",
    longDescription: "The EcoHome Starter Kit is the perfect solution for families and small businesses looking to secure their energy future. Designed specifically for the African climate, this system provides reliable, clean power for essential appliances including LED lighting, mobile charging, fans, and entertainment systems.",
    whatsIncluded: [
      "2x 250W High-Efficiency Monocrystalline Panels",
      "1x 1000W Pure Sine Wave Hybrid Inverter",
      "1x 100Ah LiFePO4 Smart Battery Storage",
      "Complete Wiring & Mounting Kit"
    ],
    specs: [
      { label: "Panel Type", value: "Monocrystalline" },
      { label: "Inverter Output", value: "230V AC, 50Hz" },
      { label: "Battery Chemistry", value: "LiFePO4 (LFP)" },
      { label: "Charge Time", value: "5-6 Hours (Full Sun)" },
      { label: "Mounting", value: "Roof or Ground Incl." }
    ],
    gallery: [
      "/EcoHome.png",
    ],
    reviews: [
      {
        id: "r1",
        author: "Kofi Osei",
        role: "Verified Buyer • Accra, Ghana",
        rating: 5,
        content: "Since installing the EcoHome kit, we haven't worried about blackouts once. My children can study at night and our fridge stays cold. Best investment for our home.",
        avatarInitials: "KO",
        avatarColor: "bg-emerald-100 text-emerald-700"
      },
      {
        id: "r2",
        author: "Amina Mohammed",
        role: "Verified Buyer • Lagos, Nigeria",
        rating: 5,
        content: "The installation was professional and quick. I love being able to track how much power we're generating on my phone. Highly recommend CleanSpark!",
        avatarInitials: "AM",
        avatarColor: "bg-blue-100 text-blue-700"
      },
      {
        id: "r3",
        author: "Jean-Luc Mobutu",
        role: "Verified Buyer • Kinshasa, DRC",
        rating: 5,
        content: "Powerful enough for our small shop. It runs our computer, printer, and fans all day. The battery lasts well into the evening rush hours.",
        avatarInitials: "JM",
        avatarColor: "bg-purple-100 text-purple-700"
      }
    ],
    faqs: [
      {
        question: "Does the kit include everything I need for installation?",
        answer: "Yes, the EcoHome Starter Kit is a plug-and-play solution. It includes panels, inverter, battery, all necessary cabling, and roof mounting brackets. Professional installation is also available and included in the price for major metropolitan areas."
      },
      {
        question: "Can I expand the system later?",
        answer: "Absolutely. The hybrid inverter is designed to handle up to double the initial battery capacity and additional solar panels can be daisy-chained if your energy needs grow."
      },
      {
        question: "How long does the battery last?",
        answer: "The LiFePO4 battery is rated for 3000+ cycles, which means it will last over 8-10 years with daily use before any significant capacity degradation."
      }
    ],
    howItWorks: [
      { icon: "sun", title: "Capture Sunlight", description: "High-performance panels convert abundant African sunlight into DC electricity even on cloudy days." },
      { icon: "battery", title: "Smart Storage", description: "Excess energy is stored in our durable lithium iron phosphate batteries for use at night or during outages." },
      { icon: "bolt", title: "Power Conversion", description: "The hybrid inverter seamlessly converts stored power to standard AC electricity for all your home appliances." },
      { icon: "chart", title: "Seamless Monitoring", description: "Track your energy production and consumption in real-time through the CleanSpark mobile app." }
    ]
  },
  {
    id: "3",
    title: "BizPower Max 50kW",
    price: "Quote Required",
    description: "Scalable energy for commercial operations. Never lose a minute of production to power outages or grid instability.",
    image: "/Bizpower.png",
    badges: [{ text: "ENTERPRISE", color: "orange" }],
    ctaText: "Contact Sales",
    rating: 5.0,
    reviewCount: 42,
    dailyYield: "200+ kWh",
    warranty: "15 Years",
    longDescription: "BizPower Max ensures your business never stops. Designed for factories, hotels, and large offices.",
    whatsIncluded: ["Consultation", "Custom Design", "Installation", "Maintenance Plan"],
    specs: [{ label: "Output", value: "50kW - 1MW" }],
    gallery: ["/business_continuity_1770199467337.png"],
    reviews: [],
    faqs: [],
    howItWorks: []
  },
  {
    id: "4",
    title: "VoltStack LFP Battery",
    price: "From $1,200",
    description: "High-efficiency Lithium Iron Phosphate storage. Long lifecycle, safe, and compatible with most hybrid inverters.",
    image: "/VoltStack.png",
    ctaText: "View Details",
    rating: 4.7,
    reviewCount: 89,
    dailyYield: "N/A",
    warranty: "10 Years",
    longDescription: "Upgrade your existing solar setup with the safest battery technology on the market.",
    whatsIncluded: ["1x VoltStack Battery", "Connection Cables"],
    specs: [{ label: "Capacity", value: "5kWh" }],
    gallery: ["/VoltStack.png"],
    reviews: [],
    faqs: [],
    howItWorks: []
  },
  {
    id: "5",
    title: "SparkGo 500W",
    price: "From $299",
    description: "Versatile portable power station for camping or small electronics. Fast solar charging and multiple output ports.",
    image: "/SparkGo.png",
    badges: [{ text: "NEW", color: "purple" }],
    ctaText: "View Details",
    rating: 4.6,
    reviewCount: 56,
    dailyYield: "N/A",
    warranty: "1 Year",
    longDescription: "Power on the go. Perfect for remote work, camping, or keeping your phone charged during blackouts.",
    whatsIncluded: ["1x SparkGo Station", "1x Solar Panel (Foldable)"],
    specs: [{ label: "Capacity", value: "500Wh" }],
    gallery: ["/SparkGo.png"],
    reviews: [],
    faqs: [],
    howItWorks: []
  },
  {
    id: "6",
    title: "AgriFlow Pump Kit",
    price: "From $1,450",
    description: "Solar-powered water pumping for sustainable irrigation. Reduce fuel costs and increase crop yield reliably.",
    image: "/AgriFlow.png",
    ctaText: "View Details",
    rating: 4.9,
    reviewCount: 210,
    dailyYield: "10,000L / Day",
    warranty: "5 Years",
    longDescription: "Farming made easier. No more diesel costs. Just reliable water flow when your crops need it most.",
    whatsIncluded: ["1x Submersible Pump", "4x 300W Solar Panels", "Controller"],
    specs: [{ label: "Flow Rate", value: "2000 L/h" }],
    gallery: ["/AgriFlow.png"],
    reviews: [],
    faqs: [],
    howItWorks: []
  },
  {
    id: "7",
    title: "HomePlus Max",
    price: "From $199",
    description: "Powerful solar lighting and laptop charging, battery chargeable by solar or grid power.",
    image: "/HomePlus_max.png",
    ctaText: "View Details",
    rating: 4.8,
    reviewCount: 45,
    dailyYield: "N/A",
    warranty: "2 Years",
    longDescription: "The HomePlus Max is designed for power users who need to keep laptops and larger devices charged. Includes multiple light points and robust battery capacity.",
    whatsIncluded: ["1x HomePlus Max Unit", "2x LED Bulbs", "1x Solar Panel", "1x Laptop Charger"],
    specs: [{ label: "Battery", value: "120Wh" }, { label: "Ports", value: "USB-A, USB-C, DC" }],
    gallery: ["/HomePlus_max.png"],
    reviews: [],
    faqs: [],
    howItWorks: []
  },
  {
    id: "8",
    title: "Solar TV Bundle",
    price: "From $350",
    description: "Powerful solar lighting and a solar powered 24'' HD TV bundle.",
    image: "/tv.png",
    badges: [{ text: "ENTERTAINMENT", color: "blue" }],
    ctaText: "View Details",
    rating: 4.9,
    reviewCount: 78,
    dailyYield: "N/A",
    warranty: "2 Years",
    longDescription: "Bring entertainment to your home with our efficient Solar TV Bundle. Watch your favorite shows without worrying about power bills.",
    whatsIncluded: ["1x 24\" HD Solar TV", "1x Solar Power Unit", "2x LED Lights", "1x Remote"],
    specs: [{ label: "TV Size", value: "24 Inch" }, { label: "Resolution", value: "HD Ready" }],
    gallery: ["/tv.png"],
    reviews: [],
    faqs: [],
    howItWorks: []
  },
  {
    id: "9",
    title: "18\" Solar Fan",
    price: "From $120",
    description: "Lightweight and portable solar fan with standalone solar panel and robust battery.",
    image: "/Solar_fan.png",
    ctaText: "View Details",
    rating: 4.7,
    reviewCount: 112,
    dailyYield: "N/A",
    warranty: "1 Year",
    longDescription: "Beat the heat with our powerful 18-inch solar fan. Rechargeable battery ensures cool air even after sunset.",
    whatsIncluded: ["1x 18\" Fan", "1x Solar Panel", "1x AC Adapter"],
    specs: [{ label: "Fan Size", value: "18 Inch" }, { label: "Speeds", value: "3 Levels" }],
    gallery: ["/Solar_fan.png"],
    reviews: [],
    faqs: [],
    howItWorks: []
  },
  {
    id: "10",
    title: "Max + 32\" TV + Fan",
    price: "From $550",
    description: "Our complete premium package for ultimate comfort and entertainment.",
    image: "/32tv.png",
    badges: [{ text: "PREMIUM", color: "purple" }],
    ctaText: "View Details",
    rating: 5.0,
    reviewCount: 34,
    dailyYield: "N/A",
    warranty: "3 Years",
    longDescription: "The ultimate home upgrade. Get lighting, cooling, and entertainment in one powerful, energy-efficient package.",
    whatsIncluded: ["1x 32\" Smart TV", "1x 18\" Stand Fan", "1x High-Capacity Power Unit", "4x LED Lights"],
    specs: [{ label: "TV", value: "32\" Smart" }, { label: "Fan", value: "Rechargeable" }],
    gallery: ["/32tv.png", "/fan.png"],
    reviews: [],
    faqs: [],
    howItWorks: []
  },
];

export const filterOptions: FilterOption[] = [
  { id: "all", label: "All Products", active: true },
  { id: "portable", label: "Portable Power", active: false },
  { id: "residential", label: "Residential Systems", active: false },
  { id: "commercial", label: "Commercial Solar", active: false },
  { id: "accessories", label: "Accessories", active: false },
];
