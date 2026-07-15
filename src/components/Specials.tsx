import { motion } from 'motion/react';
import { Star, Flame, Award, ShoppingCart } from 'lucide-react';
import { MenuItem } from '../types';
import { CHEF_SPECIALS } from '../data';

interface SpecialsProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function Specials({ onAddToCart }: SpecialsProps) {
  return (
    <section id="specials" className="py-24 bg-charcoal-light relative">
      {/* Background design elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(202,159,85,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-400/20 bg-charcoal-dark/50 mb-4">
            <Award className="w-4 h-4 text-gold-400" />
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-300 uppercase font-semibold">House Treasures</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
            Chef\'s <span className="text-gold-gradient italic font-normal">Masterpiece</span> Specials
          </h3>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4" />
          <p className="font-sans text-xs text-gray-400 mt-4 leading-relaxed max-w-md mx-auto">
            Meticulously assembled with ultra-premium imports and years of honed knife work. These signature dishes define Little Soi\'s culinary soul.
          </p>
        </div>

        {/* 4 Premium Signature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CHEF_SPECIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-charcoal-dark rounded-2xl overflow-hidden border border-gold-400/10 hover:border-gold-400/35 shadow-xl hover:shadow-gold-400/5 flex flex-col justify-between h-full transition-all duration-300"
            >
              <div>
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-90" />

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 py-1 px-2.5 rounded-lg bg-black/75 backdrop-blur-md border border-gold-400/20 flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    <span className="font-mono text-[10px] font-bold text-white">{item.rating || 4.9}</span>
                  </div>

                  {/* Chef Special Badge */}
                  <div className="absolute top-3 left-3 py-1 px-2 rounded-lg bg-asian-red border border-asian-red-hover flex items-center space-x-1">
                    <Award className="w-3 h-3 text-white fill-current" />
                    <span className="font-sans text-[9px] font-bold text-white uppercase tracking-wider">Signature</span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5 space-y-2 flex-1">
                  <div className="flex items-center space-x-2">
                    {item.isVegan && (
                      <span className="text-[9px] font-sans font-semibold text-green-400 bg-green-950/40 border border-green-500/20 py-0.5 px-1.5 rounded uppercase">Vegan</span>
                    )}
                    {item.isSpicy && (
                      <span className="text-[9px] font-sans font-semibold text-asian-red bg-red-950/40 border border-red-500/20 py-0.5 px-1.5 rounded uppercase flex items-center space-x-0.5">
                        <Flame className="w-2.5 h-2.5 fill-current" />
                        <span>Spicy</span>
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors tracking-wide leading-snug line-clamp-1">{item.name}</h4>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3">{item.description}</p>
                </div>
              </div>

              {/* Action pricing and cart button */}
              <div className="p-5 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Investment</span>
                  <span className="font-serif text-lg font-semibold text-gold-400 tracking-tight">₹{item.price}</span>
                </div>

                <button
                  id={`add-special-${item.id}`}
                  onClick={() => onAddToCart(item)}
                  className="py-2.5 px-4 bg-charcoal-light hover:bg-gradient-to-r hover:from-gold-600 hover:to-gold-400 text-gold-400 hover:text-charcoal-dark border border-gold-400/30 hover:border-transparent font-sans text-[10px] uppercase tracking-wider font-semibold rounded-lg flex items-center space-x-2 transition-all duration-300 shadow-md cursor-pointer active:scale-95"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Add To Cart</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
