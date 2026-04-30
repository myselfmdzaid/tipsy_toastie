import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const MediaModal = ({ isOpen, onClose, images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="w-full p-4 flex justify-between items-center z-20">
            <h3 className="text-xl md:text-2xl font-heading text-white tracking-widest uppercase truncate pr-4">{title}</h3>
            <button 
              onClick={onClose}
              className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300 flex-shrink-0"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Content */}
          <div className="relative w-full flex-1 flex flex-col items-center justify-center min-h-0 py-4">
            <div className="relative w-full flex flex-col items-center">
              {images.length > 1 && (
                <>
                  <button 
                    onClick={handlePrev}
                    className="absolute left-0 z-20 p-2 text-white/50 hover:text-accent transition-colors"
                  >
                    <ChevronLeft size={40} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="absolute right-0 z-20 p-2 text-white/50 hover:text-accent transition-colors"
                  >
                    <ChevronRight size={40} />
                  </button>
                </>
              )}

              <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={images[currentIndex]}
                alt={`${title} ${currentIndex + 1}`}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Modal Actions - Positioned immediately below the image */}
              <div className="mt-4 flex space-x-6">
                <a 
                  href={images[currentIndex]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/70 hover:text-accent transition-colors font-heading tracking-widest text-sm"
                >
                  <Eye size={18} />
                  <span>VIEW FULL</span>
                </a>
                <a 
                  href={images[currentIndex]} 
                  download 
                  className="flex items-center space-x-2 text-white/70 hover:text-accent transition-colors font-heading tracking-widest text-sm"
                >
                  <Download size={18} />
                  <span>DOWNLOAD</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MediaModal;
