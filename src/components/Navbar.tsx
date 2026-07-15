import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, CalendarRange } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

export default function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky black glass style
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section for active state
      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel border-x-0 border-t-0 shadow-lg'
          : 'bg-gradient-to-b from-black/80 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Calligraphy */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="flex flex-col items-center justify-center w-11 h-11 border border-gold-400 rounded-lg group-hover:bg-gold-400/10 transition-colors">
              <span className="font-serif font-bold text-lg text-gold-400 leading-none">小</span>
              <span className="font-serif font-bold text-xs text-gold-300 leading-none">街</span>
            </div>
            <div>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-white block group-hover:text-gold-300 transition-colors">
                LITTLE SOI
              </span>
              <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-gold-400/80 block">
                Coimbatore
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Desktop navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans text-xs uppercase tracking-widest font-medium transition-all relative py-2 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-gold-400 font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Utilities (Cart, Reserve, Mobile Hamburger) */}
          <div className="flex items-center space-x-4">
            
            {/* Interactive Cart Button with Badge */}
            <button
              id="nav-cart-trigger"
              onClick={onCartOpen}
              className="relative p-2.5 rounded-full border border-gold-400/20 bg-charcoal-light/40 text-gold-400 hover:bg-gold-400/10 hover:text-gold-300 transition-all cursor-pointer"
              aria-label="Open cart drawer"
            >
              <ShoppingBag className="w-5 h-5" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-asian-red text-[10px] font-mono font-bold text-white shadow-md"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* "Reserve" Action button for quick reservation booking */}
            <button
              id="nav-reserve-trigger"
              onClick={() => handleLinkClick('reservations')}
              className="hidden md:flex items-center space-x-2 py-2 px-4 border border-gold-400 bg-gradient-to-r from-gold-600/20 to-gold-400/20 text-gold-300 hover:from-gold-600 hover:to-gold-400 hover:text-charcoal-dark font-sans text-xs uppercase tracking-widest font-semibold rounded-lg shadow-md transition-all duration-300 cursor-pointer"
            >
              <CalendarRange className="w-4 h-4" />
              <span>Reserve Table</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white lg:hidden cursor-pointer"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-gold-400/10 bg-charcoal-dark overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-3 text-left font-sans text-sm uppercase tracking-widest border-b border-white/5 transition-colors ${
                    activeSection === link.id
                      ? 'text-gold-400 font-semibold pl-2 border-l-2 border-l-gold-400'
                      : 'text-gray-300 hover:text-white pl-0'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                id="mobile-reserve-btn"
                onClick={() => handleLinkClick('reservations')}
                className="mt-4 w-full py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-dark font-sans text-xs uppercase tracking-widest font-semibold rounded-xl flex items-center justify-center space-x-2"
              >
                <CalendarRange className="w-4 h-4" />
                <span>Reserve A Table</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
