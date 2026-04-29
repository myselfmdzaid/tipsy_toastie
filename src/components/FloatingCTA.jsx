import { motion, AnimatePresence } from 'framer-motion';
import { Play, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden">
        <a 
          href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full flex items-center justify-center space-x-2 py-4 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]"
        >
          <Navigation size={20} />
          <span>Visit Now</span>
        </a>
      </div>

      {/* Desktop Floating Actions */}
      <AnimatePresence>
        {show && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-8 bottom-8 z-50 hidden md:flex flex-col space-y-4"
          >
            <a 
              href="https://www.instagram.com/reels/tipsy.toastie.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white flex items-center space-x-3 hover:bg-accent hover:border-accent transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-accent transition-colors">
                <Play size={20} fill="currentColor" />
              </div>
              <span className="font-bold pr-4">Watch Latest Reel</span>
            </a>

            <a 
              href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2 py-4 shadow-2xl"
            >
              <Navigation size={20} />
              <span>Visit Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCTA;
