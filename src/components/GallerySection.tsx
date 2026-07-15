import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, Compass, Image } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'interior' | 'food' | 'ambience'>('all');
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryItem | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Sanctuary' },
    { id: 'interior', label: 'Interiors' },
    { id: 'food', label: 'Artisanal Food' },
    { id: 'ambience', label: 'Dining Ambience' }
  ] as const;

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-charcoal-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-400/20 bg-charcoal-dark/50 mb-4">
            <Compass className="w-4 h-4 text-gold-400" />
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-300 uppercase font-semibold">Visual Atmosphere</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
            The Little Soi <span className="text-gold-gradient italic font-normal">Atmosphere</span>
          </h3>
          <p className="font-sans text-xs text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
            Step inside Coimbatore\'s most stunning Pan-Asian sanctuary. Enjoy the visual poetry of steaming baskets, hand-sliced salmon, and intimate candlelight.
          </p>
        </div>

        {/* Gallery Filter Tab Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1.5 rounded-xl bg-charcoal-dark/60 border border-white/5 backdrop-blur-md">
            {filterCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`tab-gallery-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-sans text-xs uppercase tracking-wider font-semibold cursor-pointer transition-all duration-300 focus:outline-none ${
                    isActive ? 'bg-gold-400 text-charcoal-dark font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid/Masonry Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveLightboxImage(item)}
                className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-charcoal-dark cursor-pointer ${item.colsSpan || 'col-span-1 row-span-1'}`}
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Text and Icons inside Hover State */}
                <div className="absolute inset-x-6 bottom-6 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-gold-400 font-semibold font-sans">{item.category}</span>
                    <h4 className="font-serif text-lg font-bold text-white tracking-wide mt-1">{item.title}</h4>
                  </div>
                  <div className="p-2.5 rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxImage && (
            <motion.div
              id="lightbox-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md"
            >
              <button
                id="close-lightbox"
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-gold-400/30 text-gold-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close image lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Content Card */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                className="max-w-5xl max-h-[80vh] flex flex-col items-center"
              >
                <img
                  src={activeLightboxImage.url}
                  alt={activeLightboxImage.title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] object-contain rounded-xl border border-gold-400/15"
                />
                
                {/* Captions */}
                <div className="text-center mt-6 space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-semibold font-sans">
                    {activeLightboxImage.category}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white tracking-wider">
                    {activeLightboxImage.title}
                  </h4>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
