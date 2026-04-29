import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';

const videos = [
  { src: '/assets/videos/food/video1.mp4', tag: 'Signature' },
  { src: '/assets/videos/food/video2.mp4', tag: 'Cheesy' },
  { src: '/assets/videos/food/video3.mp4', tag: 'Spicy' },
  { src: '/assets/videos/food/video4.mp4', tag: 'Signature' },
  { src: '/assets/videos/food/video5.mp4', tag: 'Cheesy' },
  { src: '/assets/videos/food/video6.mp4', tag: 'Spicy' },
  { src: '/assets/videos/food/video7.mp4', tag: 'Signature' },
];

const Food = () => {
  return (
    <PageLayout 
      title="FOOD" 
      tagline="Too good to scroll past." 
      videoBanner={videos[0].src}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-3xl overflow-hidden bg-charcoal border border-white/10 group relative ${index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-[4/5]'}`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            >
              <source src={item.src} type="video/mp4" />
            </video>
            
            <div className="absolute top-6 left-6">
              <span className="px-4 py-1 rounded-full bg-accent text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                {item.tag}
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <h3 className="text-3xl font-heading tracking-wider">TASTE THE VIBE</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Food;
