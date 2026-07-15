import { Facebook, Instagram, Music2, MapPin } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark border-t border-gold-400/10 text-gray-400 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(202,159,85,0.02)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand Intro */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex flex-col items-center justify-center w-10 h-10 border border-gold-400 rounded-lg">
                <span className="font-serif font-bold text-base text-gold-400 leading-none">小</span>
                <span className="font-serif font-bold text-[10px] text-gold-300 leading-none">街</span>
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-widest text-white block">LITTLE SOI</span>
                <span className="text-[8px] font-sans uppercase tracking-[0.3em] text-gold-400">Coimbatore</span>
              </div>
            </div>
            <p className="font-sans text-xs text-gray-500 leading-relaxed pt-2">
              Little Soi brings together premium culinary heritage, moody ambient candlelit tables, and unforgettable Pan-Asian flavor profiles. Savored by families and couples alike.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { id: 'home', label: 'Home Sanctuary' },
                { id: 'about', label: 'Our Story' },
                { id: 'menu', label: 'Tasting Menu' },
                { id: 'gallery', label: 'Visual Gallery' },
                { id: 'reviews', label: 'Guest Reviews' },
                { id: 'reservations', label: 'Book Table' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-gold-400 hover:pl-1.5 transition-all duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">Timings</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span>Monday – Sunday</span>
                <span className="text-white">12:00 PM – 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span>Lunch Slots</span>
                <span className="text-white">12:00 PM – 3:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span>Dinner Slots</span>
                <span className="text-white">6:30 PM – 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 4: Community & Socials */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">Follow Us</h4>
            <p className="text-xs text-gray-500">Stay up to date with our weekend specials, sushi workshops, and taro bubble tea upgrades.</p>
            
            {/* Social media circle icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-charcoal-light border border-white/5 text-gray-400 hover:text-white hover:bg-gold-400/10 hover:border-gold-400/25 transition-all"
                aria-label="Follow Little Soi Coimbatore on Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-charcoal-light border border-white/5 text-gray-400 hover:text-white hover:bg-gold-400/10 hover:border-gold-400/25 transition-all"
                aria-label="Follow Little Soi Coimbatore on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-charcoal-light border border-white/5 text-gray-400 hover:text-white hover:bg-gold-400/10 hover:border-gold-400/25 transition-all"
                aria-label="Follow Little Soi Coimbatore on TikTok"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center space-x-2 text-[10px] text-gold-400/70 pt-2">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Avinashi Road, Coimbatore</span>
            </div>
          </div>

        </div>

        {/* Lower Copy and Credits Row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 gap-4">
          <p>© {currentYear} Little Soi – Coimbatore. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#menu" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <span className="text-gold-400/50">Designed with passion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
