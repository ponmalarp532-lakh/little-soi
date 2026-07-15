import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal-dark text-white"
        >
          {/* Decorative Asian design background */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ca9f55_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="relative flex flex-col items-center text-center px-4">
            {/* Spinning decorative frame */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="w-24 h-24 border-2 border-dashed border-gold-400 rounded-full flex items-center justify-center mb-6 opacity-85"
            />

            {/* Centered Brand Text */}
            <div className="absolute top-6 flex flex-col items-center justify-center h-24">
              <span className="font-serif text-3xl font-bold tracking-widest text-gold-400">小街</span>
            </div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-serif text-4xl md:text-5xl font-bold tracking-wider text-white mb-2"
            >
              LITTLE SOI
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs md:text-sm font-sans tracking-[0.25em] text-gold-200 uppercase font-light"
            >
              Fine Pan-Asian Sanctuary
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
