import { MenuItem, Review, GalleryItem } from './types';

export const MENU_CATEGORIES = [
  'Thai Specials',
  'Sushi',
  'Ramen',
  'Dim Sum',
  'Rice & Noodles',
  'Bubble Tea',
  'Desserts',
  'Mocktails'
] as const;

export const ALL_MENU_ITEMS: MenuItem[] = [
  // --- Thai Specials ---
  {
    id: 'thai-1',
    name: 'Kaeng Khiao Wan (Green Curry)',
    description: 'Authentic rich Thai green curry with coconut milk, bamboo shoots, eggplant, fresh basil, and your choice of protein or mixed field vegetables.',
    price: 485,
    category: 'Thai Specials',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
    isVegan: true,
    isSpicy: true,
    spicyLevel: 2,
    rating: 4.8
  },
  {
    id: 'thai-2',
    name: 'Pad Thai Goong',
    description: 'The definitive Thai street food: stir-fried flat rice noodles with wild tiger prawns, firm tofu, organic bean sprouts, Chinese chives, crushed peanuts, in our secret tamarind pulp glaze.',
    price: 495,
    category: 'Thai Specials',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    rating: 4.9
  },
  {
    id: 'thai-3',
    name: 'Tom Yum Goong',
    description: 'Vibrant hot and sour lemongrass soup infused with fresh kaffir lime leaves, galangal, bird\'s eye chilies, wild prawns, and straw mushrooms.',
    price: 425,
    category: 'Thai Specials',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    isSpicy: true,
    spicyLevel: 3,
    rating: 4.7
  },

  // --- Sushi ---
  {
    id: 'sushi-1',
    name: 'Signature Rainbow Sushi Roll',
    description: 'A masterpiece roll stuffed with snow crab and cucumber, draped on the outside with fresh bluefin tuna, Norwegian salmon, yellowtail, avocado, and edible gold leaf.',
    price: 695,
    category: 'Sushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    rating: 4.9
  },
  {
    id: 'sushi-2',
    name: 'Aburi Salmon Nigiri (4 Pcs)',
    description: 'Torched Norwegian salmon over hand-formed seasoned Koshihikari rice, brushed with sweet kabayaki glaze, microgreens, and a touch of Japanese mayo.',
    price: 595,
    category: 'Sushi',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
    rating: 4.8
  },
  {
    id: 'sushi-3',
    name: 'Dragon Avocado Roll',
    description: 'Crispy prawn tempura and unagi (freshwater eel) inside, wrapped with sliced buttery avocado, drizzled with sweet eel sauce, and sprinkled with toasted sesame.',
    price: 625,
    category: 'Sushi',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },

  // --- Ramen ---
  {
    id: 'ramen-1',
    name: 'Steaming Tonkotsu Ramen',
    description: 'Rich, creamy 16-hour pork-style broth served with tender chashu, house-made noodles, soft-boiled ajitama egg, bamboo shoots, wood ear mushrooms, and toasted nori.',
    price: 545,
    category: 'Ramen',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    rating: 4.9
  },
  {
    id: 'ramen-2',
    name: 'Spicy Miso Ramen',
    description: 'Comforting miso broth infused with fermented chili paste and chili oil, topped with spiced ground chicken/pork, sweet buttered corn, scallions, and soft egg.',
    price: 525,
    category: 'Ramen',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=800&q=80',
    isSpicy: true,
    spicyLevel: 2,
    rating: 4.8
  },
  {
    id: 'ramen-3',
    name: 'Black Garlic Shoyu Ramen',
    description: 'Light soy-sauce-infused broth laced with aromatic house-made black garlic oil (mayu), served with tender chicken strips, roasted nori, and bamboo shoots.',
    price: 535,
    category: 'Ramen',
    image: 'https://images.unsplash.com/photo-1591814468924-caf7705130bd?auto=format&fit=crop&w=800&q=80',
    rating: 4.6
  },

  // --- Dim Sum ---
  {
    id: 'dimsum-1',
    name: 'Truffle Edamame Dim Sum (4 Pcs)',
    description: 'Delicate, translucent spinach-crystal skin stuffed with creamy crushed edamame paste, infused with high-grade white truffle oil.',
    price: 425,
    category: 'Dim Sum',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    isVegan: true,
    rating: 4.9
  },
  {
    id: 'dimsum-2',
    name: 'Szechuan Chili Wontons (5 Pcs)',
    description: 'Silky steamed minced chicken and shrimp wontons, served swimming in a complex, fiery, sweet-and-sour roasted Szechuan chili oil with black vinegar.',
    price: 395,
    category: 'Dim Sum',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
    isSpicy: true,
    spicyLevel: 2,
    rating: 4.8
  },
  {
    id: 'dimsum-3',
    name: 'Crystal Prawn Har Gow (4 Pcs)',
    description: 'Traditional Cantonese steamed crystal wheat starch skins enclosing plump, crunchy wild caught prawns, bamboo shoots, and sesame essence.',
    price: 445,
    category: 'Dim Sum',
    image: 'https://images.unsplash.com/photo-1496116211227-72794a9a9dff?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },

  // --- Rice & Noodles ---
  {
    id: 'rice-1',
    name: 'Wok-Tossed Jasmine Fried Rice',
    description: 'Fragrant premium jasmine rice tossed with supreme high-heat wok char (wok hei), seasoned dark soy, sweet garden peas, carrots, and fried garlic.',
    price: 365,
    category: 'Rice & Noodles',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    isVegan: true,
    rating: 4.6
  },
  {
    id: 'rice-2',
    name: 'Yaki Udon Noodles',
    description: 'Thick, chewy fresh Japanese udon noodles stir-fried with mixed capsicum, shredded cabbage, shiitake mushrooms, sweet mirin, and dark savory soy sauce.',
    price: 415,
    category: 'Rice & Noodles',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'rice-3',
    name: 'Nasi Goreng Special',
    description: 'Richly seasoned Indonesian spicy fried rice served with charcoal chicken satay skewers, crispy shrimp crackers, and a soft-edged sunny-side-up egg.',
    price: 445,
    category: 'Rice & Noodles',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    isSpicy: true,
    spicyLevel: 1,
    rating: 4.8
  },

  // --- Bubble Tea ---
  {
    id: 'bubble-1',
    name: 'Classic Brown Sugar Boba',
    description: 'Rich Assam black tea combined with creamy milk, lined with dynamic caramelized tiger stripes of dark brown sugar syrup and slow-cooked chewy tapioca pearls.',
    price: 285,
    category: 'Bubble Tea',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80',
    rating: 4.9
  },
  {
    id: 'bubble-2',
    name: 'Imperial Matcha Milk Tea',
    description: 'Ceremonial Japanese Uji Matcha powder whisked smooth, layered over premium fresh milk and sweetened with organic honey tapioca pearls.',
    price: 315,
    category: 'Bubble Tea',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    rating: 4.8
  },
  {
    id: 'bubble-3',
    name: 'Taro Velvet Milk Tea',
    description: 'Creamy, sweet purple taro root puree combined with fresh organic milk, giving beautiful lavender hues, served over sweet honey boba.',
    price: 295,
    category: 'Bubble Tea',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },

  // --- Desserts ---
  {
    id: 'dessert-1',
    name: 'Mango Sticky Rice',
    description: 'Sweet Thai glutinous rice flavored with pandan and rich coconut milk, topped with toasted mung beans, served alongside sweet sliced seasonal Alphonso mangoes.',
    price: 345,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1621841957884-1210fe19d66d?auto=format&fit=crop&w=800&q=80',
    rating: 4.8
  },
  {
    id: 'dessert-2',
    name: 'Artisanal Mochi Ice Cream',
    description: 'A delicate trio of Japanese sweet rice cakes enclosing premium gourmet ice cream centers. Flavors include ceremonial matcha, creamy coconut, and tangy passionfruit.',
    price: 325,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&w=800&q=80',
    rating: 4.8
  },
  {
    id: 'dessert-3',
    name: 'Matcha Lava Fondant',
    description: 'Rich French-style chocolate cake with a vibrant, liquid matcha-green-chocolate molten core, baked fresh and accompanied by a scoop of Madagascar vanilla gelato.',
    price: 385,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    rating: 4.9
  },

  // --- Mocktails ---
  {
    id: 'mocktail-1',
    name: 'Lychee Rose Cooler',
    description: 'An elegant glass containing sweet seedless lychee nectar, sparkling tonic water, high-grade rose water reduction, fresh mint, and crushed ice.',
    price: 245,
    category: 'Mocktails',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'mocktail-2',
    name: 'Spiced Mango Passionfruit Mojito',
    description: 'Rich mango flesh purée combined with exotic tart passionfruit pulp, fresh mint leaves, carbonated club soda, and finished with a unique red-chili-and-salt spiced rim.',
    price: 265,
    category: 'Mocktails',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
    rating: 4.8
  },
  {
    id: 'mocktail-3',
    name: 'Lemongrass Ginger Fizz',
    description: 'Hand-muddled ginger root, bruised lemongrass stalks, natural wild honey syrup, sparkling mineral water, garnished with fresh lemongrass stalk and lime wheel.',
    price: 225,
    category: 'Mocktails',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    rating: 4.6
  }
];

export const CHEF_SPECIALS = ALL_MENU_ITEMS.filter(item => item.isChefSpecial);

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Karthik Raghavan',
    rating: 5,
    comment: 'The Aburi Salmon Nigiri is to die for! Easily the best sushi in Coimbatore hands down. The dark, wooden interior design and moody, elegant lightning make it absolutely perfect for date nights.',
    date: 'July 2, 2026',
    role: 'Local Guide',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'rev-2',
    name: 'Shreya Sen',
    rating: 5,
    comment: 'I am absolutely in love with their Truffle Edamame Dim Sum. The crystal skins are perfectly translucent, the filling is rich, and that hint of premium truffle oil is pure heaven. The service is impeccable!',
    date: 'June 28, 2026',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'rev-3',
    name: 'Dr. Anand Krishnan',
    rating: 5,
    comment: 'Little Soi never disappoints. Their Tonkotsu Ramen broth is incredibly deep and complex, showing hours of meticulous cooking. The Thai Green Curry brings me straight back to my Bangkok travels. Truly authentic.',
    date: 'June 15, 2026',
    role: 'Regular Guest',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'rev-4',
    name: 'Priya Sundar',
    rating: 5,
    comment: 'Our family absolute loves the bubble tea here, especially the Classic Brown Sugar Boba. The atmosphere is upscale, cozy, and relaxed all at once. The staff went out of their way to make our daughter\'s birthday special.',
    date: 'May 30, 2026',
    role: 'Coimbatore Resident',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    title: 'The Dining Sanctuary',
    category: 'interior',
    colsSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    title: 'Master Sushi Craft',
    category: 'food',
    colsSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    title: 'Warm Wood Ambience',
    category: 'interior',
    colsSpan: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=800&q=80',
    title: 'Artisanal Preparation',
    category: 'ambience',
    colsSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    title: 'Traditional Tea Pouring',
    category: 'ambience',
    colsSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    title: 'Steam-Crafted Dumplings',
    category: 'food',
    colsSpan: 'md:col-span-1 md:row-span-1'
  }
];

export const STATS_DATA = [
  { id: 'stat-1', label: 'Happy Reviews', count: '6,200+' },
  { id: 'stat-2', label: 'Google Rating', count: '4.7★' },
  { id: 'stat-3', label: 'Signature Dishes', count: '100+' },
  { id: 'stat-4', label: 'Happy Customers', count: '10K+' }
];
