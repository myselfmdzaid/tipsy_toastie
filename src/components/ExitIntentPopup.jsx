import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (e.clientY < 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, [hasShown]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-charcoal border border-accent/30 p-8 md:p-12 rounded-3xl max-w-lg w-full relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 blur-[80px]" />

            <button 
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading mb-4 text-accent">Leaving already?</h2>
              <p className="text-xl text-white/80 mb-8 font-body">
                You're missing the best toast in town. Don't let your feed be the only one enjoying it.
              </p>
              
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit Now
                </a>
                <button 
                  onClick={() => setShow(false)}
                  className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
