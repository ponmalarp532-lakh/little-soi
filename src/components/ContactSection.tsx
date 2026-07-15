import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Compass, Mail, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const handleOpenMap = () => {
    // Open exact coordinates or location on Google Maps in a new tab
    const url = 'https://maps.google.com/?q=Little+Soi+Avinashi+Road+Coimbatore+Tamil+Nadu';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-[1px] bg-gold-400" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">Visit Our Sanctuary</span>
            <div className="w-6 h-[1px] bg-gold-400" />
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide mt-2">
            Location & <span className="text-gold-gradient italic font-normal">Contact</span> Details
          </h3>
          <p className="font-sans text-xs text-gray-400 mt-4 max-w-sm mx-auto leading-relaxed">
            Conveniently nestled along the prestigious Avinashi Road. Drive-in parking and executive valet services are available.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Card Information Panel (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass-panel space-y-8 flex-1 flex flex-col justify-center"
            >
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gold-400/10 text-gold-400 border border-gold-400/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">Our Address</h4>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    Door No. 605/638,<br />
                    Avinashi Road, GM Nagar,<br />
                    Pudur, Coimbatore,<br />
                    Tamil Nadu 641037
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gold-400/10 text-gold-400 border border-gold-400/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">Phone Contact</h4>
                  <a
                    href="tel:+917548811777"
                    className="font-sans text-sm font-bold text-gold-400 hover:text-gold-300 block transition-colors mt-1"
                  >
                    +91 75488 11777
                  </a>
                  <span className="block text-[10px] text-gray-500">Call for private booking arrangements</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gold-400/10 text-gold-400 border border-gold-400/20 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">Business Hours</h4>
                  <p className="font-sans text-xs text-gray-400">
                    <span className="font-semibold text-white block mt-1">12:00 PM – 11:00 PM</span>
                    Open all 7 days of the week including public holidays
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gold-400/10 text-gold-400 border border-gold-400/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">Email Inquiries</h4>
                  <a
                    href="mailto:concierge@littlesoi.in"
                    className="font-sans text-xs text-gray-400 hover:text-gold-300 transition-colors block mt-1"
                  >
                    concierge@littlesoi.in
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CTA to Open Direct Maps Link */}
            <motion.button
              id="open-map-cta"
              onClick={handleOpenMap}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full py-4 rounded-xl border border-gold-400/30 bg-charcoal-dark hover:bg-gold-400 hover:text-charcoal-dark text-gold-400 font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 shadow-lg cursor-pointer transition-all duration-300"
            >
              <span>Get Driving Directions</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Map Embed (Col 6-12) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 h-[450px] lg:h-auto rounded-2xl overflow-hidden border border-gold-400/15 shadow-2xl relative"
          >
            {/* Embedded maps iframe styled beautifully */}
            <iframe
              id="google-map-iframe"
              title="Little Soi Coimbatore Location Map"
              src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3916.3262615655513!2d77.01693761142279!3d11.014107154746465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857cb3e0ec391%3A0xe96395b0086c8f6!2sLittle%20Soi!5e0!3m2!1sen!2sin!4v1721014107123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
