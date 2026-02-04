export interface Review {
  id: string;
  author: string;
  role: string; // e.g. "Verified Buyer • Accra, Ghana"
  rating: number;
  content: string;
  avatarInitials: string;
  avatarColor: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface HowItWorksStep {
  icon: "sun" | "battery" | "bolt" | "chart";
  title: string;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  priceLabel?: string;
  description: string;
  image: string;
  badges?: {
    text: string;
    color: "green" | "blue" | "orange" | "purple";
  }[];
  ctaText: string;
  
  // Detailed fields
  rating?: number;
  reviewCount?: number;
  longDescription?: string;
  whatsIncluded?: string[];
  specs?: ProductSpec[];
  gallery?: string[];
  reviews?: Review[];
  faqs?: FAQ[];
  howItWorks?: HowItWorksStep[];
  dailyYield?: string;
  warranty?: string;
}

export interface FilterOption {
  id: string;
  label: string;
  active?: boolean;
}
