export interface Product {
  id: string;
  title: string;
  price: string;
  priceLabel?: string; // e.g., "From $49", "Quote Required"
  description: string;
  image: string;
  badges?: {
    text: string;
    color: "green" | "blue" | "orange" | "purple"; // Based on the screenshot
  }[];
  ctaText: string; // "View Details" or "Contact Sales"
}

export interface FilterOption {
  id: string;
  label: string;
  active?: boolean;
}
