/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specials from './components/Specials';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import Reviews from './components/Reviews';
import Reservations from './components/Reservations';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('little_soi_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading saved cart items', e);
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  const saveCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem('little_soi_cart', JSON.stringify(newCart));
  };

  const handleAddToCart = (item: MenuItem) => {
    const existingIndex = cartItems.findIndex((cartItem) => cartItem.menuItem.id === item.id);
    let updatedCart: CartItem[] = [];

    if (existingIndex > -1) {
      updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
    } else {
      updatedCart = [...cartItems, { menuItem: item, quantity: 1 }];
    }

    saveCart(updatedCart);
    setIsCartOpen(true); // Open the cart drawer immediately so user gets positive feedback!
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    let updatedCart: CartItem[] = [];

    if (quantity <= 0) {
      updatedCart = cartItems.filter((cartItem) => cartItem.menuItem.id !== id);
    } else {
      updatedCart = cartItems.map((cartItem) =>
        cartItem.menuItem.id === id ? { ...cartItem, quantity } : cartItem
      );
    }

    saveCart(updatedCart);
  };

  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.menuItem.id !== id);
    saveCart(updatedCart);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-charcoal-dark min-h-screen text-white font-sans scroll-smooth antialiased selection:bg-gold-400 selection:text-charcoal-dark">
      {/* 1. Premium Loader */}
      <LoadingScreen />

      {/* 2. Responsive Sticky Header Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onCartOpen={() => setIsCartOpen(true)}
      />

      {/* 3. Hero Cinematic Section */}
      <main>
        <Hero />

        {/* 4. Elegant Story / About */}
        <About />

        {/* 5. Chef Specials Highlights */}
        <Specials onAddToCart={handleAddToCart} />

        {/* 6. Comprehensive Menu Grid */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* 7. Atmosphere Masonry Gallery */}
        <GallerySection />

        {/* 8. Testimonials Review Slider */}
        <Reviews />

        {/* 9. Reservable Booking Form Engine */}
        <Reservations />

        {/* 10. Contact Info & Interactive Map */}
        <ContactSection />
      </main>

      {/* 11. Footer with Social links & hours */}
      <Footer />

      {/* 12. Slide out Tasting Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 13. Floating elements */}
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

