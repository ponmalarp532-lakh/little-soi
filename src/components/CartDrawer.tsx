import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST for food in India
  const serviceCharge = Math.round(subtotal * 0.05); // 5% Service Charge
  const grandTotal = subtotal + gst + serviceCharge;

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) return;

    let orderListText = '';
    cartItems.forEach((item) => {
      orderListText += `• ${item.quantity} x ${item.menuItem.name} - ₹${item.menuItem.price * item.quantity}\n`;
    });

    const message = `*LITTLE SOI COIMBATORE - PRE-ORDER REQUEST*\n` +
      `===============================\n` +
      `*Guest Name:* ${userName}\n` +
      `*Guest Phone:* ${userPhone || 'N/A'}\n\n` +
      `*Items Requested:*\n${orderListText}` +
      `===============================\n` +
      `*Subtotal:* ₹${subtotal}\n` +
      `*GST (5%):* ₹${gst}\n` +
      `*Service Charge (5%):* ₹${serviceCharge}\n` +
      `*GRAND TOTAL:* ₹${grandTotal}\n` +
      `===============================\n` +
      `Please confirm this pre-order. I will make reservation under my name! 🥢`;

    const whatsappUrl = `https://wa.me/917548811777?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Clear and close
    onClearCart();
    setUserName('');
    setUserPhone('');
    setShowCheckoutForm(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            id="cart-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-charcoal-dark border-l border-gold-400/20 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-gold-400/10 flex items-center justify-between bg-charcoal-light">
              <div className="flex items-center space-x-3 text-gold-400">
                <ShoppingBag className="w-5 h-5" />
                <h3 className="font-serif text-xl font-semibold tracking-wide text-white">Your Tasting Order</h3>
              </div>
              <button
                id="close-cart"
                onClick={onClose}
                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items Container */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 py-12">
                  <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center mb-4 bg-charcoal-light/50">
                    <ShoppingBag className="w-6 h-6 text-gray-600" />
                  </div>
                  <p className="font-sans font-medium text-gray-400 text-sm mb-1">Your selection is empty</p>
                  <p className="text-xs text-gray-600 max-w-[200px]">Add dishes from our Pan-Asian menu to begin pre-ordering.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={item.menuItem.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start space-x-4 p-3 rounded-xl bg-charcoal-light/60 border border-white/5"
                  >
                    {/* Item Image */}
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 object-cover rounded-lg border border-gold-400/10"
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-sans text-xs font-semibold text-white truncate">{item.menuItem.name}</h4>
                      <p className="text-[10px] text-gold-400 mt-0.5">₹{item.menuItem.price} each</p>

                      {/* Quantity Selectors */}
                      <div className="flex items-center space-x-3 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                          className="p-1 rounded-md bg-charcoal-light hover:bg-gold-400/20 text-gray-400 hover:text-white transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono text-white w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                          className="p-1 rounded-md bg-charcoal-light hover:bg-gold-400/20 text-gray-400 hover:text-white transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Total & Delete */}
                    <div className="flex flex-col items-end justify-between h-16">
                      <span className="text-xs font-mono font-medium text-gold-300">₹{item.menuItem.price * item.quantity}</span>
                      <button
                        onClick={() => onRemoveItem(item.menuItem.id)}
                        className="p-1 rounded-md text-gray-500 hover:text-asian-red hover:bg-asian-red/10 transition-all"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-gold-400/10 bg-charcoal-light">
                {!showCheckoutForm ? (
                  <>
                    {/* Invoice Pricing */}
                    <div className="space-y-1.5 text-xs text-gray-400 mb-4 font-mono">
                      <div className="flex justify-between">
                        <span>Basket Subtotal</span>
                        <span className="text-white">₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST (5%)</span>
                        <span className="text-white">₹{gst}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service Charge (5%)</span>
                        <span className="text-white">₹{serviceCharge}</span>
                      </div>
                      <div className="h-[1px] bg-gold-400/10 my-2" />
                      <div className="flex justify-between text-sm font-sans font-semibold text-gold-400">
                        <span>Grand Total</span>
                        <span className="text-gold-300 font-mono">₹{grandTotal}</span>
                      </div>
                    </div>

                    {/* Proceed Button */}
                    <button
                      id="proceed-checkout"
                      onClick={() => setShowCheckoutForm(true)}
                      className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-dark font-sans font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 shadow-lg tracking-wider transition-all duration-300 cursor-pointer uppercase"
                    >
                      <span>Proceed to Pre-order</span>
                    </button>
                  </>
                ) : (
                  /* Checkout Form for WhatsApp Pre-order */
                  <form onSubmit={handleWhatsAppCheckout} className="space-y-3.5">
                    <h4 className="font-serif text-sm text-gold-400 font-medium border-b border-gold-400/10 pb-2">Pre-order Guest Details</h4>

                    <div>
                      <label htmlFor="checkout-name" className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">Your Name *</label>
                      <input
                        id="checkout-name"
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Karthik Raghavan"
                        className="w-full bg-charcoal-dark border border-gold-400/20 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label htmlFor="checkout-phone" className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">Phone Number (Optional)</label>
                      <input
                        id="checkout-phone"
                        type="tel"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-charcoal-dark border border-gold-400/20 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors font-sans"
                      />
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <button
                        id="back-cart"
                        type="button"
                        onClick={() => setShowCheckoutForm(false)}
                        className="flex-1 py-2.5 bg-charcoal-dark hover:bg-charcoal-light text-gray-400 hover:text-white font-sans text-xs rounded-lg border border-white/5 transition-all"
                      >
                        Back
                      </button>
                      <button
                        id="submit-whatsapp-order"
                        type="submit"
                        className="flex-2 py-2.5 bg-green-600 hover:bg-green-500 text-white font-sans font-semibold text-xs rounded-lg flex items-center justify-center space-x-2 shadow-lg tracking-wide transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send WhatsApp Order</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
