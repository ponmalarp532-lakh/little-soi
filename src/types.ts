/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Thai Specials' | 'Sushi' | 'Ramen' | 'Dim Sum' | 'Rice & Noodles' | 'Bubble Tea' | 'Desserts' | 'Mocktails';
  image: string;
  isChefSpecial?: boolean;
  isVegan?: boolean;
  isSpicy?: boolean;
  rating?: number;
  spicyLevel?: 1 | 2 | 3;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
  role?: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  specialRequest?: string;
  status: 'Confirmed' | 'Pending';
  referenceNumber: string;
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'interior' | 'food' | 'ambience';
  colsSpan?: string; // Tailwind grid span
}
