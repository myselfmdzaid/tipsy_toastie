import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Maximize2, X, Download, Eye } from 'lucide-react';

const assets = [
  { id: 1, type: 'image', src: '/assets/images/posts/image1.jpg' },
  { id: 2, type: 'video', src: '/assets/images/posts/video1.mp4' },
  { id: 3, type: 'image', src: '/assets/images/posts/image2.jpg' },
  { id: 4, type: 'image', src: '/assets/images/posts/image3.jpg' },
  { id: 5, type: 'video', src: '/assets/images/posts/video2.mp4' },
  { id: 6, type: 'image', src: '/assets/images/posts/image4.jpg' },
  { id: 7, type: 'image', src: '/assets/images/posts/image5.jpg' },
  { id: 8, type: 'video', src: '/assets/images/posts/video3.mp4' },
  { id: 9, type: 'image', src: '/assets/images/posts/image6.jpg' },
  { id: 10, type: 'image', src: '/assets/images/posts/image7.jpg' },
  { id: 11, type: 'video', src: '/assets/images/posts/video4.mp4' },
  { id: 12, type: 'image', src: '/assets/images/posts/image8.jpg' },
  { id: 13, type: 'image', src: '/assets/images/posts/image9.jpg' },
  { id: 14, type: 'video', src: '/assets/images/posts/video5.mp4' },
  { id: 15, type: 'image', src: '/assets/images/posts/image10.jpg' },
  { id: 16, type: 'image', src: '/assets/images/posts/image11.jpg' },
  { id: 17, type: 'image', src: '/assets/images/posts/image12.jpg' },
  { id: 18, type: 'image', src: '/assets/images/posts/image13.jpg' },
];

const MasonryGrid = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading mb-4 text-shadow-lg">Seen on your feed</h2>
          <p className="text-xl text-white/60 font-accent tracking-widest italic text-shadow-lg">Now experience it live</p>
        </div>

        <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {assets.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden bg-black/20 border border-white/5"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt="" 
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110" 
                />
              ) : (
                <div className="relative aspect-[9/16]">
                  <video
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onMouseOver={(e) => e.target.play()}
                    onMouseOut={(e) => e.target.pause()}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full">
                    <Maximize2 size={16} className="text-white" />
                  </div>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="text-white text-center p-4">
                  <Eye className="mx-auto mb-2" size={32} />
                  <span className="font-heading tracking-widest">VIEW VIBE</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
            >
              <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white/60 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <div className="w-full h-full overflow-hidden rounded-3xl bg-charcoal flex items-center justify-center">
                {selectedMedia.type === 'image' ? (
                  <img src={selectedMedia.src} alt="" className="max-w-full max-h-[80vh] object-contain" />
                ) : (
                  <video controls autoPlay className="max-w-full max-h-[80vh]">
                    <source src={selectedMedia.src} type="video/mp4" />
                  </video>
                )}
              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex space-x-6">
                <button className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors font-heading tracking-widest">
                  <Eye size={20} />
                  <span>VIEW FULL</span>
                </button>
                <a 
                  href={selectedMedia.src} 
                  download 
                  className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors font-heading tracking-widest"
                >
                  <Download size={20} />
                  <span>DOWNLOAD</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MasonryGrid;
