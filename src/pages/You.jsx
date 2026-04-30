import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const videos = [
  '/assets/videos/you/video1.mp4',
  '/assets/videos/you/video2.mp4',
  '/assets/videos/you/video3.mp4',
  '/assets/videos/you/video4.mp4',
  '/assets/videos/you/video5.mp4',
];

const highlightLink = "https://www.instagram.com/stories/highlights/18105297218509052/";

const You = () => {
  return (
    <PageLayout 
      title="YOU" 
      tagline="Real people. Real reactions." 
      videoBanner={videos[0]}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading mb-4 text-shadow-lg">Moments that made us</h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl overflow-hidden aspect-[9/16] bg-charcoal border border-white/10 group relative"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            >
              <source src={video} type="video/mp4" />
            </video>
            
            {/* Redirect Icon */}
            <a 
              href={highlightLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent transition-all duration-300 z-10 hover:scale-110"
              title="View on Instagram"
            >
              <Instagram size={20} />
            </a>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 pointer-events-none">
              <p className="font-heading tracking-widest text-xl">#TIPSYVIBE</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default You;
