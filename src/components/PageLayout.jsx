import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';

const PageLayout = ({ title, tagline, videoBanner, children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-[80px]" // Account for fixed navbar
    >
      {/* Header Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-50"
          >
            <source src={videoBanner} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-heading mb-4 drop-shadow-[0_0_20px_rgba(255,102,0,0.3)] text-shadow-lg"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-accent tracking-widest text-accent text-shadow-lg"
          >
            {tagline}
          </motion.p>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {children}
        </div>
      </section>

      {/* End CTA */}
      <section className="py-24 bg-charcoal border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-heading mb-8">Now experience it in real life.</h2>
          <a 
            href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary px-12 py-4 text-xl inline-flex items-center space-x-3 shadow-[0_0_30px_rgba(255,102,0,0.5)]"
          >
            <Navigation size={24} />
            <span>Visit Now</span>
          </a>
        </div>
      </section>
    </motion.main>
  );
};

export default PageLayout;
