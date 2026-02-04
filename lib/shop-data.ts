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
  },
  {
    id: "2",
    title: "EcoHome Starter Kit",
    price: "From $899",
    description: "Complete solar setup for small homes. Includes 2 panels, inverter, and storage to power lights, TV, and fans.",
    image: "/EcoHome.png",
    badges: [{ text: "POPULAR CHOICE", color: "blue" }],
    ctaText: "View Details",
  },
  {
    id: "3",
    title: "BizPower Max 50kW",
    price: "Quote Required",
    description: "Scalable energy for commercial operations. Never lose a minute of production to power outages or grid instability.",
    image: "/Bizpower.png",
    badges: [{ text: "ENTERPRISE", color: "orange" }],
    ctaText: "Contact Sales",
  },
  {
    id: "4",
    title: "VoltStack LFP Battery",
    price: "From $1,200",
    description: "High-efficiency Lithium Iron Phosphate storage. Long lifecycle, safe, and compatible with most hybrid inverters.",
    image: "/VoltStack.png",
    ctaText: "View Details",
  },
  {
    id: "5",
    title: "SparkGo 500W",
    price: "From $299",
    description: "Versatile portable power station for camping or small electronics. Fast solar charging and multiple output ports.",
    image: "/SparkGo.png",
    badges: [{ text: "NEW", color: "purple" }],
    ctaText: "View Details",
  },
  {
    id: "6",
    title: "AgriFlow Pump Kit",
    price: "From $1,450",
    description: "Solar-powered water pumping for sustainable irrigation. Reduce fuel costs and increase crop yield reliably.",
    image: "/AgriFlow.png",
    ctaText: "View Details",
  },
];

export const filterOptions: FilterOption[] = [
  { id: "all", label: "All Products", active: true },
  { id: "portable", label: "Portable Power", active: false },
  { id: "residential", label: "Residential Systems", active: false },
  { id: "commercial", label: "Commercial Solar", active: false },
  { id: "accessories", label: "Accessories", active: false },
];
