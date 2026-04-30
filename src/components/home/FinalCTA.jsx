import { motion } from 'framer-motion';
import { Instagram, Navigation, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-32 bg-charcoal relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ff660022_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-heading mb-8 leading-none text-shadow-lg">
            Scrolling won’t <br />
            <span className="text-accent text-glow">give you the taste.</span>
          </h2>
          
          <p className="text-2xl md:text-3xl font-accent tracking-widest text-white/80 mb-12 text-shadow-lg">
            Now experience it in real life.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
            <Link 
              to="/menu-catering"
              className="btn-primary px-12 py-5 text-xl w-full lg:w-auto shadow-[0_0_30px_rgba(255,102,0,0.5)]"
            >
              <div className="flex items-center justify-center space-x-3">
                <Utensils size={24} />
                <span>Menu & Brochure</span>
              </div>
            </Link>

            <a 
              href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary px-12 py-5 text-xl w-full lg:w-auto"
            >
              <div className="flex items-center justify-center space-x-3">
                <Navigation size={24} />
                <span>Visit Now</span>
              </div>
            </a>
            
            <a 
              href="https://www.instagram.com/tipsy.toastie.official/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary px-12 py-5 text-xl w-full lg:w-auto"
            >
              <div className="flex items-center justify-center space-x-3">
                <Instagram size={24} />
                <span>Follow the Vibe</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.img 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        src="/assets/characters/char4.png" 
        className="absolute bottom-10 left-10 w-32 opacity-20 hidden lg:block"
        alt=""
      />
      <motion.img 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        src="/assets/characters/char5.png" 
        className="absolute top-10 right-10 w-32 opacity-20 hidden lg:block"
        alt=""
      />
    </section>
  );
};

export default FinalCTA;
