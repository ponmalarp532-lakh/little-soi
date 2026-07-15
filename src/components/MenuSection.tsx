import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Flame, ShoppingCart, Leaf } from 'lucide-react';
import { MenuItem } from '../types';
import { ALL_MENU_ITEMS, MENU_CATEGORIES } from '../data';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<typeof MENU_CATEGORIES[number]>('Thai Specials');

  const filteredItems = ALL_MENU_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-24 bg-charcoal-dark relative">
      {/* Decorative vector overlays */}
      <div className="absolute left-0 top-1/3 w-[200px] h-[400px] rounded-r-full bg-gold-400/3 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 w-[250px] h-[500px] rounded-l-full bg-asian-red/3 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-[1px] bg-gold-400" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">Gourmet Selection</span>
            <div className="w-6 h-[1px] bg-gold-400" />
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide mt-2">
            Our Pan-Asian <span className="text-gold-gradient italic font-normal">Tasting</span> Menu
          </h3>
          <p className="font-sans text-xs text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
            Every item is hand-selected and crafted with premium ingredients imported directly from Thailand, Japan, and Korea, customized for Coimbatore\'s palate.
          </p>
        </div>

        {/* Categories Tab Navigation Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex overflow-x-auto pb-4 max-w-full space-x-2 scrollbar-none no-scrollbar touch-pan-x px-4 py-2 rounded-2xl bg-charcoal-light/40 border border-white/5 backdrop-blur-md">
            {MENU_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  id={`tab-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-5 py-2.5 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold cursor-pointer whitespace-nowrap transition-all duration-300 focus:outline-none ${
                    isActive ? 'text-charcoal-dark font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {/* Sliding Golden Pill background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400 rounded-xl"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Elegant Food Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group relative bg-charcoal-light/30 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-400/20 flex flex-col justify-between h-full hover:shadow-xl hover:shadow-black/50 transition-all duration-300"
              >
                <div>
                  {/* Image Holder */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-light">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/95 via-charcoal-dark/20 to-transparent" />

                    {/* Left Badges (Spicy / Vegan) */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-10">
                      {item.isVegan && (
                        <span className="inline-flex items-center space-x-1 py-0.5 px-2 bg-green-950/80 border border-green-500/30 text-green-400 rounded-lg text-[9px] font-sans font-bold uppercase tracking-wider backdrop-blur-sm">
                          <Leaf className="w-2.5 h-2.5" />
                          <span>Vegan</span>
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="inline-flex items-center space-x-1 py-0.5 px-2 bg-red-950/80 border border-red-500/30 text-asian-red-hover rounded-lg text-[9px] font-sans font-bold uppercase tracking-wider backdrop-blur-sm">
                          {Array.from({ length: item.spicyLevel || 1 }).map((_, i) => (
                            <Flame key={i} className="w-2.5 h-2.5 fill-current" />
                          ))}
                          <span>Spicy</span>
                        </span>
                      )}
                    </div>

                    {/* Right Star Rating */}
                    <div className="absolute bottom-3 right-3 py-0.5 px-2 bg-black/85 border border-gold-400/10 text-gold-300 rounded-lg text-[9px] font-mono font-bold flex items-center space-x-1 z-10 backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                      <span>{item.rating || 4.8}</span>
                    </div>

                    {/* Top Right Chef Badge */}
                    {item.isChefSpecial && (
                      <div className="absolute top-3 right-3 py-0.5 px-2 bg-gold-400 text-charcoal-dark rounded-lg text-[8px] font-sans font-bold uppercase tracking-widest">
                        Chef\'s Special
                      </div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="p-5 space-y-2">
                    <h4 className="font-serif text-base font-semibold text-white tracking-wide group-hover:text-gold-300 transition-colors line-clamp-1">{item.name}</h4>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-2">{item.description}</p>
                  </div>
                </div>

                {/* Lower Action Row */}
                <div className="p-5 pt-0 mt-2 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="font-mono">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Investment</span>
                    <span className="text-base font-serif font-bold text-white">₹{item.price}</span>
                  </div>

                  <button
                    id={`add-menu-${item.id}`}
                    onClick={() => onAddToCart(item)}
                    className="py-2 px-3.5 bg-gradient-to-r from-gold-600/10 to-gold-400/10 hover:from-gold-600 hover:to-gold-400 text-gold-300 hover:text-charcoal-dark border border-gold-400/30 hover:border-transparent font-sans text-[10px] uppercase tracking-wider font-semibold rounded-lg flex items-center space-x-1.5 transition-all duration-300 cursor-pointer active:scale-95"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add To Cart</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
