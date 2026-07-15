import { motion } from 'motion/react';
import { ChevronDown, CalendarRange, UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
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
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with dark luxury overlays */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=90"
          alt="Premium Asian Dining Ambience"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_infinite_alternate]"
        />
        {/* Dark radial and linear gradients for ultimate cinematic lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,159,85,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(202,159,85,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-4 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.5em] text-gold-400 rotate-90 my-12 origin-left">
          LITTLE SOI • COIMBATORE
        </span>
        <div className="w-[1px] h-20 bg-gold-400/30" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-4 opacity-50">
        <div className="w-[1px] h-20 bg-gold-400/30" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-gold-400 -rotate-90 my-12 origin-right">
          AUTHENTIC PAN-ASIAN
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Gold Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-gold-400/30 bg-charcoal-light/60 backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-300 uppercase font-semibold">
            Upscale Pan-Asian Sanctuary
          </span>
        </motion.div>

        {/* Serif Headline with luxurious spacing */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-[1.1] mb-6"
        >
          Experience the <br />
          <span className="text-gold-gradient italic font-normal">Authentic Taste</span> of Asia
        </motion.h2>

        {/* Elegant description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-sans text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed tracking-wide mb-10"
        >
          Discover premium Thai, Japanese, Korean and Pan-Asian cuisine crafted with authentic flavors and artisanal care in the heart of Coimbatore.
        </motion.p>

        {/* CTA Buttons with high fidelity micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none"
        >
          {/* Reserve CTA */}
          <button
            id="hero-reserve-cta"
            onClick={() => handleScrollTo('reservations')}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-dark font-sans text-xs uppercase tracking-[0.2em] font-semibold rounded-xl flex items-center justify-center space-x-2.5 shadow-xl hover:shadow-gold-600/20 active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <CalendarRange className="w-4 h-4" />
            <span>Reserve a Table</span>
          </button>

          {/* Explore Menu CTA */}
          <button
            id="hero-explore-cta"
            onClick={() => handleScrollTo('menu')}
            className="w-full sm:w-auto px-8 py-4 border border-gold-400/40 bg-charcoal-light/40 hover:bg-gold-400/10 text-gold-300 font-sans text-xs uppercase tracking-[0.2em] font-semibold rounded-xl flex items-center justify-center space-x-2.5 backdrop-blur-md active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore Menu</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Smooth Bounce Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <motion.button
          id="scroll-indicator"
          onClick={() => handleScrollTo('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="p-2 rounded-full border border-gold-400/30 text-gold-400 hover:text-white hover:border-white/50 transition-colors cursor-pointer"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
