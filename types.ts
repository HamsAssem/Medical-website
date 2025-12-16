export interface Product {
  id: number;
  name: string;
  tagline: string;
  price: number;
  imageUrl: string;
  imageUrls?: string[]; // Optional array for multiple images
  details: string;
  ingredients: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type Page = 'home' | 'product' | 'about' | 'cart' | 'wishlist' | 'checkout';