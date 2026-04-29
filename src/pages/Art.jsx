import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';

const videos = [
  '/assets/videos/art/video1.mp4',
  '/assets/videos/art/video2.mp4',
  '/assets/videos/art/video3.mp4',
  '/assets/videos/art/video4.mp4',
  '/assets/videos/art/video5.mp4',
];

const Art = () => {
  return (
    <PageLayout 
      title="ART" 
      tagline="Food as a canvas." 
      videoBanner={videos[0]}
    >
      <div className="max-w-6xl mx-auto space-y-32">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
          >
            <div className="w-full md:w-3/5 aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <span className="text-accent font-accent text-2xl">Piece No. 0{index + 1}</span>
              <h3 className="text-4xl lg:text-5xl font-heading">Sculpting Taste</h3>
              <p className="text-xl text-white/40 leading-relaxed font-body">
                We don't just assemble ingredients. We compose flavors, textures, and colors to create something that's as beautiful as it is delicious.
              </p>
              <div className="w-12 h-[1px] bg-white/20" />
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Art;
