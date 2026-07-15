import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS_DATA } from '../data';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    // Autoplay reviews slider every 6 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS_DATA[currentIndex];

  // Framer Motion slide transitions
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="reviews" className="py-24 bg-charcoal-dark overflow-hidden relative">
      {/* Background circular gradients */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-400/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-400/20 bg-charcoal-light/50 mb-4">
            <MessageSquareQuote className="w-4 h-4 text-gold-400" />
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-300 uppercase font-semibold font-medium">Guest Experiences</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
            Testimonials of <span className="text-gold-gradient italic font-normal">Delight</span>
          </h3>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Testimonial Slider Container */}
        <div className="relative w-full min-h-[300px] flex flex-col items-center justify-center p-8 rounded-3xl glass-panel overflow-hidden">
          {/* Hanging Double Quote decorative mark */}
          <div className="absolute top-6 left-8 text-gold-400/10 pointer-events-none">
            <Quote className="w-20 h-20 fill-current" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentReview.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center space-y-6 max-w-2xl relative z-10 flex flex-col items-center"
            >
              {/* Star Rating Panel */}
              <div className="flex items-center justify-center space-x-1">
                {Array.from({ length: currentReview.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Review Comment Quote */}
              <blockquote className="font-sans text-sm md:text-base text-gray-200 leading-relaxed tracking-wide italic font-light px-4">
                "{currentReview.comment}"
              </blockquote>

              {/* Customer Info Card */}
              <div className="flex items-center space-x-3.5 pt-4">
                {currentReview.image && (
                  <img
                    src={currentReview.image}
                    alt={currentReview.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-gold-400/25"
                  />
                )}
                <div className="text-left">
                  <cite className="not-italic font-serif text-sm font-semibold text-white tracking-wide">{currentReview.name}</cite>
                  <span className="block text-[10px] text-gold-400 uppercase tracking-widest mt-0.5">{currentReview.role} • {currentReview.date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls (Arrows) */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
            <button
              id="prev-review"
              onClick={handlePrev}
              className="p-2 rounded-full bg-charcoal-light/60 hover:bg-gold-400 hover:text-charcoal-dark border border-white/5 text-gold-400 pointer-events-auto cursor-pointer shadow-md transition-all duration-300 active:scale-95"
              aria-label="Previous review testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="next-review"
              onClick={handleNext}
              className="p-2 rounded-full bg-charcoal-light/60 hover:bg-gold-400 hover:text-charcoal-dark border border-white/5 text-gold-400 pointer-events-auto cursor-pointer shadow-md transition-all duration-300 active:scale-95"
              aria-label="Next review testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex space-x-2 mt-6">
          {REVIEWS_DATA.map((rev, index) => (
            <button
              key={rev.id}
              id={`dot-review-${index}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index ? 'w-6 bg-gold-400' : 'w-2 bg-gray-600'
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
