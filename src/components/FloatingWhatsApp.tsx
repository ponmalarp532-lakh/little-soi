import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show pulse notification after 4 seconds of page load to entice user
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/917548811777?text=${encodeURIComponent(
      "Hi Little Soi, Coimbatore! I would like to inquire about reservation availability and your menu options today."
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="whatsapp-panel"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mb-4 w-80 rounded-2xl overflow-hidden shadow-2xl border border-gold-400/20 glass-panel"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-charcoal-light to-black p-4 border-b border-gold-400/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center font-serif font-bold text-black">
                    LS
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-charcoal-dark rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-white text-sm">Little Soi Concierge</h4>
                  <p className="text-[10px] text-gold-300">Online • Replies in minutes</p>
                </div>
              </div>
              <button
                id="close-whatsapp"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Body */}
            <div className="p-4 bg-charcoal-dark/40 min-h-[100px] flex flex-col justify-between">
              <div className="bg-charcoal-light rounded-2xl p-3 border border-white/5 text-xs text-gray-300 leading-relaxed max-w-[90%] relative">
                <span className="font-semibold text-gold-400 block mb-1">Little Soi</span>
                Sawatdee khrap! Welcome to Little Soi Coimbatore. 🥢 How may we assist with your Pan-Asian dining experience today?
                <span className="block text-[8px] text-right text-gray-500 mt-1">19:56</span>
              </div>

              <button
                id="whatsapp-chat-button"
                onClick={handleWhatsAppRedirect}
                className="mt-4 w-full py-2.5 px-4 bg-green-600 hover:bg-green-500 text-white font-medium rounded-xl text-xs flex items-center justify-center space-x-2 shadow-lg hover:shadow-green-900/30 transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Start Chat on WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative">
        <motion.button
          id="whatsapp-toggle"
          onClick={handleOpenChat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-green-600 to-green-500 text-white shadow-xl hover:shadow-green-600/30 focus:outline-none z-50 cursor-pointer relative"
          aria-label="Contact via WhatsApp"
        >
          <MessageSquare className="h-6 w-6 fill-current" />
        </motion.button>

        {/* Pulse Notification Ring */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 -z-10 rounded-full border-4 border-green-500"
            />
          )}
        </AnimatePresence>

        {/* Small Red Unread Dot */}
        {showNotification && !isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-asian-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-asian-red border-2 border-charcoal-dark text-[8px] items-center justify-center font-bold text-white">1</span>
          </span>
        )}
      </div>
    </div>
  );
}
