import { motion } from 'framer-motion';
import { MapPin, Navigation, Instagram } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-widest uppercase">
              <MapPin size={16} />
              <span>Our Location</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-heading leading-tight">
              You’ve seen it online. <br />
              <span className="text-accent">Now step into it.</span>
            </h2>
            
            <p className="text-xl text-white/60 font-body leading-relaxed max-w-lg text-shadow-lg">
              Located in the heart of Pietà, Msida Marina, Malta. 
              Find us where the lights are neon and the vibe is always right.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Navigation size={20} />
                <span>Get Directions</span>
              </a>
              <a 
                href="https://www.instagram.com/tipsy.toastie.official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Instagram size={20} />
                <span>Follow the Vibe</span>
              </a>
            </div>
          </motion.div>

          {/* Map / Visual side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-charcoal">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-[0_0_30px_rgba(255,102,0,0.5)]">
                    <MapPin size={40} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-heading mb-2">Pietà, Msida Marina</h4>
                  <p className="text-white/40 uppercase tracking-widest text-sm">Malta</p>
                </div>
              </div>
              {/* This would be an iframe for Google Maps in a real app */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
