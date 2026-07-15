import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Mail, Users, Clock, Edit3, CheckCircle, Ticket, Trash2 } from 'lucide-react';
import { Reservation } from '../types';

export default function Reservations() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [specialRequest, setSpecialRequest] = useState('');
  
  const [bookings, setBookings] = useState<Reservation[]>([]);
  const [successBooking, setSuccessBooking] = useState<Reservation | null>(null);
  const [showBookingsPanel, setShowBookingsPanel] = useState(false);

  // Load existing bookings from local storage
  useEffect(() => {
    const saved = localStorage.getItem('little_soi_bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing saved bookings', e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !date || !time) return;

    // Generate reference code e.g. LS-260714-H9X
    const cleanDate = date.replace(/-/g, '').slice(2); // e.g. 260714
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 3; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const referenceNumber = `LS-${cleanDate}-${code}`;

    const newBooking: Reservation = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      phone,
      email,
      guests,
      date,
      time,
      specialRequest,
      status: 'Confirmed',
      referenceNumber,
      createdAt: new Date().toISOString()
    };

    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem('little_soi_bookings', JSON.stringify(updatedBookings));

    // Show Success Modal
    setSuccessBooking(newBooking);

    // Reset Form
    setName('');
    setPhone('');
    setEmail('');
    setGuests(2);
    setDate('');
    setTime('19:00');
    setSpecialRequest('');
  };

  const handleDeleteBooking = (id: string) => {
    const filtered = bookings.filter((b) => b.id !== id);
    setBookings(filtered);
    localStorage.setItem('little_soi_bookings', JSON.stringify(filtered));
  };

  return (
    <section id="reservations" className="py-24 bg-charcoal-dark relative">
      {/* Visual background flourishes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(143,29,29,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-[1px] bg-gold-400" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">Reserve Your Sanctuary</span>
            <div className="w-6 h-[1px] bg-gold-400" />
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide mt-2">
            Book A Tasting <span className="text-gold-gradient italic font-normal">Table</span>
          </h3>
          <p className="font-sans text-xs text-gray-400 mt-4 leading-relaxed max-w-sm mx-auto">
            Secure an intimate dining slot at Coimbatore\'s premier Pan-Asian kitchen. We highly recommend booking 24 hours in advance.
          </p>

          {/* Toggle view your bookings */}
          {bookings.length > 0 && (
            <button
              id="toggle-bookings-panel"
              onClick={() => setShowBookingsPanel(!showBookingsPanel)}
              className="mt-6 inline-flex items-center space-x-2 px-4 py-2 bg-charcoal-light/60 hover:bg-gold-400 hover:text-charcoal-dark border border-gold-400/20 text-gold-400 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-300 active:scale-95 shadow-md"
            >
              <Ticket className="w-4 h-4" />
              <span>{showBookingsPanel ? 'Show Reservation Form' : `Manage Your Bookings (${bookings.length})`}</span>
            </button>
          )}
        </div>

        {/* Dynamic Display Panel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {showBookingsPanel ? (
              /* --- Saved Bookings Panel --- */
              <motion.div
                key="saved-bookings"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl bg-charcoal-light/30 border border-gold-400/10 backdrop-blur-md space-y-6"
              >
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <h4 className="font-serif text-xl font-bold text-white tracking-wider">Your Confirmed Tables</h4>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400">{bookings.length} Tables Active</span>
                </div>

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="p-5 rounded-2xl bg-charcoal-dark border border-white/5 hover:border-gold-400/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-3">
                          <span className="font-sans text-xs uppercase tracking-wider text-white font-semibold">{booking.name}</span>
                          <span className="py-0.5 px-2 bg-green-950 text-green-400 border border-green-500/25 rounded-md text-[9px] font-bold font-mono uppercase">Confirmed</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-gray-400">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-gold-400" />{booking.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-400" />{booking.time}</span>
                          <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-gold-400" />{booking.guests} Guests</span>
                          <span className="flex items-center gap-1.5 font-mono text-[10px] text-gold-300 font-bold"><Ticket className="w-3.5 h-3.5 text-gold-400" />{booking.referenceNumber}</span>
                        </div>
                        {booking.specialRequest && (
                          <p className="text-[10px] italic text-gray-500 mt-2">"Request: {booking.specialRequest}"</p>
                        )}
                      </div>

                      <button
                        id={`cancel-booking-${booking.id}`}
                        onClick={() => handleDeleteBooking(booking.id)}
                        className="py-2 px-3 bg-asian-red/10 hover:bg-asian-red text-asian-red hover:text-white border border-asian-red/25 hover:border-transparent text-[10px] uppercase font-semibold rounded-lg flex items-center space-x-1 transition-all cursor-pointer"
                        title="Cancel Booking"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* --- Interactive Booking Form --- */
              <motion.form
                key="booking-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12 rounded-3xl bg-charcoal-light/30 border border-gold-400/10 backdrop-blur-md"
              >
                {/* Name */}
                <div className="relative">
                  <label htmlFor="booking-name" className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Guest Name *</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gold-400/60" />
                    <input
                      id="booking-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Anand Krishnan"
                      className="w-full bg-charcoal-dark border border-gold-400/25 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <label htmlFor="booking-phone" className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-gold-400/60" />
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-charcoal-dark border border-gold-400/25 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label htmlFor="booking-email" className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gold-400/60" />
                    <input
                      id="booking-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="anand@coimbatore.in"
                      className="w-full bg-charcoal-dark border border-gold-400/25 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="relative">
                  <label htmlFor="booking-guests" className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Number of Guests *</label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-3.5 w-4 h-4 text-gold-400/60" />
                    <select
                      id="booking-guests"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-charcoal-dark border border-gold-400/25 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num} className="bg-charcoal-dark text-white">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div className="relative">
                  <label htmlFor="booking-date" className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Preferred Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-gold-400/60" />
                    <input
                      id="booking-date"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-charcoal-dark border border-gold-400/25 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="relative">
                  <label htmlFor="booking-time" className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Preferred Time *</label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-gold-400/60" />
                    <select
                      id="booking-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-charcoal-dark border border-gold-400/25 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none"
                    >
                      {[
                        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
                        '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
                      ].map((t) => {
                        const hr = parseInt(t.split(':')[0]);
                        const period = hr >= 12 ? 'PM' : 'AM';
                        const displayHr = hr > 12 ? hr - 12 : hr;
                        const displayTime = `${displayHr}:${t.split(':')[1]} ${period}`;
                        return (
                          <option key={t} value={t} className="bg-charcoal-dark text-white">
                            {displayTime}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                {/* Special Request */}
                <div className="md:col-span-2 relative">
                  <label htmlFor="booking-requests" className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Special Request / Occasion</label>
                  <div className="relative">
                    <Edit3 className="absolute left-3.5 top-3.5 w-4 h-4 text-gold-400/60" />
                    <textarea
                      id="booking-requests"
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                      placeholder="e.g. Celebrating our anniversary. Requesting a quiet booth seat near the wooden panels."
                      rows={3}
                      className="w-full bg-charcoal-dark border border-gold-400/25 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="md:col-span-2 pt-4">
                  <button
                    id="submit-booking"
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-dark font-sans font-semibold text-xs rounded-xl tracking-[0.2em] shadow-lg hover:shadow-gold-600/15 cursor-pointer uppercase transition-all duration-300"
                  >
                    Confirm Table Reservation
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* --- Success Modal --- */}
        <AnimatePresence>
          {successBooking && (
            <motion.div
              id="booking-success-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            >
              <motion.div
                id="booking-success-modal"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="max-w-md w-full bg-charcoal-dark border border-gold-400/35 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative"
              >
                {/* Animated check circle */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold-400/15 border border-gold-400 flex items-center justify-center text-gold-400">
                    <CheckCircle className="w-8 h-8 fill-current text-charcoal-dark" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-gold-400 font-bold">Booking Secured</span>
                  <h4 className="font-serif text-2xl font-bold text-white tracking-wide">Reservation Confirmed!</h4>
                  <p className="text-xs text-gray-400 font-sans max-w-[280px] mx-auto leading-relaxed">
                    A table has been blocked for you under the name of <span className="text-white font-semibold">{successBooking.name}</span>.
                  </p>
                </div>

                {/* Elegant Ticket / Invoice Receipt Box */}
                <div className="p-5 rounded-2xl bg-charcoal-light/60 border border-white/5 space-y-3.5 text-xs text-left">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                    <span className="text-gray-500 uppercase font-sans text-[9px] tracking-wider">Reference Code</span>
                    <span className="font-mono font-bold text-gold-400 text-sm tracking-wider">{successBooking.referenceNumber}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2.5 text-gray-300 font-sans">
                    <div>
                      <span className="block text-[8px] text-gray-500 uppercase">Date</span>
                      <span className="font-semibold">{successBooking.date}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] text-gray-500 uppercase">Time</span>
                      <span className="font-semibold">{successBooking.time}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] text-gray-500 uppercase">Guests</span>
                      <span className="font-semibold">{successBooking.guests} People</span>
                    </div>
                    <div>
                      <span className="block text-[8px] text-gray-500 uppercase">Contact</span>
                      <span className="font-semibold truncate block max-w-[120px]">{successBooking.phone}</span>
                    </div>
                  </div>
                </div>

                <button
                  id="close-success-modal"
                  onClick={() => setSuccessBooking(null)}
                  className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-dark font-sans font-semibold text-xs rounded-xl tracking-wider uppercase cursor-pointer transition-all duration-300"
                >
                  Return To Sanctuary
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
