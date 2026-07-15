import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart } from 'lucide-react';
import { STATS_DATA } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal-dark overflow-hidden relative">
      {/* Decorative background visual glow */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[250px] h-[250px] rounded-full bg-asian-red/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Images Grid (Col 1-5) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Premium Chef Prep Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-gold-400/20 shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=800&q=80"
                  alt="Little Soi Culinary Preparation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>

              {/* Overlaid Floating Mini Badge */}
              <div className="absolute -bottom-6 -right-6 bg-charcoal-light border border-gold-400/30 rounded-2xl p-4 shadow-xl z-20 flex items-center space-x-3 max-w-[200px] backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center text-charcoal-dark">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] text-gray-400 uppercase tracking-widest">Est. 2018</h4>
                  <p className="font-serif text-sm font-semibold text-white">Coimbatore\'s Finest</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* About Descriptive Text (Col 6-12) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-[1px] bg-gold-400" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">Our Sacred Story</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
                Where Culinary <span className="text-gold-gradient italic font-normal">Heritage</span> <br />
                Meets Modern Artistry
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-sans text-sm text-gray-300 leading-relaxed tracking-wide"
            >
              Little Soi brings together authentic Asian flavors, elegant interiors, and unforgettable dining experiences. Every dish is prepared with premium ingredients by expert chefs to deliver the finest Pan-Asian cuisine. Formed around a passion for traditional wok-fire and precise sashimi slicing, our kitchen is a sanctuary for authentic Thai soups, exquisite sushi rolls, and simmering, rich ramen pots.
            </motion.p>

            {/* Quality Accents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-gray-400"
            >
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-charcoal-light/40 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
                <span>100% Fresh & Authentic Ingredients</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-charcoal-light/40 border border-white/5">
                <Heart className="w-5 h-5 text-asian-red shrink-0" />
                <span>Crafted with Local Love in Coimbatore</span>
              </div>
            </motion.div>

            {/* Statistics Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            >
              {STATS_DATA.map((stat) => (
                <div key={stat.id} className="glass-panel p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.03] hover:border-gold-400/30">
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-gold-400 tracking-tight">{stat.count}</h4>
                  <p className="font-sans text-[10px] text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
